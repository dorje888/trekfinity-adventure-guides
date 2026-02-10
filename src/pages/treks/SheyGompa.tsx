import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const SheyGompa: React.FC = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Shey Gompa Trek | Sacred Monastery Trek in Dolpo (12–14 Days) | TrekFinity';
    const description = 'Shey Gompa Trek: a moderate Himalayan journey into remote Dolpo with sacred Shey Monastery, Tibetan-influenced villages, alpine meadows, rhododendron forests and views of Kanjiroba Himal. Perfect for culture, nature and spiritual exploration.';
    const keywords = 'Shey Gompa Trek, Shey Monastery, Dolpo trek, Shey Phoksundo National Park, Nepalgunj Juphal trek, Kanjiroba Himal, Tibetan culture, Dolpa Restricted Area Permit, TIMS, moderate trek Nepal, 12–14 days';

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
    const idTrip = 'ld-trip-shey-gompa';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Shey Gompa Trek',
      description,
      touristType: 'Trekkers seeking culture, nature and spiritual sites in Dolpo',
      areaServed: { '@type': 'AdministrativeArea', name: 'Dolpa District, Shey Phoksundo National Park, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 12,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Day 1 – Arrival in Nepalgunj (200m)' },
          { '@type': 'ListItem', position: 2, name: 'Day 2 – Flight to Juphal (2,500m)' },
          { '@type': 'ListItem', position: 3, name: 'Day 3 – Trek to Dunai (2,500m)' },
          { '@type': 'ListItem', position: 4, name: 'Day 4 – Trek to Tripurakot (2,800m)' },
          { '@type': 'ListItem', position: 5, name: 'Day 5 – Trek to Ringmo Village (3,600m)' },
          { '@type': 'ListItem', position: 6, name: 'Day 6 – Trek to Shey Gompa (4,200m)' },
          { '@type': 'ListItem', position: 7, name: 'Day 7 – Explore Shey Gompa surroundings' },
          { '@type': 'ListItem', position: 8, name: 'Day 8–10 – Return trek to Juphal' },
          { '@type': 'ListItem', position: 11, name: 'Day 11 – Flight back to Nepalgunj' },
          { '@type': 'ListItem', position: 12, name: 'Day 12 – Departure' }
        ]
      },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-shey-gompa';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why trek to Shey Gompa?', acceptedAnswer: { '@type': 'Answer', text: 'Shey Gompa is a sacred monastery in Dolpo that blends spirituality, culture and adventure. Expect traditional Buddhist rituals, interactions with monks, and remote village life amid Himalayan peaks.' } },
        { '@type': 'Question', name: 'How difficult is the trek?', acceptedAnswer: { '@type': 'Answer', text: 'Moderate. Highest point around 4,200 m with gradual ascents. Prior trekking fitness and acclimatization recommended.' } },
        { '@type': 'Question', name: 'When is the best time to trek?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March–May) and Autumn (September–November) for clear weather and stable trails. Avoid monsoon and winter due to rain and snow.' } },
        { '@type': 'Question', name: 'What cultural experiences can I expect?', acceptedAnswer: { '@type': 'Answer', text: 'Tibetan-influenced villages, monasteries, prayer flags and festivals. At Shey Gompa, observe rituals, meet monks and learn local Buddhist traditions.' } },
        { '@type': 'Question', name: 'What wildlife can be seen?', acceptedAnswer: { '@type': 'Answer', text: 'Within Shey Phoksundo National Park: Himalayan monals, blue sheep, Himalayan tahr, musk deer and rare snow leopards.' } },
        { '@type': 'Question', name: 'Accommodation and food along the trek?', acceptedAnswer: { '@type': 'Answer', text: 'Basic lodges and tea houses serve dal bhat, noodles and bread. Facilities are simple at higher altitudes—carry essentials like snacks, purification and warm layers.' } },
        { '@type': 'Question', name: 'Is travel insurance necessary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—comprehensive insurance including medical, evacuation and trekking accidents is strongly recommended in this remote region.' } },
        { '@type': 'Question', name: 'How should I prepare?', acceptedAnswer: { '@type': 'Answer', text: 'Train cardio, strength and long hikes. Prepare mentally for isolation, long trekking days and limited connectivity; follow acclimatization best practices.' } }
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
        <img src={hero} alt="Shey Gompa trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Shey Gompa Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Sacred monastery journey through remote Dolpo</p>
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
                The Shey Gompa Trek is a remarkable journey into the remote Dolpo region of western Nepal, leading trekkers to one of the most sacred Buddhist monasteries in the Himalayas – Shey Gompa (Monastery). This trek is moderately challenging, taking adventurers through lush river valleys, alpine meadows, rhododendron forests, and traditional Tibetan-style villages. It is perfect for trekkers seeking a blend of cultural exploration, natural beauty, and spiritual experience.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Trekkers will witness the serene ambiance of the Shey Gompa monastery, explore local villages with Tibetan Buddhist influences, and enjoy panoramic views of Kanjiroba Himal, Churen Himal, and other Himalayan peaks. The trek also offers encounters with unique wildlife, including Himalayan monals, blue sheep, and musk deer.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit the ancient Shey Gompa Monastery, one of the holiest sites in Dolpo.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience authentic Dolpo-Tibetan culture, including prayer rituals and festivals.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Trek through scenic valleys, alpine meadows, and rhododendron forests.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Enjoy panoramic mountain views of Kanjiroba Himal and surrounding peaks.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Spot rare wildlife such as snow leopards, Himalayan tahr, and blue sheep.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Stay in traditional villages and interact with local people to understand their lifestyle.</span></li>
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
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">12–14 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">4,200 m (Shey Gompa)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Nepalgunj / Juphal</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">March–May / September–November</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits Required: Dolpa Restricted Area Permit, TIMS.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why trek to Shey Gompa?</h3>
              <p className="text-muted-foreground">Shey Gompa is a sacred monastery in Dolpo, offering a unique blend of spirituality, culture, and adventure. Trekkers can witness traditional Buddhist rituals, interact with monks, and explore remote villages surrounded by stunning Himalayan peaks. It’s perfect for trekkers seeking cultural immersion in a serene environment.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
              <p className="text-muted-foreground">Moderate difficulty and suitable for trekkers with basic fitness. Highest point is 4,200 m; gradual ascents and acclimatization make it manageable. Fitness, endurance and preparation remain essential.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">When is the best time to trek?</h3>
              <p className="text-muted-foreground">Spring (March–May) and Autumn (September–November) offer clear weather, moderate temperatures and dry trails. Avoid monsoon and winter due to heavy rain and snow.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What cultural experiences can I expect?</h3>
              <p className="text-muted-foreground">Expect Tibetan-influenced villages, ancient monasteries, prayer flags and local festivals. Visiting Shey Gompa reveals Buddhist rituals and everyday life of monks and villagers.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What wildlife can be seen?</h3>
              <p className="text-muted-foreground">Within Shey Phoksundo National Park: Himalayan monals, blue sheep, Himalayan tahr, musk deer and rarely snow leopards. Birders can spot snowcocks and pheasants.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation and food?</h3>
              <p className="text-muted-foreground">Basic lodges and tea houses serve dal bhat, noodles and bread. Facilities are simple at altitude; carry snacks, purification tablets and warm layers.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Travel insurance and preparation</h3>
              <p className="text-muted-foreground">Comprehensive insurance covering medical, helicopter evacuation and trekking accidents is strongly recommended. Train cardio/strength and long hikes; prepare mentally for remoteness and limited connectivity.</p>
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
              <div className="space-y-8" aria-label="Shey Gompa daily itinerary">
                {[
                  ['Day 1 – Arrival in Nepalgunj (200m)', 'Arrive at Nepalgunj airport, meet your trekking team, and attend the trek briefing.'],
                  ['Day 2 – Flight to Juphal (2,500m)', 'Take a scenic flight to Juphal, the gateway to Dolpo. Overnight stay in a guesthouse.'],
                  ['Day 3 – Trek to Dunai (2,500m)', 'Walk along the Thuli Bheri River, pass through terraced fields and pine forests, and reach Dunai village.'],
                  ['Day 4 – Trek to Tripurakot (2,800m)', 'Trek through lush valleys, local farmlands, and small villages, enjoying panoramic views.'],
                  ['Day 5 – Trek to Ringmo Village (3,600m)', 'Enter the alpine region, reach Ringmo near Phoksundo Lake, and explore the local Tibetan-style village.'],
                  ['Day 6 – Trek to Shey Gompa (4,200m)', 'Ascend gradually to Shey Gompa Monastery, immerse in the spiritual atmosphere, and enjoy panoramic Himalayan views.'],
                  ['Day 7 – Explore Shey Gompa surroundings', 'Visit nearby villages, interact with monks, observe prayer rituals, and explore trails with breathtaking views.'],
                  ['Day 8–10 – Return trek to Juphal', 'Retrace the trail through forests, villages, and river valleys, enjoying the scenery and cultural experiences along the way.'],
                  ['Day 11 – Flight back to Nepalgunj', 'Return flight and overnight stay in Nepalgunj.'],
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Shey Gompa Trek</h2>
              <p className="text-muted-foreground">Send your dates and group size. We'll confirm permits, logistics and availability within 24 hours.</p>
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

export default SheyGompa;
