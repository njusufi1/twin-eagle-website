import type { Metadata } from "next";
import { FeatureCard } from "@/components/card";
import { Section } from "@/components/section";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description: "Technical support and dedicated IT professionals for MSPs, SaaS companies, healthcare, manufacturing, and professional services.",
};

export default function IndustriesPage() {
  return (
    <Section
      eyebrow="Industries"
      title="Technical support for teams where trust and responsiveness matter"
      description="Twin Eagle Technologies supports organizations that need dependable technical talent, structured communication, and a practical partnership model."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.filter((industry) => industry.title !== "Small and Mid-Sized Businesses").map((industry) => (
          <FeatureCard key={industry.title} {...industry} />
        ))}
      </div>
    </Section>
  );
}
