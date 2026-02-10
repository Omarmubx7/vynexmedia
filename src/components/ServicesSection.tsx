import { Camera, Utensils, Film, Users, ChevronLeft } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'تصوير منتجات',
    audience: 'متاجر أونلاين، براندات ناشئة، مشاريع منزلية',
    result: 'صور مرتبة وواضحة تخلي العميل يفهم المنتج من أول نظرة.',
    package: 'باقة ستارت أب: 10 صور منتجات + 1 ريل قصير',
  },
  {
    icon: Utensils,
    title: 'تصوير مطاعم وكافيهات',
    audience: 'مطاعم، كافيهات، وأي مكان يقدم تجربة حلوة',
    result: 'صور وفيديوهات تخلي الناس تقول: لازم أروح أجرب.',
    package: 'تغطية 2–3 أطباق مميزة + ريل أجواء المكان',
  },
  {
    icon: Film,
    title: 'مونتاج ريلز وتيك توك',
    audience: 'أصحاب مشاريع عندهم فيديو خام أو محتوى يحتاج ترتيب',
    result: 'ريلز سريعة، جذابة، جاهزة للنشر مع موسيقى وترتيب نصوص.',
    package: null,
  },
  {
    icon: Users,
    title: 'إدارة محتوى سوشيال ميديا',
    audience: 'براندات تحتاج تخطيط محتوى، تقويم شهري، وجدولة منشورات',
    result: 'محتوى منتظم ومنظم يخلي حسابك فعّال بدون ما تتعب.',
    package: 'خطة محتوى شهرية + 8 تصاميم + 4 ريلز',
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
            كل خدمة مصممة عشان تخدم نوع معين من المشاريع — اختار اللي يناسبك
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

              {/* Audience */}
              <div className="flex items-start gap-2 mb-3">
                <ChevronLeft className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">لمين: </span>
                  {service.audience}
                </p>
              </div>

              {/* Result */}
              <p className="text-muted-foreground leading-relaxed mb-4 text-right">
                {service.result}
              </p>

              {/* Package */}
              {service.package && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 text-right">
                  <p className="text-primary font-semibold text-sm">
                    📦 {service.package}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
