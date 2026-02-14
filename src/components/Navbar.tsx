import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import MagneticButton from './ui/MagneticButton';

const navLinks = [
  { href: '/#hero', label: 'Home' },
  { href: '/#story', label: 'Our DNA' },
  { href: '/#expertise', label: 'Services' },
  { href: '/#portfolio', label: 'Collaborations' },
  { href: '/#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.hash === href.replace('/', '');
    }
    return location.pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
        ? 'bg-white/90 backdrop-blur-2xl py-3 border-b border-black/[0.05]'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <div className="flex items-center justify-between">
          {/* Logo - Magnetic */}
          <MagneticButton strength={20}>
            <a href="#hero" className="group flex items-center gap-1.5 py-2">
              <span className="text-2xl font-black tracking-extratight text-white uppercase transition-transform duration-300">Vynex</span>
              <span className="text-primary text-xl font-black mt-1 group-hover:scale-150 transition-transform">:::</span>
            </a>
          </MagneticButton>

          {/* Desktop Navigation - Magnetic Links */}
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <MagneticButton key={link.href} strength={15}>
                <a
                  href={link.href}
                  className={`px-6 py-2 rounded-full transition-all duration-500 font-bold text-[11px] uppercase tracking-[0.3em] relative group ${isActive(link.href)
                    ? 'bg-primary text-black'
                    : 'text-white/40 hover:text-white'
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
                className="px-10 py-4 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all duration-500 border border-black group overflow-hidden relative"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="absolute inset-0 bg-dots opacity-[0.2]" />

        <div className="px-10 py-32 flex flex-col gap-10 h-full relative z-10">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-5xl font-black tracking-extratight text-black uppercase italic transition-all duration-700 delay-[${idx * 50}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto pb-20">
            <a
              href="#contact"
              className="w-full py-6 bg-black text-white text-center font-bold tracking-[0.3em] text-sm uppercase rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
