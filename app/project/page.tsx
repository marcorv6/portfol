import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TiltCard } from "@/components/ui/tilt-card"
import { ExternalLink, Github, Sparkles, Layers, ArrowRight, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Marco Romero's portfolio of web architecture projects and full-stack engineering work.",
  openGraph: {
    title: "Projects | Marco Romero",
    description: "A collection of web development projects showcasing frontend & backend architecture, database design, and modern web technologies.",
  },
}

export default function ProjectsOverviewPage() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
            Portfolio & Systems Architecture
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Projects
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-light leading-relaxed">
            A collection of production engineering projects showcasing modern web architecture, database design, and full-stack systems.
          </p>
        </div>

        {/* Project Card Overview List */}
        <div className="space-y-8">
          <TiltCard className="w-full">
            <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
              {/* Thumbnail Image */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950 border border-white/10 group">
                <Image
                  src="/projects/taskflow-dashboard.png"
                  alt="TaskFlow Preview"
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Overview */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                    <Layers className="w-3.5 h-3.5" />
                    Full-Stack Web Application
                  </span>

                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Production Active
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  TaskFlow Platform
                </h2>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  A high-performance full-stack task management platform built with Next.js 16 App Router, serverless PostgreSQL on Neon, JWT authentication, Resend transactional emails, and audited REST API specifications.
                </p>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/project/taskflow"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all shadow-md shadow-blue-600/20"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Case Study & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="https://todo.marco-romero.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono transition-all"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  </a>

                  <a
                    href="https://github.com/marcorv6/todolist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white text-xs font-mono transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  )
}
