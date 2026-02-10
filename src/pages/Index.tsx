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

      {/* Ready for your adventure CTA */}
      <section className="relative my-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-[url('/mountain')] bg-cover bg-center opacity-25" aria-hidden></div>
            <div className="relative bg-[#2F8F4E]/90 text-white rounded-2xl px-6 py-10 sm:px-10 sm:py-12 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Your Adventure Awaits!</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">Book your stay now and create memories that will last a lifetime.</p>
              <a href="/registration" className="inline-block bg-white text-[#2F8F4E] font-semibold px-6 md:px-8 py-3 rounded-xl shadow hover:shadow-md transition">Book Your Adventure Now</a>
            </div>
          </div>
        </div>
      </section>

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
