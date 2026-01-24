import { ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="gradient-text">Vynex Media</span>
                <br />
                <span className="text-foreground">نخلي محتواك يصوّر قصتك</span>
              </h1>
            </div>

            <div className="animate-fade-up delay-100">
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto lg:mx-0 lg:mr-0 leading-relaxed">
                ستوديو بصري متخصّص في تصوير المنتجات، جلسات تصوير للمطاعم والكافيهات، ومونتاج فيديوهات Reels و Short Form جاهزة للنشر.
              </p>
            </div>

            <div className="animate-fade-up delay-200">
              <p className="text-base text-primary/80 font-medium mb-8 italic">
                Visual media agency turning your ideas into scroll-stopping content.
              </p>
            </div>

            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary text-lg">
                احجز جلسة استشارة مجانية
              </a>
              <a href="#portfolio" className="btn-outline text-lg">
                شوف أعمالنا
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 max-w-md lg:max-w-lg animate-fade-up delay-400">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative bg-secondary rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Phone Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary rounded-full z-10" />
                  
                  {/* Instagram-like Grid */}
                  <div className="p-4 pt-12 grid grid-cols-3 gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-2xl blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
