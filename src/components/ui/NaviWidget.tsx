"use client";
import { useState, useRef, useEffect } from "react";

interface Message { role: "user" | "assistant"; content: string; id: string; }

const WELCOME: Message = {
  id: "welcome", role: "assistant",
  content: "Hi! I'm N.A.V.I. — Nithya's Analytical Virtual Intelligence. Ask me anything about her background, projects, or skills! 👋",
};

export function NaviWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    const assistantId = (Date.now() + 1).toString();
    setMessages((m) => [...m, userMsg, { id: assistantId, role: "assistant", content: "" }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      if (!res.body) return;
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((m) =>
          m.map((msg) => msg.id === assistantId ? { ...msg, content: accumulated } : msg)
        );
      }
    } catch {
      setMessages((m) =>
        m.map((msg) => msg.id === assistantId
          ? { ...msg, content: "Sorry, I had trouble connecting. Please try again!" }
          : msg)
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 2000,
          width: 56, height: 56, borderRadius: "50%",
          background: "#be185d", border: "none", cursor: "pointer",
          boxShadow: "0 0 20px #be185d88, 0 4px 20px rgba(0,0,0,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.4rem", transition: "transform 0.2s",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
        {open ? "✕" : "✦"}
      </button>

      {open && (
        <div style={{
          position: "fixed", bottom: 100, right: 28, zIndex: 1999,
          width: 360, height: 500, borderRadius: 20,
          background: "#0f060f", border: "1.5px solid #be185d44",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px #be185d22",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>
          <div style={{
            padding: "16px 20px",
            background: "linear-gradient(135deg, #1a0a1a, #2a0f2a)",
            borderBottom: "1px solid #4a134066",
          }}>
            <div style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 900,
              fontSize: "0.95rem", color: "#f9a8d4" }}>
              N.A.V.I.
            </div>
            <div style={{ fontSize: "0.65rem", color: "#7c2d6b", marginTop: 2 }}>
              Nithya&apos;s Analytical Virtual Intelligence
            </div>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
            {messages.map((m) => (
              <div key={m.id} style={{
                marginBottom: 12,
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth: "80%", padding: "10px 14px",
                  borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: m.role === "user" ? "#be185d" : "#1a0a1a",
                  border: m.role === "assistant" ? "1px solid #4a134066" : "none",
                  color: "#e0d0e8", fontSize: "0.82rem", lineHeight: 1.5,
                }}>
                  {m.content || (isLoading ? "..." : "")}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.content === "" && (
              <div style={{ color: "#7c2d6b", fontSize: "0.75rem", fontStyle: "italic" }}>
                N.A.V.I. is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} style={{
            padding: "12px 16px", borderTop: "1px solid #4a134066",
            display: "flex", gap: 8,
          }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Nithya..."
              style={{
                flex: 1, background: "#1a0a1a",
                border: "1px solid #4a134066", borderRadius: 8,
                color: "#e0d0e8", padding: "8px 12px", fontSize: "0.82rem",
                outline: "none",
              }}
            />
            <button type="submit" disabled={isLoading}
              style={{
                padding: "8px 16px", borderRadius: 8,
                background: "#be185d", border: "none",
                color: "#fdf2f8", fontWeight: 700,
                cursor: isLoading ? "not-allowed" : "pointer",
                fontSize: "0.8rem",
              }}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
