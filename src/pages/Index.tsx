import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import { addSchemaMarkup, vynexLocalBusinessSchema, vynexOrganizationSchema, createBreadcrumbSchema } from '@/lib/seo';

const Index = () => {
  useEffect(() => {
    // Add LocalBusiness schema for local SEO
    addSchemaMarkup(vynexLocalBusinessSchema);
    // Add Organization schema
    addSchemaMarkup(vynexOrganizationSchema);
    // Add Breadcrumb schema
    addSchemaMarkup(createBreadcrumbSchema([
      { name: 'الرئيسية', url: 'https://vynexmedia.com/' },
      { name: 'Home', url: 'https://vynexmedia.com/en/' }
    ]));
  }, []);
  return (
    <div dir="rtl" className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
