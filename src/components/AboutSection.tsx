import { Heart, Camera, Handshake } from 'lucide-react';

const values = [
  {
    icon: Heart,
    text: 'A lean, boutique creative team—driven by personal connection over corporate scale.',
  },
  {
    icon: Camera,
    text: 'Visual production with a focus on business growth, not just aesthetic beauty.',
  },
  {
    icon: Handshake,
    text: 'End-to-end collaboration from initial concept to the final frame.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-48 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dots opacity-[0.2] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">

            {/* Left side: Editorial Typography */}
            <div className="lg:sticky lg:top-48">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
                The DNA
              </span>
              <h2 className="text-5xl md:text-9xl font-black tracking-extratight text-black mb-16 uppercase italic leading-[0.8]">
                Crafting <br /> <span className="text-primary not-italic text-outline text-black">Identity.</span>
              </h2>

              <div className="space-y-10 text-xl text-black/40 leading-relaxed max-w-xl font-bold tracking-tight uppercase italic">
                <p>
                  بدأنا Vynex Media من حب حقيقي للتصوير، خصوصاً تصوير الأكل والمنتجات. كنا نشوف أصحاب مشاريع صغيرة ومطاعم عندهم شغل حلو بس ما يعرفوا يوصلوه للناس بالطريقة الصح.
                </p>
                <p className="text-black not-italic normal-case font-black border-l-2 border-primary pl-8 py-2">
                  "إحنا مو وكالة ضخمة — إحنا فريق صغير يحب الشغل الإبداعي ويهتم بكل تفصيلة."
                </p>
                <p>
                  نشتغل معك خطوة بخطوة من الفكرة لآخر فوتو وريّل، ونركز على نتيجة حقيقية مش بس صورة حلوة.
                </p>
              </div>
            </div>

            {/* Right side: Values Grid */}
            <div className="grid gap-1 mt-12 lg:mt-0 bg-black/5 p-[1px] border border-black/5 overflow-hidden rounded-sm">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white p-16 md:p-24 transition-all duration-700 hover:bg-black relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 text-[120px] font-black text-black/[0.02] group-hover:text-white/[0.03] transition-colors leading-none pointer-events-none text-outline">
                    0{index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                      <value.icon className="w-8 h-8 text-black group-hover:text-white transition-colors" strokeWidth={1} />
                    </div>
                    <p className="text-2xl md:text-3xl font-black tracking-extratight text-black leading-tight group-hover:text-white transition-colors uppercase italic">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}

              {/* Architectural Detail Card */}
              <div className="p-16 md:p-24 bg-white/50 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-12 group">
                <div className="flex-1">
                  <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-black/20 mb-3 group-hover:text-primary transition-colors">Headquarters</h4>
                  <p className="text-3xl font-black tracking-extratight uppercase">Amman, Jordan</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-black/5" />
                <div className="flex-1 md:text-right">
                  <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-black/20 mb-3 group-hover:text-primary transition-colors">Availability</h4>
                  <p className="text-3xl font-black tracking-extratight uppercase italic">Global Access</p>
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
