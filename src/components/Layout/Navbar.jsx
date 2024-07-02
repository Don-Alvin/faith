import MainNav from "./MainNav"
import { useMediaQuery } from "../../hooks/use-media-query"
import MenuModal from "../Modal/MenuModal"
import { useState } from "react"
import MobileNav from "./MobileNav"

const Navbar = () => {

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
        {
          title: "About",
          to:"/about"
        },
        {
          title: "Listings",
          to:"/listings"
        },
        {
          title: "Blog",
          to:"/blog"
        }
      ]

  const isLargeScreen = useMediaQuery('(min-width: 768px)')
  return (
    <section className="fixed z-20 w-full">
      {isLargeScreen ? <MainNav /> :(
        <MobileNav />
      )}
    </section>
  ) 
}

export default Navbar