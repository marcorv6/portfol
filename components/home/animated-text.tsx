"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <motion.div
      className="relative"
      initial={{ 
        opacity: 0,
        y: 20,
      }}
      animate={{ 
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
    >
      {/* Red channel */}
      <motion.h1
        className={`${className} absolute inset-0 text-red-500`}
        style={{ mixBlendMode: "screen" }}
        animate={isGlitching ? {
          x: [-2, 2, -2, 2, 0],
          opacity: [0.8, 1, 0.8],
        } : {
          x: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.h1>

      {/* Blue channel */}
      <motion.h1
        className={`${className} absolute inset-0 text-blue-500`}
        style={{ mixBlendMode: "screen" }}
        animate={isGlitching ? {
          x: [2, -2, 2, -2, 0],
          opacity: [0.8, 1, 0.8],
        } : {
          x: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.h1>

      {/* Green channel */}
      <motion.h1
        className={`${className} absolute inset-0 text-green-500`}
        style={{ mixBlendMode: "screen" }}
        animate={isGlitching ? {
          y: [-1, 1, -1, 1, 0],
          opacity: [0.6, 0.8, 0.6],
        } : {
          y: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.h1>

      {/* Main text */}
      <motion.h1
        className={className}
        animate={isGlitching ? {
          x: [0, -1, 1, -1, 0],
          skewX: [0, -2, 2, 0],
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.h1>
    </motion.div>
  )
}

