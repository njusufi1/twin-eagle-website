"use client";

import { useState } from "react";
import { FileUpload } from "@/components/file-upload";
import { Toast } from "@/components/toast";

type JobApplicationFormProps = {
  jobTitle: string;
};

export function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 3500);
  }

  return (
    <>
      <Toast message="Application submitted successfully." show={showToast} />
      <form onSubmit={handleSubmit} className="mt-6 rounded-lg border border-line bg-black p-5" aria-label={`Apply for ${jobTitle}`}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-zinc-200">
            Full name
            <input className="focus-ring min-h-11 rounded-md border border-line bg-[#111111] px-3 text-sm text-white" name="name" type="text" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-zinc-200">
            Email
            <input className="focus-ring min-h-11 rounded-md border border-line bg-[#111111] px-3 text-sm text-white" name="email" type="email" placeholder="you@example.com" />
          </label>
        </div>
        <FileUpload id={`resume-${jobTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} />
        <button type="submit" className="focus-ring mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200">
          Submit Application
        </button>
      </form>
    </>
  );
}
