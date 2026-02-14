import { ArrowDown } from 'lucide-react';
import grid1 from '@/assets/1.png';
import grid2 from '@/assets/2.png';
import grid3 from '@/assets/3.png';
import grid4 from '@/assets/4.png';
import grid5 from '@/assets/5.png';
import grid6 from '@/assets/6.png';
import grid7 from '@/assets/7.png';
import grid8 from '@/assets/8.png';
import grid9 from '@/assets/9.png';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20"
    >
      {/* Dot Motif Background */}
      <div className="absolute inset-0 bg-dots opacity-[0.4] z-0" />

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-black/[0.03] z-0 hidden lg:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-black/[0.03] z-0 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-[1000px] mx-auto">

          <div className="mb-8 animate-fade-up">
            <span className="inline-block py-1.5 px-4 bg-black text-white text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold rounded-full mb-6">
              Amman's Premiere Visual Studio
            </span>
          </div>

          <div className="overflow-hidden mb-8">
            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[130px] font-bold leading-[0.9] tracking-tighter text-black uppercase animate-reveal italic">
              Vynex <span className="text-primary not-italic">Media</span>
            </h1>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-up delay-200">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
              نصوّر <span className="text-primary">شغلك</span> بطريقة تخليه يبيع عنك
            </h2>
            <p className="text-base sm:text-lg text-black/60 mb-12 max-w-xl mx-auto leading-relaxed">
              استوديو تصوير إبداعي نشتغل مع البراندات الطموحة والمتاجر المميزة عشان نطلع لهم صور وفيديوهات تشهي وتشد الزبون.
            </p>
          </div>

          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <a
              href="#contact"
              className="px-10 py-5 bg-black text-white text-[13px] uppercase tracking-[0.2em] font-bold hover:bg-primary transition-all duration-500 rounded-sm"
            >
              Book a session
            </a>
            <a
              href="#portfolio"
              className="px-10 py-5 bg-white text-black border border-black/10 text-[13px] uppercase tracking-[0.2em] font-bold hover:border-black transition-all duration-500 rounded-sm"
            >
              Our Works
            </a>
          </div>

          {/* Scroll Down */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-40">
            <a href="#about" className="flex flex-col items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold rotate-90 mb-4 translate-y-4">Scroll</span>
              <ArrowDown size={14} strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
