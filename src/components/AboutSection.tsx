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
    <section id="story" className="py-32 md:py-64 relative bg-transparent overflow-hidden">
      {/* Grid utility removed to show DotGridCanvas */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Narrative Block 1: The Core */}
          <div className="grid lg:grid-cols-2 gap-32 items-center mb-64">
            <div className="animate-reveal">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
                The DNA
              </span>
              <h2 className="text-6xl md:text-9xl font-black tracking-extratight text-white uppercase italic leading-[0.85] mb-12">
                Crafting <br /> <span className="text-primary not-italic text-outline text-white">Identity.</span>
              </h2>
              <div className="space-y-12 text-2xl text-white/60 leading-relaxed max-w-xl font-bold tracking-tight uppercase italic">
                <p>
                  We are a boutique marketing and visual studio. Every frame, campaign, and concept is a calculated move in your brand’s master narrative.
                </p>
                <div dir="rtl" className="text-right border-r-4 border-primary pr-12 py-4">
                  <p className="text-4xl md:text-5xl font-black text-white leading-tight font-cairo italic">
                    إحنا فريق تسويق وبصريات مهتم بكل تفصيلة ببراندك.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-sm animate-fade-up delay-200 cursor-none bg-black/5">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              >
                <source
                  src="https://player.vimeo.com/external/494252666.sd.mp4?s=721e25e94f1c7d6e6b4e7a83d3e6d8a3d3d3d3d3&profile_id=165"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute bottom-10 left-10 text-[10px] font-black tracking-[0.5em] text-white/40 uppercase vertical-text">
                DNA / MOTION ARCHIVE
              </div>
            </div>
          </div>

          {/* Narrative Block 2: The Philosophy */}
          <div className="grid lg:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 animate-fade-up delay-300">
            {[
              { title: 'Excellence', desc: 'Undeviating commitment to quality.' },
              { title: 'Agility', desc: 'Rapid response in a shifting market.' },
              { title: 'Commitment', desc: 'Dedicated partnership beyond the frame.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-black p-24 md:p-32 group hover:bg-[#080808] transition-all duration-700">
                <h4 className="flex items-center gap-2 text-[10px] font-black tracking-[0.5em] uppercase text-white/20 group-hover:text-primary mb-12 transition-colors">
                  0{idx + 1} <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#00FF00]" />
                </h4>
                <p className="text-4xl font-black tracking-extratight text-white leading-tight transition-colors uppercase italic mb-8">
                  {value.title}
                </p>
                <p className="text-white/40 text-sm font-bold tracking-tight uppercase transition-colors">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}} />
    </section>
  );
};

export default AboutSection;
