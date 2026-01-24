import { useEffect } from 'react';
import { Star, Check, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { addSchemaMarkup, createServiceSchema, updatePageMeta } from '@/lib/seo';

const RestaurantPhotography = () => {
  useEffect(() => {
    // Update page meta tags
    updatePageMeta({
      title: 'تصوير مطاعم احترافي | Vynex Media',
      description: 'خدمات تصوير مطاعم وكافيهات احترافية في عمّان. صور شهية تجعل عملائك يحبون مطعمك.',
      keywords: 'تصوير مطاعم عمّان, تصوير كافيه, تصوير طعام احترافي, صور مطاعم',
      ogImage: 'https://vynexmedia.com/og-restaurant-photography.jpg',
    });

    // Add Service schema
    const serviceSchema = createServiceSchema(
      'تصوير مطاعم وكافيهات احترافي',
      'خدمات تصوير عالية الجودة لمطاعمك وكافيهك تجعل الطعام يبدو أشهى',
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
              تصوير مطاعم احترافي
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              اجعل طعامك يبدو لذيذاً بصور احترافية تجذب العملاء
            </p>
            <a
              href="https://wa.me/962790720994"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              احجز جلسة تصوير
            </a>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              ليش تختار Vynex Media لتصوير مطعمك؟
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'خبرة في الطعام',
                  description: 'نفهم كيفية تصوير الطعام بطريقة تجعله شهياً',
                },
                {
                  title: 'إضاءة احترافية',
                  description: 'استخدام أفضل تقنيات الإضاءة لتظهير الألوان',
                },
                {
                  title: 'تحرير متقدم',
                  description: 'معالجة احترافية تحسّن الصور دون مبالغة',
                },
                {
                  title: 'سرعة التسليم',
                  description: 'تسليم الصور المحررة خلال 24 ساعة',
                },
                {
                  title: 'صور الأطباق',
                  description: 'تصوير تفصيلي لكل طبق من قوائم مطعمك',
                },
                {
                  title: 'صور الأجواء',
                  description: 'صور لأجواء المطعم والجلسات والديكور',
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

      {/* Types of Photos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              أنواع الصور التي نقدمها
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'صور الأطباق',
                  items: [
                    'صور مفصلة لكل طبق',
                    'صور المكونات الطازة',
                    'صور التقديم الاحترافي',
                    'صور الحلويات والمشروبات',
                  ],
                },
                {
                  title: 'صور المطعم',
                  items: [
                    'صور عام للمطعم',
                    'صور الجلسات والطاولات',
                    'صور الديكور والأثاث',
                    'صور المدخل والواجهة',
                  ],
                },
                {
                  title: 'صور الفريق',
                  items: [
                    'صور الطاهي والعاملين',
                    'صور العمل في المطبخ',
                    'صور الخدمة والاستقبال',
                    'صور البيئة الودية',
                  ],
                },
                {
                  title: 'صور الأحداث',
                  items: [
                    'تصوير الحفلات والمناسبات',
                    'صور الأطعمة الخاصة',
                    'صور الضيوف والأجواء',
                    'صور الديكور المميز',
                  ],
                },
              ].map((category, idx) => (
                <div key={idx} className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                  name: 'جلسة عادية',
                  price: '80',
                  items: ['2 ساعة تصوير', '30 صورة', 'صور الأطباق', 'تسليم 48 ساعة'],
                },
                {
                  name: 'جلسة شاملة',
                  price: '150',
                  highlighted: true,
                  items: [
                    '4 ساعات تصوير',
                    '60 صورة',
                    'أطباق + أجواء المطعم',
                    'تسليم 24 ساعة',
                    'مراجعات غير محدودة',
                  ],
                },
                {
                  name: 'جلسة يومية',
                  price: '250',
                  items: [
                    '8 ساعات تصوير',
                    '150 صورة',
                    'غطاء شامل للمطعم',
                    'تسليم فوري',
                    'مراجعات غير محدودة',
                    'فيديو قصير',
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
                  q: 'كم من الوقت تحتاج جلسة التصوير؟',
                  a: 'حسب حجم المطعم وعدد الأطباق، عادة 2-4 ساعات. جلسة يومية شاملة تأخذ 8 ساعات.',
                },
                {
                  q: 'هل تصورون أثناء الخدمة؟',
                  a: 'نعم، نأتي أثناء الخدمة العادية لالتقاط الأطباق الطازة والأجواء الحقيقية.',
                },
                {
                  q: 'ماذا عن حقوق الصور؟',
                  a: 'الصور ملك لمطعمك تماماً ويمكنك استخدامها بأي طريقة تريدها.',
                },
                {
                  q: 'هل تقدمون تعديلات بعد التسليم؟',
                  a: 'بالتأكيد، جميع الباقات تشمل مراجعات وتعديلات حسب احتياجاتك.',
                },
                {
                  q: 'هل تقدمون صور فيديو؟',
                  a: 'نعم، يمكنك إضافة فيديو قصير (15-30 ثانية) بسعر إضافي.',
                },
                {
                  q: 'كم تكلفة جلسة إضافية؟',
                  a: 'جلسة إضافية بنفس الحجم تكون بنفس السعر. عروض خاصة للجلسات المتكررة.',
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
              جاهز لنصور مطعمك؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              تواصل معنا لحجز جلسة تصوير وجعل مطعمك يألق على وسائل التواصل
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

export default RestaurantPhotography;
