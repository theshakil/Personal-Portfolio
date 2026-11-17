import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Figtree } from "next/font/google";
import "./globals.css";
import { profile, seo, socials } from "@/lib/content";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-face",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.title,
    description: "Great Design and Softwares. AI-powered Android apps, full-stack web and brand design from Nairobi.",
    type: "profile",
    url: "/",
  },
  twitter: { card: "summary", title: seo.title, description: seo.description },
  robots: { index: true, follow: true },
};

/** Structured data so search engines and AI tools can read who this is without guessing. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI Android Engineer and Full-Stack Developer",
  description: seo.description,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: profile.city, addressCountry: "KE" },
  sameAs: socials.map((social) => social.href),
  knowsAbout: [
    "Android development",
    "Kotlin",
    "Jetpack Compose",
    "Machine learning",
    "PyTorch",
    "TensorFlow",
    "Next.js",
    "React",
    "TypeScript",
    "Spring Boot",
    "Graphic design",
    "Brand design",
  ],
};

export const viewport: Viewport = {
  themeColor: "#120d0d",
  viewportFit: "cover",
};

/** Runs before first paint so the saved day or night choice never flashes. */
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
