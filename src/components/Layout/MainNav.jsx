import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const MainNav = () => {
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const activeNavbar = () => {
      if(window.scrollY >= 80){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
    
    window.addEventListener("scroll", activeNavbar)
    return () => window.removeEventListener("scroll", activeNavbar)
  }, [])

  const navLinks = [
    { title: "Home", href:"/" },
    { title: "Listings", href:"/listings" },
    { title: "Blog", href:"/blogs" }
  ]

  return (
    <div className={`transition-all duration-500 ease-in-out ${isActive ? 'glass-dark shadow-2xl' : 'bg-transparent'} ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="w-32 h-12 transition-transform duration-300 group-hover:scale-105">
            <img 
              src='/images/logo_whitebg.png' 
              alt='Lamona Realtors' 
              className='w-full h-full object-contain filter drop-shadow-lg'
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link 
              key={link.title} 
              to={link.href}
              className={`relative text-lg font-medium transition-all duration-300 hover:text-yellow-400 group ${isActive ? 'text-white' : 'text-yellow-400'}`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href='#contactus' 
            className="btn-primary bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
          >
            Talk to us
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainNav