"use client"

import { ScrollReveal } from "./scroll-reveal"

export function GallerySection() {
  return (
    <section className="min-h-screen bg-background py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 text-center text-primary">Gallery Showcase</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <ScrollReveal key={item} direction="up" delay={index * 0.1}>
              <div className="relative h-[300px] bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-2xl">Image {item}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

