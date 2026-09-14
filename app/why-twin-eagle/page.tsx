import type { Metadata } from "next";
import { Check } from "lucide-react";
import { FeatureCard } from "@/components/card";
import { Section } from "@/components/section";
import { partnershipReasons } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Partner",
  description: "Why MSPs and growing businesses partner with Twin Eagle Technologies for communication, technical expertise, flexible support, and long-term delivery.",
};

export default function WhyTwinEaglePage() {
  return (
    <>
      <Section
        eyebrow="Why partner"
        title="Why Organizations Partner With Twin Eagle Technologies"
        description="Twin Eagle Technologies helps organizations strengthen technical capacity through reliable delivery, dedicated professionals, and support models designed around client operations."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnershipReasons.map((reason) => (
            <FeatureCard key={reason.title} {...reason} />
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Delivery model" title="Built for ongoing client engagements">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-line bg-[#111111] p-8 shadow-sm">
            <p className="text-lg leading-8 text-zinc-300">
              Engagements are structured to support daily operations, recurring service needs, and long-term team alignment rather than short-term transactional support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Client tool adoption", "Documented workflows", "Defined escalation paths", "Performance alignment", "Service continuity", "Accountable communication"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-line bg-[#111111] p-5">
                <Check aria-hidden="true" className="h-5 w-5 text-zinc-300" />
                <span className="text-sm font-semibold text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
