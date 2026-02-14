import { ArrowDown } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20"
    >
      {/* Visual Layers */}
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute inset-0 bg-dots opacity-[0.2] z-0" />

      {/* Vertical architectural lines */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-black/[0.03] z-0 hidden lg:block" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-black/[0.03] z-0 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-[1200px] mx-auto">

          <div className="mb-12 animate-fade-up">
            <span className="inline-block py-1 px-3 border border-black/10 text-[9px] uppercase tracking-[0.4em] font-bold rounded-full mb-6">
              Studio d'Image & Contenu
            </span>
          </div>

          <div className="overflow-hidden mb-4">
            <h1 className="text-[14vw] lg:text-[180px] font-black leading-[0.8] tracking-extratight text-black uppercase animate-reveal italic">
              Vynex <br /> <span className="text-primary not-italic text-outline">Media</span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-up delay-200">
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-black/50 mb-16 leading-relaxed max-w-2xl mx-auto uppercase italic lowercase">
              Excellence. <span className="text-black/10">/</span> Agility. <span className="text-black/10">/</span> Commitment.
            </p>

            <div dir="rtl" className="text-right sm:text-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-12 leading-[1.2] max-w-4xl mx-auto font-cairo">
                نصوّر <span className="text-primary italic">رؤيتك</span> بكل <span className="text-outline text-black">تفصيـــل.</span>
              </h2>
            </div>
          </div>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-8 justify-center items-center">
            <MagneticButton strength={40}>
              <a
                href="#contact"
                className="group relative px-12 py-6 bg-black text-white text-[12px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-500 rounded-sm"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </MagneticButton>

            <MagneticButton strength={20}>
              <a
                href="#portfolio"
                className="group px-12 py-6 bg-transparent text-black border border-black/10 text-[12px] uppercase tracking-[0.3em] font-bold hover:border-black transition-all duration-500 rounded-sm overflow-hidden relative"
              >
                <span className="relative z-10">Our Works</span>
              </a>
            </MagneticButton>
          </div>

          {/* Scroll Down Hint */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block opacity-20 hover:opacity-100 transition-opacity">
            <MagneticButton strength={20}>
              <a href="#story" className="flex flex-col items-center gap-4">
                <ArrowDown size={16} strokeWidth={1} />
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
