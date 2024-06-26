import { FacebookIcon, Instagram, LinkedinIcon, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-6">
      <div className="grid gap-3">
        <h4 className="font-semibold text-xl">Contact us</h4>
        <div className="grid gap-3">
          <div className="flex gap-2">
            <Phone />
            <span>+254 704 087097</span>
          </div>
          <div className="flex gap-2">
            <Mail />
            <span>alvindon41@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Link className="p-2 rounded-full bg-green-900"><FacebookIcon /></Link>
          <Link className="p-2 rounded-full bg-green-900"><LinkedinIcon /></Link>
          <Link className="p-2 rounded-full bg-green-900"><Instagram /></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer