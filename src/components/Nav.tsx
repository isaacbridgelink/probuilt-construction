"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/constants";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-[72px]">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Pro Built" width={48} height={48} className="object-contain" />
            <div className="font-cond font-bold text-sm tracking-[2px] leading-tight">
              PRO BUILT
              <span className="block text-[9px] font-normal tracking-[3px] text-[#E87B2E]">
                CONSTRUCTION INC.
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-cond text-xs font-semibold tracking-[2px] uppercase text-[#d4d0c8] hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={COMPANY.phoneTel} className="font-cond text-sm font-bold tracking-wider text-[#E87B2E] hover:text-[#F28C3A] transition-colors">
              ✆ {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="bg-[#E87B2E] text-black font-cond font-bold text-xs tracking-[2px] uppercase px-6 py-3 hover:bg-[#F28C3A] transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] w-7"
            aria-label="Menu"
          >
            <span className={`block h-[2px] bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-head text-4xl tracking-wider text-white hover:text-[#E87B2E] transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <a
              href={COMPANY.phoneTel}
              className="mt-4 bg-[#E87B2E] text-black font-cond font-bold text-sm tracking-wider px-8 py-4"
            >
              ✆ {COMPANY.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
