"use client";
import { useEffect } from "react";
import { registerGSAP, animateFadeUp } from "@/lib/gsap-animations";
import { ProjectCard3D } from "@/components/ui/ProjectCard3D";
import { PROJECTS } from "@/lib/projects-data";

export function ProjectsSection() {
  useEffect(() => {
    registerGSAP();
    animateFadeUp(".project-card", 0.15);
  }, []);

  return (
    <section id="projects" style={{ padding: "120px 40px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{
        fontSize: "0.72rem", color: "#be185d", fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12,
        fontFamily: "var(--font-jetbrains-mono)",
      }}>
        Projects
      </div>
      <h2 style={{
        fontFamily: "var(--font-space-grotesk)",
        fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
        color: "#fdf2f8", marginBottom: 16,
      }}>
        Three problems. Three solutions. All deployed.
      </h2>
      <p style={{ color: "#94a3b8", marginBottom: 60, maxWidth: 560, fontSize: "1rem" }}>
        Each project solves a real problem in healthcare or finance — fully live with
        seed data, zero cost infrastructure.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {PROJECTS.map((project) => (
          <div key={project.id} className="project-card">
            <ProjectCard3D project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
