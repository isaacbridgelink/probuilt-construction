"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/hero-wide.webp",
  "/images/custom-home-framing.webp",
  "/images/concrete-pour.webp",
  "/images/excavation-dig.webp",
  "/images/snow-plow-night.webp",
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Pro Built Construction project ${i + 1}`}
            fill
            sizes="100vw"
            quality={75}
            className="object-cover scale-110 transition-transform duration-[8000ms] ease-out"
            style={{ transform: i === current ? "scale(1.15)" : "scale(1.05)" }}
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}
