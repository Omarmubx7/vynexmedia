import portfolioFood1 from '@/assets/portfolio-food-1.jpg';
import portfolioProduct1 from '@/assets/portfolio-product-1.jpg';
import portfolioCafe1 from '@/assets/portfolio-cafe-1.jpg';
import portfolioProduct2 from '@/assets/portfolio-product-2.jpg';
import portfolioFood2 from '@/assets/portfolio-food-2.jpg';

const portfolioReels = [
  { embedUrl: 'https://www.instagram.com/reel/DTvXwejDTuF/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DTPymKUDO-o/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DTIgFSwDCwf/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DTDFT-RjGaI/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DSpalaCjCnO/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DSYGlmYjK0d/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DSR6pYsDOBq/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DRMuOIJjIrK/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DQqzBsIDIRs/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DQY_bhfDAHW/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DQCE8MtjNcH/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DP1IarYjJvn/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DPruinWjD66/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DPjEnY1DN7z/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DPbcKbsjLzq/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DOdQ9BbDBxk/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DPEW4tTjECd/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DPGgBLWjN_9/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DPL9KFajORn/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DPY1piijExy/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DMFqk13sGG1/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DMgckd1MQWq/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DMk50UCNQvr/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DMvIwqxsroZ/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DNBogfvsm5_/embed', category: 'Reels Edit', label: 'Short Form Video' },

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
