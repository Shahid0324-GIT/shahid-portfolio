import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import HeaderClient from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shahid-portfolio-coral.vercel.app"),
  title: "Mohammed Jameel Shahid | Fullstack Engineer",
  description:
    "Fullstack engineer building thoughtful interfaces, AI-powered platforms, and reliable systems with Next.js and Python.",
  generator: "Next.js",
  keywords: [
    "Next.js",
    "React",
    "Frontend Engineer",
    "Web Developer",
    "FastAPI",
    "Portfolio",
    "Fullstack Engineer",
    "Python",
  ],
  openGraph: {
    title: "Mohammed Jameel Shahid | Portfolio",
    description:
      "Building minimalist, high-performance web systems with Next.js & Python.",
    url: "https://shahid-portfolio-coral.vercel.app",
    siteName: "Mohammed Jameel Shahid Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Mohammed Jameel Shahid — Code & Craft" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Jameel Shahid | Fullstack Engineer",
    description:
      "Building minimalist, high-performance web systems with Next.js & Python.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SmoothScroll />
          <a href="#top" className="skip-link">Skip to content</a>
          <HeaderClient />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
