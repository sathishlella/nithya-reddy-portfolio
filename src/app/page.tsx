import { Navbar } from "@/components/nav/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { NaviSection } from "@/components/sections/NaviSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { NaviWidget } from "@/components/ui/NaviWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <NaviSection />
        <ContactSection />
      </main>
      <NaviWidget />
    </>
  );
}
