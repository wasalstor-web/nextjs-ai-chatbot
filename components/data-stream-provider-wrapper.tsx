"use client";

import { DataStreamProvider } from "./data-stream-provider";

export function DataStreamProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DataStreamProvider>{children}</DataStreamProvider>;
}

