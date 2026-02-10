import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const LangtangValley = () => {
  // Dev cache buster and hero images (served from public/Langtang)
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const langtangImages = [
    '/Langtang/himalayan-local-guide-xc2GggytytA-unsplash.jpg',
    '/Langtang/kim-cordenete-WkMM-5ogQDs-unsplash.jpg',
    '/Langtang/triras-manandhar-y9nT7lTOX00-unsplash.jpg',
  ].map((p) => `${p}${bust}`);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  // SEO: title, description, keywords, Open Graph/Twitter, canonical, JSON-LD
  React.useEffect(() => {
    const title = 'Langtang Valley Trek | Tamang Culture, Rhododendrons & Glaciers (8 Days) | TrekFinity';
    const description = 'Langtang Valley Trek is a moderate, beginner-friendly trek close to Kathmandu. Experience Tamang culture, rhododendron forests, Kyanjin Gompa, and viewpoints like Tserko Ri. 8 days, best in Mar–May and Sep–Nov. Permits: Langtang NP + TIMS.';
    const keywords = 'Langtang Valley Trek Nepal, beginner friendly trek, Tamang culture trek, Kyanjin Gompa, Tserko Ri 4984m, Langtang permits TIMS, rhododendron spring trek, Kathmandu short trek 2025 itinerary';

    document.title = title;
    const ensure = (sel: string, create: () => HTMLElement) => {
      let el = document.querySelector(sel) as HTMLElement | null;
      if (!el) { el = create(); document.head.appendChild(el); }
      return el;
    };
    const setMeta = (name: string, content: string) => {
      const m = ensure(`meta[name="${name}"]`, () => { const x = document.createElement('meta'); x.setAttribute('name', name); return x; });
      m.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);

    const setOg = (property: string, content: string) => {
      const m = ensure(`meta[property="${property}"]`, () => { const x = document.createElement('meta'); x.setAttribute('property', property); return x; });
      m.setAttribute('content', content);
    };
    const url = window.location.href;
    const ogImage = `${window.location.origin}/og-image.png`;
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:type', 'website');
    setOg('og:url', url);
    setOg('og:image', ogImage);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', url);

    const id = 'ld-trip-langtang';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Langtang Valley Trek',
      description,
      touristType: 'First-time trekkers with average fitness; culture & nature enthusiasts',
      areaServed: { '@type': 'AdministrativeArea', name: 'Langtang National Park, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 8,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Drive Kathmandu → Syabrubesi (1,550 m)' },
          { '@type': 'ListItem', position: 2, name: 'Syabrubesi → Lama Hotel (2,380 m)' },
          { '@type': 'ListItem', position: 3, name: 'Lama Hotel → Langtang Village (3,430 m)' },
          { '@type': 'ListItem', position: 4, name: 'Langtang Village → Kyanjin Gompa (3,870 m)' },
          { '@type': 'ListItem', position: 5, name: 'Hike to Kyanjin Ri or Tserko Ri (4,773–4,984 m) and return' },
          { '@type': 'ListItem', position: 6, name: 'Kyanjin Gompa → Lama Hotel (2,380 m)' },
          { '@type': 'ListItem', position: 7, name: 'Lama Hotel → Syabrubesi (1,550 m)' },
          { '@type': 'ListItem', position: 8, name: 'Drive to Kathmandu (1,400 m)' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1200', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section - auto sliding images */}
        <div className="relative h-[70vh] overflow-hidden">
          {/* Carousel Underlay */}
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {langtangImages.map((src, idx) => (
                <CarouselItem key={idx} className="h-[70vh] relative">
                  <img
                    src={src}
                    alt={`Langtang gallery image ${idx + 1}`}
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Langtang Valley Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Discover Tamang culture, rhododendrons and glacier valleys near Kathmandu</p>
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
                  The Langtang Valley Trek is moderately challenging, with daily hikes of 5–6 hours on varied terrain and gradual ascents—ideal for first-time trekkers with average fitness. Closer to Kathmandu and less crowded than Everest or Annapurna, it blends Himalayan scenery with rich Tamang culture in a compact timeframe.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Expect peaceful trails, blooming rhododendrons in spring, crisp skies in autumn, and authentic village hospitality around Kyanjin Gompa. A rest day here provides acclimatization and the chance to hike to Kyanjin Ri or Tserko Ri for lofty valley and peak panoramas.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Moderate, beginner-friendly route with steady ascents</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Less crowded alternative close to Kathmandu</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Tamang hospitality, culture and monasteries</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Rhododendron forests, meadows and glacier-carved valleys</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Summit viewpoints like Kyanjin Ri or Tserko Ri (~4,984 m)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Chance to spot red panda, monal, and other park wildlife</span></li>
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
                        <p className="font-medium">8 days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Mountain className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Maximum Elevation</p>
                        <p className="font-medium">Up to ~4,984 m (Tserko Ri)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Difficulty</p>
                        <p className="font-medium">Moderate</p>
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
                        <MapPin className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Start / End</p>
                        <p className="font-medium">Kathmandu ↔ Syabrubesi</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Accommodation</p>
                        <p className="font-medium">Teahouses (basic rooms, shared bathrooms)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-muted-foreground">Permits: Langtang NP Entry (~NPR 3,000) & TIMS (~NPR 2,000)</p>
                    <p className="font-bold text-2xl mb-2 mt-3">From $1,200 USD</p>
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

            {/* FAQs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the Langtang Valley Trek for beginners?</h3>
                <p className="text-muted-foreground">Moderately challenging with 5–6 hours of daily hiking and gradual ascents—great for first-time trekkers with average fitness. Maintain a slow pace, hydrate well, and rest to adjust to altitude.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What makes Langtang different from Everest or Annapurna treks?</h3>
                <p className="text-muted-foreground">Langtang is closer to Kathmandu and less crowded, offering authentic Tamang hospitality, raw landscapes, and a rich cultural experience in fewer days.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">When is the best time to go?</h3>
                <p className="text-muted-foreground">Spring (Mar–May) brings rhododendron blooms; Autumn (Sep–Nov) offers crisp skies and mountain visibility. Winter is possible but cold higher up.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Do I need permits?</h3>
                <p className="text-muted-foreground">Yes—Langtang National Park Entry (~NPR 3,000) and TIMS (~NPR 2,000). Obtainable in Kathmandu or at Dhunche/Syabrubesi checkpoints.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Is there a risk of altitude sickness?</h3>
                <p className="text-muted-foreground">Mild risk above 3,000 m, especially near Kyanjin Gompa. Rest days, gradual ascent, and 3–4 liters of water daily help prevent AMS. Most acclimatize well with a day at Kyanjin.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Food & accommodation</h3>
                <p className="text-muted-foreground">Teahouses serve dal bhat, noodles, soups, pancakes and more. Rooms are basic with shared bathrooms; Kyanjin Gompa may offer Wi‑Fi, hot showers and bakeries.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife on the trail</h3>
                <p className="text-muted-foreground">Langtang NP hosts red pandas (rare), Himalayan tahr, langurs and 250+ bird species including Himalayan monals. Dawn/dusk near forests is best for sightings.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Is it safe after the 2015 earthquake?</h3>
                <p className="text-muted-foreground">Yes. Trails and villages have been rebuilt and upgraded. Teahouses are stronger, and communities welcome trekkers—tourism supports the local economy.</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">Can I combine Langtang with other treks?</h3>
                <p className="text-muted-foreground">Many extend to Gosainkunda and/or Helambu (+4–5 days) for sacred lakes, high passes and varied culture—without retracing the entire path.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (8 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Langtang Valley daily itinerary">
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive Kathmandu → Syabrubesi</h3><p className="text-muted-foreground">1,550 m — Road journey to the trailhead.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Lama Hotel</h3><p className="text-muted-foreground">2,380 m — Through forests and river valleys.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Lama Hotel → Langtang Village</h3><p className="text-muted-foreground">3,430 m — Gradual ascent with expanding views.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Langtang Village → Kyanjin Gompa</h3><p className="text-muted-foreground">3,870 m — Monasteries and alpine meadows.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Hike Kyanjin Ri/Tserko Ri and return</h3><p className="text-muted-foreground">4,773–4,984 m — Sunrise summit for panoramic vistas.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Kyanjin Gompa → Lama Hotel</h3><p className="text-muted-foreground">2,380 m — Long descent through forest trails.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Lama Hotel → Syabrubesi</h3><p className="text-muted-foreground">1,550 m — Return to trailhead.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive to Kathmandu</h3><p className="text-muted-foreground">1,400 m — Trip concludes; optional extensions to Gosainkunda/Helambu.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking section */}
        <section id="book-now" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Your Langtang Valley Trek</h2>
              <div className="bg-white rounded-xl p-8 shadow-md border border-border/40">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#6F60A1] mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#6F60A1] mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="trekDate" className="block text-sm font-medium text-[#6F60A1] mb-1">Preferred Trek Date</label>
                      <input 
                        type="date" 
                        id="trekDate" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-[#6F60A1] mb-1">Group Size</label>
                      <select 
                        id="groupSize" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none"
                      >
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3-5">3-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="10+">More than 10 people</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Special Requirements or Questions</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                      placeholder="Tell us about any special requirements or questions you may have..."
                    ></textarea>
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

export default LangtangValley;
