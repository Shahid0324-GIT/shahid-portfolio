import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import HeaderName from "@/components/HeaderName";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Mohammed Jameel Shahid | Portfolio",
  description: "Fullstack Engineer & System Designer.",
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
          <header className="fixed top-0 z-50 flex w-full items-center justify-between p-6 pointer-events-none">
            <div className="pointer-events-auto">
              <HeaderName />
            </div>

            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
