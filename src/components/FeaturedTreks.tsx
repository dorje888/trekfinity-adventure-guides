import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Users, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import upperMustangImg from '@/assets/upper-mustang.jpg';
import gokyoImg from '@/assets/gokyo-lakes.jpg';

const FeaturedTreks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dev cache buster so public images update during development
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';

  const treks = [
    {
      id: 1,
      title: 'Everest Base Camp',
      // Match hero images used on the Everest page
      image: `/Everest/geetangey-ra4NJidcK1A-unsplash.jpg${bust}`,
      description:
        "Walk in the footsteps of legends to the base of the world's highest peak at 5,364m. Experience breathtaking mountain vistas, visit centuries-old monasteries, and immerse yourself in authentic Sherpa culture. This iconic trek passes through Sagarmatha National Park, a UNESCO World Heritage site, offering unparalleled views of Everest, Lhotse, Nuptse, and Ama Dablam.",
      duration: '14 days',
      difficulty: 'Challenging',
      groupSize: '2-12',
      elevation: '5,364m',
      route: '/treks/everest-base-camp',
      highlights: ['Namche Bazaar - Sherpa capital', 'Tengboche Monastery', 'Kala Patthar viewpoint', 'Everest Base Camp'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Annapurna Circuit',
      // Match hero images used on the Annapurna page
      image: `/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg${bust}`,
      description:
        "Journey through Nepal's most diverse trekking route, crossing the dramatic Thorong La Pass at 5,416m. Experience everything from subtropical forests and terraced fields to arid high-altitude deserts and glacial valleys. This classic trek offers stunning views of Annapurna, Dhaulagiri, Machapuchare, and Manaslu ranges while passing through traditional Gurung and Thakali villages.",
      duration: '18 days',
      difficulty: 'Moderate to Challenging',
      groupSize: '2-10',
      elevation: '5,416m',
      route: '/treks/annapurna-circuit',
      highlights: ['Thorong La Pass', 'Muktinath Temple', 'Manang village', 'Diverse ecosystems'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Langtang Valley',
      // Match hero images used on the Langtang page
      image: `/Langtang/himalayan-local-guide-xc2GggytytA-unsplash.jpg${bust}`,
      description:
        "Discover the 'Valley of Glaciers' with its unique blend of Himalayan and Tibetan cultures. Trek through Langtang National Park, home to red pandas and diverse flora including rhododendron forests. Experience traditional Tamang villages, visit ancient monasteries, and enjoy close-up views of Langtang Lirung (7,227m) and other spectacular peaks.",
      duration: '10 days',
      difficulty: 'Moderate',
      groupSize: '2-8',
      elevation: '4,984m',
      route: '/treks/langtang-valley',
      highlights: ['Kyanjin Gompa monastery', 'Langtang Lirung views', 'Tamang culture', 'Red panda habitat'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'Manaslu Circuit',
      // Match hero images used on the Manaslu page
      image: `/Manaslu/erik-OwJ6Cn_DnHM-unsplash.jpg${bust}`,
      description:
        "Trek around the world's eighth highest mountain (8,163m) on this spectacular yet less-crowded circuit. Cross the challenging Larkya La Pass at 5,106m while experiencing authentic mountain culture in traditional villages. This restricted area trek offers pristine wilderness, ancient monasteries, and dramatic mountain scenery including close views of Manaslu, Himalchuli, and Cheo Himal.",
      duration: '16 days',
      difficulty: 'Challenging',
      groupSize: '2-8',
      elevation: '5,106m',
      route: '/treks/manaslu-circuit',
      highlights: ['Larkya La Pass', 'Samagaon village', 'Manaslu views', 'Restricted area permit'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
    },
    {
      id: 5,
      title: 'Upper Mustang',
      image: upperMustangImg,
      description:
        'Explore the forbidden kingdom of Mustang, a mystical high-altitude desert that was once an independent Tibetan kingdom. Trek through dramatic canyons, ancient caves, and medieval walled cities including Lo Manthang, the capital. Experience authentic Tibetan Buddhist culture, visit centuries-old monasteries, and witness unique landscapes that resemble the Tibetan plateau.',
      duration: '12 days',
      difficulty: 'Moderate',
      groupSize: '2-10',
      elevation: '4,000m',
      route: '/treks/upper-mustang',
      highlights: ['Lo Manthang palace', 'Ancient cave monasteries', 'Tibetan culture', 'Desert landscapes'],
      bestSeason: 'March-November',
      fallback: '/placeholder.svg',
    },
    {
      id: 6,
      title: 'Gokyo Lakes',
      image: gokyoImg,
      description:
        "Trek to the stunning turquoise Gokyo Lakes, the world's highest freshwater lake system, situated at 4,700-5,000m altitude. Climb Gokyo Ri (5,357m) for panoramic views of four of the world's six highest peaks: Everest, Lhotse, Makalu, and Cho Oyu. Experience the pristine beauty of the Everest region while avoiding the crowds of the traditional EBC route.",
      duration: '12 days',
      difficulty: 'Moderate to Challenging',
      groupSize: '2-10',
      elevation: '5,357m',
      route: '/treks/gokyo-lakes',
      highlights: ['Six sacred lakes', 'Gokyo Ri summit', 'Four 8000m+ peaks view', 'Ngozumpa Glacier'],
      bestSeason: 'March-May, September-November',
      fallback: '/placeholder.svg',
    },
  ];

  const stats = [
    { icon: Calendar, label: 'Duration', value: treks[activeIndex].duration },
    { icon: Mountain, label: 'Elevation', value: treks[activeIndex].elevation },
    { icon: Clock, label: 'Difficulty', value: treks[activeIndex].difficulty },
    { icon: Users, label: 'Group Size', value: treks[activeIndex].groupSize },
  ];

  return (
    <section id="treks" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium bg-background rounded-full border">
            Featured Treks
          </div>
          <h2 className="text-section-title mb-6">Iconic Himalayan Adventures</h2>
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
                className="w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out animate-kenburns-soft"
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src !== window.location.origin + treks[activeIndex].fallback) {
                    img.src = treks[activeIndex].fallback;
                  }
                }}
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
                    className="w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.src !== window.location.origin + trek.fallback) {
                        img.src = trek.fallback;
                      }
                    }}
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
