
import React, { useEffect, useRef } from 'react';
import { Mountain, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const features = [
    {
      icon: <Mountain className="h-6 w-6 text-nature-500" />,
      title: "Expert Local Guides",
      description: "Our guides have over 5 years of experience in navigating Nepal's challenging terrain."
    },
    {
      icon: <Users className="h-6 w-6 text-nature-500" />,
      title: "Small Group Sizes",
      description: "We maintain small groups to ensure personalized attention and authentic experiences."
    },
    {
      icon: <Award className="h-6 w-6 text-nature-500" />,
      title: "Safety First Approach",
      description: "Comprehensive safety protocols and equipment for peace of mind during adventures."
    },
    {
      icon: <Clock className="h-6 w-6 text-nature-500" />,
      title: "Flexible Itineraries",
      description: "Custom itineraries that can be adjusted to match your pace and preferences."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block animate-reveal py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-reveal">Passionate About Authentic Travel Experiences</h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-reveal">
            At Trekfinity, we believe in creating unforgettable journeys that connect travelers with Nepal's extraordinary landscapes and vibrant cultures. Our experienced guides don't just lead treks; they share stories, knowledge, and a deep love for the Himalayas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-reveal">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-nature-100 rounded-full -z-10 animate-pulse-subtle"></div>
            <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-mountain-100 rounded-full -z-10 animate-pulse-subtle"></div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Stunning Himalayan mountain landscape" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-reveal">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by a team of passionate mountaineers and cultural enthusiasts, Trekfinity was born from a deep love for Nepal's majestic landscapes and rich heritage. For over a decade, we've been guiding adventurers through the breathtaking terrain of the Himalayas, creating journeys that go beyond sightseeing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our guides have spent years exploring every trail, peak, and valley, developing intimate knowledge of the land and forming lasting relationships with local communities. This dedication ensures that our treks offer authentic insights and experiences that would be impossible to discover on your own.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="animate-reveal flex gap-4 p-5 rounded-xl bg-gray-50 transition-premium hover:shadow-subtle hover:bg-white">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nature-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
