import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyKopdesa from '@/components/WhyKopdesa';
import ProgramSection from '@/components/ProgramSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import LeadMagnet from '@/components/LeadMagnet';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in and slide-in elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <WhyKopdesa />
        <ProgramSection />
        <HowItWorks />
        <TestimonialsSection />
        <LeadMagnet />
        <FAQSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
