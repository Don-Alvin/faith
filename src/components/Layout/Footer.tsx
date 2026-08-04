"use client"

import { useState } from "react"
import { FacebookIcon, Instagram, Mail, Phone, MapPin, ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import BrandLogo from "./BrandLogo"
import { submitForm } from "@/lib/formsubmit"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitForm({ email }, `New newsletter signup - ${email}`)
      setStatus('success')
      setEmail("")
    } catch {
      setStatus('error')
    }
  }

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
    <footer className="gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <BrandLogo className="h-14" />
              </div>

              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Your trusted partner in finding the perfect property. We specialize in connecting dreams with reality through exceptional real estate services.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-lg">+254 750 030 357</span>
                </div>

                <div className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-lg">anadoomollo@zohomail.com</span>
                </div>

                <div className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-lg">Nairobi, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href='https://www.facebook.com/share/aQucT6BtD6U7vhy8/?mibextid=qi2Omg'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <FacebookIcon className="h-5 w-5 text-white" />
                </a>
                <a
                  href='https://www.instagram.com/lamonarealtors'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
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
                        href={link.href}
                        className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
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
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Get the latest property listings, market insights, and exclusive deals delivered to your inbox.
              </p>

              {status === 'success' ? (
                <div className="flex items-center justify-center gap-2 text-accent max-w-md mx-auto py-3">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Subscribed! Thanks for joining.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-accent focus:ring-2 focus:ring-ring/30 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-6 py-3 gradient-gold text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {status === 'submitting' ? 'Sending...' : 'Subscribe'}
                  </button>
                </form>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-center md:text-left">
                © {currentYear} Lamona Realtors. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-white/60">
                <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
                <Link href="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
