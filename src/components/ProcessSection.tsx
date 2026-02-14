import { Send, Settings, CheckCircle } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Send,
        title: 'أرسل تفاصيلك',
        description: 'ترسل لنا تفاصيل مشروعك وصور/أمثلة تحبها عشان نفهم ذوقك واحتياجك.',
    },
    {
        number: '02',
        icon: Settings,
        title: 'نرتب الخطة',
        description: 'نقترح عليك الباقة الأنسب ونرتب يوم التصوير أو استلام الملفات.',
    },
    {
        number: '03',
        icon: CheckCircle,
        title: 'نسلّمك كل شيء جاهز',
        description: 'نصور، نمنتج، ونسلمك كل شيء جاهز للنشر خلال مدة متفق عليها.',
    },
];

const ProcessSection = () => {
    return (
        <section id="process" className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-dots opacity-[0.2] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="mb-24">
                        <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
                            Process
                        </span>
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-black uppercase italic leading-[0.8] mb-12">
                            How We <br /> <span className="text-primary not-italic">Deliver.</span>
                        </h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-3 gap-16 lg:gap-32">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Number and Line */}
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-4xl md:text-6xl font-black text-black/5 group-hover:text-primary transition-colors tracking-tighter line-height-none">
                                        {step.number}
                                    </span>
                                    <div className="h-[1px] flex-1 bg-black/10 group-hover:bg-primary/30 transition-colors" />
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold tracking-tight text-black mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-black/60 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-primary">
                                    <step.icon className="w-8 h-8" strokeWidth={1.5} />
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
