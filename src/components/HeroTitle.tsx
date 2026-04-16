"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["INTEGRITY", "PRECISION", "GRIT", "HONESTY"];

export function HeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-head text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.9] tracking-wide mb-2 max-w-4xl">
      <motion.span
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        BUILT ON
      </motion.span>
      <span className="block relative h-[0.95em] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#E87B2E] absolute left-0"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <motion.span
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        DRIVEN BY
      </motion.span>
      <motion.span
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="block"
        style={{ WebkitTextStroke: "2px #E87B2E", color: "transparent" }}
      >
        RESULTS.
      </motion.span>
    </h1>
  );
}
