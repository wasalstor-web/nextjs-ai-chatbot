import { streamText } from "ai";
import { auth } from "@/app/(auth)/auth";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { getLanguageModel } from "@/lib/ai/providers";
import {
  createContractAnalysis,
  getGeneratedContract,
} from "@/lib/db/legal-queries";

const CONTRACT_ANALYSIS_PROMPT = `
أنت خبير قانوني سعودي متخصص في تحليل العقود والاتفاقيات.

عند تحليل أي عقد، قدم تقييماً شاملاً يتضمن:

1. **ملخص تنفيذي** - ملخص سريع للعقد والأطراف والأهداف

2. **البنود الخطيرة** - أي شروط قد تشكل خطراً على أحد الأطراف

3. **الامتثال للقانون السعودي** - هل العقد متوافق مع الأنظمة والقوانين السعودية؟

4. **الثغرات القانونية** - أي نقاط غير محمية قانونياً

5. **المخاطر المالية** - أي مخاطر مالية أو اقتصادية

6. **التوصيات** - كيفية تحسين العقد

7. **مستوى المخاطر الإجمالي** - (منخفض/متوسط/عالي/حرج)

استخدم تنسيقاً منظماً وسهل الفهم.
`;

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const body = await req.json();
    const { contractContent, contractId, templateCategory } = body;

    if (!contractContent) {
      return new Response(
        JSON.stringify({ error: "Contract content is required" }),
        { status: 400 }
      );
    }

    // Stream the analysis
    const result = streamText({
      model: getLanguageModel(DEFAULT_CHAT_MODEL),
      system: CONTRACT_ANALYSIS_PROMPT,
      messages: [
        {
          role: "user",
          content: `حلل العقد التالي${
            templateCategory ? ` (نوع: ${templateCategory})` : ""
          }:\n\n${contractContent}`,
        },
      ],
    });

    // Collect full response for database storage
    let fullAnalysis = "";
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.textStream) {
          fullAnalysis += chunk;
          controller.enqueue(`data: ${JSON.stringify({ text: chunk })}\n\n`);
        }

        // After streaming completes, save to database if contractId provided
        if (contractId && fullAnalysis) {
          try {
            const riskLevel = fullAnalysis.includes("حرج")
              ? "حرج"
              : fullAnalysis.includes("عالي")
                ? "عالي"
                : fullAnalysis.includes("متوسط")
                  ? "متوسط"
                  : "منخفض";

            await createContractAnalysis({
              generatedContractId: contractId,
              riskLevel,
              recommendations: [],
              aiModel: "claude-opus-4-5-20251101",
            });
          } catch (error) {
            console.error("Error saving analysis:", error);
          }
        }

        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error analyzing contract:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
