import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  // Dev cache buster so changes reflect immediately during development
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  // Revert to the shared homepage hero image
  const heroUploaded = `/lovable-uploads/image.png${bust}`;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Minimal Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat animate-kenburns-slow"
        style={{ 
          backgroundImage: `url(${heroUploaded})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#0a0a0a',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full container-padding">
        <div className="max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-white/90 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              Discover Nepal's Wonders
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in animation-delay-200">
            <h1 className="text-hero text-white font-bold">
              Extraordinary
              <span className="block">Himalayan Adventures</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Experience the breathtaking beauty of Nepal with our expert-guided treks 
              through the world's most majestic mountains.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 h-12 px-8 text-base font-medium">
              <a href="#treks" className="flex items-center gap-2">
                Explore Treks
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 h-12 px-8 text-base font-medium bg-transparent"
            >
              <a href="#about" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Story
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-400">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
