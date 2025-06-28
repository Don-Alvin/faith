import MainNav from "./MainNav"
import { useMediaQuery } from "../../hooks/use-media-query"
import MobileNav from "./MobileNav"

const Navbar: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)')
  
  return (
    <>
      {isLargeScreen ? <MainNav /> : <MobileNav />}
    </>
  ) 
}

export default Navbar