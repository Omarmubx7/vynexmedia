import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      title: 'Products',
      faqs: [
        { q: 'كم تكلفة تصوير المنتجات؟', a: 'تبدأ أسعارنا من 150 دينار أردني. تختلف حسب التعقيد.' },
        { q: 'هل يمكن التصوير في موقعي؟', a: 'نعم، نقدم خدمات التصوير الميداني مع رسوم نقل بسيطة.' }
      ]
    },
    {
      title: 'Gastronomy',
      faqs: [
        { q: 'ما أفضل وقت لتصوير المطاعم؟', a: 'الصباح الباكر أو قبل ساعات الذروة هو الأفضل للإضاءة والهدوء.' },
        { q: 'هل تصورون قائمة كاملة؟', a: 'نعم، نغطي القوائم الكاملة والديكور والجو العام.' }
      ]
    },
    {
      title: 'Common Inquiries',
      faqs: [
        { q: 'كيف يمكنني البدء؟', a: 'يمكنك التواصل معنا عبر نموذج الاتصال أو الواتساب مباشرة.' },
        { q: 'ما هي طرق الدفع؟', a: 'نقبل الدفع بجميع الوسائل المحلية والتحويلات البنكية.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      <main className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-4xl">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
                Support
              </span>
              <h1 className="text-5xl md:text-9xl font-black tracking-extratight text-black uppercase italic leading-[0.8] mb-32">
                Inquiry <br /> <span className="text-primary not-italic text-outline text-black">Archive.</span>
              </h1>

              <div className="space-y-32">
                {faqCategories.map((category, idx) => (
                  <div key={idx}>
                    <h2 className="text-[12px] font-black tracking-[0.6em] text-primary uppercase mb-16 border-b border-black/5 pb-4">
                      {category.title}
                    </h2>
                    <div className="grid gap-16">
                      {category.faqs.map((faq, fIdx) => (
                        <div key={fIdx} dir="rtl" className="group">
                          <h3 className="text-3xl font-black tracking-extratight text-black uppercase italic mb-6 group-hover:text-primary transition-colors">
                            {faq.q}
                          </h3>
                          <p className="text-xl font-bold tracking-tight text-black/60 leading-relaxed uppercase max-w-2xl">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
