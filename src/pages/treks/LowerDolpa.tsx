import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LowerDolpa: React.FC = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Lower Dolpa Trek | Moderate Cultural Himalayan Trek (12–15 Days) | TrekFinity';
    const description = 'Lower Dolpa Trek: a moderate adventure through terraced farmlands, river valleys and Tibetan-influenced villages with views of Kanjiroba Himal. Ideal for cultural immersion in Dolpo with monasteries, festivals and Shey Phoksundo region landscapes.';
    const keywords = 'Lower Dolpa Trek, Lower Dolpo trek, Shey Phoksundo National Park, Dolpa Restricted Area Permit, TIMS, Nepalgunj Juphal trek, Kanjiroba Himal, Dolpo monasteries, Tibetan culture, moderate trek Nepal, 12–15 days';

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
    const idTrip = 'ld-trip-lower-dolpa';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Lower Dolpa Trek',
      description,
      touristType: 'Moderate trekkers seeking culture and landscapes',
      areaServed: { '@type': 'AdministrativeArea', name: 'Dolpa District, Shey Phoksundo National Park, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 12,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Day 1 – Arrival in Nepalgunj (200m)' },
          { '@type': 'ListItem', position: 2, name: 'Day 2 – Flight to Juphal (2,500m)' },
          { '@type': 'ListItem', position: 3, name: 'Day 3 – Trek to Dunai (2,500m)' },
          { '@type': 'ListItem', position: 4, name: 'Day 4 – Trek to Chhepka (3,200m)' },
          { '@type': 'ListItem', position: 5, name: 'Day 5 – Trek to Shey Gompa (4,200m)' },
          { '@type': 'ListItem', position: 6, name: 'Day 6 – Trek to surrounding villages' },
          { '@type': 'ListItem', position: 7, name: 'Day 7–10 – Return trek to Juphal' },
          { '@type': 'ListItem', position: 11, name: 'Day 11 – Flight back to Nepalgunj' },
          { '@type': 'ListItem', position: 12, name: 'Day 12 – Departure' }
        ]
      },
    	  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-lower-dolpa';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why trek Lower Dolpa?', acceptedAnswer: { '@type': 'Answer', text: 'Lower Dolpa is a unique Himalayan region offering stunning scenery, cultural immersion, and a less strenuous trek than Upper Dolpa. The trail combines high-altitude landscapes with local Tibetan-influenced villages, allowing trekkers to experience a remote lifestyle untouched by tourism.' } },
        { '@type': 'Question', name: 'Difficulty level?', acceptedAnswer: { '@type': 'Answer', text: 'It’s considered a moderate trek. Elevations reach up to 4,200m, and the trail includes gradual ascents and descents. Trekkers with basic fitness and high-altitude trekking experience can complete it comfortably, though acclimatization is still essential.' } },
        { '@type': 'Question', name: 'Best trekking season?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March–May) and autumn (September–November) are ideal for trekking with clear skies, moderate temperatures, and dry trail conditions. Monsoon and winter are challenging due to landslides and heavy snow.' } },
        { '@type': 'Question', name: 'Cultural experiences?', acceptedAnswer: { '@type': 'Answer', text: 'Trekkers encounter monasteries, prayer flags, and traditional stone houses. Local villagers practice Tibetan Buddhism, and festivals like Losar are celebrated with colorful rituals. The Dolpo people are known for their hospitality.' } },
        { '@type': 'Question', name: 'Wildlife and nature?', acceptedAnswer: { '@type': 'Answer', text: 'The region is part of Shey Phoksundo National Park, home to Himalayan tahr, blue sheep, musk deer, and rare snow leopards. Birdlife includes Himalayan monals and snowcocks.' } },
        { '@type': 'Question', name: 'Accommodation and food?', acceptedAnswer: { '@type': 'Answer', text: 'Basic lodges and tea houses serve dal bhat, noodles, and bread. Facilities are simple, so trekkers should carry essentials such as snacks, water purification tablets, and warm clothing.' } },
        { '@type': 'Question', name: 'Travel insurance and safety?', acceptedAnswer: { '@type': 'Answer', text: 'Insurance covering medical emergencies, helicopter evacuation, and trekking accidents is mandatory due to remoteness and weather variability.' } },
        { '@type': 'Question', name: 'Preparation tips?', acceptedAnswer: { '@type': 'Answer', text: 'Train cardio, strength and long hikes. Prepare mentally for remote days with limited connectivity.' } }
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
        <img src={hero} alt="Lower Dolpa trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Lower Dolpa Trek</h1>
            <p className="text-xl md:text-2xl mb-8">Terraced farmlands, river valleys and Tibetan-influenced culture</p>
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Lower Dolpa Trek is less strenuous than Upper Dolpa but still offers breathtaking landscapes, rivers, and Tibetan-influenced villages. It is ideal for trekkers seeking a moderate adventure with cultural immersion. The route includes terraced farmland, river valleys, and monasteries, with scenic views of Kanjiroba Himal and surrounding peaks.
              </p>

              {/* Highlights */}
              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Dolpo villages and monasteries</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Walk along terraced fields and river valleys</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Scenic views of Kanjiroba Himal and surrounding peaks</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Moderate trek suitable for intermediate trekkers</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Immerse in Tibetan-influenced culture and festivals</span></li>
              </ul>
            </div>

            {/* Trek Details */}
            <div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">12–15 days</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">4,200m</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Moderate</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Users className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Group Size</p><p className="font-medium">2–12 people</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Start / End</p><p className="font-medium">Nepalgunj / Juphal</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">March–May, September–November</p></div></div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-muted-foreground">
                  Permits Required: Dolpa Restricted Area Permit, TIMS.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-2">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why trek Lower Dolpa?</h3>
              <p className="text-muted-foreground">Lower Dolpa is a unique Himalayan region offering stunning scenery, cultural immersion, and a less strenuous trek than Upper Dolpa. The trail combines high-altitude landscapes with local Tibetan-influenced villages, allowing trekkers to experience a remote lifestyle untouched by tourism.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Difficulty level?</h3>
              <p className="text-muted-foreground">It’s considered a moderate trek. Elevations reach up to 4,200m, and the trail includes gradual ascents and descents. Trekkers with basic fitness and high-altitude trekking experience can complete it comfortably, though acclimatization is still essential.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best trekking season?</h3>
              <p className="text-muted-foreground">Spring (March–May) and autumn (September–November) are ideal for trekking. These months provide clear skies, moderate temperatures, and dry trail conditions. Monsoon and winter are challenging due to landslides and heavy snow.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cultural experiences?</h3>
              <p className="text-muted-foreground">Trekkers will encounter monasteries, prayer flags, and traditional stone houses. Local villagers practice Tibetan Buddhism, and festivals like Losar are celebrated with colorful rituals. The Dolpo people are known for their hospitality and warm interactions with visitors.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife and nature?</h3>
              <p className="text-muted-foreground">The region is part of Shey Phoksundo National Park, home to Himalayan tahr, blue sheep, musk deer, and rare snow leopards. Birdwatchers can spot Himalayan monals, snowcocks, and other alpine birds.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation and food?</h3>
              <p className="text-muted-foreground">Basic lodges and tea houses offer meals like dal bhat, noodles, and bread. Facilities are simple, especially at higher altitudes, so trekkers should carry essential items like snacks, water purification tablets, and warm clothing.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Travel insurance and preparation tips</h3>
              <p className="text-muted-foreground">Travel insurance covering medical emergencies, helicopter evacuation, and trekking accidents is mandatory due to the region’s remoteness and unpredictable weather. Train cardio, strength, and long hikes; prepare mentally for remote days with limited connectivity.</p>
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
              <div className="space-y-8" aria-label="Lower Dolpa daily itinerary">
                {[
                  ['Day 1 – Arrival in Nepalgunj (200m)', 'Arrive at Nepalgunj airport, meet your trekking team, and attend a trek briefing.'],
                  ['Day 2 – Flight to Juphal (2,500m)', 'Take a scenic flight to Juphal, the gateway to Lower Dolpa. Overnight in a local guesthouse.'],
                  ['Day 3 – Trek to Dunai (2,500m)', 'Follow the Thuli Bheri River, walking through pine forests, terraced fields, and small villages.'],
                  ['Day 4 – Trek to Chhepka (3,200m)', 'Enter alpine meadows and remote villages with traditional stone houses.'],
                  ['Day 5 – Trek to Shey Gompa (4,200m)', 'Visit Shey Monastery, enjoy panoramic views of Kanjiroba and surrounding mountains.'],
                  ['Day 6 – Trek to surrounding villages', 'Explore villages along the trail, interact with locals, and learn about their traditions and lifestyle.'],
                  ['Day 7–10 – Return trek to Juphal', 'Retrace your route, experiencing the Dolpo culture and scenery along the way.'],
                  ['Day 11 – Flight back to Nepalgunj', 'Return flight, overnight stay, optional sightseeing.'],
                  ['Day 12 – Departure', 'Transfer to the airport for onward travel.'],
                ].map((it, i) => (
                  <div key={i} className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">{i+1}</span></div>
                    <h3 className="font-bold text-xl mb-1 text-foreground">{it[0]}</h3>
                    <p className="text-muted-foreground">{it[1]}</p>
                  </div>
                ))}
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Lower Dolpa Trek</h2>
              <p className="text-muted-foreground">Share your dates and group size. We will confirm permits, logistics and availability within 24 hours.</p>
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
                <textarea rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us about permits, route preferences, diet, insurance, etc." />
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

export default LowerDolpa;
