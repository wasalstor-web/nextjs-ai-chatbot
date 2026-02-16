import { redirect } from "next/navigation";
import { auth } from "@/app/(auth)/auth";
import { isAdmin } from "@/lib/auth/admin";

import "@puckeditor/core/puck.css";

export default async function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const userIsAdmin = await isAdmin();
  if (!userIsAdmin) {
    redirect("/");
  }

  return <>{children}</>;
}
