import type { Metadata } from "next";
import { Check } from "lucide-react";
import { FeatureCard } from "@/components/card";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { fullServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Help Desk Support, Microsoft 365 Administration, Systems Administration, Customer Support, and dedicated technical staffing services.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Reliable technical services for MSPs and growing IT organizations"
        description="Twin Eagle Technologies provides dedicated professionals who support client environments, customer needs, and operational service levels with clarity and consistency."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {fullServices.map((service) => (
            <FeatureCard key={service.title} title={service.title} description={service.body} items={service.items} icon={service.icon} />
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Dedicated technical staffing" title="Professionals who integrate directly into your environment">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-line bg-[#111111] p-8 shadow-sm">
            <p className="text-lg leading-8 text-zinc-300">
              Twin Eagle Technologies provides dedicated professionals who integrate directly into client environments and become trusted members of existing teams.
            </p>
            <Button href="/contact" className="mt-8">Discuss Staffing Needs</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Role alignment", "Tool onboarding", "Workflow documentation", "Escalation procedures", "Performance visibility", "Long-term fit"].map((item) => (
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
