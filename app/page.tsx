import { HeroSection } from "@/components/home/hero-section"
import dynamic from "next/dynamic"
import type { Metadata } from "next"

// Lazy load below-the-fold components
const CreativeDesignSection = dynamic(
  () => import("@/components/home/creative-design-section").then(mod => ({ default: mod.CreativeDesignSection })),
  { 
    loading: () => <div className="min-h-screen bg-background" aria-label="Loading content..." />,
    ssr: true 
  }
)

const ModernSolutionsSection = dynamic(
  () => import("@/components/home/modern-solutions-section").then(mod => ({ default: mod.ModernSolutionsSection })),
  { 
    loading: () => <div className="min-h-screen bg-muted/30" aria-label="Loading content..." />,
    ssr: true 
  }
)

const CTASection = dynamic(
  () => import("@/components/home/cta-section").then(mod => ({ default: mod.CTASection })),
  { 
    loading: () => <div className="min-h-[60vh] bg-primary/10" aria-label="Loading content..." />,
    ssr: true 
  }
)

export const metadata: Metadata = {
  title: "Home",
  description: "Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, performant web applications with focus on architecture and user experience.",
}

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <CreativeDesignSection />
      <ModernSolutionsSection />
      <CTASection />
    </div>
  )
}