import { FacebookIcon, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Listings", href: "/listings" },
        { name: "Blog", href: "/blogs" },
        { name: "About", href: "/about" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Property Sales", href: "#" },
        { name: "Property Rentals", href: "#" },
        { name: "Investment Advice", href: "#" },
        { name: "Property Management", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <div className="w-40 h-12">
                  <img 
                    src='/images/logo_whitebg.png' 
                    alt='Lamona Realtors' 
                    className='w-full h-full object-contain filter drop-shadow-lg'
                  />
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Your trusted partner in finding the perfect property. We specialize in connecting dreams with reality through exceptional real estate services.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-lg">+254 750 030 357</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-lg">anadoomollo@zohomail.com</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-lg">Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <Link 
                  to='https://www.facebook.com/share/aQucT6BtD6U7vhy8/?mibextid=qi2Omg' 
                  target="_blank" 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <FacebookIcon className="h-5 w-5 text-white" />
                </Link>
                <Link 
                  to='https://www.instagram.com/lamonarealtors' 
                  target="_blank" 
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="font-bold text-xl text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="text-center space-y-6">
              <h3 className="font-display text-3xl font-bold text-white">
                Stay Updated with Market Trends
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Get the latest property listings, market insights, and exclusive deals delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                © {currentYear} Lamona Realtors. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link to="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
                <Link to="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer