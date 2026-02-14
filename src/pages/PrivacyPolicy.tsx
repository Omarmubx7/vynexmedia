import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      <main className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dots opacity-[0.1] z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-24">

              {/* Vertical Header */}
              <div className="lg:col-span-4 lg:sticky lg:top-48 h-fit">
                <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10">
                  Legal
                </span>
                <h1 className="text-5xl md:text-8xl font-black tracking-extratight text-black uppercase italic leading-[0.8] mb-12">
                  Privacy <br /> <span className="text-primary not-italic text-outline text-black">Ethics.</span>
                </h1>
                <p className="text-[11px] font-black tracking-[0.3em] text-black/20 uppercase mb-8">
                  Last Updated: Feb 14, 2026
                </p>
                <div className="h-[2px] w-24 bg-primary/20" />
              </div>

              {/* Arabic Content Content */}
              <div dir="rtl" className="lg:col-span-8 space-y-24">
                <section>
                  <h2 className="text-3xl font-black tracking-extratight text-black uppercase italic mb-10">مقدمة</h2>
                  <p className="text-xl font-bold tracking-tight text-black/60 leading-relaxed uppercase">
                    ترحب Vynex Media بك في موقعنا الإلكتروني. نحن ملتزمون بحماية خصوصيتك وضمان شفافية ممارساتنا المتعلقة بجمع البيانات. توضح هذه السياسة كيف نجمع ونستخدم ونحمي المعلومات الشخصية الخاصة بك.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black tracking-extratight text-black uppercase italic mb-10">المعلومات التي نجمعها</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="p-10 border border-black/5 rounded-sm bg-black/[0.01]">
                      <h3 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-6">المعلومات المباشرة</h3>
                      <ul className="space-y-4 text-sm font-bold text-black/60 uppercase tracking-wider">
                        <li>• الاسم الكامل</li>
                        <li>• البريد الإلكتروني</li>
                        <li>• رقم الواتساب</li>
                        <li>• نوع الاستفسار</li>
                      </ul>
                    </div>
                    <div className="p-10 border border-black/5 rounded-sm bg-black/[0.01]">
                      <h3 className="text-[12px] font-black tracking-[0.4em] text-primary uppercase mb-6">البيانات التقنية</h3>
                      <ul className="space-y-4 text-sm font-bold text-black/60 uppercase tracking-wider">
                        <li>• عنوان IP الخاص بك</li>
                        <li>• نوع المتصفح والجهاز</li>
                        <li>• صفحات الويب المزارة</li>
                        <li>• تحليلات الحركة</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-black tracking-extratight text-black uppercase italic mb-10">كيفية الاستخدام</h2>
                  <p className="text-xl font-bold tracking-tight text-black/60 leading-relaxed uppercase">
                    نستخدم معلوماتك للرد على الاستفسارات، تقديم الخدمات، مراقبة أداء الموقع، والامتثال للالتزامات القانونية. نحن لا نشارك بياناتك مع أطراف ثالثة لأغراض تسويقية.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black tracking-extratight text-black uppercase italic mb-10">حقوقك</h2>
                  <p className="text-xl font-bold tracking-tight text-black/60 leading-relaxed uppercase">
                    لديك الحق في الوصول إلى بياناتك، تصحيحها، أو طلب حذفها. لممارسة هذه الحقوق، تواصل معنا على:
                  </p>
                  <p className="text-4xl font-black tracking-extratight text-primary uppercase mt-8 break-all">
                    legal@vynex.io
                  </p>
                </section>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
