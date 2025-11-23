"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { ThemeToggle } from "../theme-toggle"
import { LogoAnimated } from "../ui/animated-logo"

const Header = () => {
  return (
    <header role="banner" className="flex justify-between items-center py-3 px-10 md:px-8 lg:px-12 xl:px-16 2xl:px-20 border-b-2 border-border/60 dark:border-border/30">
      <Link href="/" aria-label="Go to homepage" className="focus:outline-none focus:ring-2 focus:ring-primary rounded">
        <LogoAnimated size={40}/>
      </Link>
      <nav role="navigation" aria-label="Main navigation" className="flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-label="Open navigation menu">Sections</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px]">
                <NavigationMenuLink asChild>
                  <Link href="/about" className="whitespace-nowrap max-w-[500px] focus:outline-none focus:ring-2 focus:ring-primary">About me</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/project" className="whitespace-nowrap max-w-[500px] focus:outline-none focus:ring-2 focus:ring-primary">Projects</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="whitespace-nowrap max-w-[500px] focus:outline-none focus:ring-2 focus:ring-primary">Contact me</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header