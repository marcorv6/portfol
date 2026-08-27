"use client"

import dynamic from "next/dynamic"
import { AnimatedText } from "./animated-text"
import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight, Code2, Orbit } from "lucide-react"
import Link from "next/link"

const MathHeroCanvas = dynamic(
  () => import("./math-hero-canvas").then((mod) => mod.MathHeroCanvas),
  { ssr: false }
)

export function HeroSection() {
  return (
    <section 
      aria-label="Hero section" 
      className="relative flex flex-col px-4 md:px-8 py-12 justify-center min-h-[92vh] overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background transition-colors duration-300"
    >
      {/* 3D Mathematical & Cosmic WebGL Canvas Background */}
      <MathHeroCanvas />
      
      {/* Radial overlay for high contrast text readability */}
      <div className="absolute inset-0 bg-radial from-transparent via-background/40 to-background pointer-events-none -z-5" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Mathematician & Architect Pill Badge */}
        <ScrollReveal direction="down" delay={0.05}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6 shadow-sm">
            <Orbit className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-spin-slow" />
            <span className="text-xs font-mono tracking-wide text-blue-600 dark:text-blue-200 uppercase font-semibold">
              Mathematician • Frontend Architect
            </span>
          </div>
        </ScrollReveal>

        <AnimatedText 
          text="Marco Romero" 
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-blue-600 dark:from-white dark:via-slate-100 dark:to-sky-200 drop-shadow-sm mb-2"
        />

        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-8">
            Blending mathematical rigour, systems architecture, and 3D WebGL visuals to engineer performant, modular web ecosystems.
          </p>
        </ScrollReveal>

        {/* CTA Button Group */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02]"
            >
              About & Experience
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/project" 
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-card hover:bg-muted border border-border text-foreground font-medium backdrop-blur-md transition-all duration-200 shadow-sm"
            >
              <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Projects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
