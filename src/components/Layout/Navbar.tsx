"use client"

import MainNav from "./MainNav"
import { useMediaQuery } from "@/hooks/use-media-query"
import MobileNav from "./MobileNav"

const Navbar = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)')

  return (
    <section className="sticky top-0 z-20 w-full">
      {isLargeScreen ? <MainNav /> : <MobileNav />}
    </section>
  )
}

export default Navbar
