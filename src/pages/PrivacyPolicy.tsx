import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article>
          <h1 className="text-4xl font-bold mb-4 text-primary">سياسة الخصوصية</h1>
          <p className="text-gray-600 mb-8">آخر تحديث: 24 يناير 2026</p>

          <section className="prose max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">مقدمة</h2>
              <p className="text-gray-700 leading-7">
                ترحب Vynex Media ("الشركة"، "نحن"، "لنا") بك في موقعنا الإلكتروني (الموقع). نحن ملتزمون بحماية خصوصيتك وضمان شفافية ممارساتنا المتعلقة بجمع البيانات.
              </p>
              <p className="text-gray-700 leading-7 mt-4">
                توضح سياسة الخصوصية هذه كيف نجمع ونستخدم ونحمي المعلومات الشخصية الخاصة بك عند استخدامك لموقعنا الإلكتروني وخدماتنا.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">المعلومات التي نجمعها</h2>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800">1. المعلومات المقدمة مباشرة:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>الاسم الكامل</li>
                <li>عنوان البريد الإلكتروني</li>
                <li>رقم الهاتف / واتساب</li>
                <li>نوع الخدمة المطلوبة</li>
                <li>رسالة الاستفسار أو الطلب</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-gray-800 mt-6">2. المعلومات المجمعة تلقائياً:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>عنوان IP الخاص بك</li>
                <li>نوع المتصفح والجهاز</li>
                <li>نظام التشغيل</li>
                <li>صفحات الويب المزارة والوقت المستغرق</li>
                <li>الروابط المنقورة</li>
                <li>بيانات التحليلات والحركة على الموقع</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">كيفية استخدام معلوماتك</h2>
              <p className="text-gray-700 leading-7 mb-4">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>الرد على استفساراتك وطلباتك</li>
                <li>تقديم الخدمات التي طلبتها</li>
                <li>إرسال تحديثات حول خدماتنا (مع موافقتك)</li>
                <li>تحسين جودة موقعنا وخدماتنا</li>
                <li>تحليل استخدام الموقع والاتجاهات</li>
                <li>الامتثال للقوانين والالتزامات القانونية</li>
                <li>منع الاحتيال والأنشطة غير القانونية</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">حماية بيانات الموقع</h2>
              <p className="text-gray-700 leading-7 mb-4">نتخذ إجراءات أمان صارمة لحماية معلوماتك:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>استخدام تشفير HTTPS على جميع الاتصالات</li>
                <li>تخزين آمن للبيانات مع ضوابط وصول محدودة</li>
                <li>جدران حماية (Firewall) وحماية من الهجمات</li>
                <li>فحوصات أمان منتظمة</li>
                <li>نسخ احتياطية آمنة للبيانات</li>
              </ul>
              <p className="text-gray-700 leading-7 mt-4">
                <strong>ملاحظة مهمة:</strong> بينما نبذل كل جهد لحماية بياناتك، لا توجد طريقة نقل عبر الإنترنت آمنة تماماً. لا يمكننا ضمان الأمان المطلق.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">مشاركة البيانات</h2>
              <p className="text-gray-700 leading-7">
                نحن <strong>لا نشارك</strong> معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نشارك البيانات فقط:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                <li>مع مقدمي الخدمات الموثوقين (استضافة، تحليلات) لتحسين الخدمة</li>
                <li>عند المطالبة القانونية من السلطات المختصة</li>
                <li>لحماية حقوقنا والالتزامات القانونية</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-gray-700 leading-7">
                يستخدم موقعنا ملفات تعريف ارتباط لتحسين الأداء والتحليلات. تتضمن:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                <li><strong>ملفات تحليلية:</strong> لفهم كيفية استخدام الموقع</li>
                <li><strong>ملفات ضرورية:</strong> لضمان عمل الموقع بشكل صحيح</li>
                <li><strong>ملفات التفضيلات:</strong> لتذكر تفضيلاتك</li>
              </ul>
              <p className="text-gray-700 leading-7 mt-4">
                يمكنك التحكم في ملفات تعريف الارتباط عن طريق إعدادات متصفحك. حظر جميع ملفات تعريف الارتباط قد يؤثر على وظائف الموقع.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">حقوقك الخصوصية</h2>
              <p className="text-gray-700 leading-7 mb-4">لديك الحق في:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>الوصول:</strong> طلب نسخة من بياناتك الشخصية</li>
                <li><strong>التصحيح:</strong> تصحيح أو تحديث معلوماتك</li>
                <li><strong>الحذف:</strong> طلب حذف بياناتك (مع بعض الاستثناءات)</li>
                <li><strong>الاعتراض:</strong> الاعتراض على معالجة بياناتك</li>
                <li><strong>الإلغاء:</strong> الاشتراك في رسائل تسويقية في أي وقت</li>
              </ul>
              <p className="text-gray-700 leading-7 mt-4">
                لممارسة أي من هذه الحقوق، تواصل معنا على <a href="mailto:privacy@vynexmedia.com" className="text-primary hover:underline">privacy@vynexmedia.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">الروابط الخارجية</h2>
              <p className="text-gray-700 leading-7">
                قد يحتوي موقعنا على روابط لمواقع خارجية. نحن غير مسؤولين عن سياسات الخصوصية لتلك المواقع. ننصحك بمراجعة سياسات الخصوصية لأي موقع خارجي تزوره.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">تغييرات السياسة</h2>
              <p className="text-gray-700 leading-7">
                قد نحدث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث". استخدامك المستمر للموقع يعني قبولك للتغييرات.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">الاتصال بنا</h2>
              <p className="text-gray-700 leading-7 mb-4">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ممارساتنا المتعلقة بالبيانات:
              </p>
              <ul className="list-none space-y-3">
                <li className="text-gray-700">
                  <strong>البريد الإلكتروني:</strong>{' '}
                  <a href="mailto:privacy@vynexmedia.com" className="text-primary hover:underline">
                    privacy@vynexmedia.com
                  </a>
                </li>
                <li className="text-gray-700">
                  <strong>الواتساب:</strong>{' '}
                  <a href="https://wa.me/962790720994" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    +962 7 9072 0994
                  </a>
                </li>
                <li className="text-gray-700">
                  <strong>الموقع:</strong> Vynex Media, Amman, Jordan
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-900 text-sm">
                <strong>الامتثال للقوانين:</strong> هذه السياسة متوافقة مع قوانين الخصوصية الأردنية والمعايير الدولية (GDPR).
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
