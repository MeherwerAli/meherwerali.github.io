import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meherwerali.github.io"),
  title: "Meherwer Ali — Senior Software Engineer & Tech Lead",
  description:
    "Senior Software Engineer and Tech Lead building distributed systems, cloud platforms, reliable AI integrations, and modern web products across Java, Node.js, and TypeScript.",
  openGraph: {
    title: "Senior Software Engineer & Tech Lead",
    description: "Distributed systems, cloud platforms, reliable AI integration, and modern web engineering across Java, Node.js, and TypeScript.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Software systems, cloud platforms, and reliable AI integration." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Software Engineer & Tech Lead",
    description: "Distributed systems, cloud platforms, reliable AI integration, and modern web engineering across Java, Node.js, and TypeScript.",
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
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
