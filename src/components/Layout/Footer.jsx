import { FacebookIcon, Instagram, LinkedinIcon, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col md:flex-row gap-6 md:justify-evenly md:items-center text-white px-6 py-10 lg:p-20">
      <div className='flex items-center w-40 h-10 text-yellow-600 font-semibold'>
        <img src='/images/logo_whitebg.png' alt='logo'  className='w-full'/>
      </div>
      <div className="grid gap-3">
        <h3 className="font-semibold text-2xl">Contact us</h3>
        <div className="grid gap-3">
          <div className="flex gap-2  text-xl items-center">
            <Phone />
            <span>+254 750 030 357</span>
          </div>
          <div className="flex gap-2 text-xl items-center">
            <Mail />
            <span>anadoomollo@zohomail.com</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Link to='https://www.facebook.com/share/aQucT6BtD6U7vhy8/?mibextid=qi2Omg' target="_blank" className="p-2 rounded-full bg-green-900"><FacebookIcon /></Link>
          <Link to='https://www.instagram.com/lamonarealtors' target="_blank" className="p-2 rounded-full bg-green-900"><Instagram /></Link>
        </div>
      </div>
      <div className="grid gap-3">
        <h3 className="font-semibold text-2xl">Quick links</h3>
        <div className="grid text-xl gap-3 ">
          <Link to='/'>Home</Link>
          <Link to='/listings'>Listings</Link>
          <Link to='/blogs'>Blog</Link>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer