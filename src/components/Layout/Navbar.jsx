import MobileNav from "./MobileNav"
import MainNav from "./MainNav"

const Navbar = () => {
  return (
    <div className="w-full fixed z-50">
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <MainNav />
      </div>
    </div>
  )
}

export default Navbar