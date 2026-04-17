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
              <h3 className="font-head text-2xl tracking-wider mb-4">REQUEST A QUOTE</h3>
              {/* GHL Form Embed */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/CueV9qDpbEDqZkCqL8qa"
                      style="width:100%;height:998px;border:none;border-radius:8px"
                      id="inline-CueV9qDpbEDqZkCqL8qa-contact"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Inbound Website Form"
                      data-height="998"
                      data-layout-iframe-id="inline-CueV9qDpbEDqZkCqL8qa-contact"
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

      {/* Map */}
      <div className="h-[400px] relative">
        <iframe src={COMPANY.mapEmbed} className="w-full h-full border-0 grayscale-[70%]" loading="lazy" title="Location" />
      </div>
    </>
  );
}
