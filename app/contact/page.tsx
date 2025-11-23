"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState, lazy, Suspense } from "react"

// Lazy load form components
const ContactForm = lazy(() => import("@/components/contact/contact-form"))
const ThankYouCard = lazy(() => import("@/components/contact/thank-you-card"))

const ContactPage = () => {
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);
  return (
    <div className="relative flex flex-col items-center min-h-screen py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Animated Gradient Blob 1 */}
      <div 
        className="gradient-blob -z-0"
        style={{
          background: 'linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246))',
          top: '10%',
          left: '10%',
        }}
      />
      
      {/* Animated Gradient Blob 2 */}
      <div 
        className="gradient-blob -z-0"
        style={{
          background: 'linear-gradient(135deg, rgb(236, 72, 153), rgb(239, 68, 68))',
          bottom: '10%',
          right: '10%',
          animationDelay: '-10s',
          animationDirection: 'alternate-reverse',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Get in touch with me to discuss your project or any other questions you may have.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-2xl mx-auto"
        >
          <Card className="backdrop-blur-sm bg-card/80 border-2">
            <CardContent>
              <Suspense fallback={
                <div className="py-8 flex items-center justify-center" role="status" aria-live="polite">
                  <span className="sr-only">Loading form...</span>
                  <div className="animate-pulse text-muted-foreground">Loading...</div>
                </div>
              }>
                {successfullySubmitted ? <ThankYouCard /> : <ContactForm setSuccessfullySubmitted={setSuccessfullySubmitted} />}
              </Suspense>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage