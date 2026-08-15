import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meherwerali.github.io"),
  title: "Meherwer Ali — Reliable Backend & AI Systems",
  description:
    "Senior Backend Engineer and Tech Lead building distributed systems, cloud platforms, and measurable AI products.",
  openGraph: {
    title: "Reliable Systems. Measurable AI.",
    description: "Backend and AI systems engineered around failure, cost, and evidence.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Reliable Systems. Measurable AI." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Systems. Measurable AI.",
    description: "Backend and AI systems engineered around failure, cost, and evidence.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
