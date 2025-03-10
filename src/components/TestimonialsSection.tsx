
import React, { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-reveal');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United Kingdom",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Our Everest Base Camp trek was nothing short of life-changing. Our guide Raj's knowledge of the area, culture, and mountaineering history added incredible depth to our journey. The way they handled everything from accommodations to altitude sickness made us feel safe and well-cared for throughout.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "United States",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The Annapurna Circuit exceeded all my expectations. What sets Trekfinity apart is their attention to detail and the personal connections they've formed with locals along the routes. We had authentic experiences that felt far from the typical tourist path, all while enjoying excellent support from our guides.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Australia",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "As a solo female traveler, I was initially nervous about trekking in Nepal. Trekfinity made me feel secure and welcome from day one. My guide Pema was knowledgeable, professional, and became a friend along the way. The Langtang Valley trek was perfectly paced and absolutely stunning.",
      rating: 5
    },
    {
      id: 4,
      name: "Thomas Weber",
      location: "Germany",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Having trekked with several companies around the world, I can confidently say that Trekfinity offers the best combination of professionalism, local expertise, and value. The Manaslu Circuit was challenging but incredibly rewarding, and our guide's deep connection to the region made it special.",
      rating: 5
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block animate-reveal py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-mountain-100 text-mountain-800 rounded-full">
            Client Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-reveal">Memories That Last a Lifetime</h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-reveal">
            Don't just take our word for it. Hear from travelers who have experienced 
            the magic of Nepal through our carefully crafted adventures.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:-left-12 p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-primary hover:shadow-xl transition-premium focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:-right-12 p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-primary hover:shadow-xl transition-premium focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{ 
                  transitionDelay: index === activeIndex ? '200ms' : '0ms',
                  pointerEvents: index === activeIndex ? 'auto' : 'none'
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 overflow-hidden">
                    <div className="aspect-square h-full w-full">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center">
                    <div className="mb-4 text-primary/80">
                      <Quote className="h-10 w-10" />
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
