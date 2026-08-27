"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

type ExperienceItem = {
  role: string
  company: string
  period: string
  location?: string
  description: string
  highlights: string[]
  technologies: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Architect",
    company: "Grupo Salinas",
    period: "Jun 2025 – Present",
    location: "CDMX, Mexico",
    description:
      "Responsible for the architecture layer of a modular frontend ecosystem, focusing on performance, security, and developer experience.",
    highlights: [
      "Improved website performance and loading times through bundle and asset optimizations.",
      "Defined scalable architectures based on React, Vite, and Module Federation.",
      "Mentored developers and enforced coding standards, performance budgets, and security best practices.",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Module Federation",
      "Lighthouse CI",
      "Semgrep",
      "AWS CloudFront",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Grupo Salinas",
    period: "Jun 2024 – Jun 2025",
    location: "CDMX, Mexico",
    description:
      "Developed, tested, and maintained a self-service loan application platform under tight deadlines.",
    highlights: [
      "Implemented responsive, production-ready UIs with Vue and React.",
      "Integrated OAuth-based authentication flows.",
      "Worked within CI/CD pipelines targeting AWS CloudFront.",
    ],
    technologies: ["Vue.js", "React", "TypeScript", "OAuth 2.0", "Python", "AWS", "CI/CD"],
  },
  {
    role: "Frontend Developer",
    company: "Zendesk",
    period: "Jan 2024 – Jun 2024",
    location: "Remote / International",
    description:
      "Built and maintained sidebar apps, help centers, and ZIS flows for multiple international brands.",
    highlights: [
      "Implemented custom apps using both Zendesk’s internal stack and standard web technologies.",
      "Delivered features simultaneously for multiple brands and environments.",
      "Collaborated closely with stakeholders to adapt flows to different customer needs.",
    ],
    technologies: ["JavaScript", "React", "Zendesk Apps", "REST APIs"],
  },
  {
    role: "Frontend Developer",
    company: "Grupo CSI",
    period: "Nov 2022 – Dec 2023",
    location: "Mexico",
    description:
      "Transformed UX/UI designs into fully responsive, mobile-first websites following SCRUM methodology.",
    highlights: [
      "Developed reusable components and views with Vue.js.",
      "Collaborated with designers and backend developers to integrate APIs efficiently.",
      "Helped maintain code quality and consistency across multiple projects.",
    ],
    technologies: ["Vue.js", "JavaScript", "SCSS", "Responsive Design", "SCRUM"],
  },
  {
    role: "Full Stack Developer",
    company: "Axsis Tecnología",
    period: "Jun 2022 – Oct 2022",
    location: "Mexico",
    description:
      "Delivered custom software solutions handling both frontend and backend tasks under tight timelines.",
    highlights: [
      "Implemented UIs in React and Angular integrated with Node.js backends.",
      "Adapted quickly to new technologies and project requirements.",
      "Contributed to multiple projects simultaneously as a full-stack developer.",
    ],
    technologies: ["React", "Angular", "Node.js", "TypeScript"],
  },
  {
    role: "Full Stack Developer",
    company: "FES Acatlán (UNAM)",
    period: "Feb 2020 – Jun 2022",
    location: "Estado de México, Mexico",
    description:
      "Member of the institutional development team, building systems used across the university.",
    highlights: [
      "Worked across frontend, backend, and basic design depending on project needs.",
      "Implemented institutional systems with a small, multi-role team.",
      "Gained experience owning end-to-end features from UI to data layer.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "REST APIs"],
  },
]

export function ExperienceTimeline() {
  return (
    <section className="space-y-8 w-full">
      <motion.header 
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" /> Professional Experience
        </h2>
        <p className="text-sm text-muted-foreground">
          A timeline of roles where I&apos;ve focused on frontend architecture, performance,
          security, and delivering reliable web applications.
        </p>
      </motion.header>

      <div className="relative border-l border-border pl-6 sm:pl-8 space-y-8 ml-3">
        {EXPERIENCES.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            {/* Step indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-blue-500/50 group-hover:border-blue-400 group-hover:ring-4 ring-blue-500/20 transition-all">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            </div>

            {/* Glassmorphic Card */}
            <div className="rounded-2xl bg-card border border-border p-5 sm:p-6 backdrop-blur-md hover:border-primary/40 transition-all duration-300 shadow-sm space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border pb-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {job.company}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  {job.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-muted border border-border text-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-blue-600 dark:text-blue-400" /> {job.period}
                  </span>
                </div>
              </div>

              <p className="text-sm text-foreground leading-relaxed font-light">{job.description}</p>

              {job.highlights.length > 0 && (
                <ul className="space-y-1.5 text-xs text-muted-foreground list-disc pl-4 font-light">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {job.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-300 text-[11px] px-2 py-0.5 font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
