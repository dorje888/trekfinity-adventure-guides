import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhoksundoLake: React.FC = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Phoksundo Lake Trek | Shey Phoksundo National Park, Upper Dolpo (14–16 Days) | TrekFinity';
    const description = "Phoksundo Lake Trek: journey to Nepal's deepest and most mesmerizing turquoise lake at 3,600 m in Upper Dolpo. Explore Shey Phoksundo National Park, Tibetan-influenced villages, monasteries, forests and alpine meadows with views of Kanjiroba Himal.";
    const keywords = 'Phoksundo Lake Trek, Phoksumdo, Shey Phoksundo National Park, Dolpo trek, Ringmo Village, Nepalgunj Juphal trek, Kanjiroba Himal, Dolpa Restricted Area Permit, TIMS, Buddhist monasteries, moderate challenging trek Nepal, 14–16 days';

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
    const idTrip = 'ld-trip-phoksundo-lake';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Phoksundo Lake Trek',
      description,
      touristType: 'Trekkers seeking natural beauty, culture and wildlife in Upper Dolpo',
      areaServed: { '@type': 'AdministrativeArea', name: 'Dolpa District, Shey Phoksundo National Park, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 12,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Day 1 – Arrival in Nepalgunj (200m)' },
          { '@type': 'ListItem', position: 2, name: 'Day 2 – Flight to Juphal (2,500m)' },
          { '@type': 'ListItem', position: 3, name: 'Day 3 – Trek to Dunai (2,500m)' },
          { '@type': 'ListItem', position: 4, name: 'Day 4 – Trek to Ringmo Village (3,600m)' },
          { '@type': 'ListItem', position: 5, name: 'Day 5 – Explore Phoksundo Lake' },
          { '@type': 'ListItem', position: 6, name: 'Day 6 – Trek to Shey Gompa (4,200m)' },
          { '@type': 'ListItem', position: 7, name: 'Day 7 – Trek to nearby Dolpo villages' },
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
    const idFaq = 'ld-faq-phoksundo-lake';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why trek to Phoksundo Lake?', acceptedAnswer: { '@type': 'Answer', text: 'Phoksundo Lake is the deepest and one of the most sacred lakes in Nepal. The trek combines pristine turquoise waters, breathtaking landscapes, spiritual significance, and encounters with remote Dolpo villages and ancient monasteries.' } },
        { '@type': 'Question', name: 'Difficulty level of the trek?', acceptedAnswer: { '@type': 'Answer', text: 'Moderate to challenging, with altitudes up to 4,300 m and some long walking days. Proper acclimatization and fitness are essential.' } },
        { '@type': 'Question', name: 'Best season for trekking?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March–May) and autumn (September–November) offer clear skies, stable temperatures and ideal trail conditions. Monsoon and winter bring rain/snow and are more challenging.' } },
        { '@type': 'Question', name: 'Cultural experiences along the trail?', acceptedAnswer: { '@type': 'Answer', text: 'Tibetan-influenced Buddhist culture with monasteries, prayer wheels, festivals and traditional farming. Friendly local interactions enrich the experience.' } },
        { '@type': 'Question', name: 'Wildlife and nature?', acceptedAnswer: { '@type': 'Answer', text: 'Within Shey Phoksundo National Park, wildlife includes snow leopards, blue sheep, musk deer and Himalayan monals. Landscapes span alpine meadows, river valleys and pristine forests.' } },
        { '@type': 'Question', name: 'Accommodation and food?', acceptedAnswer: { '@type': 'Answer', text: 'Tea houses and basic lodges serve dal bhat, noodles and local bread. Facilities thin out at higher altitudes—carry essentials.' } },
        { '@type': 'Question', name: 'Travel insurance and safety', acceptedAnswer: { '@type': 'Answer', text: 'Insurance covering medical emergencies, helicopter evacuation and trekking accidents is mandatory due to remote terrain and fast-changing weather.' } },
        { '@type': 'Question', name: 'Preparation tips', acceptedAnswer: { '@type': 'Answer', text: 'Train cardio, strength and long hikes. Prepare mentally for remote sections and limited connectivity.' } }
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
        <img src={hero} alt="Phoksundo Lake trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Phoksundo Lake Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Turquoise sacred lake in Shey Phoksundo National Park</p>
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
                The Phoksundo Lake Trek leads adventurers to Nepal’s deepest and most mesmerizing lake at 3,600m in Upper Dolpa. Part of Shey Phoksundo National Park, the trek combines pristine natural landscapes, high Himalayan mountains, dense forests, and remote Tibetan-influenced villages. The trail is ideal for those seeking a combination of natural beauty, adventure, culture, and wildlife. Trekkers will also witness rare flora and fauna, including snow leopards, musk deer, and Himalayan monals.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Phoksundo Lake is considered sacred by the local people, adding spiritual significance to the journey. The trek is moderately challenging but highly rewarding, offering spectacular photography opportunities and cultural immersion.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit Phoksundo Lake, known for its turquoise waters and sacred importance.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Trek through remote Dolpo villages and experience Tibetan-influenced culture.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Shey Phoksundo National Park with diverse wildlife and alpine landscapes.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Scenic views of Kanjiroba Himal, Churen Himal, and surrounding peaks.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Discover pristine forests, river valleys, and alpine meadows along the trail.</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Observe local festivals, monasteries, and traditional Dolpo lifestyle.</span></li>
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
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">14–16 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">4,300 m</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate to Challenging</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Nepalgunj / Juphal</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">March–May / September–November</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits Required: Shey Phoksundo National Park Permit, Dolpa Restricted Area Permit, TIMS.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why trek to Phoksundo Lake?</h3>
              <p className="text-muted-foreground">Phoksundo Lake is not only the deepest lake in Nepal but also a sacred site for local Buddhist communities. The trek offers breathtaking landscapes, pristine waters, and a spiritual experience, combined with encounters with remote Dolpo villages and ancient monasteries.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Difficulty level of the trek?</h3>
              <p className="text-muted-foreground">Moderate to challenging, with altitudes reaching 4,300m. Trekkers must be physically fit and prepared for long walking days. Proper acclimatization is essential to avoid altitude sickness.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best season for trekking?</h3>
              <p className="text-muted-foreground">Spring (March–May) and autumn (September–November) provide clear skies, stable temperatures, and ideal trail conditions. The monsoon and winter are challenging due to heavy rainfall and snow.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cultural experiences along the trail?</h3>
              <p className="text-muted-foreground">The area is rich in Tibetan-influenced culture, with Buddhist monasteries, prayer wheels, and festivals. Trekkers witness local rituals, traditional farming, and interact with friendly villagers.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife and nature?</h3>
              <p className="text-muted-foreground">Shey Phoksundo National Park is home to rare wildlife such as snow leopards, musk deer, Himalayan monals, and blue sheep. The trail offers alpine meadows, river valleys, and pristine forests.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation and food?</h3>
              <p className="text-muted-foreground">Tea houses and basic lodges provide dal bhat, noodles, and local bread. Higher-altitude facilities are limited; trekkers should carry essential supplies.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Travel insurance and preparation tips</h3>
              <p className="text-muted-foreground">Insurance covering medical emergencies, helicopter evacuation, and trekking accidents is mandatory. Train cardio, strength, and long-hike endurance; prepare mentally for remote days and limited connectivity.</p>
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
              <div className="space-y-8" aria-label="Phoksundo Lake daily itinerary">
                {[
                  ['Day 1 – Arrival in Nepalgunj (200m)', 'Arrive, meet your trekking team, and attend the trek briefing.'],
                  ['Day 2 – Flight to Juphal (2,500m)', 'Scenic flight into Dolpa; overnight stay in Juphal.'],
                  ['Day 3 – Trek to Dunai (2,500m)', 'Trek along river valleys, terraced fields, and remote villages.'],
                  ['Day 4 – Trek to Ringmo Village (3,600m)', 'Arrive at the lakeside village, explore local homes and traditions.'],
                  ['Day 5 – Explore Phoksundo Lake', 'Enjoy photography, walk around the lake, and admire surrounding cliffs and waterfalls.'],
                  ['Day 6 – Trek to Shey Gompa (4,200m)', 'Visit ancient monastery and enjoy panoramic mountain views.'],
                  ['Day 7 – Trek to nearby Dolpo villages', 'Experience local culture, interact with villagers, and observe Tibetan rituals.'],
                  ['Day 8–10 – Return trek to Juphal', 'Retrace the trail through forests, valleys, and villages.'],
                  ['Day 11 – Flight back to Nepalgunj', 'Return flight; overnight stay in Nepalgunj.'],
                  ['Day 12 – Departure', 'Transfer to airport for onward journey.'],
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Phoksundo Lake Trek</h2>
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

export default PhoksundoLake;
