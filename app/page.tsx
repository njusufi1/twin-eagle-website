import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/button";
import { FeatureCard } from "@/components/card";
import { MotionReveal } from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { AnimatedCounter } from "@/components/animated-counter";
import { ConnectionPulse } from "@/components/connection-pulse";
import { GuaranteeBadge } from "@/components/guarantee-badge";
import {
  clientSuccess,
  guarantee,
  pillars,
  processSteps,
  services,
  teamRoles,
  whyCards,
} from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "Twin Eagle",
  },
  description:
    "Cut IT staffing costs 50%+ with Kosovo-based professionals you interview and approve, backed by a free-replacement Coverage Guarantee.",
};

const testimonials = [
  {
    quote:
      "Twin Eagle Technologies has been responsive, consistent, and easy to work with. Their team understands how to operate inside an MSP service desk environment.",
    name: "David R.",
    company: "Operations Manager",
  },
  {
    quote:
      "The communication has been strong from day one. Their professionals follow our process, document clearly, and handle escalations with care.",
    name: "Sarah M.",
    company: "Service Delivery Lead",
  },
  {
    quote:
      "They provide dependable technical expertise and have become a trusted extension of our internal IT team.",
    name: "Michael T.",
    company: "IT Director",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — leads with cost + control + the guarantee, not generic trust language */}
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#0B0B0B] lg:block" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <MotionReveal className="relative z-10 flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit rounded-md border border-line bg-[#111111] px-3 py-2 text-xs font-semibold text-zinc-300 sm:text-sm">
              Kosovo-based IT talent for international teams
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-navy md:text-6xl md:leading-tight">
              Cut IT staffing costs 50%+ — without cutting corners.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
              Kosovo-based IT professionals, vetted and ready, who you interview and approve before they start. Every placement is protected by our Coverage Guarantee: a free replacement within a week, for the life of the engagement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a Discovery Call</Button>
              <Button href="/careers" variant="secondary">View Open Roles</Button>
            </div>
            <GuaranteeBadge className="mt-6 w-fit" />
          </MotionReveal>

          <MotionReveal delay={0.12} className="relative z-10 flex flex-col justify-center gap-5">
            <ConnectionPulse />
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-line bg-[#111111] p-4 text-center">
                <p className="text-2xl font-semibold text-navy">
                  <AnimatedCounter target={50} suffix="%+" />
                </p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">Lower cost than a US hire</p>
              </div>
              <div className="rounded-lg border border-line bg-[#111111] p-4 text-center">
                <p className="text-2xl font-semibold text-navy">1 wk</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">Guaranteed replacement</p>
              </div>
              <div className="rounded-lg border border-line bg-[#111111] p-4 text-center">
                <p className="text-2xl font-semibold text-navy">You</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">Approve every hire</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Four pillars — the real argument, moved above services */}
      <Section
        eyebrow="Why Twin Eagle"
        title="The case for Twin Eagle, in four parts"
        description="Not generic outsourcing promises — the concrete reasons this beats a US hire or an unguaranteed offshore vendor."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-lg border border-line bg-[#111111] p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-line bg-black text-[#C9A15A]">
                <pillar.icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="text-2xl font-semibold text-navy">{pillar.stat}</p>
              <p className="mt-1 text-xs font-medium text-zinc-500">{pillar.statLabel}</p>
              <h3 className="mt-4 text-lg font-semibold text-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Coverage Guarantee — named, explicit, and given real visual weight */}
      <Section tone="soft">
        <div className="overflow-hidden rounded-xl border border-[#C9A15A]/30 bg-gradient-to-br from-[#151006] via-[#111111] to-[#111111] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-[#C9A15A]/40 bg-black text-[#C9A15A]">
                <ShieldCheck aria-hidden="true" className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#C9A15A]">Risk removal, guaranteed</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">{guarantee.name}</h2>
              <p className="mt-4 text-base leading-7 text-zinc-300">{guarantee.summary}</p>
              <Button href="/contact" className="mt-8">Ask About Coverage</Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {guarantee.terms.map((term) => (
                <div key={term.label} className="rounded-lg border border-line bg-black/40 p-5">
                  <p className="text-sm font-semibold text-navy">{term.label}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{term.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4-step process — client approval reframed as a process step, not a footnote */}
      <Section eyebrow="How it works" title="A process built around your approval, not ours">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-lg border border-line bg-[#111111] p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-3xl font-semibold text-zinc-700">{String(index + 1).padStart(2, "0")}</span>
                <step.icon aria-hidden="true" className="h-5 w-5 text-[#C9A15A]" />
              </div>
              <h3 className="text-base font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services — now positioned as supporting detail, not the lead argument */}
      <Section tone="soft" eyebrow="Services" title="Technical support capacity where it matters most">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} href="/services" />
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Twin Eagle Technologies" title="Built for long-term operational trust" className="hidden md:block">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card) => (
            <FeatureCard key={card.title} title={card.title} description={card.text} icon={card.icon} />
          ))}
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow="Delivery team"
        title="Experienced Technical Teams"
        description="Twin Eagle Technologies provides experienced Help Desk specialists, Microsoft 365 administrators, systems engineers, and customer support professionals who work as extensions of client teams."
        className="hidden md:block"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((member) => (
            <article key={member.role} className="rounded-lg border border-line bg-[#111111] p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={member.image} alt="" className="h-16 w-16 rounded-full object-cover grayscale ring-4 ring-zinc-800" loading="lazy" />
                <div>
                  <h3 className="font-semibold text-navy">{member.role}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{member.specialty}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Client success" title="Supporting Growing Organizations" className="hidden md:block">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientSuccess.map((industry) => (
            <FeatureCard key={industry.title} {...industry} />
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Testimonials" title="Trusted by teams that depend on responsiveness" className="hidden md:block">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-lg border border-line bg-[#111111] p-6 shadow-sm">
              <blockquote className="text-base leading-7 text-zinc-300">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <div className="font-semibold text-navy">{testimonial.name}</div>
                <div className="mt-1 text-sm text-zinc-500">{testimonial.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="navy" title="Need Additional Technical Capacity?" description="Let's discuss how Twin Eagle Technologies can help your organization scale efficiently — with every placement backed by the Coverage Guarantee.">
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/contact" variant="primary">Schedule a Consultation</Button>
          <GuaranteeBadge />
        </div>
      </Section>
    </>
  );
}
