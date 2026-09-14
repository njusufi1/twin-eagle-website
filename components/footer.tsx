import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { navItems } from "@/lib/content";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_0.7fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">Connecting Talent. Empowering Growth.</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded-sm text-sm text-zinc-400 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 lg:justify-end">
            <Link aria-label="Email Twin Eagle Technologies" href="mailto:info@twineagletech.com" className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-line text-zinc-300 hover:text-white">
              <Mail aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link aria-label="Twin Eagle Technologies on LinkedIn" href="https://www.linkedin.com/company/134693896" className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-line text-zinc-300 hover:text-white">
              <Linkedin aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-line pt-6 text-sm text-zinc-500">
          © 2026 Twin Eagle Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
