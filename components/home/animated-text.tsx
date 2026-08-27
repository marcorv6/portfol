import React from "react"

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  return (
    <h1 className={`${className} select-none transition-all`}>
      {text}
    </h1>
  )
}
