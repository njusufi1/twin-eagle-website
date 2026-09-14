import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  items?: string[];
  href?: string;
};

export function FeatureCard({ title, description, icon: Icon, items, href }: FeatureCardProps) {
  return (
    <article className="h-full rounded-lg border border-line bg-[#111111] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-500 hover:shadow-subtle">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-line bg-black text-zinc-200">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
      {items && (
        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-zinc-300">
              <Check aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-zinc-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {href && (
        <Link href={href} className="focus-ring mt-6 inline-flex rounded-sm text-sm font-semibold text-white hover:text-zinc-300">
          Learn More
        </Link>
      )}
    </article>
  );
}
