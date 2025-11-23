"use client"

import { useTheme } from "./theme-provider"
import { Switch } from "./ui/switch"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Theme toggle">
      <Sun className="h-4 w-4" aria-hidden="true" />
      <Switch 
        checked={theme === "dark"} 
        onCheckedChange={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        role="switch"
        aria-checked={theme === "dark"}
      />
      <Moon className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">
        Current theme: {theme === "dark" ? "Dark" : "Light"} mode
      </span>
    </div>
  )
}

