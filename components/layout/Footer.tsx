import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer 
      role="contentinfo" 
      className="flex justify-between items-center p-4 border-t border-border dark:border-border/30 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mx-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <p>&copy; 2025 Marco Romero. All rights reserved.</p>
      </div>
      <nav aria-label="Social media links" className="flex items-center justify-center gap-4">
        <Link 
          href="https://www.instagram.com/mxrcor" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Marco's Instagram profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          <Instagram className="h-7 w-7 text-foreground dark:text-foreground/80" aria-hidden="true" />
        </Link>
        <Link 
          href="https://github.com/marcorv6" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Marco's GitHub profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          <Github className="h-7 w-7 text-foreground dark:text-foreground/80" aria-hidden="true" />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/marco-antonio-romero-804627224/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Marco's LinkedIn profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          <Linkedin className="h-7 w-7 text-foreground dark:text-foreground/80" aria-hidden="true" />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer