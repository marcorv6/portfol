"use client"
import { Button } from "@/components/ui/button"
import { useState, Suspense, lazy } from "react"
import { motion } from "framer-motion"
import AboutMe from "@/components/about/about-me"

// Lazy load heavy timeline component
const ExperienceTimeline = lazy(() => 
  import("@/components/about/experience/experience-timeline").then(mod => ({ 
    default: mod.ExperienceTimeline 
  }))
)

const AboutPage = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const handleDownload = () => {
    setIsDownloading(true)
    setTimeout(() => {
      setIsDownloading(false)
      //file on public folder
      const file = "public/cv.pdf"
      const link = document.createElement("a")
      link.href = file
      link.download = "cv.pdf"
      link.click()
      link.remove()
      window.URL.revokeObjectURL(file)
    }, 3000)
  }
  return (
    <div className="relative min-h-screen py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About me
          </motion.h1>
          <motion.div 
            className="flex gap-4 items-center justify-center w-full max-w-4xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutMe />
          </motion.div>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Suspense fallback={
              <div className="w-full min-h-[400px] flex items-center justify-center" role="status" aria-live="polite">
                <span className="sr-only">Loading experience timeline...</span>
                <div className="animate-pulse text-muted-foreground">Loading experience...</div>
              </div>
            }>
              <ExperienceTimeline />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage