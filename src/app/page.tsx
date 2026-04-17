import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SectionDespre } from "@/components/section-despre";
import { SectionPrincipii } from "@/components/section-principii";
import { SectionMPG } from "@/components/section-mpg";
import { SectionContact } from "@/components/section-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-cream text-brown">
      <Nav />
      <Hero />
      <SectionDespre />
      <SectionPrincipii />
      <SectionMPG />
      <SectionContact />
      <Footer />
    </main>
  );
}
