"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image?: string
  link?: string
  index: number
}

export function ProjectCard({ title, category, description, image, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg"
    >
      <Link href={link || "#"} className="block">
        <div className="aspect-video relative overflow-hidden bg-muted">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
              <span className="text-6xl font-bold text-muted-foreground/30">{title[0]}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              {category}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

