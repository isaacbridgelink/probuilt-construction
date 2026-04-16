import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Pro Built Construction Inc. | General Contractor | Gillette, WY",
    template: "%s | Pro Built Construction",
  },
  description:
    "Pro Built Construction — Gillette Wyoming's trusted general contractor since 1991. Custom homes, concrete, excavation, remodeling, snow removal, landscaping. Licensed, bonded, insured. 500+ projects. Free estimates: 307-687-7526.",
  keywords:
    "construction Gillette Wyoming, general contractor, concrete contractor, excavation, snow removal, custom home builder, remodeling, Campbell County",
  openGraph: {
    title: "Pro Built Construction Inc. | Gillette, Wyoming",
    description:
      "30+ years building Wyoming. Custom homes, concrete, excavation, snow removal. Built on Integrity. Driven by Results.",
    type: "website",
    url: "https://probuilt-construction.vercel.app",
    images: ["/images/hero-wide.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Built Construction Inc. | Gillette, Wyoming",
    description: "30+ years building Wyoming. Custom homes, concrete, excavation, snow removal.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="noise-overlay">
        <CustomCursor />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
