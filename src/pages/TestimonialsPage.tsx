import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Trekkers' Experiences</h1>
            <p className="text-lg text-gray-600">
              Hear from adventurers who explored Nepal with Calm Trek’s expert local guides. Leave your own review below.
            </p>
          </div>
        </div>
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
