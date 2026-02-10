import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Trees, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const JumlaToRaraLake: React.FC = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Jumla to Rara Lake Trek | Remote Karnali Traverse (9–11 Days) | TrekFinity';
    const description = 'Jumla to Rara Lake Trek: a serene traverse across remote Karnali through forests, ridges and heritage hamlets, culminating at Nepal’s largest lake in Rara National Park. 9–11 days, moderate, best in Mar–May and Sep–Nov.';
    const keywords = 'Jumla to Rara Lake Trek, Rara trek via Jumla, Karnali trekking Nepal, Rara National Park trek itinerary, remote trek Nepal, best time Jumla Rara, Jumla to Rara difficulty, Jumla Rara cost';

    document.title = title;
    const ensure = (sel: string, create: () => HTMLElement) => {
      let el = document.querySelector(sel) as HTMLElement | null;
      if (!el) { el = create(); document.head.appendChild(el); }
      return el;
    };
    const setMeta = (name: string, content: string) => {
      const m = ensure(`meta[name="${name}"]`, () => { const x = document.createElement('meta'); x.setAttribute('name', name); return x; });
      (m as HTMLMetaElement).setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);

    const setOg = (property: string, content: string) => {
      const m = ensure(`meta[property="${property}"]`, () => { const x = document.createElement('meta'); x.setAttribute('property', property); return x; });
      (m as HTMLMetaElement).setAttribute('content', content);
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
    const idTrip = 'ld-trip-jumla-rara';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Jumla to Rara Lake Trek',
      description,
      touristType: 'Trekkers seeking remote, off-the-beaten-path cultural and natural immersion',
      areaServed: { '@type': 'AdministrativeArea', name: 'Jumla & Mugu Districts, Karnali, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 10,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Fly Kathmandu → Nepalgunj' },
          { '@type': 'ListItem', position: 2, name: 'Fly Nepalgunj → Jumla, trek begins' },
          { '@type': 'ListItem', position: 3, name: 'Forest trails and ridge walks toward Sinja region' },
          { '@type': 'ListItem', position: 4, name: 'Heritage villages and river valleys' },
          { '@type': 'ListItem', position: 5, name: 'Approach Rara National Park boundary' },
          { '@type': 'ListItem', position: 6, name: 'Reach Rara Lake (Ringmo area)' },
          { '@type': 'ListItem', position: 7, name: 'Explore Rara Lake – viewpoints and lakeside trails' },
          { '@type': 'ListItem', position: 8, name: 'Optional hike to scenic ridge (e.g., Chuchemara area)' },
          { '@type': 'ListItem', position: 9, name: 'Exit toward Talcha – weather buffer' },
          { '@type': 'ListItem', position: 10, name: 'Fly Talcha → Nepalgunj → Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-jumla-rara';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How long is the Jumla to Rara Lake Trek?', acceptedAnswer: { '@type': 'Answer', text: 'Typically 9–11 days, depending on pace, route detail, and flight logistics between Nepalgunj, Jumla and Talcha.' } },
        { '@type': 'Question', name: 'What is the difficulty level?', acceptedAnswer: { '@type': 'Answer', text: 'Moderate. Expect 5–7 hours of hiking per day on hilly trails with gradual ascents/descents and occasional steep sections.' } },
        { '@type': 'Question', name: 'Maximum altitude on this route?', acceptedAnswer: { '@type': 'Answer', text: 'Around 3,800 m on optional ridges/viewpoints; Rara Lake itself is about 2,990 m above sea level.' } },
        { '@type': 'Question', name: 'Best seasons for the trek?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (Mar–May) and Autumn (Sep–Nov) offer the most stable weather and clear mountain views. Winter is cold; monsoon is wet and muddy.' } },
        { '@type': 'Question', name: 'Are permits required?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Rara National Park Entry Permit and TIMS card. Arrange in Kathmandu or Nepalgunj before flying to Jumla.' } },
        { '@type': 'Question', name: 'Are there teahouses or is camping needed?', acceptedAnswer: { '@type': 'Answer', text: 'Simple teahouses/homestays exist on the route and near Rara Lake. Camping can be added for flexibility and lakeside serenity.' } },
        { '@type': 'Question', name: 'How do I get in and out?', acceptedAnswer: { '@type': 'Answer', text: 'Typical access is flights: Kathmandu → Nepalgunj → Jumla to start; return via Talcha → Nepalgunj → Kathmandu. Keep a buffer day for weather.' } },
        { '@type': 'Question', name: 'Do I need a guide or porter?', acceptedAnswer: { '@type': 'Answer', text: 'A licensed local guide is highly recommended for navigation, culture and safety. Porters reduce load and improve comfort.' } }
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
        <img src={hero} alt="Jumla to Rara Lake trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Jumla to Rara Lake Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">A tranquil Karnali traverse to Nepal’s largest lake</p>
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
                The Jumla to Rara Lake Trek blends remote village culture, pristine forest paths and sweeping ridgelines, culminating at the brilliant blue waters of Rara—Nepal’s largest lake—within Rara National Park. This classic Karnali approach is quieter than most mainstream treks, rewarding you with solitude and authentic encounters.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Expect 5–7 hours of walking per day on rolling terrain, gaining and losing altitude gradually with occasional steeper sections. Teahouses and homestays are basic yet welcoming; camping remains an option for extra flexibility and lakeside serenity. Flights via Nepalgunj connect Jumla (start) and Talcha (exit).
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                This route is ideal for trekkers who value nature, photography and cultural immersion without extreme altitudes.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Traverse from Jumla to the turquoise shores of Rara Lake</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Walk through pine, spruce and juniper forests with birdlife</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Ridges and viewpoints with mountain and lake panoramas</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cultural insights in quiet Karnali hamlets and heritage valleys</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Optional ridge hike near Chuchemara for sweeping views</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Peaceful nights by the lake; stellar night skies</span></li>
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
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">9–11 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">~3,800 m (optional ridges)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Jumla → Rara (Talcha)</p></div></div>
                  <div className="flex items-center space-x-3"><Trees className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">March–May / September–November</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits Required: Rara National Park Entry Permit, TIMS.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
              <p className="text-muted-foreground">Moderate. Daily 5–7 hour walking days across rolling hills with some steeper sections. Basic fitness is sufficient.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What is the altitude of Rara Lake?</h3>
              <p className="text-muted-foreground">About 2,990 m. Optional ridges near the lake can reach around 3,800 m for broader views.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How do we access the trail?</h3>
              <p className="text-muted-foreground">Fly Kathmandu → Nepalgunj → Jumla to start; exit via Talcha → Nepalgunj → Kathmandu. Keep a buffer day for weather.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation & meals</h3>
              <p className="text-muted-foreground">Simple teahouses/homestays on route; basic menus with dal bhat, noodles, soups and local specialties. Camping optional.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife and forests</h3>
              <p className="text-muted-foreground">Expect pine, spruce and juniper forests with birdlife. Rara NP hosts red panda, musk deer and Himalayan black bear.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Permits</h3>
              <p className="text-muted-foreground">Rara National Park Entry Permit and TIMS card are required. We help arrange them in Kathmandu/Nepalgunj.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Guide and porter</h3>
              <p className="text-muted-foreground">A licensed guide is recommended for navigation and safety; a porter helps carry gear and improves comfort.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best time to go</h3>
              <p className="text-muted-foreground">Spring and autumn for clear views and stable weather. Winter is cold; monsoon brings rain and leeches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Sample Itinerary (10 days)</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
              <div className="space-y-8" aria-label="Jumla to Rara daily itinerary">
                {[
                  ['Kathmandu → Nepalgunj', 'Fly to Nepalgunj, trek briefing and trip preparation.'],
                  ['Nepalgunj → Jumla, trek to nearby village', 'Mountain flight to Jumla; begin an easy warm-up walk.'],
                  ['Forest trail day', 'Hike through pine and spruce forests with occasional ridge views.'],
                  ['Cultural valley walk', 'Pass heritage hamlets and river valleys toward the park approach.'],
                  ['Approach Rara NP', 'Enter the national park zone; peaceful woodland paths.'],
                  ['Arrive Rara Lake (Ringmo)', 'Reach the lakeside; enjoy the first views and sunset reflections.'],
                  ['Rara exploration day', 'Lakeside trails, monastery visit, optional boat ride (where allowed).'],
                  ['Optional ridge hike', 'Climb a nearby ridge (e.g., Chuchemara area) for sweeping panoramas.'],
                  ['Exit toward Talcha (buffer for weather)', 'Walk to Talcha or nearby and hold a weather buffer for flights.'],
                  ['Fly Talcha → Nepalgunj → Kathmandu', 'Return flights; trip ends.']
                ].map((it, i) => (
                  <div key={i} className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">{i+1}</span></div>
                    <h3 className="font-bold text-xl mb-1 text-foreground">{it[0]}</h3>
                    <p className="text-muted-foreground">{it[1]}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">Customize 9–11 days based on pace, side trips and flight schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Jumla to Rara Lake Trek</h2>
              <p className="text-muted-foreground">Share your dates and group size. We’ll confirm permits, logistics and availability within 24 hours.</p>
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

export default JumlaToRaraLake;
