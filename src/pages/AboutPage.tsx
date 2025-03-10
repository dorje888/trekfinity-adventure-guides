
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About TrekTitan</h1>
            <p className="text-lg text-gray-600">
              Your premier adventure partner in the Himalayas, providing extraordinary trekking experiences with expert local guides.
            </p>
          </div>
        </div>
        <AboutSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="TrekTitan Team" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At TrekTitan, we believe that trekking in the Himalayas should be more than just a physical journey. Our mission is to provide transformative experiences that connect travelers with the magnificent landscapes, rich cultures, and incredible people of Nepal.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We are committed to responsible and sustainable tourism practices that benefit local communities while preserving the natural environment for future generations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="p-5 bg-white rounded-lg shadow-subtle flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Experienced Guides</h3>
                    <p className="text-gray-600">Our guides have 5+ years of professional experience in the Himalayas.</p>
                  </div>
                  <div className="p-5 bg-white rounded-lg shadow-subtle flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Safety Focus</h3>
                    <p className="text-gray-600">Safety is our top priority on every trek and expedition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
