"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { exhibitions } from "@/lib/data";

export default function SophisticatedExhibitions() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="exhibitions"
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-36"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <p className="mb-3 text-[10px] font-body uppercase tracking-[0.35em] text-[#999]">
            Exhibition History
          </p>
          <h2
            className="font-display text-[#0a0a0a] leading-[1]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Solo <em className="text-[#888]">Exhibitions</em>
          </h2>
        </motion.div>

        {/* Exhibition grid — horizontal cards */}
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "#e5e5e5" }}>
          {exhibitions.map((exhibition, i) => (
            <ExhibitionCard key={exhibition.year} exhibition={exhibition} index={i} />
          ))}
          {/* Fill last cell if odd count */}
          {exhibitions.length % 3 !== 0 && exhibitions.length % 2 !== 0 && (
            <div style={{ backgroundColor: "#fafafa" }} />
          )}
        </div>
      </div>
    </section>
  );
}

function ExhibitionCard({
  exhibition,
  index,
}: {
  exhibition: { year: string; title: string; venue: string; description: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between p-8 md:p-10 transition-colors duration-500 hover:bg-[#f0f0f0]"
      style={{ backgroundColor: "#fafafa", minHeight: 280 }}
    >
      {/* Year */}
      <div>
        <p
          className="font-display leading-none text-[#e5e5e5] transition-colors duration-500 group-hover:text-[#d5d5d5]"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
        >
          {exhibition.year}
        </p>
      </div>

      {/* Content */}
      <div className="mt-auto pt-8">
        <h3 className="font-display text-xl italic text-[#0a0a0a] leading-tight mb-2 md:text-2xl">
          {exhibition.title}
        </h3>
        <p className="text-[10px] font-body uppercase tracking-[0.15em] text-[#999] mb-4">
          {exhibition.venue}
        </p>
        <p className="text-[13px] font-body leading-relaxed text-[#777]">
          {exhibition.description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 h-12 w-px bg-[#e5e5e5] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
