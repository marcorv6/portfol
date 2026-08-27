"use client"

import { TiltCard } from "@/components/ui/tilt-card"
import { Badge } from "@/components/ui/badge"
import { Building2, Zap, Sparkles, Orbit, Binary } from "lucide-react"

const AboutMe = () => {
  return (
    <div className="w-full space-y-6">
      <TiltCard className="w-full">
        <div className="p-6 md:p-8 space-y-6">
          {/* Header pill */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Frontend Architect & Engineer
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
              <Orbit className="w-3.5 h-3.5" />
              Mathematician • Systems & Cosmology
            </div>
          </div>

          {/* Main Bio Paragraphs */}
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
            <p>
              I&apos;m a Frontend Architect with a background in Mathematics. I apply mathematical rigour, structural abstraction, and analytical problem-solving to architecting high-performance web systems, 3D WebGL experiences, and enterprise application frameworks.
            </p>
            <p>
              Currently leading the frontend architecture layer at{" "}
              <a 
                href="https://www.gruposalinas.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                <Building2 className="w-4 h-4 inline" /> Grupo Salinas
              </a>
              , where I architect high-throughput applications, enforce performance budgets, integrate automated security pipelines, and mentor developers.
            </p>
          </div>

          {/* Key Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-3">
              <Binary className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-foreground uppercase font-mono">Mathematical Rigour</h4>
                <p className="text-xs text-muted-foreground">Analytical system modeling, algorithmic efficiency, & geometric precision.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-card border border-border flex items-start gap-3">
              <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-foreground uppercase font-mono">Performance First</h4>
                <p className="text-xs text-muted-foreground">Bundle optimizations, Lighthouse CI, & ultra-fast asset loading.</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 border-t border-border flex flex-wrap gap-2">
            {["Mathematics", "React 19", "Next.js", "TypeScript", "Vite", "Module Federation", "Tailwind CSS", "Three.js WebGL", "AWS CloudFront", "Lighthouse CI"].map((tech) => (
              <Badge key={tech} variant="outline" className="bg-card border-border text-foreground text-xs py-1 px-2.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  )
}

export default AboutMe