"use client"

import { TiltCard } from "@/components/ui/tilt-card"
import { ExternalLink, Layers, Sparkles } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image?: string
  link?: string
  index: number
}

export function ProjectCard({ title, category, description, link }: ProjectCardProps) {
  return (
    <TiltCard className="w-full h-full">
      <Link href={link || "#"} className="block p-6 h-full flex flex-col justify-between group space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-400">
              <Layers className="w-3 h-3" />
              {category}
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
            {title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1 text-blue-400">
            <Sparkles className="w-3 h-3" /> Architecture Case Study
          </span>
          <span className="group-hover:translate-x-1 transition-transform text-white">
            View Details &rarr;
          </span>
        </div>
      </Link>
    </TiltCard>
  )
}
