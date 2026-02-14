import { Instagram } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Luxe Gastronomy',
    category: 'Product Narrative',
    image: 'https://images.unsplash.com/photo-1550966842-30cae8406480?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Digital Identity',
    category: 'Gastronomy Content',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Cinematic Flow',
    category: 'Visual Editing',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Brand Resonance',
    category: 'Identity Support',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-[120px] md:py-[160px] bg-transparent">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div>
            <h2 className="section-title">
              Collaborations.
            </h2>
          </div>
          <div>
            <a
              href="https://instagram.com/thegloriousinc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow group"
            >
              Explore Archive <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden bg-[var(--foreground)]/5 relative mb-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
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
