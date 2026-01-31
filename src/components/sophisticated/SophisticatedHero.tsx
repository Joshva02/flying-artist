"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { artworks } from "@/lib/data";

export default function SophisticatedHero() {
  const featured = artworks[0];

  const handleScrollToGallery = () => {
    const el = document.getElementById("gallery");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Noise / grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Main content */}
      <div className="relative z-[5] flex flex-1 flex-col lg:flex-row">
        {/* Left half: Typography */}
        <div className="flex flex-1 flex-col justify-center px-8 pt-32 pb-12 lg:px-16 lg:pt-0 lg:pb-0 xl:px-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 text-[10px] font-body uppercase tracking-[0.35em] text-[#555]"
          >
            The Flying Artist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display leading-[0.85] text-[#f5f5f5]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            Shannon
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeInOut" }}
            className="my-6 h-px bg-[#333] lg:my-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display italic text-[#f5f5f5]/40 leading-[0.85]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
          >
            Hutchinson
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-10 max-w-xs text-[13px] font-body leading-relaxed text-[#555] lg:mt-14"
          >
            Where aviation meets art. Landscape paintings inspired by Caribbean
            light and the view from 40,000 feet.
          </motion.p>

          <motion.button
            onClick={handleScrollToGallery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="group mt-10 inline-flex w-fit items-center gap-4 text-[10px] font-body uppercase tracking-[0.3em] text-[#888] transition-colors duration-500 hover:text-[#f5f5f5]"
            aria-label="View collection"
          >
            <span>View Collection</span>
            <span className="block h-px w-8 bg-[#444] transition-all duration-500 group-hover:w-12 group-hover:bg-[#888]" />
          </motion.button>
        </div>

        {/* Right half: Featured artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex-1 lg:flex-[1.1]"
        >
          <div className="relative h-[50vh] w-full lg:h-full">
            {featured.image && (
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                style={{ filter: "grayscale(100%) contrast(1.1)" }}
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            )}
            {/* Dark overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #0a0a0a 0%, transparent 30%), linear-gradient(0deg, #0a0a0a 0%, transparent 20%)",
              }}
            />
            {/* Artwork caption */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 right-8 text-right"
            >
              <p className="text-[10px] font-body uppercase tracking-[0.2em] text-[#555]">
                {featured.collectionName}
              </p>
              <p className="mt-1 font-display italic text-sm text-[#777]">
                {featured.title}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-8 z-10 flex items-center gap-4 lg:left-16"
      >
        <span className="text-[9px] font-body uppercase tracking-[0.3em] text-[#444]">
          Scroll
        </span>
        <motion.div
          animate={{ height: [16, 32, 16] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-[#333]"
        />
      </motion.div>
    </section>
  );
}
