"use client";

import { CheckCircle2 } from "lucide-react";

type ToastProps = {
  message: string;
  show: boolean;
};

export function Toast({ message, show }: ToastProps) {
  if (!show) {
    return null;
  }

  return (
    <div role="status" aria-live="polite" className="fixed right-4 top-4 z-[100] flex max-w-sm items-center gap-3 rounded-lg border border-zinc-700 bg-[#111111] px-4 py-3 text-sm text-white shadow-subtle">
      <CheckCircle2 aria-hidden="true" className="h-5 w-5 flex-none text-zinc-300" />
      <span>{message}</span>
    </div>
  );
}
