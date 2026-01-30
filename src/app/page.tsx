import { Hero } from "@/components/home/Hero";
import { ForYouSection } from "@/components/sections/ForYouSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ForYouSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
