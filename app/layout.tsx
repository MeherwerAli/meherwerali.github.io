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
  title: "Meherwer Ali — Java, Distributed Systems & Cloud",
  description:
    "Senior Backend Engineer and Tech Lead building Java and Spring Boot systems, Node.js services, cloud platforms, and reliable AI integrations.",
  openGraph: {
    title: "Backend Systems That Hold Up in Production",
    description: "Java, Spring Boot, Node.js, distributed systems, cloud infrastructure, and reliable AI integration.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Backend systems, cloud platforms, and reliable AI integration." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backend Systems That Hold Up in Production",
    description: "Java, Spring Boot, Node.js, distributed systems, cloud infrastructure, and reliable AI integration.",
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
