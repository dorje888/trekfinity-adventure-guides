import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedTreks from '@/components/FeaturedTreks';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedTreks />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      {/* Back to top button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full z-40 shadow-lg"
        asChild
      >
        <a href="#" aria-label="Back to top">
          <ArrowUp className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

export default Index;
