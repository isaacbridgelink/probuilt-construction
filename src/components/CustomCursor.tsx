"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animate);
    };

    // Hover states
    const onEnter = () => ring.classList.add("hover");
    const onLeave = () => ring.classList.remove("hover");

    document.addEventListener("mousemove", onMove);
    requestAnimationFrame(animate);

    // Watch for interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial bind
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{ willChange: "transform" }}
      >
        <div className="w-[6px] h-[6px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div
        ref={ringRef}
        id="cursor-ring"
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{ willChange: "transform" }}
      >
        <div className="cursor-ring-inner w-[36px] h-[36px] border border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      </div>
      <style jsx global>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
        @media (pointer: coarse) {
          #cursor-ring, #cursor-ring + div { display: none; }
        }
        #cursor-ring.hover .cursor-ring-inner {
          width: 64px;
          height: 64px;
          background: rgba(232, 123, 46, 0.15);
          border-color: rgba(232, 123, 46, 0.6);
        }
      `}</style>
    </>
  );
}
