import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import type { NavLink } from '../types';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const quickLinks: NavLink[] = [
  { name: 'Home', href: 'home' },
  { name: 'About Us', href: 'about' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Blog', href: 'blog' },
  { name: 'Contact', href: 'contact' },
];

const programs = [
  'Infant Care (0-1 years)',
  'Toddler Program (1-2 years)',
  'Preschool (2-4 years)',
  'Pre-K (4-5 years)',
  'After School Care',
  'Summer Camp',
];

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/SchoolLogo.png"
                alt="Purple Asters Logo"
                className="h-16 w-16 object-contain"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold">Purple Asters</h3>
                <p className="text-sm text-gray-400">Pre School & Day Care</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nurturing young minds through play, learning, and exploration. Creating a foundation for lifelong success.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/purpleasters.preschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#5B4FBF] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/purpleasters_preschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#5B4FBF] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#5B4FBF] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-gray-400 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#4A9FD8] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  213, 6th Cross 2nd Block 80 Feet Road RMV Extension, 2nd Stage, Sanjayanagara, Bengaluru-560094
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#4A9FD8] flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +91 95356 66707
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#4A9FD8] flex-shrink-0" />
                <a
                  href="mailto:info@purpleasters.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  purpleasterssanjaynagar@gmail.com

                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-sm text-gray-400 mb-2">Hours of Operation</p>
              <p className="text-white font-semibold text-sm">Mon - Fri: 7:00 AM - 6:00 PM</p>
              <p className="text-white font-semibold text-sm">Sat: 8:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} Purple Asters Pre School & Day Care. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>for our little ones</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
