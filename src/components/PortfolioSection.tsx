

const portfolioReels = [
  { embedUrl: 'https://www.instagram.com/reel/DTvXwejDTuF/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DTPymKUDO-o/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DTIgFSwDCwf/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DTDFT-RjGaI/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DSpalaCjCnO/embed', category: 'Reels Edit', label: 'Short Form Video' },
  { embedUrl: 'https://www.instagram.com/reel/DSYGlmYjK0d/embed', category: 'Reels Edit', label: 'Short Form Video' },
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
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowTransparency={true}
                  allowFullScreen={true}
                  title={`Instagram Reel ${index + 1}`}
                  aria-label={`Instagram Reel ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';
import logo7 from '../assets/7.png';
import logo8 from '../assets/8.png';
import logo9 from '../assets/9.png';
import logo10 from '../assets/10.png';
import logo11 from '../assets/11.png';
import logo12 from '../assets/12.png';
import logo13 from '../assets/13.png';
import logo14 from '../assets/14.png';
import logo15 from '../assets/15.png';

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15
];
        {/* Phone Grid Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">عملاء وثقوا فينا</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {clientLogos.map((logo, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden flex items-center justify-center aspect-square border border-border">
                <img
                  src={logo}
                  alt={`Client logo ${i + 1}`}
                  className="object-contain w-full h-full p-2"
                  loading="lazy"
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
