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
    <section id="services" className="py-[72px] md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-title text-foreground mb-3">خدماتنا</h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            كل خدمة مصممة عشان تخدم نوع معين من المشاريع — اختار اللي يناسبك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 group cursor-pointer hover:border-primary/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 text-right">
                {service.title}
              </h3>

              {/* Audience */}
              <div className="flex items-start gap-2 mb-2">
                <ChevronLeft className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">لمين: </span>
                  {service.audience}
                </p>
              </div>

              {/* Result */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-right">
                {service.result}
              </p>

              {/* Package */}
              {service.package && (
                <div className="bg-primary/5 border border-primary/15 rounded-full px-4 py-2 text-right inline-block">
                  <p className="text-primary font-semibold text-xs">
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
