import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Twin Eagle Technologies, a Kosovo-based company connecting international clients with Kosovo-based IT and operations talent.",
};

const values = ["Reliability", "Professionalism", "Accountability", "Continuous Improvement", "Partnership"];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Built on Experience and Partnership"
        description="Twin Eagle Technologies is based in Kosovo and supports international organizations with dependable technical expertise, mature delivery practices, and dedicated professionals who integrate into client operations."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              The company brings years of experience supporting technology-driven organizations, service teams, and business users across international markets.
            </p>
            <p>
              Twin Eagle Technologies is built around long-term client partnerships, clear communication, accountable delivery, and technical professionals who understand the standards, pace, and expectations of modern business support.
            </p>
            <p>
              The company currently recruits candidates in Kosovo only, with a focus on building a reliable local talent network for international client engagements.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-soft p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">Mission Statement</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy">Connecting Talent. Empowering Growth.</h2>
          </div>
        </div>
      </Section>
      <Section tone="soft" eyebrow="Values" title="The standards behind every engagement">
        <div className="grid gap-4 md:grid-cols-5">
          {values.map((value) => (
            <div key={value} className="rounded-lg border border-line bg-[#111111] p-6 text-center font-semibold text-navy shadow-sm">
              {value}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
