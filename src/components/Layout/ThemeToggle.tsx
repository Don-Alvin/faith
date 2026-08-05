"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  className?: string
}

const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`p-2 rounded-full border border-border text-foreground transition-all duration-300 hover:bg-accent/15 hover:text-[#b07d10] dark:hover:text-accent ${className}`}
    >
      {/* Render an invisible placeholder until mounted to avoid a hydration mismatch */}
      {mounted ? (
        isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
      ) : (
        <span className="block h-5 w-5" />
      )}
    </button>
  )
}

export default ThemeToggle
