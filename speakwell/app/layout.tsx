import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpeakWell - Aprende a hablar inglés con confianza",
  description: "Clases de inglés online 1:1 enfocadas en conversación real, fluidez y business English. Transforma tu confianza al hablar.",
  keywords: ["inglés online", "clases de inglés", "business English", "fluidez", "conversación"],
  openGraph: {
    title: "SpeakWell - Aprende a hablar inglés con confianza",
    description: "Clases de inglés online 1:1. Transforma tu fluidez y confianza.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased bg-bg-base text-text-primary">
        {children}
      </body>
    </html>
  );
}