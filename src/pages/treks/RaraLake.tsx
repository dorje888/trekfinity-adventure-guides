import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const RaraLake: React.FC = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Rara Lake Trek | Queen of Lakes in Rara National Park (10–12 Days) | TrekFinity';
    const description = 'Rara Lake Trek: peaceful, off-the-beaten-path journey in remote Mugu, Karnali. Explore Nepal’s largest pristine lake (2,990 m), forests of pine/spruce/juniper, Thakuri & Malla villages, and wildlife in Rara National Park with views of snow-capped Himalayas.';
    const keywords = 'Rara Lake Trek, Rara National Park, Rara Lake Nepal, Mugu trekking, Off the Beaten Path Nepal, Queen of Lakes Nepal, Rara Lake itinerary, best time to visit Rara Lake, Rara Lake travel guide, Rara Lake Trek cost, Rara Lake Trek difficulty';

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
    const idTrip = 'ld-trip-rara-lake';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Rara Lake Trek',
      description,
      touristType: 'Trekkers seeking solitude, nature and culture in remote western Nepal',
      areaServed: { '@type': 'AdministrativeArea', name: 'Mugu District, Karnali Province, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 10,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Nepalgunj' },
          { '@type': 'ListItem', position: 2, name: 'Flight to Talcha (Mugu) and short trek' },
          { '@type': 'ListItem', position: 3, name: 'Trek to Rara Lake (Ringmo area)' },
          { '@type': 'ListItem', position: 4, name: 'Explore Rara Lake shores and forest trails' },
          { '@type': 'ListItem', position: 5, name: 'Lakeside hikes and photography day' },
          { '@type': 'ListItem', position: 6, name: 'Cultural exploration of local villages' },
          { '@type': 'ListItem', position: 7, name: 'Begin return trek toward Talcha' },
          { '@type': 'ListItem', position: 8, name: 'Arrive Talcha / buffer day' },
          { '@type': 'ListItem', position: 9, name: 'Flight to Nepalgunj' },
          { '@type': 'ListItem', position: 10, name: 'Departure' }
        ]
      },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-rara-lake';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How difficult is the Rara Lake Trek?', acceptedAnswer: { '@type': 'Answer', text: 'Moderate. Expect 5–6 hours of walking on hilly terrain with gradual ascents/descents. Max altitude ~3,450 m makes it manageable for most fit trekkers.' } },
        { '@type': 'Question', name: 'What is the altitude of Rara Lake?', acceptedAnswer: { '@type': 'Answer', text: 'Rara Lake sits at about 2,990 m (9,810 ft), the largest and highest lake in Nepal, ringed by pine, spruce and juniper forests with Himalayan views.' } },
        { '@type': 'Question', name: 'How do I reach Rara Lake?', acceptedAnswer: { '@type': 'Answer', text: 'Typically fly Kathmandu → Nepalgunj → Talcha (Mugu) and trek a few hours to the lake. Overland options via Surkhet or Jumla exist but take 2–3 extra days.' } },
        { '@type': 'Question', name: 'What wildlife can be seen in Rara National Park?', acceptedAnswer: { '@type': 'Answer', text: 'Over 50 mammal species (red panda, Himalayan black bear, musk deer, langurs) and 272 bird species (Himalayan monal, kalij pheasant, snow cock), plus rare flora.' } },
        { '@type': 'Question', name: 'Is camping necessary, or are there teahouses?', acceptedAnswer: { '@type': 'Answer', text: 'Teahouses/homestays exist along the main trail, though limited. Camping by the lake is popular for serenity—many combine both styles.' } },
        { '@type': 'Question', name: 'Do I need a guide or porter?', acceptedAnswer: { '@type': 'Answer', text: 'A local guide is recommended for safety, culture and logistics. Porters improve comfort by carrying gear and aiding with accommodation and meals.' } },
        { '@type': 'Question', name: 'Is the Rara Lake Trek safe for solo travelers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—generally safe with friendly locals and low crime. Still inform others of your plan and consider hiring a guide, especially in remote segments.' } },
        { '@type': 'Question', name: 'Can I swim in Rara Lake?', acceptedAnswer: { '@type': 'Answer', text: 'Not recommended due to very cold, deep water and protected ecosystem rules. Enjoy boating or relaxing along the shores instead.' } },
        { '@type': 'Question', name: 'What permits are required?', acceptedAnswer: { '@type': 'Answer', text: 'Rara National Park Entry Permit and TIMS card are required. Obtain in Kathmandu or Nepalgunj before starting the trek.' } },
        { '@type': 'Question', name: 'Why is Rara Lake called “The Queen of Lakes”?', acceptedAnswer: { '@type': 'Answer', text: 'For its vast, deep-blue water (10.8 sq km), changing hues and superb reflections beneath peaks like Chuchemara and Ruma Kand—among Nepal’s most photogenic sights.' } }
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
        <img src={hero} alt="Rara Lake trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Rara Lake Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Queen of Lakes in remote Rara National Park</p>
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
                The Rara Lake Trek is one of Nepal’s most stunning and peaceful trekking experiences, taking you deep into the remote wilderness of Mugu District in western Nepal. Known as the “Queen of Lakes”, Rara Lake lies at an altitude of 2,990 meters inside Rara National Park, Nepal’s smallest yet one of its most beautiful national parks.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                This trek journeys through pine, spruce, and juniper forests, with snow-capped Himalayan peaks above. You’ll pass small villages, ancient monasteries, alpine meadows and serene landscapes rarely visited by tourists. With crystal-clear waters reflecting sky and mountains, Rara Lake offers a dreamlike setting far from modern distractions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                For nature lovers, photographers and trekkers seeking solitude, Rara Lake Trek provides an authentic experience of Nepal’s wild, unspoiled beauty.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Rara Lake, Nepal’s largest and most pristine lake</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Trek inside Rara National Park; spot red panda, musk deer, Himalayan black bear</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Witness mountain reflections on turquoise waters</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience Thakuri & Malla village culture and hospitality</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Camp or stay in lakeside teahouses under starry skies</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Scenic mountain flight Nepalgunj → Talcha (Mugu)</span></li>
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
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">10–12 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">3,450 m (Gurchi Lagna Pass)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Nepalgunj / Talcha (Mugu)</p></div></div>
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
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the Rara Lake Trek?</h3>
              <p className="text-muted-foreground">Moderate. 5–6 hours of daily walking on hilly terrain with gradual ups/downs. Max altitude ~3,450 m—manageable with basic fitness.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What is the altitude of Rara Lake?</h3>
              <p className="text-muted-foreground">Rara Lake is 2,990 m above sea level—the largest and highest lake in Nepal—surrounded by forests and Himalayan views.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How do I reach Rara Lake?</h3>
              <p className="text-muted-foreground">Most fly Kathmandu → Nepalgunj → Talcha (Mugu), then trek a few hours. Overland jeep options via Surkhet/Jumla exist but are longer (2–3 days).</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife in Rara National Park</h3>
              <p className="text-muted-foreground">Home to red pandas, Himalayan black bears, musk deer and langurs; birders can spot Himalayan monal, kalij pheasant and snow cock.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Camping or teahouses?</h3>
              <p className="text-muted-foreground">Teahouses/homestays are available but limited; camping by the lake is popular for serenity. Many mix both options for flexibility.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Guide and porter?</h3>
              <p className="text-muted-foreground">Hiring a guide is recommended for safety and cultural insight; a porter helps with gear, comfort and logistics in remote stretches.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Is it safe for solo travelers?</h3>
              <p className="text-muted-foreground">Generally safe with friendly locals. Still, share your plan or hire a guide, and prepare for remote sections and limited connectivity.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Can I swim in Rara Lake?</h3>
              <p className="text-muted-foreground">Swimming isn’t advised due to cold, depth and conservation rules. Enjoy lakeside relaxation, boating and photography instead.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Required permits</h3>
              <p className="text-muted-foreground">Rara National Park Entry Permit and TIMS card. Arrange in Kathmandu or Nepalgunj before the trek.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best time to visit</h3>
              <p className="text-muted-foreground">Spring and autumn for clear skies and vibrant landscapes. Winter is cold but possible; monsoon is slippery with leeches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (10 days core)</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
              <div className="space-y-8" aria-label="Rara Lake daily itinerary">
                {[
                  ['Arrival in Nepalgunj', 'Arrive in Nepalgunj, meet your trekking team and attend a briefing.'],
                  ['Flight to Talcha (Mugu) + short trek', 'Scenic mountain flight to Talcha; begin an easy trek toward the national park.'],
                  ['Trek to Rara Lake (Ringmo area)', 'Walk through forests and villages to reach the lakeside settlement.'],
                  ['Explore Rara Lake shores and forest trails', 'Photography and relaxed lakeside walks with mountain reflections.'],
                  ['Lakeside hikes and culture day', 'Optional hikes on meadows; learn about local Thakuri/Malla culture.'],
                  ['Village exploration', 'Visit nearby hamlets, monasteries and viewpoints around the park.'],
                  ['Return trek toward Talcha', 'Begin retracing steps with forest and ridge views.'],
                  ['Arrive Talcha / buffer day', 'Reach Talcha; keep a weather buffer for flights.'],
                  ['Flight to Nepalgunj', 'Fly back to Nepalgunj and rest.'],
                  ['Departure', 'Transfer for onward journey.'],
                ].map((it, i) => (
                  <div key={i} className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">{i+1}</span></div>
                    <h3 className="font-bold text-xl mb-1 text-foreground">{it[0]}</h3>
                    <p className="text-muted-foreground">{it[1]}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">Extend to 12 days with extra lakeside hikes or overland approach days via Surkhet/Jumla.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Rara Lake Trek</h2>
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

export default RaraLake;
