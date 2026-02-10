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
        <section className="py-[72px] md:py-24">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="section-title text-foreground mb-3">طريقة العمل</h2>
                    <p className="text-muted-foreground text-base max-w-lg mx-auto">
                        3 خطوات بسيطة وتبدأ معنا
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center">
                            {/* Step Number */}
                            <div className="text-5xl font-bold text-primary/15 mb-3">
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <step.icon className="w-6 h-6 text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
