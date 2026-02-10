import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const LangtangGanjaLaPass = () => {
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
    const title = 'Langtang Ganja La Pass Trek | Technical High Pass to Helambu (12–14 Days) | TrekFinity';
    const description = 'Langtang Ganja La Pass Trek (5,130 m): a strenuous, offbeat crossing linking Langtang Valley and Helambu. Glaciers, yak pastures, Kyanjin Gompa, and panoramic views of Langtang Lirung, Dorje Lakpa, Yala Peak & Naya Kanga. 12–14 days.';
    const keywords = 'Langtang Ganja La Pass trek 5130m, technical pass Nepal, Langtang to Helambu trek, Kyanjin Gompa, crampons ropes alpine trek, best season Ganja La, permits Langtang NP TIMS 2025';

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

    const id = 'ld-trip-ganja-la';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Langtang Ganja La Pass Trek',
      description,
      touristType: 'Experienced trekkers seeking technical high-pass crossing',
      areaServed: { '@type': 'AdministrativeArea', name: 'Langtang National Park & Helambu, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 11,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Drive Kathmandu → Syabrubesi (1,550 m)' },
          { '@type': 'ListItem', position: 2, name: 'Syabrubesi → Lama Hotel (2,380 m)' },
          { '@type': 'ListItem', position: 3, name: 'Lama Hotel → Langtang Village (3,430 m)' },
          { '@type': 'ListItem', position: 4, name: 'Langtang Village → Kyanjin Gompa (3,870 m)' },
          { '@type': 'ListItem', position: 5, name: 'Acclimatization hike to Kyanjin Ri (~4,773 m)' },
          { '@type': 'ListItem', position: 6, name: 'Kyanjin Gompa → Ngegang (4,000 m)' },
          { '@type': 'ListItem', position: 7, name: 'Cross Ganja La Pass (5,130 m) → Keldang (4,250 m)' },
          { '@type': 'ListItem', position: 8, name: 'Keldang → Dukpu (4,040 m)' },
          { '@type': 'ListItem', position: 9, name: 'Dukpu → Tarkeghyang (2,590 m)' },
          { '@type': 'ListItem', position: 10, name: 'Tarkeghyang → Sermathang (2,610 m)' },
          { '@type': 'ListItem', position: 11, name: 'Sermathang → Melamchi Bazaar, drive to Kathmandu (870 m)' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1450', availability: 'https://schema.org/InStock' },
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
                  <img src={src} alt={`Langtang Ganja La Pass Trek image ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-black/30" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Langtang Ganja La Pass Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Strenuous, offbeat high pass from Langtang to Helambu (5,130 m)</p>
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
                  The Langtang Ganja La Pass Trek is an adventurous, less-trodden trail connecting Langtang Valley with Helambu via the challenging Ganja La Pass (5,130 m). Ideal for solitude, alpine adventure and authentic Himalayan culture, it traverses glaciers, yak pastures, dense forests and remote villages with grand views of Langtang Lirung, Dorje Lakpa, Yala Peak and Naya Kanga.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Due to its demanding nature and occasional technical sections, this trek suits experienced hikers seeking a thrilling high-altitude crossing. A licensed guide, proper gear, and contingency days for weather are strongly recommended.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cross the Ganja La Pass (5,130 m) with panoramic Himalayan views</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Langtang National Park and its rich biodiversity</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit Kyanjin Gompa, a traditional Buddhist monastery</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience Sherpa and Tamang culture in remote villages</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Perfect for adventure enthusiasts seeking offbeat trails</span></li>
                </ul>
              </div>

              {/* Details Card */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">12–14 days</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">5,130 m (Ganja La Pass)</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Strenuous</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">Mar–May / Sep–Nov</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Start / End</p><p className="font-medium">Syabrubesi / Melamchi Bazaar</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Users className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Accommodation</p><p className="font-medium">Teahouses; 1–2 nights camping near the pass</p></div></div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-muted-foreground">Permits: Langtang NP Entry (~NPR 3,000) & TIMS (~NPR 2,000). Licensed guide required for the pass.</p>
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
                <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the Langtang Ganja La Pass Trek?</h3>
                <p className="text-muted-foreground">One of Langtang’s most challenging routes: steep climbs, glacier crossings and high altitude. Prior high-altitude experience and strong fitness are essential.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Best seasons for this trek</h3>
                <p className="text-muted-foreground">March–May and September–November offer stable weather and manageable snow. Avoid monsoon and winter due to slippery trails and heavy snow near the pass.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What makes Ganja La unique?</h3>
                <p className="text-muted-foreground">A high, seldom-crossed pass at 5,130 m with 360° views over Langtang and Helambu. Sections can require crampons and ropes—true alpine adventure.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Permits required</h3>
                <p className="text-muted-foreground">Langtang NP Entry (~NPR 3,000) and TIMS (~NPR 2,000). A licensed guide is mandatory given technical terrain and unmarked sections.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Altitude sickness</h3>
                <p className="text-muted-foreground">Significant risk above 5,000 m. Acclimatize at Kyanjin Gompa, ascend slowly, hydrate, and watch for symptoms like dizziness and headache.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Gear checklist</h3>
                <p className="text-muted-foreground">Crampons, trekking poles, warm layers, waterproof outerwear, -10 °C sleeping bag. Guides arrange ropes/ice axes when conditions require.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife on route</h3>
                <p className="text-muted-foreground">Potential sightings: red panda, Himalayan tahr, blue sheep, musk deer, langurs, and spring wildflowers; rich birdlife including Himalayan monal.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Safety on the pass</h3>
                <p className="text-muted-foreground">Safe with experienced local guides, proper gear and good weather windows. Avoid solo attempts due to avalanche and navigation risks.</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">Teahouses and camping</h3>
                <p className="text-muted-foreground">Teahouses up to Kyanjin Gompa. Expect 1–2 camping nights around the pass; your guide and porters handle tents and meals.</p>
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
                <div className="space-y-8" aria-label="Langtang Ganja La Pass daily itinerary">
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive Kathmandu → Syabrubesi</h3><p className="text-muted-foreground">1,550 m — Arrive at Langtang’s trailhead.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Lama Hotel</h3><p className="text-muted-foreground">2,380 m — Forested trails along the valley.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Lama Hotel → Langtang Village</h3><p className="text-muted-foreground">3,430 m — Gradual ascent past meadows and settlements.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Langtang Village → Kyanjin Gompa</h3><p className="text-muted-foreground">3,870 m — Monastery visit and valley vistas.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Acclimatization hike to Kyanjin Ri</h3><p className="text-muted-foreground">~4,773 m — Acclimatize with a sunrise viewpoint.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Kyanjin Gompa → Ngegang</h3><p className="text-muted-foreground">4,000 m — Transition to higher, wilder terrain.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Cross Ganja La Pass → Keldang</h3><p className="text-muted-foreground">5,130 m / 4,250 m — Technical high-pass day; big descent.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Keldang → Dukpu</h3><p className="text-muted-foreground">4,040 m — Alpine traverses and ridgelines.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Dukpu → Tarkeghyang</h3><p className="text-muted-foreground">2,590 m — Enter Helambu’s cultural heart.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Tarkeghyang → Sermathang</h3><p className="text-muted-foreground">2,610 m — Scenic villages and Buddhist heritage.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Sermathang → Melamchi Bazaar → Kathmandu</h3><p className="text-muted-foreground">870 m — Trek ends; drive back to Kathmandu.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book-now" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Langtang Ganja La Pass Trek</h2>
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

export default LangtangGanjaLaPass;
