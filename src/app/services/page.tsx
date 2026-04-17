import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services — New Construction, Remodeling, Concrete, Kitchen & Bath",
  description: "Pro Built Construction services: new construction, remodeling, concrete, kitchen & bath, financing. Full service general contractor in Gillette, Wyoming.",
};

const allServices = SERVICES;

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image src="/images/blueprints-planning.webp" alt="Construction planning" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-12">
          <AnimateIn>
            <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-4 block">What We Do</span>
            <h1 className="font-head text-[clamp(3rem,7vw,6rem)] leading-none">Our <span className="text-[#E87B2E]">Services.</span></h1>
          </AnimateIn>
        </div>
      </section>

      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4">Full service. <span className="text-[#E87B2E]">One standard.</span></h2>
            <p className="text-[#d4d0c8] max-w-xl mb-16">From custom homes to snow removal — every project gets the same obsessive attention to prep, quality, and finish.</p>
          </AnimateIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s, i) => (
              <AnimateIn key={s.slug} delay={i * 0.08}>
                <Link href={`/services/${s.slug}`} className="group block relative overflow-hidden bg-[#1a1a1a] border border-white/5 hover:border-[#E87B2E]/50 transition-all duration-500 hover:-translate-y-1.5">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                  </div>
                  <div className="p-7">
                    <span className="font-mono text-[10px] tracking-[2px] text-[#E87B2E] mb-2 block">{s.num}</span>
                    <h3 className="font-head text-2xl tracking-wider mb-2 group-hover:text-[#E87B2E] transition-colors">{s.title}</h3>
                    <p className="text-sm text-[#999] leading-relaxed mb-4">{s.short}</p>
                    <span className="font-cond text-xs font-bold tracking-[2px] uppercase text-[#E87B2E] inline-flex items-center gap-2">
                      View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
