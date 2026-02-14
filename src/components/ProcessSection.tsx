import { Send, Settings, CheckCircle } from 'lucide-react';

const steps = [
    {
        number: '01',
        iconComponent: Send,
        title: 'Submission',
        description: 'Share your vision and project details. We analyze your brand logic to define a precise creative strategy.',
    },
    {
        number: '02',
        iconComponent: Settings,
        title: 'Curation',
        description: 'We design a bespoke production plan tailored for your brand trajectory and market objectives.',
    },
    {
        number: '03',
        iconComponent: CheckCircle,
        title: 'Delivery',
        description: 'High-fidelity asset production and seamless handoff, optimized for maximum audience impact.',
    },
];

const ProcessSection = () => {
    return (
        <section id="process" className="py-24 md:py-48 bg-transparent relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-grid opacity-[0.2] z-0" />
            <div className="absolute top-0 right-0 w-1/4 h-full bg-dots opacity-[0.1] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="mb-32">
                        <h2 className="section-title">
                            Process.
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
