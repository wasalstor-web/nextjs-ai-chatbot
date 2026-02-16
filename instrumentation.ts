export function register() {
  // OpenTelemetry registration - works on Vercel, optional on other platforms
  try {
    const { registerOTel } = require("@vercel/otel");
    registerOTel({ serviceName: "ai-chatbot" });
  } catch {
    // @vercel/otel not available (e.g., Cloudflare deployment) - skip telemetry
    console.log("Telemetry: @vercel/otel not available, skipping");
  }
}
