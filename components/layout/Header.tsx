"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "../theme-toggle"
import { LogoAnimated } from "../ui/animated-logo"
import { Sparkles } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const Header = () => {
  const pathname = usePathname()

  return (
    <header 
      role="banner" 
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl transition-colors duration-300 shadow-sm overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2.5 sm:py-3.5 px-2.5 sm:px-6 lg:px-8">
        {/* Custom Logo - Single instance to prevent double rendering on mobile */}
        <Link 
          href="/" 
          aria-label="Go to homepage" 
          className="group relative flex items-center gap-2 sm:gap-3 p-0.5 sm:p-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shrink-0"
        >
          <div className="relative p-1 sm:p-1.5 rounded-xl bg-card border border-border group-hover:border-primary/50 transition-all duration-300 shadow-sm flex items-center justify-center">
            <LogoAnimated size={30} />
          </div>
          <span className="hidden sm:flex flex-col">
            <span className="font-bold text-sm text-foreground tracking-wide group-hover:text-primary transition-colors">
              Marco Romero
            </span>
            <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-primary" />
              Frontend Architect
            </span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav role="navigation" aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-full bg-card border border-border backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="ml-1 pl-1 sm:ml-2 sm:pl-2 border-l border-border shrink-0">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header