import portfolioFood1 from '@/assets/portfolio-food-1.jpg';
import portfolioProduct1 from '@/assets/portfolio-product-1.jpg';
import portfolioCafe1 from '@/assets/portfolio-cafe-1.jpg';
import portfolioProduct2 from '@/assets/portfolio-product-2.jpg';
import portfolioFood2 from '@/assets/portfolio-food-2.jpg';

const portfolioItems = [
  { image: portfolioFood1, category: 'تصوير أطعمة', label: 'Food Photography' },
  { image: portfolioProduct1, category: 'تصوير منتجات', label: 'Product Shoot' },
  { image: portfolioCafe1, category: 'تصوير كافيهات', label: 'Café Session' },
  { image: portfolioProduct2, category: 'تصوير منتجات', label: 'Product Flatlay' },
  { image: portfolioFood2, category: 'تصوير مطاعم', label: 'Restaurant' },
  { image: portfolioFood1, category: 'Reels Edit', label: 'Short Form Video' },
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item group"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary text-sm font-medium mb-1">
                  {item.category}
                </span>
                <span className="text-foreground font-bold text-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
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
