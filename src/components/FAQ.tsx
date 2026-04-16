"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  { q: "How do I get a free estimate?", a: "Call us at 307-687-7526 or fill out the contact form on this page. We'll visit your site, scope the job, and get you a written quote within 24 hours." },
  { q: "What areas do you serve?", a: "We serve Gillette, Wright, Moorcroft, Newcastle, Sundance, Sheridan, Ranchester, Casper, Cheyenne, and surrounding areas across Northeast Wyoming." },
  { q: "Are you licensed and insured?", a: "Yes. Pro Built Construction is fully licensed, bonded, and insured in the state of Wyoming. We've been operating since 1991." },
  { q: "Do you offer financing?", a: "Yes. We offer financing options for qualified homeowners and commercial customers on construction and remodeling projects." },
  { q: "How long does a concrete driveway take?", a: "Most residential driveways take 2-5 days depending on size and prep work required. We'll give you an exact timeline in your quote." },
  { q: "Do you offer snow removal contracts?", a: "Yes. We offer seasonal contracts for commercial lots, HOAs, and residential properties with guaranteed response windows and 24/7 storm priority." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      {FAQ_ITEMS.map((faq, i) => (
        <div key={i} className="border-b border-white/5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <span className="font-cond font-bold text-sm tracking-wider uppercase text-white group-hover:text-[#E87B2E] transition-colors pr-4">
              {faq.q}
            </span>
            <span
              className={`text-[#E87B2E] text-2xl font-light shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-sm text-[#999] leading-relaxed pb-6">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
