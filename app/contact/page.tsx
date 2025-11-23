"use client"

import ContactForm from "@/components/contact/contact-form"
import ThankYouCard from "@/components/contact/thank-you-card"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

const ContactPage = () => {
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-8 overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
        <motion.div 
          className="flex flex-col items-center justify-center mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold mb-4">Contact</h1>
          <p className="text-lg max-w-xl">
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
              {successfullySubmitted ? <ThankYouCard /> : <ContactForm setSuccessfullySubmitted={setSuccessfullySubmitted} />}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage