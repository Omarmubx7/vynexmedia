import { useEffect } from 'react';
import { Star, Check, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { addSchemaMarkup, createServiceSchema, updatePageMeta } from '@/lib/seo';

const ProductPhotography = () => {
  useEffect(() => {
    // Update page meta tags
    updatePageMeta({
      title: 'تصوير منتجات احترافي | Vynex Media',
      description: 'خدمات تصوير منتجات احترافية في عمّان. نقدم جودة عالية وأسعار منافسة لتصوير منتجاتك بأفضل صورة.',
      keywords: 'تصوير منتجات عمّان, تصوير e-commerce, تصوير متجر الكتروني, صور منتجات احترافية',
      ogImage: 'https://vynexmedia.com/og-product-photography.jpg',
    });

    // Add Service schema
    const serviceSchema = createServiceSchema(
      'تصوير منتجات احترافي',
      'خدمات تصوير منتجات عالية الجودة للمتاجر الإلكترونية والشركات',
      '$$$',
      {
        areaServed: 'Jordan, Middle East',
        availableLanguage: 'ar, en',
      }
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
              تصوير منتجات احترافي
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              اجعل منتجاتك تألق أمام عملائك بصور احترافية عالية الجودة
            </p>
            <a
              href="https://wa.me/962790720994"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              اطلب عرض سعر الآن
            </a>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              ليش تختار Vynex Media لتصوير منتجاتك؟
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'جودة احترافية',
                  description: 'معدات احترافية وإضاءة متقدمة لأفضل صور',
                },
                {
                  title: 'سرعة التسليم',
                  description: 'تسليم الصور في غضون 24-48 ساعة',
                },
                {
                  title: 'سعر منافس',
                  description: 'أسعار تناسب الجميع من الشركات الصغيرة للكبيرة',
                },
                {
                  title: 'تصحيح لوني',
                  description: 'معالجة احترافية وتصحيح لوني دقيق',
                },
                {
                  title: 'خلفيات متنوعة',
                  description: 'اختر من خلفيات بيضاء أو ملونة أو طبيعية',
                },
                {
                  title: 'فريق متخصص',
                  description: 'فريق لديه سنوات من الخبرة في e-commerce',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-right">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              كيفية الإجراء
            </h2>

            <div className="grid md:grid-cols-4 gap-4 md:gap-2">
              {[
                {
                  num: '1',
                  title: 'التواصل',
                  desc: 'تواصل معنا واشرح احتياجاتك',
                },
                {
                  num: '2',
                  title: 'الحجز',
                  desc: 'حدد التاريخ والموقع',
                },
                {
                  num: '3',
                  title: 'التصوير',
                  desc: 'نأتي لك ونصور منتجاتك',
                },
                {
                  num: '4',
                  title: 'التسليم',
                  desc: 'استقبل صورك المحررة',
                },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              الأسعار
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'الباقة الأساسية',
                  price: '50',
                  items: ['10 صور', 'تحرير أساسي', 'خلفية بيضاء', 'تسليم 48 ساعة'],
                },
                {
                  name: 'الباقة الموسعة',
                  price: '100',
                  highlighted: true,
                  items: [
                    '25 صورة',
                    'تحرير احترافي',
                    'خلفيات متنوعة',
                    'تسليم 24 ساعة',
                    'مراجعات غير محدودة',
                  ],
                },
                {
                  name: 'الباقة الكاملة',
                  price: '150',
                  items: [
                    '50 صورة',
                    'تحرير متقدم',
                    'خلفيات كاملة',
                    'تسليم فوري',
                    'مراجعات غير محدودة',
                    'صور 360°',
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-xl p-8 transition-all ${
                    plan.highlighted
                      ? 'glass-card border-2 border-primary shadow-lg scale-105'
                      : 'glass-card'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                      الأكثر طلباً
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground mr-2">دينار أردني</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/962790720994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-primary w-full flex items-center justify-center gap-2 ${
                      plan.highlighted ? 'btn-primary' : 'border border-primary text-primary'
                    }`}
                  >
                    احجز الآن
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8">
              * جميع الأسعار تشمل التحرير والمعالجة. يمكن طلب عروض مخصصة حسب احتياجاتك.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              أعمالنا السابقة
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square rounded-xl bg-secondary/50 flex items-center justify-center border-2 border-dashed border-border hover:border-primary transition-colors"
                >
                  <div className="text-center">
                    <p className="text-muted-foreground">صورة منتج</p>
                    <p className="text-sm text-muted-foreground mt-1">#{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8">
              تحديث الصور قريباً. يمكنك رؤية أعمالنا على{' '}
              <a
                href="https://instagram.com/vynexmedia.jo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              أسئلة شائعة
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'هل تقدمون خدمة تصوير في الموقع؟',
                  a: 'نعم، نأتي إلى موقعك (مستودع، متجر، إلخ) لتصوير منتجاتك في بيئتها الطبيعية.',
                },
                {
                  q: 'ما هو وقت التسليم؟',
                  a: 'عادة 24-48 ساعة من انتهاء جلسة التصوير، حسب عدد الصور والتحرير المطلوب.',
                },
                {
                  q: 'هل تقدمون مراجعات وتعديلات؟',
                  a: 'بالتأكيد! تشمل جميع الباقات مراجعات وتعديلات حسب احتياجاتك.',
                },
                {
                  q: 'هل يمكن استخدام الصور على المتجر الإلكتروني؟',
                  a: 'نعم، الصور ملك لك تماماً ويمكنك استخدامها بأي طريقة تريدها.',
                },
                {
                  q: 'كم عدد المنتجات في الجلسة الواحدة؟',
                  a: 'يعتمد على حجم المنتجات والتعقيد. في المتوسط 10-20 منتج في ساعة واحدة.',
                },
                {
                  q: 'هل تقدمون صور 360 درجة؟',
                  a: 'نعم، متاح في الباقات الموسعة والكاملة بسعر إضافي صغير.',
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              جاهز لتصوير منتجاتك؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              تواصل معنا عبر الواتساب أو البريد الإلكتروني لحجز جلسة التصوير الخاصة بك
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

export default ProductPhotography;
