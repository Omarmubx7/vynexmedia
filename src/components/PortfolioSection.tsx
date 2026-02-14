import { Instagram } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Project Alpha',
    category: 'Product Narrative',
    video: 'https://player.vimeo.com/external/494252666.sd.mp4?s=721e25e94f1c7d6e6b4e7a83d3e6d8a3d3d3d3d3&profile_id=165',
  },
  {
    title: 'Project Beta',
    category: 'Gastronomy Content',
    video: 'https://player.vimeo.com/external/494252666.sd.mp4?s=721e25e94f1c7d6e6b4e7a83d3e6d8a3d3d3d3d3&profile_id=165',
  },
  {
    title: 'Project Gamma',
    category: 'Visual Editing',
    video: 'https://player.vimeo.com/external/494252666.sd.mp4?s=721e25e94f1c7d6e6b4e7a83d3e6d8a3d3d3d3d3&profile_id=165',
  },
  {
    title: 'Project Delta',
    category: 'Identity Support',
    video: 'https://player.vimeo.com/external/494252666.sd.mp4?s=721e25e94f1c7d6e6b4e7a83d3e6d8a3d3d3d3d3&profile_id=165',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-[120px] md:py-[160px] bg-black">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div>
            <h2 className="section-title">
              Selected<br />
              Works.
            </h2>
          </div>
          <div>
            <a
              href="https://instagram.com/thegloriousinc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow group"
            >
              Explore Instagram <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden bg-[var(--foreground)]/5 relative mb-8">
                <video
                  src={item.video}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-[var(--foreground)]/40 text-[14px] font-medium uppercase tracking-[0.2em]">{item.category}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary text-2xl font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
