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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marcoromero.dev'),
  title: {
    default: "Marco Romero | Frontend Developer & Software Engineer",
    template: "%s | Marco Romero"
  },
  description: "Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, performant web applications with focus on architecture, performance, and user experience.",
  keywords: ["Marco Romero", "Frontend Developer", "React Developer", "Next.js", "TypeScript", "Web Development", "Software Engineer", "Frontend Architect"],
  authors: [{ name: "Marco Romero" }],
  creator: "Marco Romero",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marcoromero.dev",
    siteName: "Marco Romero Portfolio",
    title: "Marco Romero | Frontend Developer & Software Engineer",
    description: "Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, performant web applications.",
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
    title: "Marco Romero | Frontend Developer & Software Engineer",
    description: "Frontend Developer specializing in React, Next.js, and TypeScript.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        <SkipToContent />
        <ThemeProvider defaultTheme="light">
          <Header />
          <main id="main-content" role="main" tabIndex={-1} className="min-h-screen focus:outline-none">
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
