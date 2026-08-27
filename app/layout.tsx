import type { Metadata } from "next";
import { Inter, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SkipToContent } from "@/components/skip-to-content";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marcoromero.dev'),
  title: {
    default: "Marco Romero | Frontend Architect & Software Engineer",
    template: "%s | Marco Romero"
  },
  description: "Frontend Architect specializing in React, Next.js, 3D WebGL, and TypeScript. Building modern, performant web applications with focus on architecture, performance, and user experience.",
  keywords: ["Marco Romero", "Frontend Architect", "Frontend Developer", "React Developer", "Next.js", "TypeScript", "Web Development", "Software Engineer"],
  authors: [{ name: "Marco Romero" }],
  creator: "Marco Romero",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marcoromero.dev",
    siteName: "Marco Romero Portfolio",
    title: "Marco Romero | Frontend Architect & Software Engineer",
    description: "Frontend Architect specializing in React, Next.js, 3D WebGL, and TypeScript.",
    images: [
      {
        url: "/background.jpg",
        width: 1200,
        height: 630,
        alt: "Marco Romero Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Romero | Frontend Architect & Software Engineer",
    description: "Frontend Architect specializing in React, Next.js, and TypeScript.",
    images: ["/background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden w-full max-w-full">
      <body
        className={`${inter.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased bg-background text-foreground transition-colors duration-300 selection:bg-blue-500 selection:text-white overflow-x-hidden w-full max-w-full`}
      >
        <SkipToContent />
        <ThemeProvider defaultTheme="dark">
          <Header />
          <main id="main-content" role="main" tabIndex={-1} className="relative z-10 min-h-screen focus:outline-none overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
