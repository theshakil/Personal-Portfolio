import { Contact } from "@/components/Contact";
import { Disciplines } from "@/components/Disciplines";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Method } from "@/components/Method";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Spotlight } from "@/components/Spotlight";
import { Toolkit } from "@/components/Toolkit";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-[-64px] z-[100] rounded-full bg-accent px-[18px] py-3 font-semibold text-on-accent transition-[top] duration-200 focus:top-[calc(env(safe-area-inset-top,0px)+12px)]"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Spotlight />
      <Hero />
      <main id="main">
        <Intro />
        <Stack />
        <Disciplines />
        <Toolkit />
        <Work />
        <Method />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
