import { Heart, Clock, Wallet } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'محتوى مصمم لجمهورك',
    description: 'ندرس طبيعة الجمهور والمنصات قبل التصوير عشان كل صورة وفيديو يوصل الرسالة الصح.',
  },
  {
    icon: Wallet,
    title: 'جودة سينمائية بأسعار تناسب المشاريع الصغيرة',
    description: 'خدماتنا موجهة لأصحاب البزنس الناشئ، نعطيك جودة عالية بميزانية معقولة.',
  },
  {
    icon: Clock,
    title: 'تسليم سريع وجدول واضح',
    description: 'نلتزم بمواعيد التسليم وخطة عمل واضحة من اليوم الأول.',
  },
];

// Variable that can be updated later
const VIDEOS_PRODUCED = 150;

const WhyUsSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">ليش تختار Vynex Media؟</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Why Choose Vynex Media?
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl md:text-6xl font-bold gradient-text">{VIDEOS_PRODUCED}+</span>
          </div>
          <p className="text-lg md:text-xl text-foreground">
            فيديو قصير تم إنتاجه لمطاعم، كافيهات ومتاجر أونلاين في الأردن
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            Short-form videos produced for restaurants, cafés and online stores in Jordan
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
