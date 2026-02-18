"use client";

import { useFormStatus } from "react-dom";

import { LoaderIcon } from "@/components/icons";

import { Button } from "./ui/button";

export function SubmitButton({
  children,
  isSuccessful,
  isPending: externalPending,
}: {
  children: React.ReactNode;
  isSuccessful: boolean;
  isPending?: boolean;
}) {
  const { pending: formPending } = useFormStatus();
  const isLoading = externalPending || formPending || isSuccessful;

  return (
    <Button
      aria-disabled={isLoading}
      className="relative"
      disabled={isLoading}
      type={isLoading ? "button" : "submit"}
    >
      {children}

      {isLoading && (
        <span className="absolute right-4 animate-spin">
          <LoaderIcon />
        </span>
      )}

      <output aria-live="polite" className="sr-only">
        {isLoading ? "Loading" : "Submit form"}
      </output>
    </Button>
  );
}
