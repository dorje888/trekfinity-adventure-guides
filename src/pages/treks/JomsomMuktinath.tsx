import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const JomsomMuktinath = () => {
  const hero = `/Annapurna/sanjay-hona-qAA6INniUNg-unsplash.jpg${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: title, description, keywords, Open Graph/Twitter, canonical, JSON-LD (14 days)
  React.useEffect(() => {
    const title = 'Lower Mustang (Jomsom–Muktinath) Trek | Sacred Muktinath & Kali Gandaki (14 Days) | TrekFinity';
    const description = 'Lower Mustang (Jomsom–Muktinath) Trek: scenic, culturally rich route with views of Annapurna, Dhaulagiri and Nilgiri. Visit sacred Muktinath (3,800 m), explore Kagbeni and Marpha, and fly over the Kali Gandaki gorge. Easy–moderate, family-friendly; best in Mar–May & Sep–Nov.';
    const keywords = 'Lower Mustang Trek, Jomsom–Muktinath Trek, Muktinath Temple trek, Kali Gandaki trek, Thakali villages Marpha Kagbeni, apple orchards Mustang, best time Lower Mustang, beginner trek Nepal, Pokhara to Jomsom flight, ACAP TIMS permits';

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

    const id = 'ld-trip-lower-mustang-jomsom-muktinath';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Lower Mustang (Jomsom–Muktinath) Trek',
      description,
      touristType: 'Pilgrims, beginners and family trekkers seeking easy–moderate cultural trek',
      areaServed: { '@type': 'AdministrativeArea', name: 'Annapurna & Lower Mustang, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m) – Welcome and briefing' },
          { '@type': 'ListItem', position: 2, name: 'Drive or fly to Pokhara (822 m)' },
          { '@type': 'ListItem', position: 3, name: 'Fly to Jomsom (2,720 m), trek to Kagbeni (2,810 m)' },
          { '@type': 'ListItem', position: 4, name: 'Kagbeni → Muktinath (3,800 m) – Temple visit' },
          { '@type': 'ListItem', position: 5, name: 'Muktinath → Marpha (2,670 m) – Apple orchards & Thakali village' },
          { '@type': 'ListItem', position: 6, name: 'Marpha → Kalopani (2,530 m) – Dhaulagiri & Annapurna views' },
          { '@type': 'ListItem', position: 7, name: 'Kalopani → Tatopani (1,190 m) – Natural hot springs' },
          { '@type': 'ListItem', position: 8, name: 'Tatopani → Ghorepani (2,874 m)' },
          { '@type': 'ListItem', position: 9, name: 'Poon Hill sunrise (3,210 m), trek to Tadapani (2,630 m)' },
          { '@type': 'ListItem', position: 10, name: 'Tadapani → Ghandruk (1,940 m) – Gurung village & museum' },
          { '@type': 'ListItem', position: 11, name: 'Ghandruk → Nayapul, drive to Pokhara' },
          { '@type': 'ListItem', position: 12, name: 'Free day in Pokhara – Boating and sightseeing' },
          { '@type': 'ListItem', position: 13, name: 'Drive or fly back to Kathmandu' },
          { '@type': 'ListItem', position: 14, name: 'Final departure' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '850', availability: 'https://schema.org/InStock' },
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
        <img src={hero} alt="Kali Gandaki Valley towards Muktinath with Annapurna and Nilgiri views" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Lower Mustang (Jomsom–Muktinath) Trek</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Breathtaking Annapurna views and the sacred Muktinath Temple</p>
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
                The Lower Mustang (Jomsom–Muktinath) Trek is one of Nepal’s most scenic and culturally rich journeys, offering sweeping views of Annapurna, Dhaulagiri, and Nilgiri. It blends Himalayan beauty with spiritual significance as you traverse charming Thakali villages, apple orchards, windy valleys, and sacred pilgrimage sites.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Muktinath (3,800 m)—a revered temple for both Hindus and Buddhists—symbolizes harmony and devotion. The route also showcases diverse terrain, from subtropical forests to the arid, Tibetan-like landscapes of Mustang. Easier and more accessible than Upper Mustang, it’s ideal for families and first-time trekkers.
              </p>

              {/* Trek Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-foreground">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit the sacred temple of Muktinath (3,800 m)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Mountain views of Nilgiri, Dhaulagiri, and Annapurna</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Scenic flight over the Kali Gandaki gorge</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Jomsom, Kagbeni, and Marpha with Thakali cuisine</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Blend of Tibetan and Nepali cultures</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Suitable for beginners and short-time travelers</span></li>
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
                  <div className="flex items-center space-x-3"><Mountain className="h-5 w-5 text-primary" /><div><p className="font-medium">Maximum Elevation</p><p className="text-sm text-muted-foreground">3,800 m (Muktinath Temple)</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-primary" /><div><p className="font-medium">Difficulty</p><p className="text-sm text-muted-foreground">Easy to Moderate</p></div></div>
                  <div className="flex items-center space-x-3"><Users className="h-5 w-5 text-primary" /><div><p className="font-medium">Group Size</p><p className="text-sm text-muted-foreground">2–15 people</p></div></div>
                  <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="font-medium">Start / End</p><p className="text-sm text-muted-foreground">Pokhara / Jomsom</p></div></div>
                  <div className="flex items-center space-x-3"><Compass className="h-5 w-5 text-primary" /><div><p className="font-medium">Best Seasons</p><p className="text-sm text-muted-foreground">Mar–May & Sep–Nov</p></div></div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">Accommodation:</span> Teahouses & local lodges</p>
                    <p><span className="font-medium text-foreground">Permits:</span> ACAP & TIMS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs / Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why is the Jomsom–Muktinath Trek famous?</h3>
              <p className="text-muted-foreground">Famous for its blend of natural beauty and spiritual heritage. The sacred Muktinath Temple draws Hindu and Buddhist pilgrims, while the route passes Thakali villages, apple farms, and windy valleys along the Kali Gandaki River.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the Lower Mustang Trek?</h3>
              <p className="text-muted-foreground">Easy to moderate. Highest altitude around 3,800 m keeps AMS risk low. Trails are well-marked with comfortable lodges; expect some 5–6 hour walking days.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">When is the best time to trek?</h3>
              <p className="text-muted-foreground">Spring (Mar–May) and Autumn (Sep–Nov) for clear skies and mild temperatures. Monsoon is relatively dry due to the rain shadow; winter is colder yet quieter.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">What makes Muktinath special?</h3>
              <p className="text-muted-foreground">Muktinath symbolizes liberation (Moksha). Features 108 water spouts and an eternal flame. A living example of Nepal’s religious harmony with Hindu and Buddhist worship side by side.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation and food</h3>
              <p className="text-muted-foreground">Teahouses and lodges offer cozy rooms and hot meals. Enjoy Thakali cuisine and apple products like cider and pie in Marpha.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Is the Jomsom flight safe?</h3>
              <p className="text-muted-foreground">Generally safe but weather-dependent. Morning flights are more reliable due to afternoon winds. Agencies plan itineraries accordingly.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Can I combine it with other routes?</h3>
              <p className="text-muted-foreground">Yes. Common extensions include Upper Mustang, Annapurna Circuit, or Ghorepani–Poon Hill for panoramic sunrise views.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (14 days)</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>

              <div className="space-y-8" aria-label="Jomsom–Muktinath daily itinerary">
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Arrival in Kathmandu (1,400 m)</h3><p className="text-muted-foreground">Welcome to Nepal. Trek briefing and preparation.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Drive or fly to Pokhara (822 m)</h3><p className="text-muted-foreground">Transfer to the lakeside city and relax by Phewa Lake.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Fly to Jomsom (2,720 m), trek to Kagbeni (2,810 m)</h3><p className="text-muted-foreground">Scenic morning flight; begin trek along the Kali Gandaki.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Kagbeni → Muktinath (3,800 m)</h3><p className="text-muted-foreground">Trek to the sacred temple; explore 108 taps and the eternal flame.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Muktinath → Marpha (2,670 m)</h3><p className="text-muted-foreground">Descend to the apple capital; sample Thakali dishes and cider.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Marpha → Kalopani (2,530 m)</h3><p className="text-muted-foreground">Walk through Thakali settlements with grand Dhaulagiri views.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Kalopani → Tatopani (1,190 m)</h3><p className="text-muted-foreground">Relax in natural hot springs after a rewarding day on the trail.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Tatopani → Ghorepani (2,874 m)</h3><p className="text-muted-foreground">Climb through forests to the colorful village of Ghorepani.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Poon Hill sunrise (3,210 m), trek to Tadapani (2,630 m)</h3><p className="text-muted-foreground">Dawn viewpoint for a 360° panorama; continue to Tadapani.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Tadapani → Ghandruk (1,940 m)</h3><p className="text-muted-foreground">Descend to a traditional Gurung village; visit the museum.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Ghandruk → Nayapul, drive to Pokhara</h3><p className="text-muted-foreground">Walk out to the roadhead and transfer back to Lakeside.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Free day in Pokhara</h3><p className="text-muted-foreground">Boating on Phewa Lake, World Peace Pagoda, or café hopping.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Drive or fly back to Kathmandu</h3><p className="text-muted-foreground">Return to the capital. Farewell dinner optional.</p></div>
                <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div><h3 className="font-bold text-xl mb-2 text-foreground">Final departure</h3><p className="text-muted-foreground">Airport transfer for your onward journey.</p></div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Jomsom Muktinath Trek</h2>
              <p className="text-muted-foreground">Ready to explore the Kali Gandaki and the sacred Muktinath? Send your details and we’ll reply within 24 hours.</p>
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

export default JomsomMuktinath;
