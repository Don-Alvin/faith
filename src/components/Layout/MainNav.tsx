import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const MainNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    { title: "Properties", href:"/listings" },
    { title: "Insights", href:"/blogs" },
    { title: "About", href:"/about" }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                isScrolled ? 'bg-gradient-to-r from-slate-900 to-slate-700' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className={`font-bold text-lg ${isScrolled ? 'text-white' : 'text-white'}`}>L</span>
                </div>
              </div>
              <span className={`font-display font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Lamona
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.title} 
                to={link.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-slate-900' 
                    : 'text-white/90 hover:text-white'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {link.title}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled 
                    ? 'bg-slate-900' 
                    : 'bg-white'
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
                  ? 'bg-gradient-to-r from-slate-900 to-slate-700 text-white hover:from-slate-800 hover:to-slate-600 shadow-md'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.title}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-900 font-medium py-2 hover:text-slate-900 transition-colors"
                >
                  {link.title}
                </Link>
              ))}
              <a 
                href='#contactus'
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-slate-900 to-slate-700 text-white py-3 rounded-full font-semibold mt-4"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default MainNav