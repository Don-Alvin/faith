import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MainNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { title: "Home", href:"/" },
    { title: "Listings", href:"/listings" },
    { title: "Blog", href:"/blogs" },
    { title: "About", href:"/about" }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="h-12 w-auto transition-transform duration-300 group-hover:scale-105">
              <img 
                src='/images/logo_whitebg.png' 
                alt='Lamona Realtors' 
                className={`h-full w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'filter-none' : 'filter brightness-0 invert'
                }`}
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.title} 
                to={link.href}
                className={`relative text-base font-medium transition-all duration-300 hover:scale-105 group ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-primary' 
                    : 'text-white hover:text-yellow-400'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {link.title}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled 
                    ? 'bg-primary' 
                    : 'bg-yellow-400'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href='#contactus' 
              className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-md'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav