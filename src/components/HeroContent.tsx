"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#E87B2E]/10 border border-[#E87B2E]/25 rounded-full mb-5"
    >
      <span className="w-2 h-2 bg-[#E87B2E] rounded-full animate-pulse-dot shadow-[0_0_12px_#E87B2E]" />
      <span className="font-cond text-[11px] font-semibold tracking-[0.22em] uppercase text-[#E87B2E]">
        Now Booking 2026 Projects
      </span>
    </motion.div>
  );
}

export function HeroContent() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-base text-[#d4d0c8] max-w-xl leading-relaxed mb-6 font-light"
      >
        Wyoming-tough concrete, excavation, and snow removal. Locally engineered.
        Done right the first time — every time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="flex gap-4 flex-wrap mb-8"
      >
        <Link href="#contact" className="bg-[#E87B2E] text-black font-cond font-bold text-sm tracking-[2px] uppercase px-8 py-4 hover:bg-[#F28C3A] transition-all hover:-translate-y-0.5 inline-flex items-center gap-3">
          Get A Free Quote <span>→</span>
        </Link>
        <Link href="#services" className="border border-white/20 text-white font-cond font-bold text-sm tracking-[2px] uppercase px-8 py-4 hover:border-[#E87B2E] hover:text-[#E87B2E] transition-all inline-flex items-center gap-3">
          View Our Services
        </Link>
      </motion.div>
    </>
  );
}
