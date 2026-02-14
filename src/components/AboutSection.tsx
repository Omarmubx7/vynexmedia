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
    <section id="about" className="py-24 md:py-40 relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dots opacity-[0.2] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left side: Editorial Typography */}
            <div className="lg:sticky lg:top-40">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
                Our Story
              </span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black mb-12 uppercase italic leading-[0.9]">
                Crafting <br /> <span className="text-primary not-italic">Identity.</span>
              </h2>

              <div className="space-y-8 text-lg text-black/60 leading-relaxed max-w-xl">
                <p>
                  بدأنا Vynex Media من حب حقيقي للتصوير، خصوصاً تصوير الأكل والمنتجات. كنا نشوف أصحاب مشاريع صغيرة ومطاعم عندهم شغل حلو بس ما يعرفوا يوصلوه للناس بالطريقة الصح.
                </p>
                <p className="font-medium text-black italic">
                  "إحنا مو وكالة ضخمة — إحنا فريق صغير يحب الشغل الإبداعي ويهتم بكل تفصيلة."
                </p>
                <p>
                  نشتغل معك خطوة بخطوة من الفكرة لآخر فوتو وريّل، ونركز على نتيجة حقيقية مش بس صورة حلوة.
                </p>
              </div>
            </div>

            {/* Right side: Values Cards */}
            <div className="grid gap-4 mt-12 lg:mt-0">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white border border-black/5 p-12 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 rounded-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                    <value.icon size={120} strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-[0.4em] text-primary/40 mb-4 block uppercase leading-none">
                      Value 0{index + 1}
                    </span>
                    <p className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-tight">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}

              {/* Location Badge */}
              <div className="mt-8 p-12 border border-black/5 flex items-center justify-between rounded-sm">
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-black mb-1">Based in</h4>
                  <p className="text-2xl font-bold tracking-tighter">Amman, Jordan</p>
                </div>
                <div className="w-12 h-[1px] bg-black/10" />
                <div className="text-right">
                  <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-black mb-1">Timezone</h4>
                  <p className="text-2xl font-bold tracking-tighter">GMT+3</p>
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
