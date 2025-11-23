"use client"

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
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-4xl">Image Placeholder</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

