import { Quote } from 'lucide-react';
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';

const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

const testimonials = [
  {
    name: 'أحمد',
    role: 'صاحب مطعم',
    content: 'الصورة خلت المنيو يبين أرتب بكثير، والناس صارت تطلب الأطباق اللي ركزنا عليها بالتصوير. أحسن قرار اتخذناه.',
  },
  {
    name: 'سارة',
    role: 'صاحبة متجر أونلاين',
    content: 'من أول جلسة تصوير المنتجات صارت تبين باحترافية على الموقع. المبيعات زادت والعملاء صاروا يثقوا أكثر بالبراند.',
  },
  {
    name: 'خالد',
    role: 'مدير كافيه',
    content: 'الريلز اللي سووها لنا حققت آلاف المشاهدات وصار الناس يجوا المكان ويقولوا شفناكم على إنستغرام.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-[72px] md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-title text-foreground mb-3">عملاء وثقوا فينا</h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            آراء حقيقية من أصحاب مشاريع اشتغلنا معهم
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-5 mb-14 max-w-2xl mx-auto">
          {clientLogos.map((logo, i) => (
            <div key={i} className="w-16 h-16 md:w-20 md:h-20 bg-background rounded-xl overflow-hidden flex items-center justify-center border border-border hover:border-primary/30 transition-colors">
              <img
                src={logo}
                alt={`عميل ${i + 1}`}
                className="object-contain w-full h-full p-2"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-5 left-5 text-primary/15">
                <Quote size={36} />
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-5 text-right relative z-10 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 justify-end">
                <div className="text-right">
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
