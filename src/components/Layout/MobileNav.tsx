"use client"

import { MenuIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import MenuModal from '@/Modal/MenuModal'
import BrandLogo from './BrandLogo'

const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const onScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleAuthMenu = () => {
    setIsAuthMenuOpen(!isAuthMenuOpen)
  }

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "Listings", to: "/listings" },
    { title: "Blog", to: "/blogs" }
  ]

  return (
    <nav className={`bg-white transition-all duration-500 ease-in-out ${isScrolled ? 'shadow-md' : ''} ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="p-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <BrandLogo className="h-10" />
          </Link>

          {/* Menu Button */}
          <button
            onClick={handleAuthMenu}
            className="p-2 rounded-full bg-accent/15 border border-accent/30 transition-all duration-300 hover:bg-accent/25 hover:scale-110"
          >
            <MenuIcon className='text-[#b07d10] h-6 w-6' />
          </button>
        </div>

        {/* Mobile menu */}
        {isAuthMenuOpen && (
          <MenuModal handleAuthMenu={handleAuthMenu} navLinks={navLinks} />
        )}
      </div>
    </nav>
  )
}

export default MobileNav
