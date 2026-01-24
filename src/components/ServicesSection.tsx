import { Camera, Film, Users, Utensils } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'تصوير منتجات باحترافية',
    description: 'جلسات تصوير مخصصة بإضاءة مدروسة وتفاصيل واضحة تخلي منتجك يبرز ويجذب العملاء فوراً.',
    tagline: 'Professional product photography that sells.',
  },
  {
    icon: Utensils,
    title: 'تصوير مطاعم وكافيهات',
    description: 'نلتقط أجواء المكان والأطباق بجودة عالية عشان تعرض تجربة زبونك الأصلية على السوشيال ميديا.',
    tagline: 'Food & lifestyle photography for hospitality.',
  },
  {
    icon: Film,
    title: 'مونتاج Reels وShorts',
    description: 'نحوّل لقطاتك لفيديوهات قصيرة سريعة الإيقاع جاهزة للنشر على إنستغرام وتيك توك.',
    tagline: 'Scroll-stopping short-form video editing.',
  },
  {
    icon: Users,
    title: 'إدارة السوشيال ميديا',
    description: 'تخطيط محتوى، نشر منتظم، وتفاعل مع الجمهور - كل شي بدلك عشان تركز على شغلك.',
    tagline: 'Complete social media management.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">خدماتنا</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            حلول بصرية متكاملة تناسب كل أحجام المشاريع والميزانيات
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer border border-border/50 hover:border-primary/50 rounded-xl p-8 hover:bg-secondary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 text-right leading-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-right">
                {service.description}
              </p>
              <p className="text-primary font-medium text-sm">
                {service.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
