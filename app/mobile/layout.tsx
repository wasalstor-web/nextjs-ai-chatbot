import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "مساعد ذكي - تطبيق الموبايل",
  description: "تطبيق محادثة ذكية للأجهزة المحمولة",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "مساعد ذكي",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#3B82F6",
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
