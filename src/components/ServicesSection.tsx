import { Camera, Utensils, Film, Users, Plus } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const services = [
  {
    icon: Camera,
    title: 'Product Narrative',
    audience: 'Brands, Creators, Small Studios',
    result: 'High-fidelity imagery that communicates value instantly.',
    package: 'Starter: 10 Assets + 1 Reel',
  },
  {
    icon: Utensils,
    title: 'Gastronomy Content',
    audience: 'Restaurants, Cafes, Fine Dining',
    result: 'Sensory storytelling that drives reservations.',
    package: 'Hero Package: 5 Top Dishes + Atmosphere Reel',
  },
  {
    icon: Film,
    title: 'Visual Editing',
    audience: 'Creators with RAW content needing refinement',
    result: 'Polished, high-engagement edits for Reels & TikTok.',
    package: null,
  },
  {
    icon: Users,
    title: 'Identity Support',
    audience: 'Brands looking for consistent visual strategy',
    result: 'Seamless social management for professional growth.',
    package: 'Full Plan: 8 Designs + 4 Reels monthly',
  },
];

const ServicesSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-48 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-32">
            <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
              Expertise
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <h2 className="text-5xl md:text-9xl font-black tracking-extratight text-black uppercase italic leading-[0.8] animate-reveal">
                Service <br /> <span className="text-primary not-italic text-outline text-black">Matrix.</span>
              </h2>
              <p className="text-xl font-bold tracking-extratight text-black/40 max-w-sm leading-relaxed uppercase italic">
                Integrated visual solutions designed to elevate your brand identity and drive measurable impact.
              </p>
            </div>
          </div>

          {/* Border Grid Services */}
          <div className="grid lg:grid-cols-2 gap-[1px] bg-black/5 border border-black/5 rounded-sm overflow-hidden animate-fade-up delay-200">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-12 md:p-32 bg-white group transition-all duration-700 relative overflow-hidden"
              >
                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full bg-white transition-colors duration-500 hover:bg-black/5">
                  <div className="flex items-start justify-between mb-12">
                    <div className="text-[60px] md:text-[80px] font-black text-black/[0.05] leading-none tracking-extratight text-outline">
                      0{index + 1}
                    </div>
                    <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                      <service.icon className="w-8 h-8 text-black group-hover:text-white transition-colors" strokeWidth={1} />
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-black text-black mb-10 tracking-extratight uppercase italic group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-black/60 text-xl mb-16 leading-relaxed font-bold tracking-tight">
                    {service.result}
                  </p>

                  <div className="mt-auto pt-10 border-t border-black/[0.05]">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-black/20 mb-2">Ideal For</p>
                        <p className="text-black/60 font-medium tracking-tight">
                          {service.audience}
                        </p>
                      </div>
                      <MagneticButton strength={20}>
                        <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:border-black transition-all">
                          <Plus className="w-5 h-5" />
                        </div>
                      </MagneticButton>
                    </div>

                    {service.package && (
                      <div className="inline-block py-2.5 px-6 border border-black/10 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full group-hover:border-primary group-hover:text-primary transition-all">
                        {service.package}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
