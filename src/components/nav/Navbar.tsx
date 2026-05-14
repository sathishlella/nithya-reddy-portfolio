"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Experience", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "16px 40px",
      background: scrolled ? "rgba(8,3,8,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(74,19,64,0.4)" : "none",
      transition: "all 0.3s ease",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <div style={{
        fontFamily: "var(--font-space-grotesk)", fontWeight: 900,
        fontSize: "1.1rem", color: "#f9a8d4", letterSpacing: "0.1em",
      }}>
        NR
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {NAV_LINKS.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            style={{
              color: "#94a3b8", fontSize: "0.82rem", fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.05em",
              textTransform: "uppercase", transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f9a8d4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
