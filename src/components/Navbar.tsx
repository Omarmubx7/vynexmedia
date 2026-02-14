import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const navLinks = [
  { href: '#story', label: 'Our DNA' },
  { href: '#expertise', label: 'Services' },
  { href: '#portfolio', label: 'Collaborations' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    // Basic active state logic
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 h-[80px] flex items-center ${isScrolled
        ? 'bg-[rgba(0,0,0,0.8)] backdrop-blur-[10px] border-b border-[var(--foreground)]/10 shadow-none'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-10 w-full">
        <div className="flex items-center justify-between">
          {/* Logo - Magnetic */}
          <MagneticButton strength={20}>
            <a href="#hero" className="group flex items-center gap-2 py-2">
              <span className="text-[16px] font-semibold text-[var(--foreground)] uppercase tracking-wider">Vynex Media</span>
            </a>
          </MagneticButton>

          {/* Desktop Navigation - Magnetic Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <MagneticButton key={link.href} strength={15}>
                <a
                  href={link.href}
                  className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-[15px] relative group ${isActive(link.href)
                    ? 'bg-primary text-black'
                    : 'text-[var(--foreground)]/70 hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]'
                    }`}
                >
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </div>

          {/* CTA - Magnetic */}
          <div className="hidden md:flex items-center">
            <MagneticButton strength={25}>
              <a
                href="#contact"
                className="px-8 py-3 bg-[#666] text-black text-[14px] font-bold hover:bg-primary transition-colors rounded-sm flex items-center gap-2"
              >
                Start a Project <span>→</span>
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-[1001] transition-colors duration-300 text-[var(--foreground)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-[1000] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="px-10 py-32 flex flex-col gap-8 h-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[32px] font-bold text-[var(--foreground)] uppercase tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto pb-10">
            <a
              href="#contact"
              className="btn-arrow w-full justify-between"
              onClick={() => setIsOpen(false)}
            >
              Start a Project <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
