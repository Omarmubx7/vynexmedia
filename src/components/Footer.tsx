import { MessageCircle, Instagram } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const quickLinks = [
  { href: '#hero', label: 'Story' },
  { href: '#services', label: 'Expertise' },
  { href: '#portfolio', label: 'Archive' },
  { href: '#contact', label: 'Liaison' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 md:py-48 bg-white text-black relative border-t border-black/5 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-dots opacity-[0.1] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">

            {/* Logo Section */}
            <div className="lg:col-span-2">
              <MagneticButton strength={20}>
                <a href="#hero" className="flex items-center gap-1 mb-10 group">
                  <span className="text-4xl font-black tracking-extratight text-black uppercase">Vynex</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-primary mt-5"></span>
                </a>
              </MagneticButton>
              <p className="text-3xl font-black tracking-extratight text-black/80 max-w-sm mb-16 uppercase italic leading-[0.8]">
                Elevating <br /> your brand narrative <br /> <span className="text-outline text-black opacity-30">one frame at a time.</span>
              </p>

              <div className="flex items-center gap-8">
                <MagneticButton strength={40}>
                  <a
                    href="https://instagram.com/vynexmedia.jo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-700"
                  >
                    <Instagram size={24} strokeWidth={1.5} />
                  </a>
                </MagneticButton>
                <MagneticButton strength={40}>
                  <a
                    href="https://wa.me/962790720994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-700"
                  >
                    <MessageCircle size={24} strokeWidth={1.5} />
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Links Block */}
            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-black/20 mb-4">Navigation</h4>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-black tracking-extratight text-black/40 hover:text-primary transition-all uppercase italic"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact Block */}
            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-black/20 mb-4">Liaison</h4>
              <p className="text-2xl font-black tracking-extratight text-black uppercase italic leading-none hover:text-primary transition-colors cursor-pointer">
                hello@vynex.io
              </p>
              <p className="text-2xl font-black tracking-extratight text-black uppercase italic leading-none hover:text-primary transition-colors cursor-pointer">
                +962 79 072 0994
              </p>
              <div className="flex flex-col gap-6">
                <p className="text-[11px] font-black tracking-[0.4em] text-black/60 leading-relaxed uppercase">
                  Studio d'Image <br />
                  Amman, Jordan
                </p>
                <div className="group cursor-none">
                  <p className="text-[10px] font-black tracking-[0.6em] text-black/20 uppercase group-hover:text-primary transition-colors">
                    31.9454° N / 35.9284° E
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-black/5">
                  <span className="text-[9px] font-black tracking-[0.8em] text-black/10 uppercase italic">
                    Architectural Integrity.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/20">
              © {currentYear} VYNEX MEDIA. LUXURY VISUAL STANDARDS.
            </p>
            <div className="flex items-center gap-12">
              <a href="/privacy" className="text-[10px] font-black tracking-[0.3em] uppercase text-black/20 hover:text-primary cursor-pointer transition-colors">Privacy Ethics</a>
              <a
                href="https://mubx.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black/20 group-hover:text-black transition-colors">Crafted by</span>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black underline decoration-primary/30 underline-offset-4 decoration-2">mubx.dev</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
