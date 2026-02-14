import { MessageCircle } from 'lucide-react';

const quickLinks = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#portfolio', label: 'أعمالنا' },
  { href: '#contact', label: 'تواصل معنا' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 md:py-40 bg-white text-black relative border-t border-black/5 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.2] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

            {/* Logo Section */}
            <div className="lg:col-span-2">
              <a href="#hero" className="flex items-center gap-1 mb-8 group">
                <span className="text-3xl font-bold tracking-tighter text-black uppercase transition-transform duration-300 group-hover:scale-105">Vynex</span>
                <span className="w-2 h-2 rounded-full bg-primary mt-4"></span>
              </a>
              <p className="text-2xl font-bold tracking-tighter text-black/80 max-w-sm mb-12 uppercase italic">
                Crafting your vision <br /> one dot at a time.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://instagram.com/vynexmedia.jo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/962790720994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Block */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-black mb-2">Explore</h4>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold tracking-tighter text-black/40 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact Block */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-black mb-2">Contact</h4>
              <p className="text-lg font-bold tracking-tighter text-black/80 leading-none">
                hello@vynexmedia.com
              </p>
              <p className="text-lg font-bold tracking-tighter text-black/80 leading-none">
                +962 790 720 994
              </p>
              <p className="text-lg font-bold tracking-tighter text-black/40 mt-4 leading-relaxed">
                Amman, Jordan <br />
                King Abdullah II St.
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/30">
              © {currentYear} VYNEX MEDIA. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/30">Privacy Policy</span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/30 underline decoration-primary/50 underline-offset-4 decoration-2 cursor-pointer">Built by mubx.dev</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
