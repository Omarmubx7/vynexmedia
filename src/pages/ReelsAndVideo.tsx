import { useEffect } from 'react';
import { Star, Check, MessageCircle, ArrowRight, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { addSchemaMarkup, createServiceSchema, updatePageMeta } from '@/lib/seo';

const ReelsAndVideo = () => {
  useEffect(() => {
    // Update page meta tags
    updatePageMeta({
      title: 'تصوير وتحرير الريلز والفيديو | Vynex Media',
      description: 'خدمات تصوير وتحرير الريلز والفيديوهات احترافية. نسوق منتجاتك على TikTok و Instagram بطريقة احترافية.',
      keywords: 'تصوير ريلز، تحرير فيديو، فيديو تسويق، تصوير فيديو احترافي',
      ogImage: 'https://vynexmedia.com/og-reels-video.jpg',
    });

    // Add Service schema
    const serviceSchema = createServiceSchema(
      'تصوير وتحرير الريلز والفيديو',
      'خدمات تصوير وتحرير احترافية للريلز والفيديوهات التسويقية',
      '$$',
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
              ريلز وفيديوهات احترافية
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              نسوق منتجاتك بفيديوهات احترافية تجعلك تفيروز على التواصل
            </p>
            <a
              href="https://wa.me/962790720994"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              اطلب فيديو الآن
            </a>
          </div>
        </div>
      </section>

      {/* Why Video */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              ليش الفيديو مهم للتسويق؟
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'نسب مشاهدة عالية',
                  description: 'الفيديو يجذب انتباه العملاء أكثر من الصور العادية 10x',
                },
                {
                  title: 'فهم أسرع',
                  description: 'الفيديو يشرح المنتج بطريقة أسرع وأوضح من النصوص الطويلة',
                },
                {
                  title: 'ثقة أكثر',
                  description: 'العملاء يثقون أكثر عندما يرون المنتج وهو يعمل',
                },
                {
                  title: 'مشاركات أكثر',
                  description: 'الفيديو يتم مشاركته أكثر على وسائل التواصل',
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              أنواع الفيديوهات التي نقدمها
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'ريلز المنتج',
                  desc: 'فيديوهات قصيرة (15-30s) تظهر منتجاتك بأفضل صورة',
                  items: ['عرض المنتج', 'كيفية الاستخدام', 'المميزات والفوائد', 'تأثيرات وموسيقى'],
                },
                {
                  title: 'فيديوهات التعليم',
                  desc: 'فيديوهات تعليمية توضح كيفية استخدام المنتج',
                  items: ['خطوات التركيب', 'نصائح الاستخدام', 'أخطاء شائعة', 'حل المشاكل'],
                },
                {
                  title: 'فيديوهات المسلسل',
                  desc: 'سلسلة فيديوهات قصيرة متتالية',
                  items: ['جزء 1، 2، 3...', 'قصة تسويقية', 'بناء فضول', 'Call-to-action'],
                },
                {
                  title: 'فيديوهات الحمل',
                  desc: 'فيديوهات قصيرة جداً (3-6s) للإعلانات والقصص',
                  items: ['Attention-grabbing', 'موسيقى معاصرة', 'نص وفيديو', 'تصميم احترافي'],
                },
                {
                  title: 'فيديوهات الشهادات',
                  desc: 'فيديوهات من العملاء الراضين يشاركون تجاربهم',
                  items: ['تصوير المقابلة', 'تحرير احترافي', 'موسيقى وتأثيرات', 'ترجمة اختيارية'],
                },
                {
                  title: 'فيديوهات الإعلان',
                  desc: 'فيديوهات احترافية للإعلانات المدفوعة',
                  items: ['نص إعلاني', 'صور وفيديو', 'موسيقى احترافية', 'CTA واضح'],
                },
              ].map((type, idx) => (
                <div key={idx} className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{type.desc}</p>
                  <ul className="space-y-2">
                    {type.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
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

      {/* Process */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              العملية
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1. الفكرة',
                  desc: 'نستمع لفكرتك ونقدم اقتراحات احترافية',
                },
                {
                  step: '2. الإنتاج',
                  desc: 'نصور الفيديو بمعدات احترافية وإضاءة مميزة',
                },
                {
                  step: '3. التحرير',
                  desc: 'تحرير احترافي مع تأثيرات وموسيقى',
                },
                {
                  step: '4. المراجعة',
                  desc: 'تعديلات حسب رأيك حتى الرضا الكامل',
                },
                {
                  step: '5. التسليم',
                  desc: 'استقبل الفيديو بصيغ مختلفة للمنصات المختلفة',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground font-bold">
                      {item.step.split('.')[0]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{item.step}</h3>
                    <p className="text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              الأسعار
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'ريل واحد',
                  price: '30',
                  items: ['فيديو واحد (15-30s)', 'تصوير واحد', 'تحرير احترافي', 'موسيقى وتأثيرات'],
                },
                {
                  name: 'حزمة ريلز',
                  price: '80',
                  highlighted: true,
                  items: [
                    '3 ريلز (15-30s كل واحد)',
                    'تصوير كامل',
                    'تحرير احترافي',
                    'موسيقى وتأثيرات',
                    'مراجعات غير محدودة',
                  ],
                },
                {
                  name: 'فيديو كامل',
                  price: '150',
                  items: [
                    'فيديو واحد (60-90s)',
                    'تصوير احترافي',
                    'تحرير متقدم',
                    'موسيقى وتأثيرات متعددة',
                    'ترجمة اختيارية',
                    'صيغ متعددة',
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              أسئلة شائعة
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'كم من الوقت يأخذ التحرير؟',
                  a: '3-5 أيام عادة، حسب طول الفيديو وعدد التعديلات.',
                },
                {
                  q: 'هل تقدمون مراجعات وتعديلات؟',
                  a: 'نعم، مراجعات غير محدودة حتى تكون راضي تماماً.',
                },
                {
                  q: 'ما هي الصيغ المتاحة؟',
                  a: 'MP4، MOV، WebM لـ Instagram, TikTok, Facebook, YouTube وغيرها.',
                },
                {
                  q: 'هل تقدمون موسيقى احترافية؟',
                  a: 'نعم، موسيقى بدون حقوق ملكية احترافية تناسب فيديوك.',
                },
                {
                  q: 'هل يمكن إضافة نصوص وتأثيرات؟',
                  a: 'بالتأكيد، نضيف نصوص وتأثيرات احترافية حسب احتياجك.',
                },
                {
                  q: 'هل يمكن تصوير فيديو من الآن وتحريره لاحقاً؟',
                  a: 'نعم، يمكن تأجيل التحرير حتى 3 أشهر بدون مشكلة.',
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
              جاهز لنصور فيديوك؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              تواصل معنا لحجز جلسة تصوير أو لطلب تحرير فيديو موجود
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

export default ReelsAndVideo;
