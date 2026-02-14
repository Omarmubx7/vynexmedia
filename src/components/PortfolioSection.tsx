import { ArrowRight, Instagram } from 'lucide-react';
import { useRef } from 'react';
import MagneticButton from './ui/MagneticButton';

const portfolioItems = [
  {
    video: 'https://player.vimeo.com/external/517092013.sd.mp4?s=d03e9e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e&profile_id=165',
    brand: 'DIWAN RESTAURANT',
    type: 'Gastronomy Reel',
    result: '40K+ REVEAL'
  },
  {
    video: 'https://player.vimeo.com/external/494252666.sd.mp4?s=721e25e94f1c7d6e6b4e7a83d3e6d8a3d3d3d3d3&profile_id=165',
    brand: 'BLOOM STORE',
    type: 'Product Motion',
    result: 'PREMIUM TIER'
  },
  {
    video: 'https://player.vimeo.com/external/371433846.sd.mp4?s=23cd00b6fbca5d1e8a2a89c9c7f0b5d9&profile_id=165',
    brand: 'ROAST CAFE',
    type: 'Vibe Reel',
    result: 'TRENDING'
  },
  {
    video: 'https://player.vimeo.com/external/494252666.sd.mp4?s=721e25e94f1c7d6e6b4e7a83d3e6d8a3d3d3d3d3&profile_id=165',
    brand: 'NOOR BRAND',
    type: 'Brand Identity',
    result: 'ARCHITECTURAL'
  },
  {
    video: 'https://player.vimeo.com/external/517092013.sd.mp4?s=d03e9e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e&profile_id=165',
    brand: 'SAFFRON DINER',
    type: 'Chef Dialogue',
    result: 'EDITORIAL'
  },
  {
    video: 'https://player.vimeo.com/external/371433846.sd.mp4?s=23cd00b6fbca5d1e8a2a89c9c7f0b5d9&profile_id=165',
    brand: 'HANDMADE JO',
    type: 'Artisan Story',
    result: 'PURE DNA'
  },
];

const PortfolioItem = ({ item }: { item: typeof portfolioItems[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Video play failed:', e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative bg-white overflow-hidden aspect-[4/5] cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700"
        >
          <source src={item.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

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

      <div className="absolute top-10 right-10 z-20 overflow-hidden">
        <div className="px-4 py-1.5 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full translate-x-full group-hover:translate-x-0 transition-transform duration-700">
          <span className="text-[10px] font-black text-white tracking-widest">{item.result}</span>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
                Archive
              </span>
              <h2 className="text-4xl md:text-8xl font-black tracking-extratight text-black uppercase italic leading-[0.8] mb-0 animate-reveal">
                Motion <br /> <span className="text-primary not-italic text-outline text-black">Reels.</span>
              </h2>
            </div>
            <p className="text-xl font-bold tracking-extratight text-black/40 max-w-sm leading-relaxed mb-4 uppercase italic">
              Selected campaigns and content with measurable marketing impact.
            </p>
            <div className="flex gap-2 opacity-10 mb-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-black" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black/5 gap-[1px] border border-black/5 overflow-hidden animate-fade-up">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </div>

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
