import { HomeIcon, MenuIcon, X } from 'lucide-react'
import { useState } from 'react'
import MenuModal from '../../Modal/MenuModal'


const MobileNav = () => {

  const [isActive, setIsActive] = useState(false)
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false)

  const handleAuthMenu = () => {
    setIsAuthMenuOpen(!isAuthMenuOpen)
  }

  const activeNavbar = () => {
    if(window.scrollY >= 80){
      setIsActive(true)
    }else setIsActive(false)
  }
  window.addEventListener("scroll", activeNavbar)

    const navLinks = [
        {
          title: "Home",
          to:"/"
        },
        // {
        //   title: "About",
        //   to:"/about"
        // },
        {
          title: "Listings",
          to:"/listings"
        },
        {
          title: "Blog",
          to:"/blogs"
        }
      ]

      return (
        <nav className={`p-4 relative ${isActive ? "bg-primary" : ''}`}>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <HomeIcon className='text-yellow-600'/>
              <span className='font-semibold text-yellow-600 text-xl'>Lamona Realtors</span>
            </div>
            <div>
              <MenuIcon className='text-secondary' onClick={handleAuthMenu}/>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isAuthMenuOpen && ( 
          <MenuModal handleAuthMenu={handleAuthMenu} navLinks={navLinks}/>              
          )}
        </nav>
      );
}

export default MobileNav