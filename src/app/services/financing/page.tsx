import Image from "next/image"; import Link from "next/link"; import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn"; import { SERVICES, COMPANY } from "@/lib/constants";
const svc = SERVICES[4];
export const metadata: Metadata = { title: `${svc.title} — Pro Built Construction`, description: `${svc.description} Gillette, Wyoming. ${COMPANY.phone}` };
export default function Page() { return (<>
  <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
    <Image src={svc.heroImage} alt={svc.title} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-12">
      <AnimateIn><span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-4 block">{svc.num} — Services</span>
      <h1 className="font-head text-[clamp(3rem,7vw,6rem)] leading-none"><span className="text-[#E87B2E]">Financing</span> Available.</h1></AnimateIn>
    </div></section>
  <section className="py-24 md:py-36 px-6 md:px-12"><div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
    <div><AnimateIn><p className="text-lg text-[#d4d0c8] leading-relaxed mb-8">{svc.description}</p>
    <ul className="grid grid-cols-2 gap-3">{svc.features.map(f=>(<li key={f} className="text-sm text-[#999] pl-5 relative before:content-['+'] before:absolute before:left-0 before:text-[#E87B2E] before:font-bold">{f}</li>))}</ul>
    <Link href="/contact" className="inline-block mt-8 bg-[#E87B2E] text-black font-cond font-bold text-sm tracking-[2px] uppercase px-8 py-4 hover:bg-[#F28C3A] transition-colors">Apply for Financing →</Link></AnimateIn></div>
    <AnimateIn delay={0.2}><div className="grid grid-cols-2 gap-3">
      {svc.gallery.map((img,i)=>(<div key={i} className={`relative overflow-hidden ${i===0?'col-span-2 h-64':'h-48'}`}><Image src={img} alt={`${svc.title} ${i+1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" /></div>))}
    </div></AnimateIn></div></section>
</>); }
