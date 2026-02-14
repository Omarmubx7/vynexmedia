import { Send, Settings, CheckCircle } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Send,
        title: 'Submission',
        description: 'أخبرنا عن رؤيتك وأرسل تفاصيل مشروعك أو أمثلة تحبها لنفهم تطلعاتك بدقة.',
    },
    {
        number: '02',
        icon: Settings,
        title: 'Curation',
        description: 'نقوم بتحليل احتياجاتك وتصميم خطة عمل مخصصة تناسب حجم مشروعك وطموح براندك.',
    },
    {
        number: '03',
        icon: '03',
        iconComponent: CheckCircle,
        title: 'Delivery',
        description: 'إنتاج عالي الجودة وتسليم كامل للملفات جاهزة للنشر والتأثير في جمهورك المستهدف.',
    },
];

const ProcessSection = () => {
    return (
        <section id="process" className="py-24 md:py-48 bg-black relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-grid opacity-[0.2] z-0" />
            <div className="absolute top-0 right-0 w-1/4 h-full bg-dots opacity-[0.1] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="mb-32">
                        <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
                            Methodology
                        </span>
                        <h2 className="text-5xl md:text-9xl font-black tracking-extratight text-[var(--foreground)] uppercase italic leading-[0.8]">
                            How We <br /> <span className="text-primary not-italic text-outline text-[var(--foreground)]">Deliver.</span>
                        </h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Number Overlay */}
                                <div className="flex items-center gap-6 mb-12">
                                    <span className="text-6xl md:text-8xl font-black text-[var(--foreground)]/[0.03] group-hover:text-primary/10 transition-all tracking-extratight text-outline">
                                        {step.number}
                                    </span>
                                    <div className="h-px flex-1 bg-[var(--foreground)]/[0.05] group-hover:bg-primary/20 transition-all duration-700" />
                                </div>

                                <div className="space-y-8">
                                    <h3 className="text-3xl md:text-5xl font-black tracking-extratight text-[var(--foreground)] uppercase italic group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-[var(--foreground)]/40 leading-relaxed font-bold tracking-tight uppercase italic underline decoration-primary/10 underline-offset-8">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="mt-12 opacity-10 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-2 text-primary">
                                    {step.iconComponent && <step.iconComponent className="w-10 h-10" strokeWidth={1} />}
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
