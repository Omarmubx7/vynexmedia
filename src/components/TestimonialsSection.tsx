import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد المصري',
    role: 'صاحب مطعم',
    content: 'شغل احترافي جداً! الصور والفيديوهات رفعت تفاعلنا على الإنستغرام بشكل ملحوظ. شكراً Vynex Media!',
  },
  {
    name: 'سارة العمري',
    role: 'صاحبة متجر أونلاين',
    content: 'من أول جلسة تصوير حسيت بالفرق. المنتجات صارت تبين بشكل أفضل والمبيعات زادت.',
  },
  {
    name: 'خالد الحسن',
    role: 'مدير كافيه',
    content: 'الفريق فاهم شو يبغى الجمهور. الـ Reels اللي سووها لنا حققت آلاف المشاهدات.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">آراء عملائنا</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What our clients say
          </p>
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
              <p className="text-foreground leading-relaxed mb-6 text-right relative z-10">
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
