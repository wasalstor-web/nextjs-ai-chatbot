import { auth } from "@/app/(auth)/auth";

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response(
    JSON.stringify({
      error: "هذه النسخة تدعم الاستشارات القانونية فقط حالياً.",
      code: "LEGAL_CONSULTATION_ONLY",
    }),
    {
      status: 410,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
