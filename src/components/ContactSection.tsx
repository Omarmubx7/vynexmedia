import { useState } from 'react';
import { ArrowRight, MessageCircle, Loader2, AlertCircle } from 'lucide-react';
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

  const inputBase = "w-full bg-transparent border-b border-black/10 py-4 text-black text-right focus:outline-none focus:border-primary transition-all text-lg font-medium";
  const inputError = "border-red-500 focus:border-red-500";

  return (
    <section id="contact" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dots opacity-[0.2] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-start">

            {/* Left side: Editorial Typography & Info */}
            <div className="lg:sticky lg:top-40">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold rounded-full mb-8">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-black mb-12 uppercase italic leading-[0.8]">
                Start a <br /> <span className="text-primary not-italic">Project.</span>
              </h2>

              <div className="space-y-12 mb-16">
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4">Email Us</h4>
                  <p className="text-3xl font-bold tracking-tighter hover:text-primary transition-colors cursor-pointer">
                    hello@vynexmedia.com
                  </p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4">Call Us</h4>
                  <p className="text-3xl font-bold tracking-tighter hover:text-primary transition-colors cursor-pointer">
                    +962 790 720 994
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/962790720994"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <MessageCircle size={28} />
                </div>
                <div className="text-right">
                  <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-black mb-1">Quick Chat</h4>
                  <p className="text-2xl font-bold tracking-tighter">Click to open WhatsApp</p>
                </div>
              </a>
            </div>

            {/* Right side: Minimal Form */}
            <div className="bg-white p-2">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                  {/* Name */}
                  <div className="relative group">
                    <input
                      type="text" id="name" name="name" value={formData.name}
                      onChange={handleChange} required
                      className={`${inputBase} ${errors.name ? inputError : ""}`}
                      placeholder="اسمك الكريم"
                    />
                    <label className="absolute -top-4 right-0 text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Name</label>
                  </div>

                  {/* WhatsApp */}
                  <div className="relative group">
                    <input
                      type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp}
                      onChange={handleChange} required
                      className={`${inputBase} ${errors.whatsapp ? inputError : ""}`}
                      placeholder="+962 7XX XXX XXX"
                    />
                    <label className="absolute -top-4 right-0 text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">WhatsApp</label>
                  </div>

                  {/* Project Type */}
                  <div className="relative group">
                    <select
                      id="projectType" name="projectType" value={formData.projectType}
                      onChange={handleChange} required
                      className={inputBase}
                    >
                      <option value="">اختر نوع المشروع</option>
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                    <label className="absolute -top-4 right-0 text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Project Type</label>
                  </div>

                  {/* Budget */}
                  <div className="relative group">
                    <input
                      type="text" id="budget" name="budget" value={formData.budget}
                      onChange={handleChange}
                      className={inputBase}
                      placeholder="مثال: 100-200"
                    />
                    <label className="absolute -top-4 right-0 text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Budget (Approx)</label>
                  </div>

                  {/* Social/Link */}
                  <div className="relative group md:col-span-2">
                    <input
                      type="text" id="instagram" name="instagram" value={formData.instagram}
                      onChange={handleChange}
                      className={inputBase}
                      placeholder="@username / link"
                    />
                    <label className="absolute -top-4 right-0 text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Instagram / Web Link</label>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    id="message" name="message" value={formData.message}
                    onChange={handleChange} rows={1}
                    className={`${inputBase} resize-none overflow-hidden h-auto`}
                    placeholder="Tell us about your project..."
                    onInput={(e) => {
                      const element = e.target as HTMLTextAreaElement;
                      element.style.height = 'auto';
                      element.style.height = element.scrollHeight + 'px';
                    }}
                  />
                  <label className="absolute -top-4 right-0 text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Project Details</label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full h-20 bg-black text-white flex items-center justify-center gap-4 text-xl font-bold uppercase tracking-widest hover:bg-primary transition-all duration-500 disabled:opacity-50 group rounded-full overflow-hidden relative"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-8 h-8 animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
