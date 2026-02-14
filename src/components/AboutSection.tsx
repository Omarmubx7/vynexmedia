import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="story" className="py-[120px] md:py-[160px] bg-black relative overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          <div>
            <h2 className="section-title mb-12">
              Excellence.<br />
              Agility.<br />
              Commitment.
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[20px] md:text-[24px] leading-relaxed text-[var(--foreground)]">
              From Amman to the world's most prestigious locations, we serve luxury brands with unwavering commitment to excellence and innovation.
            </p>
            <p className="text-[18px] leading-relaxed text-[var(--foreground)]/70">
              Our team of creators and strategists work at the intersection of cinematic artistry and digital logic, ensuring every frame contributes to your brand's market dominance.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn-arrow group">
                Get in touch
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Values Highlight */}
        <div className="grid md:grid-cols-3 gap-1 bg-[var(--foreground)]/10 mt-32 border border-[var(--foreground)]/10">
          {[
            { title: 'Identity', desc: 'Crafting brand legacies with cinematic precision.' },
            { title: 'Impact', desc: 'Visuals as a vehicle for measurable business growth.' },
            { title: 'Innovation', desc: 'Pushing the boundaries of digital narrative.' },
          ].map((value, idx) => (
            <div key={idx} className="bg-black p-12 group hover:bg-[#050505] transition-colors">
              <span className="text-[12px] font-bold tracking-[0.3em] text-primary mb-6 block uppercase">::: 0{idx + 1}</span>
              <h4 className="text-3xl font-bold text-[var(--foreground)] mb-6 uppercase tracking-tight">{value.title}</h4>
              <p className="text-[var(--foreground)]/60 leading-relaxed font-medium">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
