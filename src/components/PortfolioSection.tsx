import { ArrowRight, Instagram } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';
// Premium placeholders for visual work
const logo1 = 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop'; // Lebanese Mezze
const logo2 = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop'; // Minimalist Skincare
const logo3 = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop'; // Industrial Coffee
const logo4 = 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=1200&auto=format&fit=crop'; // Branding/Stationery
const logo5 = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'; // Modern Fusion Dish
const logo6 = 'https://images.unsplash.com/photo-1610433226490-482f3fb874e1?q=80&w=1200&auto=format&fit=crop'; // Artisanal Pottery

const portfolioItems = [
  { image: logo1, brand: 'DIWAN RESTAURANT', type: 'Food Content', result: '+40% Reach' },
  { image: logo2, brand: 'BLOOM STORE', type: 'Product Photography', result: 'Sold Out' },
  { image: logo3, brand: 'ROAST CAFE', type: 'Visual Reels', result: '15K Views' },
  { image: logo4, brand: 'NOOR BRAND', type: 'Branding', result: '+30% Sales' },
  { image: logo5, brand: 'SAFFRON DINER', type: 'Menu Launch', result: 'Global Look' },
  { image: logo6, brand: 'HANDMADE JO', type: 'Product Styling', result: 'Premium Tier' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-8xl font-black tracking-extratight text-black uppercase italic leading-[0.8] mb-0">
                Selected <br /> <span className="text-primary not-italic text-outline text-black">Works.</span>
              </h2>
            </div>
            <p className="text-xl font-bold tracking-extratight text-black/40 max-w-sm leading-relaxed mb-4 uppercase italic">
              Excellence in every frame. We craft visual legacies for Amman's most ambitious projects.
            </p>
          </div>

          {/* Border Grid Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black/5 gap-[1px] border border-black/5 overflow-hidden">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white overflow-hidden aspect-[4/5]"
              >
                {/* Image Layer */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                  <img
                    src={item.image}
                    alt={`${item.brand} - ${item.type} project by Vynex Media`}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-10 z-20 pointer-events-none">
                  <div className="overflow-hidden mb-2">
                    <p className="text-[10px] font-bold tracking-[0.4em] text-white/60 uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {item.type}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-3xl font-black tracking-extratight text-white uppercase group-hover:text-primary transition-colors duration-500 translate-y-full group-hover:translate-y-0 transition-transform delay-75">
                      {item.brand}
                    </h4>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-10 right-10 z-20 overflow-hidden">
                  <div className="px-4 py-1.5 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full translate-x-full group-hover:translate-x-0 transition-transform duration-700">
                    <span className="text-[10px] font-black text-white tracking-widest">{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Magnetic Social CTA */}
          <div className="mt-32 flex flex-col items-center">
            <MagneticButton strength={40}>
              <a
                href="https://instagram.com/vynexmedia.jo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-10"
              >
                <div className="w-24 h-24 rounded-full border border-black/5 group-hover:bg-black group-hover:border-black transition-all duration-700 flex items-center justify-center relative">
                  <ArrowRight className="w-8 h-8 group-hover:text-white transition-colors absolute group-hover:translate-x-4 opacity-0 group-hover:opacity-100 duration-500" />
                  <Instagram className="w-8 h-8 group-hover:text-white transition-colors group-hover:-translate-x-4 duration-500" />
                </div>
                <div className="text-center">
                  <h4 className="text-[11px] font-bold tracking-[0.5em] uppercase text-black/20 mb-3 group-hover:text-primary transition-colors">Visual Archive</h4>
                  <p className="text-4xl font-black tracking-extratight italic uppercase">Portfolio on Instagram</p>
                </div>
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
