// app/(sections)/experience/experience-timeline.tsx
"use client"

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

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
];

export function ExperienceTimeline() {
  return (
    <section className="space-y-8">
      <motion.header 
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="text-sm text-muted-foreground">
          A timeline of roles where I've focused on frontend architecture, performance,
          security, and delivering reliable web applications.
        </p>
      </motion.header>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

        <div className="space-y-10">
          {EXPERIENCES.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              className="relative flex gap-6 pl-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Step indicator */}
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center">
                <div className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-3 w-3 rounded-full bg-background border-2 border-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold leading-none">
                      {job.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {job.company}
                      {job.location ? ` · ${job.location}` : null}
                    </p>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {job.period}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">{job.description}</p>

                {job.highlights.length > 0 && (
                  <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {job.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
