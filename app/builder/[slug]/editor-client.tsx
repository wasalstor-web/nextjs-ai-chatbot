/**
 * Editor client component.
 *
 * Pattern from: puckeditor/puck → recipes/next/app/puck/[...puckPath]/client.tsx
 * Uses <Puck> with onPublish that POSTs to our publish API.
 * Added: save draft, auto-snapshot on publish, success/error feedback.
 */
"use client";

import type { Data } from "@puckeditor/core";
import { Puck } from "@puckeditor/core";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import config from "@/lib/builder/puck.config";

interface EditorClientProps {
  slug: string;
  pageId: string;
  data: Partial<Data>;
}

export function EditorClient({ slug, pageId, data }: EditorClientProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const handlePublish = useCallback(
    async (publishData: Data) => {
      setSaving(true);
      try {
        // Save draft first
        await fetch(`/builder/api/pages/${pageId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: publishData }),
        });

        // Then publish
        const res = await fetch("/builder/api/publish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: publishData, slug, pageId }),
        });

        if (res.ok) {
          // Auto-create a snapshot on publish
          await fetch("/builder/api/snapshots", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pageId,
              label: `نشر ${new Date().toLocaleString("ar-SA")}`,
              data: publishData,
            }),
          });

          router.refresh();
        }
      } finally {
        setSaving(false);
      }
    },
    [slug, pageId, router]
  );

  return (
    <div className={saving ? "pointer-events-none opacity-80" : ""}>
      <Puck config={config} data={data} onPublish={handlePublish} />
    </div>
  );
}
