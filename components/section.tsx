import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  tone?: "white" | "soft" | "navy";
  className?: string;
};

export function Section({ eyebrow, title, description, children, tone = "white", className = "" }: SectionProps) {
  const tones = {
    white: "bg-[#050505] text-white",
    soft: "bg-[#0B0B0B] text-white",
    navy: "bg-[#111111] text-white",
  };

  return (
    <section className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-semibold tracking-normal text-inherit md:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-lg leading-8 text-zinc-400">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
