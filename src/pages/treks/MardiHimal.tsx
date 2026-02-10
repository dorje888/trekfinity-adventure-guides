import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const MardiHimal = () => {
  const hero = `/Annapurna/neha-maheen-mahfin-_sbkVaT19ko-unsplash.jpg${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: title, description, keywords, JSON-LD
  React.useEffect(() => {
    const title = 'Mardi Himal Trek | Short, Quiet Annapurna Ridge Trek (5–7 Days) | TrekFinity';
    const description = 'Mardi Himal Trek (5–7 days): serene Annapurna ridge trek to Mardi Himal Base Camp (4,500 m) with close views of Machhapuchhre (Fishtail), Annapurna South and Hiunchuli. Peaceful, less crowded, ideal for beginners.';
    const keywords = 'Mardi Himal Trek, Mardi Himal Base Camp, short trek Annapurna, Pokhara trekking, off the beaten path Nepal trek, best short trek Nepal, Mardi Himal itinerary, beginner trek Nepal, Annapurna trekking packages, Fishtail Mountain trek';

    document.title = title;
    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) { m = document.createElement('meta'); m.setAttribute('name', name); document.head.appendChild(m); }
      m.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);

    const id = 'ld-trip-mardi';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Mardi Himal Trek',
      description,
      touristType: 'Beginners, nature lovers, short-duration trekkers',
      itinerary: { '@type': 'ItemList', numberOfItems: 7 },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '550', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Annapurna Conservation Area, Nepal' }
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
        <img src={hero} alt="Mardi Himal ridge and Machhapuchhre (Fishtail) view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mardi Himal Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Quiet Annapurna ridgeline to Mardi Base Camp with close Himalayan views</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Mardi Himal Trek is one of the most beautiful and least crowded trekking routes in the Annapurna region. East of the Annapurna Base Camp trail, it offers a peaceful alternative with equally stunning mountain views. The route weaves through quiet villages, lush rhododendron forests and airy ridgelines to Mardi Himal Base Camp (4,500 m), a breathtaking vantage facing Machhapuchhre (Fishtail) and the Annapurna massif.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Perfect for trekkers seeking a short, off-the-beaten-path experience with authentic Himalayan scenery, this trek suits both beginners and adventure enthusiasts.
              </p>

              {/* Trek Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-foreground">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span className="text-muted-foreground">Panoramic Himalayan views: Annapurna South, Hiunchuli and Machhapuchhre</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span className="text-muted-foreground">Peaceful, less crowded ridgeline trail—hidden gem of Annapurna</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span className="text-muted-foreground">Diverse landscapes: forests, ridgelines and high meadows</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span className="text-muted-foreground">Rich Gurung culture in villages like Deurali, Forest Camp and Siding</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span className="text-muted-foreground">Short & rewarding: complete in 5–7 days</span></li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><span className="text-muted-foreground">Brilliant sunrise and sunset colors from High Camp & Base Camp</span></li>
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
                  <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">5–7 days</p></div></div>
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">4,500 m (Mardi Base Camp)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">1–12</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start/End</p><p className="text-sm text-muted-foreground">Kande ↔ Siding/Lwang (via Pokhara)</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">March–May & September–November</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">Accommodation:</span> Teahouses & homestays</p>
                    <p><span className="font-medium text-foreground">Permits:</span> ACAP & TIMS</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">Estimated cost</span>
                    <span className="text-2xl font-bold text-primary">USD 450–700</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Varies by season and service level</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informational sections (FAQs / SEO) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why is the Mardi Himal Trek famous?</h3>
              <p className="text-muted-foreground">For its quiet, scenic ridgelines and spectacular close-up views of Machhapuchhre and the Annapurna range—an authentic Himalayan experience without the crowds.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
              <p className="text-muted-foreground">Moderate. Suitable for beginners with basic fitness and gradual pacing. Trails are well-marked and manageable.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best season</h3>
              <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) offer clear skies, stable weather and vibrant landscapes.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Guide or porter?</h3>
              <p className="text-muted-foreground">The trail is clear, but a local guide enhances safety, navigation and cultural insight. Porters help make the trek comfortable.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Permits required</h3>
              <p className="text-muted-foreground">Two permits are needed: ACAP (Annapurna Conservation Area Permit) and a TIMS Card.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation</h3>
              <p className="text-muted-foreground">Local teahouses and homestays provide basic rooms, warm meals and friendly hospitality. Some places offer Wi‑Fi and charging.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Preparation</h3>
              <p className="text-muted-foreground">Train with walking, hiking or light cardio for a few weeks. Pack reliable trekking shoes, warm layers and rain protection.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Altitude & safety</h3>
              <p className="text-muted-foreground">Max altitude is ~4,500 m; some may feel mild symptoms. Acclimatize well, hydrate and ascend gradually; descend if symptoms worsen.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Is it beginner‑friendly?</h3>
              <p className="text-muted-foreground">Yes. With moderate difficulty and short daily distances, it’s a great first Himalayan trek.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">What makes it unique and can it be combined?</h3>
              <p className="text-muted-foreground">Its serenity and raw natural beauty set it apart. Mardi Himal can be extended or combined with routes like Annapurna Base Camp or Ghandruk for a longer adventure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (5–7 days)</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>

              <div className="space-y-8" aria-label="Mardi Himal daily itinerary">
                {/* Day 1 */}
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Pokhara → Kande, trek to Deurali (2,100 m)</h3><p className="text-muted-foreground">Drive from Pokhara to Kande, then ascend through forests and ridge paths to Deurali. 4–5 hours.</p></div>
                {/* Day 2 */}
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Deurali → Forest Camp (2,600 m)</h3><p className="text-muted-foreground">Pleasant forested trail with gradual ascents to Forest Camp. 4–5 hours.</p></div>
                {/* Day 3 */}
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Forest Camp → Low Camp (2,990 m)</h3><p className="text-muted-foreground">Continue through rhododendron and mossy woods to Low Camp with first big views of Fishtail. 3–4 hours.</p></div>
                {/* Day 4 */}
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Low Camp → High Camp (3,580 m)</h3><p className="text-muted-foreground">Ridge walking with expanding panoramas towards Annapurna South and Hiunchuli. 3–4 hours.</p></div>
                {/* Day 5 */}
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Mardi Himal Base Camp (4,500 m), return to High Camp</h3><p className="text-muted-foreground">Pre-dawn start for sunrise. Hike to the viewpoint/Base Camp and return to High Camp. 6–7 hours round trip.</p></div>
                {/* Day 6 */}
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-2 text-foreground">High Camp → Siding (1,750 m)</h3><p className="text-muted-foreground">Descend via beautiful forest trails to Siding village for a quiet homestay experience. 5–6 hours.</p></div>
                {/* Day 7 */}
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Drive Siding → Pokhara</h3><p className="text-muted-foreground">Morning village walk and drive back to Pokhara. Optional end in Lwang village variant.</p></div>
                {/* Optional */}
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">+</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Optional rest/extra day</h3><p className="text-muted-foreground">Add a rest day at High Camp for acclimatization and extra ridge exploration.</p></div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Mardi Himal Trek</h2>
              <p className="text-muted-foreground">Ready for a quiet ridge walk with close Himalayan views? Fill out the form and we will reply within 24 hours.</p>
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
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3-5 people</option>
                    <option>6-10 people</option>
                    <option>10+ people</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#6F60A1] mb-2">Special Requirements or Questions</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Dietary needs, medical conditions, or special requests..."></textarea>
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

export default MardiHimal;
