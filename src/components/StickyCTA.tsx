import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-cta md:hidden">
      <div className="bg-white/80 border-t border-black/5 p-4 backdrop-blur-2xl">
        <a
          href="#contact"
          className="w-full h-14 bg-black text-white flex items-center justify-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] transition-all active:scale-[0.98] rounded-sm italic"
        >
          <MessageCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <span>Initiate Narrative</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
