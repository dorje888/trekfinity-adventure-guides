import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const TamangHeritageTrail = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const imgs = [
    '/Langtang/himalayan-local-guide-xc2GggytytA-unsplash.jpg',
    '/Langtang/kim-cordenete-WkMM-5ogQDs-unsplash.jpg',
    '/Langtang/triras-manandhar-y9nT7lTOX00-unsplash.jpg',
  ].map((p) => `${p}${bust}`);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api]);

  // SEO: title/description/keywords + OG/Twitter + canonical + JSON-LD
  React.useEffect(() => {
    const title = 'Tamang Heritage Trail Trek | Culture & Homestays in Langtang (7–9 Days) | TrekFinity';
    const description = 'Tamang Heritage Trail Trek: a moderate, culturally immersive route in Nepal\'s Langtang region with homestays, hot springs in Tatopani, Buddhist monasteries, and views of Langtang Lirung, Ganesh Himal, and Tibetan peaks. 7–9 days.';
    const keywords = 'Tamang Heritage Trail Trek, Langtang region trek, Tamang culture Nepal, cultural trekking in Nepal, Langtang trekking itinerary, best time for Tamang trek, Tamang homestay Nepal, short treks near Kathmandu';

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

    const id = 'ld-trip-tamang-heritage';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Tamang Heritage Trail Trek',
      description,
      touristType: 'Cultural trekkers seeking homestays and moderate hiking',
      areaServed: { '@type': 'AdministrativeArea', name: 'Langtang (Rasuwa District), Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 8,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Drive Kathmandu → Syabrubesi (1,550 m)' },
          { '@type': 'ListItem', position: 2, name: 'Syabrubesi → Gatlang (2,200 m)' },
          { '@type': 'ListItem', position: 3, name: 'Gatlang → Tatopani (2,600 m)' },
          { '@type': 'ListItem', position: 4, name: 'Tatopani → Thuman (2,400 m)' },
          { '@type': 'ListItem', position: 5, name: 'Thuman → Briddim (2,345 m)' },
          { '@type': 'ListItem', position: 6, name: 'Briddim → Syabrubesi' },
          { '@type': 'ListItem', position: 7, name: 'Drive Syabrubesi → Kathmandu' },
          { '@type': 'ListItem', position: 8, name: 'Departure / Extra sightseeing in Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '650', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[70vh] overflow-hidden">
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {imgs.map((src, idx) => (
                <CarouselItem key={idx} className="h-[70vh] relative">
                  <img src={src} alt={`Tamang Heritage Trail Trek image ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-black/30" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Tamang Heritage Trail Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Authentic culture, homestays, and Langtang views (7–9 days)</p>
              <Link to="#book-now" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium text-lg">
                Book This Trek
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Tamang Heritage Trail Trek is a unique cultural and scenic journey near the Tibetan border in Nepal\'s Langtang region. It offers an authentic glimpse into the Tamang community—one of Nepal\'s oldest indigenous groups with Tibetan roots—through picturesque villages, terraced fields, lush forests, and soothing natural hot springs.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Along the trail you\'ll witness Buddhist monasteries, traditional architecture, and warm local hospitality. Nestled between the Langtang and Ganesh Himal ranges, this route rewards trekkers with views of Langtang Lirung (7,227 m), Ganesh Himal (7,422 m), and Tibet\'s Shishapangma (8,027 m), all while staying in welcoming teahouses and family homestays.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  This moderate-level trek is perfect for those seeking a peaceful, less-crowded route that beautifully combines Himalayan scenery with deep cultural immersion.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Authentic cultural immersion with the Tamang community</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Stunning views of Langtang Lirung, Ganesh Himal, and Tibetan peaks</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit natural hot springs in Tatopani</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Buddhist monasteries and villages like Gatlang, Thuman, and Briddim</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Stay in traditional homestays and try local Tamang cuisine</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Close to Kathmandu—ideal for short cultural treks</span></li>
                </ul>
              </div>

              {/* Details Card */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">7–9 days</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">3,165 m (Nagthali Viewpoint)</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Moderate</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">Mar–May / Sep–Dec</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Start / End</p><p className="font-medium">Kathmandu ↔ Syabrubesi</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Home className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Accommodation</p><p className="font-medium">Teahouses / Local homestays</p></div></div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-muted-foreground">Permits: Langtang NP Entry & TIMS Card required.</p>
                    <Link to="#book-now" className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition mt-4">
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
                <h3 className="text-2xl font-bold text-foreground mb-3">Why is the Tamang Heritage Trail Trek famous?</h3>
                <p className="text-muted-foreground">Known for rich cultural authenticity where travelers experience the real lifestyle of the Tamang people—descendants of Tibetan settlers. Expect Buddhist art, centuries-old traditions, and peaceful Himalayan panoramas with welcoming homestays.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What can trekkers expect on the route?</h3>
                <p className="text-muted-foreground">A mix of culture and nature: rhododendron forests, terraced fields, ancient monasteries, and village hospitality. Traditional dances, yak butter tea, and smiles greet you along the way, with comfortable teahouses and homestays.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
                <p className="text-muted-foreground">Moderate and suitable for most with average fitness. Expect 5–7 walking hours daily with gentle ups and downs. Highest point stays below 3,200 m, so altitude risk is minimal—still hydrate and prepare with light cardio.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Best time to trek</h3>
                <p className="text-muted-foreground">Spring (Mar–May) and autumn (Sep–Dec) bring clear skies, temperate weather, and mountain views. Spring features blooming rhododendrons; monsoon (Jun–Aug) is wet and leech-prone.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What makes Tamang culture unique?</h3>
                <p className="text-muted-foreground">Deeply influenced by Tibetan Buddhism—mani walls, chortens, prayer flags, and traditional woolen attire. The Tamang language and craftsmanship in woodwork and weaving are defining features.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Is travel insurance necessary?</h3>
                <p className="text-muted-foreground">Yes. Even at moderate altitude, the remote terrain requires coverage for medical emergencies, evacuation, and trip cancellations for peace of mind.</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">Can I combine it with other treks?</h3>
                <p className="text-muted-foreground">Absolutely. Many trekkers extend to the Langtang Valley Trek from Syabrubesi for a longer Himalayan journey that blends culture with alpine scenery.</p>
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
                <div className="space-y-8" aria-label="Tamang Heritage Trail daily itinerary">
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive Kathmandu → Syabrubesi</h3><p className="text-muted-foreground">1,550 m — Road journey to the trailhead.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Syabrubesi → Gatlang</h3><p className="text-muted-foreground">2,200 m — Scenic villages and terraced fields.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Gatlang → Tatopani</h3><p className="text-muted-foreground">2,600 m — Enjoy natural hot springs.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Tatopani → Thuman</h3><p className="text-muted-foreground">2,400 m — Forest paths and Buddhist culture.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Thuman → Briddim</h3><p className="text-muted-foreground">2,345 m — Monasteries, homestay hospitality.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Briddim → Syabrubesi</h3><p className="text-muted-foreground">Return to the starting point.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive Syabrubesi → Kathmandu</h3><p className="text-muted-foreground">Road journey back to Kathmandu.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Departure / Extra sightseeing</h3><p className="text-muted-foreground">Optional buffer or cultural day in the city.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book-now" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Tamang Heritage Trail Trek</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/40">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#6F60A1] mb-1">Full Name</label>
                      <input id="name" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#6F60A1] mb-1">Email Address</label>
                      <input id="email" type="email" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="trekDate" className="block text-sm font-medium text-[#6F60A1] mb-1">Preferred Trek Date</label>
                      <input id="trekDate" type="date" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-[#6F60A1] mb-1">Group Size</label>
                      <select id="groupSize" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none">
                        <option>1 person</option>
                        <option>2 people</option>
                        <option>3–5 people</option>
                        <option>6–10 people</option>
                        <option>10+ people</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Special Requirements or Questions</label>
                    <textarea id="message" rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us your preferences or any special requests..." />
                  </div>
                  <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition">
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

export default TamangHeritageTrail;
