"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onAnimationComplete={(definition) => {
            if (
              typeof definition === "object" &&
              "opacity" in definition &&
              definition.opacity === 0
            ) {
              /* parent can unmount */
            }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight"
          style={{ pointerEvents: visible ? "auto" : "none" }}
        >
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(212,160,60,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Artist name */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative text-gold font-display italic text-3xl sm:text-4xl md:text-5xl tracking-wide"
          >
            Shannon Hutchinson
          </motion.h1>

          {/* Animated gold line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
            className="mt-6 h-px bg-gold"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-4 text-cream/50 text-xs uppercase tracking-[0.25em] font-body"
          >
            The Flying Artist
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
