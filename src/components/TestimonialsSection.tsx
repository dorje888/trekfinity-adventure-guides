import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United Kingdom",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Our Everest Base Camp trek was nothing short of life-changing. Our guide's knowledge of the area, culture, and mountaineering history added incredible depth to our journey.",
      rating: 5,
      trek: "Everest Base Camp"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "United States",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The Annapurna Circuit exceeded all my expectations. What sets TrekFinity apart is their attention to detail and the personal connections they've formed with locals.",
      rating: 5,
      trek: "Annapurna Circuit"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Australia",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "As a solo female traveler, TrekFinity made me feel secure and welcome from day one. The Langtang Valley trek was perfectly paced and absolutely stunning.",
      rating: 5,
      trek: "Langtang Valley"
    },
    {
      id: 4,
      name: "Thomas Weber",
      location: "Germany",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Having trekked with several companies worldwide, I can confidently say TrekFinity offers the best combination of professionalism, local expertise, and value.",
      rating: 5,
      trek: "Manaslu Circuit"
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium bg-background rounded-full border">
            Testimonials
          </div>
          <h2 className="text-section-title mb-6">
            Stories from Our Adventurers
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Hear from travelers who have experienced the magic of Nepal through 
            our carefully crafted adventures and expert guidance.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-5xl mx-auto">
          <div className="modern-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Image */}
              <div className="lg:order-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-2 lg:order-2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/60 mb-4" />
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </div>
                
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < testimonials[activeIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].location}</p>
                    <p className="text-sm text-primary font-medium">{testimonials[activeIndex].trek}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-24">
          <h3 className="text-card-title text-center mb-12">All Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`modern-card p-6 text-left transition-all ${
                  index === activeIndex ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${
                        i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.quote}"
                </p>
                
                <p className="text-xs text-primary font-medium mt-3">{testimonial.trek}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
