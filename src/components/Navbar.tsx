import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#portfolio', label: 'أعمالنا' },
  { href: '#contact', label: 'تواصل معنا' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl py-4 border-b border-black/[0.03]'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tighter text-black uppercase transition-transform duration-300 group-hover:scale-105">Vynex</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-3"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black/60 hover:text-black transition-all duration-300 font-medium text-[13px] uppercase tracking-widest relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-black text-white text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-primary transition-all duration-300 rounded-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-700 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
      >
        <div className="px-8 py-12 flex flex-col gap-8 h-full">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-3xl font-bold tracking-tighter text-black transition-all duration-500 delay-[${idx * 100}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto pb-24">
            <a
              href="#contact"
              className="w-full py-5 bg-black text-white text-center font-bold tracking-widest uppercase rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
