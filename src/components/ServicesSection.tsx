import { Camera, Utensils, Film, Users, Plus } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const services = [
  {
    icon: Camera,
    title: 'Product Narrative',
    audience: 'Brands, Creators, Small Studios',
    result: 'High-fidelity imagery supporting campaigns and launches.',
    package: 'Starter: 10 Assets + 1 Reel',
  },
  {
    icon: Utensils,
    title: 'Gastronomy Content',
    audience: 'Restaurants, Cafes, Fine Dining',
    result: 'Sensory storytelling and content packages that drive reservations.',
    package: 'Hero Package: 5 Top Dishes + Atmosphere Reel',
  },
  {
    icon: Film,
    title: 'Visual Editing',
    audience: 'Creators with RAW content needing refinement',
    result: 'Polished edits aligned with your campaign objectives.',
    package: null,
  },
  {
    icon: Users,
    title: 'Identity Support',
    audience: 'Brands looking for consistent visual strategy',
    result: 'Content calendars, social media management, and visual strategy.',
    package: 'Full Plan: 8 Designs + 4 Reels monthly',
  },
];

const ServicesSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-48 bg-transparent relative overflow-hidden">
      {/* Grid utility removed to show DotGridCanvas */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-32">
            <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
              Expertise
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <h2 className="text-5xl md:text-9xl font-black tracking-extratight text-white uppercase italic leading-[0.8] animate-reveal">
                Service <br /> <span className="text-primary not-italic text-outline text-white">Matrix.</span>
              </h2>
              <p className="text-xl font-bold tracking-extratight text-white/40 max-w-sm leading-relaxed mb-4 uppercase italic">
                Integrated marketing and visual solutions designed to elevate your brand and drive measurable growth.
              </p>
            </div>
          </div>

          {/* Border Grid Services */}
          <div className="grid lg:grid-cols-2 gap-[1px] bg-white/5 border border-white/5 overflow-hidden animate-fade-up delay-200">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-12 md:p-32 bg-black group transition-all duration-700 relative overflow-hidden border-white/5 border-[0.5px]"
              >
                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full bg-black transition-colors duration-500 hover:bg-[#080808]">
                  <div className="flex items-start justify-between mb-12">
                    <div className="text-[60px] md:text-[80px] font-black text-white/[0.05] leading-none tracking-extratight text-outline">
                      0{index + 1}
                    </div>
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700 shadow-[0_0_15px_#00FF0010] group-hover:shadow-[0_0_25px_#00FF0080]">
                      <service.icon className="w-8 h-8 text-white group-hover:text-black transition-colors" strokeWidth={1} />
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-extratight uppercase italic group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-xl mb-16 leading-relaxed font-bold tracking-tight">
                    {service.result}
                  </p>

                  <div className="mt-auto pt-10 border-t border-white/[0.05]">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20 mb-2">Ideal For</p>
                        <p className="text-white/60 font-medium tracking-tight">
                          {service.audience}
                        </p>
                      </div>
                      <MagneticButton strength={20}>
                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_#00FF0050] transition-all">
                          <Plus className="w-5 h-5 text-white/40 group-hover:text-primary" />
                        </div>
                      </MagneticButton>
                    </div>

                    {service.package && (
                      <div className="inline-block py-2.5 px-6 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full group-hover:border-primary group-hover:text-primary transition-all">
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
