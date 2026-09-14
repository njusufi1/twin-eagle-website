import type { Metadata } from "next";
import { CalendarDays, Linkedin, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Twin Eagle Technologies at info@twineagletech.com for IT staffing, support, operations, and software talent.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Start a conversation"
        description="Twin Eagle Technologies is based in Kosovo and recruits Kosovo-based talent only. Tell us what role, skill set, or support model you need."
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <aside className="grid gap-5">
            <div className="rounded-lg border border-line bg-soft p-6">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">
                <CalendarDays aria-hidden="true" className="h-5 w-5" />
                Calendly
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-navy">Calendly integration placeholder</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Embed your scheduling link here so clients and candidates can book time directly.
              </p>
              <Button href="/contact" className="mt-6">Book a Discovery Call</Button>
            </div>
            <div className="rounded-lg border border-line bg-[#111111] p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-navy">Location</h2>
              <div className="mt-5 space-y-4 text-sm text-zinc-400">
                <p className="flex items-center gap-3">
                  <MapPin aria-hidden="true" className="h-5 w-5 text-zinc-300" />
                  Based in Kosovo. Recruiting Kosovo-based candidates only.
                </p>
                <p className="flex items-center gap-3">
                  <Mail aria-hidden="true" className="h-5 w-5 text-zinc-300" />
                  <a className="focus-ring rounded-sm hover:text-white" href="mailto:info@twineagletech.com">info@twineagletech.com</a>
                </p>
                <p className="flex items-center gap-3">
                  <Linkedin aria-hidden="true" className="h-5 w-5 text-zinc-300" />
                  <a className="focus-ring rounded-sm hover:text-white" href="https://www.linkedin.com/company/134693896">LinkedIn</a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
