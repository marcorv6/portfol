"use client"

import { useTheme } from "./theme-provider"
import { Switch } from "./ui/switch"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      <Moon className="h-4 w-4" />
    </div>
  )
}

