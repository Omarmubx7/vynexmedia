import { ArrowRight } from 'lucide-react';

const promises = [
  {
    title: 'Advisory Consultation',
    desc: 'Bespoke strategy sessions to align our creative lens with your business objectives.',
  },
  {
    title: 'Transparent Curation',
    desc: 'Flat-fee boutique packages tailored for ambitious startups and established brands.',
  },
  {
    title: 'Boutique Assets',
    desc: 'High-fidelity visuals, precision-edited and optimized for multi-channel dominance.',
  },
  {
    title: 'Refinement Cycles',
    desc: 'Iterative design process until the final output mirrors your conceptual vision.',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-[120px] md:py-[160px] bg-transparent relative">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start mb-32">
          <div>
            <h2 className="section-title">
              Logic.
            </h2>
          </div>
          <div>
            <p className="text-[20px] md:text-[24px] leading-relaxed text-[var(--foreground)] mb-12">
              We uphold a standard of excellence that distinguishes your brand in the digital landscape.
            </p>
            <div className="space-y-6">
              {[
                'Campaign and content strategy, not just production.',
                'Optimized for conversions, not only aesthetics.',
                'Boutique partnership from brief to measurable results.'
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <p className="text-[16px] font-medium text-[var(--foreground)]/70 uppercase tracking-tight">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[1px] bg-[var(--foreground)]/10 border border-[var(--foreground)]/10">
          {promises.map((promise, index) => (
            <div key={index} className="p-12 md:p-16 bg-black group hover:bg-[#050505] transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] text-[var(--foreground)]/20 uppercase group-hover:text-primary transition-colors mb-8 block">
                  Step 0{index + 1}
                </span>
                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-6 uppercase tracking-tight">
                  {promise.title}
                </h3>
                <p className="text-[var(--foreground)]/60 font-medium leading-relaxed max-w-sm">
                  {promise.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
