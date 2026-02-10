import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const MakaluBaseCamp = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Makalu Base Camp Trek | Remote Eastern Nepal (16 Days) | TrekFinity';
    const description = 'Makalu Base Camp Trek (4,870 m): a challenging, less-crowded adventure in remote Eastern Nepal. Trek through Sherpa villages, rhododendron forests, alpine meadows and glacial valleys with views of Makalu, Chamlang, Baruntse and Everest.';
    const keywords = 'Makalu Base Camp Trek, Makalu Barun National Park permit, Tumlingtar trek, Num Seduwa Yangle Kharka, remote trek Nepal, Eastern Nepal Sherpa culture, challenging trek 16 days, less crowded Himalaya, Barun valley trek';

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

    // TouristTrip JSON-LD
    const idTrip = 'ld-trip-makalu-bc';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Makalu Base Camp Trek',
      description,
      touristType: 'Trekkers seeking remote, less-crowded Himalayan routes',
      areaServed: { '@type': 'AdministrativeArea', name: 'Makalu Barun National Park, Eastern Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 12,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m)' },
          { '@type': 'ListItem', position: 2, name: 'Flight to Tumlingtar (600 m) and drive to Num (1,200 m)' },
          { '@type': 'ListItem', position: 3, name: 'Trek to Seduwa (1,700 m)' },
          { '@type': 'ListItem', position: 4, name: 'Trek to Tumlingtar (2,200 m)' },
          { '@type': 'ListItem', position: 5, name: 'Trek to Yangle Kharka (3,050 m)' },
          { '@type': 'ListItem', position: 6, name: 'Trek to Seduwa (3,500 m)' },
          { '@type': 'ListItem', position: 7, name: 'Trek to Makalu Base Camp (4,870 m)' },
          { '@type': 'ListItem', position: 8, name: 'Explore Base Camp and trek to Camp 2 (4,500 m)' },
          { '@type': 'ListItem', position: 9, name: 'Trek to Seduwa (3,050 m)' },
          { '@type': 'ListItem', position: 10, name: 'Trek to Num (1,200 m)' },
          { '@type': 'ListItem', position: 11, name: 'Flight back to Kathmandu' },
          { '@type': 'ListItem', position: 12, name: 'Departure from Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '2650', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-makalu-bc';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why choose Makalu Base Camp Trek?', acceptedAnswer: { '@type': 'Answer', text: 'This trek is ideal for trekkers seeking adventure in remote regions. It offers unparalleled views of Makalu and neighboring peaks without the crowds of Everest or Annapurna trails. Trekkers can experience authentic Sherpa culture, untouched forests, and alpine landscapes while enjoying solitude in pristine nature.' } },
        { '@type': 'Question', name: 'How difficult is the trek?', acceptedAnswer: { '@type': 'Answer', text: 'The trek is moderately to highly challenging due to high altitudes, long walking days, and remote terrain. Trekkers must be physically fit, acclimatize properly, and walk at a steady pace. Weather changes can be sudden, requiring preparation for cold, snow, and rain.' } },
        { '@type': 'Question', name: 'Best season for trekking?', acceptedAnswer: { '@type': 'Answer', text: 'March–May (spring) offers rhododendron blooms and clear skies, while September–November (autumn) provides stable weather and panoramic mountain views. Winter and monsoon seasons are not recommended due to snow, cold, and landslide risks.' } },
        { '@type': 'Question', name: 'Cultural experiences?', acceptedAnswer: { '@type': 'Answer', text: 'The trail passes through Sherpa villages and hamlets where trekkers can explore monasteries, observe local rituals, and interact with friendly villagers. Learn about traditional architecture, food, and customs that have been preserved for centuries.' } },
        { '@type': 'Question', name: 'Accommodation and meals?', acceptedAnswer: { '@type': 'Answer', text: 'Tea houses and lodges offer twin-bed rooms, shared bathrooms, and warm meals. Typical meals include dal bhat, noodles, soups, and local snacks. At higher altitudes, facilities may be limited; trekkers should carry essentials.' } },
        { '@type': 'Question', name: 'Is travel insurance required?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, due to high-altitude trekking and remoteness. Ensure coverage includes medical emergencies, helicopter evacuation, and trip delays.' } },
        { '@type': 'Question', name: 'Wildlife and flora?', acceptedAnswer: { '@type': 'Answer', text: 'The trek passes through Makalu Barun National Park, home to red pandas, snow leopards, Himalayan monals, and musk deer. Alpine meadows and forests showcase a variety of rare Himalayan plants.' } }
      ]
    });
    document.head.appendChild(scriptFaq);

    return () => {
      const t = document.getElementById(idTrip); if (t) t.remove();
      const f = document.getElementById(idFaq); if (f) f.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={hero} alt="Makalu Base Camp trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Makalu Base Camp Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Remote Eastern Nepal to the foot of Makalu (4,870 m)</p>
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
                The Makalu Base Camp Trek is a spectacular adventure to the foot of Makalu (8,463m), the world’s fifth-highest peak. This trek takes you through remote eastern Nepal, including lush forests, terraced fields, and traditional Sherpa villages. Trekkers experience stunning mountain panoramas, high passes, and serene Himalayan landscapes. The journey is less crowded than Everest or Annapurna trails, offering an authentic experience of nature and local culture.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Reach Makalu Base Camp (4,870m)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Panoramic views of Makalu, Chamlang, Baruntse, and Everest</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Trek through remote Sherpa villages and alpine meadows</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience authentic Sherpa culture and hospitality</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore high-altitude landscapes with rhododendron forests and glacial valleys</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Less crowded, serene trekking experience</span></li>
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
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">16 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">4,870m</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Challenging</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Tumlingtar / Tumlingtar</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">March–May / September–November</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits Required: Makalu Barun National Park Permit, TIMS.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why choose Makalu Base Camp Trek?</h3>
              <p className="text-muted-foreground">This trek is ideal for trekkers seeking adventure in remote regions. It offers unparalleled views of Makalu and neighboring peaks without the crowds of Everest or Annapurna trails. Trekkers can experience authentic Sherpa culture, untouched forests, and alpine landscapes while enjoying solitude in pristine nature.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
              <p className="text-muted-foreground">The trek is moderately to highly challenging due to high altitudes, long walking days, and remote terrain. Trekkers must be physically fit, acclimatize properly, and walk at a steady pace. Weather changes can be sudden, requiring preparation for cold, snow, and rain.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best season for trekking?</h3>
              <p className="text-muted-foreground">March–May (spring) offers rhododendron blooms and clear skies, while September–November (autumn) provides stable weather and panoramic mountain views. Winter and monsoon seasons are not recommended due to snow, cold, and landslide risks.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cultural experiences?</h3>
              <p className="text-muted-foreground">The trail passes through Sherpa villages and hamlets where trekkers can explore monasteries, observe local rituals, and interact with friendly villagers. Learn about traditional architecture, food, and customs that have been preserved for centuries.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation and meals?</h3>
              <p className="text-muted-foreground">Tea houses and lodges offer twin-bed rooms, shared bathrooms, and warm meals. Typical meals include dal bhat, noodles, soups, and local snacks. At higher altitudes, facilities may be limited; trekkers should carry essentials.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Is travel insurance required?</h3>
              <p className="text-muted-foreground">Yes, due to high-altitude trekking and remoteness. Ensure coverage includes medical emergencies, helicopter evacuation, and trip delays.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife and flora</h3>
              <p className="text-muted-foreground">The trek passes through Makalu Barun National Park, home to red pandas, snow leopards, Himalayan monals, and musk deer. Alpine meadows and forests showcase a variety of rare Himalayan plants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
              <div className="space-y-8" aria-label="Makalu Base Camp daily itinerary">
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Arrival in Kathmandu (1,400m)</h3><p className="text-muted-foreground">Arrive in Kathmandu, meet your trekking representative, and attend trek briefing.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Flight to Tumlingtar (600m) and drive to Num (1,200m)</h3><p className="text-muted-foreground">Take a scenic flight to Tumlingtar, followed by a short drive to Num. Overnight stay in a guesthouse.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Seduwa (1,700m)</h3><p className="text-muted-foreground">Trek along the Arun River, passing small villages and terraced fields. Overnight in Seduwa.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Tumlingtar (2,200m)</h3><p className="text-muted-foreground">Ascend gradually through forests and local settlements. Overnight stay.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Yangle Kharka (3,050m)</h3><p className="text-muted-foreground">Trail enters dense forests with occasional snow patches. Overnight stay with Himalayan views.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Seduwa (3,500m)</h3><p className="text-muted-foreground">Trek along alpine meadows and high ridges. Observe glaciers and peaks. Overnight stay.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Makalu Base Camp (4,870m)</h3><p className="text-muted-foreground">Reach the base camp and marvel at Makalu’s towering presence. Explore the area and capture panoramic photos. Overnight in tents or basic tea houses.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Explore Base Camp and trek to Camp 2 (4,500m)</h3><p className="text-muted-foreground">Spend morning at the base camp, then descend slightly to Camp 2. Enjoy views of surrounding peaks. Overnight stay.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Seduwa (3,050m)</h3><p className="text-muted-foreground">Begin descending through scenic valleys and villages. Overnight in Seduwa.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Num (1,200m)</h3><p className="text-muted-foreground">Descend further, passing rivers and terraced fields. Overnight stay in Num.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Flight back to Kathmandu</h3><p className="text-muted-foreground">Return to Kathmandu by flight. Optional sightseeing or shopping. Overnight stay.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Departure from Kathmandu</h3><p className="text-muted-foreground">Transfer to the airport for onward journey.</p></div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Makalu Base Camp</h2>
              <p className="text-muted-foreground">Share your preferred dates and requirements. We will confirm permits, logistics and availability within 24 hours.</p>
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

export default MakaluBaseCamp;
