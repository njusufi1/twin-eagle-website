import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function EagleMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden rounded-md bg-white ${className}`}>
      <Image
        src="/twin-eagle-logo.png"
        alt="Twin Eagle Technologies logo"
        fill
        className="object-cover"
        sizes="48px"
        priority
      />
    </span>
  );
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3 rounded-sm" aria-label="Twin Eagle Technologies home">
      <EagleMark className={compact ? "h-9 w-9" : "h-10 w-10"} />
      <span className="grid leading-none">
        <span className="text-sm font-bold uppercase tracking-[0.14em] text-white">Twin Eagle</span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Technologies</span>
      </span>
    </Link>
  );
}
