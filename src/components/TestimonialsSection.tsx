import { Quote } from 'lucide-react';
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';

const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

const testimonials = [
  {
    name: 'أحمد',
    role: 'صاحب مطعم',
    content: 'الصورة خلت المنيو يبين أرتب بكثير، والناس صارت تطلب الأطباق اللي ركزنا عليها بالتصوير. أحسن قرار اتخذناه.',
  },
  {
    name: 'سارة',
    role: 'صاحبة متجر أونلاين',
    content: 'من أول جلسة تصوير المنتجات صارت تبين باحترافية على الموقع. المبيعات زادت والعملاء صاروا يثقوا أكثر بالبراند.',
  },
  {
    name: 'خالد',
    role: 'مدير كافيه',
    content: 'الريلز اللي سووها لنا حققت آلاف المشاهدات وصار الناس يجوا المكان ويقولوا شفناكم على إنستغرام.',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dots opacity-[0.2] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-black uppercase italic leading-[0.8] mb-0">
                Client <br /> <span className="text-primary not-italic">Stories.</span>
              </h2>
            </div>
            <p className="text-lg text-black/40 max-w-sm leading-relaxed mb-4">
              آراء حقيقية من أصحاب مشاريع وثقوا في Vynex Media عشان ينقلوا شغلهم لمستوى ثاني.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-[1px] bg-black/5 border border-black/5 rounded-sm overflow-hidden mb-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-12 md:p-16 bg-white flex flex-col justify-between group hover:bg-black transition-all duration-700"
              >
                <div className="mb-12">
                  <Quote className="w-12 h-12 text-primary/20 group-hover:text-primary transition-colors mb-8" strokeWidth={1} />
                  <p className="text-xl md:text-2xl font-medium tracking-tight text-black group-hover:text-white transition-colors leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 group-hover:border-white/10 transition-colors pt-8 border-t border-black/5">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold tracking-tighter text-black group-hover:text-white transition-colors leading-none mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 group-hover:text-white/40 transition-colors">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos - Subtle Grid */}
          <div className="pt-24 border-t border-black/5">
            <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-black/20 text-center mb-16 underline decoration-primary/30 underline-offset-8">Trusting Partners</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-30 hover:opacity-100 transition-opacity duration-700">
              {clientLogos.map((logo, i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-500 w-full max-w-[120px] h-20 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`Client ${i + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
