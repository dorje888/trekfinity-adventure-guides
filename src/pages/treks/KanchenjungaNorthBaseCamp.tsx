import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const KanchenjungaNorthBaseCamp = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD
  React.useEffect(() => {
    const title = 'Kanchenjunga North Base Camp Trek | Remote Himalaya via Ghunsa & Lhonak (14 Days) | TrekFinity';
    const description = 'Kanchenjunga North Base Camp Trek (5,143 m): a challenging, remote trek in Eastern Nepal via Taplejung, Ghunsa, Kambachen and Lhonak with views of Kanchenjunga, Jannu and Pandim. Cultural immersion in Limbu & Sherpa villages. Best Mar–May & Sep–Nov.';
    const keywords = 'Kanchenjunga North Base Camp Trek, KCAP permit, Taplejung trek, Ghunsa Kambachen Lhonak, Jannu Pandim views, remote trek Nepal, Kanchenjunga trekking itinerary 14 days, high altitude trek Eastern Nepal';

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

    const id = 'ld-trip-kanchenjunga-north-bc';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Kanchenjunga North Base Camp Trek',
      description,
      touristType: 'Experienced trekkers seeking remote, high-altitude Himalayan routes',
      areaServed: { '@type': 'AdministrativeArea', name: 'Taplejung, Eastern Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m)' },
          { '@type': 'ListItem', position: 2, name: 'Drive/Flight to Taplejung (1,500 m)' },
          { '@type': 'ListItem', position: 3, name: 'Trek to Chirwa (2,400 m)' },
          { '@type': 'ListItem', position: 4, name: 'Trek to Amjilosa (2,900 m)' },
          { '@type': 'ListItem', position: 5, name: 'Trek to Kambachen (3,530 m)' },
          { '@type': 'ListItem', position: 6, name: 'Trek to Ghunsa (3,450 m)' },
          { '@type': 'ListItem', position: 7, name: 'Trek to Lhonak (4,300 m)' },
          { '@type': 'ListItem', position: 8, name: 'Trek to Kanchenjunga North Base Camp (5,143 m)' },
          { '@type': 'ListItem', position: 9, name: 'Explore North Base Camp and return to Lhonak' },
          { '@type': 'ListItem', position: 10, name: 'Trek to Ghunsa (3,450 m)' },
          { '@type': 'ListItem', position: 11, name: 'Trek to Kambachen (3,530 m)' },
          { '@type': 'ListItem', position: 12, name: 'Trek to Amjilosa (2,900 m)' },
          { '@type': 'ListItem', position: 13, name: 'Trek to Taplejung (1,500 m)' },
          { '@type': 'ListItem', position: 14, name: 'Drive/Flight back to Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '2450', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={hero} alt="Kanchenjunga North Base Camp trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kanchenjunga North Base Camp Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Remote Eastern Nepal via Ghunsa, Kambachen and Lhonak</p>
            <Button size="lg" asChild>
              <Link to="#booking">
                Book This Trek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Kanchenjunga North Base Camp Trek is a remote and exhilarating journey to the foot of the world’s third-highest mountain, Kanchenjunga (8,586 m). Traverse pristine rhododendron forests, alpine meadows and high Himalayan valleys through Taplejung, Ghunsa, Kambachen and Lhonak to reach the 5,143 m North Base Camp.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Expect solitude, scenic grandeur and cultural immersion among Limbu and Sherpa communities, with constant views of Kanchenjunga, Jannu and Pandim. This challenging route rewards experienced trekkers seeking an authentic Eastern Nepal adventure.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Reach Kanchenjunga North Base Camp (5,143 m)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Spectacular views of Kanchenjunga, Jannu and Pandim</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore remote Limbu villages and Sherpa settlements</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Walk through rhododendron forests and alpine meadows</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Less crowded, untouched trails and high-altitude serenity</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Discover monasteries, temples and traditional Himalayan life</span></li>
                </ul>
              </div>

              <Button size="lg" asChild>
                <Link to="#booking">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trek Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40">
                <h3 className="text-xl font-semibold text-foreground mb-6">Trek Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">14 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">5,143 m (North Base Camp)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Challenging</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Taplejung / Taplejung</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May / Sep–Nov</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits: Kanchenjunga Conservation Area Permit (KCAP). Licensed guide and agency required due to remoteness; insurance covering evacuation recommended.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why is the Kanchenjunga North Base Camp Trek famous?</h3>
              <p className="text-muted-foreground">For pristine, remote landscapes and unparalleled views of Kanchenjunga (8,586 m). Far less crowded than Everest or Annapurna, it’s a true wilderness adventure with deep cultural encounters.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
              <p className="text-muted-foreground">Challenging: long days at altitude on rugged terrain. Prior trekking experience and acclimatization strategy are important to mitigate AMS risks.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best time to trek</h3>
              <p className="text-muted-foreground">Spring (Mar–May) for blooms and clear skies; Autumn (Sep–Nov) for stable weather and excellent visibility. Winter is very cold/snowy; monsoon brings landslide risk.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cultural experiences</h3>
              <p className="text-muted-foreground">Meet Limbu and Sherpa communities, visit monasteries and temples, and witness traditional agriculture and festivals along the route.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Is trekking solo possible?</h3>
              <p className="text-muted-foreground">No. A licensed agency with guide/porter is required for safety, permits and navigation in this remote region.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation & meals</h3>
              <p className="text-muted-foreground">Simple tea houses with twin rooms and shared bathrooms; hot meals like dal bhat, noodles and soups. Facilities get basic at higher altitudes.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Insurance</h3>
              <p className="text-muted-foreground">Comprehensive insurance covering helicopter evacuation and high-altitude trekking is strongly recommended given limited medical facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (14 days)</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
              <div className="space-y-8" aria-label="Kanchenjunga North Base Camp daily itinerary">
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Arrival in Kathmandu (1,400 m)</h3><p className="text-muted-foreground">Airport pickup, trek briefing, and gear check.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive/Flight to Taplejung (1,500 m)</h3><p className="text-muted-foreground">Travel east to the trailhead; meet the local crew.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Chirwa (2,400 m)</h3><p className="text-muted-foreground">Forest trails, riverside bridges and village life.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Amjilosa (2,900 m)</h3><p className="text-muted-foreground">Terraced fields, Limbu culture and valley views.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Kambachen (3,530 m)</h3><p className="text-muted-foreground">Rhododendron & oak forests; mountain vistas emerge.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Ghunsa (3,450 m)</h3><p className="text-muted-foreground">Sherpa village with monasteries; cultural immersion.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Lhonak (4,300 m)</h3><p className="text-muted-foreground">Alpine terrain, glaciers and moraine landscapes.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Kanchenjunga North Base Camp (5,143 m)</h3><p className="text-muted-foreground">Stand beneath the massive Kanchenjunga massif; photo time.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Explore Base Camp; return to Lhonak</h3><p className="text-muted-foreground">Morning at BC, then descend to Lhonak.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Lhonak → Ghunsa (3,450 m)</h3><p className="text-muted-foreground">Retrace through alpine meadows and forests.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Ghunsa → Kambachen (3,530 m)</h3><p className="text-muted-foreground">Village hospitality and quiet mountain scenery.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Kambachen → Amjilosa (2,900 m)</h3><p className="text-muted-foreground">Return to lower valleys and terraced hillsides.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Amjilosa → Taplejung (1,500 m)</h3><p className="text-muted-foreground">Final trekking day; celebrate with your team.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive/Flight back to Kathmandu</h3><p className="text-muted-foreground">Return to the capital; optional sightseeing.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Kanchenjunga North Base Camp</h2>
              <p className="text-muted-foreground">Share your details and preferred dates. We will confirm permits, logistics and availability within 24 hours.</p>
            </div>
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-border/40">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#6F60A1] mb-2">Full Name</label>
                  <input className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#6F60A1] mb-2">Email</label>
                  <input type="email" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#6F60A1] mb-2">Preferred Trek Date</label>
                  <input type="date" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#6F60A1] mb-2">Group Size</label>
                  <select className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none">
                    <option>2 people</option>
                    <option>3–6 people</option>
                    <option>7–12 people</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#6F60A1] mb-2">Questions or Requirements</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us about permits, route preferences, diet, insurance, etc."></textarea>
              </div>
              <Button size="lg" className="w-full h-11 rounded-full bg-[#7E6DB0] hover:bg-[#6F60A1] text-white">
                Submit Booking Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KanchenjungaNorthBaseCamp;
