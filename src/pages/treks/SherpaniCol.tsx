import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const SherpaniCol: React.FC = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Sherpani Col Trek | Everest–Makalu Connector (18 Days, 5,180 m) | TrekFinity';
    const description = 'The Sherpani Col Trek is a challenging high-altitude trek connecting the Everest and Makalu regions. It crosses the remote Sherpani Col pass (5,180m) and offers panoramic views of Makalu, Everest, and surrounding Himalayan peaks. This trek is perfect for seasoned adventurers seeking off-the-beaten-path experiences—combining rugged terrain, glaciers, alpine meadows, and traditional Sherpa culture.';
    const keywords = 'Sherpani Col Trek 5180m, Everest to Makalu trek, Makalu Barun National Park permit, TIMS, Tumlingtar to Lukla trek, Yangle Kharka, Barun Valley, experienced trekkers, off the beaten path Nepal';

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
    const idTrip = 'ld-trip-sherpani-col';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Sherpani Col Trek',
      description,
      touristType: 'Experienced trekkers; high-altitude Himalayan terrain',
      areaServed: { '@type': 'AdministrativeArea', name: 'Everest (Khumbu) and Makalu Barun regions, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 12,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400m)' },
          { '@type': 'ListItem', position: 2, name: 'Flight to Tumlingtar (600m) and drive to Num (1,200m)' },
          { '@type': 'ListItem', position: 3, name: 'Trek to Seduwa (1,700m)' },
          { '@type': 'ListItem', position: 4, name: 'Trek to Yangle Kharka (3,050m)' },
          { '@type': 'ListItem', position: 5, name: 'Trek to Seduwa (3,500m)' },
          { '@type': 'ListItem', position: 6, name: 'Trek to Makalu Base Camp (4,870m)' },
          { '@type': 'ListItem', position: 7, name: 'Trek to Sherpani Col (5,180m)' },
          { '@type': 'ListItem', position: 8, name: 'Trek to Barun Valley (4,200m)' },
          { '@type': 'ListItem', position: 9, name: 'Trek to Yangle Kharka (3,050m)' },
          { '@type': 'ListItem', position: 10, name: 'Trek to Num (1,200m)' },
          { '@type': 'ListItem', position: 11, name: 'Flight back to Kathmandu' },
          { '@type': 'ListItem', position: 12, name: 'Departure from Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-sherpani-col';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why trek Sherpani Col?', acceptedAnswer: { '@type': 'Answer', text: 'Sherpani Col Trek is a rare, off-the-beaten-path adventure connecting Everest and Makalu regions. Trekkers experience high-altitude landscapes, glaciers, and panoramic views of multiple 8,000m peaks. The solitude and remoteness offer a truly immersive Himalayan experience.' } },
        { '@type': 'Question', name: 'How challenging is it?', acceptedAnswer: { '@type': 'Answer', text: 'The trek is very challenging, suitable only for experienced trekkers. High altitudes, steep passes, and rugged terrain demand excellent fitness, acclimatization, and trekking experience.' } },
        { '@type': 'Question', name: 'Best season for trekking?', acceptedAnswer: { '@type': 'Answer', text: 'March–May and September–November provide clear skies, moderate temperatures, and safe trail conditions. Monsoon or winter trekking is risky due to landslides and heavy snow.' } },
        { '@type': 'Question', name: 'Cultural experiences?', acceptedAnswer: { '@type': 'Answer', text: 'Trekkers pass Sherpa villages, visit monasteries, and observe traditional customs. Locals share meals and stories, offering insights into Himalayan culture.' } },
        { '@type': 'Question', name: 'Accommodation and food?', acceptedAnswer: { '@type': 'Answer', text: 'Tea houses and tents provide basic lodging and meals. Typical dishes include dal bhat, noodles, soups, and local snacks. Higher passes have limited facilities; trekkers should carry essentials.' } },
        { '@type': 'Question', name: 'Travel insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Highly recommended due to remote terrain and high-altitude risks. Coverage should include evacuation, medical emergencies, and trip delays.' } },
        { '@type': 'Question', name: 'Wildlife and nature?', acceptedAnswer: { '@type': 'Answer', text: 'The route passes protected areas with Himalayan flora and fauna. Wildlife may include red pandas, musk deer, Himalayan monals, and rare alpine plants.' } }
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
        <img src={hero} alt="Sherpani Col trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sherpani Col Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Everest–Makalu connector over Sherpani Col (5,180 m)</p>
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
                The Sherpani Col Trek is a challenging high-altitude trek connecting the Everest and Makalu regions. It crosses the remote Sherpani Col pass (5,180m) and offers panoramic views of Makalu, Everest, and surrounding Himalayan peaks. This trek is perfect for seasoned adventurers seeking off-the-beaten-path experiences. The journey combines rugged terrain, glaciers, alpine meadows, and traditional Sherpa culture.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cross Sherpani Col (5,180m), a high Himalayan pass</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Stunning views of Makalu, Everest, Lhotse, and Chamlang</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Remote Sherpa villages and monasteries</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Alpine meadows, glaciers, and high ridges</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience unique Himalayan flora and fauna</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Adventure trek suitable for experienced trekkers</span></li>
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
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">18 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">5,180m (Sherpani Col)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Very Challenging</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Tumlingtar / Lukla</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">March–May, September–November</p></div></div>
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
              <h3 className="text-2xl font-bold text-foreground mb-3">Why trek Sherpani Col?</h3>
              <p className="text-muted-foreground">Sherpani Col Trek is a rare, off-the-beaten-path adventure connecting Everest and Makalu regions. Trekkers experience high-altitude landscapes, glaciers, and panoramic views of multiple 8,000m peaks. The solitude and remoteness offer a truly immersive Himalayan experience.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How challenging is it?</h3>
              <p className="text-muted-foreground">The trek is very challenging, suitable only for experienced trekkers. High altitudes, steep passes, and rugged terrain demand excellent fitness, acclimatization, and trekking experience.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best season for trekking?</h3>
              <p className="text-muted-foreground">March–May and September–November provide clear skies, moderate temperatures, and safe trail conditions. Monsoon or winter trekking is risky due to landslides and heavy snow.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cultural experiences?</h3>
              <p className="text-muted-foreground">Trekkers pass Sherpa villages, visit monasteries, and observe traditional customs. Locals share meals and stories, offering insights into Himalayan culture.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation and food?</h3>
              <p className="text-muted-foreground">Tea houses and tents provide basic lodging and meals. Typical dishes include dal bhat, noodles, soups, and local snacks. Higher passes have limited facilities; trekkers should carry essentials.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Travel insurance?</h3>
              <p className="text-muted-foreground">Highly recommended due to remote terrain and high-altitude risks. Coverage should include evacuation, medical emergencies, and trip delays.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife and nature?</h3>
              <p className="text-muted-foreground">The route passes protected areas with Himalayan flora and fauna. Wildlife may include red pandas, musk deer, Himalayan monals, and rare alpine plants.</p>
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
              <div className="space-y-8" aria-label="Sherpani Col daily itinerary">
                {[
                  ['Day 1 – Arrival in Kathmandu (1,400m)', 'Arrive in Kathmandu, meet the trekking team, and attend trek briefing.'],
                  ['Day 2 – Flight to Tumlingtar (600m) and drive to Num (1,200m)', 'Take flight to Tumlingtar and drive to Num village. Overnight stay.'],
                  ['Day 3 – Trek to Seduwa (1,700m)', 'Walk along the Arun River, passing forests and villages. Overnight stay.'],
                  ['Day 4 – Trek to Yangle Kharka (3,050m)', 'Enter alpine meadows and rhododendron forests. Overnight stay.'],
                  ['Day 5 – Trek to Seduwa (3,500m)', 'High-altitude trekking with stunning mountain views. Overnight stay.'],
                  ['Day 6 – Trek to Makalu Base Camp (4,870m)', 'Reach Makalu Base Camp, enjoy panoramic views and explore the area. Overnight in tents.'],
                  ['Day 7 – Trek to Sherpani Col (5,180m)', 'Cross the challenging Sherpani Col pass with expert guides. Take in breathtaking panoramic views. Overnight in tents.'],
                  ['Day 8 – Trek to Barun Valley (4,200m)', 'Descend into Barun Valley with glaciers and alpine meadows. Explore remote landscapes. Overnight stay.'],
                  ['Day 9 – Trek to Yangle Kharka (3,050m)', 'Begin descent through forests and villages. Overnight in Yangle Kharka.'],
                  ['Day 10 – Trek to Num (1,200m)', 'Descend further, passing rivers and local villages. Overnight stay in Num.'],
                  ['Day 11 – Flight back to Kathmandu', 'Return to Kathmandu, optional sightseeing or shopping. Overnight stay.'],
                  ['Day 12 – Departure from Kathmandu', 'Transfer to the airport for onward journey.'],
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Sherpani Col Trek</h2>
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
                <textarea rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us about route preferences, diet, insurance, etc." />
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

export default SherpaniCol;
