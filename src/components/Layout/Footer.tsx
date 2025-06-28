import { Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "Properties", href: "/listings" },
        { name: "Insights", href: "/blogs" },
        { name: "About", href: "/about" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Property Sales", href: "#" },
        { name: "Property Rentals", href: "#" },
        { name: "Investment Consulting", href: "#" },
        { name: "Property Management", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Market Reports", href: "#" },
        { name: "Investment Guide", href: "#" },
        { name: "Financing Options", href: "#" },
        { name: "Legal Support", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="font-bold text-white text-lg">L</span>
                </div>
                <span className="font-display font-bold text-white text-2xl">Lamona</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Transforming real estate experiences through innovation, expertise, and unwavering commitment to our clients' success.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">+254 750 030 357</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">anadoomollo@zohomail.com</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg">Nairobi, Kenya</span>
                </div>
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
                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
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
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center space-y-6">
              <h3 className="font-display text-3xl font-bold text-white">
                Stay Updated with Market Insights
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Get exclusive property listings, market analysis, and investment opportunities delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300 backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left flex items-center gap-2">
                © {currentYear} Lamona Realtors. Made with <Heart className="h-4 w-4 text-red-500" /> in Kenya.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer