import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-cta md:hidden">
      <div className="bg-white border-t border-black/5 p-4 backdrop-blur-xl">
        <a
          href="#contact"
          className="w-full h-16 bg-black text-white rounded-full flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.2em] transition-all active:scale-95"
        >
          <MessageCircle className="w-5 h-5 text-primary" />
          <span>Start a Project</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
