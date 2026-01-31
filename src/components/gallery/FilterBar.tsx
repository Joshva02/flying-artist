"use client";

import type { Collection } from "@/lib/types";

interface FilterBarProps {
  collections: Collection[];
  activeFilter: string;
  onFilterChange: (slug: string) => void;
}

export default function FilterBar({ collections, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div
      className="mb-12 flex gap-3 overflow-x-auto pb-2 scrollbar-none"
      role="tablist"
      aria-label="Filter artworks by collection"
    >
      {collections.map((filter) => (
        <button
          key={filter.slug}
          onClick={() => onFilterChange(filter.slug)}
          role="tab"
          aria-selected={activeFilter === filter.slug}
          className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] font-body uppercase tracking-[0.12em] transition-all duration-300 min-h-[44px] ${
            activeFilter === filter.slug
              ? "bg-gold text-midnight"
              : "border border-white/10 text-cream/60 hover:border-white/25 hover:text-cream"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
