
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      imageRef.current.style.transform = `translate(${x * -25}px, ${y * -25}px)`;
      
      // Even more subtle content movement
      contentRef.current.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
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
      {/* Decorative elements */}
      <div className="circle-decoration w-[500px] h-[500px] top-[-100px] left-[-100px]"></div>
      <div className="circle-decoration w-[300px] h-[300px] bottom-[-50px] right-[-50px]"></div>
      
      {/* Background Image */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-200 ease-out scale-110 parallax-layer"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80)',
          zIndex: -1 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>
      
      {/* Content */}
      <div 
        ref={contentRef}
        className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 transition-transform duration-200 ease-out parallax-layer"
      >
        <div className="max-w-4xl animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center py-1.5 px-4 mb-6 text-xs font-medium tracking-wider uppercase bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20">
            <Sparkles className="w-3.5 h-3.5 mr-2 text-indigo-300 animate-soft-pulse" />
            Experience Nepal like never before
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Discover the Extraordinary <br /> Beauty of the Himalayas
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            Embark on unforgettable journeys through Nepal's majestic mountains with our expert guides who bring over 5 years of experience to every adventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#treks" 
              className="btn-futuristic text-white flex items-center gap-2 group"
            >
              Explore Treks
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md rounded-lg font-medium transition-premium shadow-subtle"
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
