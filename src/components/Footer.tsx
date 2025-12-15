import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import type { NavLink } from "../types";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const quickLinks: NavLink[] = [
  { name: "Home", href: "home" },
  { name: "About Us", href: "about" },
  { name: "Gallery", href: "gallery" },
  { name: "Blog", href: "blog" },
  { name: "Contact", href: "contact" },
];

const programs = [
  "Infant Care (0-1 years)",
  "Toddler Program (1-2 years)",
  "Preschool (2-4 years)",
  "Pre-K (4-5 years)",
  "After School Care",
  "Summer Camp",
];

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#4B2FBF] via-[#3A2499] to-[#2B1B5A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/School.Logo.jpg"
                alt="Purple Asters Logo"
                className="h-16 w-16 object-contain rounded-full bg-white p-1"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold">Purple Asters</h3>
                <p className="text-sm text-white/70">
                  Pre School & Day Care
                </p>
              </div>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              Nurturing young minds through play, learning, and exploration.
              Creating a strong foundation for lifelong success.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/purpleasters.preschool/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/purpleasters_preschool/",
                },
                { icon: Twitter, href: "https://twitter.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full
                  bg-white/15 hover:bg-[#7C6AE6]
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-white/70 hover:text-white
                    transition-all duration-300
                    hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li
                  key={program}
                  className="text-white/70 text-sm
                  hover:text-[#4A9FD8]
                  transition-all duration-300
                  hover:translate-x-2 cursor-default"
                >
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-[#9DB5FF] flex-shrink-0 mt-1"
                />
                <span className="text-white/70 text-sm">
                  213, 6th Cross 2nd Block 80 Feet Road RMV Extension, 2nd Stage,
                  Sanjayanagara, Bengaluru-560094
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#9DB5FF]" />
                <a
                  href="tel:+919535666707"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  +91 95356 66707
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#9DB5FF]" />
                <a
                  href="mailto:purpleasterssanjaynagar@gmail.com"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  purpleasterssanjaynagar@gmail.com
                </a>
              </li>
            </ul>

            {/* HOURS */}
            <div className="mt-6 p-4 bg-white/10 rounded-xl">
              <p className="text-sm text-white/70 mb-2">
                Hours of Operation
              </p>
              <p className="text-white font-semibold text-sm">
                Mon - Fri: 9:00 AM - 7:00 PM
              </p>
              <p className="text-white font-semibold text-sm">
                Sat: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              {currentYear} Purple Asters Pre School & Day Care. All rights
              reserved.
            </p>

            <p className="text-white/70 text-sm flex items-center gap-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>for our little ones</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
