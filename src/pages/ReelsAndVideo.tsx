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
      '$$'
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">لماذا الفيديو؟</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ليش الفيديو مهم للتسويق؟
              </h2>
              <p className="text-muted-foreground text-lg">اكتشف قوة الفيديو في التسويق الرقمي</p>
            </div>

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
                <div key={idx} className="group glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">خدماتنا</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                أنواع الفيديوهات التي نقدمها
              </h2>
              <p className="text-muted-foreground text-lg">حلول فيديو متنوعة لكل احتياجات عملك</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'ريلز المنتج',
                  desc: 'فيديوهات قصيرة (15-30s) تظهر منتجاتك بأفضل صورة',
                  items: ['عرض المنتج', 'كيفية الاستخدام', 'المميزات والفوائد', 'تأثيرات وموسيقى'],
                  icon: '🎬',
                },
                {
                  title: 'فيديوهات التعليم',
                  desc: 'فيديوهات تعليمية توضح كيفية استخدام المنتج',
                  items: ['خطوات التركيب', 'نصائح الاستخدام', 'أخطاء شائعة', 'حل المشاكل'],
                  icon: '📚',
                },
                {
                  title: 'فيديوهات المسلسل',
                  desc: 'سلسلة فيديوهات قصيرة متتالية',
                  items: ['جزء 1، 2، 3...', 'قصة تسويقية', 'بناء فضول', 'Call-to-action'],
                  icon: '🎞️',
                },
                {
                  title: 'فيديوهات الحمل',
                  desc: 'فيديوهات قصيرة جداً (3-6s) للإعلانات والقصص',
                  items: ['Attention-grabbing', 'موسيقى معاصرة', 'نص وفيديو', 'تصميم احترافي'],
                  icon: '⚡',
                },
                {
                  title: 'فيديوهات الشهادات',
                  desc: 'فيديوهات من العملاء الراضين يشاركون تجاربهم',
                  items: ['تصوير المقابلة', 'تحرير احترافي', 'موسيقى وتأثيرات', 'ترجمة اختيارية'],
                  icon: '⭐',
                },
                {
                  title: 'فيديوهات الإعلان',
                  desc: 'فيديوهات احترافية للإعلانات المدفوعة',
                  items: ['نص إعلاني', 'صور وفيديو', 'موسيقى احترافية', 'CTA واضح'],
                  icon: '📢',
                },
              ].map((type, idx) => (
                <div 
                  key={idx} 
                  className="group glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col"
                >
                  <div className="mb-4">
                    <div className="text-4xl mb-3 block">{type.icon}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{type.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{type.desc}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-primary/10 group-hover:border-primary/20 transition-colors">
                    <ul className="space-y-2">
                      {type.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 -mt-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">خطواتنا</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                كيفية عملنا
              </h2>
              <p className="text-muted-foreground text-lg">عملية احترافية من البداية إلى النهاية</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'الفكرة والاستشارة',
                  desc: 'نستمع لفكرتك ونقدم اقتراحات احترافية وتوصيات إبداعية',
                },
                {
                  step: '02',
                  title: 'الإنتاج والتصوير',
                  desc: 'نصور الفيديو بمعدات احترافية 4K وإضاءة مميزة وصوت عالي الجودة',
                },
                {
                  step: '03',
                  title: 'التحرير المتقدم',
                  desc: 'تحرير احترافي مع تأثيرات بصرية وموسيقى توافقية',
                },
                {
                  step: '04',
                  title: 'المراجعة والتعديل',
                  desc: 'تعديلات حسب رأيك حتى الرضا الكامل والنتيجة المطلوبة',
                },
                {
                  step: '05',
                  title: 'التسليم النهائي',
                  desc: 'استقبل الفيديو بصيغ مختلفة مُحسّنة لكل منصة (Instagram, TikTok, YouTube)',
                },
              ].map((item, idx) => (
                <div key={idx} className="group glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold text-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mb-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">التسعير</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                باقات أسعارنا
              </h2>
              <p className="text-muted-foreground text-lg">خيارات متنوعة تناسب جميع الميزانيات</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'ريل واحد',
                  price: '30',
                  subtitle: 'للبدايات',
                  items: ['فيديو واحد (15-30s)', 'تصوير واحد', 'تحرير احترافي', 'موسيقى وتأثيرات'],
                },
                {
                  name: 'حزمة ريلز',
                  price: '80',
                  subtitle: 'الأفضل',
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
                  subtitle: 'احترافي',
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
                  className={`rounded-xl transition-all duration-300 flex flex-col ${
                    plan.highlighted
                      ? 'glass-card border-2 border-primary shadow-xl hover:shadow-2xl hover:shadow-primary/20 scale-105 relative'
                      : 'glass-card border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                        ⭐ الأكثر طلباً
                      </div>
                    </div>
                  )}
                  
                  <div className={`p-8 pb-6 ${plan.highlighted ? 'pt-10' : ''}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{plan.subtitle}</p>
                    
                    <div className="mb-8 pb-8 border-b border-primary/10">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground mr-2">د.ا</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {plan.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-8 pt-6 mt-auto">
                    <a
                      href="https://wa.me/962790720994"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                        plan.highlighted
                          ? 'btn-primary hover:shadow-lg hover:shadow-primary/30'
                          : 'border-2 border-primary text-primary hover:bg-primary/5'
                      }`}
                    >
                      اطلب الآن
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
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
