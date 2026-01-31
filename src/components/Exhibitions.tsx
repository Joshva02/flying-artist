"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { exhibitions } from "@/lib/data";

function TimelineItem({
  exhibition,
  index,
}: {
  exhibition: { year: string; title: string; venue: string; description: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-10 pb-14 last:pb-0 md:pl-14"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center md:left-2">
        <div className="h-2.5 w-2.5 rounded-full bg-gold" />
        <div className="absolute h-5 w-5 rounded-full border border-gold/30" />
      </div>

      {/* Year */}
      <p className="mb-2 text-sm font-display italic text-gold tracking-wide">
        {exhibition.year}
      </p>

      {/* Title */}
      <h3
        className="font-display italic text-cream leading-tight mb-2"
        style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
      >
        {exhibition.title}
      </h3>

      {/* Venue */}
      <p className="mb-3 text-[11px] uppercase tracking-[0.15em] text-cream/40 font-body">
        {exhibition.venue}
      </p>

      {/* Description */}
      <p className="text-cream/55 leading-relaxed font-body text-[14px] max-w-xl">
        {exhibition.description}
      </p>
    </motion.div>
  );
}

export default function Exhibitions() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="exhibitions"
      ref={sectionRef}
      className="relative bg-midnight py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative bg glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 20% 50%, rgba(212,160,60,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-gold font-body">
            Exhibitions
          </p>
          <h2
            className="font-display text-cream leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            A Journey in <em>Exhibition</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-[9px] top-0 bottom-0 w-px bg-gold/20 md:left-[17px]" />

          {exhibitions.map((exhibition, index) => (
            <TimelineItem
              key={`${exhibition.year}-${exhibition.title}`}
              exhibition={exhibition}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
