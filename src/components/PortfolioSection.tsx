import { ArrowRight } from 'lucide-react';
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
    <section id="portfolio" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.2] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-black uppercase italic leading-[0.8] mb-0">
                Selected <br /> <span className="text-primary not-italic">Works.</span>
              </h2>
            </div>
            <a
              href="https://instagram.com/vynexmedia.jo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold tracking-tighter text-black group flex items-center gap-4 transition-all"
            >
              See all projects on Instagram
              <span className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <ArrowRight size={20} />
              </span>
            </a>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#F7F7F7] overflow-hidden rounded-sm"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.brand}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-col justify-end">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary mb-3 block uppercase">
                    {item.type}
                  </span>
                  <h4 className="text-3xl font-bold tracking-tighter text-white uppercase mb-4 leading-none">
                    {item.brand}
                  </h4>
                  <p className="text-white/60 text-lg leading-tight font-medium italic">
                    {item.result}
                  </p>
                </div>

                {/* Label (Visible when not hovred optionally or just always rely on hover for high-end feel?) Let's keep a subtle label */}
                <div className="p-8 group-hover:opacity-0 transition-opacity duration-500 absolute top-0 left-0">
                  <h4 className="text-lg font-bold tracking-tighter text-black/40 uppercase bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full border border-black/5">
                    {item.brand}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
