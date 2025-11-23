import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4 border-t border-border dark:border-border/30 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <p>&copy; 2025 Portfolio. All rights reserved.</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://www.instagram.com/mxrcor" target="_blank">
          <Instagram className="h-7 w-7 text-foreground dark:text-foreground/80" />
        </Link>
        <Link href="https://github.com/marcorv6" target="_blank">
          <Github className="h-7 w-7 text-foreground dark:text-foreground/80" />
        </Link>
        <Link href="https://www.linkedin.com/in/marco-antonio-romero-804627224/" target="_blank">
          <Linkedin className="h-7 w-7 text-foreground dark:text-foreground/80" />
        </Link>
      </div>
    </div>
  )
}

export default Footer