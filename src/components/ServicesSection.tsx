import { Camera, Film, Users, Utensils } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'تصوير منتجات باحترافية عالية',
    description: 'جلسات تصوير مخصصة لمنتجاتك بتفاصيل واضحة وإضاءة مدروسة تخلي العميل يحس بالمنتج قبل ما يشتريه.',
    tagline: 'High-end product photography for e-commerce and brands.',
  },
  {
    icon: Utensils,
    title: 'جلسات تصوير للمطاعم والكافيهات',
    description: 'من أجواء المكان لتفاصيل الأطباق، نصوّر تجربة الزبون كاملة عشان نعرض مطعمك بأفضل صورة على السوشال ميديا.',
    tagline: 'Lifestyle and food shoots for cafés and restaurants.',
  },
  {
    icon: Film,
    title: 'مونتاج فيديوهات Reels و Short Form',
    description: 'نحوّل لقطاتك الخام لفيديوهات قصيرة، سريعة الإيقاع، جاهزة للنشر على Instagram, TikTok, وYouTube Shorts.',
    tagline: 'Short-form video editing that keeps viewers watching.',
  },
  {
    icon: Users,
    title: 'إدارة صفحات سوشال ميديا كاملة',
    description: 'من التخطيط للمحتوى لحد النشر والردود، نهتم بحضورك الرقمي عشان تركز إنت على شغلك.',
    tagline: 'Full social media management for your brand.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">خدماتنا</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم حلول متكاملة لصناعة المحتوى البصري تناسب كل أنواع المشاريع
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-right">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-right">
                {service.description}
              </p>
              <p className="text-primary/80 text-sm italic">
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
