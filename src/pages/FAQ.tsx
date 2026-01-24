import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { addSchemaMarkup, createFAQSchema } from '@/lib/seo';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Add FAQ schema markup
    const faqData = [
      {
        question: 'كم تكلفة تصوير المنتجات؟',
        answer: 'تبدأ أسعارنا من 150 دينار أردني للحزمة الأساسية. تختلف الأسعار حسب عدد المنتجات والتعديلات المطلوبة والتسليم. اتصل بنا للحصول على عرض سعر مخصص.'
      },
      {
        question: 'كم الوقت المستغرق للحصول على الصور؟',
        answer: 'عادة نسلم الصور المحررة خلال 5-7 أيام عمل. يمكننا تقديم تسليم معجل (3 أيام) بتكلفة إضافية.'
      },
      {
        question: 'هل تقدمون تعديلات غير محدودة؟',
        answer: 'تشمل حزمتنا حتى 3 جولات من التعديلات. التعديلات الإضافية متاحة بسعر مضافة.'
      },
      {
        question: 'هل يمكن لفريقكم القدوم إلى موقعي؟',
        answer: 'نعم، نقدم جلسات تصوير في الموقع (on-location) مع رسوم إضافية لتغطية النقل والوقت.'
      },
      {
        question: 'ما أفضل وقت لتصوير المطاعم؟',
        answer: 'الأوقات المثالية هي قبل ساعات الذروة (4-6 مساءً) أو في الصباح الباكر. نتجنب ساعات الازدحام لجودة صور أفضل.'
      },
      {
        question: 'هل تصورون أثناء ساعات العمل؟',
        answer: 'نعم، نتعامل مع جميع ساعات العمل. نخطط الجلسات حسب احتياجاتك والسير الطبيعي للمطعم.'
      },
      {
        question: 'كم الوقت لتصوير قائمة طعام كاملة؟',
        answer: 'عادة 4-6 ساعات لقائمة كاملة (50-70 طبق) مع تصوير الأجواء والديكور.'
      },
      {
        question: 'ما الصيغ المقبولة للفيديو الخام؟',
        answer: 'نقبل جميع صيغ الفيديو: MP4, MOV, MKV, AVI. الحد الأدنى للجودة 1080p. الصيغ الأفقية أفضل للريلز.'
      },
      {
        question: 'كم وقت التسليم للريل المحرر؟',
        answer: 'عادة 3-5 أيام عمل. حزم شهرية تحصل على الأولوية والتسليم الأسرع.'
      },
      {
        question: 'هل تقدمون موسيقى وحقوق الاستخدام؟',
        answer: 'نعم، جميع الموسيقى المستخدمة مرخصة واحترافية مع حقوق استخدام كاملة.'
      },
      {
        question: 'من يملك حقوق الصور والفيديوهات؟',
        answer: 'أنت تملك الحقوق التجارية الكاملة للصور والفيديوهات. نحن نحتفظ بحق استخدامها في محفظتنا الاحترافية.'
      },
      {
        question: 'هل يمكن نشر الصور على وسائل التواصل؟',
        answer: 'نعم تماماً، والأفضل! جميع الصور معدة لنشرها على إنستغرام وجميع منصات التواصل.'
      },
      {
        question: 'هل يمكن استخدام الصور تجارياً؟',
        answer: 'نعم، يمكنك استخدام جميع الصور تجارياً في إعلاناتك وحملاتك التسويقية.'
      },
      {
        question: 'هل يمكن تعديل الريل بعد التسليم؟',
        answer: 'نعم، تعديلات بسيطة متاحة مجاناً. تعديلات جوهرية قد تتطلب رسوم إضافية.'
      },
      {
        question: 'متى يمكننا البدء؟',
        answer: 'حسب جدولنا، عادة نبدأ خلال 1-2 أسبوع من التأكيد. لطلبات عاجلة اتصل بنا مباشرة.'
      },
      {
        question: 'هل يمكن الدفع على دفعات؟',
        answer: 'نعم، نقدم خيارات الدفع المرنة: 50% عند التأكيد، 50% عند التسليم.'
      },
      {
        question: 'هل تعملون خارج عمّان؟',
        answer: 'نعم، نغطي جميع مناطق الأردن. رسوم النقل تطبق حسب المسافة.'
      },
      {
        question: 'هل هناك حد أدنى للطلب؟',
        answer: 'لا يوجد حد أدنى. يمكنك طلب جلسة تصوير واحدة أو حزمة شاملة.'
      },
      {
        question: 'كيف أحجز استشارة مجانية؟',
        answer: 'ملء نموذج الاتصال على الموقع أو الواتساب على 962-7-9072-0994. الاستشارة الأولى مجانية بلا التزام.'
      }
    ];

    addSchemaMarkup(createFAQSchema(faqData));
  }, []);

  const faqCategories = [
    {
      title: 'تصوير المنتجات',
      faqs: [
        {
          q: 'كم تكلفة تصوير المنتجات؟',
          a: 'تبدأ أسعارنا من 150 دينار أردني للحزمة الأساسية. تختلف الأسعار حسب عدد المنتجات والتعديلات المطلوبة.'
        },
        {
          q: 'هل يمكن لفريقكم القدوم إلى موقعي؟',
          a: 'نعم، نقدم جلسات تصوير في الموقع (on-location) مع رسوم إضافية لتغطية النقل.'
        },
        {
          q: 'كم الوقت المستغرق للحصول على الصور؟',
          a: 'عادة نسلم الصور خلال 5-7 أيام عمل. تسليم معجل (3 أيام) متاح برسم إضافي.'
        }
      ]
    },
    {
      title: 'تصوير المطاعم والكافيهات',
      faqs: [
        {
          q: 'ما أفضل وقت للتصوير؟',
          a: 'قبل ساعات الذروة (4-6 مساءً) أو الصباح الباكر يعطيان أفضل النتائج.'
        },
        {
          q: 'هل تصورون أثناء ساعات العمل؟',
          a: 'نعم، نتعامل مع جميع ساعات العمل ونخطط حسب احتياجات المطعم.'
        },
        {
          q: 'كم الوقت لتصوير قائمة طعام كاملة؟',
          a: 'عادة 4-6 ساعات لقائمة كاملة (50-70 طبق) مع الأجواء والديكور.'
        }
      ]
    },
    {
      title: 'مونتاج الفيديو والريلز',
      faqs: [
        {
          q: 'ما الصيغ المقبولة للفيديو الخام؟',
          a: 'نقبل MP4, MOV, MKV, AVI والحد الأدنى 1080p. الفيديو الأفقي أفضل للريلز.'
        },
        {
          q: 'كم وقت التسليم؟',
          a: '3-5 أيام عمل. حزم شهرية تحصل على الأولوية والتسليم الأسرع.'
        },
        {
          q: 'هل تقدمون موسيقى وحقوق الاستخدام؟',
          a: 'نعم، جميع الموسيقى مرخصة واحترافية مع حقوق استخدام كاملة.'
        }
      ]
    },
    {
      title: 'الحقوق والملكية',
      faqs: [
        {
          q: 'من يملك حقوق الصور والفيديوهات؟',
          a: 'أنت تملك الحقوق التجارية الكاملة. نحتفظ بحق استخدامها في محفظتنا الاحترافية فقط.'
        },
        {
          q: 'هل يمكن استخدام الصور تجارياً؟',
          a: 'نعم، استخدام كامل تجاري في إعلاناتك وحملاتك التسويقية مسموح.'
        },
        {
          q: 'هل يمكن نشر الصور على وسائل التواصل؟',
          a: 'نعم، والأفضل! جميع الصور معدة للنشر على إنستغرام وجميع المنصات.'
        }
      ]
    },
    {
      title: 'العملية والدفع',
      faqs: [
        {
          q: 'متى يمكننا البدء؟',
          a: 'حسب جدولنا، عادة خلال 1-2 أسبوع. لطلبات عاجلة اتصل بنا مباشرة.'
        },
        {
          q: 'هل يمكن الدفع على دفعات؟',
          a: 'نعم، 50% عند التأكيد و50% عند التسليم.'
        },
        {
          q: 'كيف أحجز استشارة مجانية؟',
          a: 'ملء النموذج على الموقع أو واتساب 962-7-9072-0994. الاستشارة الأولى مجانية.'
        }
      ]
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">الأسئلة الشائعة</h1>
          <p className="text-gray-600 text-lg">
            إجابات على الأسئلة الشائعة حول خدماتنا والأسعار والعملية والحقوق
          </p>
        </section>

        <div className="space-y-12">
          {faqCategories.map((category, idx) => (
            <section key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-3">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIdx) => (
                  <details key={faqIdx} className="cursor-pointer">
                    <summary className="font-semibold text-gray-800 hover:text-primary transition py-3 focus:outline-none">
                      <span className="flex items-center">
                        <span className="text-primary mr-3">Q:</span>
                        {faq.q}
                      </span>
                    </summary>
                    <div className="bg-gray-50 p-4 rounded mt-2 text-gray-700 leading-7 border-r-4 border-primary">
                      <span className="font-semibold text-primary">الإجابة: </span>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">لم تجد إجابة على سؤالك؟</h2>
          <p className="text-white/90 mb-6">
            تواصل معنا مباشرة عبر الواتساب أو ملء نموذج الاتصال
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/962790720994"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
            >
              تحدث معنا على الواتساب
            </a>
            <a
              href="/#contact"
              className="border-2 border-white text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-primary transition"
            >
              ملء نموذج الاتصال
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
