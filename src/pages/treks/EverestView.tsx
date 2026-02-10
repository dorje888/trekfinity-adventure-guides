import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const EverestView = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const hero = `/Everest/paul-huisman-fN0qOQ_mEAM-unsplash.jpg${bust}`;

  // SEO: title, description, keywords, JSON-LD
  React.useEffect(() => {
    const title = 'Everest View Trek | Short, Family-Friendly Everest Panorama via Namche & Tengboche | TrekFinity';
    const description = 'Everest View Trek (7–10 days): short, scenic trek to Namche & Tengboche with classic views of Everest, Lhotse & Ama Dablam—ideal for beginners, families, or limited time. Best seasons: Mar–May & Sep–Nov.';
    const keywords = 'Everest View Trek Nepal, short trek Namche Tengboche, family friendly Everest trek, Everest panorama trek 2025, easy trek Khumbu region';

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

    const id = 'ld-trip-everest-view';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Everest View Trek',
      description,
      touristType: 'Beginners, families, short-duration trekkers',
      itinerary: { '@type': 'ItemList', numberOfItems: 9 },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '850', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Khumbu, Nepal' }
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[60vh] overflow-hidden" role="img" aria-label="Everest View Trek panorama">
          <img src={hero} alt="Everest View Trek panorama from Tengboche area" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Everest View Trek</h1>
              <p className="text-lg md:text-xl">Short, scenic trek to Namche & Tengboche for classic Everest vistas</p>
              <div className="mt-6">
                <Link aria-label="Book Everest View Trek" to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
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
                  The Everest View Trek is a short-duration trek in Nepal’s iconic Khumbu Region that delivers breathtaking Himalayan scenery and rich Sherpa cultural experiences—without the demanding high-altitude push of longer itineraries. Over about 7–10 days, you’ll fly into Lukla, trek through rhododendron forests and suspension bridges, visit Sherpa villages and monasteries, and reach vantage points near 3,800–3,900 m with spectacular views of Mount Everest (8,848 m), Lhotse, Ama Dablam, and other Himalayan giants. This trek suits first-time trekkers, families, and travelers with limited time.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" aria-label="Everest View Trek highlights">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div>
                    <span className="text-muted-foreground">Panoramic views of Everest, Lhotse, Nuptse and Ama Dablam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div>
                    <span className="text-muted-foreground">Sherpa cultural hubs of Namche Bazaar and Khumjung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div>
                    <span className="text-muted-foreground">Visit the historic Tengboche Monastery (3,860 m)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div>
                    <span className="text-muted-foreground">Walk through Sagarmatha National Park (UNESCO) with rhododendron forests and wildlife</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div>
                    <span className="text-muted-foreground">Thrilling flight from Kathmandu to Lukla with Himalayan views</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div>
                    <span className="text-muted-foreground">Suitable for moderate fitness—less altitude, less strain, more scenery</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40" aria-labelledby="everest-view-details-heading">
                  <h3 id="everest-view-details-heading" className="text-xl font-bold text-foreground mb-6">Trek Details</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">7–10 days</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mountain className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Max Elevation</p>
                        <p className="text-sm text-muted-foreground">~3,860–3,900 m</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Difficulty</p>
                        <p className="text-sm text-muted-foreground">Easy–Moderate</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Group Size</p>
                        <p className="text-sm text-muted-foreground">2–10 people</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Start/End</p>
                        <p className="text-sm text-muted-foreground">Kathmandu ↔ Lukla</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Compass className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Best Seasons</p>
                        <p className="text-sm text-muted-foreground">March–May & September–November</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Price per person</span>
                      <span className="text-2xl font-bold text-primary">$850</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">All inclusive package (min. 2 people)</p>
                    <div className="mt-4">
                      <Link to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition" aria-label="Book Everest View Trek">
                        Book Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs / Informational sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Is the Everest View Trek suitable for beginners or families?</h3>
                <p className="text-muted-foreground">Yes. With maximum altitude below ~3,900 m and moderate daily trekking hours, it’s well-suited for beginners, families, and travelers short on time.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">When is the best time to trek?</h3>
                <p className="text-muted-foreground">Spring (March–May) and Autumn (September–November) offer clear skies and stable weather. Winter is colder; monsoon brings rain and less predictable conditions.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What views and experiences can I expect?</h3>
                <p className="text-muted-foreground">Expect Himalayan panoramas of Everest, Lhotse and Ama Dablam; Sherpa villages like Namche and Khumjung; Tengboche Monastery on a scenic ridge; and forest paths with alpine wildlife.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How much fitness do I need?</h3>
                <p className="text-muted-foreground">A moderate fitness level is sufficient—regular walking, stairs and light cardio help. Lower altitudes reduce the risk of severe AMS, but a steady pace is still important.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Permits and flights</h3>
                <p className="text-muted-foreground">You’ll need Sagarmatha National Park entry and Khumbu Pasang Lhamu Rural Municipality permits. Most itineraries include round-trip flights between Kathmandu and Lukla.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Can this trek be done in fewer than 10 days?</h3>
                <p className="text-muted-foreground">Yes. 5-day or 7-day versions exist for tighter schedules, but 8–10 days allow better acclimatization and a more relaxed pace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (Example 9 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Everest View Trek daily itinerary">
                  {/* Day 1 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Arrival in Kathmandu — orientation and trek preparation (~1,350 m)</h3>
                    <p className="text-muted-foreground">Airport pickup, hotel transfer, gear check and briefing.</p>
                  </div>
                  {/* Day 2 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Fly to Lukla (~2,860 m), trek to Phakding (~2,610 m)</h3>
                    <p className="text-muted-foreground">Short, scenic flight, then gentle trek along the Dudh Koshi. 3–4 hours.</p>
                  </div>
                  {/* Day 3 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Phakding to Namche Bazaar (~3,440 m)</h3>
                    <p className="text-muted-foreground">Cross suspension bridges and ascend to the Sherpa capital. 5–6 hours.</p>
                  </div>
                  {/* Day 4 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Acclimatization in Namche — optional Everest View Hotel (~3,865 m)</h3>
                    <p className="text-muted-foreground">Active rest day with viewpoint hikes; explore Khumjung & Khunde.</p>
                  </div>
                  {/* Day 5 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Namche to Tengboche (~3,860 m)</h3>
                    <p className="text-muted-foreground">Forest trail with river crossings and final climb to monastery ridge. 4–5 hours.</p>
                  </div>
                  {/* Day 6 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Trek back to Namche (~3,440 m)</h3>
                    <p className="text-muted-foreground">Return to Namche with time for bakery treats and shopping. 3–4 hours.</p>
                  </div>
                  {/* Day 7 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Namche to Lukla (~2,860 m)</h3>
                    <p className="text-muted-foreground">Long descent to the valley and gentle climb into Lukla. 6–7 hours.</p>
                  </div>
                  {/* Day 8 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Fly Lukla → Kathmandu, free time</h3>
                    <p className="text-muted-foreground">Morning flight out; buffer for weather. Rest/sightseeing in Kathmandu.</p>
                  </div>
                  {/* Day 9 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">Departure from Kathmandu</h3>
                    <p className="text-muted-foreground">Transfer to the airport for international departure.</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-6">Note: Itineraries may vary due to weather, flight schedules, and local conditions.</p>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Everest View</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/40">
                <form className="space-y-6" aria-label="Everest View Trek booking form">
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
                  <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition" aria-label="Submit booking request for Everest View Trek">
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

export default EverestView;
