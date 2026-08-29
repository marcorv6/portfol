"use client"

import { Badge } from "@/components/ui/badge"
import { Building2, Sparkles, Orbit, Binary, Swords, Music2, Compass, Cpu } from "lucide-react"

const AboutMe = () => {
  return (
    <div className="w-full space-y-6">
      <div className="w-full rounded-3xl border border-border bg-card/90 backdrop-blur-md p-6 sm:p-8 md:p-10 space-y-8 shadow-sm">
        {/* Header Badges */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frontend Architect & Engineer</span>
          </div>
          
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono font-medium text-sky-600 dark:text-sky-400">
            <Orbit className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Mathematician • Cosmology & Systems</span>
          </div>
        </div>

        {/* Personal Conversational Bio */}
        <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed font-sans">
          <p>
            Hey! I&apos;m <span className="font-bold text-foreground">Marco Romero</span>—a Frontend Architect with a deep background in Mathematics. I view software engineering through the lens of analytical structure, geometric abstraction, and system elegance.
          </p>
          <p>
            Currently, I lead frontend architecture at{" "}
            <a 
              href="https://www.gruposalinas.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
            >
              <Building2 className="w-4 h-4 inline text-blue-500" /> Grupo Salinas
            </a>
            , where I design resilient micro-frontend ecosystems, enforce strict Core Web Vitals budgets, build automated verification harnesses, and mentor engineering teams.
          </p>
        </div>

        {/* Personal Passions & Interests Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase font-bold text-muted-foreground tracking-wider flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-blue-500" />
            <span>Beyond The Code • Personal Passions</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Passion 1: Cosmology & Math */}
            <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3.5 shadow-sm hover:border-blue-500/30 transition-colors">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-500 shrink-0">
                <Orbit className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-foreground uppercase font-mono">Cosmology & Mathematics</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fascinated by astrophysics, general relativity, and non-Euclidean manifolds. Mathematical rigor drives how I abstract complex systems.
                </p>
              </div>
            </div>

            {/* Passion 2: Gaming / Vi Main */}
            <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3.5 shadow-sm hover:border-amber-500/30 transition-colors">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                <Swords className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-foreground uppercase font-mono">League of Legends • Vi Main</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Avid Summoner&apos;s Rift competitor. Big fan of Vi—bringing high-impact, direct execution both in-game and in codebase architecture.
                </p>
              </div>
            </div>

            {/* Passion 3: Latin Mafia Music */}
            <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3.5 shadow-sm hover:border-pink-500/30 transition-colors">
              <div className="p-2 rounded-xl bg-pink-500/10 text-pink-500 shrink-0">
                <Music2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-foreground uppercase font-mono">Music & Soundtracks</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Heavy rotation of <span className="font-semibold text-foreground">Latin Mafia</span> on repeat during deep coding sessions and architecture design.
                </p>
              </div>
            </div>

            {/* Passion 4: Mathematical Rigor */}
            <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-start gap-3.5 shadow-sm hover:border-blue-500/30 transition-colors">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                <Binary className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-foreground uppercase font-mono">Euler&apos;s Elegance</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Appreciating the beauty of equations like <code className="font-mono text-blue-500">e^(iπ) + 1 = 0</code>—finding simplicity in complex problem spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Classy One Piece Easter Egg Quote Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 flex items-start gap-3.5 shadow-sm">
          <Compass className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-light italic text-foreground/90 leading-relaxed">
              &ldquo;Inherited Will, the Destiny of the Age, and the Dreams of its People... these are things that cannot be stopped. As long as people continue to seek the answer to freedom, these things will never cease to be!&rdquo;
            </p>
            <p className="text-[11px] font-mono text-muted-foreground text-right">
              — A Motto for Continuous Growth & Adventure 🏴‍☠️
            </p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-border space-y-3">
          <h4 className="text-xs font-mono uppercase font-bold text-muted-foreground tracking-wider">
            Architecture & Engineering Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Mathematics", "React 19", "Next.js 16", "TypeScript", "3D WebGL", "Module Federation 2.0", "Tailwind CSS", "Three.js", "Harness Engineering", "Lighthouse CI"].map((tech) => (
              <Badge key={tech} variant="outline" className="bg-card border-border text-foreground text-xs py-1 px-3 rounded-lg font-mono">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe