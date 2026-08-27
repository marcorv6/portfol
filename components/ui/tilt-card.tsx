"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  perspective?: number
  scale?: number
}

export function TiltCard({
  children,
  className = "",
  perspective = 1000,
  scale = 1.02,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rY = ((mouseX - width / 2) / (width / 2)) * 12
    const rX = ((mouseY - height / 2) / (height / 2)) * -12

    setRotateX(rX)
    setRotateY(rY)

    const glareX = (mouseX / width) * 100
    const glareY = (mouseY / height) * 100
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.25 })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div className={`style-perspective ${className}`} style={{ perspective: `${perspective}px` }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        whileHover={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card/80 text-card-foreground p-1 backdrop-blur-md shadow-xl transition-colors duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic 3D Glare effect */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />
        {children}
      </motion.div>
    </div>
  )
}
