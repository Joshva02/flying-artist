"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { artistBio } from "@/lib/data";

export default function SophisticatedAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  /* Pull a leading sentence from the first paragraph for the big quote */
  const firstSentence = artistBio.paragraphs[0].split(" — ")[0];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-40"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      {/* Subtle noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-[10px] font-body uppercase tracking-[0.35em] text-[#888] md:mb-24"
        >
          About the Artist
        </motion.p>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-20 max-w-4xl md:mb-28"
        >
          <p
            className="font-display italic leading-[1.15] text-[#0a0a0a]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
          >
            &ldquo;{firstSentence}&rdquo;
          </p>
        </motion.blockquote>

        {/* Two-column: portrait + bio */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/artist-portrait.jpg"
                alt="Shannon Hutchinson"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>

          {/* Bio + stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col justify-center"
          >
            {/* Stats row */}
            <div className="mb-14 grid grid-cols-3 gap-6">
              {artistBio.stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display leading-none text-[#0a0a0a]"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[9px] font-body uppercase tracking-[0.2em] text-[#888]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mb-10 h-px w-16 bg-[#ccc]" />

            {/* Bio paragraphs */}
            <div className="space-y-6">
              {artistBio.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="text-[14px] font-body leading-[1.8] text-[#555]"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
