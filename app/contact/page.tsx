"use client"

import { motion } from "framer-motion"
import { useState, lazy, Suspense } from "react"
import { Mail, MessageSquare, Sparkles } from "lucide-react"

// Lazy load form components
const ContactForm = lazy(() => import("@/components/contact/contact-form"))
const ThankYouCard = lazy(() => import("@/components/contact/thank-you-card"))

const ContactPage = () => {
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);

  return (
    <div className="relative flex flex-col items-center min-h-screen py-16 px-4 md:px-8 lg:px-12 overflow-hidden z-10 bg-background transition-colors duration-300">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-12">
        <motion.div 
          className="flex flex-col items-center justify-center text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-600 dark:text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 animate-pulse" />
            Let&apos;s Connect & Collaborate
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight">
            Get In Touch
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
            Have a project in mind, an architectural challenge, or just want to connect? Send me a message below.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-xl mx-auto"
        >
          {/* Static, high-UX Card (No 3D tilt transformation during form interaction) */}
          <div className="w-full rounded-2xl bg-card border border-border p-6 md:p-8 shadow-xl space-y-6 transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2 text-foreground font-mono text-sm font-semibold">
                <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Direct Message
              </div>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Response within 24h
              </span>
            </div>

            <Suspense fallback={
              <div className="py-12 flex items-center justify-center text-muted-foreground" role="status">
                <span className="animate-pulse">Loading form...</span>
              </div>
            }>
              {successfullySubmitted ? <ThankYouCard /> : <ContactForm setSuccessfullySubmitted={setSuccessfullySubmitted} />}
            </Suspense>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage