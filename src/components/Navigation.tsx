"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { siteContent } from "@/lib/data";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useSmoothScroll();
  useBodyScrollLock(menuOpen);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-midnight/80 border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#");
            }}
            aria-label="Go to top"
            className="flex items-baseline gap-1.5 font-display text-xl md:text-2xl"
          >
            <span className="text-cream">Shannon</span>
            <span className="text-gold italic">Hutchinson</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {siteContent.navigation.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="group relative text-[11px] font-body uppercase tracking-[0.15em] text-cream/50 transition-colors duration-300 hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex md:hidden h-11 w-11 items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="flex w-6 flex-col items-end gap-[5px]">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 7, width: 24 }
                    : { rotate: 0, y: 0, width: 24 }
                }
                transition={{ duration: 0.3 }}
                className="block h-[1.5px] bg-cream origin-center"
                style={{ width: 24 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] bg-cream"
                style={{ width: 18 }}
              />
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -7, width: 24 }
                    : { rotate: 0, y: 0, width: 16 }
                }
                transition={{ duration: 0.3 }}
                className="block h-[1.5px] bg-cream origin-center"
                style={{ width: 16 }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-midnight/98 backdrop-blur-2xl md:hidden"
          >
            {/* Decorative background glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,160,60,0.15) 0%, transparent 70%)",
              }}
            />

            <nav className="relative flex flex-col items-center gap-8">
              {siteContent.navigation.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="font-display text-4xl italic text-cream transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-xs uppercase tracking-[0.2em] text-cream/40 font-body"
            >
              {siteContent.tagline}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
