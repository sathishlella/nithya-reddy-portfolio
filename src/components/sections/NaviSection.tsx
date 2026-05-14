"use client";

export function NaviSection() {
  return (
    <section id="navi" style={{ padding: "120px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{
        fontSize: "0.72rem", color: "#be185d", fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 12,
        fontFamily: "var(--font-jetbrains-mono)",
      }}>
        AI Assistant
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <h2 style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            color: "#fdf2f8", lineHeight: 1.1, marginBottom: 20,
          }}>
            Meet <span style={{ color: "#be185d" }}>N.A.V.I.</span>
          </h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 }}>
            Nithya&apos;s Analytical Virtual Intelligence — an AI chatbot trained on Nithya&apos;s
            resume, projects, and experience. Ask it anything about her background.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Powered by GPT-4o-mini via OpenAI",
              "Streaming responses in real time",
              "Knows Nithya's full resume and project portfolio",
              "Available 24/7 — click the ✦ in the bottom right",
            ].map((item) => (
              <li key={item} style={{
                padding: "6px 0 6px 20px", position: "relative",
                color: "#c4b0cc", fontSize: "0.88rem",
              }}>
                <span style={{ position: "absolute", left: 0, color: "#be185d" }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          background: "#0f060f", border: "1.5px solid #be185d44",
          borderRadius: 20, overflow: "hidden",
        }}>
          <div style={{ padding: "14px 20px", background: "#1a0a1a",
            borderBottom: "1px solid #4a134066" }}>
            <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900,
              fontSize: "0.9rem", color: "#f9a8d4" }}>N.A.V.I. Demo</div>
          </div>
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { role: "user", text: "Does Nithya have experience with HIPAA compliance?" },
              { role: "navi", text: "Yes! At Dallas College, Nithya mapped 115+ clinical data elements for HEDIS compliance — all within HIPAA-compliant data handling protocols. At Deloitte, she builds ETL pipelines for 3 health system clients with PHI de-identification requirements built in. She's well-versed in both the regulatory side and the technical implementation." },
            ].map((msg, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth: "85%", padding: "10px 14px",
                  borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: msg.role === "user" ? "#be185d" : "#1a0a1a",
                  border: msg.role === "navi" ? "1px solid #4a134066" : "none",
                  color: "#e0d0e8", fontSize: "0.82rem", lineHeight: 1.5,
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
