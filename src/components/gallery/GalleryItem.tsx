"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import type { Artwork } from "@/lib/types";

interface GalleryItemProps {
  artwork: Artwork;
  index: number;
  onClick: () => void;
}

export default function GalleryItem({ artwork, index, onClick }: GalleryItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08, ease: "easeOut" }}
      className="mb-5 break-inside-avoid cursor-pointer group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${artwork.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative overflow-hidden rounded-sm">
        {/* Artwork surface */}
        <div
          className="relative w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          style={{
            background: artwork.gradient,
            aspectRatio: artwork.aspectRatio,
          }}
        >
          {artwork.image && (
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </div>

        {/* Hover overlay (always visible on mobile via md:opacity trick) */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent opacity-100 transition-opacity duration-400 md:opacity-0 md:group-hover:opacity-100">
          <div className="p-4 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-400">
            <h3 className="font-display text-lg italic text-cream leading-tight">
              {artwork.title}
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gold font-body">
              {artwork.collectionName}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
