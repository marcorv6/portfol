import { HeroSection } from "@/components/home/hero-section"
import { TechStackBanner } from "@/components/home/tech-stack-banner"
import { CreativeDesignSection } from "@/components/home/creative-design-section"
import { ModernSolutionsSection } from "@/components/home/modern-solutions-section"
import { GallerySection } from "@/components/home/gallery-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <TechStackBanner />
      <CreativeDesignSection />
      <ModernSolutionsSection />
      <GallerySection />
      <CTASection />
    </div>
  )
}