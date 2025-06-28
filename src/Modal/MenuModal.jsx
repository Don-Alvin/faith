import { createPortal } from 'react-dom';
import { X, Home, Building, BookOpen, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MenuModal = ({handleAuthMenu, navLinks}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const iconMap = {
    'Home': Home,
    'Listings': Building,
    'Blog': BookOpen
  }

  return createPortal (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div 
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={handleAuthMenu}
      />
      
      {/* Menu */}
      <div className={`absolute top-0 right-0 w-80 h-full bg-gradient-to-br from-primary via-primary to-primary/90 shadow-2xl transition-all duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative h-full overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-400/10 rounded-full"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="w-24 h-8">
                  <img 
                    src='/images/logo_whitebg.png' 
                    alt='Lamona Realtors' 
                    className='w-full h-full object-contain filter drop-shadow-lg'
                  />
                </div>
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
                {navLinks.map(({title, to}, index) => {
                  const Icon = iconMap[title] || Home
                  return (
                    <Link 
                      key={to} 
                      to={to}
                      onClick={handleAuthMenu}
                      className={`flex items-center gap-4 p-4 rounded-2xl text-white hover:bg-white/10 transition-all duration-300 hover:translate-x-2 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
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
                className="flex items-center gap-3 w-full p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default MenuModal