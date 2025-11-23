"use client"

import { motion } from "framer-motion"
import { Folder, Rocket } from "lucide-react"

export function EmptyProjectsState() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 md:px-8 lg:px-12">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Folder className="w-24 h-24 text-muted-foreground/40" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -top-2 -right-2"
            >
              <Rocket className="w-12 h-12 text-primary" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Projects Coming Soon
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I'm currently working on some exciting projects to showcase here.
        </motion.p>
        
        <motion.p 
          className="text-base text-muted-foreground/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Check back soon to see what I've been building! 🚀
        </motion.p>
      </motion.div>
    </div>
  )
}

