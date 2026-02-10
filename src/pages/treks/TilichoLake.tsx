import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const TilichoLake = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const imgs = [
    '/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg',
    '/Annapurna/neha-maheen-mahfin-_sbkVaT19ko-unsplash.jpg',
    '/Annapurna/sanjay-hona-qAA6INniUNg-unsplash.jpg',
  ].map((p) => `${p}${bust}`);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api]);

  // SEO: title, description, keywords, JSON-LD + OG/Twitter + canonical
  React.useEffect(() => {
    const title = 'Tilicho Lake Trek | High-Altitude Turquoise Lake in Annapurna (12–14 Days) | TrekFinity';
    const description = 'Tilicho Lake Trek (4,919 m): breathtaking Annapurna side-trip to one of the world\'s highest lakes. Manang culture, diverse landscapes, and optional link to Thorong La or full Annapurna Circuit. Best in Mar–May & Sep–Nov.';
    const keywords = 'Tilicho Lake Trek Nepal, highest lake trekking, Manang culture trek, Annapurna side trip Tilicho, Tilicho itinerary 2025, Annapurna Circuit Tilicho variant, Kathmandu to Manang trek';

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

    // Open Graph / Twitter
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

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', url);

    // JSON-LD
    const id = 'ld-trip-tilicho';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Tilicho Lake Trek',
      description,
      touristType: 'Trekkers seeking moderate to challenging high-altitude adventures',
      itinerary: { '@type': 'ItemList', numberOfItems: 11 },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '950', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Manang, Annapurna Region, Nepal' }
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section with carousel (layout reference: Three Passes) */}
        <div className="relative h-[70vh] overflow-hidden">
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {imgs.map((src, idx) => (
                <CarouselItem key={idx} className="h-[70vh] relative">
                  <img src={src} alt={`Tilicho Lake Trek gallery image ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-black/30" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Tilicho Lake Trek</h1>
              <p className="text-xl md:text-2xl mb-8">High-altitude turquoise jewel of Annapurna via Manang</p>
              <Link to="#book-now" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium text-lg">
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
                  The Tilicho Lake Trek is one of Nepal\'s most scenic and adventurous high-altitude journeys, leading you to Tilicho Lake (4,919 m)—among the world\'s highest lakes. Located in Manang, the trek blends breathtaking mountain views, cultural exploration and a touch of wilderness, passing villages like Chame, Pisang and Manang where Tibetan-influenced culture thrives.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  The turquoise Tilicho Lake rests beneath towering Tilicho Peak, surrounded by Annapurna and Nilgiri ranges. Many extend the route to Thorong La Pass or link it with the full Annapurna Circuit. This is a moderate-to-challenging adventure with big rewards and fewer crowds than the main circuit.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit Tilicho Lake (4,919 m)—one of the highest lakes on Earth</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Majestic views of Annapurna II, III, Gangapurna and Tilicho Peak</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cultural immersion in Manang Valley with Tibetan-Buddhist heritage</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Traverse forests, canyons, alpine meadows and high desert terrain</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Option to connect with Thorong La or the full Annapurna Circuit</span></li>
                </ul>
              </div>

              {/* Details Card */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">12–14 days</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">4,919 m (Tilicho Lake)</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Moderate – Challenging</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Users className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Group Size</p><p className="font-medium">2–12 people</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Start / End</p><p className="font-medium">Kathmandu ↔ Manang (via Besisahar/Chame)</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">March–May / September–November</p></div></div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-muted-foreground">Accommodation: Teahouses & lodges</p>
                    <p className="text-sm text-muted-foreground">Permits: ACAP & TIMS</p>
                    <p className="font-bold text-2xl mt-3 mb-2">From $950 USD</p>
                    <p className="text-muted-foreground text-sm mb-4">per person (min. 2 people)</p>
                    <Link to="#book-now" className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional informational sections (FAQs / SEO) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Why is Tilicho Lake famous?</h3>
                <p className="text-muted-foreground">Tilicho Lake (4,919 m) is among the world\'s highest lakes, famed for turquoise waters beneath Tilicho Peak and sacred significance in Hindu and Buddhist traditions.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
                <p className="text-muted-foreground">Moderate to challenging due to altitude and the steep approach to the lake. Good fitness and gradual acclimatization (especially in Manang) are essential.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Best time to go</h3>
                <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) provide dry trails, clear skies and the best mountain views. Monsoon may bring landslides; winter can block the lake approach with snow.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation & food</h3>
                <p className="text-muted-foreground">Cozy teahouses and lodges run by local families. Facilities get simpler at higher altitudes like Shree Kharka and Tilicho Base Camp—carry a warm sleeping bag.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Altitude & safety</h3>
                <p className="text-muted-foreground">Trekkers may feel mild AMS symptoms above 4,000 m. Acclimatize in Manang, hydrate well and consider Diamox with medical advice. Descend if symptoms worsen.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Route options</h3>
                <p className="text-muted-foreground">Many add Tilicho as a side trip to the Annapurna Circuit or continue toward Thorong La (5,416 m) after visiting the lake for a bigger challenge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (11 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Tilicho Lake daily itinerary">
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Arrive Kathmandu (1,400 m), trek briefing</h3><p className="text-muted-foreground">Meet your guide, gear check and last-minute shopping.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Drive Kathmandu → Besisahar → Chame (2,670 m)</h3><p className="text-muted-foreground">Long scenic drive into the Marsyangdi valley and pine forests.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Chame → Pisang (3,200 m)</h3><p className="text-muted-foreground">Follow the Marsyangdi with views of Annapurna II and IV.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Pisang → Manang (3,540 m)</h3><p className="text-muted-foreground">Choose upper or lower route; expansive views near Ngawal/Braka.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Acclimatization in Manang (3,540 m)</h3><p className="text-muted-foreground">Side hikes to Gangapurna Lake, Ice Lake viewpoint or monasteries.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Manang → Shree Kharka (4,050 m)</h3><p className="text-muted-foreground">Leave the circuit for the Tilicho side trail through landslide zones.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Shree Kharka → Tilicho Base Camp (4,150 m)</h3><p className="text-muted-foreground">Shorter but exposed traverses; rest early for the lake day.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Tilicho Base Camp → Tilicho Lake (4,919 m) → Shree Kharka</h3><p className="text-muted-foreground">Pre-dawn climb to the lake for calm reflections and mountain backdrop; return to Shree Kharka.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Shree Kharka → Manang (3,540 m)</h3><p className="text-muted-foreground">Retrace safely to Manang; optional spa or bakery stop.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Manang → Besisahar</h3><p className="text-muted-foreground">Drive the Marsyangdi road back down-valley.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Besisahar → Kathmandu (1,400 m)</h3><p className="text-muted-foreground">Return to Kathmandu. Buffer day recommended.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="book-now" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Tilicho Lake Trek</h2>
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
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Questions or Requirements</label>
                    <textarea id="message" rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us your preferred dates, group size, or any special requests." />
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

export default TilichoLake;
