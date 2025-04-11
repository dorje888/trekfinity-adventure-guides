
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { CircuitBoard, MapPinned, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <CircuitBoard className="h-8 w-8 text-nebula-500 animate-pulse-subtle" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
              <span className="neon-text">Contact Us</span>
              <div className="absolute -top-3 -right-6 text-cosmos-500">
                <Sparkles className="w-6 h-6 animate-pulse-subtle" />
              </div>
            </h1>
            <p className="text-lg text-gray-600 relative">
              Reach out to our team to plan your next adventure in the Himalayas. We're here to answer any questions and help craft your perfect trek.
              <div className="absolute -bottom-2 right-10">
                <MapPinned className="w-5 h-5 text-aurora-500" />
              </div>
            </p>
          </div>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
