import { Quote } from 'lucide-react';
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';

const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

const testimonials = [
  {
    quote: "Vynex didn't just take photos; they understood the soul of our kitchen. Their reels drove more traffic in a week than we saw in a month.",
    author: "Zaid Al-Najjar",
    role: "Founder, Diwan Restaurant",
  },
  {
    quote: "The visual identity they built for Bloom Store is exactly what we needed to enter the premium market. Pure excellence.",
    author: "Lina Kawar",
    role: "Director, Bloom Store",
  },
  {
    quote: "Agile, professional, and with a rare eye for detail. They've become an essential part of our brand's growth.",
    author: "Samer Oweis",
    role: "Head of Marketing, Roast Cafe",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-48 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dots opacity-[0.1] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
            <div className="max-w-3xl">
              <h2 className="section-title">
                Client Stories.
              </h2>
            </div>
            <p className="text-xl font-bold tracking-extratight text-black/40 max-w-sm leading-relaxed mb-4 uppercase italic">
              Authentic narratives from visionaries who leveraged our lens to scale their impact.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="group relative flex flex-col h-full animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-1 pb-12 border-b border-[var(--foreground)]/[0.05]">
                  <p className="text-2xl font-black tracking-extratight text-[var(--foreground)]/80 leading-relaxed italic uppercase mb-12">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-10 flex items-center justify-between">
                  <div>
                    <h4 className="text-[12px] font-black tracking-[0.4em] text-[var(--foreground)] uppercase mb-1">
                      {t.author}
                    </h4>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos - Subtle Grid */}
          <div className="pt-32 border-t border-[var(--foreground)]/5">
            <h4 className="text-[10px] font-black tracking-[0.6em] uppercase text-[var(--foreground)]/10 text-center mb-24">Global Collaborators</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 items-center justify-items-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
              {clientLogos.map((logo, i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-700 w-full max-w-[140px] h-24 flex items-center justify-center filter group">
                  <img
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
