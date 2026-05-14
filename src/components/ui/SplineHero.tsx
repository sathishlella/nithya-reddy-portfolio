"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

const SPLINE_URL = process.env.NEXT_PUBLIC_SPLINE_URL || "";

function CSSFallback() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(ellipse at 50% 60%, #4a134044 0%, transparent 70%)",
      overflow: "hidden",
    }}>
      {[
        { size: 80, top: "15%", left: "10%", delay: "0s", color: "#be185d", radius: "12px", opacity: 0.7 },
        { size: 55, top: "25%", right: "12%", delay: "-2s", color: "#7c2d6b", radius: "50%", opacity: 0.6 },
        { size: 45, top: "65%", left: "8%", delay: "-4s", color: "#f9a8d4", radius: "8px", opacity: 0.5 },
        { size: 65, bottom: "20%", right: "8%", delay: "-1s", color: "#4a1340", radius: "50%", opacity: 0.8 },
        { size: 35, top: "45%", left: "20%", delay: "-3s", color: "#be185d", radius: "6px", opacity: 0.6 },
        { size: 50, top: "35%", right: "25%", delay: "-5s", color: "#f9a8d4", radius: "12px", opacity: 0.4 },
      ].map((shape, i) => (
        <div key={i} style={{
          position: "absolute",
          width: shape.size, height: shape.size,
          top: shape.top, left: (shape as Record<string, unknown>).left as string | undefined,
          right: (shape as Record<string, unknown>).right as string | undefined,
          bottom: (shape as Record<string, unknown>).bottom as string | undefined,
          background: shape.color,
          borderRadius: shape.radius,
          opacity: shape.opacity,
          boxShadow: `0 0 ${shape.size * 0.5}px ${shape.color}88`,
          animation: `${i % 2 === 0 ? "float" : "float-alt"} ${6 + i}s ease-in-out infinite`,
          animationDelay: shape.delay,
        }} />
      ))}
    </div>
  );
}

export function SplineHero() {
  if (!SPLINE_URL) return <CSSFallback />;

  return (
    <Suspense fallback={<CSSFallback />}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Spline scene={SPLINE_URL} style={{ width: "100%", height: "100%" }} />
      </div>
    </Suspense>
  );
}
