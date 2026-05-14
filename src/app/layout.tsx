import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nithya Reddy Vemula — Data Analyst · Health Informatics · AI",
  description:
    "Portfolio of Nithya Reddy Vemula, MS Health Informatics at GMU. Data analyst specializing in healthcare analytics, real-time data pipelines, and AI-powered insights.",
  openGraph: {
    title: "Nithya Reddy Vemula — Data Analyst",
    description: "Healthcare analytics, real-time data, AI insights",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
