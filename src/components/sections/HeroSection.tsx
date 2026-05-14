"use client";
import { useEffect, useRef } from "react";
import { SplineHero } from "@/components/ui/SplineHero";
import { registerGSAP, animateHeroName } from "@/lib/gsap-animations";

export function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (nameRef.current) animateHeroName(nameRef.current);

    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      subtitleRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.transition = "all 0.8s ease 0.8s";
          subtitleRef.current.style.opacity = "1";
          subtitleRef.current.style.transform = "none";
        }
      }, 100);
    }
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.style.transition = "opacity 0.8s ease 1.2s";
          ctaRef.current.style.opacity = "1";
        }
      }, 100);
    }
  }, []);

  return (
    <section id="hero" style={{
      position: "relative", width: "100%", height: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <SplineHero />

      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, #08030888 100%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px" }}>
        <div style={{
          fontSize: "0.72rem", color: "#be185d", fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16,
          fontFamily: "var(--font-jetbrains-mono)",
        }}>
          Data Analyst · Health Informatics · AI
        </div>

        <h1 ref={nameRef} style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 900, lineHeight: 1,
          color: "#fdf2f8", letterSpacing: "0.12em",
          textTransform: "uppercase",
          opacity: 0,
        }}>
          NITHYA REDDY
        </h1>

        <p ref={subtitleRef} style={{
          marginTop: 20, fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "#94a3b8", fontWeight: 400, letterSpacing: "0.05em",
          maxWidth: 600,
        }}>
          Turning clinical and financial data into decisions that matter.
        </p>

        <div ref={ctaRef} style={{
          marginTop: 40, display: "flex", gap: 16,
          justifyContent: "center", flexWrap: "wrap",
        }}>
          <a href="#projects"
            style={{
              padding: "14px 32px", borderRadius: 8,
              background: "#be185d", color: "#fdf2f8",
              fontWeight: 700, fontSize: "0.88rem",
              textDecoration: "none", letterSpacing: "0.08em",
              transition: "all 0.2s",
              boxShadow: "0 0 20px #be185d66",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px #be185d99")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px #be185d66")}>
            View My Work
          </a>
          <a href="#navi"
            style={{
              padding: "14px 32px", borderRadius: 8,
              background: "transparent",
              border: "1.5px solid #f9a8d4",
              color: "#f9a8d4",
              fontWeight: 700, fontSize: "0.88rem",
              textDecoration: "none", letterSpacing: "0.08em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f9a8d411";
              e.currentTarget.style.boxShadow = "0 0 20px #f9a8d444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}>
            Meet N.A.V.I.
          </a>
        </div>

        <div style={{ marginTop: 60, display: "flex", flexDirection: "column",
          alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: "0.65rem", color: "#4a1340", letterSpacing: "0.15em",
            textTransform: "uppercase" }}>Scroll to explore</div>
          <div style={{ width: 1, height: 40,
            background: "linear-gradient(to bottom, #be185d, transparent)" }} />
        </div>
      </div>
    </section>
  );
}
