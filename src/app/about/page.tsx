import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Bryan Miller & Pro Built Construction",
  description: `Meet Bryan Miller, founder of Pro Built Construction Inc. 33+ years building Wyoming. Family-run, licensed, bonded, insured general contractor in Gillette, WY.`,
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image src="/images/team-portrait.webp" alt="Pro Built crew" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-12">
          <AnimateIn>
            <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-4 block">About Pro Built</span>
            <h1 className="font-head text-[clamp(3rem,7vw,6rem)] leading-none">Meet the <span className="text-[#E87B2E]">Builder.</span></h1>
          </AnimateIn>
        </div>
      </section>

      {/* Bryan Miller */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <div className="relative">
              <div className="aspect-[3/4] bg-[#111] border border-white/5 overflow-hidden relative">
                <Image src="/images/blueprints-planning.webp" alt="Bryan Miller reviewing plans" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#E87B2E] text-black p-6 text-center">
                <div className="font-head text-5xl leading-none">33</div>
                <div className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase mt-1">Years Building<br/>Wyoming</div>
              </div>
            </div>
          </AnimateIn>

          <div>
            <AnimateIn>
              <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-4 block">Meet the Founder</span>
              <h2 className="font-head text-[clamp(3rem,5vw,5rem)] leading-none mb-2">Bryan <span className="text-[#E87B2E]">Miller.</span></h2>
              <p className="font-cond text-sm tracking-[0.2em] uppercase text-[#E87B2E] mb-8">{COMPANY.ownerTitle}</p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <p className="text-[#d4d0c8] leading-relaxed mb-5">
                Bryan Miller started Pro Built in 1991 with a simple idea: do the job right, charge a fair price, and show up when you say you will. Over three decades later, that hasn&apos;t changed.
              </p>
              <p className="text-[#d4d0c8] leading-relaxed mb-5">
                A husband and father of three, Bryan built Pro Built from the ground up — literally. What started as one man and a truck grew into a 20-to-50-person operation handling everything from custom homes and commercial builds to concrete, excavation, snow removal, and landscaping across Northeast Wyoming.
              </p>
              <p className="text-[#d4d0c8] leading-relaxed mb-8">
                Bryan&apos;s not in an office. He&apos;s on the site. He&apos;s the guy who answers your call, walks your property, and makes sure the crew does it right.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <blockquote className="font-head text-[clamp(1.5rem,3vw,2.5rem)] leading-tight pl-6 border-l-[3px] border-[#E87B2E] mb-8">
                &ldquo;We&apos;re a working company. Not a clipboard company.&rdquo;
                <cite className="block font-cond text-xs tracking-[0.2em] uppercase text-[#999] mt-3 not-italic">— Bryan Miller</cite>
              </blockquote>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="flex gap-8 pt-6 border-t border-white/10">
                {[
                  { num: "1991", label: "Founded" },
                  { num: "500+", label: "Projects" },
                  { num: "20-49", label: "Crew" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-head text-3xl text-[#E87B2E]">{s.num}</div>
                    <div className="font-cond text-[10px] tracking-[0.2em] uppercase text-[#999] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <h2 className="font-head text-[clamp(2.5rem,5vw,4rem)] leading-none mb-12 text-center">
              Our <span className="text-[#E87B2E]">Values.</span>
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-4 gap-1">
            {["Integrity", "Precision", "Grit", "Honesty"].map((v, i) => (
              <AnimateIn key={v} delay={i * 0.1}>
                <div className="bg-[#1a1a1a] p-8 text-center border-t-2 border-[#E87B2E] hover:bg-[#222] transition-all">
                  <div className="font-head text-5xl text-[#E87B2E]/30 mb-3">0{i + 1}</div>
                  <h3 className="font-head text-2xl tracking-wider">{v}</h3>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <h2 className="font-head text-[clamp(2rem,4vw,3rem)] leading-none mb-8">Find <span className="text-[#E87B2E]">Us.</span></h2>
          </AnimateIn>
          <div className="relative h-[400px] border border-white/5">
            <iframe
              src={COMPANY.mapEmbed}
              className="w-full h-full border-0 grayscale-[70%] contrast-110"
              loading="lazy"
              title="Pro Built Construction location"
            />
            <div className="absolute bottom-6 left-6 bg-[#1a1a1a] border border-white/10 p-5">
              <h4 className="font-cond font-bold text-sm tracking-wider mb-1">{COMPANY.name}</h4>
              <p className="text-xs text-[#999]">{COMPANY.fullAddress}</p>
              <a href={COMPANY.social.gmb} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-[#E87B2E] text-xs font-semibold mt-2">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E87B2E] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-head text-[clamp(2.5rem,5vw,4rem)] text-black mb-4">Ready to Build?</h2>
          <Link href="/contact" className="inline-block bg-black text-white font-cond font-bold text-sm tracking-[2px] uppercase px-10 py-4 hover:bg-[#1a1a1a] transition-colors">
            Request Free Estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
