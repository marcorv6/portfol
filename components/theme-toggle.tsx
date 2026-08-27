"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative flex items-center justify-between gap-1.5 p-1 rounded-full bg-muted border border-border hover:border-primary/40 transition-all duration-300 w-14 h-8 shadow-inner cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Current: ${isDark ? "Dark" : "Light"} mode`}
    >
      <div className="flex items-center justify-between w-full px-1.5 text-xs">
        <Sun className={`w-3.5 h-3.5 transition-colors ${!isDark ? "text-amber-500 font-bold" : "text-muted-foreground/40"}`} />
        <Moon className={`w-3.5 h-3.5 transition-colors ${isDark ? "text-blue-400 font-bold" : "text-muted-foreground/40"}`} />
      </div>

      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-blue-300" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-300" />
        )}
      </motion.div>
    </button>
  )
}
