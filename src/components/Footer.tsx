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
    <footer className="py-[120px] md:py-[160px] bg-transparent text-[var(--foreground)] relative border-t border-[var(--foreground)]/10">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.4em] text-[var(--foreground)]/20 uppercase mb-8">Direct Channel</h4>
            <a href="mailto:hello@vynex.io" className="text-4xl md:text-6xl font-extrabold text-[var(--foreground)] hover:text-primary transition-colors tracking-tighter">hello@vynex.io</a>
          </div>

          <div className="flex items-center gap-12">
            <a
              href="https://instagram.com/thegloriousinc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-all pb-1 border-b border-transparent hover:border-primary"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/962790720994"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-all pb-1 border-b border-transparent hover:border-primary"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-[var(--foreground)]/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-12">
            <p className="text-[11px] font-medium text-[var(--foreground)]/30 uppercase tracking-[0.2em]">
              &copy; {currentYear} Vynex Media.
            </p>
            <a href="/privacy" className="text-[11px] font-medium text-[var(--foreground)]/30 hover:text-[var(--foreground)] transition-colors uppercase tracking-[0.2em]">Privacy</a>
          </div>
          <a
            href="https://mubx.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]"
          >
            Studio by mubx.dev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
