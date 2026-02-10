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
  { image: logo1, brand: 'مطعم الديوان', type: 'تصوير مطاعم', result: 'زادت التفاعلات 40% خلال شهر' },
  { image: logo2, brand: 'متجر Bloom', type: 'تصوير منتجات', result: 'نفذت المنتجات خلال أسبوع' },
  { image: logo3, brand: 'كافيه Roast', type: 'ريلز', result: 'أعلى ريل حقق 15K مشاهدة' },
  { image: logo4, brand: 'براند Noor', type: 'تصوير منتجات', result: 'زادت المبيعات 30% بعد التصوير' },
  { image: logo5, brand: 'مطعم Saffron', type: 'تصوير مطاعم', result: 'تغطية كاملة لإطلاق المنيو الجديد' },
  { image: logo6, brand: 'متجر Handmade Jo', type: 'تصوير منتجات', result: '25 صورة منتج + 3 ريلز' },
  { image: logo7, brand: 'كافيه The Grind', type: 'ريلز + تصوير', result: 'تفاعل الحساب تضاعف 3 مرات' },
  { image: logo8, brand: 'براند Olive', type: 'تصوير منتجات', result: 'تصوير كامل لمجموعة الصيف' },
  { image: logo9, brand: 'مطعم Layali', type: 'تصوير مطاعم', result: 'أفضل شهر مبيعات بعد التصوير' },
  { image: logo10, brand: 'متجر Glow', type: 'تصوير منتجات', result: 'تصوير 50 منتج + ريلز' },
  { image: logo11, brand: 'كافيه Bean', type: 'ريلز', result: 'ريل أجواء المكان حقق 20K' },
  { image: logo12, brand: 'براند Urban', type: 'إدارة محتوى', result: 'محتوى 3 أشهر كاملة' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-[72px] md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-title text-foreground mb-3">شوية من شغلنا</h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            مشاريع اشتغلنا عليها مع براندات ومطاعم في عمّان
          </p>
        </div>

        {/* Portfolio Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href="https://instagram.com/vynexmedia.jo"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-foreground font-semibold text-sm">{item.brand}</h4>
                  <span className="text-xs text-secondary font-medium bg-secondary/10 px-2 py-0.5 rounded-full">{item.type}</span>
                </div>
                <p className="text-muted-foreground text-xs">{item.result}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/vynexmedia.jo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
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
