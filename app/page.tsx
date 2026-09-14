import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Globe2, MonitorCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/button";
import { FeatureCard } from "@/components/card";
import { MotionReveal } from "@/components/motion-reveal";
import { Section } from "@/components/section";
import { clientSuccess, services, teamRoles, whyCards } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "Twin Eagle",
  },
  description:
    "Twin Eagle Technologies connects international clients with Kosovo-based IT support, operations, and software talent.",
};

const partnershipCards = [
  "Kosovo-based talent only",
  "International client delivery",
  "IT support and operations",
  "Software and project roles",
];

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

const heroCapabilities: Array<{ title: string; text: string; icon: LucideIcon }> = [
  { title: "Help Desk", text: "L1/L2 ticket support", icon: MonitorCheck },
  { title: "Microsoft 365", text: "Exchange, Teams, Intune", icon: Globe2 },
  { title: "Dedicated Talent", text: "Integrated team members", icon: UsersRound },
  { title: "Coverage", text: "US, Canada, Australia", icon: ArrowUpRight },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#0B0B0B] lg:block" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <MotionReveal className="relative z-10 flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit rounded-md border border-line bg-[#111111] px-3 py-2 text-xs font-semibold text-zinc-300 sm:text-sm">
              Kosovo-based IT talent for international teams
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-navy md:text-6xl md:leading-tight">
              Dedicated IT Professionals for MSPs and Growing Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
              <span className="md:hidden">
                Kosovo-based IT professionals for support, operations, and software teams.
              </span>
              <span className="hidden md:inline">
                Twin Eagle Technologies is based in Kosovo and hires Kosovo-based professionals only, connecting strong technical and operations talent with clients in the United States, Canada, and Australia.
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a Discovery Call</Button>
              <Button href="/careers" variant="secondary">View Open Roles</Button>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12} className="relative z-10 hidden lg:block">
            <div className="rounded-lg border border-line bg-[#111111] p-4 shadow-subtle">
              <div className="bg-grid rounded-md border border-line bg-black p-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroCapabilities.map(({ title, text, icon: CardIcon }) => {
                    return (
                      <div key={String(title)} className="rounded-lg border border-line bg-[#111111] p-5">
                        <CardIcon aria-hidden="true" className="mb-6 h-6 w-6 text-zinc-300" />
                        <div className="text-sm font-semibold text-navy">{title}</div>
                        <div className="mt-2 text-sm text-zinc-400">{text}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 rounded-lg border border-zinc-700 bg-white p-6 text-black">
                  <div className="text-sm font-semibold text-black">Remote collaboration model</div>
                  <div className="mt-3 grid gap-3 text-sm text-zinc-700 sm:grid-cols-3">
                    <span>Kosovo talent</span>
                    <span>Remote delivery</span>
                    <span>Clear process</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <Section
        tone="soft"
        eyebrow="Trusted partnership"
        title="Focused talent, clear delivery, long-term fit"
        description="Twin Eagle Technologies works with candidates in Kosovo only and supports international clients through structured recruiting, onboarding, communication, and delivery practices."
        className="[&_h2]:text-2xl [&_h2]:md:text-4xl [&_p]:text-base [&_p]:md:text-lg"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 [&>*:nth-child(n+3)]:hidden md:[&>*:nth-child(n+3)]:block">
          {partnershipCards.map((card) => (
            <div key={card} className="rounded-lg border border-line bg-[#111111] p-6 text-sm font-semibold text-zinc-100 shadow-sm">
              {card}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="Technical support capacity where it matters most" className="[&_h2]:text-2xl [&_h2]:md:text-4xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 [&>*:nth-child(n+3)]:hidden md:[&>*:nth-child(n+3)]:block">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} href="/services" />
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="Why Twin Eagle Technologies" title="Built for long-term operational trust" className="hidden md:block">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card) => (
            <FeatureCard key={card.title} title={card.title} description={card.text} icon={card.icon} />
          ))}
        </div>
      </Section>

      <Section
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

      <Section tone="soft" eyebrow="Client success" title="Supporting Growing Organizations" className="hidden md:block">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientSuccess.map((industry) => (
            <FeatureCard key={industry.title} {...industry} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by teams that depend on responsiveness" className="hidden md:block">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-lg border border-line bg-[#111111] p-6 shadow-sm">
              <blockquote className="text-base leading-7 text-zinc-300">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <div className="font-semibold text-navy">{testimonial.name}</div>
                <div className="mt-1 text-sm text-zinc-500">{testimonial.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="navy" title="Need Additional Technical Capacity?" description="Let's discuss how Twin Eagle Technologies can help your organization scale efficiently.">
        <Button href="/contact" variant="primary">Schedule a Consultation</Button>
      </Section>
    </>
  );
}
