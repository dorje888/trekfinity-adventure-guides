
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Clock, Users, Mountain } from 'lucide-react';

const FeaturedTreks = () => {
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

  // Auto-rotate trek cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % treks.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const treks = [
    {
      id: 1,
      title: "Everest Base Camp",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      description: "Walk in the footsteps of legends on this iconic trek to the base of the world's highest peak. Experience breathtaking mountain vistas and immerse yourself in Sherpa culture.",
      duration: "14 days",
      difficulty: "Challenging",
      groupSize: "2-12",
      elevation: "5,364m",
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      description: "Journey through diverse landscapes from lush forests to arid high-altitude deserts. Cross the challenging Thorong La Pass and witness the stunning Annapurna range.",
      duration: "18 days",
      difficulty: "Moderate to Challenging",
      groupSize: "2-10",
      elevation: "5,416m",
    },
    {
      id: 3,
      title: "Langtang Valley",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      description: "Explore the beautiful Langtang Valley, known for its unique blend of Himalayan and Tibetan cultures. Enjoy stunning views of snow-capped peaks and lush rhododendron forests.",
      duration: "10 days",
      difficulty: "Moderate",
      groupSize: "2-8",
      elevation: "4,984m",
    },
    {
      id: 4,
      title: "Manaslu Circuit",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      description: "Trek around the world's eighth highest mountain on this less-traveled but incredibly rewarding circuit. Experience authentic village life and dramatic mountain scenery.",
      duration: "16 days",
      difficulty: "Challenging",
      groupSize: "2-8",
      elevation: "5,106m",
    },
  ];

  return (
    <section id="treks" ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-mountain-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-nature-100 rounded-full opacity-40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block animate-reveal py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-mountain-100 text-mountain-800 rounded-full">
            Our Adventures
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-reveal">
            Featured Trekking Experiences
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-reveal">
            Embark on meticulously crafted journeys through Nepal's most breathtaking landscapes. 
            Each trek combines adventure, cultural immersion, and the expertise of our professional guides.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex space-x-3">
            {treks.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View trek ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-reveal order-2 lg:order-1 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-subtle">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{treks[activeIndex].title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{treks[activeIndex].description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-mountain-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{treks[activeIndex].duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                    <Mountain className="h-5 w-5 text-mountain-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Elevation</p>
                    <p className="font-medium">{treks[activeIndex].elevation}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-mountain-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Difficulty</p>
                    <p className="font-medium">{treks[activeIndex].difficulty}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-mountain-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Group Size</p>
                    <p className="font-medium">{treks[activeIndex].groupSize}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium shadow-lg shadow-primary/10 group"
              >
                Book This Trek
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="animate-reveal order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 -rotate-3 bg-primary/10 rounded-2xl"></div>
              <div className="absolute inset-0 rotate-3 bg-nature-100 rounded-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl transition-all duration-700">
                {treks.map((trek, index) => (
                  <div 
                    key={trek.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img 
                      src={trek.image} 
                      alt={trek.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treks.map((trek, index) => (
            <div 
              key={trek.id} 
              className={`animate-reveal rounded-xl overflow-hidden bg-white shadow-subtle transition-premium hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                index === activeIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={trek.image} 
                  alt={trek.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 mb-1">{trek.title}</h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{trek.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{trek.duration}</span>
                  <span className="mx-1">•</span>
                  <Mountain className="h-3 w-3" />
                  <span>{trek.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;
