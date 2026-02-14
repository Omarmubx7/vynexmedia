import { Instagram, MessageCircle } from 'lucide-react';

const quickLinks = [
  { href: '#story', label: 'Our DNA' },
  { href: '#expertise', label: 'Services' },
  { href: '#portfolio', label: 'Collaborations' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-[120px] md:py-[160px] bg-black text-white relative border-t border-white/10 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start mb-32">
          <div>
            <h2 className="section-title mb-12">
              Visionary.<br />
              Connected.<br />
              Global.
            </h2>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/thegloriousinc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/962790720994"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="flex flex-col gap-8">
              <span className="text-[12px] font-bold tracking-[0.3em] text-white/20 uppercase">Navigation</span>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[18px] font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-tight"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-[12px] font-bold tracking-[0.3em] text-white/20 uppercase">Liaison</span>
              <a href="mailto:hello@vynex.io" className="text-[18px] font-medium text-white hover:text-primary transition-colors">hello@vynex.io</a>
              <p className="text-[18px] font-medium text-white">+962 79 072 0994</p>
              <div className="mt-4">
                <p className="text-[14px] text-white/40 leading-relaxed uppercase tracking-widest">
                  Studio d'Image / Amman, Jordan<br />
                  31.9454° N / 35.9284° E
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.2em]">
            &copy; {currentYear} Vynex Media. Boutique Visual Studio.
          </p>
          <div className="flex items-center gap-8">
            <a href="/privacy" className="text-[11px] font-medium text-white/30 hover:text-white transition-colors uppercase tracking-[0.2em]">Privacy</a>
            <a
              href="https://mubx.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]"
            >
              Made by mubx.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
