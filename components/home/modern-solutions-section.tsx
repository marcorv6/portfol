"use client"

import dynamic from "next/dynamic"
import { ScrollReveal } from "./scroll-reveal"
import { TiltCard } from "@/components/ui/tilt-card"

const ArchitectureCanvas = dynamic(
  () => import("./architecture-canvas").then((mod) => mod.ArchitectureCanvas),
  { ssr: false }
)

export function ModernSolutionsSection() {
  return (
    <section className="min-h-screen bg-muted/20 py-24 px-4 md:px-8 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="left">
          <div className="mb-12">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-2 font-semibold">
              02 // System Architecture & Engineering
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Modern Solutions
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground font-light">
                I build performance-driven web architectures designed for scale, high-throughput reliability, and developer efficiency. My work blends solid architectural patterns with hands-on frontend engineering, resulting in systems that are modular, fast, and secure.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground font-light">
                From enterprise micro-frontend ecosystems using React, Vite, and Module Federation, to automated security audit pipelines (Semgrep, Lighthouse CI, AWS CloudFront), I focus on engineering resilient platforms built to last.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <TiltCard className="w-full">
              <ArchitectureCanvas />
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
