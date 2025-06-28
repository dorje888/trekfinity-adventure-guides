import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Users, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedTreks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const treks = [
    {
      id: 1,
      title: "Everest Base Camp",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      description: "Walk in the footsteps of legends to the base of the world's highest peak. Experience breathtaking mountain vistas and immerse yourself in authentic Sherpa culture.",
      duration: "14 days",
      difficulty: "Challenging",
      groupSize: "2-12",
      elevation: "5,364m",
      route: "/treks/everest-base-camp"
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      description: "Journey through diverse landscapes from lush forests to arid high-altitude deserts. Cross the challenging Thorong La Pass and witness stunning Annapurna views.",
      duration: "18 days",
      difficulty: "Moderate to Challenging",
      groupSize: "2-10",
      elevation: "5,416m",
      route: "/treks/annapurna-circuit"
    },
    {
      id: 3,
      title: "Langtang Valley",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      description: "Explore the beautiful Langtang Valley with its unique blend of Himalayan and Tibetan cultures. Enjoy stunning peaks and lush rhododendron forests.",
      duration: "10 days",
      difficulty: "Moderate",
      groupSize: "2-8",
      elevation: "4,984m",
      route: "/treks/langtang-valley"
    },
    {
      id: 4,
      title: "Manaslu Circuit",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
      description: "Trek around the world's eighth highest mountain on this less-traveled circuit. Experience authentic village life and dramatic mountain scenery.",
      duration: "16 days",
      difficulty: "Challenging",
      groupSize: "2-8",
      elevation: "5,106m",
      route: "/treks/manaslu-circuit"
    },
  ];

  const stats = [
    { icon: Calendar, label: "Duration", value: treks[activeIndex].duration },
    { icon: Mountain, label: "Elevation", value: treks[activeIndex].elevation },
    { icon: Clock, label: "Difficulty", value: treks[activeIndex].difficulty },
    { icon: Users, label: "Group Size", value: treks[activeIndex].groupSize },
  ];

  return (
    <section id="treks" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium bg-background rounded-full border">
            Featured Treks
          </div>
          <h2 className="text-section-title mb-6">
            Iconic Himalayan Adventures
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Discover our most sought-after trekking experiences, each designed to showcase 
            Nepal's diverse landscapes and rich mountain cultures.
          </p>
        </div>

        {/* Trek Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {treks.map((trek, index) => (
              <button
                key={trek.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  index === activeIndex 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {trek.title}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Trek */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden modern-card">
              <img 
                src={treks[activeIndex].image} 
                alt={treks[activeIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-section-title mb-4">{treks[activeIndex].title}</h3>
              <p className="text-body leading-relaxed">{treks[activeIndex].description}</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="modern-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <stat.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                      <p className="font-medium">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center gap-2" asChild>
                <a href={treks[activeIndex].route}>
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="#contact">Book Now</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trek Grid - All Treks */}
        <div className="mt-24">
          <h3 className="text-card-title text-center mb-12">All Trek Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treks.map((trek) => (
              <div key={trek.id} className="modern-card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={trek.image} 
                    alt={trek.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{trek.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{trek.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{trek.duration}</span>
                    <span className="text-muted-foreground">{trek.difficulty}</span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={trek.route}>View Details</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;
