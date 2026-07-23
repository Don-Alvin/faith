"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import BrandLogo from './BrandLogo'

const MainNav = () => {
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const activeNavbar = () => {
      if (window.scrollY >= 80) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    window.addEventListener("scroll", activeNavbar)
    return () => window.removeEventListener("scroll", activeNavbar)
  }, [])

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Listings", href: "/listings" },
    { title: "Blog", href: "/blogs" }
  ]

  return (
    <div className={`transition-all duration-500 ease-in-out ${isActive ? 'glass-dark shadow-2xl' : 'bg-transparent'} ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
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
              className="relative text-lg font-medium text-accent transition-all duration-300 hover:text-[#c8860f] group"
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
          <span className="text-sm text-accent">+254 750 030 357</span>
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
