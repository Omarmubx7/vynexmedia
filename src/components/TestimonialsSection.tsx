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
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">عملاء وثقوا فينا</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            آراء حقيقية من أصحاب مشاريع اشتغلنا معهم
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-3xl mx-auto">
          {clientLogos.map((logo, i) => (
            <div key={i} className="w-20 h-20 md:w-24 md:h-24 bg-card rounded-xl overflow-hidden flex items-center justify-center border border-border/50 hover:border-primary/30 transition-colors">
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
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-primary/20">
                <Quote size={48} />
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-right relative z-10 text-sm md:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold">
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
