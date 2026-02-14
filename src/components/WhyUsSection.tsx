import { MessageSquare, Package, Image, RefreshCw, ArrowUpRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const promises = [
  {
    icon: MessageSquare,
    title: 'Advisory Consultation',
    description: 'Bespoke strategy sessions to align our creative lens with your business objectives.',
  },
  {
    icon: Package,
    title: 'Transparent Curation',
    description: 'Flat-fee boutique packages tailored for ambitious startups and established brands.',
  },
  {
    icon: Image,
    title: 'Boutique Assets',
    description: 'High-fidelity visuals, precision-edited and optimized for multi-channel dominance.',
  },
  {
    icon: RefreshCw,
    title: 'Refinement Cycles',
    description: 'Iterative design process until the final output mirrors your conceptual vision.',
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 md:py-48 bg-[#050505] text-white relative overflow-hidden">
      {/* Visual Layers */}
      <div className="absolute inset-0 bg-grid opacity-[0.05] invert z-0" />
      <div className="absolute inset-0 bg-dots opacity-[0.02] invert z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
            <div className="max-w-3xl">
              <span className="inline-block py-1.5 px-4 bg-white/10 text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
                The Standard
              </span>
              <h2 className="text-5xl md:text-9xl font-black tracking-extratight text-white uppercase italic leading-[0.8]">
                Why <br /> <span className="text-primary not-italic text-outline text-white">Vynex?</span>
              </h2>
            </div>
            <p className="text-xl font-bold tracking-extratight text-white/40 max-w-sm leading-relaxed mb-4 uppercase italic">
              We uphold a standard of excellence that distinguishes your brand in the Jordanian landscape.
            </p>
          </div>

          {/* Border Grid Promises */}
          <div className="grid md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 overflow-hidden rounded-sm">
            {promises.map((promise, index) => (
              <div key={index} className="p-16 md:p-24 bg-[#050505] group transition-all duration-700 hover:bg-[#0a0a0a] relative overflow-hidden">
                {/* Number Overlay */}
                <div className="absolute top-10 right-10 text-[100px] font-black text-white/[0.02] group-hover:text-primary/10 transition-colors leading-none pointer-events-none tracking-extratight text-outline">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="mb-16">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                      <promise.icon className="w-8 h-8 text-white group-hover:text-white transition-colors" strokeWidth={1} />
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-8 mb-8">
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-extratight uppercase italic group-hover:text-primary transition-colors">
                      {promise.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-white/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <p className="text-white/40 text-xl leading-relaxed max-w-sm font-bold tracking-tight">
                    {promise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Magnetic CTA for Bottom */}
          <div className="mt-32 flex justify-center">
            <MagneticButton strength={30}>
              <a href="#contact" className="group px-16 py-6 bg-white text-black text-[12px] uppercase tracking-[0.4em] font-black hover:bg-primary hover:text-white transition-all duration-700 rounded-sm italic">
                Join our legacy
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
