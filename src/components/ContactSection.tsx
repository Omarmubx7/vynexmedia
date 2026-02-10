import { useState } from 'react';
import { Send, MessageCircle, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const projectTypes = [
  { value: 'products', label: 'منتجات' },
  { value: 'restaurant', label: 'مطعم / كافيه' },
  { value: 'social-content', label: 'محتوى سوشيال ميديا' },
  { value: 'other', label: 'غيره' },
];

interface FormErrors {
  name?: string;
  projectType?: string;
  whatsapp?: string;
  message?: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    projectType: '',
    whatsapp: '',
    budget: '',
    instagram: '',
    message: '',
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    }
    if (/\d/.test(formData.name)) {
      newErrors.name = 'الاسم لا يمكن أن يحتوي على أرقام';
    }
    if (!formData.projectType) {
      newErrors.projectType = 'اختر نوع المشروع';
    }
    const whatsappRegex = /^(\+?962|0)?7[0-9]{8}$/;
    const cleanWhatsapp = formData.whatsapp.replace(/[\s-]/g, '');
    if (!whatsappRegex.test(cleanWhatsapp)) {
      newErrors.whatsapp = 'أدخل رقم واتساب صحيح (مثل: 0790000000 أو +962790000000)';
    }
    if (formData.message.length > 1000) {
      newErrors.message = 'الرسالة لا يمكن أن تتجاوز 1000 حرف';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      toast.error('يرجى تصحيح الأخطاء في النموذج');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        full_name: formData.name.trim(),
        project_type: formData.projectType,
        whatsapp_number: formData.whatsapp.replace(/[\s-]/g, ''),
        message: [
          formData.message.trim(),
          formData.budget ? `الميزانية: ${formData.budget}` : '',
          formData.instagram ? `إنستغرام/موقع: ${formData.instagram}` : '',
        ].filter(Boolean).join('\n') || null,
      });

      if (error) throw error;

      toast.success('شكراً! سنتواصل معك قريباً.');
      setFormData({ name: '', projectType: '', whatsapp: '', budget: '', instagram: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('حدث خطأ، يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputBase = "w-full bg-white border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 transition-all text-sm";
  const inputValid = "border-border focus:ring-primary/40 focus:border-primary";
  const inputError = "border-red-500 focus:ring-red-500/50";

  return (
    <section id="contact" className="py-[72px] md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="section-title text-foreground mb-3">جاهز نشتغل على محتواك؟</h2>
            <p className="text-muted-foreground text-base">
              عبّي النموذج وراح نرجع لك بأنسب حل لمشروعك
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-1.5 text-right text-sm">
                  الاسم
                </label>
                <input
                  type="text" id="name" name="name" value={formData.name}
                  onChange={handleChange} required
                  className={`${inputBase} ${errors.name ? inputError : inputValid}`}
                  placeholder="اسمك الكريم"
                />
                {errors.name && (
                  <div className="flex items-center gap-1 mt-1.5 text-red-500 text-xs">
                    <AlertCircle className="w-3.5 h-3.5" /><span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-foreground font-medium mb-1.5 text-right text-sm">
                  نوع المشروع
                </label>
                <select
                  id="projectType" name="projectType" value={formData.projectType}
                  onChange={handleChange} required
                  className={`${inputBase} ${errors.projectType ? inputError : inputValid}`}
                >
                  <option value="">اختر نوع المشروع</option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
                {errors.projectType && (
                  <div className="flex items-center gap-1 mt-1.5 text-red-500 text-xs">
                    <AlertCircle className="w-3.5 h-3.5" /><span>{errors.projectType}</span>
                  </div>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-foreground font-medium mb-1.5 text-right text-sm">
                  رقم الواتساب
                </label>
                <input
                  type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp}
                  onChange={handleChange} required
                  className={`${inputBase} ${errors.whatsapp ? inputError : inputValid}`}
                  placeholder="+962 7XX XXX XXX"
                />
                {errors.whatsapp && (
                  <div className="flex items-center gap-1 mt-1.5 text-red-500 text-xs">
                    <AlertCircle className="w-3.5 h-3.5" /><span>{errors.whatsapp}</span>
                  </div>
                )}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-foreground font-medium mb-1.5 text-right text-sm">
                  ميزانيتك التقريبية
                </label>
                <input
                  type="text" id="budget" name="budget" value={formData.budget}
                  onChange={handleChange}
                  className={`${inputBase} ${inputValid}`}
                  placeholder="مثال: 100-200 دينار"
                />
              </div>

              {/* Instagram/Website */}
              <div className="md:col-span-2">
                <label htmlFor="instagram" className="block text-foreground font-medium mb-1.5 text-right text-sm">
                  رابط إنستغرام أو موقعك (اختياري)
                </label>
                <input
                  type="text" id="instagram" name="instagram" value={formData.instagram}
                  onChange={handleChange}
                  className={`${inputBase} ${inputValid}`}
                  placeholder="@username أو رابط الموقع"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="message" className="block text-foreground font-medium text-right flex-1 text-sm">
                  رسالة قصيرة عن اللي تحتاجه
                </label>
                <span className="text-xs text-muted-foreground ml-3">
                  {formData.message.length}/1000
                </span>
              </div>
              <textarea
                id="message" name="message" value={formData.message}
                onChange={handleChange} rows={3} maxLength={1000}
                className={`${inputBase} resize-none ${errors.message ? inputError : inputValid}`}
                placeholder="أخبرنا عن مشروعك واللي تبحث عنه..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={isSubmitting}
              className="btn-primary w-full text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              {isSubmitting ? 'جاري الإرسال...' : 'أرسل طلبك'}
            </button>

            <p className="text-center text-muted-foreground text-xs mt-3">
              نرجع لك خلال 24 ساعة على واتساب برسالة صوتية نشرح فيها أنسب باقة لك 🎙️
            </p>
          </form>

          {/* WhatsApp Direct */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-3">أو تواصل معنا مباشرة</p>
            <a
              href="https://wa.me/962790720994?text=%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A3%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%B9%D9%86%20%D8%AA%D8%B5%D9%88%D9%8A%D8%B1%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-1 text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>حابب أستفسر عن تصوير لمشروعي</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
