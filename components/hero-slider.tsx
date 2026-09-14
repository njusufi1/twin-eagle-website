"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: "/team-slide-1.jpg", alt: "The Twin Eagle Technologies team reviewing a dashboard together" },
  { src: "/team-slide-2.jpg", alt: "Two Twin Eagle Technologies team members discussing a project" },
  { src: "/team-slide-3.jpg", alt: "A Twin Eagle Technologies engineer presenting next steps to the team" },
  { src: "/team-slide-4.jpg", alt: "The Twin Eagle Technologies team taking a break together in the office" },
];

const INTERVAL_MS = 4500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-line shadow-subtle">
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[index].src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: INTERVAL_MS / 1000 + 0.9, ease: "linear" }}
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={index === 0}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${slideIndex + 1}`}
            aria-current={slideIndex === index}
            onClick={() => setIndex(slideIndex)}
            className={`focus-ring h-1.5 rounded-full transition-all ${
              slideIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
