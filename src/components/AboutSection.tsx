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
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-right">
            <h2 className="section-title text-foreground mb-6 animated-underline inline-block">
              مين إحنا؟
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              بدأنا Vynex Media من حب حقيقي للتصوير، خصوصاً تصوير الأكل والمنتجات. كنا نشوف أصحاب مشاريع صغيرة ومطاعم عندهم شغل حلو بس ما يعرفوا يوصلوه للناس بالطريقة الصح.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              فقررنا نبني استوديو صغير في عمّان متخصص بالإنتاج البصري للبراندات الناشئة والمتاجر والمطاعم. إحنا مو وكالة ضخمة — إحنا فريق صغير يحب الشغل الإبداعي ويهتم بكل تفصيلة.
            </p>

            <p className="text-lg text-primary font-semibold leading-relaxed mb-8">
              نشتغل معك خطوة بخطوة من الفكرة لآخر فوتو وريّل، ونركز على نتيجة حقيقية مش بس صورة حلوة.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              {/* Decorative Box */}
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl rotate-6 transition-transform hover:rotate-12" />
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -rotate-3 transition-transform hover:-rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-7xl md:text-8xl font-bold gradient-text">V</span>
                    <p className="text-primary font-bold text-xl mt-4">Visual Studio</p>
                    <p className="text-muted-foreground text-sm mt-1">عمّان، الأردن</p>
                  </div>
                </div>
              </div>

              {/* Floating Glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/30 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
