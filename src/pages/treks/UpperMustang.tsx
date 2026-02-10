import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpperMustang = () => {
  const heroUrl = new URL('../../assets/upper-mustang.jpg', import.meta.url).href;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD
  React.useEffect(() => {
    const title = 'Upper Mustang Trek (Lo Manthang) | Forbidden Kingdom Cultural Trek 14 Days | TrekFinity';
    const description = 'Upper Mustang Trek to the walled city of Lo Manthang: Tibetan-influenced culture, colorful desert cliffs, mysterious sky caves (Chhoser), and ancient monasteries (Thubchen, Jampa). In Annapurna–Dhaulagiri rain shadow; opened in 1992; restricted region. 14 days, moderate, best March–November.';
    const keywords = 'Upper Mustang Trek Nepal, Lo Manthang trek, Forbidden Kingdom trek, Upper Mustang itinerary 14 days, Tiji Festival Mustang, sky caves Chhoser, Upper Mustang permit 500 USD, rain shadow trek, best time Upper Mustang, Jomsom Kagbeni trek';

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

    // Open Graph / Twitter
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

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', url);

    // JSON-LD
    const id = 'ld-trip-upper-mustang';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Upper Mustang Trek',
      description,
      touristType: 'Trekkers seeking cultural immersion and desert Himalayan landscapes',
      areaServed: { '@type': 'AdministrativeArea', name: 'Upper Mustang (Kingdom of Lo), Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m)' },
          { '@type': 'ListItem', position: 2, name: 'Fly to Pokhara (827 m) and explore Lakeside' },
          { '@type': 'ListItem', position: 3, name: 'Fly to Jomsom (2,720 m), trek to Kagbeni (2,810 m)' },
          { '@type': 'ListItem', position: 4, name: 'Trek to Chele (3,050 m)' },
          { '@type': 'ListItem', position: 5, name: 'Trek to Syangboche (3,800 m)' },
          { '@type': 'ListItem', position: 6, name: 'Trek to Ghami (3,520 m)' },
          { '@type': 'ListItem', position: 7, name: 'Trek to Tsarang (3,560 m)' },
          { '@type': 'ListItem', position: 8, name: 'Trek to Lo Manthang (3,810 m)' },
          { '@type': 'ListItem', position: 9, name: 'Explore Lo Manthang; Thubchen & Jampa monasteries; optional Chhoser cave' },
          { '@type': 'ListItem', position: 10, name: 'Trek to Dhakmar (3,810 m)' },
          { '@type': 'ListItem', position: 11, name: 'Trek to Samar (3,660 m)' },
          { '@type': 'ListItem', position: 12, name: 'Trek to Kagbeni (2,810 m)' },
          { '@type': 'ListItem', position: 13, name: 'Trek to Jomsom (2,720 m)' },
          { '@type': 'ListItem', position: 14, name: 'Fly to Pokhara and back to Kathmandu' }
        ]
      },
      provider: { '@type': 'Organization', name: 'TrekFinity' },
      termsOfService: 'Restricted Area Permit (RAP) required; guided travel with a registered agency.'
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
        <div
          className="absolute inset-0 bg-center bg-cover animate-kenburns-bg"
          style={{ backgroundImage: `url(${heroUrl})` }}
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Upper Mustang Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Journey to the Forbidden Kingdom of Lo</p>
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
                The Upper Mustang Trek, often called the “Last Forbidden Kingdom,” takes you into the ancient walled city of Lo Manthang, where Tibetan culture thrives untouched by time. Set in the rain shadow of the Annapurna and Dhaulagiri ranges, this high-altitude desert reveals colorful cliffs, sky caves, and centuries-old Buddhist monasteries.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Opened to foreign trekkers only in 1992, Upper Mustang preserves a way of life dating back to the 15th century. Walking through dry, dramatic landscapes and visiting remote villages offers a rare glimpse of the lost Tibetan kingdom of Lo—a blend of spirituality, history, and raw natural beauty.
              </p>

              {/* Trek Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-foreground mt-2">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore the walled kingdom of Lo Manthang and its royal palace</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit ancient monasteries like Thubchen, Jampa, and the Chhoser caves</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Walk through the Himalayan desert with stunning cliffs and canyons</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Discover Tibetan-influenced culture, art, and lifestyle</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Rare opportunity to trek in a restricted region of Nepal</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Enjoy panoramic views of Nilgiri, Annapurna, and Dhaulagiri ranges</span></li>
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
                      <p className="text-sm text-muted-foreground">14–17 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mountain className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Maximum Elevation</p>
                      <p className="text-sm text-muted-foreground">Up to ~4,300 m</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Difficulty</p>
                      <p className="text-sm text-muted-foreground">Moderate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Compass className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Best Seasons</p>
                      <p className="text-sm text-muted-foreground">March–November (including monsoon)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Start / End</p>
                      <p className="text-sm text-muted-foreground">Jomsom</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Accommodation</p>
                      <p className="text-sm text-muted-foreground">Lodges and guesthouses</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                  Permits: Restricted Area Permit (about USD 500 for 10 days) and ACAP. Guided travel with a registered agency; solo trekking not allowed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why is the Upper Mustang Trek famous?</h3>
              <p className="text-muted-foreground">The Upper Mustang Trek is renowned for its unique Tibetan-influenced culture, ancient monasteries, and striking desert-like landscapes in the rain shadow of the Annapurna range. Lo Manthang’s centuries-old walled city, mysterious sky caves, and vibrant Tiji Festival make it an exclusive Himalayan experience.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the Upper Mustang Trek?</h3>
              <p className="text-muted-foreground">Moderate overall. Altitude is generally below ~4,300 m, but long walking days, dry climate, dust and wind can be challenging. With average fitness, acclimatization, and a guided itinerary, most trekkers complete it comfortably.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Do I need special permits for Upper Mustang?</h3>
              <p className="text-muted-foreground">Yes. You need a Restricted Area Permit (about USD 500 for 10 days) and ACAP. Permits are issued via registered trekking agencies; solo trekking is not allowed. The regulations protect culture and environment while limiting footfall.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What makes Lo Manthang special?</h3>
              <p className="text-muted-foreground">Lo Manthang is the cultural heart of Mustang with the King’s palace, monasteries like Thubchen and Jampa, whitewashed houses, and alleys that feel frozen in time. The preserved traditions, art-filled gompas, and friendly locals create a truly magical atmosphere.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">When is the best time to trek Upper Mustang?</h3>
              <p className="text-muted-foreground">March to November. Being in the Himalayan rain shadow, Upper Mustang is also suitable in the monsoon (Jun–Aug). May features the colorful Tiji Festival. Winters (Dec–Feb) are harsh and generally avoided.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Is travel insurance mandatory?</h3>
              <p className="text-muted-foreground">Yes. This remote, high-altitude region has limited medical access. Your policy should cover trekking up to 6,000 m and include helicopter evacuation, trip cancellation, and medical treatment.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">What kind of accommodation can I expect?</h3>
              <p className="text-muted-foreground">Basic but clean lodges with twin rooms, blankets, and hearty local meals (dal bhat, Tibetan bread). In Lo Manthang, some guesthouses offer hot showers and limited Wi‑Fi. Electricity is often solar-powered; options are simple yet authentic.</p>
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
              <div className="space-y-8" aria-label="Upper Mustang daily itinerary">
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Arrival in Kathmandu (1,400 m)</h3><p className="text-muted-foreground">Meet and greet at TIA; detailed trek briefing and welcome dinner.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Fly to Pokhara (827 m) and explore Lakeside</h3><p className="text-muted-foreground">Short flight; stroll along Phewa Lake and relax by waterfront cafés.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Fly to Jomsom (2,720 m), Trek to Kagbeni (2,810 m)</h3><p className="text-muted-foreground">Scenic Himalayan flight; follow the Kali Gandaki to Kagbeni (3–4 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Chele (3,050 m)</h3><p className="text-muted-foreground">Cross bridges and enter barren Mustang landscapes with Tibetan flavor (5–6 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Syangboche (3,800 m)</h3><p className="text-muted-foreground">Rugged terrain, sweeping canyons, and monastery hamlets (≈5 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Ghami (3,520 m)</h3><p className="text-muted-foreground">Walk the longest mani wall and admire ochre-red cliffs (5–6 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Tsarang (3,560 m)</h3><p className="text-muted-foreground">Ancient stupas, prayer wheels, and the Tsarang Monastery (4–5 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Lo Manthang (3,810 m)</h3><p className="text-muted-foreground">Reach the walled city, cultural heart of Mustang (5–6 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Explore Lo Manthang</h3><p className="text-muted-foreground">Visit the King’s Palace, Thubchen & Jampa gompas; optional horse ride to Chhoser Cave. Rest/acclimatization.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Dhakmar (3,810 m)</h3><p className="text-muted-foreground">Descend via ancient caves and red rock canyons (≈6 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Samar (3,660 m)</h3><p className="text-muted-foreground">Desert ridges with mountain views and hamlets (≈5 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Kagbeni (2,810 m)</h3><p className="text-muted-foreground">Retrace to the gateway village; changing desert scenery (5–6 h).</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Trek to Jomsom (2,720 m)</h3><p className="text-muted-foreground">Final trekking day along the Kali Gandaki (≈3 h). Celebrate the journey.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Fly to Pokhara and back to Kathmandu</h3><p className="text-muted-foreground">Morning flight to Pokhara; onward to Kathmandu. Free evening.</p></div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Upper Mustang Trek</h2>
              <p className="text-muted-foreground">Ready to explore the Forbidden Kingdom? Fill out the form below and we'll get back to you within 24 hours.</p>
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
                    <option>3–5 people</option>
                    <option>6–10 people</option>
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

export default UpperMustang;