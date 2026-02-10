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

  // Validation functions
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation: 3+ characters, no numbers
    if (formData.name.trim().length < 3) {
      newErrors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    }
    if (/\d/.test(formData.name)) {
      newErrors.name = 'الاسم لا يمكن أن يحتوي على أرقام';
    }

    // Project type required
    if (!formData.projectType) {
      newErrors.projectType = 'اختر نوع المشروع';
    }

    // WhatsApp validation: Jordan format
    const whatsappRegex = /^(\+?962|0)?7[0-9]{8}$/;
    const cleanWhatsapp = formData.whatsapp.replace(/[\s-]/g, '');
    if (!whatsappRegex.test(cleanWhatsapp)) {
      newErrors.whatsapp = 'أدخل رقم واتساب صحيح (مثل: 0790000000 أو +962790000000)';
    }

    // Message validation: max 1000 chars
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
      setFormData({
        name: '',
        projectType: '',
        whatsapp: '',
        budget: '',
        instagram: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('حدث خطأ، يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground mb-4">جاهز نشتغل على محتواك؟</h2>
            <p className="text-muted-foreground text-lg">
              عبّي النموذج وراح نرجع لك بأنسب حل لمشروعك
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2 text-right">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full bg-background border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-border focus:ring-primary/50 focus:border-primary'}`}
                  placeholder="اسمك الكريم"
                />
                {errors.name && (
                  <div id="name-error" className="flex items-center gap-1 mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-foreground font-medium mb-2 text-right">
                  نوع المشروع
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.projectType}
                  aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                  className={`w-full bg-background border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 transition-all ${errors.projectType ? 'border-red-500 focus:ring-red-500/50' : 'border-border focus:ring-primary/50 focus:border-primary'}`}
                >
                  <option value="">اختر نوع المشروع</option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <div id="projectType-error" className="flex items-center gap-1 mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.projectType}</span>
                  </div>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-foreground font-medium mb-2 text-right">
                  رقم الواتساب
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                  className={`w-full bg-background border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 transition-all ${errors.whatsapp ? 'border-red-500 focus:ring-red-500/50' : 'border-border focus:ring-primary/50 focus:border-primary'}`}
                  placeholder="+962 7XX XXX XXX"
                />
                {errors.whatsapp && (
                  <div id="whatsapp-error" className="flex items-center gap-1 mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.whatsapp}</span>
                  </div>
                )}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-foreground font-medium mb-2 text-right">
                  ميزانيتك التقريبية
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="مثال: 100-200 دينار"
                />
              </div>

              {/* Instagram / Website */}
              <div className="md:col-span-2">
                <label htmlFor="instagram" className="block text-foreground font-medium mb-2 text-right">
                  رابط إنستغرام أو موقعك (اختياري)
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="@username أو رابط الموقع"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="message" className="block text-foreground font-medium text-right flex-1">
                  رسالة قصيرة عن اللي تحتاجه
                </label>
                <span className="text-sm text-muted-foreground ml-4">
                  {formData.message.length}/1000
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={1000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full bg-background border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-border focus:ring-primary/50 focus:border-primary'}`}
                placeholder="أخبرنا عن مشروعك واللي تبحث عنه..."
              />
              {errors.message && (
                <div id="message-error" className="flex items-center gap-1 mt-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.message}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isSubmitting ? 'جاري الإرسال...' : 'أرسل طلبك'}
            </button>

            {/* Note */}
            <p className="text-center text-muted-foreground text-sm mt-4">
              نرجع لك خلال 24 ساعة على واتساب برسالة صوتية نشرح فيها أنسب باقة لك 🎙️
            </p>
          </form>

          {/* WhatsApp Direct CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">أو تواصل معنا مباشرة</p>
            <a
              href="https://wa.me/962790720994?text=%D8%AD%D8%A7%D8%A8%D8%A8%20%D8%A3%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%B9%D9%86%20%D8%AA%D8%B5%D9%88%D9%8A%D8%B1%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>حابب أستفسر عن تصوير لمشروعي</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href="https://instagram.com/vynexmedia.jo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-medium">إنستغرام</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
