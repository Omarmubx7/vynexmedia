import { ArrowDown } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20"
    >
      {/* Visual Layers */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white/[0.03] z-0 hidden lg:block" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-white/[0.03] z-0 hidden lg:block" />

      <div className="hero-content max-w-[1200px] w-full mx-auto px-10 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="hero-title text-[clamp(48px,8vw,120px)] font-bold leading-[1.1] tracking-[-0.02em] text-white opacity-0 translate-y-[60px] animate-[heroFadeIn_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards] delay-300">
            Visionary Design.<br />Digital Excellence.
          </h1>
          <p className="text-xl font-medium tracking-tight text-white/40 mt-12 mb-16 animate-fade-up delay-500 uppercase">
            Crafting your vision one dot at a time.
          </p>

          <div className="flex flex-wrap gap-8 justify-center items-center animate-fade-up delay-700">
            <a href="#contact" className="btn-arrow group">
              Get in touch <span className="arrow">→</span>
            </a>
            <a href="#portfolio" className="btn-arrow group text-white/60 hover:text-white">
              View Work <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block opacity-20 hover:opacity-100 transition-opacity">
        <MagneticButton strength={20}>
          <a href="#story" className="flex flex-col items-center gap-4">
            <ArrowDown size={16} strokeWidth={1} className="text-white" />
          </a>
        </MagneticButton>
      </div>
    </section>
  );
};

export default HeroSection;
