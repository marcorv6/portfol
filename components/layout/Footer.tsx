import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { LogoAnimated } from "../ui/animated-logo"

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="relative z-10 border-t border-border bg-background/90 backdrop-blur-md py-8 px-4 md:px-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Link href="/" aria-label="Go to homepage" className="p-1 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors">
            <LogoAnimated size={28} />
          </Link>
          <div className="flex flex-col">
            <p className="font-medium text-foreground text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Marco Romero. All rights reserved.
            </p>
            <p className="text-[11px] text-muted-foreground flex items-center gap-1">
              Built with Next.js 16, Three.js & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <nav aria-label="Social media links" className="flex items-center gap-3">
          <Link
            href="https://github.com/marcorv6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Marco's GitHub profile"
            className="p-2.5 rounded-xl bg-card border border-border hover:bg-muted hover:border-primary/40 text-foreground transition-all duration-200 shadow-sm"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/marco-antonio-romero-804627224/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Marco's LinkedIn profile"
            className="p-2.5 rounded-xl bg-card border border-border hover:bg-muted hover:border-primary/40 text-foreground transition-all duration-200 shadow-sm"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="https://www.instagram.com/mxrcor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Marco's Instagram profile"
            className="p-2.5 rounded-xl bg-card border border-border hover:bg-muted hover:border-pink-500/40 text-foreground transition-all duration-200 shadow-sm"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer