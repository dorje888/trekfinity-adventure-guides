import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnapurnaBaseCamp = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const hero = `/Annapurna/touann-gatouillat-vergos-QFY3Tv5_12M-unsplash.jpg${bust}`;

  // SEO: title, description, keywords, JSON-LD
  React.useEffect(() => {
    const title = 'Annapurna Base Camp (ABC) Trek | Annapurna Sanctuary Trek 10–12 Days | TrekFinity';
    const description = 'Annapurna Base Camp Trek (10–12 days): classic journey into the Annapurna Sanctuary with close-up views of Annapurna I (8,091 m), Machhapuchhre, Hiunchuli & Gangapurna. Moderate difficulty, great teahouses. Best in Mar–May & Sep–Nov.';
    const keywords = 'Annapurna Base Camp Trek, ABC trek itinerary, best time for ABC trek, Nepal trekking permits ACAP TIMS, Annapurna trekking cost, Pokhara trekking tours, beginner-friendly Nepal treks';

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

    const id = 'ld-trip-abc';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Annapurna Base Camp (ABC) Trek',
      description,
      touristType: 'Beginner to Intermediate trekkers',
      itinerary: { '@type': 'ItemList', numberOfItems: 12 },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '950', availability: 'https://schema.org/InStock' },
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
        <div className="relative h-[60vh] overflow-hidden" role="img" aria-label="Annapurna Base Camp Trek panorama">
          <img src={hero} alt="Annapurna Sanctuary panorama near ABC" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Annapurna Base Camp (ABC) Trek</h1>
              <p className="text-lg md:text-xl">Classic Annapurna Sanctuary journey from Pokhara to ABC at 4,130 m</p>
              <div className="mt-6">
                <Link aria-label="Book Annapurna Base Camp Trek" to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
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
                  The Annapurna Base Camp Trek — also known as the ABC Trek — is one of Nepal’s most scenic and rewarding trekking experiences. This classic journey takes you deep into the heart of the Annapurna Sanctuary, surrounded by towering Himalayan peaks such as Annapurna I (8,091 m), Machhapuchhre (Fishtail), Hiunchuli, and Gangapurna.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Starting from Pokhara, this moderate trek passes through charming Gurung and Magar villages, lush rhododendron forests, and terraced farmlands before reaching the breathtaking Annapurna Base Camp at 4,130 m. It’s the perfect blend of adventure, nature, and cultural immersion — ideal for trekkers seeking both beauty and comfort.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" aria-label="Annapurna Base Camp trek highlights">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Stand at the base of Annapurna I (8,091 m), the world’s 10th highest mountain</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Rhododendron forests, waterfalls and terraced rice fields</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Sunrise views over Annapurna & Dhaulagiri ranges from Poon Hill</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Authentic Gurung and Magar village life in Ghandruk and Chhomrong</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Relax in natural hot springs at Jhinu Danda after the trek</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Biodiversity within the Annapurna Conservation Area (ACAP)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Moderate trek suitable for beginners and seasoned trekkers</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Excellent teahouse accommodations and warm hospitality</span></li>
                </ul>

                {/* FAQs / Informational content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Why is ABC so popular?</h4>
                    <p className="text-muted-foreground">ABC balances moderate difficulty with dramatic Sanctuary scenery and rich culture. Close-up views of multiple 8,000ers in a relatively short itinerary.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Best seasons</h4>
                    <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) bring clear skies, mild temps and vibrant blooms. Monsoon is wet; winter is colder but quieter.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Difficulty</h4>
                    <p className="text-muted-foreground">Moderate. 5–7 hours daily; no technical climbing. Gradual ascent and acclimatization keep AMS risk low compared to higher-altitude treks.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Permits</h4>
                    <p className="text-muted-foreground">You’ll need ACAP (Annapurna Conservation Area Permit) and a TIMS Card. We arrange permits on request.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Accommodation & food</h4>
                    <p className="text-muted-foreground">Comfortable teahouses serve Nepali and Western meals. Expect dal bhat, noodles, soups and bakery items in popular villages.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Guide/porter & insurance</h4>
                    <p className="text-muted-foreground">Guides enhance safety and cultural context. Ensure insurance covers trekking up to 4,500 m with helicopter evacuation.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-2">Packing essentials</h4>
                    <p className="text-muted-foreground">Warm layers and down jacket, trekking poles, -10°C sleeping bag, reusable bottle & purification, boots, rain shell, gloves, sunscreen, hat.</p>
                  </div>
                </div>
              </div>

              {/* Details Card */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40" aria-labelledby="abc-details">
                  <h3 id="abc-details" className="text-xl font-bold text-foreground mb-6">Trek Details</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-primary" /><div><p className="font-medium">Duration</p><p className="text-sm text-muted-foreground">10–12 days</p></div></div>
                    <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Max Altitude</p><p className="text-sm text-muted-foreground">4,130 m (ABC)</p></div></div>
                    <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Moderate</p></div></div>
                    <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">1–12 (private/custom available)</p></div></div>
                    <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start/End</p><p className="text-sm text-muted-foreground">Pokhara</p></div></div>
                    <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May & Sep–Nov</p></div></div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p><span className="font-medium text-foreground">Accommodation:</span> Teahouses & mountain lodges</p>
                      <p><span className="font-medium text-foreground">Permits:</span> ACAP & TIMS</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-semibold">Estimated cost</span>
                      <span className="text-2xl font-bold text-primary">USD 800–1,200</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Depends on season and service level</p>
                    <div className="mt-4">
                      <Link to="#booking" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition" aria-label="Book Annapurna Base Camp Trek">
                        Book Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (10–12 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Annapurna Base Camp daily itinerary">
                  {/* Day 1 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Arrival in Kathmandu — briefing & preparation (~1,400 m)</h3><p className="text-muted-foreground">Airport pickup, hotel transfer, gear check and trek briefing.</p></div>
                  {/* Day 2 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Drive or fly to Pokhara (820 m)</h3><p className="text-muted-foreground">Travel to the lakeside gateway of the Annapurna region. Evening at leisure.</p></div>
                  {/* Day 3 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Drive to Nayapul, trek to Tikhedhunga (~1,570 m)</h3><p className="text-muted-foreground">Warm-up day along rivers and terraced hillsides. 4–5 hours.</p></div>
                  {/* Day 4 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Tikhedhunga to Ghorepani (~2,860 m)</h3><p className="text-muted-foreground">Steady ascent via stone steps and rhododendron forest. 6–7 hours.</p></div>
                  {/* Day 5 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Poon Hill sunrise (3,210 m), trek to Tadapani (~2,630 m)</h3><p className="text-muted-foreground">Dawn viewpoint hike followed by forested traverse to Tadapani. 5–6 hours.</p></div>
                  {/* Day 6 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Tadapani to Chhomrong (~2,170 m)</h3><p className="text-muted-foreground">Descend and climb through villages to the Sanctuary gateway. 4–5 hours.</p></div>
                  {/* Day 7 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Chhomrong to Himalaya Hotel (~2,920 m) via Bamboo & Dovan</h3><p className="text-muted-foreground">Follow the Modi Khola gorge into bamboo and rhododendron forest. 6–7 hours.</p></div>
                  {/* Day 8 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Himalaya → MBC → Annapurna Base Camp (4,130 m)</h3><p className="text-muted-foreground">Gradual climb to Machhapuchhre Base Camp, then the scenic basin of ABC. 5–6 hours.</p></div>
                  {/* Day 9 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Descend to Bamboo (~2,310 m)</h3><p className="text-muted-foreground">Retrace through the gorge with easier downhill walking. 5–6 hours.</p></div>
                  {/* Day 10 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Bamboo to Jhinu Danda (~1,780 m) — hot springs</h3><p className="text-muted-foreground">Shorter day with time to relax in the natural hot springs near the river. 4–5 hours.</p></div>
                  {/* Day 11 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Trek back to Nayapul, drive to Pokhara (820 m)</h3><p className="text-muted-foreground">Final trail day through villages and farmland, then drive to lakeside Pokhara.</p></div>
                  {/* Day 12 */}
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Return to Kathmandu / Departure</h3><p className="text-muted-foreground">Drive or fly back to Kathmandu. Trip concludes or extend your stay.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Annapurna Base Camp</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/40">
                <form className="space-y-6" aria-label="Annapurna Base Camp booking form">
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
                  <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition" aria-label="Submit booking request for Annapurna Base Camp Trek">
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

export default AnnapurnaBaseCamp;
