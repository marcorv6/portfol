"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { ThemeToggle } from "../theme-toggle"
import { LogoAnimated } from "../ui/animated-logo"

const Header = () => {
  return (
    <div className="flex justify-between items-center py-3 px-10 md:px-8 lg:px-12 xl:px-16 2xl:px-20 border-b border-border">
      <Link href="/">
        <LogoAnimated size={40}/>
      </Link>
      <div className="flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sections</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px]">
                <NavigationMenuLink asChild>
                  <Link href="/about" className="whitespace-nowrap max-w-[500px]">About me</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/project" className="whitespace-nowrap max-w-[500px]">Projects</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="whitespace-nowrap max-w-[500px]">Contact me</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header