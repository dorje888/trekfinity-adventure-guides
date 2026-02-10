import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const GhorepaniPoonHill = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const hero = `/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg${bust}`;

  // SEO: title, description, keywords, JSON-LD
  React.useEffect(() => {
    const title = 'Ghorepani Poon Hill Trek | Short Annapurna Sunrise Trek (4–6 Days) | TrekFinity';
    const description = 'Ghorepani Poon Hill Trek (4–6 days): beginner-friendly Annapurna trek with spectacular sunrise over the Annapurna & Dhaulagiri ranges from Poon Hill (3,210 m). Starts/ends near Pokhara. Best in Mar–May & Sep–Nov.';
    const keywords = 'Ghorepani Poon Hill Trek, short trek in Nepal, easy trek Annapurna, Poon Hill sunrise view, best short trek Nepal, Ghorepani Ghandruk trek, beginner trekking Nepal, Annapurna trekking packages, Poon Hill itinerary, trekking in Pokhara';

    document.title = title;
    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement('meta');
        m.setAttribute('name', name);
        document.head.appendChild(m);
      }
      m.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);

    const id = 'ld-trip-poonhill';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Ghorepani Poon Hill Trek',
      description,
      touristType: 'Beginners, families, short-duration trekkers',
      itinerary: { '@type': 'ItemList', numberOfItems: 5 },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '450', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Annapurna Conservation Area, Nepal' }
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[60vh] overflow-hidden" role="img" aria-label="Ghorepani Poon Hill Trek sunrise panorama">
          <img src={hero} alt="Sunrise views from the Annapurna region near Poon Hill" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ghorepani Poon Hill Trek</h1>
              <p className="text-lg md:text-xl">Short, scenic sunrise trek with Annapurna & Dhaulagiri panoramas</p>
              <div className="mt-6">
                <Link aria-label="Book Ghorepani Poon Hill Trek" to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                  Book This Trek <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overview + Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Ghorepani Poon Hill Trek is one of the most popular short routes in the Annapurna region. Known for breathtaking sunrise views over the Annapurna and Dhaulagiri ranges, it is perfect for beginners and nature lovers who want Himalayan scenery without long or difficult routes. Starting from Pokhara, the trail passes Gurung and Magar villages, rhododendron forests and terraced farmlands, leading to Poon Hill (3,210 m)—a famed viewpoint with a 360° panorama.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" aria-label="Ghorepani Poon Hill trek highlights">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Panoramic Himalayan sunrise: Annapurna, Dhaulagiri, Machhapuchhre & Nilgiri</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Short & easy: ideal for beginners, families and limited time</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cultural villages: Ghorepani, Ghandruk and traditional hillside life</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Rhododendron forests and biodiverse landscapes within ACAP</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Accessible trail from Pokhara; year-round with peak seasons in spring/autumn</span></li>
                </ul>
              </div>

              {/* Details Card */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40" aria-labelledby="poonhill-details">
                  <h3 id="poonhill-details" className="text-xl font-bold text-foreground mb-6">Trek Details</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">4–6 days</p></div></div>
                    <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Max Altitude</p><p className="text-sm text-muted-foreground">3,210 m (Poon Hill)</p></div></div>
                    <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Easy–Moderate</p></div></div>
                    <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">1–12</p></div></div>
                    <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start/End</p><p className="text-sm text-muted-foreground">Pokhara ↔ Nayapul/Ghandruk</p></div></div>
                    <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May & Sep–Nov</p></div></div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><span className="font-medium text-foreground">Accommodation:</span> Teahouses & local lodges</p>
                      <p><span className="font-medium text-foreground">Permits:</span> ACAP & TIMS</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-semibold">Estimated cost</span>
                      <span className="text-2xl font-bold text-primary">USD 350–550</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Depends on season and service level</p>
                    <div className="mt-4">
                      <Link to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition" aria-label="Book Ghorepani Poon Hill Trek">
                        Book Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs / Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Why is Poon Hill famous?</h3>
                <p className="text-muted-foreground">Poon Hill is renowned for its spectacular sunrise over the Annapurna and Dhaulagiri ranges, offering a sweeping 360° Himalayan panorama.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
                <p className="text-muted-foreground">Easy to moderate, suitable for most with basic fitness. The highest point is 3,210 m, keeping altitude risk low.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Best season</h3>
                <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) feature clear skies and rhododendron blooms. Winter is colder; monsoon is wet.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Do I need a guide or porter?</h3>
                <p className="text-muted-foreground">Not mandatory but recommended for navigation, safety and cultural insights. Porters make the trek more comfortable.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Permits required</h3>
                <p className="text-muted-foreground">You will need ACAP (Annapurna Conservation Area Permit) and a TIMS Card.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation on the trail</h3>
                <p className="text-muted-foreground">Numerous teahouses and lodges provide basic, comfortable rooms and local meals with warm hospitality.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How to prepare</h3>
                <p className="text-muted-foreground">Light training with walks or cardio for a few weeks is sufficient. Pack good trekking shoes, warm layers and a rain jacket as per season.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Is travel insurance required?</h3>
                <p className="text-muted-foreground">Highly recommended, covering trekking and potential evacuation or delays.</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">What makes this trek special?</h3>
                <p className="text-muted-foreground">An authentic Himalayan experience in just a few days—diverse landscapes, sunrise vistas and village culture without extreme altitude.</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">Can it be combined with other treks?</h3>
                <p className="text-muted-foreground">Yes, extend to Annapurna Base Camp or Mardi Himal depending on time and interest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (4–6 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Ghorepani Poon Hill daily itinerary">
                  {/* Day 1 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Pokhara → Nayapul, trek to Tikhedhunga (~1,577 m)</h3><p className="text-muted-foreground">Drive from Pokhara to Nayapul, then trek along rivers and terraces to Tikhedhunga. 4–5 hours.</p></div>
                  {/* Day 2 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Tikhedhunga → Ghorepani (~2,874 m) via Ulleri</h3><p className="text-muted-foreground">Steady climb through stone steps and rhododendron forests to Ghorepani. 6–7 hours.</p></div>
                  {/* Day 3 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Poon Hill sunrise (3,210 m), trek to Tadapani (~2,630 m)</h3><p className="text-muted-foreground">Pre-dawn ascent to Poon Hill for sunrise, then forested traverse to Tadapani. 5–6 hours.</p></div>
                  {/* Day 4 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Tadapani → Ghandruk (~1,940 m)</h3><p className="text-muted-foreground">Short, scenic descent to the Gurung village of Ghandruk; explore the heritage museum.</p></div>
                  {/* Day 5 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Ghandruk → Nayapul, drive to Pokhara</h3><p className="text-muted-foreground">Final trail day through terraces back to the roadhead; drive to Pokhara.</p></div>
                  {/* Optional */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">+</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Optional rest/extra day</h3><p className="text-muted-foreground">Add a rest or acclimatization day to tailor pace and sightseeing.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Ghorepani Poon Hill</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/40">
                <form className="space-y-6" aria-label="Ghorepani Poon Hill booking form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#6F60A1] mb-1">Full Name</label>
                      <input id="name" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#6F60A1] mb-1">Email Address</label>
                      <input id="email" type="email" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-[#6F60A1] mb-1">Preferred Trek Date</label>
                      <input id="date" type="date" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="group" className="block text-sm font-medium text-[#6F60A1] mb-1">Group Size</label>
                      <select id="group" className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none">
                        <option>1 person</option>
                        <option>2 people</option>
                        <option>3–5 people</option>
                        <option>6–10 people</option>
                        <option>10+ people</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Questions or Requirements</label>
                    <textarea id="message" rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us your preferred dates, group size, or any special requests."></textarea>
                  </div>
                  <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition" aria-label="Submit booking request for Ghorepani Poon Hill Trek">
                    Submit Booking Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default GhorepaniPoonHill;
