import type { Metadata } from "next"
import { TaskFlowCaseStudy } from "@/components/projects/taskflow-case-study"

export const metadata: Metadata = {
  title: "TaskFlow Architecture Case Study | Marco Romero",
  description: "Explore the full-stack architecture, relational database design, and REST API contract of TaskFlow.",
  openGraph: {
    title: "TaskFlow Case Study | Marco Romero",
    description: "Full-Stack Task & Productivity Platform built with Next.js 16, React 19, Neon PostgreSQL, JWT Auth, and Resend Email API.",
  },
}

export default function TaskFlowDetailPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-12 relative z-10">
      <TaskFlowCaseStudy />
    </div>
  )
}
