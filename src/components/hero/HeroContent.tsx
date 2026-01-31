"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  const handleScrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    const gallery = document.querySelector("#gallery");
    if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ---- Content ---- */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="mb-6 text-[11px] uppercase tracking-[0.25em] text-gold font-body"
        >
          Fine Art &middot; Trinidad &middot; The World
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
          className="font-display text-cream leading-[0.9]"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
          }}
        >
          Shannon
          <br />
          <em className="text-cream/90">Hutchinson</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="mt-5 font-display text-lg italic text-cream/50 sm:text-xl md:text-2xl"
        >
          Where Aviation Meets Art
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#gallery"
          onClick={handleScrollToGallery}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-10 inline-flex items-center gap-3 border border-gold/60 px-8 py-3.5 text-[11px] font-body uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold"
          aria-label="View art collection"
        >
          View Collection
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40 font-body">
          Scroll
        </span>
        <motion.div
          animate={{ height: [16, 28, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gold/50"
        />
      </motion.div>
    </>
  );
}
