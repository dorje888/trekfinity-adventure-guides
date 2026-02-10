import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const EverestThreePasses = () => {
  // Dev cache buster for images
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  // Public Everest gallery images (order preserved)
  const imgs = [
    '/Everest/ben-lowe-UOj_xa6Qp0A-unsplash.jpg',
    '/Everest/kalle-kortelainen-TiIRgk9-xcs-unsplash.jpg',
    '/Everest/nepal-visuals-JjytBsXOj30-unsplash.jpg',
  ].map((p) => `${p}${bust}`);

  const [api, setApi] = React.useState<CarouselApi | null>(null);

  // Auto-play the carousel
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  // SEO: title, description, keywords, JSON-LD
  React.useEffect(() => {
    const title = 'Everest Three Passes Trek (Renjo La, Cho La, Kongma La) | TrekFinity';
    const description = 'Everest Three Passes Trek: the ultimate high pass circuit in Nepal’s Khumbu. Cross Renjo La, Cho La, and Kongma La; connect Gokyo and Everest Base Camp. 18–21 days, strenuous, best in Mar–May & Sep–Nov.';
    const keywords = 'Three Passes Trek Nepal, high pass trek Everest region, Renjo La Cho La Kongma La, Everest Three Passes trek 2025 cost, challenging circuit Khumbu region';

    document.title = title;
    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement('meta');
        m.setAttribute('name', name);
        document.head.appendChild(m);
      }
      m.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);

    const id = 'ld-trip-3passes';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Everest Three Passes Trek',
      description,
      touristType: 'Experienced trekkers',
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 18,
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '1950',
        availability: 'https://schema.org/InStock',
      },
      provider: {
        '@type': 'Organization',
        name: 'TrekFinity',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Khumbu, Nepal'
      }
    });
    document.head.appendChild(script);
    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section with auto-sliding images */}
        <div className="relative h-[70vh] overflow-hidden">
          {/* Carousel underlay */}
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {imgs.map((src, idx) => (
                <CarouselItem key={idx} className="h-[70vh] relative">
                  <img
                    src={src}
                    alt={`Everest Three Passes gallery image ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Content overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Everest Three Passes Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Cross Renjo La, Cho La and Kongma La on the most comprehensive Khumbu circuit</p>
              <Link 
                to="#book-now" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium text-lg"
              >
                Book This Trek
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Everest Three Passes Trek is the ultimate circuit in the Everest (Khumbu) region—designed for experienced trekkers who want the fullest immersion. Over roughly 18–21 days you link the Gokyo Valley with the classic Everest Base Camp trail by crossing three high passes: Renjo La (~5,345 m), Cho La (~5,420 m) and Kongma La (~5,535 m). The route showcases deep valleys, turquoise lakes, glaciers and some of the grandest Himalayan views in Nepal.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Expect a strenuous itinerary with steady acclimatization, 6–8 hours of daily hiking, and technical sections over glacial moraine. In return you’ll gain panoramic perspectives of Everest, Lhotse, Nuptse, Ama Dablam and Cho Oyu, plus time in iconic Sherpa communities like Namche and Dingboche.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-muted-foreground">Cross three major high-altitude passes for sweeping mountain panoramas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-muted-foreground">Combine the best of Gokyo Lakes and Everest Base Camp routes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-muted-foreground">Remote feel, classic Sherpa villages and challenging alpine terrain</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium">18–21 days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Mountain className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Maximum Elevation</p>
                        <p className="font-medium">~5,535 m (Kongma La)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Difficulty</p>
                        <p className="font-medium">Hard / Strenuous</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Compass className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Best Seasons</p>
                        <p className="font-medium">Mar–May / Sep–Nov</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Group Size</p>
                        <p className="font-medium">2–10 people (recommended)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="font-bold text-2xl mb-2">From $1,950 USD</p>
                    <p className="text-muted-foreground text-sm mb-4">per person (min. 2 people)</p>
                    <Link 
                      to="#book-now" 
                      className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional informational sections for SEO and UX */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Why choose the Everest Three Passes Trek?</h3>
                <p className="text-muted-foreground">This circuit links Renjo La, Cho La and Kongma La to weave together the finest viewpoints and valleys of the Khumbu. You’ll experience both the Gokyo Lakes and the Everest Base Camp side, gaining remote, panoramic perspectives rarely matched elsewhere in the region.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What to expect</h3>
                <p className="text-muted-foreground">Plan for 18–21 days of trekking through Sherpa hubs like Namche and Dingboche, the Gokyo Lakes basin, glacier moraines, and the high passes themselves—culminating with Everest Base Camp (~5,364 m) and classic viewpoints. Typical hiking days run 6–8 hours with acclimatization days built in. You’ll need Sagarmatha National Park and local Khumbu permits.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Best seasons</h3>
                <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) offer the most stable weather and clearest views. Winter can be possible but very cold; snow can close passes. Monsoon brings clouds, rain and higher risk.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Preparation & difficulty</h3>
                <p className="text-muted-foreground">This is a hard, high-altitude trek. Excellent fitness is necessary—consistent long days, sustained climbs, and altitude exposure up to ~5,535 m. Prior high-altitude trekking experience is strongly recommended; train endurance and cardiovascular capacity before the trip.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Local culture & religion</h3>
                <p className="text-muted-foreground">You’ll walk through Sherpa valleys with monasteries, prayer wheels and mani walls. Stops like Tengboche and the less-visited Thame offer windows into living mountain culture and Buddhist traditions.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Weather & climate</h3>
                <p className="text-muted-foreground">Mountain weather is variable: expect cold nights (often below −10 °C higher up), potential snowfall near passes, and strong winds. Mornings are typically clearer in prime seasons; clouds can build later in the day.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Altitude & safety</h3>
                <p className="text-muted-foreground">The risk of Acute Mountain Sickness increases above 3,000 m and remains significant beyond 5,000 m. Follow a conservative ascent profile, hydrate, and descend if severe symptoms appear. Carry appropriate medication as advised by a doctor.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Insurance</h3>
                <p className="text-muted-foreground">Comprehensive travel insurance covering trekking above 5,000 m and helicopter evacuation is essential on this route.</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">How it compares to the classic EBC trek</h3>
                <p className="text-muted-foreground">Three Passes is tougher and longer than the standard EBC itinerary, but grants broader scenery, quieter valleys, and the satisfaction of linking the region’s most famous passes and viewpoints.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Section */}
        <section id="book-now" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Everest Three Passes</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/40">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#6F60A1] mb-1">Full Name</label>
                      <input 
                        id="name" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#6F60A1] mb-1">Email Address</label>
                      <input 
                        id="email" type="email" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Questions or Requirements</label>
                    <textarea 
                      id="message" rows={4}
                      className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                      placeholder="Tell us your preferred dates, group size, or any special requests."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition"
                  >
                    Submit Booking Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EverestThreePasses;
