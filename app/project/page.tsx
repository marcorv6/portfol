import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { FeaturedProject } from "@/components/projects/featured-project"
import { ProjectCard } from "@/components/projects/project-card"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Marco Romero's portfolio of web architecture projects and full-stack engineering work.",
  openGraph: {
    title: "Projects | Marco Romero",
    description: "A collection of web development projects showcasing frontend & backend architecture, database design, and modern web technologies.",
  },
}

const SHOW_PROJECTS = true

const PROJECTS_DATA = [
  {
    title: "TaskFlow Platform",
    category: "Full-Stack System",
    description: "Serverless PostgreSQL (Neon) task workspace with JWT authentication, priority queues, subtask checklists, and automated Resend transactional emails.",
    link: "https://github.com/marcorv6/todolist",
  },
  {
    title: "OpenAPI v3.0 REST Contract",
    category: "API Architecture",
    description: "Formally audited REST API specification defining schema models, parameterization rules, status codes, and multi-tenant workspace isolation.",
    link: "https://github.com/marcorv6/todolist/blob/main/contracts/openapi.yaml",
  },
  {
    title: "PostgreSQL Relational Schema",
    category: "Database Engineering",
    description: "Production SQL DDL database design featuring foreign key cascades, automated timestamp triggers, and optimized compound indexes.",
    link: "https://github.com/marcorv6/todolist/blob/main/database/schema.sql",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
            Portfolio & Systems Architecture
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            A collection of production engineering projects showcasing modern web architecture, database design, and full-stack systems.
          </p>
        </div>

        {/* Featured Project Spotlight */}
        <FeaturedProject
          title="TaskFlow"
          subtitle="Full-Stack Minimalist Task & Productivity Platform"
          description="A modern full-stack web application built with Next.js 16 (App Router), React 19, TypeScript, Neon Serverless PostgreSQL, JWT Auth with bcrypt, Resend Email API, and OpenAPI v3.0 REST contracts."
          link="https://github.com/marcorv6/todolist"
        />

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard
              key={idx}
              index={idx}
              title={project.title}
              category={project.category}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
