import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/section";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about Twin Eagle Technologies services, dedicated technicians, English proficiency, coverage hours, quality, and supported industries.",
};

export default function FAQPage() {
  return (
    <Section
      eyebrow="FAQ"
      title="Common questions about working with Twin Eagle Technologies"
      description="Clear answers for MSP owners, IT directors, and business leaders evaluating dedicated remote technical support."
    >
      <div className="mx-auto max-w-4xl divide-y divide-line rounded-lg border border-line bg-[#111111]">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-navy">
              {faq.question}
              <ChevronDown aria-hidden="true" className="h-5 w-5 flex-none text-zinc-400 transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
