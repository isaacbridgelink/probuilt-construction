import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { HeroCarousel } from "@/components/HeroCarousel";
import { COMPANY, SERVICES, TESTIMONIALS, PROCESS_STEPS } from "@/lib/constants";
import { FAQ } from "@/components/FAQ";
import { HeroTitle } from "@/components/HeroTitle";
import { HeroBadge, HeroContent } from "@/components/HeroContent";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";

export default function Home() {
  return (
    <>
      {/* ═══ HERO — 5 rotating images ═══ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-[#0a0a0a]/50 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60 z-[1]" />
        <div className="absolute inset-0 blueprint-grid pointer-events-none z-[2]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-24 pb-8">
          <HeroBadge />

          <div className="mb-4">
            <HeroTitle />
          </div>

          <HeroContent />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-t border-white/10 pt-6">
            {[
              { num: "30", suffix: "+", label: "Years\nExperience" },
              { num: "500", suffix: "+", label: "Projects\nDelivered" },
              { num: "100", suffix: "%", label: "Satisfaction\nGuaranteed" },
              { num: "24/7", suffix: "", label: "Snow Response\nPriority" },
            ].map((s, i) => (
              <div key={i} className="pr-6">
                <AnimatedCounter value={s.num} suffix={s.suffix} />
                <div className="font-cond text-[11px] font-medium tracking-[0.2em] uppercase text-[#999] mt-2 whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TICKER ═══ */}
      <div className="bg-[#E87B2E] py-5 overflow-hidden border-y-[3px] border-[#0a0a0a]">
        <div className="flex whitespace-nowrap animate-ticker">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-head text-2xl text-black px-6 tracking-wider">
              NEW CONSTRUCTION ◆ CONCRETE &amp; FOUNDATIONS ◆ REMODELING ◆ KITCHEN &amp; BATH ◆ FINANCING AVAILABLE ◆{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ ABOUT INTRO — "When it needs done right" ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <AnimateIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] border border-white/10 px-2 py-1">01</span>
                <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E]">About Pro Built</span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-head text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] mb-6">
                WHEN IT NEEDS DONE{" "}
                <em className="text-[#E87B2E] italic">RIGHT,</em> YOU CALL PRO BUILT.
              </h2>
              <div className="w-16 h-1 bg-[#E87B2E] mt-4" />
            </AnimateIn>
          </div>
          <div>
            <AnimateIn delay={0.2}>
              <p className="text-[#d4d0c8] leading-relaxed mb-8">
                We&apos;re a family-run Wyoming crew that&apos;s been pouring, digging, and plowing across Campbell County for more than three decades. No outsourced labor. No corner-cutting. Just a tight team of operators who treat every jobsite like their own property.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Licensed & Insured", "Locally Owned", "30+ Years", "Gillette, WY"].map((tag) => (
                  <span key={tag} className="font-cond text-[11px] font-semibold tracking-[0.18em] uppercase text-[#d4d0c8] border border-white/10 px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/services" className="font-cond text-sm font-bold tracking-[2px] uppercase text-[#E87B2E] hover:text-[#F28C3A] transition-colors inline-flex items-center gap-3">
                Explore Our Services <span>→</span>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══ THREE TRADES ═══ */}
      <section id="services" className="py-24 md:py-36 px-6 md:px-12 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-5 block">What We Build</span>
            <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-4">
              Three trades. <em className="text-[#E87B2E] not-italic">One standard.</em>
            </h2>
            <p className="text-[#d4d0c8] max-w-lg mb-16">Every project — residential or commercial — gets the same obsessive attention to prep, quality, and finish.</p>
          </AnimateIn>

          <StaggerReveal className="grid md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block bg-[#1a1a1a] border border-white/5 hover:border-[#E87B2E]/30 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover scale-105 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <span className="font-cond text-[10px] tracking-[2px] uppercase text-[#E87B2E]">{s.num}</span>
                      <span className="font-cond text-[10px] tracking-[2px] uppercase text-[#666]">Services</span>
                    </div>
                    <h3 className="font-head text-xl tracking-wider mb-2 group-hover:text-[#E87B2E] transition-colors">{s.title}</h3>
                    <p className="text-sm text-[#999] leading-relaxed mb-3">{s.short}</p>
                    <span className="font-cond text-[11px] tracking-[2px] uppercase text-[#E87B2E] inline-flex items-center gap-2">
                      View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ═══ PROCESS (consistent boxes) ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-4 -right-10 font-head text-[280px] text-[#E87B2E]/[0.03] leading-none pointer-events-none select-none">PROCESS</div>
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-5 block">How We Work</span>
            <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-16">
              From first call to final <em className="text-[#E87B2E] not-italic">walk-through.</em>
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {PROCESS_STEPS.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 0.1}>
                <div className="bg-[#111] border-t-2 border-[#E87B2E] p-8 h-full flex flex-col hover:bg-[#1a1a1a] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="font-head text-5xl text-[#E87B2E] mb-5">{step.num}</div>
                  <h4 className="font-head text-xl tracking-wider mb-3">{step.title}</h4>
                  <p className="text-sm text-[#999] leading-relaxed flex-1">{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SELECTED JOBS / PORTFOLIO ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#111] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <AnimateIn>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] border border-white/10 px-2 py-1">04</span>
                  <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E]">Recent Work</span>
                </div>
                <h2 className="font-head text-[clamp(3rem,6vw,5.5rem)] leading-[0.95]">
                  SELECTED <em className="text-[#E87B2E] italic">JOBS.</em>
                </h2>
              </AnimateIn>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Residential Driveway & Approach", cat: "Concrete", year: "2026", loc: "Gillette, WY", img: "/images/project-driveway.webp" },
              { title: "Commercial Site Prep", cat: "New Construction", year: "2025", loc: "Campbell County", img: "/images/project-site-prep.webp" },
              { title: "HOA Snow Contract", cat: "Snow Removal", year: "2025", loc: "Gillette, WY", img: "/images/project-snow-contract.webp" },
            ].map((project, i) => (
              <AnimateIn key={project.title} delay={i * 0.1}>
                <div className="group bg-[#1a1a1a] border border-white/5 hover:border-[#E87B2E]/30 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={project.img} alt={project.title} fill className="object-cover scale-105 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <span className="font-cond text-[10px] tracking-[2px] uppercase text-[#E87B2E]">{project.cat}</span>
                      <span className="font-cond text-[10px] tracking-[2px] uppercase text-[#666]">{project.year}</span>
                    </div>
                    <h4 className="font-head text-xl tracking-wider mb-1">{project.title}</h4>
                    <span className="font-cond text-[11px] tracking-[2px] uppercase text-[#999]">{project.loc}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Second row — wide + regular */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { title: "Shop Foundation & Slab Pour", cat: "Concrete", year: "2025", loc: "Wright, WY", img: "/images/project-foundation.webp" },
              { title: "Full Kitchen Renovation", cat: "Remodeling", year: "2024", loc: "Gillette, WY", img: "/images/project-remodel.webp" },
            ].map((project, i) => (
              <AnimateIn key={project.title} delay={i * 0.1}>
                <div className="group bg-[#1a1a1a] border border-white/5 hover:border-[#E87B2E]/30 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={project.img} alt={project.title} fill className="object-cover scale-105 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <span className="font-cond text-[10px] tracking-[2px] uppercase text-[#E87B2E]">{project.cat}</span>
                      <span className="font-cond text-[10px] tracking-[2px] uppercase text-[#666]">{project.year}</span>
                    </div>
                    <h4 className="font-head text-xl tracking-wider mb-1">{project.title}</h4>
                    <span className="font-cond text-[11px] tracking-[2px] uppercase text-[#999]">{project.loc}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT (Bryan Miller) ═══ */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-[#111] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <div className="relative">
              <div className="aspect-[3/4] bg-[#1a1a1a] border border-white/5 overflow-hidden relative">
                <Image src="/images/blueprints-planning.webp" alt="Bryan Miller reviewing plans" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#E87B2E] text-black p-6 text-center">
                <div className="font-head text-5xl leading-none">33</div>
                <div className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase mt-1">Years Building<br />Wyoming</div>
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
              <p className="text-[#d4d0c8] leading-relaxed mb-8">
                A husband and father of three, Bryan built Pro Built from the ground up. What started as one man and a truck grew into a 20-to-50-person operation handling everything from custom homes to snow removal across Northeast Wyoming.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <blockquote className="font-head text-[clamp(1.5rem,3vw,2.5rem)] leading-tight pl-6 border-l-[3px] border-[#E87B2E] mb-8">
                &ldquo;We&apos;re a working company. Not a clipboard company.&rdquo;
                <cite className="block font-cond text-xs tracking-[0.2em] uppercase text-[#999] mt-3 not-italic">— Bryan Miller</cite>
              </blockquote>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <Link href="/about" className="font-cond text-sm font-bold tracking-[2px] uppercase text-[#E87B2E] hover:text-[#F28C3A] transition-colors inline-flex items-center gap-2">
                Read Full Story →
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-5 block">What Clients Say</span>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.1}>
                <figure className="bg-[#1a1a1a] border border-white/5 border-l-[3px] border-l-[#E87B2E] p-8 h-full flex flex-col hover:bg-[#222] hover:-translate-y-1 transition-all duration-300">
                  <blockquote className="text-base text-white leading-relaxed italic mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="pt-5 border-t border-white/5">
                    <strong className="font-head text-xl text-[#E87B2E] tracking-wider block">{t.name}</strong>
                    <span className="font-cond text-[11px] tracking-[2px] uppercase text-[#999]">{t.role}</span>
                  </figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#111]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <AnimateIn>
            <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-5 block">Common Questions</span>
            <h2 className="font-head text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
              Frequently <em className="text-[#E87B2E] not-italic">Asked.</em>
            </h2>
          </AnimateIn>
        </div>
        <FAQ />
      </section>

      {/* ═══ CONTACT (on homepage) ═══ */}
      <section id="contact" className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <div>
            <AnimateIn>
              <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-4 block">Get In Touch</span>
              <h2 className="font-head text-[clamp(3rem,7vw,5rem)] leading-none mb-4">Let&apos;s Get To <span className="text-[#E87B2E]">Work.</span></h2>
              <p className="text-[#d4d0c8] mb-10">Tell us about your project. We&apos;ll get back with an honest scope and price in 24 hours or less.</p>
            </AnimateIn>

            {[
              { icon: "✆", label: "Call direct", value: COMPANY.phone, href: COMPANY.phoneTel },
              { icon: "✉", label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: "⚑", label: "Shop", value: COMPANY.fullAddress, href: COMPANY.social.gmb },
            ].map((c, i) => (
              <AnimateIn key={c.label} delay={i * 0.1}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="flex items-center gap-5 py-5 border-b border-white/5 hover:pl-4 transition-all group">
                  <span className="w-11 h-11 border border-[#E87B2E]/25 flex items-center justify-center text-[#E87B2E] text-lg shrink-0">{c.icon}</span>
                  <div>
                    <div className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] mb-1">{c.label}</div>
                    <div className="text-white font-medium group-hover:text-[#E87B2E] transition-colors">{c.value}</div>
                  </div>
                </a>
              </AnimateIn>
            ))}

            <AnimateIn delay={0.3}>
              <div className="flex gap-3 mt-8">
                <a href={COMPANY.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#999] hover:bg-[#E87B2E] hover:border-[#E87B2E] hover:text-black transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={COMPANY.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#999] hover:bg-[#E87B2E] hover:border-[#E87B2E] hover:text-black transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener" aria-label="Instagram" className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#999] hover:bg-[#E87B2E] hover:border-[#E87B2E] hover:text-black transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener" aria-label="TikTok" className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#999] hover:bg-[#E87B2E] hover:border-[#E87B2E] hover:text-black transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href={COMPANY.social.gmb} target="_blank" rel="noopener" aria-label="Google" className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#999] hover:bg-[#E87B2E] hover:border-[#E87B2E] hover:text-black transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </a>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.2}>
            <div className="bg-[#111] border border-white/5 border-t-[3px] border-t-[#E87B2E] p-8 md:p-10">
              <h3 className="font-head text-2xl tracking-wider mb-4">REQUEST A QUOTE</h3>
              {/* GHL Form Embed */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/CueV9qDpbEDqZkCqL8qa"
                      style="width:100%;min-height:700px;height:100%;border:none;border-radius:8px"
                      id="inline-CueV9qDpbEDqZkCqL8qa"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Inbound Website Form"
                      data-height="998"
                      data-layout-iframe-id="inline-CueV9qDpbEDqZkCqL8qa"
                      data-form-id="CueV9qDpbEDqZkCqL8qa"
                      title="Inbound Website Form"
                    ></iframe>
                    <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                  `,
                }}
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <div className="px-6 md:px-12 py-16 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-14 h-14 bg-[#E87B2E] flex items-center justify-center text-black text-2xl shrink-0">⚑</div>
            <div className="text-left">
              <h4 className="font-cond font-bold text-sm tracking-wider uppercase">{COMPANY.name}</h4>
              <p className="text-sm text-[#999]">{COMPANY.fullAddress}</p>
            </div>
          </div>
          <a href={COMPANY.social.gmb} target="_blank" rel="noopener" className="text-[#E87B2E] text-xs font-cond font-bold tracking-wider uppercase hover:text-[#F28C3A] transition-colors">
            Get Directions on Google Maps →
          </a>
        </div>
        <div className="max-w-3xl mx-auto h-[350px] border border-white/5 overflow-hidden">
          <iframe src={COMPANY.mapEmbed} className="w-full h-full border-0 grayscale-[70%] contrast-110" loading="lazy" title="Location" />
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#E87B2E] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-head text-[clamp(2.5rem,5vw,4rem)] text-black leading-none">Ready to Start Your Project?</h2>
            <p className="text-black/60 mt-3">Free, no-obligation estimate within one business day.</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <a href={COMPANY.phoneTel} className="bg-black text-white font-cond font-bold text-sm tracking-[2px] uppercase px-8 py-4 hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-3">
              Call Now — {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
