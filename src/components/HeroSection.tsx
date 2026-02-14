import { ArrowDown } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20"
    >
      {/* Visual Layers */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-[var(--foreground)]/0.05 z-0 hidden lg:block" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-[var(--foreground)]/0.05 z-0 hidden lg:block" />

      <div className="hero-content max-w-[1200px] w-full mx-auto px-10 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="hero-title text-[clamp(48px,8vw,120px)] font-extrabold leading-[1] tracking-[-0.04em] text-[var(--foreground)] opacity-0 translate-y-[60px] animate-[heroFadeIn_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards] delay-300">
            Crafting Vision.<br />Digital Excellence.
          </h1>
          <p className="text-lg font-medium tracking-[0.2em] text-[var(--foreground)]/40 mt-12 mb-16 animate-fade-up delay-500 uppercase">
            One dot at a time.
          </p>

          <div className="flex justify-center items-center animate-fade-up delay-700">
            <a href="#contact" className="btn-arrow group">
              Start a Project <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block opacity-20 hover:opacity-100 transition-opacity">
        <MagneticButton strength={20}>
          <a href="#story" className="flex flex-col items-center gap-4">
            <ArrowDown size={16} strokeWidth={1} className="text-[var(--foreground)]" />
          </a>
        </MagneticButton>
      </div>
    </section>
  );
};

export default HeroSection;
