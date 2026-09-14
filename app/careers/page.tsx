import type { Metadata } from "next";
import { Check } from "lucide-react";
import { JobApplicationForm } from "@/components/job-application-form";
import { Section } from "@/components/section";
import { jobs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Apply for Kosovo-based roles at Twin Eagle Technologies, including Executive Assistant, Tech Support Specialist, Project Manager, and Software Developer.",
};

export default function CareersPage() {
  return (
    <>
      <Section
        eyebrow="Careers"
        title="Open roles for Kosovo-based talent"
        description="Twin Eagle Technologies is based in Kosovo and is currently hiring candidates located in Kosovo only. We are building a professional talent network for international IT, support, operations, and software engagements."
      >
        <div className="grid gap-5">
          {jobs.map((job) => (
            <article key={job.title} className="rounded-lg border border-line bg-[#111111] p-6">
              <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">{job.type}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-navy">{job.title}</h2>
                  <p className="mt-3 text-sm font-medium text-zinc-500">{job.location}</p>
                </div>
                <div>
                  <p className="text-base leading-7 text-zinc-300">{job.description}</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-400">
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-zinc-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <JobApplicationForm jobTitle={job.title} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
