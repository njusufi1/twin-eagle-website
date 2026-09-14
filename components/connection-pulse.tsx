"use client";

import { motion } from "framer-motion";

export function ConnectionPulse() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-black px-6 py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 15% 30%, rgba(201,161,90,0.16), transparent 60%), radial-gradient(60% 60% at 85% 70%, rgba(201,161,90,0.10), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <svg viewBox="0 0 400 120" className="relative z-10 w-full" role="img" aria-label="Live coverage bridge between North America and Kosovo">
        <line x1="40" y1="60" x2="360" y2="60" stroke="#2A2A2A" strokeWidth="1.5" />
        <motion.line
          x1="40"
          y1="60"
          x2="360"
          y2="60"
          stroke="#C9A15A"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -28 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />

        <motion.circle
          r="4.5"
          fill="#C9A15A"
          initial={{ cx: 40 }}
          animate={{ cx: [40, 360, 40] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
          style={{ cy: 60 }}
        />

        <circle cx="40" cy="60" r="6" fill="#050505" stroke="#F8FAFC" strokeWidth="2" />
        <circle cx="360" cy="60" r="6" fill="#050505" stroke="#F8FAFC" strokeWidth="2" />

        <text x="40" y="98" textAnchor="middle" fill="#A1A1AA" fontSize="12" fontFamily="Inter, sans-serif">
          US / CA / AU
        </text>
        <text x="360" y="98" textAnchor="middle" fill="#A1A1AA" fontSize="12" fontFamily="Inter, sans-serif">
          Kosovo
        </text>
        <text x="200" y="30" textAnchor="middle" fill="#71717A" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.5">
          Real-time coverage, built around your hours
        </text>
      </svg>
    </div>
  );
}
