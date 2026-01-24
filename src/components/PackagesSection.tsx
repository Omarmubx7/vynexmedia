import { Zap, Coffee, Calendar } from 'lucide-react';

const packages = [
  {
    icon: Zap,
    name: 'باقة محتوى سريعة',
    description: '5–7 صور + 2 Reels قصيرة',
    features: ['تصوير منتجات أو أطعمة', 'مونتاج فيديوهات قصيرة', 'تسليم خلال 5 أيام'],
    highlight: false,
  },
  {
    icon: Coffee,
    name: 'باقة مطاعم وكافيهات',
    description: 'جلسة تصوير كاملة للمكان + 10 صور + 4 Reels',
    features: ['تصوير الأجواء والأطباق', '10 صور معدلة', '4 فيديوهات Reels', 'تغطية شاملة للمكان'],
    highlight: true,
  },
  {
    icon: Calendar,
    name: 'باقة إدارة السوشال',
    description: 'محتوى شهري + إدارة حسابات التواصل',
    features: ['تخطيط محتوى شهري', 'نشر وجدولة', 'ردود على التعليقات', 'تقارير أداء'],
    highlight: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">باقات مرنة تناسبك</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible packages tailored to your needs
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-2 ${
                pkg.highlight
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary'
                  : 'glass-card'
              }`}
            >
              {/* Popular Badge */}
              {pkg.highlight && (
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  الأكثر طلباً
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                pkg.highlight ? 'bg-primary/30' : 'bg-primary/10'
              }`}>
                <pkg.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 text-right">
                {pkg.name}
              </h3>
              <p className="text-primary font-medium mb-6 text-right">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground text-right">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${
                  pkg.highlight
                    ? 'btn-primary'
                    : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                }`}
              >
                اطلب عرض سعر
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          الأسعار تختلف حسب حجم المشروع، تواصل معنا نعطيك عرض مخصص خلال 24 ساعة.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
