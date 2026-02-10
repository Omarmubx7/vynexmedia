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

const portfolioItems = [
  { image: logo1, brand: 'مطعم الديوان', result: 'زادت التفاعلات 40% خلال شهر' },
  { image: logo2, brand: 'متجر Bloom', result: 'نفذت المنتجات خلال أسبوع' },
  { image: logo3, brand: 'كافيه Roast', result: 'أعلى ريل حقق 15K مشاهدة' },
  { image: logo4, brand: 'براند Noor', result: 'زادت المبيعات 30% بعد التصوير' },
  { image: logo5, brand: 'مطعم Saffron', result: 'تغطية كاملة لإطلاق المنيو الجديد' },
  { image: logo6, brand: 'متجر Handmade Jo', result: '25 صورة منتج + 3 ريلز' },
  { image: logo7, brand: 'كافيه The Grind', result: 'تفاعل الحساب تضاعف 3 مرات' },
  { image: logo8, brand: 'براند Olive', result: 'تصوير كامل لمجموعة الصيف' },
  { image: logo9, brand: 'مطعم Layali', result: 'أفضل شهر مبيعات بعد التصوير' },
  { image: logo10, brand: 'متجر Glow', result: 'تصوير 50 منتج + ريلز' },
  { image: logo11, brand: 'كافيه Bean', result: 'ريل أجواء المكان حقق 20K' },
  { image: logo12, brand: 'براند Urban', result: 'محتوى 3 أشهر كاملة' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">شوية من شغلنا</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مشاريع اشتغلنا عليها مع براندات ومطاعم في عمّان
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-sm mb-1">{item.brand}</h4>
                <p className="text-white/80 text-xs">{item.result}</p>
              </div>

              {/* Always visible label (mobile-friendly) */}
              <div className="p-3 bg-card">
                <h4 className="text-foreground font-bold text-sm">{item.brand}</h4>
                <p className="text-muted-foreground text-xs">{item.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/vynexmedia.jo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            شاهد كل أعمالنا على إنستغرام
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
