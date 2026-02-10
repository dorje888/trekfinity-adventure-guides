import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const DamodarKunda = () => {
  const heroUrl = new URL('../../assets/upper-mustang.jpg', import.meta.url).href;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD
  React.useEffect(() => {
    const title = 'Damodar Kunda Trek (Upper Mustang) | Sacred Lakes Pilgrimage 14 Days | TrekFinity';
    const description = 'Damodar Kunda Trek: sacred pilgrimage to Upper Mustang’s holy lakes (4,890 m) near the Tibetan border. Remote Himalayan desert, Tibetan culture, and views of Dhaulagiri & Annapurna. Restricted Area trek; best May–Oct (August full moon). 14 days, moderate to strenuous.';
    const keywords = 'Damodar Kunda Trek, Upper Mustang pilgrimage trek, Damodar Kunda 4890m, Mustang restricted area permit, best time Damodar Kunda August full moon, Damodar Kunda itinerary 14 days, Yara Tangye trek, spiritual trek Nepal, sacred lakes trek, Jomsom to Damodar Kunda';

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

    const id = 'ld-trip-damodar-kunda';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Damodar Kunda Trek',
      description,
      touristType: 'Pilgrims and trekkers seeking remote, spiritual Himalayan journeys',
      areaServed: { '@type': 'AdministrativeArea', name: 'Upper Mustang, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m) – Welcome and trek briefing' },
          { '@type': 'ListItem', position: 2, name: 'Fly to Pokhara (822 m)' },
          { '@type': 'ListItem', position: 3, name: 'Fly to Jomsom (2,720 m), trek to Kagbeni (2,810 m)' },
          { '@type': 'ListItem', position: 4, name: 'Trek to Chele (3,050 m)' },
          { '@type': 'ListItem', position: 5, name: 'Trek to Syangboche (3,800 m)' },
          { '@type': 'ListItem', position: 6, name: 'Trek to Ghami (3,520 m)' },
          { '@type': 'ListItem', position: 7, name: 'Trek to Tsarang (3,560 m)' },
          { '@type': 'ListItem', position: 8, name: 'Trek to Yara Village (3,650 m)' },
          { '@type': 'ListItem', position: 9, name: 'Trek to Damodar Kunda (4,890 m) – Visit the sacred lakes' },
          { '@type': 'ListItem', position: 10, name: 'Explore and meditate near the lakes' },
          { '@type': 'ListItem', position: 11, name: 'Trek back to Yara' },
          { '@type': 'ListItem', position: 12, name: 'Trek to Tangye' },
          { '@type': 'ListItem', position: 13, name: 'Trek to Chhusang, drive to Jomsom' },
          { '@type': 'ListItem', position: 14, name: 'Fly back to Pokhara / Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '2150', availability: 'https://schema.org/InStock' },
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
        <div className="absolute inset-0 bg-center bg-cover animate-kenburns-bg" style={{ backgroundImage: `url(${heroUrl})` }} />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Damodar Kunda Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Sacred lakes of Upper Mustang (4,890 m) — remote, spiritual, exclusive</p>
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
                The Damodar Kunda Trek is a sacred and adventurous journey into the upper reaches of Mustang, leading to the holy lakes of Damodar Kunda. Situated at 4,890 m near the Tibetan border, these lakes are revered by both Hindus and Buddhists. The route blends remote Himalayan wilderness with Tibetan culture and sweeping vistas of Dhaulagiri, Annapurna, and Mustang’s desert landscapes.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As a restricted area trek, it requires special permits and a licensed guide—perfect for trekkers seeking an exclusive, spiritually enriching experience far from the crowds.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit the sacred Damodar Kunda (4,890 m) — believed to cleanse sins</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Upper Mustang’s hidden valleys and Tibetan culture</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Views of Dhaulagiri (8,167 m) and Annapurna (8,091 m)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Ancient caves, chortens, and remote monasteries</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Offbeat Himalayan adventure with spiritual depth</span></li>
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
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">4,890 m (Damodar Kunda)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate to Strenuous</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–10 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Jomsom</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">May–October (August full moon ideal)</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits: Restricted Area Permit (about USD 500 for 10 days) and ACAP via a licensed trekking agency. Guide required; solo trekking not allowed.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why is Damodar Kunda famous?</h3>
              <p className="text-muted-foreground">Mentioned in Hindu texts (Barah Purana), the lake is believed to cleanse sins—especially during August’s full moon (Janai Purnima). Buddhists also revere the site for its mythic connections and serenity.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
              <p className="text-muted-foreground">Moderately challenging due to altitude and remoteness. Expect long days across arid terrain with limited teahouses; the ascent is gradual for fit, acclimatized trekkers.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Do I need special permits?</h3>
              <p className="text-muted-foreground">Yes—Restricted Area Permit (Upper Mustang) and ACAP are mandatory. Only licensed agencies can obtain permits; a registered guide is required and solo trekking is not permitted.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best time to go</h3>
              <p className="text-muted-foreground">May–October, with August full moon being the prime pilgrimage window. Stable weather, clear mornings and comfortable daytime temperatures are typical.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What makes it spiritually special?</h3>
              <p className="text-muted-foreground">Linked to Lord Vishnu; considered a source region for the Kali Gandaki with sacred Shaligram fossils. Many combine it with visits to Muktinath and sites in Upper Mustang.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation options</h3>
              <p className="text-muted-foreground">Basic lodges where available; often supported by camping crews (tents, meals, and logistics) handled by your trekking agency.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Is it worth it?</h3>
              <p className="text-muted-foreground">Yes—rare access to untouched Himalayan desert, deep cultural insights, and a profound sense of pilgrimage—well beyond the popular trails.</p>
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
              <div className="space-y-8" aria-label="Damodar Kunda daily itinerary">
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Arrival in Kathmandu (1,400 m)</h3><p className="text-muted-foreground">Welcome and trek briefing.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Fly to Pokhara (822 m)</h3><p className="text-muted-foreground">Short flight to the lakeside city; prepare for Mustang.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Fly to Jomsom (2,720 m), trek to Kagbeni (2,810 m)</h3><p className="text-muted-foreground">Scenic morning flight; follow the Kali Gandaki to Kagbeni.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Chele (3,050 m)</h3><p className="text-muted-foreground">Enter the Mustang desert of cliffs and canyons.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Syangboche (3,800 m)</h3><p className="text-muted-foreground">Rugged terrain with monastery hamlets (≈5 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Ghami (3,520 m)</h3><p className="text-muted-foreground">Long mani walls and ochre-red cliff country.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Tsarang (3,560 m)</h3><p className="text-muted-foreground">Historic monasteries and cultural sites.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Yara Village (3,650 m)</h3><p className="text-muted-foreground">Enter a remote valley dotted with caves and chortens.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Damodar Kunda (4,890 m)</h3><p className="text-muted-foreground">Reach the sacred lakes; perform rituals or meditate.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Explore Damodar Kunda area</h3><p className="text-muted-foreground">Contemplative day around the lakes and ridgelines.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek back to Yara</h3><p className="text-muted-foreground">Return to village comforts after the high-altitude visit.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Tangye</h3><p className="text-muted-foreground">Wind-carved valleys and solitary chortens.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Chhusang; drive to Jomsom</h3><p className="text-muted-foreground">Exit Mustang’s high valleys and transfer to Jomsom.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Fly back to Pokhara / Kathmandu</h3><p className="text-muted-foreground">Morning flight; onward travel from Pokhara or Kathmandu.</p></div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Damodar Kunda Trek</h2>
              <p className="text-muted-foreground">Ready for a rare pilgrimage in the Himalaya? Share details below and we’ll respond within 24 hours.</p>
            </div>
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-border/40">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#6F60A1] mb-2">Full Name</label>
                  <input type="text" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" />
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
                    <option>3–5 people</option>
                    <option>6–10 people</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#6F60A1] mb-2">Special Requirements or Questions</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Dietary needs, medical conditions, pilgrimage dates (Janai Purnima), or other requests..."></textarea>
              </div>
              <Button size="lg" className="w-full h-11 rounded-full bg-[#7E6DB0] hover:bg-[#6F60A1] text-white">
                Send Booking Request
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

export default DamodarKunda;
