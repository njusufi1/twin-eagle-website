"use client";

import { X, Upload } from "lucide-react";
import { useRef, useState } from "react";

type FileUploadProps = {
  id: string;
  label?: string;
  optional?: boolean;
};

export function FileUpload({ id, label = "Upload resume", optional = false }: FileUploadProps) {
  const [fileName, setFileName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function clearFile() {
    setFileName("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div>
      {fileName ? (
        <div className="mt-4 flex min-h-16 items-center justify-between gap-4 rounded-md border border-zinc-600 bg-[#111111] px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{optional ? "Optional attachment" : "Resume"}</p>
            <p className="mt-1 truncate text-sm font-semibold text-white">{fileName}</p>
          </div>
          <button
            type="button"
            onClick={clearFile}
            aria-label={`Remove ${fileName}`}
            className="focus-ring flex h-9 w-9 flex-none items-center justify-center rounded-md border border-line text-zinc-300 transition hover:border-zinc-400 hover:text-white"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <label htmlFor={id} className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-zinc-600 bg-[#111111] px-4 py-6 text-center text-sm text-zinc-300 transition hover:border-zinc-300">
          <Upload aria-hidden="true" className="mb-3 h-5 w-5 text-zinc-400" />
          <span className="font-semibold text-white">{label}</span>
          <span className="mt-1 text-xs text-zinc-500">{optional ? "Optional. " : ""}PDF, DOC, or DOCX</span>
        </label>
      )}
      <input
        ref={inputRef}
        id={id}
        name="resume"
        type="file"
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className="sr-only"
        onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
      />
    </div>
  );
}
