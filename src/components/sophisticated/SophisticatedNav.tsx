"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/lib/data";

export default function SophisticatedNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-700 ${
          scrolled
            ? "backdrop-blur-2xl bg-[#0a0a0a]/90 border-white/[0.06]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#")}
            className="font-display text-lg tracking-[0.02em] text-[#f5f5f5] md:text-xl"
            aria-label="Go to top"
          >
            Shannon <span className="italic opacity-60">Hutchinson</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {siteContent.navigation.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative text-[10px] font-body uppercase tracking-[0.25em] text-[#777] transition-colors duration-500 hover:text-[#f5f5f5]"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/"
              className="ml-2 rounded-full border border-white/[0.12] px-4 py-1.5 text-[9px] font-body uppercase tracking-[0.2em] text-[#666] transition-all duration-500 hover:border-white/25 hover:text-[#aaa]"
            >
              Warm Edition
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex md:hidden h-11 w-11 items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="flex w-6 flex-col items-end gap-[5px]">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }}
                transition={{ duration: 0.3 }}
                className="block h-[1px] bg-[#f5f5f5] origin-center"
                style={{ width: 24 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[1px] bg-[#f5f5f5]"
                style={{ width: 16 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 14 }}
                transition={{ duration: 0.3 }}
                className="block h-[1px] bg-[#f5f5f5] origin-center"
                style={{ width: 14 }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="soph-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0a0a0a]/[0.98] backdrop-blur-3xl md:hidden"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] text-[#777] transition-colors hover:text-[#f5f5f5]"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <nav className="flex flex-col items-center gap-10">
              {siteContent.navigation.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  className="font-display text-4xl italic text-[#f5f5f5]/80 transition-colors duration-300 hover:text-[#f5f5f5]"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-block rounded-full border border-white/[0.12] px-6 py-2.5 text-[10px] font-body uppercase tracking-[0.2em] text-[#666] transition-all hover:text-[#aaa]"
                >
                  Warm Edition
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
