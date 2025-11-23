"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface FeaturedProjectProps {
  title: string
  subtitle: string
  description: string
  image?: string
  link?: string
}

export function FeaturedProject({ title, subtitle, description, image, link }: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-border shadow-2xl mb-12"
    >
      <Link href={link || "#"} className="block group">
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Featured Project
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold leading-tight group-hover:text-primary transition-colors"
            >
              {title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground"
            >
              {subtitle}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-base text-muted-foreground/80"
            >
              {description}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative aspect-square md:aspect-auto overflow-hidden rounded-2xl bg-muted"
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30">
                <span className="text-9xl font-bold text-white/20">{title[0]}</span>
              </div>
            )}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

