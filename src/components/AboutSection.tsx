import React from 'react';
import { Mountain, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Mountain className="h-5 w-5" />,
      title: "Expert Local Guides",
      description: "Over 10 years of experience navigating Nepal's challenging terrain with local expertise."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Small Group Sizes",
      description: "Intimate groups ensuring personalized attention and authentic cultural connections."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Safety First",
      description: "Comprehensive safety protocols and professional-grade equipment for all adventures."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Flexible Itineraries",
      description: "Custom journeys adapted to your pace, preferences, and physical capabilities."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium bg-background rounded-full border">
            About Us
          </div>
          <h2 className="text-section-title mb-6">
            Authentic Himalayan Adventures
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We create transformative journeys through Nepal's extraordinary landscapes, 
            connecting travelers with the raw beauty of the Himalayas and vibrant local cultures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden modern-card">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
                alt="Himalayan mountain landscape" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-card-title mb-4">Our Mission</h3>
              <p className="text-body mb-4">
                Founded by passionate mountaineers, we've spent over a decade guiding adventurers 
                through the breathtaking Himalayan terrain. Every journey we create goes beyond 
                trekking—it's about cultural immersion and personal transformation.
              </p>
              <p className="text-body">
                Our local guides bring intimate knowledge of ancient trails and lasting 
                relationships with mountain communities, ensuring authentic experiences 
                that connect you deeply with Nepal's heritage.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="modern-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h4 className="font-medium">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
