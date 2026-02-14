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
    <section id="services" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-24 flex flex-col items-center text-center">
            <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
              What We Do
            </span>
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-black uppercase italic leading-[0.8] mb-12">
              Services <br /> <span className="text-primary not-italic">Offerings.</span>
            </h2>
            <p className="text-lg text-black/40 max-w-xl leading-relaxed">
              حلول بصرية متكاملة مصممة عشان ترفع من قيمة براندك وتوصل رسالتك للجمهور الصح بطريقة احترافية.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-[1px] bg-black/5 border border-black/5 rounded-sm overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-12 md:p-24 bg-white group hover:bg-black transition-all duration-700 relative overflow-hidden"
              >
                {/* Number Background */}
                <div className="absolute -bottom-10 -right-10 text-[200px] font-bold text-black/[0.02] group-hover:text-white/[0.03] transition-colors leading-none pointer-events-none tracking-tighter">
                  0{index + 1}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-12 group-hover:scale-110 transition-transform duration-700 origin-left">
                    <service.icon className="w-12 h-12 text-primary group-hover:text-white transition-colors" strokeWidth={1} />
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tighter group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-black/40 text-lg group-hover:text-white/40 transition-colors mb-8 leading-relaxed">
                    {service.result}
                  </p>

                  <div className="mt-auto pt-8 border-t border-black/5 group-hover:border-white/10 transition-colors">
                    <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-black group-hover:text-white mb-2">Ideal For</p>
                    <p className="text-black/60 group-hover:text-white/60 transition-colors">
                      {service.audience}
                    </p>
                  </div>

                  {service.package && (
                    <div className="mt-8">
                      <span className="inline-block py-2 px-6 border border-primary text-primary group-hover:bg-primary group-hover:text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-500">
                        {service.package}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
