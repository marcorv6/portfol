"use client"
import { ExperienceTimeline } from "@/components/about/experience/experience-timeline"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import AboutMe from "@/components/about/about-me"

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
    <div className="relative flex flex-col p-4 justify-center min-h-screen h-full">
      <div className="flex flex-col items-center justify-center">
        <motion.h1 
          className="text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About me
        </motion.h1>
        <motion.div 
          className="flex gap-4 items-center justify-center container"
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
          
          <ExperienceTimeline />
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage