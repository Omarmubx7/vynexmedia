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
    name: 'Ahmad M.',
    role: 'Gastronomy Proprietor',
    content: 'The visual precision elevated our menu to a tier of luxury we hadn’t imagined. Conversions on high-value dishes increased immediately.',
  },
  {
    name: 'Sara K.',
    role: 'Boutique Founder',
    content: 'Partnering with Vynex for our product narrative gave us the high-fidelity identity needed to compete in a global market.',
  },
  {
    name: 'Khaled J.',
    role: 'Media Director',
    content: 'Their reel production is unparalleled. We saw a triple-digit increase in organic engagement within the first month of collaboration.',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-48 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dots opacity-[0.1] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
            <div className="max-w-3xl">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
                Praise
              </span>
              <h2 className="text-5xl md:text-9xl font-black tracking-extratight text-black uppercase italic leading-[0.8]">
                Client <br /> <span className="text-primary not-italic text-outline text-black">Stories.</span>
              </h2>
            </div>
            <p className="text-xl font-bold tracking-extratight text-black/40 max-w-sm leading-relaxed mb-4 uppercase italic">
              Authentic narratives from visionaries who leveraged our lens to scale their impact.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-[1px] bg-black/5 border border-black/5 rounded-sm overflow-hidden mb-32">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-16 md:p-20 bg-white flex flex-col justify-between group transition-all duration-700 relative overflow-hidden"
              >
                {/* Number Overlay */}
                <div className="absolute top-10 right-10 text-[120px] font-black text-black/[0.02] group-hover:text-primary/5 transition-colors leading-none pointer-events-none tracking-extratight text-outline">
                  0{index + 1}
                </div>

                <div className="mb-16 relative z-10">
                  <Quote className="w-16 h-16 text-primary/10 group-hover:text-primary transition-colors mb-10" strokeWidth={1} />
                  <p className="text-2xl md:text-3xl font-black tracking-extratight text-black leading-relaxed italic group-hover:text-black transition-colors">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-6 pt-10 border-t border-black/[0.05]">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white font-black text-sm group-hover:bg-primary transition-colors">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xl font-black tracking-extratight text-black uppercase leading-none mb-2">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/20 italic">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos - Subtle Grid */}
          <div className="pt-32 border-t border-black/5">
            <h4 className="text-[10px] font-black tracking-[0.6em] uppercase text-black/10 text-center mb-24">Global Collaborators</h4>
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
