import { streamText } from "ai";
import { NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";
import { getLanguageModel } from "@/lib/ai/providers";
import { ChatSDKError } from "@/lib/errors";

export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return new ChatSDKError("unauthorized:chat").toResponse();
    }

    const { prompt, model = "grok-2-vision-1212" } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    try {
      // Use text generation to request image creation
      // The model will respond with instructions or image data if supported
      const result = await streamText({
        model: getLanguageModel(model),
        prompt: `ارسم صورة: ${prompt}. أرجو إنشاء صورة بناءً على هذا الوصف.`,
      });

      let fullText = "";
      for await (const chunk of result.textStream) {
        fullText += chunk;
      }

      // Check if the response contains base64 image data
      const base64Match = fullText.match(/data:image\/[^;]+;base64,([A-Za-z0-9+/=]+)/);
      
      if (base64Match) {
        return NextResponse.json({
          success: true,
          image: {
            base64: base64Match[1],
          },
        });
      }

      // If no image found, return error with helpful message
      return NextResponse.json(
        {
          success: false,
          error: "Image generation not directly supported",
          message: "النموذج الحالي لا يدعم إنشاء الصور مباشرة. يرجى استخدام واجهة المحادثة واكتب: 'ارسم صورة: [وصفك]'",
        },
        { status: 501 }
      );
    } catch (error) {
      console.error("Image generation error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Image generation failed",
          message: "حدث خطأ أثناء محاولة إنشاء الصورة. يرجى المحاولة مرة أخرى أو استخدام واجهة المحادثة.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in image generation API:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

