"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <div onClick={() => setOpen(false)}>
          <Logo compact />
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-sm text-sm font-medium transition ${active ? "text-white" : "text-zinc-400 hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <Button href="/contact" className="min-h-10 px-4 py-2">Contact</Button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-white lg:hidden"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line bg-black lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-soft hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 w-full">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
