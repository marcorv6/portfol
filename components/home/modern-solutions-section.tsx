"use client"

import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

export function ModernSolutionsSection() {
  return (
    <section className="min-h-screen bg-muted/30 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="left">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 text-primary">Modern Solutions</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <p className="text-lg leading-relaxed mb-4">
                I build modern, performance-driven web solutions designed for scale, reliability, and long-term maintainability. My work blends strong architectural foundations with hands-on engineering, resulting in applications that are fast, modular, and highly resilient.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                From micro-frontend ecosystems powered by React, Vite, and Module Federation, to secure and automated pipelines with Lighthouse CI, Semgrep, and AWS CloudFront, I focus on delivering systems that not only work—but evolve.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
              <Image 
                className="object-cover w-full h-full" 
                src="/modern-solutions.jpg" 
                alt="Modern web development solutions and architecture" 
                width={400} 
                height={400}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiLz48L3N2Zz4="
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

