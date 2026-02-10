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
  const gridImages = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-[1200px] mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right">
            <div className="animate-fade-up">
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-6">
                <span className="text-foreground">نصوّر شغلك بطريقة</span>
                <br />
                <span className="gradient-text">تخليه يبيع عنك</span>
              </h1>
            </div>

            <div className="animate-fade-up delay-100">
              <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0 lg:mr-0 leading-relaxed">
                استوديو تصوير في عمّان نشتغل مع البراندات الصغيرة والمتاجر عشان نطلع لهم صور وفيديوهات تشهي وتشد الزبون.
              </p>
            </div>

            <div className="animate-fade-up delay-200">
              <p className="text-sm text-secondary font-medium mb-8 italic">
                A small visual studio in Amman, obsessed with clean shots and tasty frames.
              </p>
            </div>

            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary text-base">
                احجز جلسة استشارة مجانية
              </a>
              <a href="#portfolio" className="btn-outline text-base">
                شوف أعمالنا
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 max-w-sm lg:max-w-md animate-fade-up delay-400">
            <div className="relative">
              <div className="relative bg-foreground/10 rounded-[3rem] p-3 shadow-lg animate-float">
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Phone Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-full z-10" />

                  {/* Instagram-like Grid */}
                  <div className="p-4 pt-12 grid grid-cols-3 gap-1">
                    {gridImages.map((image, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-sm overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`عمل سابق ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
