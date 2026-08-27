"use client"

import { TiltCard } from "@/components/ui/tilt-card"
import { ArrowUpRight, Sparkles, Cpu } from "lucide-react"
import Link from "next/link"

interface FeaturedProjectProps {
  title: string
  subtitle: string
  description: string
  link?: string
}

export function FeaturedProject({ title, subtitle, description, link }: FeaturedProjectProps) {
  return (
    <TiltCard className="w-full mb-12">
      <Link href={link || "#"} className="block p-8 md:p-10 group">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              Featured Architecture Spotlight
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
              {title}
            </h2>

            <p className="text-lg text-blue-400 font-mono">
              {subtitle}
            </p>

            <p className="text-base text-slate-300 font-light leading-relaxed">
              {description}
            </p>
          </div>

          <div className="relative h-48 md:h-full rounded-xl bg-gradient-to-br from-blue-900/40 via-slate-900 to-black p-6 border border-white/10 flex flex-col justify-between overflow-hidden">
            <Cpu className="w-12 h-12 text-blue-400" />
            <div className="flex items-center justify-between text-xs font-mono text-white">
              <span>View Case Study</span>
              <ArrowUpRight className="w-5 h-5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </TiltCard>
  )
}
