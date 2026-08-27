"use client"

import dynamic from "next/dynamic"
import { ScrollReveal } from "./scroll-reveal"
import { TiltCard } from "@/components/ui/tilt-card"

const CreativeCanvas = dynamic(
  () => import("./creative-canvas").then((mod) => mod.CreativeCanvas),
  { ssr: false }
)

export function CreativeDesignSection() {
  return (
    <section className="min-h-screen bg-background py-24 px-4 md:px-8 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="right">
          <div className="mb-12">
            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest block mb-2 font-semibold">
              01 // Visual Philosophy & UI Engineering
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Creative Design
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2}>
            <TiltCard className="w-full">
              <CreativeCanvas />
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground font-light">
                My design philosophy blends minimalism, structural clarity, and functional beauty. I engineer interfaces that feel light, intuitive, and performant, while maintaining a strong visual identity powered by modern WebGL, CSS 3D transforms, and custom components.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground font-light">
                I work extensively with scalable design systems—building them from scratch or extending existing frameworks—to ensure visual integrity and developer ergonomics across large enterprise applications.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
