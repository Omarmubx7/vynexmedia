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
        <section className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title text-foreground mb-4">طريقة العمل</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        3 خطوات بسيطة وتبدأ معنا
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center">
                            {/* Step Number */}
                            <div className="text-6xl font-bold gradient-text opacity-30 mb-4">
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                <step.icon className="w-8 h-8 text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector Line (hidden on last item and mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/3 -left-4 w-8 h-0.5 bg-gradient-to-l from-primary/50 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
