import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Get a Free Estimate",
  description: `Contact Pro Built Construction Inc. in Gillette, Wyoming. Call ${COMPANY.phone} or request a free estimate online. Licensed, bonded, insured.`,
};

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-24 md:pb-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <AnimateIn>
              <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-4 block">Get In Touch</span>
              <h1 className="font-head text-[clamp(3rem,7vw,6rem)] leading-none mb-4">Let&apos;s <span className="text-[#E87B2E]">Talk.</span></h1>
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
                {[
                  { href: COMPANY.social.facebook, label: "FB" },
                  { href: COMPANY.social.linkedin, label: "LI" },
                  { href: COMPANY.social.gmb, label: "G" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener" className="w-10 h-10 border border-white/10 flex items-center justify-center font-cond font-bold text-xs text-[#999] hover:bg-[#E87B2E] hover:border-[#E87B2E] hover:text-black transition-all">
                    {s.label}
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.2}>
            <div className="bg-[#111] border border-white/5 border-t-[3px] border-t-[#E87B2E] p-8 md:p-10">
              <h3 className="font-head text-2xl tracking-wider mb-8">REQUEST A QUOTE</h3>
              {/* TODO: Replace with GHL form embed */}
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] mb-2 block">First Name</label>
                    <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white focus:border-[#E87B2E] focus:ring-1 focus:ring-[#E87B2E]/30 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] mb-2 block">Last Name</label>
                    <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white focus:border-[#E87B2E] focus:ring-1 focus:ring-[#E87B2E]/30 outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] mb-2 block">Phone</label>
                    <input type="tel" className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white focus:border-[#E87B2E] focus:ring-1 focus:ring-[#E87B2E]/30 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] mb-2 block">Email</label>
                    <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white focus:border-[#E87B2E] focus:ring-1 focus:ring-[#E87B2E]/30 outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] mb-2 block">Service Needed</label>
                  <select className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white focus:border-[#E87B2E] outline-none appearance-none">
                    <option value="">Select one...</option>
                    <option>New Construction / Custom Home</option>
                    <option>Concrete & Driveway Work</option>
                    <option>Excavation</option>
                    <option>Kitchen or Bathroom Remodel</option>
                    <option>Snow Removal Contract</option>
                    <option>Lawn Care & Landscaping</option>
                    <option>Site Maintenance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-cond text-[10px] font-semibold tracking-[0.2em] uppercase text-[#999] mb-2 block">Project Details</label>
                  <textarea rows={4} className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white focus:border-[#E87B2E] focus:ring-1 focus:ring-[#E87B2E]/30 outline-none transition-colors resize-y" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full bg-[#E87B2E] text-black font-cond font-bold text-sm tracking-[2px] uppercase py-4 hover:bg-[#F28C3A] transition-colors flex items-center justify-center gap-3">
                  Send Request <span>→</span>
                </button>
              </form>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Map */}
      <div className="h-[400px] relative">
        <iframe src={COMPANY.mapEmbed} className="w-full h-full border-0 grayscale-[70%]" loading="lazy" title="Location" />
      </div>
    </>
  );
}
