import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-brand-red p-1.5 rounded-lg">
               <Car className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold tracking-tighter ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white'}`}>
              Auto<span className="text-brand-red">Alem</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-gray-200 hover:text-white hover:underline decoration-brand-red decoration-2 underline-offset-4 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-brand-red hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-900/20 flex items-center gap-2"
            >
              <Phone size={16} />
              +54 9 351 631-3195
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-800">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a 
                href="tel:+5493516313195"
                className="w-full bg-brand-red text-white text-center py-3 rounded-lg font-bold block"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;