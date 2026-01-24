import { MessageCircle, Camera, Wand2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'نتعرّف على البراند',
    description: 'مكالمة قصيرة أو لقاء لفهم المنتج والجمهور وأهداف المحتوى.',
  },
  {
    number: '02',
    icon: Camera,
    title: 'التصميم والتصوير',
    description: 'تجهيز الأفكار، سكريبت بسيط للفيديوهات، يوم التصوير أو استلام المواد.',
  },
  {
    number: '03',
    icon: Wand2,
    title: 'المونتاج والتسليم',
    description: 'تعديل الألوان، المونتاج، إضافة النصوص والموسيقى المناسبة وتسليم الملفات جاهزة للنشر.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">كيف نشتغل؟</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            How We Work
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-l from-primary/50 to-transparent -z-10 translate-x-1/2" />
                )}

                <div className="text-center">
                  {/* Step Number & Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto border-2 border-primary/30">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
