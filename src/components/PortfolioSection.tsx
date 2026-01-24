import portfolioFood1 from '@/assets/portfolio-food-1.jpg';
import portfolioProduct1 from '@/assets/portfolio-product-1.jpg';
import portfolioCafe1 from '@/assets/portfolio-cafe-1.jpg';
import portfolioProduct2 from '@/assets/portfolio-product-2.jpg';
import portfolioFood2 from '@/assets/portfolio-food-2.jpg';

const portfolioReels = [
  { 
    embedUrl: 'https://www.instagram.com/reel/DQY_bhfDAHW/embed',
    category: 'Reels Edit',
    label: 'Short Form Video'
  },
  { 
    embedUrl: 'https://www.instagram.com/reel/DOdQ9BbDBxk/embed',
    category: 'Reels Edit',
    label: 'Short Form Video'
  },
  { 
    embedUrl: 'https://www.instagram.com/reel/DPbcKbsjLzq/embed',
    category: 'Reels Edit',
    label: 'Short Form Video'
  },
  { 
    embedUrl: 'https://www.instagram.com/reel/DRhQ1uNCDGz/embed',
    category: 'Reels Edit',
    label: 'Short Form Video'
  },
  { 
    embedUrl: 'https://www.instagram.com/reel/DRUgK4vCCoG/embed',
    category: 'Reels Edit',
    label: 'Short Form Video'
  },
  { 
    embedUrl: 'https://www.instagram.com/reel/DTujn8ljYO3/embed',
    category: 'Reels Edit',
    label: 'Short Form Video'
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">شوية من شغلنا</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse of our work
          </p>
        </div>

        {/* Reels Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Reels & Short Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioReels.map((reel, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden bg-card border border-border"
              >
                <iframe
                  src={reel.embedUrl}
                  className="w-full aspect-[9/16] max-h-[500px]"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allowFullScreen={true}
                  title={`Instagram Reel ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg mb-6">
            حاب تشوف المزيد؟ راسلنا نرسل لك آخر الشغل على الواتساب أو الإنستغرام.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
