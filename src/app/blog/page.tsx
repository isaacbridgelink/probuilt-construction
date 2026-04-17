import Image from "next/image";
import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Blog — Construction Tips & Insights",
  description: "Construction tips, project insights, and industry knowledge from Pro Built Construction in Gillette, Wyoming.",
};

const posts = [
  { slug: "concrete-finish-guide", title: "How to Choose the Right Concrete Finish for Your Wyoming Driveway", excerpt: "Broom, stamped, or exposed aggregate? Here's what holds up best against Wyoming's freeze-thaw cycles.", image: "/images/concrete-finished.webp", cat: "Concrete" },
  { slug: "seasonal-snow-contracts", title: "Why Seasonal Snow Contracts Save You Money (And Headaches)", excerpt: "Per-push pricing sounds cheaper until the first big storm. Here's the real math behind seasonal contracts.", image: "/images/snow-plow-night.webp", cat: "Snow Removal" },
  { slug: "breaking-ground-wyoming", title: "5 Things to Know Before Breaking Ground on Your Wyoming Build", excerpt: "Permits, soil conditions, utility locates, and the prep work most contractors skip.", image: "/images/excavation-dig.webp", cat: "Excavation" },
];

export default function Blog() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <span className="font-cond text-xs font-semibold tracking-[0.3em] uppercase text-[#E87B2E] mb-4 block">From the Field</span>
            <h1 className="font-head text-[clamp(3rem,7vw,6rem)] leading-none">Latest <span className="text-[#E87B2E]">Posts.</span></h1>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-24 md:pb-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <AnimateIn key={p.slug} delay={i * 0.1}>
              <article className="bg-[#1a1a1a] border border-white/5 overflow-hidden hover:border-[#E87B2E]/50 hover:-translate-y-1.5 transition-all duration-500 group">
                <div className="relative h-56 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-7">
                  <div className="flex justify-between mb-3">
                    <span className="font-cond text-[10px] tracking-[2px] uppercase text-[#E87B2E]">{p.cat}</span>
                    <span className="font-cond text-[10px] tracking-[2px] uppercase text-[#999]">Coming Soon</span>
                  </div>
                  <h3 className="font-head text-xl tracking-wider mb-3 leading-tight">{p.title}</h3>
                  <p className="text-sm text-[#999] leading-relaxed mb-4">{p.excerpt}</p>
                  <span className="font-cond text-xs font-bold tracking-[2px] uppercase text-[#E87B2E]">Read More →</span>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
