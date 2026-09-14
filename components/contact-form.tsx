"use client";

import { useState } from "react";
import { FileUpload } from "@/components/file-upload";
import { Toast } from "@/components/toast";

export function ContactForm() {
  const [showToast, setShowToast] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 3500);
  }

  return (
    <>
      <Toast message="Application submitted successfully." show={showToast} />
      <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-[#111111] p-6 shadow-sm" aria-label="Contact form">
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            ["Name", "text", "name"],
            ["Company", "text", "company"],
            ["Email", "email", "email"],
            ["Phone", "tel", "phone"],
          ].map(([label, type, id]) => (
            <label key={id} htmlFor={id} className="grid gap-2 text-sm font-medium text-navy">
              {label}
              <input
                id={id}
                name={id}
                type={type}
                className="focus-ring min-h-12 rounded-md border border-line bg-black px-4 text-sm text-white"
                placeholder={label}
              />
            </label>
          ))}
        </div>
        <label htmlFor="message" className="mt-5 grid gap-2 text-sm font-medium text-navy">
          Message
          <textarea
            id="message"
            name="message"
            rows={6}
            className="focus-ring rounded-md border border-line bg-black px-4 py-3 text-sm text-white"
            placeholder="Tell us about your support or staffing needs."
          />
        </label>
        <FileUpload id="contact-resume" label="Upload resume or document" optional />
        <button
          type="submit"
          className="focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-zinc-200 sm:w-auto"
        >
          Submit Inquiry
        </button>
      </form>
    </>
  );
}
