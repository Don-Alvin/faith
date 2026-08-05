"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import BrandLogo from './BrandLogo'
import ThemeToggle from './ThemeToggle'

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const onScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Listings", href: "/listings" },
    { title: "Blog", href: "/blogs" }
  ]

  return (
    <div className={`bg-background border-b border-border transition-all duration-500 ease-in-out ${isScrolled ? 'shadow-md' : ''} ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <BrandLogo className="h-12 transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.title}
              href={link.href}
              className="relative text-lg font-medium text-foreground transition-all duration-300 hover:text-[#b07d10] dark:hover:text-accent group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm text-muted-foreground">+254 750 030 357</span>
          <ThemeToggle />
          <a
            href='#contactus'
            className="btn-primary gradient-gold text-accent-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            Book Viewing
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainNav
