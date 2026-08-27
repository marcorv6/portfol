import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore projects engineered by Marco Romero - Frontend Architect specializing in React, Next.js, 3D WebGL, and TypeScript.",
  openGraph: {
    title: "Projects | Marco Romero - Frontend Architect",
    description: "Featured web development projects, design systems, and frontend architecture solutions.",
  },
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
