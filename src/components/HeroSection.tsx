
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Enhanced parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current || !contentRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      // Subtle image movement
      imageRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      
      // Even more subtle content movement
      contentRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden parallax"
    >
      {/* Simplified decorative elements - just subtle gradient accents */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px] top-[-100px] left-[-100px] opacity-40"></div>
      <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] bottom-[-50px] right-[-50px] opacity-30"></div>
      
      {/* Background Image with simplified overlay */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-200 ease-out scale-110 parallax-layer"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80)',
          zIndex: -1 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>
      
      {/* Content with minimalist design */}
      <div 
        ref={contentRef}
        className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 transition-transform duration-200 ease-out parallax-layer"
      >
        <div className="max-w-4xl animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center py-1.5 px-4 mb-6 text-xs font-medium tracking-wider uppercase bg-white/5 backdrop-blur-md text-white rounded-full border border-white/10">
            Experience Nepal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Discover the Extraordinary <br /> Beauty of the Himalayas
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Embark on unforgettable journeys through Nepal's majestic mountains with our expert guides.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#treks" 
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Treks
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white rounded-md transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
};

export default HeroSection;
