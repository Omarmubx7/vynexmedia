import { MessageSquare, Package, Image, RefreshCw } from 'lucide-react';

const promises = [
  {
    icon: MessageSquare,
    title: 'استشارة مجانية أولاً',
    description: 'جلسة استشارة مجانية قبل أي شغل عشان نفهم بزنسك ونعرف شو تحتاج بالظبط.',
  },
  {
    icon: Package,
    title: 'باكدجات واضحة',
    description: 'باكدجات واضحة وأسعار تناسب المشاريع الصغيرة والمتوسطة — بدون مفاجآت.',
  },
  {
    icon: Image,
    title: 'جاهز للنشر',
    description: 'نسلّمك الصور والفيديوهات جاهزة للنشر على إنستغرام وتيك توك بالمقاسات الصحيحة.',
  },
  {
    icon: RefreshCw,
    title: 'تعديلات لحد ما ترضى',
    description: 'نقدّم تعديلات لغاية ما توصل للنتيجة اللي في بالك (ضمن عدد منطقي من المرات).',
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 md:py-40 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Dots for dark mode feel */}
      <div className="absolute inset-0 bg-dots opacity-[0.03] invert z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 bg-white/10 text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
                The Vynex Promise
              </span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white uppercase italic leading-[0.9]">
                Why <br /> <span className="text-primary not-italic">Vynex?</span>
              </h2>
            </div>
            <p className="text-lg text-white/60 max-w-sm leading-relaxed mb-4">
              نلتزم بوعود ملموسة ونتائج حقيقية تخلي براندك يبرز في السوق الأردني.
            </p>
          </div>

          {/* Promises Grid */}
          <div className="grid md:grid-cols-2 gap-[1px] bg-white/5 border border-white/5 overflow-hidden rounded-sm">
            {promises.map((promise, index) => (
              <div key={index} className="p-12 md:p-20 bg-[#050505] group transition-all duration-700 hover:bg-[#0a0a0a]">
                <div className="mb-12 transition-transform duration-500 group-hover:-translate-y-2">
                  <promise.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  {promise.title}
                </h3>
                <p className="text-white/40 text-lg leading-relaxed max-w-sm">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
