import { Camera, Utensils, Film, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Product Narrative',
    desc: 'High-fidelity imagery supporting campaigns and launches for luxury brands.',
  },
  {
    icon: Utensils,
    title: 'Gastronomy Content',
    desc: 'Sensory storytelling and content packages that drive reservations and atmospheric prestige.',
  },
  {
    icon: Film,
    title: 'Visual Editing',
    desc: 'Polished edits aligned with your campaign objectives and brand logic.',
  },
  {
    icon: Users,
    title: 'Identity Support',
    desc: 'Content calendars, social media management, and visual strategy for market dominance.',
  },
];

const ServicesSection = () => {
  return (
    <section id="expertise" className="py-[120px] md:py-[160px] bg-transparent relative">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="mb-24">
          <h2 className="section-title">
            Services.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-[1px] bg-[var(--foreground)]/10 border border-[var(--foreground)]/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-12 md:p-16 bg-black group hover:bg-[#050505] transition-colors relative"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[12px] font-bold tracking-[0.3em] text-[var(--foreground)]/20 uppercase group-hover:text-primary transition-colors">
                    0{index + 1}
                  </span>
                  <service.icon className="w-8 h-8 text-[var(--foreground)]/20 group-hover:text-primary transition-colors" strokeWidth={1} />
                </div>

                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-6 uppercase tracking-tight">
                  {service.title}
                </h3>

                <p className="text-[var(--foreground)]/60 max-w-sm font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
