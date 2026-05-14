"use client";
import { useEffect } from "react";
import { registerGSAP, animateTimeline } from "@/lib/gsap-animations";
import { EXPERIENCES } from "@/lib/projects-data";

export function ExperienceSection() {
  useEffect(() => {
    registerGSAP();
    animateTimeline("#experience");
  }, []);

  return (
    <section id="experience" style={{ padding: "120px 40px", maxWidth: 900, margin: "0 auto" }}>
      <div style={{
        fontSize: "0.72rem", color: "#be185d", fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12,
        fontFamily: "var(--font-jetbrains-mono)",
      }}>
        Experience
      </div>
      <h2 style={{
        fontFamily: "var(--font-space-grotesk)",
        fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
        color: "#fdf2f8", marginBottom: 60,
      }}>
        Where I&apos;ve made an impact.
      </h2>

      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: "50%", top: 0, bottom: 0,
          width: 1, background: "linear-gradient(to bottom, #be185d, #4a1340, transparent)",
          transform: "translateX(-50%)",
        }} />

        {EXPERIENCES.map((exp, i) => (
          <div key={exp.company} className="timeline-item"
            style={{
              display: "flex",
              justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
              paddingBottom: 48, position: "relative",
            }}>
            <div style={{
              position: "absolute", left: "50%", top: 24,
              width: 12, height: 12, borderRadius: "50%",
              background: exp.color,
              boxShadow: `0 0 12px ${exp.color}`,
              transform: "translateX(-50%)",
              zIndex: 1,
            }} />

            <div style={{
              width: "45%",
              background: "#0f060f",
              border: `1.5px solid ${exp.color}44`,
              borderRadius: 16, padding: "24px 28px",
            }}>
              <div style={{
                fontSize: "0.65rem", color: exp.color, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6,
                fontFamily: "var(--font-jetbrains-mono)",
              }}>
                {exp.period}
              </div>
              <div style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "1.1rem", fontWeight: 900, color: "#fdf2f8", marginBottom: 2,
              }}>
                {exp.company}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: 14 }}>
                {exp.role}
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {exp.bullets.map((b, bi) => (
                  <li key={bi} style={{
                    fontSize: "0.82rem", color: "#c4b0cc", lineHeight: 1.6,
                    paddingLeft: 16, position: "relative", marginBottom: 6,
                  }}>
                    <span style={{ position: "absolute", left: 0, color: exp.color }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
