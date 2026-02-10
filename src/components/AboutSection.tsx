import { Heart, Camera, Handshake } from 'lucide-react';

const values = [
  {
    icon: Heart,
    text: 'فريق صغير وقريب من العميل، مو وكالة ضخمة',
  },
  {
    icon: Camera,
    text: 'نركز على إنتاج بصري يخدم البزنس مش بس يطلع حلو',
  },
  {
    icon: Handshake,
    text: 'نشتغل معك خطوة بخطوة من الفكرة لآخر فوتو وريّل',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-[72px] md:py-24 relative">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-right">
            <h2 className="section-title text-foreground mb-6 animated-underline inline-block">
              مين إحنا؟
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              بدأنا Vynex Media من حب حقيقي للتصوير، خصوصاً تصوير الأكل والمنتجات. كنا نشوف أصحاب مشاريع صغيرة ومطاعم عندهم شغل حلو بس ما يعرفوا يوصلوه للناس بالطريقة الصح.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              فقررنا نبني استوديو صغير في عمّان متخصص بالإنتاج البصري للبراندات الناشئة والمتاجر والمطاعم. إحنا مو وكالة ضخمة — إحنا فريق صغير يحب الشغل الإبداعي ويهتم بكل تفصيلة.
            </p>

            <p className="text-base text-secondary font-semibold leading-relaxed mb-8">
              نشتغل معك خطوة بخطوة من الفكرة لآخر فوتو وريّل، ونركز على نتيجة حقيقية مش بس صورة حلوة.
            </p>

            {/* Values */}
            <div className="space-y-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 glass-card"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto relative">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl rotate-6 transition-transform hover:rotate-12" />
                <div className="absolute inset-0 border-2 border-secondary/15 rounded-3xl -rotate-3 transition-transform hover:-rotate-6" />
                <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center shadow-sm border border-border">
                  <div className="text-center p-8">
                    <span className="text-7xl md:text-8xl font-bold gradient-text">V</span>
                    <p className="text-secondary font-bold text-lg mt-4">Visual Studio</p>
                    <p className="text-muted-foreground text-sm mt-1">عمّان، الأردن</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
