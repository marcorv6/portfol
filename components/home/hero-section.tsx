"use client"

import { AnimatedText } from "./animated-text"
import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative flex flex-col px-4 md:px-8 py-8 justify-center h-screen overflow-hidden">
      {/* Background image with opacity */}
      <Image 
        src="/background.jpg"
        alt="Background"
        fill
        priority
        className="object-cover opacity-80 -z-10"
        quality={90}
      />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedText 
          text="I'm Marco" 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-white mb-4"
          delay={0.2}
        />
        <ScrollReveal direction="up" delay={0.4}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90">
            I'm a frontend developer with a passion for creating modern and performant web applications.
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}

