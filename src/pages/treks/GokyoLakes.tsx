import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const GokyoLakes = () => {
  const heroUrl = new URL('../../assets/gokyo-lakes.jpg', import.meta.url).href;

  // SEO: title, description, keywords, JSON-LD
  React.useEffect(() => {
    const title = 'Gokyo Lakes Trek (via Gokyo Ri) + Variant via Cho La Pass | TrekFinity';
    const description = 'Gokyo Lakes Trek: quieter Everest region route to turquoise high-altitude lakes and Gokyo Ri (5,357 m) panorama of Everest, Cho Oyu and Makalu. Optional circuit via Cho La Pass linking Gokyo with EBC. Best in Mar–May & Sep–Nov.';
    const keywords = 'Gokyo Lakes Trek Nepal, Gokyo Ri view Everest, EBC via Cho La Pass Trek, less crowded Everest region trek, Gokyo Lakes trek cost 2025, trekking Gokyo valley glaciers';

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

    const id = 'ld-trip-gokyo';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Gokyo Lakes Trek',
      alternateName: 'Gokyo Lakes Trek via Cho La Pass',
      description,
      touristType: 'Trekkers',
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '1800',
        availability: 'https://schema.org/InStock'
      },
      provider: {
        '@type': 'Organization',
        name: 'TrekFinity'
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Khumbu, Nepal'
      }
    });
    document.head.appendChild(script);
    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-center bg-cover animate-kenburns-bg"
          style={{ backgroundImage: `url(${heroUrl})` }}
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gokyo Lakes Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Quieter Everest route to turquoise lakes and Himalayan panoramas</p>
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
                The Gokyo Lakes Trek offers a quieter, scenic alternative to the classic EBC trail. Over about 12–14 days, trekkers explore the pristine Gokyo Valley and a string of high-altitude turquoise lakes carved by the Ngozumpa Glacier. A climb atop Gokyo Ri (~5,357 m) delivers one of the best panoramic views of Everest, Cho Oyu and Makalu. Many itineraries extend this route to join the EBC trail via the Cho La Pass (~5,420 m) for a true Everest region circuit.
              </p>

              {/* Trek Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-foreground">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Walk beside high-altitude glacial lakes in the Gokyo Valley</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Summit Gokyo Ri for panoramic Himalayan views</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Cross Cho La Pass (in circuit versions) linking Gokyo & EBC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Fewer crowds and peaceful alpine landscapes compared to the main EBC trail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Trace the impressive Ngozumpa Glacier, Nepal’s largest</span>
                  </li>
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
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-sm text-muted-foreground">12–14 days (Gokyo); 15–17 days (via Cho La)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mountain className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Maximum Elevation</p>
                      <p className="text-sm text-muted-foreground">~5,357 m (Gokyo Ri) / ~5,420 m (Cho La)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Difficulty</p>
                      <p className="text-sm text-muted-foreground">Moderate to Challenging (pass crossing adds difficulty)</p>
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
                      <p className="text-sm text-muted-foreground">Lukla</p>
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
                    <span className="text-2xl font-bold text-primary">$1,800</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">All inclusive package (min. 2 people)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informational sections (FAQs / SEO) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why is Gokyo Valley famous?</h3>
              <p className="text-muted-foreground">Gokyo Valley is renowned for its shimmering turquoise glacial lakes in the Everest region, offering a peaceful alternative to the busy EBC route. From Gokyo Ri (5,357 m), you can see Everest, Cho Oyu, Makalu and Lhotse in one sweeping panorama. The six Gokyo Lakes are sacred to both Hindu and Buddhist pilgrims.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What can trekkers expect?</h3>
              <p className="text-muted-foreground">Expect a mix of serenity and adventure: Sherpa villages, monasteries, rhododendron forests, and rugged moraine landscapes near the Ngozumpa Glacier. Daily hikes run 5–7 hours. The highlight is the ascent of Gokyo Ri for a 360° Himalayan view. Teahouse accommodations are basic but welcoming, with warm Sherpa hospitality.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best season</h3>
              <p className="text-muted-foreground">Spring (March–May) brings rhododendron blooms, mild weather and clearer skies. Autumn (September–November) offers stable weather and crystal-clear mountain views. Winter is cold yet quiet; monsoon is rainy and trails can be slippery.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Preparation & difficulty</h3>
              <p className="text-muted-foreground">The trek is moderate to challenging. Train with hikes, cardio and leg strength 1–2 months prior. Pack essential layers, a down jacket, waterproof footwear and trekking poles. Allow for acclimatization in Namche Bazaar to minimize altitude issues.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Culture & religion on the trail</h3>
              <p className="text-muted-foreground">This is Sherpa homeland—rich in Buddhist heritage with mani walls, prayer flags, chortens and historic monasteries. The route lies within Sagarmatha National Park, a UNESCO World Heritage Site celebrating Sherpa culture and Himalayan biodiversity.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Climate & weather</h3>
              <p className="text-muted-foreground">Lower regions like Lukla and Namche are mild (10–20°C by day). Higher up near Gokyo and Gokyo Ri, nights are cold (−5 to 10°C). Weather changes fast—mornings are often clear with clouds or wind building later. Layer accordingly.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Altitude & safety</h3>
              <p className="text-muted-foreground">Altitude sickness can occur above 3,000 m and is a risk near 5,000 m. Ascend gradually, hydrate, avoid alcohol, and consider Diamox under medical guidance. If symptoms worsen, descend immediately.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Insurance</h3>
              <p className="text-muted-foreground">Comprehensive travel insurance covering high-altitude trekking (up to 6,000 m) and helicopter evacuation is essential due to the remote terrain.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How long is the trek and what does it cost?</h3>
              <p className="text-muted-foreground">Most itineraries take 12–14 days for the standard Gokyo route, or 15–17 days if adding Cho La Pass to link with the EBC trail. Typical budgets: USD 800–1,200 for independent trekkers; USD 1,400–1,800 with a guide/porter or agency, generally including permits, Lukla flights, teahouses and meals.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">What makes it different from Everest Base Camp?</h3>
              <p className="text-muted-foreground">Gokyo emphasizes tranquil lakes and broad panoramas over reaching the base of Everest. It’s less crowded than the main EBC route and many argue the view from Gokyo Ri rivals or surpasses classic EBC viewpoints. The Cho La variant adds a satisfying circuit linking both experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-8">
                {/* Day 1 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">1</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Arrival in Kathmandu (1,400 m)</h3>
                  <p className="text-muted-foreground mb-2">Welcome to Nepal. Airport pickup and hotel transfer. Evening trek briefing and gear check.</p>
                </div>

                {/* Day 2 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">2</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Fly to Lukla (2,860 m), Trek to Phakding (2,610 m)</h3>
                  <p className="text-muted-foreground mb-2">Scenic mountain flight then descend along the Dudh Koshi to Phakding. 3–4 hours trekking.</p>
                </div>

                {/* Day 3 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">3</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Phakding to Namche Bazaar (3,440 m)</h3>
                  <p className="text-muted-foreground mb-2">Cross suspension bridges and ascend the Namche Hill into the Sherpa capital. 5–6 hours.</p>
                </div>

                {/* Day 4 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">4</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Acclimatization in Namche (3,440 m)</h3>
                  <p className="text-muted-foreground mb-2">Active rest day. Optional hike to Everest View Hotel, Khumjung and Khunde; visit local museum and market.</p>
                </div>

                {/* Day 5 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">5</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Namche to Dole (4,038 m) via Mong La & Phortse Tenga</h3>
                  <p className="text-muted-foreground mb-2">Leave the main EBC trail, contour above the valley, climb over Mong La and descend to Phortse Tenga before the final ascent to Dole. 5–6 hours.</p>
                </div>

                {/* Day 6 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">6</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Dole to Machhermo (4,410 m)</h3>
                  <p className="text-muted-foreground mb-2">Gradual trail with big valley views and juniper slopes. 3–4 hours; afternoon rest and acclimatization walk.</p>
                </div>

                {/* Day 7 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">7</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Machhermo to Gokyo (4,790 m)</h3>
                  <p className="text-muted-foreground mb-2">Follow the valley past the lower lakes and the Ngozumpa Glacier to reach Gokyo beside the third lake. 4–5 hours.</p>
                </div>

                {/* Day 8 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">8</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Gokyo Ri (5,357 m) & Fifth Lake Exploration</h3>
                  <p className="text-muted-foreground mb-2">Sunrise ascent of Gokyo Ri for a 360° panorama of Everest, Lhotse, Makalu and Cho Oyu. Optional hike to the fourth/fifth lakes along the glacier. Overnight Gokyo.</p>
                </div>

                {/* Day 9 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">9</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Gokyo to Dole (4,038 m) or Phortse</h3>
                  <p className="text-muted-foreground mb-2">Begin the descent, retracing to Dole or taking the scenic Phortse variation. 5–6 hours.</p>
                </div>

                {/* Day 10 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">10</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Dole/Phortse to Namche Bazaar</h3>
                  <p className="text-muted-foreground mb-2">Return to the Sherpa hub of Namche. Hot shower and bakery stop recommended! 4–5 hours.</p>
                </div>

                {/* Day 11 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">11</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Namche Bazaar to Lukla</h3>
                  <p className="text-muted-foreground mb-2">A long descent to cross the Dudh Koshi and gentle climb back to Lukla. 6–7 hours.</p>
                </div>

                {/* Day 12 */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">12</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Fly back to Kathmandu (buffer day)</h3>
                  <p className="text-muted-foreground mb-2">Morning flight from Lukla. Free time in Kathmandu for rest or sightseeing. Keep as a weather contingency day.</p>
                </div>

                {/* Optional extras */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                    <span className="font-bold text-mountain-700">+</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">Optional: Extra sightseeing / departure</h3>
                  <p className="text-muted-foreground mb-2">Add 1–2 spare days for sightseeing, additional buffer or international departure flexibility.</p>
                </div>
              </div>
            </div>

            {/* Cho La variant callout */}
            <div className="mt-10 p-6 rounded-xl border border-border/40 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-2">Optional Variant: Gokyo to EBC via Cho La Pass (adds 3–5 days)</h3>
              <p className="text-muted-foreground mb-4">Turn the trek into a fuller circuit by crossing Cho La (~5,420 m) to connect with the Everest Base Camp trail.</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><span className="font-medium">Day 9:</span> Gokyo to Thagnak/Dragnag (~4,700 m) across the glacier (2–3 h).</li>
                <li><span className="font-medium">Day 10:</span> Cross <span className="whitespace-nowrap">Cho La Pass</span> (~5,420 m) to Dzongla (~4,830 m) (7–8 h).</li>
                <li><span className="font-medium">Day 11:</span> Dzongla to Lobuche (~4,910 m) (2–3 h).</li>
                <li><span className="font-medium">Day 12:</span> Lobuche → Gorak Shep → Everest Base Camp (~5,364 m). Overnight Gorak Shep.</li>
                <li><span className="font-medium">Day 13:</span> Kala Patthar sunrise, descend to Pheriche/Dingboche.</li>
                <li><span className="font-medium">Day 14+:</span> Return via Namche to Lukla and fly to Kathmandu.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Gokyo Lakes Trek</h2>
              <p className="text-muted-foreground">Ready to witness the world\'s highest lakes and spectacular Himalayan views? Fill out the form below and we\'ll get back to you within 24 hours.</p>
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
                <textarea rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us about any dietary requirements, medical conditions, or special requests..."></textarea>
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

export default GokyoLakes;