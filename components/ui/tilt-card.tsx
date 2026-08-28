"use client"

import React from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  scale?: number
}

export function TiltCard({
  children,
  className = "",
  scale = 1.01,
}: TiltCardProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 text-card-foreground backdrop-blur-md shadow-lg hover:border-blue-500/30 hover:shadow-blue-500/10 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
