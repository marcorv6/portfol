import dynamic from "next/dynamic"
import type { Metadata } from "next"

const EmptyProjectsState = dynamic(
  () => import("@/components/projects/empty-projects-state").then(mod => ({ default: mod.EmptyProjectsState })),
  { 
    loading: () => <div className="min-h-[70vh] flex items-center justify-center" aria-label="Loading..." />,
    ssr: true
  }
)

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Marco Romero's portfolio of web architecture projects and engineering work.",
  openGraph: {
    title: "Projects | Marco Romero",
    description: "A collection of web development projects showcasing frontend architecture and modern web technologies.",
  },
}

// Set to true when real projects are ready to be displayed
const SHOW_PROJECTS = false

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
            Portfolio & Systems Architecture
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl font-light leading-relaxed">
            {SHOW_PROJECTS 
              ? "A collection of my recent engineering work and side projects."
              : "Projects coming soon! We will be updating this section with real showcase projects shortly."
            }
          </p>
        </div>

        {/* Empty State when SHOW_PROJECTS is false */}
        <EmptyProjectsState />
      </div>
    </div>
  )
}
