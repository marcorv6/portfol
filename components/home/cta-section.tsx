"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"
import { LogoPattern } from "@/components/ui/logo-pattern"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative min-h-[60vh] bg-primary/10 py-20 px-4 md:px-8 flex items-center justify-center overflow-hidden">
      <LogoPattern />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal direction="up">
          <h2 className="text-6xl md:text-8xl font-bold mb-8 text-primary">Let's Work Together</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-xl mb-8 text-muted-foreground">
            Ready to bring your ideas to life? Get in touch and let's create something amazing.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <Button size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}

