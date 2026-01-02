"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageEditor } from "@/components/image-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Image as ImageIcon, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function ImagePage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "streaming" | "complete">("idle");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("يرجى إدخال وصف للصورة");
      return;
    }

    setGenerating(true);
    setStatus("streaming");
    setImageData(null);

    try {
      // Try the dedicated image generation API first
      const response = await fetch("/api/image/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          model: "grok-2-vision-1212",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (errorData.message) {
          toast.info(errorData.message);
        }
        throw new Error("فشل في إنشاء الصورة");
      }

      const data = await response.json();
      
      if (data.success && data.image) {
        // Handle different image formats
        if (typeof data.image === "string") {
          // Base64 string
          setImageData(data.image.replace(/^data:image\/[^;]+;base64,/, ""));
        } else if (data.image.base64) {
          // Object with base64 property
          setImageData(data.image.base64);
        } else if (data.image.url) {
          // URL - fetch and convert to base64
          const imgResponse = await fetch(data.image.url);
          const blob = await imgResponse.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64 = reader.result as string;
            setImageData(base64.replace(/^data:image\/[^;]+;base64,/, ""));
          };
          reader.readAsDataURL(blob);
        } else {
          throw new Error("تنسيق الصورة غير مدعوم");
        }
        setStatus("complete");
      } else {
        throw new Error(data.error || "لم يتم إنشاء الصورة");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("حدث خطأ أثناء إنشاء الصورة");
      setStatus("idle");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="border-b p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
          >
            ← العودة
          </Button>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ImageIcon className="w-6 h-6" />
            مولد الصور بالذكاء الاصطناعي
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>إنشاء صورة جديدة</CardTitle>
              <CardDescription>
                اكتب وصفاً للصورة التي تريد إنشاءها باستخدام الذكاء الاصطناعي
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="مثال: منظر طبيعي لجبال مغطاة بالثلوج عند غروب الشمس"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerate();
                    }
                  }}
                  disabled={generating}
                  className="flex-1"
                />
                <Button
                  onClick={handleGenerate}
                  disabled={generating || !prompt.trim()}
                >
                  {generating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      جاري الإنشاء...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      إنشاء
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {status === "streaming" && (
            <Card>
              <CardContent className="py-12">
                <div className="flex flex-col items-center justify-center gap-4">
                  <Loader2 className="w-12 h-12 animate-spin text-primary" />
                  <p className="text-muted-foreground">جاري إنشاء الصورة...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {imageData && status === "complete" && (
            <Card>
              <CardHeader>
                <CardTitle>الصورة المُنشأة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full flex-row items-center justify-center min-h-[400px]">
                  <picture>
                    <img
                      alt={prompt}
                      className="h-fit w-full max-w-[800px] rounded-md"
                      src={`data:image/png;base64,${imageData}`}
                    />
                  </picture>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = `data:image/png;base64,${imageData}`;
                      link.download = `image-${Date.now()}.png`;
                      link.click();
                    }}
                  >
                    تحميل الصورة
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setImageData(null);
                      setPrompt("");
                      setStatus("idle");
                    }}
                  >
                    إنشاء صورة جديدة
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

