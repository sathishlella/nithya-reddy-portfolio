"use client";
import { useState } from "react";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px",
    background: "#0f060f", border: "1px solid #4a134066",
    borderRadius: 8, color: "#e0d0e8", fontSize: "0.88rem",
    outline: "none", fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "120px 40px 80px", maxWidth: 700, margin: "0 auto" }}>
      <div style={{
        fontSize: "0.72rem", color: "#be185d", fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12,
        fontFamily: "var(--font-jetbrains-mono)",
      }}>
        Contact
      </div>
      <h2 style={{
        fontFamily: "var(--font-space-grotesk)",
        fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
        color: "#fdf2f8", marginBottom: 16,
      }}>
        Let&apos;s work together.
      </h2>
      <p style={{ color: "#94a3b8", marginBottom: 48, fontSize: "1rem" }}>
        Interested in data analyst or health informatics roles — open to full-time
        positions and contract engagements.
      </p>

      {sent ? (
        <div style={{ textAlign: "center", padding: 60,
          color: "#6ee7b7", fontWeight: 700, fontSize: "1.1rem" }}>
          ✓ Message sent! I&apos;ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <input style={inputStyle} type="text" placeholder="Your name" required
            onFocus={(e) => (e.target.style.borderColor = "#be185d")}
            onBlur={(e) => (e.target.style.borderColor = "#4a134066")} />
          <input style={inputStyle} type="email" placeholder="Your email" required
            onFocus={(e) => (e.target.style.borderColor = "#be185d")}
            onBlur={(e) => (e.target.style.borderColor = "#4a134066")} />
          <textarea style={{ ...inputStyle, height: 140, resize: "vertical" }}
            placeholder="Your message" required
            onFocus={(e) => (e.target.style.borderColor = "#be185d")}
            onBlur={(e) => (e.target.style.borderColor = "#4a134066")} />
          <button type="submit" style={{
            padding: "14px", borderRadius: 8,
            background: "#be185d", border: "none",
            color: "#fdf2f8", fontWeight: 700, fontSize: "0.9rem",
            cursor: "pointer", letterSpacing: "0.08em",
            boxShadow: "0 0 20px #be185d44",
          }}>
            Send Message
          </button>
        </form>
      )}

      <div style={{ marginTop: 60, display: "flex", gap: 32, justifyContent: "center" }}>
        {[
          { label: "LinkedIn", url: "https://linkedin.com/in/nithyareddyvemula" },
          { label: "GitHub", url: "https://github.com/nithyareddy" },
          { label: "Email", url: "mailto:nithya@example.com" },
        ].map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
            style={{
              color: "#64748b", fontSize: "0.8rem", fontWeight: 700,
              textDecoration: "none", textTransform: "uppercase",
              letterSpacing: "0.1em", transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f9a8d4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
            {link.label}
          </a>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 60,
        fontSize: "0.72rem", color: "#4a1340" }}>
        © 2025 Nithya Reddy Vemula · Built with Next.js + Spline + GSAP
      </div>
    </section>
  );
}
