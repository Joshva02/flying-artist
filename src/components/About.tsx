"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { artistBio } from "@/lib/data";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(26,107,106,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="relative w-full overflow-hidden rounded-sm"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/images/artist-portrait.jpg"
                alt="Shannon Hutchinson - The Flying Artist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative frame line */}
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-sm border border-gold/20 -z-10" />
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            {/* Overline */}
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-gold font-body">
              About the Artist
            </p>

            {/* Heading */}
            <h2
              className="font-display text-midnight leading-tight mb-8"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              A <em className="text-teal">Renaissance Woman</em> of Sky &amp; Canvas
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-5">
              {artistBio.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className="text-midnight/70 leading-relaxed font-body text-[15px]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-midnight/10 pt-8"
            >
              {artistBio.stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-3xl text-teal md:text-4xl leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.15em] text-midnight/50 font-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
