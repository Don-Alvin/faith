"use client"

import { createPortal } from 'react-dom';
import { X, Home, Building, BookOpen, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import BrandLogo from '@/components/Layout/BrandLogo';

interface NavLinkItem {
  title: string;
  to: string;
}

interface MenuModalProps {
  handleAuthMenu: () => void;
  navLinks: NavLinkItem[];
}

const MenuModal = ({ handleAuthMenu, navLinks }: MenuModalProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const iconMap: Record<string, typeof Home> = {
    'Home': Home,
    'Listings': Building,
    'Blog': BookOpen
  }

  return createPortal(
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={handleAuthMenu}
      />

      {/* Menu */}
      <div className={`absolute top-0 right-0 w-80 h-full gradient-primary shadow-2xl transition-all duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative h-full overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full"></div>

          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <BrandLogo className="h-9" />
                <button
                  onClick={handleAuthMenu}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-6">
              <nav className="space-y-2">
                {navLinks.map(({ title, to }, index) => {
                  const Icon = iconMap[title] || Home
                  return (
                    <Link
                      key={to}
                      href={to}
                      onClick={handleAuthMenu}
                      className={`flex items-center gap-4 p-4 rounded-2xl text-white hover:bg-white/10 transition-all duration-300 hover:translate-x-2 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-medium">{title}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Contact CTA */}
            <div className="p-6 border-t border-white/10">
              <a
                href='#contactus'
                onClick={handleAuthMenu}
                className="flex items-center gap-3 w-full p-4 gradient-gold text-accent-foreground rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal') as HTMLElement
  )
}

export default MenuModal
