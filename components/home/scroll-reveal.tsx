"use client"

import { useEffect, useRef, ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
}

export function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0,
  duration = 0.5 
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const controls = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, delay: isInView ? delay : 0, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

