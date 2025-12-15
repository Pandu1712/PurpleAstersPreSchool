import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import type { NavLink } from '../types';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Blog', href: 'blog' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    onNavigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFC527] shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => handleNavClick('home')}
          >
            <img
              src="/School.logo.png"
              alt="Purple Asters Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full"
            />
            <div className="ml-3">
              <h1 className="text-xl sm:text-2xl font-bold text-[#5B4FBF]">
                Purple Asters
              </h1>
              <p className="text-xs sm:text-sm text-black font-medium">
                Pre School & Day Care
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-base font-medium transition-all duration-300 transform hover:scale-110 ${
                  activeSection === link.href
                    ? 'text-[#5B4FBF] font-bold'
                    : 'text-gray-700 hover:text-[#5B4FBF]'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-[#5B4FBF]" />
            ) : (
              <Menu size={28} className="text-[#5B4FBF]" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-base font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === link.href
                      ? 'bg-[#5B4FBF] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8] text-white px-6 py-3 rounded-full font-semibold"
              >
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
