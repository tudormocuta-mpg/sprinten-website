import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SectionDespre } from "@/components/section-despre";
import { SectionPrincipii } from "@/components/section-principii";
import { SectionMPG } from "@/components/section-mpg";
import { SectionContact } from "@/components/section-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-cream text-brown">
      <div className="grain-overlay fixed inset-0 z-[100]" />
      <Nav />
      <main>
        <Hero />
        <SectionDespre />
        <SectionPrincipii />
        <SectionMPG />
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
}
