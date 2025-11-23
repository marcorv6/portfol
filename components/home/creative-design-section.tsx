"use client"

import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

export function CreativeDesignSection() {
  return (
    <section className="min-h-screen bg-background py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="right">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 text-primary">Creative Design</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden w-full">
              <Image 
                className="object-cover w-full h-full" 
                src="/creative-design-1.jpg" 
                alt="Creative design project showcase" 
                width={400} 
                height={400}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiLz48L3N2Zz4="
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div>
              <p className="text-lg leading-relaxed mb-4">
                My design philosophy blends minimalism, clarity, and functional beauty. I create interfaces that feel intuitive and light, while maintaining a modern, strong visual identity driven by well-crafted components and purposeful interactions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                  I work closely with design systems—whether building them from scratch or extending existing style guides—to ensure consistency across large applications.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

