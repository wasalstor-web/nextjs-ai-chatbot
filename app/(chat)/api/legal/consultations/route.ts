import { streamText } from "ai";
import { auth } from "@/app/(auth)/auth";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { getLanguageModel } from "@/lib/ai/providers";
import {
  addConsultationHistory,
  createConsultation,
  getConsultationsByUser,
} from "@/lib/db/legal-queries";

const LEGAL_CONSULTATION_PROMPT = `
أنت مستشار قانوني سعودي ذكي متخصص في القانون السعودي.

مسؤولياتك:
1. تقديم استشارات قانونية دقيقة وعملية
2. الاستشهاد بالقوانين والأنظمة السعودية المحددة
3. تحديد المخاطر المحتملة بوضوح
4. اقتراح خطوات قانونية واقعية
5. احترام الشريعة الإسلامية

تنسيق الرد:
- استخدم عناوين واضحة
- احذر من الأخطاء الشائعة
- قدم بدائل إن وجدت
- اذكر الأنظمة ذات الصلة بالمواد المحددة
`;

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      title,
      description,
      consultationType,
      severity,
      chatId,
      attachmentIds,
      getAIAnalysis,
    } = body;

    // Validate required fields
    if (!title || !consultationType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Create consultation
    const newConsultation = await createConsultation({
      userId: session.user.id,
      title,
      description,
      consultationType,
      severity,
      chatId,
      attachmentIds,
    });

    // Get AI analysis if requested
    if (getAIAnalysis && description) {
      try {
        let fullResponse = "";
        const result = streamText({
          model: getLanguageModel(DEFAULT_CHAT_MODEL),
          system: LEGAL_CONSULTATION_PROMPT,
          messages: [
            {
              role: "user",
              content: `استشارة قانونية جديدة:
نوع الاستشارة: ${consultationType}
الأولوية: ${severity || "عادي"}
التفاصيل: ${description}

يرجى تقديم تحليل قانوني أولي يتضمن:
1. ملخص الوضع القانوني
2. القوانين والأنظمة ذات الصلة
3. المخاطر المحتملة
4. الخطوات الموصى بها`,
            },
          ],
        });

        for await (const chunk of result.textStream) {
          fullResponse += chunk;
        }

        // Save analysis to history
        await addConsultationHistory({
          consultationId: newConsultation.id,
          aiResponse: fullResponse,
          modelUsed: "claude-opus-4-5-20251101",
          riskLevel: "متوسط",
        });
      } catch (error) {
        console.error("Error getting AI analysis:", error);
      }
    }

    return new Response(JSON.stringify(newConsultation), { status: 201 });
  } catch (error) {
    console.error("Error creating consultation:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const consultations = await getConsultationsByUser(session.user.id);
    return new Response(JSON.stringify(consultations), { status: 200 });
  } catch (error) {
    console.error("Error fetching consultations:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
