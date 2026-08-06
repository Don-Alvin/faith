import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import BrandLogo from "./BrandLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Listings", href: "/listings" },
  { name: "Blog", href: "/blogs" },
  { name: "About", href: "/about" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="gradient-primary text-white border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr] gap-10 lg:gap-8 py-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <BrandLogo className="h-11" />
            </Link>
            <p className="mt-5 text-white/65 leading-relaxed max-w-[34ch]">
              Honest homes in Nairobi&apos;s prime neighbourhoods. Vetted listings, real
              guidance, and a site visit booked in minutes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-accent text-xs font-bold tracking-[0.16em] uppercase mb-5">
              Navigation
            </div>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-accent text-xs font-bold tracking-[0.16em] uppercase mb-5">
              Contact
            </div>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="tel:+254750030357" className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors">
                  <Phone className="h-[18px] w-[18px] text-accent flex-shrink-0 mt-0.5" />
                  <span>+254 750 030 357</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/254750030357" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors">
                  <MessageCircle className="h-[18px] w-[18px] text-accent flex-shrink-0 mt-0.5" />
                  <span>WhatsApp us</span>
                </a>
              </li>
              <li>
                <a href="mailto:anadoomollo@zohomail.com" className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors break-all">
                  <Mail className="h-[18px] w-[18px] text-accent flex-shrink-0 mt-0.5" />
                  <span>anadoomollo@zohomail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="h-[18px] w-[18px] text-accent flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <div className="text-accent text-xs font-bold tracking-[0.16em] uppercase mb-5">
              Follow
            </div>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="https://www.facebook.com/share/aQucT6BtD6U7vhy8/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <Facebook className="h-[18px] w-[18px] text-accent flex-shrink-0" />
                  <span>@lamonarealtors</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lamonarealtors" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <Instagram className="h-[18px] w-[18px] text-accent flex-shrink-0" />
                  <span>@lamonarealtors</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">
            © {year} Lamona Realtors. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/60 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-white/60 hover:text-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
