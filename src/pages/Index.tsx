
import React, { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to ensure smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
          <div className="mt-4 text-gray-600 font-medium">Loading Adventure...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedTreks />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      {/* Back to top button with enhanced visibility */}
      <Button
        variant="taskbar"
        size="icon"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full z-40 bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg border border-indigo-400/30"
        asChild
      >
        <a 
          href="#" 
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

export default Index;
