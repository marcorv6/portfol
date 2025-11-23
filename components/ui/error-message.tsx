"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FieldError } from "./field"

interface ErrorMessageProps {
  message?: string
  show: boolean
}

export function ErrorMessage({ message, show }: ErrorMessageProps) {
  return (
    <AnimatePresence mode="wait">
      {show && message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <FieldError className="text-xs">{message}</FieldError>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

