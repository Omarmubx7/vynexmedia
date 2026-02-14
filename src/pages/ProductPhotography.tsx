import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductPhotography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      <main className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-24">

              {/* Vertical Header */}
              <div className="lg:col-span-12 mb-32">
                <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
                  Expertise
                </span>
                <h1 className="text-5xl md:text-9xl font-black tracking-extratight text-black uppercase italic leading-[0.8] mb-12">
                  Product <br /> <span className="text-primary not-italic text-outline text-black">Aesthetics.</span>
                </h1>
                <div className="h-[2px] w-24 bg-primary/20" />
              </div>

              {/* Arabic Narrative */}
              <div dir="rtl" className="lg:col-span-8 space-y-24">
                <section>
                  <h2 className="text-4xl font-black tracking-extratight text-black uppercase italic mb-8">جماليات المنتج</h2>
                  <p className="text-2xl font-bold tracking-tight text-black/60 leading-relaxed uppercase">
                    اجعل منتجاتك تتحدث لغة الفخامة. نحن نصور التفاصيل التي تجعل علامتك التجارية تبرز في سوق مزدحم. من الإضاءة الدرامية إلى التكوين المعماري.
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: 'جودة احترافية', desc: 'معدات سينمائية وإضاءة متقدمة' },
                    { title: 'سرعة التسليم', desc: '24-48 ساعة لتلبية احتياجات السوق' },
                    { title: 'تصحيح لوني', desc: 'معالجة احترافية لكل بكسل' },
                    { title: 'رؤية فنية', desc: 'تكوين كلاسيكي وعصري' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-10 border border-black/5 rounded-sm bg-black/[0.01] hover:border-primary/20 transition-colors group">
                      <h3 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-4">{item.title}</h3>
                      <p className="text-lg font-bold text-black/40 uppercase group-hover:text-black/80 transition-colors">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="lg:col-span-4 lg:sticky lg:top-48 h-fit">
                <div className="p-10 bg-black text-white rounded-sm">
                  <h3 className="text-2xl font-black tracking-extratight uppercase italic mb-8">Ready to Elevate?</h3>
                  <p className="text-white/40 font-bold uppercase text-[12px] tracking-widest mb-10">تبدأ الباقات من 150 دينار</p>
                  <a
                    href="https://wa.me/962790720994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 py-6 bg-primary text-white font-black uppercase tracking-widest hover:brightness-110 transition-all rounded-full"
                  >
                    <MessageCircle size={20} />
                    Liaison Now
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPhotography;
