import { useEffect } from 'react';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { addSchemaMarkup, createServiceSchema, updatePageMeta } from '@/lib/seo';

const ContentPackages = () => {
  useEffect(() => {
    // Update page meta tags
    updatePageMeta({
      title: 'باقات محتوى شاملة | Vynex Media',
      description: 'باقات محتوى شاملة تجمع بين التصوير والفيديو والتحرير. حل كامل لاحتياجات التسويق الرقمي.',
      keywords: 'باقات محتوى، محتوى تسويقي، خدمات متكاملة، تسويق رقمي عمّان',
      ogImage: 'https://vynexmedia.com/og-packages.jpg',
    });

    // Add Service schema
    const serviceSchema = createServiceSchema(
      'باقات محتوى متكاملة',
      'باقات شاملة تجمع تصوير وفيديو وتحرير لجميع احتياجات التسويق الرقمي',
      '$$$'
    );
    addSchemaMarkup(serviceSchema);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-cairo">
              باقات محتوى شاملة
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              حل متكامل يجمع تصوير وفيديو وتحرير لجميع احتياجات مشروعك
            </p>
            <a
              href="https://wa.me/962790720994"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              طلب عرض مخصص
            </a>
          </div>
        </div>
      </section>

      {/* Packages Overview */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              لماذا الباقات المتكاملة؟
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'توفير التكاليف',
                  desc: '40% تخفيض مقارنة بحجز الخدمات منفصلة',
                },
                {
                  title: 'تناسق احترافي',
                  desc: 'جميع المحتوى بنفس الأسلوب والجودة',
                },
                {
                  title: 'كفاءة الوقت',
                  desc: 'تسليم أسرع مع فريق منسق',
                },
                {
                  title: 'رؤية موحدة',
                  desc: 'علامة تجارية متسقة في كل محتوى',
                },
                {
                  title: 'دعم مستمر',
                  desc: 'فريق واحد يعرف مشروعك بالكامل',
                },
                {
                  title: 'نتائج أفضل',
                  desc: 'محتوى متكامل = مبيعات أفضل',
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              الباقات المتاحة
            </h2>

            <div className="space-y-8">
              {/* Starter Package */}
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">الباقة الأساسية</h3>
                    <p className="text-muted-foreground">للشركات الناشئة والمتاجر الصغيرة</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-primary">300</span>
                    <p className="text-muted-foreground">دينار أردني</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-4">التصوير</h4>
                    <ul className="space-y-2">
                      {['20 صورة منتج', 'خلفيات متعددة', 'تصوير واحد'].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-4">الفيديو</h4>
                    <ul className="space-y-2">
                      {['ريل واحد (30s)', 'موسيقى واختيارات', 'تحرير أساسي'].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-4">الإضافيات</h4>
                    <ul className="space-y-2">
                      {['تصحيح لوني', 'مراجعات 2x', 'تسليم 48s'].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/962790720994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  اختر الباقة
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Professional Package */}
              <div className="glass-card rounded-2xl p-8 md:p-12 border-2 border-primary shadow-lg">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-2">
                      ⭐ الأكثر طلباً
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">الباقة الاحترافية</h3>
                    <p className="text-muted-foreground">للشركات الكبيرة والمتاجر المتقدمة</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-primary">700</span>
                    <p className="text-muted-foreground">دينار أردني</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-4">التصوير</h4>
                    <ul className="space-y-2">
                      {['50 صورة منتج', 'أطباق + أجواء', 'تصويرين', 'تصحيح لوني متقدم'].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-4">الفيديو</h4>
                    <ul className="space-y-2">
                      {['3 ريلز (30s)', 'فيديو واحد (60s)', 'موسيقى احترافية', 'تحرير متقدم'].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-4">الإضافيات</h4>
                    <ul className="space-y-2">
                      {['مراجعات غير محدودة', 'تسليم 24s', 'صور 360°', 'دعم فني'].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/962790720994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  اختر الباقة
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Enterprise Package */}
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">الباقة الشاملة</h3>
                    <p className="text-muted-foreground">للشركات الكبرى والمتاجر الضخمة</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-primary">1500</span>
                    <p className="text-muted-foreground">دينار أردني</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-4">التصوير</h4>
                    <ul className="space-y-2">
                      {['100+ صورة', 'جميع المنتجات', '4 تصويرين', 'تصحيح لوني متقدم', 'ألبوم رقمي'].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-4">الفيديو</h4>
                    <ul className="space-y-2">
                      {['5 ريلز', '2 فيديو (60s)', 'فيديو احترافي', 'تحرير فائق', 'ترجمة متعددة'].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-4">الإضافيات</h4>
                    <ul className="space-y-2">
                      {['مراجعات غير محدودة', 'أولوية التسليم', 'دعم 24/7', 'فريق مخصص', 'استشارة تسويقية'].map(
                        (item, i) => (
                          <li key={i} className="flex gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground text-sm">{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/962790720994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  اختر الباقة
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              مقارنة الباقات
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right py-4 px-4 font-bold text-foreground">الميزة</th>
                    <th className="text-right py-4 px-4 font-bold text-foreground">أساسية</th>
                    <th className="text-right py-4 px-4 font-bold text-foreground">احترافية</th>
                    <th className="text-right py-4 px-4 font-bold text-foreground">شاملة</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'عدد الصور', basic: '20', pro: '50', enterprise: '100+' },
                    { feature: 'الريلز', basic: '1', pro: '3', enterprise: '5' },
                    { feature: 'الفيديوهات', basic: '0', pro: '1', enterprise: '2' },
                    { feature: 'التحرير', basic: 'أساسي', pro: 'متقدم', enterprise: 'فائق' },
                    { feature: 'المراجعات', basic: '2x', pro: 'غير محدودة', enterprise: 'غير محدودة' },
                    { feature: 'التسليم', basic: '48s', pro: '24s', enterprise: 'فوري' },
                    { feature: 'الدعم', basic: 'بريد', pro: 'واتساب', enterprise: '24/7' },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-border">
                      <td className="py-4 px-4 font-bold text-foreground">{row.feature}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.basic}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.pro}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              أسئلة شائعة
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'هل يمكن تخصيص الباقة؟',
                  a: 'نعم بالتأكيد، يمكن تعديل أي باقة حسب احتياجاتك الخاصة.',
                },
                {
                  q: 'هل هناك عقد طويل الأجل؟',
                  a: 'لا، كل باقة بدون التزام. يمكنك اختيار تجديد أو لا.',
                },
                {
                  q: 'ماذا لو احتجت تصويراً إضافياً؟',
                  a: 'يمكن إضافة ساعات أو صور إضافية بسعر جيد.',
                },
                {
                  q: 'هل الأسعار تشمل الضريبة؟',
                  a: 'الأسعار الموضحة قبل الضريبة، سيتم إضافة الضريبة في الفاتورة.',
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group glass-card rounded-xl p-6 cursor-pointer transition-all"
                >
                  <summary className="flex items-center justify-between font-bold text-foreground text-lg">
                    {faq.q}
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-muted-foreground mt-4 text-right">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              جاهز لاختيار الباقة المناسبة؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              تواصل معنا لمناقشة احتياجاتك وحجز خدماتنا
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/962790720994"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                واتساب
              </a>
              <a
                href="mailto:info@vynexmedia.com"
                className="btn-primary border border-primary text-primary bg-transparent inline-flex items-center justify-center gap-3"
              >
                البريد الإلكتروني
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentPackages;
