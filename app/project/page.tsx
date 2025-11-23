import { FeaturedProject } from "@/components/projects/featured-project"
import { ProjectCard } from "@/components/projects/project-card"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform built with Next.js, featuring real-time inventory management and seamless checkout experience.",
    link: "#"
  },
  {
    title: "Task Management App",
    category: "Mobile Development",
    description: "Cross-platform task management application with real-time collaboration and smart notifications.",
    link: "#"
  },
  {
    title: "AI Content Generator",
    category: "Machine Learning",
    description: "AI-powered content generation tool that helps creators produce high-quality content faster using advanced language models.",
    link: "#"
  },
  {
    title: "Portfolio Dashboard",
    category: "Data Visualization",
    description: "Interactive dashboard for tracking and analyzing investment portfolios with real-time market data integration.",
    link: "#"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of my recent work and side projects. Each one tells a unique story of problem-solving and creativity.
          </p>
        </div>

        {/* Featured Project */}
        <FeaturedProject
          title="Social Media Dashboard"
          subtitle="Analytics & Insights Platform"
          description="Comprehensive social media analytics platform that helps businesses track engagement, analyze trends, and optimize their content strategy across multiple platforms."
          link="#"
        />

        {/* Project Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-6">More Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

