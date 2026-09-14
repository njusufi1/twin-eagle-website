import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const styles = {
    primary: "bg-white text-black shadow-sm hover:bg-zinc-200",
    secondary: "border border-line bg-transparent text-zinc-100 hover:border-zinc-400 hover:bg-zinc-900",
    dark: "bg-zinc-900 text-white hover:bg-zinc-800",
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
