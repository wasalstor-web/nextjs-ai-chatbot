/**
 * Render client component.
 *
 * Pattern from: puckeditor/puck → recipes/next/app/[...puckPath]/client.tsx
 * Uses <Render> to display published Puck page data.
 */
"use client";

import type { Data } from "@puckeditor/core";
import { Render } from "@puckeditor/core";
import config from "@/lib/builder/puck.config";

export function RenderClient({ data }: { data: Data }) {
  return <Render config={config} data={data} />;
}
