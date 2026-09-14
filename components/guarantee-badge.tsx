import { ShieldCheck } from "lucide-react";

export function GuaranteeBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-line bg-black px-4 py-2 text-xs font-semibold text-zinc-300 ${className}`}>
      <ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#C9A15A]" />
      Protected by the Coverage Guarantee: free replacement in 1 week
    </div>
  );
}
