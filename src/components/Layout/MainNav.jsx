import { Home } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {

  const [isActive, setIsActive] = useState(false)

  const activeNavbar = () => {
    if(window.scrollY >= 80){
      setIsActive(true)
    }else setIsActive(false)
  }
  window.addEventListener("scroll", activeNavbar)

    const navLinks = [
        {
          title: "Home",
          href:"/"
        },
        {
          title: "About",
          href:"/about"
        },
        {
          title: "Listings",
          href:"/listings"
        },
        {
          title: "Blog",
          href:"/blog"
        }
      ]

  return (
    <div className={`flex justify-between p-4 ${isActive ? "bg-primary" : ''}`}>
      <div className='flex items-center text-yellow-600 font-semibold'>
        <Home />
        <span className='text-xl'>faith</span>
      </div>
      <div className='px-10'>
          <div className={`flex gap-4 ${isActive ? 'text-yellow-600' : 'text-white'} font-semibold`}>
              {navLinks.map(link => {
                return (
                  <Link className='cursor-pointer hover:underline' key={link.title} to={link.href}>{link.title}</Link>
                )
              })}
          </div>
      </div>
    </div>
  )
}

export default MainNav