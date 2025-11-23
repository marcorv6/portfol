"use client"

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
            <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-4xl">Image Placeholder</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.3}>
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

