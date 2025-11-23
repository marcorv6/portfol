import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Marco Romero - Frontend Architect with experience in React, Next.js, Vue.js, and TypeScript. Focused on building scalable, performant web applications.",
  openGraph: {
    title: "About Marco Romero | Frontend Developer",
    description: "Frontend Architect specializing in modular architecture, performance optimization, and developer experience.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

