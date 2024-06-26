import { HomeIcon, MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Link } from 'react-router-dom'

const MobileNav = () => {

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
        <div className='flex justify-between items-center p-4'>
          <div className='flex items-center'>
            <HomeIcon className='text-yellow-600'/>
            <span className='font-semibold text-yellow-600 text-xl'>faith</span>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon className='text-yellow-600' />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Alvin</SheetTitle>
              <SheetDescription>
                Alvin
              </SheetDescription>
              <div className='flex flex-col space-y-4'>
                {navLinks.map(({ title, href }) => (
                  <Link key={title} to={href} className='text-blue-600'>{title}</Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      );
}

export default MobileNav