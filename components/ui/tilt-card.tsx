import React from "react"

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
}

export function TiltCard({
  children,
  className = "",
}: CardWrapperProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground backdrop-blur-md shadow-sm hover:border-primary/40 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
