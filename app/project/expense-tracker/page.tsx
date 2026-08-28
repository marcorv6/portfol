import type { Metadata } from "next"
import { ExpenseTrackerCaseStudy } from "@/components/projects/expense-tracker-case-study"

export const metadata: Metadata = {
  title: "SpendFlow Expense Tracker Case Study | Marco Romero",
  description: "Explore the full-stack architecture, PostgreSQL database design, and REST API contract of SpendFlow Expense Tracker.",
  openGraph: {
    title: "SpendFlow Case Study | Marco Romero",
    description: "Full-Stack Personal Expense & Financial Tracker built with Next.js 16, React 19, Neon PostgreSQL, JWT Auth, and Category Budget Caps.",
  },
}

export default function ExpenseTrackerDetailPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-12 relative z-10">
      <ExpenseTrackerCaseStudy />
    </div>
  )
}
