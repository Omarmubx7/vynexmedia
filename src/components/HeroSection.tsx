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
            <h1 className="text-[8vw] lg:text-[100px] font-black leading-[0.9] tracking-extratight text-black uppercase animate-reveal italic max-w-6xl">
              Vynex Media – Boutique marketing & visual studio from Amman.
            </h1>
          </div>
          <p className="text-xl font-bold tracking-extratight text-black/40 uppercase italic mb-12 animate-fade-up">
            Crafting your vision one frame at a time.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start w-full mt-24 border-t border-black/5 pt-16 animate-fade-up delay-400">
            {[
              { title: 'Excellence', desc: 'Undeviating commitment to quality.' },
              { title: 'Agility', desc: 'Rapid response in a shifting market.' },
              { title: 'Commitment', desc: 'Dedicated partnership beyond the frame.' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start text-left group cursor-none">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <h3 className="text-3xl font-black tracking-extratight text-black uppercase italic group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[10px] font-black tracking-[0.4em] text-black/20 uppercase pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-left w-full mt-16 pl-6 animate-fade-up delay-500">
            <p className="text-xl font-bold tracking-extratight text-black/60 uppercase italic leading-relaxed max-w-2xl">
              We design campaigns, content, and strategies that grow ambitious brands.
            </p>
          </div>

          <div dir="rtl" className="w-full mt-32 text-right">
            <h2 className="text-4xl md:text-7xl font-black text-black leading-[1.1] max-w-5xl font-cairo animate-reveal">
              نصوّر <span className="text-primary italic">رؤيتك</span> بكل <span className="text-outline text-black">تفصيـــل.</span>
            </h2>
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

          {/* Dot Separator */}
          <div className="mt-40 flex justify-center gap-4 opacity-10">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-black" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
