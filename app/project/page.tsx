import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TiltCard } from "@/components/ui/tilt-card"
import { ExternalLink, Github, Sparkles, Layers, ArrowRight, BookOpen, Wallet } from "lucide-react"

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
          <span className="text-xs font-mono text-blue-700 dark:text-blue-400 font-bold uppercase tracking-widest block">
            Portfolio & Systems Architecture
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Projects
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl font-light leading-relaxed">
            A collection of production engineering projects showcasing modern web architecture, database design, and full-stack systems.
          </p>
        </div>

        {/* Project Card Overview List */}
        <div className="space-y-8">
          {/* SpendFlow Platform */}
          <TiltCard className="w-full">
            <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
              {/* Preview Graphics */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950 border border-border group flex flex-col justify-between p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Wallet className="w-4 h-4" />
                    <span>SpendFlow</span>
                  </div>
                  <span className="text-[10px] text-slate-400">USD $</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 uppercase block">Monthly Cashflow</span>
                  <div className="text-xl font-extrabold text-white">+$4,981.20</div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[68%]" />
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Categories: 9 Active</span>
                  <span className="text-emerald-400">Budget Safe</span>
                </div>
              </div>

              {/* Content Overview */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">
                    <Layers className="w-3.5 h-3.5" />
                    Financial & Analytics Platform
                  </span>

                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Production Active
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  SpendFlow Platform
                </h2>

                <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                  A high-performance full-stack personal finance and expense tracking application built with Next.js 16 App Router, serverless PostgreSQL on Neon, category budget targets, JWT auth, and interactive recruiter demo guest access.
                </p>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/project/expense-tracker"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all shadow-md shadow-blue-600/20"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Case Study & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="https://expense.marco-romero.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground text-xs font-mono font-medium transition-all shadow-sm"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </a>

                  <a
                    href="https://github.com/marcorv6/expense-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground text-xs font-mono font-medium transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* TaskFlow Platform */}
          <TiltCard className="w-full">
            <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
              {/* Thumbnail Image */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950 border border-border group">
                <Image
                  src="/projects/taskflow-dashboard.png"
                  alt="TaskFlow Preview"
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Overview */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
                    <Layers className="w-3.5 h-3.5" />
                    Full-Stack Web Application
                  </span>

                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Production Active
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  TaskFlow Platform
                </h2>

                <p className="text-sm text-muted-foreground font-normal leading-relaxed">
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground text-xs font-mono font-medium transition-all shadow-sm"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </a>

                  <a
                    href="https://github.com/marcorv6/todolist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground text-xs font-mono font-medium transition-all shadow-sm"
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
