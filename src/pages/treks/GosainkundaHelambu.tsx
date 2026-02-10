import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const GosainkundaHelambu = () => {
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
    const title = 'Gosainkunda–Helambu Trek | Sacred Lakes, Lauribina La & Hyolmo Culture (9–12 Days) | TrekFinity';
    const description = 'Gosainkunda–Helambu Trek: combine sacred Gosainkunda Lake (4,380 m), Lauribina La Pass (4,610 m), and peaceful Helambu Valley. Moderate to challenging 9–12 day trek with Tamang/Hyolmo culture, forests, waterfalls and Himalayan panoramas.';
    const keywords = 'Gosainkunda Helambu Trek, Lauribina La Pass 4610m, sacred lakes trek Nepal, Hyolmo culture Helambu, Langtang NP permits TIMS, Dhunche to Sundarijal itinerary 2025, best time Gosainkunda trek';

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

    const id = 'ld-trip-gosaikunda-helambu';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Gosainkunda–Helambu Trek',
      description,
      touristType: 'Moderately experienced trekkers seeking culture + high passes',
      areaServed: { '@type': 'AdministrativeArea', name: 'Langtang National Park & Helambu, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 9,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Drive Kathmandu → Dhunche (1,960 m)' },
          { '@type': 'ListItem', position: 2, name: 'Dhunche → Thulo Syabru (2,200 m)' },
          { '@type': 'ListItem', position: 3, name: 'Thulo Syabru → Shin Gompa (3,330 m)' },
          { '@type': 'ListItem', position: 4, name: 'Shin Gompa → Gosainkunda (4,380 m)' },
          { '@type': 'ListItem', position: 5, name: 'Cross Lauribina La (4,610 m) → Ghopte (3,530 m)' },
          { '@type': 'ListItem', position: 6, name: 'Ghopte → Melamchi Gaon (2,530 m)' },
          { '@type': 'ListItem', position: 7, name: 'Melamchi Gaon → Tarkeghyang (2,590 m)' },
          { '@type': 'ListItem', position: 8, name: 'Tarkeghyang → Sermathang (2,610 m)' },
          { '@type': 'ListItem', position: 9, name: 'Sermathang → Melamchi Bazaar, drive to Kathmandu (870 m)' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1150', availability: 'https://schema.org/InStock' },
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
                  <img src={src} alt={`Gosainkunda–Helambu Trek image ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-black/30" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Gosainkunda–Helambu Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Sacred lakes, Lauribina La pass, and peaceful Hyolmo villages</p>
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
                  The Gosainkunda–Helambu Trek is a remarkable journey through the spiritual heart of the Langtang region. Combining natural beauty, cultural richness, and sacred lakes, it leads through alpine forests, Tamang and Sherpa villages, and the shimmering Gosainkunda Lake—a revered pilgrimage site for Hindus and Buddhists.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Starting from Dhunche or Syabrubesi, trekkers ascend scenic trails to the chain of lakes at Gosainkunda (4,380 m), cross Lauribina La Pass (4,610 m), and descend into the lush Helambu Valley—ideal for a moderate adventure mixing culture and Himalayan panoramas.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit sacred Gosainkunda Lake (4,380 m) with deep spiritual heritage</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cross Lauribina La Pass (4,610 m) with views of Langtang Lirung & Ganesh Himal</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Helambu Valley—Hyolmo culture, monasteries and stone houses</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Dense rhododendron forests, waterfalls and alpine landscapes</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Balanced mix of cultural immersion and high-altitude trekking</span></li>
                </ul>
              </div>

              {/* Details Card */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">9–12 days</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">4,610 m (Lauribina La Pass)</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Moderate to Challenging</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">Mar–May / Sep–Nov</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Start / End</p><p className="font-medium">Dhunche / Sundarijal</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Users className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Accommodation</p><p className="font-medium">Teahouses</p></div></div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-muted-foreground">Permits: Langtang NP Entry (~NPR 3,000) & TIMS (~NPR 2,000)</p>
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
                <h3 className="text-2xl font-bold text-foreground mb-3">Why is the Gosainkunda–Helambu Trek famous?</h3>
                <p className="text-muted-foreground">It blends sacred lakes and pilgrimage with sweeping Himalayan views and ethnic diversity. Gosainkunda is believed to be created by Lord Shiva, attracting thousands during Janai Purnima.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is this trek?</h3>
                <p className="text-muted-foreground">Moderately challenging due to steep ascents, rocky trails and Lauribina La’s altitude. With basic fitness and proper acclimatization, most trekkers complete it comfortably.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Best season to go?</h3>
                <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) offer clear skies and stable temperatures. Avoid monsoon (Jun–Aug) for safety and views.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Permits required?</h3>
                <p className="text-muted-foreground">Yes: Langtang National Park Entry (~NPR 3,000) and TIMS (~NPR 2,000). Obtain in Kathmandu or at checkpoints.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation & food</h3>
                <p className="text-muted-foreground">Teahouses with cozy rooms and hot meals (dal bhat, noodles, soups, eggs, tea). In Helambu, some places have Wi‑Fi and solar hot showers.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What makes Helambu special?</h3>
                <p className="text-muted-foreground">Home to the Hyolmo people—Buddhist culture, monasteries, and traditional stone houses. Peaceful, less crowded, and culturally immersive.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Religious significance of Gosainkunda</h3>
                <p className="text-muted-foreground">A sacred lake visited by pilgrims during Janai Purnima. Bathing is believed to wash away sins; the area features multiple mythologically important lakes.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How cold does it get?</h3>
                <p className="text-muted-foreground">Below freezing at night near Gosainkunda and the pass—down to around −10 °C in winter. Pack thermals and a cold‑rated sleeping bag.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Is altitude sickness a concern?</h3>
                <p className="text-muted-foreground">Yes—especially around Gosainkunda and Lauribina La. Ascend gradually, hydrate well and consider a rest day if symptoms persist.</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">Can I extend the trek?</h3>
                <p className="text-muted-foreground">Yes. Combine with Langtang Valley or continue to Sundarijal via Shivapuri NP for a scenic exit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (9 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Gosainkunda–Helambu daily itinerary">
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive Kathmandu → Dhunche</h3><p className="text-muted-foreground">1,960 m — Enter Langtang region by road.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Thulo Syabru</h3><p className="text-muted-foreground">2,200 m — Climb through forests and villages.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Thulo Syabru → Shin Gompa</h3><p className="text-muted-foreground">3,330 m — Steady ascent; monasteries and pines.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Shin Gompa → Gosainkunda</h3><p className="text-muted-foreground">4,380 m — Reach the sacred lake chain.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Cross Lauribina La → Ghopte</h3><p className="text-muted-foreground">4,610 m / 3,530 m — High pass day with big views.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Ghopte → Melamchi Gaon</h3><p className="text-muted-foreground">2,530 m — Enter Helambu’s forests and villages.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Melamchi Gaon → Tarkeghyang</h3><p className="text-muted-foreground">2,590 m — Buddhist culture and heritage.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Tarkeghyang → Sermathang</h3><p className="text-muted-foreground">2,610 m — Scenic ridgelines and village life.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Sermathang → Melamchi Bazaar → Kathmandu</h3><p className="text-muted-foreground">870 m — Descend and drive back to Kathmandu.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book-now" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Gosainkunda–Helambu Trek</h2>
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

export default GosainkundaHelambu;
