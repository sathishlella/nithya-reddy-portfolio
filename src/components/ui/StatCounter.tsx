"use client";
import { useEffect, useRef } from "react";
import { registerGSAP, animateCounter } from "@/lib/gsap-animations";

interface Props {
  value: number;
  suffix?: string;
  label: string;
  color?: string;
}

export function StatCounter({ value, suffix = "", label, color = "#be185d" }: Props) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGSAP();
    if (numRef.current) animateCounter(numRef.current, value, suffix);
  }, [value, suffix]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "var(--font-space-grotesk)",
        fontSize: "3rem", fontWeight: 900, color, lineHeight: 1,
      }}>
        <span ref={numRef}>0{suffix}</span>
      </div>
      <div style={{
        fontSize: "0.75rem", color: "#64748b", marginTop: 8,
        textTransform: "uppercase", letterSpacing: "0.08em",
      }}>
        {label}
      </div>
    </div>
  );
}
