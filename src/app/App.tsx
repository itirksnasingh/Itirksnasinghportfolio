import "../styles/fonts.css";
import { FloatingParticles } from "./components/FloatingParticles";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { InterestsSection } from "./components/InterestsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "#030107",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Floating firefly particles — fixed layer */}
      <FloatingParticles count={70} />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <InterestsSection />
        <ContactSection />
      </main>
    </div>
  );
}
