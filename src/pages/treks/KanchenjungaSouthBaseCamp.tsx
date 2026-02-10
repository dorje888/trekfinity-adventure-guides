import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const KanchenjungaSouthBaseCamp = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Kanchenjunga South Base Camp Trek | Remote Eastern Nepal (14 Days) | TrekFinity';
    const description = 'Kanchenjunga South Base Camp Trek (4,900 m): a remote, less-crowded Himalayan trek in Eastern Nepal via Taplejung, Lelep, Yamphudin, Ghunsa and Sama. Experience Limbu & Sherpa culture, rhododendron forests, alpine meadows and views of Kanchenjunga, Kumbhakarna, Jannu and Pandim. Best in Mar–May & Sep–Nov.';
    const keywords = 'Kanchenjunga South Base Camp Trek, KCAP permit, Taplejung trek, Lelep Yamphudin Ghunsa Sama, Kumbhakarna Jannu Pandim views, remote trek Nepal, Kanchenjunga trekking itinerary 14 days, Eastern Nepal trekking, less crowded trek Nepal';

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
    const idTrip = 'ld-trip-kanchenjunga-south-bc';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Kanchenjunga South Base Camp Trek',
      description,
      touristType: 'Trekkers seeking remote, less-crowded Himalayan routes',
      areaServed: { '@type': 'AdministrativeArea', name: 'Taplejung, Eastern Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m)' },
          { '@type': 'ListItem', position: 2, name: 'Drive/Flight to Taplejung (1,500 m)' },
          { '@type': 'ListItem', position: 3, name: 'Trek to Lelep (2,500 m)' },
          { '@type': 'ListItem', position: 4, name: 'Trek to Yamphudin (2,700 m)' },
          { '@type': 'ListItem', position: 5, name: 'Trek to Ghunsa (3,450 m)' },
          { '@type': 'ListItem', position: 6, name: 'Trek to Sama (3,600 m)' },
          { '@type': 'ListItem', position: 7, name: 'Trek to Kanchenjunga South Base Camp (4,900 m)' },
          { '@type': 'ListItem', position: 8, name: 'Explore Base Camp and return to Sama' },
          { '@type': 'ListItem', position: 9, name: 'Trek to Ghunsa (3,450 m)' },
          { '@type': 'ListItem', position: 10, name: 'Trek to Yamphudin (2,700 m)' },
          { '@type': 'ListItem', position: 11, name: 'Trek to Lelep (2,500 m)' },
          { '@type': 'ListItem', position: 12, name: 'Trek to Taplejung (1,500 m)' },
          { '@type': 'ListItem', position: 13, name: 'Drive/Flight to Kathmandu' },
          { '@type': 'ListItem', position: 14, name: 'Departure from Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '2350', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-kanchenjunga-south-bc';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why is the South Base Camp Trek unique?', acceptedAnswer: { '@type': 'Answer', text: 'It is remote and less crowded, offering pristine landscapes, glaciers and culturally rich Limbu and Sherpa villages with monasteries and traditions.' } },
        { '@type': 'Question', name: 'How challenging is it?', acceptedAnswer: { '@type': 'Answer', text: 'Moderately to highly challenging with long days at altitude on remote terrain. Good fitness, acclimatization and a licensed guide are essential.' } },
        { '@type': 'Question', name: 'Best season for trekking?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March–May) and Autumn (September–November) offer rhododendron blooms, clear skies and stable weather.' } },
        { '@type': 'Question', name: 'Cultural insights?', acceptedAnswer: { '@type': 'Answer', text: 'Trekkers meet Limbu and Sherpa communities, visit monasteries, and observe traditional festivals, cuisine and crafts.' } },
        { '@type': 'Question', name: 'Accommodation and food?', acceptedAnswer: { '@type': 'Answer', text: 'Tea houses with basic facilities; high sections may use tents. Meals typically include dal bhat, noodles and soups.' } },
        { '@type': 'Question', name: 'Is travel insurance necessary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Policies should cover high-altitude trekking, medical emergencies and helicopter evacuation.' } },
        { '@type': 'Question', name: 'Can this trek be combined with other routes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It can be combined with the North Base Camp or extended to the Kanchenjunga Circuit for a longer expedition.' } }
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
        <img src={hero} alt="Kanchenjunga South Base Camp trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kanchenjunga South Base Camp Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Remote Eastern Nepal via Lelep, Yamphudin, Ghunsa and Sama</p>
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
                The Kanchenjunga South Base Camp Trek leads to the southern approach of the world’s third-highest peak, Kanchenjunga (8,586 m). Journey through untouched rhododendron forests, lush river valleys and remote Limbu and Sherpa villages for a peaceful Himalayan experience away from the crowds.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Expect panoramic views of Kanchenjunga, Kumbhakarna, Jannu and Pandim, plus cultural immersion with monasteries, local cuisine and living traditions along the route.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Reach Kanchenjunga South Base Camp (4,900 m)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Views of Kanchenjunga, Kumbhakarna, Jannu and Pandim</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience Limbu and Sherpa culture in remote villages</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Rhododendron forests, terraced fields and alpine meadows</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit monasteries and learn local traditions</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Peaceful, less-crowded Himalayan route</span></li>
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
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">4,900 m (South Base Camp)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Challenging</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–12 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Taplejung / Taplejung</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May / Sep–Nov</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits: Kanchenjunga Conservation Area Permit (KCAP). Licensed guide recommended; ensure insurance covering evacuation and medical emergencies.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why is the South Base Camp Trek unique?</h3>
              <p className="text-muted-foreground">Remote, less-crowded trails with pristine landscapes and glaciers, plus culturally rich Limbu and Sherpa villages. Offers a distinct southern perspective of Kanchenjunga.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How challenging is it?</h3>
              <p className="text-muted-foreground">Moderate to hard: long walking days, altitude and remote terrain. Proper fitness, acclimatization and a licensed guide are essential.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best season for trekking</h3>
              <p className="text-muted-foreground">Spring (Mar–May) brings rhododendron blooms; Autumn (Sep–Nov) offers clear skies and stable weather. Winter is harsh; Monsoon raises landslide risk.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cultural insights</h3>
              <p className="text-muted-foreground">Encounter Limbu and Sherpa communities, visit monasteries, and observe traditional festivals, cuisine and crafts.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation & food</h3>
              <p className="text-muted-foreground">Tea houses provide basic lodging and hot meals (dal bhat, noodles, soups). Higher sections may use tents or very simple lodges.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Is travel insurance necessary?</h3>
              <p className="text-muted-foreground">Yes—cover high-altitude trekking, helicopter evacuation and medical care for safety in this remote region.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Combining routes</h3>
              <p className="text-muted-foreground">You can pair this trek with the North Base Camp or extend into the Kanchenjunga Circuit for a comprehensive expedition.</p>
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
              <div className="space-y-8" aria-label="Kanchenjunga South Base Camp daily itinerary">
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Arrival in Kathmandu (1,400 m)</h3><p className="text-muted-foreground">Airport transfer, trek briefing, gear check and safety overview.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive/Flight to Taplejung (1,500 m)</h3><p className="text-muted-foreground">Travel east; meet local crew; final preparations.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Lelep (2,500 m)</h3><p className="text-muted-foreground">Terraced fields, small villages and first Himalayan vistas.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Yamphudin (2,700 m)</h3><p className="text-muted-foreground">Rivers, waterfalls and Limbu hospitality; overnight in Yamphudin.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Ghunsa (3,450 m)</h3><p className="text-muted-foreground">Ascend through meadows and forest to the Sherpa village of Ghunsa.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Sama (3,600 m)</h3><p className="text-muted-foreground">High-alpine terrain with views of glaciers and snow peaks.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Kanchenjunga South Base Camp (4,900 m)</h3><p className="text-muted-foreground">Reach BC for expansive views; explore glacial surroundings.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Explore Base Camp; return to Sama</h3><p className="text-muted-foreground">Sunrise at BC, then descend to Sama; enjoy alpine scenery.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Sama → Ghunsa (3,450 m)</h3><p className="text-muted-foreground">Retrace through meadows and forest back to Ghunsa.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Ghunsa → Yamphudin (2,700 m)</h3><p className="text-muted-foreground">Descend along scenic trails; village stopovers.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Yamphudin → Lelep (2,500 m)</h3><p className="text-muted-foreground">Forested paths, photography and cultural encounters.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Lelep → Taplejung (1,500 m)</h3><p className="text-muted-foreground">Complete the main trek; celebrate with the team.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive/Flight to Kathmandu</h3><p className="text-muted-foreground">Return to the capital; optional sightseeing or rest.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Departure from Kathmandu</h3><p className="text-muted-foreground">Airport transfer for onward journey.</p></div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Kanchenjunga South Base Camp</h2>
              <p className="text-muted-foreground">Share your dates and requirements. We will confirm permits, logistics and availability within 24 hours.</p>
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

export default KanchenjungaSouthBaseCamp;
