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
      <a
        href="#contact"
        className="btn-primary w-full flex items-center justify-center gap-2 text-lg animate-glow-pulse"
      >
        <MessageCircle className="w-5 h-5" />
        احجز جلسة استشارة مجانية
      </a>
    </div>
  );
};

export default StickyCTA;
