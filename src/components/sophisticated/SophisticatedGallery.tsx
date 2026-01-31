"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { artworks, collections } from "@/lib/data";
import type { Artwork } from "@/lib/types";

/* ── Lightbox ─────────────────────────────────────────────────────── */

function Lightbox({
  isOpen,
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  isOpen: boolean;
  items: Artwork[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const art = items[index];

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && art && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 backdrop-blur-2xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${art.title}`}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e5e5] text-[#999] transition-colors hover:text-[#0a0a0a]"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev — side on desktop, bottom-left on mobile */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute z-10 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#e5e5e5] text-[#999] transition-colors hover:text-[#0a0a0a] bottom-6 left-[calc(50%-60px)] md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next — side on desktop, bottom-right on mobile */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute z-10 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#e5e5e5] text-[#999] transition-colors hover:text-[#0a0a0a] bottom-6 right-[calc(50%-60px)] md:bottom-auto md:right-8 md:top-1/2 md:-translate-y-1/2"
            aria-label="Next"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Artwork */}
          <motion.div
            key={art.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center w-full max-w-[92vw] md:max-w-[85vw] px-2 md:px-4"
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: art.aspectRatio,
                maxHeight: "70vh",
              }}
            >
              {art.image && (
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 92vw, 85vw"
                  priority
                />
              )}
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <h3 className="font-display text-xl italic text-[#0a0a0a] md:text-3xl">
                {art.title}
              </h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#999] font-body">
                {art.collectionName}
              </p>
            </div>
          </motion.div>

          {/* Counter */}
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-body tracking-[0.2em] text-[#bbb] hidden md:block">
            {index + 1} / {items.length}
          </div>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-body tracking-[0.2em] text-[#bbb] md:hidden">
            {index + 1} / {items.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Gallery ──────────────────────────────────────────────────────── */

export default function SophisticatedGallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filtered = filter === "all" ? artworks : artworks.filter((a) => a.collection === filter);

  const openLightbox = useCallback((i: number) => setLightboxIdx(i), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const goPrev = useCallback(() => {
    setLightboxIdx((p) => (p !== null ? (p - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);
  const goNext = useCallback(() => {
    setLightboxIdx((p) => (p !== null ? (p + 1) % filtered.length : null));
  }, [filtered.length]);

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="relative py-28 md:py-36"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-3 text-[10px] font-body uppercase tracking-[0.35em] text-[#999]">
                Selected Works
              </p>
              <h2
                className="font-display text-[#0a0a0a] leading-[1]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                The <em className="text-[#888]">Collection</em>
              </h2>
            </div>
            <p className="text-[11px] font-body text-[#999] md:text-right">
              {artworks.length} works across {collections.length - 1} exhibitions
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter artworks"
          >
            {collections.map((c) => (
              <button
                key={c.slug}
                onClick={() => setFilter(c.slug)}
                role="tab"
                aria-selected={filter === c.slug}
                className={`rounded-none border px-5 py-2.5 text-[10px] font-body uppercase tracking-[0.15em] transition-all duration-400 min-h-[40px] ${
                  filter === c.slug
                    ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                    : "border-[#e5e5e5] text-[#999] hover:border-[#999] hover:text-[#333]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-[1px] lg:grid-cols-3"
              style={{ backgroundColor: "#e5e5e5" }}
            >
              {filtered.map((artwork, i) => (
                <GalleryCell
                  key={artwork.id}
                  artwork={artwork}
                  index={i}
                  onClick={() => openLightbox(i)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-24 text-center font-display text-lg italic text-[#999]">
              No works in this collection yet.
            </p>
          )}
        </div>
      </section>

      <Lightbox
        isOpen={lightboxIdx !== null}
        items={filtered}
        index={lightboxIdx ?? 0}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </>
  );
}

/* ── Grid cell ────────────────────────────────────────────────────── */

function GalleryCell({
  artwork,
  index,
  onClick,
}: {
  artwork: Artwork;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06 }}
      className="group relative cursor-pointer overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${artwork.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); }
      }}
    >
      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
        {artwork.image && (
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 50vw, 33vw"
          />
        )}
        {/* Overlay — always visible on mobile, hover on desktop */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
          <div className="p-3 md:p-5">
            <p className="font-display text-sm md:text-lg italic text-[#f5f5f5] leading-tight">
              {artwork.title}
            </p>
            <p className="mt-0.5 md:mt-1 text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-[#888] font-body">
              {artwork.collectionName}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
