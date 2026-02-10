import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const KanchenjungaCircuit = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // Add parallax state for subtle hero image movement
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    let rAF = 0 as number | 0;
    const onScroll = () => {
      if (rAF) return;
      rAF = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rAF = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rAF) cancelAnimationFrame(rAF);
    };
  }, []);

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Kanchenjunga Circuit Trek | Remote Eastern Nepal High Pass Circuit (21–24 Days) | Calm Trek';
    const description = 'Kanchenjunga Circuit Trek: demanding 21–24 day Himalayan expedition encircling the world\'s 3rd highest peak. Remote high passes, Pangpema & Base Camp vistas, Limbu / Sherpa culture, rhododendron forests, glaciers, red panda habitat & authentic tea house immersion guided by Calm Trek.';
    const keywords = 'Kanchenjunga Circuit Trek, Kanchenjunga high pass expedition, Pangpema Pass 5100m, Kanchenjunga Base Camp guide, remote Eastern Nepal trek, long Himalayan circuit, Limbu Sherpa cultural trek, high altitude trekking Nepal, Calm Trek, red panda habitat, wilderness tea house trek, multi week Nepal trek';

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
    const idTrip = 'ld-trip-kanchenjunga-circuit';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Kanchenjunga Circuit Trek',
      description,
      touristType: 'Experienced trekkers seeking multi-week, high-altitude Himalayan circuits',
      areaServed: { '@type': 'AdministrativeArea', name: 'Taplejung, Eastern Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 17,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m)' },
          { '@type': 'ListItem', position: 2, name: 'Drive/Flight to Taplejung (1,500 m)' },
          { '@type': 'ListItem', position: 3, name: 'Trek to Lelep (2,500 m)' },
          { '@type': 'ListItem', position: 4, name: 'Trek to Yamphudin (2,700 m)' },
          { '@type': 'ListItem', position: 5, name: 'Trek to Ghunsa (3,450 m)' },
          { '@type': 'ListItem', position: 6, name: 'Trek to Lhonak (4,300 m)' },
          { '@type': 'ListItem', position: 7, name: 'Trek to Kanchenjunga Base Camp (4,900 m)' },
          { '@type': 'ListItem', position: 8, name: 'Explore Base Camp and trek to Pangpema (5,050 m)' },
          { '@type': 'ListItem', position: 9, name: 'Cross Pangpema Pass (5,100 m) and trek to Ramche (4,400 m)' },
          { '@type': 'ListItem', position: 10, name: 'Trek to Yalung (3,700 m)' },
          { '@type': 'ListItem', position: 11, name: 'Trek to Mheun (3,200 m)' },
          { '@type': 'ListItem', position: 12, name: 'Trek to Tapethok (2,900 m)' },
          { '@type': 'ListItem', position: 13, name: 'Trek to Phungling Bazaar (2,400 m)' },
          { '@type': 'ListItem', position: 14, name: 'Trek to Suketar (1,850 m)' },
          { '@type': 'ListItem', position: 15, name: 'Flight/Drive back to Taplejung' },
          { '@type': 'ListItem', position: 16, name: 'Drive/Flight to Kathmandu' },
          { '@type': 'ListItem', position: 17, name: 'Departure from Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '3250', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'Calm Trek' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-kanchenjunga-circuit';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why do trekkers choose the Kanchenjunga Circuit Trek?', acceptedAnswer: { '@type': 'Answer', text: 'A once-in-a-lifetime loop around the world\'s third-highest peak with pristine landscapes, untouched villages and diverse Himalayan scenery away from the crowds.' } },
        { '@type': 'Question', name: 'How difficult is the circuit?', acceptedAnswer: { '@type': 'Answer', text: 'Very challenging due to long walking days, 5,000 m+ passes and remote terrain. Strong fitness, acclimatization and an experienced guide are essential.' } },
        { '@type': 'Question', name: 'Best season for trekking?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (Mar–May) and Autumn (Sep–Nov) for clear skies, blooms and stable weather. Winter is extremely cold; Monsoon brings landslides and poor visibility.' } },
        { '@type': 'Question', name: 'Cultural experiences along the trail?', acceptedAnswer: { '@type': 'Answer', text: 'Meet Limbu, Sherpa and Rai communities; visit monasteries and sacred sites; learn about traditional customs, farming and cuisine.' } },
        { '@type': 'Question', name: 'Accommodation and food options?', acceptedAnswer: { '@type': 'Answer', text: 'Basic tea houses and lodges with shared facilities; meals like dal bhat, noodles and soups. Carry snacks and purification tablets for higher sections.' } },
        { '@type': 'Question', name: 'Is travel insurance necessary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—comprehensive cover for high-altitude trekking, medical emergencies and helicopter evacuation is highly recommended.' } },
        { '@type': 'Question', name: 'Can this trek be combined with North or South Base Camp treks?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, side trips to North or South Base Camps complement the circuit for closer glacier views and a longer, immersive experience.' } },
        { '@type': 'Question', name: 'Wildlife and nature along the trek?', acceptedAnswer: { '@type': 'Answer', text: 'Protected areas host red pandas, Himalayan monals, musk deer and snow leopards; diverse alpine flora and rhododendron forests thrive.' } },
        { '@type': 'Question', name: 'How should I prepare physically?', acceptedAnswer: { '@type': 'Answer', text: 'Train cardio and endurance with hikes carrying a pack; add leg and core strength; practice longer days and gradual altitude exposure.' } },
        { '@type': 'Question', name: 'What is the connectivity like?', acceptedAnswer: { '@type': 'Answer', text: 'Limited network coverage; occasional Wi‑Fi or satellite phone in lodges. Plan for minimal internet and inform family before departure.' } }
      ]
    });
    document.head.appendChild(scriptFaq);

    return () => {
      const t = document.getElementById(idTrip); if (t) t.remove();
      const f = document.getElementById(idFaq); if (f) f.remove();
    };
  }, []);

  const stats = [
    { label: 'Duration', value: '21–24 Days' },
    { label: 'Max Elevation', value: '~5,100 m' },
    { label: 'Difficulty', value: 'Very Challenging' },
    { label: 'Best Seasons', value: 'Mar–May / Sep–Nov' },
    { label: 'Region', value: 'Eastern Nepal' },
    { label: 'Group Size', value: '2–12' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden" aria-label="Kanchenjunga Circuit Trek Hero">
        {/* Backdrop image (fastest movement) */}
        <img
          src={hero}
          alt="Kanchenjunga Circuit trek hero"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.35, 140)}px) scale(1.12)`
          }}
        />
        {/* Mid layer subtle mist (moves slower) */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none will-change-transform"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.18, 60)}px)`
          }}
          aria-hidden="true"
        />
        {/* Foreground silhouette (slowest) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end will-change-transform"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.08, 30)}px)`
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full opacity-40">
            <path d="M0 160L60 150C120 140 240 120 360 110C480 100 600 100 720 110C840 120 960 140 1080 150C1200 160 1320 160 1380 160L1440 160V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0V160Z" fill="url(#mountainFade)" />
            <defs>
              <linearGradient id="mountainFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.65" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kanchenjunga Circuit Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Full Kanchenjunga massif loop across remote Eastern Nepal</p>
            <Link to="#booking" aria-label="Book Kanchenjunga Circuit Trek" className="cta-animated inline-flex items-center">
              Book This Trek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* At a Glance Section (light gray) */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-8">At a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-[15px] p-6 border border-[#e2e8f0]/70 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-[5px]"
              >
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">{s.label}</p>
                <p className="text-xl font-semibold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section (white) */}
      <section className="py-20 bg-white border-t border-[#e2e8f0]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Kanchenjunga Circuit Trek is a spectacular long-route adventure circling the majestic Kanchenjunga massif. Spanning remote Eastern Nepal, the circuit rewards you with panoramic views of Kanchenjunga, Kumbhakarna and other Himalayan giants while traversing rhododendron forests, alpine meadows, high passes and traditional Limbu and Sherpa villages.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                This is a very challenging, multi-week itinerary ideal for avid trekkers seeking solitude, cultural immersion and untouched natural landscapes across glacial valleys and serene high country.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Complete the full Kanchenjunga Circuit trek</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Spectacular views of Kanchenjunga and surrounding peaks</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cross high Himalayan passes with snow-capped panoramas</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience Limbu and Sherpa cultures along the trail</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Rhododendron forests, alpine meadows and glacial valleys</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit monasteries, sacred sites and remote villages</span></li>
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
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 lg:max-h-[80vh] lg:overflow-y-auto">
                <h3 className="text-xl font-semibold text-foreground mb-6">Trek Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">21–24 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">~5,100 m (Pangpema Pass)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Very Challenging</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Taplejung / Taplejung</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May / Sep–Nov</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits: Kanchenjunga Conservation Area Permit (KCAP). Highly recommend licensed guide/porter; ensure insurance covering high altitude and evacuation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (light gray) */}
      <section className="py-16 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Moved FAQ items */}
            <div><h3 className="text-2xl font-bold text-foreground mb-3">Why do trekkers choose the Kanchenjunga Circuit Trek?</h3><p className="text-muted-foreground">A once-in-a-lifetime loop around the world&apos;s third-highest peak with pristine landscapes, untouched villages and diverse Himalayan scenery away from the crowds.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the circuit?</h3><p className="text-muted-foreground">Very challenging: long walking days, high passes over 5,000 m and limited facilities. Strong fitness, acclimatization and experienced guidance are essential.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">Best season for trekking</h3><p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) provide blooms, clear skies and stable conditions. Winter is very cold; Monsoon brings landslides and poor visibility.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">Cultural experiences along the trail</h3><p className="text-muted-foreground">Meet Limbu, Sherpa and Rai communities, visit monasteries and sacred sites, and learn about customs, farming and cuisine.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">Accommodation &amp; food</h3><p className="text-muted-foreground">Basic tea houses/lodges with shared bathrooms; meals like dal bhat, noodles and soups. Carry snacks and water purification for high sections.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">Is travel insurance necessary?</h3><p className="text-muted-foreground">Yes—comprehensive insurance should cover high-altitude trekking, medical emergencies and helicopter evacuation in remote regions.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">Combining with Base Camps</h3><p className="text-muted-foreground">Add side trips to North or South Base Camps for closer glacier views and a more immersive expedition.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">Wildlife &amp; nature</h3><p className="text-muted-foreground">Protected habitats host red pandas, Himalayan monals, musk deer and snow leopards amid rhododendron forests and alpine flora.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">How to prepare physically</h3><p className="text-muted-foreground">Train cardio and strength; practice long day hikes with a pack; gradually build altitude exposure and mental resilience.</p></div>
            <div><h3 className="text-2xl font-bold text-foreground mb-3">Connectivity on the trek</h3><p className="text-muted-foreground">Limited network signals; occasional lodge Wi‑Fi/satellite phone. Plan for offline days and inform family before departure.</p></div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline (white) */}
      <section className="py-16 bg-white border-t border-[#e2e8f0]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (17 days core)</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
              <div className="space-y-8" aria-label="Kanchenjunga Circuit daily itinerary">
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Arrival in Kathmandu (1,400 m)</h3><p className="text-muted-foreground">Briefing on route, safety and equipment; overnight in hotel.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive/Flight to Taplejung (1,500 m)</h3><p className="text-muted-foreground">Travel east; meet your trekking team and check gear.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Lelep (2,500 m)</h3><p className="text-muted-foreground">Terraced fields, forest paths and traditional villages.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Yamphudin (2,700 m)</h3><p className="text-muted-foreground">Gentle ascent through settlements and streams.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Ghunsa (3,450 m)</h3><p className="text-muted-foreground">Rhododendron forests and meadows to a Sherpa village and monastery.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Lhonak (4,300 m)</h3><p className="text-muted-foreground">Alpine landscapes with snow-capped peaks; overnight in Lhonak.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Kanchenjunga Base Camp (4,900 m)</h3><p className="text-muted-foreground">Panoramic views and glacier exploration; overnight in tents.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Explore Base Camp and trek to Pangpema (5,050 m)</h3><p className="text-muted-foreground">Morning at BC; move towards Pangpema for close glacier vistas.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Cross Pangpema Pass (~5,100 m) → Ramche (4,400 m)</h3><p className="text-muted-foreground">Challenging high pass day with grand panoramas; descend to Ramche.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Ramche → Yalung (3,700 m)</h3><p className="text-muted-foreground">Forests and meadow walking en route to Yalung.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Yalung → Mheun (3,200 m)</h3><p className="text-muted-foreground">Rivers, terraces and traditional settlements.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Mheun → Tapethok (2,900 m)</h3><p className="text-muted-foreground">Scenic valley walk through small villages.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Tapethok → Phungling Bazaar (2,400 m)</h3><p className="text-muted-foreground">Descend to a bustling market town.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Phungling → Suketar (1,850 m)</h3><p className="text-muted-foreground">Final trekking leg with broad mountain views.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">15</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Flight/Drive back to Taplejung</h3><p className="text-muted-foreground">Return logistics and celebration with the team.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">16</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive/Flight to Kathmandu</h3><p className="text-muted-foreground">Travel back to the capital; optional rest/sightseeing.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">17</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Departure from Kathmandu</h3><p className="text-muted-foreground">Airport transfer for your onward journey.</p></div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">Optional extension days 18–21 for acclimatization or scenic detours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section (white) */}
      <section id="booking" className="py-20 bg-white border-t border-[#e2e8f0]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Kanchenjunga Circuit</h2>
              <p className="text-muted-foreground">Send your dates and group size. We\'ll confirm permits, logistics and availability within 24 hours.</p>
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

export default KanchenjungaCircuit;
