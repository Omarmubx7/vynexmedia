import { useState } from 'react';
import { ArrowRight, MessageCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import MagneticButton from './ui/MagneticButton';

const projectTypes = [
  { value: 'products', label: 'Products' },
  { value: 'restaurant', label: 'Gastronomy' },
  { value: 'social-content', label: 'Social Narrative' },
  { value: 'other', label: 'Other' },
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
      newErrors.name = 'Name must be at least 3 characters';
    }
    if (!formData.projectType) {
      newErrors.projectType = 'Select project type';
    }
    const whatsappRegex = /^(\+?962|0)?7[0-9]{8}$/;
    const cleanWhatsapp = formData.whatsapp.replace(/[\s-]/g, '');
    if (!whatsappRegex.test(cleanWhatsapp)) {
      newErrors.whatsapp = 'Enter a valid WhatsApp number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
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
          formData.budget ? `Budget: ${formData.budget}` : '',
          formData.instagram ? `Ref: ${formData.instagram}` : '',
        ].filter(Boolean).join('\n') || null,
      });

      if (error) throw error;

      toast.success('Inquiry received. We will contact you shortly.');
      setFormData({ name: '', projectType: '', whatsapp: '', budget: '', instagram: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputBase = "w-full bg-transparent border-b border-[var(--foreground)]/10 py-5 text-[var(--foreground)] placeholder:text-[var(--foreground)]/20 focus:outline-none focus:border-primary transition-all text-xl font-bold tracking-tight";
  const inputError = "border-red-500 focus:border-red-500";

  return (
    <section id="contact" className="py-24 md:py-48 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.2] z-0" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-dots opacity-[0.1] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-start">

            {/* Left side: Editorial Typography & Info */}
            <div className="lg:sticky lg:top-48">
              <h2 className="section-title mb-16 italic">
                Initiate<br />Narrative.
              </h2>

              <div className="space-y-16 mb-20">
                <div className="group cursor-pointer">
                  <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-[var(--foreground)]/20 mb-4 group-hover:text-primary transition-colors">Direct Inquiry</h4>
                  <p className="text-4xl font-black tracking-extratight uppercase text-[var(--foreground)]">
                    hello@vynex.io
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-[var(--foreground)]/20 mb-4 group-hover:text-primary transition-colors">Global Link</h4>
                  <p className="text-4xl font-black tracking-extratight uppercase text-[var(--foreground)]">
                    +962 79 072 0994
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <MagneticButton strength={30}>
                <a
                  href="https://wa.me/962790720994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-8 group"
                >
                  <div className="w-20 h-20 rounded-full border border-[var(--foreground)]/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-700">
                    <MessageCircle size={32} className="text-[var(--foreground)] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black tracking-[0.5em] uppercase text-[var(--foreground)]/20 mb-2">Instant Channel</h4>
                    <p className="text-3xl font-black tracking-extratight uppercase italic text-[var(--foreground)]">WhatsApp Concierge</p>
                  </div>
                </a>
              </MagneticButton>
            </div>

            {/* Right side: Minimal Form */}
            <div className="bg-[var(--foreground)]/5 backdrop-blur-xl border border-[var(--foreground)]/5 p-12 md:p-20 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                  {/* Name */}
                  <div className="relative group">
                    <input
                      type="text" id="name" name="name" value={formData.name}
                      onChange={handleChange} required
                      className={`${inputBase} ${errors.name ? inputError : ""}`}
                      placeholder="Your Full Name"
                      aria-label="Full Name"
                      aria-invalid={!!errors.name}
                    />
                    <label className="absolute -top-5 left-0 text-[9px] font-black tracking-[0.3em] uppercase text-[var(--foreground)]/40 group-focus-within:text-primary transition-colors">Full Name</label>
                  </div>

                  {/* WhatsApp */}
                  <div className="relative group">
                    <input
                      type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp}
                      onChange={handleChange} required
                      className={`${inputBase} ${errors.whatsapp ? inputError : ""}`}
                      placeholder="+962 79 072 0994"
                      aria-label="WhatsApp Number"
                      aria-invalid={!!errors.whatsapp}
                    />
                    <label className="absolute -top-5 left-0 text-[9px] font-black tracking-[0.3em] uppercase text-[var(--foreground)]/40 group-focus-within:text-primary transition-colors">Digital Contact</label>
                  </div>

                  {/* Project Type */}
                  <div className="relative group">
                    <select
                      id="projectType" name="projectType" value={formData.projectType}
                      onChange={handleChange} required
                      className={inputBase}
                      aria-label="Selection of Expertise"
                      aria-invalid={!!errors.projectType}
                    >
                      <option value="" disabled className="bg-black">Select Expertise</option>
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-black">{type.label}</option>
                      ))}
                    </select>
                    <label className="absolute -top-5 left-0 text-[9px] font-black tracking-[0.3em] uppercase text-[var(--foreground)]/40 group-focus-within:text-primary transition-colors">Inquiry Type</label>
                  </div>

                  {/* Budget */}
                  <div className="relative group">
                    <input
                      type="text" id="budget" name="budget" value={formData.budget}
                      onChange={handleChange}
                      className={inputBase}
                      placeholder="e.g. 500 - 1000 JOD"
                      aria-label="Estimated Scale in JOD"
                    />
                    <label className="absolute -top-5 left-0 text-[9px] font-black tracking-[0.3em] uppercase text-[var(--foreground)]/40 group-focus-within:text-primary transition-colors">Resource Tier (JOD)</label>
                  </div>

                  {/* Social/Link */}
                  <div className="relative group md:col-span-2">
                    <input
                      type="text" id="instagram" name="instagram" value={formData.instagram}
                      onChange={handleChange}
                      className={inputBase}
                      placeholder="@handle or website.com"
                    />
                    <label className="absolute -top-5 left-0 text-[9px] font-black tracking-[0.3em] uppercase text-[var(--foreground)]/20 group-focus-within:text-primary transition-colors">Visual Reference</label>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    id="message" name="message" value={formData.message}
                    onChange={handleChange} rows={1}
                    className={`${inputBase} resize-none overflow-hidden h-auto min-h-[60px]`}
                    placeholder="Briefly describe your vision..."
                    onInput={(e) => {
                      const element = e.target as HTMLTextAreaElement;
                      element.style.height = 'auto';
                      element.style.height = element.scrollHeight + 'px';
                    }}
                  />
                  <label className="absolute -top-5 left-0 text-[9px] font-black tracking-[0.3em] uppercase text-[var(--foreground)]/20 group-focus-within:text-primary transition-colors">Vision Statement</label>
                </div>

                {/* Submit Button */}
                <MagneticButton strength={20} className="w-full">
                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full h-24 bg-black text-[var(--foreground)] flex items-center justify-center gap-8 text-[13px] font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-black transition-all duration-700 disabled:opacity-50 group overflow-hidden relative"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-8 h-8 animate-spin" />
                    ) : (
                      <>
                        <span className="relative z-10">Initiate Collaboration</span>
                        <ArrowRight size={20} className="relative z-10 group-hover:translate-x-4 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </>
                    )}
                  </button>
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
