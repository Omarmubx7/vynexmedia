import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="story" className="py-[160px] md:py-[240px] bg-transparent relative overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          <div>
            <h2 className="section-title mb-12">
              Our DNA.
            </h2>
            <h3 className="text-[48px] md:text-[64px] font-extrabold text-[var(--foreground)] leading-tight mb-8">
              Excellence.<br />
              Agility.<br />
              Commitment.
            </h3>
          </div>
          <div className="flex flex-col gap-8 pt-4">
            <p className="text-[20px] md:text-[24px] leading-relaxed text-[var(--foreground)] font-medium">
              From Amman to the world's most prestigious locations, we serve luxury brands with unwavering commitment to excellence and innovation.
            </p>
            <p className="text-[18px] leading-relaxed text-[var(--foreground)]/70">
              Our team of creators and strategists work at the intersection of cinematic artistry and digital logic, ensuring every frame contributes to your brand's market dominance.
            </p>
            <div className="mt-8">
              <a href="#contact" className="btn-arrow group">
                Initiate Conversation
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
