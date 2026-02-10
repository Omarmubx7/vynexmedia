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
    <section className="py-[72px] md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-title text-foreground mb-3">ليش تختارنا؟</h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            وعود ملموسة مش كلام عام
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {promises.map((promise, index) => (
            <div key={index} className="glass-card p-6 text-center group">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 group-hover:scale-105 transition-all">
                <promise.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {promise.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
