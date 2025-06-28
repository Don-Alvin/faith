import { MenuIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuModal from '../../Modal/MenuModal'

const MobileNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false)
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

  const handleAuthMenu = () => {
    setIsAuthMenuOpen(!isAuthMenuOpen)
  }

  const navLinks = [
    { title: "Home", to:"/" },
    { title: "Listings", to:"/listings" },
    { title: "Blog", to:"/blogs" },
    { title: "About", to:"/about" }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-10 w-auto">
              <img 
                src='/images/logo_whitebg.png' 
                alt='Lamona Realtors' 
                className={`h-full w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'filter-none' : 'filter brightness-0 invert'
                }`}
              />
            </div>
          </Link>

          {/* Menu Button */}
          <button 
            onClick={handleAuthMenu}
            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <MenuIcon className='h-6 w-6' />
          </button>
        </div>
        
        {/* Mobile menu */}
        {isAuthMenuOpen && ( 
          <MenuModal handleAuthMenu={handleAuthMenu} navLinks={navLinks}/>              
        )}
      </div>
    </nav>
  )
}

export default MobileNav