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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">ليش تختارنا؟</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            وعود ملموسة مش كلام عام
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {promises.map((promise, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <promise.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
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
