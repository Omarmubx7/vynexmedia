import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const projectTypes = [
  { value: 'products', label: 'منتجات' },
  { value: 'restaurant', label: 'مطعم / كافيه' },
  { value: 'online-store', label: 'متجر أونلاين' },
  { value: 'other', label: 'غيره' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    projectType: '',
    socialLink: '',
    whatsapp: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('شكراً! سنتواصل معك قريباً.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground mb-4">جاهز نشتغل على محتواك؟</h2>
            <p className="text-muted-foreground text-lg">
              عبّي النموذج الجاي أو تواصل معنا مباشرة على الواتساب علشان نرجع لك بأفضل حل يناسب مشروعك.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2 text-right">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="اسمك الكريم"
                />
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
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">اختر نوع المشروع</option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Social Link */}
              <div>
                <label htmlFor="socialLink" className="block text-foreground font-medium mb-2 text-right">
                  رابط حساب إنستغرام أو تيك توك
                </label>
                <input
                  type="url"
                  id="socialLink"
                  name="socialLink"
                  value={formData.socialLink}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="https://instagram.com/..."
                />
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
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="+962 7XX XXX XXX"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-foreground font-medium mb-2 text-right">
                رسالة قصيرة عن اللي تحتاجه
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="أخبرنا عن مشروعك واللي تبحث عنه..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full text-lg flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              ابدأ مع Vynex Media
            </button>
          </form>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://wa.me/962XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">واتساب</span>
            </a>
            <a
              href="https://instagram.com/vynexmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
