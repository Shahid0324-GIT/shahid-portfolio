import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import HeaderClient from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Mohammed Jameel Shahid | Fullstack Engineer",
  description:
    "Minimalist portfolio of Mohammed Jameel Shahid. Specialized in Next.js, Python (FastAPI), and High-Performance Web Systems.",
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
    images: [
      {
        url: "https://ogcdn.net/ef977abe-2472-4850-a352-f4a7ad6508f6/v2/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa8069d90-7c0b-4dac-9a8b-2f3e77c77c77.png%3Ftoken%3DAdF9NiqKDkeD_s1rqIW4wh_FrfQK-RI088G_zo6bbyA%26height%3D483%26width%3D1200%26expires%3D33304722156/og.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Jameel Shahid - Frontend Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Jameel Shahid | Fullstack Engineer",
    description:
      "Building minimalist, high-performance web systems with Next.js & Python.",
    images: [
      "https://ogcdn.net/ef977abe-2472-4850-a352-f4a7ad6508f6/v2/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa8069d90-7c0b-4dac-9a8b-2f3e77c77c77.png%3Ftoken%3DAdF9NiqKDkeD_s1rqIW4wh_FrfQK-RI088G_zo6bbyA%26height%3D483%26width%3D1200%26expires%3D33304722156/og.png",
    ],
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <HeaderClient />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
