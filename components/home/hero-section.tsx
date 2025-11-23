"use client"

import { AnimatedText } from "./animated-text"
import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"

export function HeroSection() {
  return (
    <section 
      aria-label="Hero section" 
      className="relative flex flex-col px-4 md:px-8 py-8 justify-center h-[95vh] overflow-hidden"
    >
      {/* Background image with opacity */}
      <Image 
        src="/background.jpg"
        alt="Abstract geometric background pattern"
        fill
        priority
        className="object-cover opacity-90 -z-10"
        quality={90}
        role="presentation"
      />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedText 
          text="Marco Romero" 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white"
          delay={0.2}
        />
        <ScrollReveal direction="up" delay={0.4}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4" role="doc-subtitle">
            Frontend Engineer
          </h2>
        </ScrollReveal>
      </div>
    </section>
  )
}

