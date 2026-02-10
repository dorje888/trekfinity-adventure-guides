import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const ManasluCircuit = () => {
  // Dev cache buster and hero images (served from public/Manaslu)
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const manasluImages = [
    '/Manaslu/erik-OwJ6Cn_DnHM-unsplash.jpg',
    '/Manaslu/erik-0ldqchbk1a0-unsplash.jpg',
    '/Manaslu/erik-xeIH7VK8XOc-unsplash.jpg',
  ].map((p) => `${p}${bust}`);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  // SEO: title, description, keywords, OG/Twitter, canonical, JSON-LD
  React.useEffect(() => {
    const title = 'Manaslu Circuit Trek | Larkya La Pass (14–16 Days) | TrekFinity';
    const description = 'Manaslu Circuit Trek: a challenging, less-crowded Himalayan classic circling Mt. Manaslu (8,163 m) via Larkya La Pass (5,160 m). Budhi Gandaki gorge, Tibetan-influenced villages (Samagaon, Lho), monasteries, and panoramic views of Himalchuli, Ganesh Himal, Annapurna II.';
    const keywords = 'Manaslu Circuit Trek, Larkya La Pass trek, Manaslu trekking itinerary, restricted area trekking Nepal, off-the-beaten-path treks, Manaslu Trek difficulty, best time for Manaslu trek';

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

    const id = 'ld-trip-manaslu-circuit';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Manaslu Circuit Trek',
      description,
      touristType: 'Experienced trekkers seeking challenging high-pass circuit',
      areaServed: { '@type': 'AdministrativeArea', name: 'Gorkha District, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Drive Kathmandu → Soti Khola (710 m)' },
          { '@type': 'ListItem', position: 2, name: 'Soti Khola → Machha Khola (900 m)' },
          { '@type': 'ListItem', position: 3, name: 'Machha Khola → Jagat (1,340 m)' },
          { '@type': 'ListItem', position: 4, name: 'Jagat → Deng (1,860 m)' },
          { '@type': 'ListItem', position: 5, name: 'Deng → Namrung (2,630 m)' },
          { '@type': 'ListItem', position: 6, name: 'Namrung → Lho (3,180 m)' },
          { '@type': 'ListItem', position: 7, name: 'Lho → Samagaon (3,530 m)' },
          { '@type': 'ListItem', position: 8, name: 'Acclimatization in Samagaon (Manaslu BC / Pungyen Gompa)' },
          { '@type': 'ListItem', position: 9, name: 'Samagaon → Samdo (3,875 m)' },
          { '@type': 'ListItem', position: 10, name: 'Samdo → Dharmasala (4,460 m)' },
          { '@type': 'ListItem', position: 11, name: 'Cross Larkya La (5,160 m) → Bimtang (3,720 m)' },
          { '@type': 'ListItem', position: 12, name: 'Bimtang → Tilije (2,300 m)' },
          { '@type': 'ListItem', position: 13, name: 'Tilije → Dharapani (1,960 m), drive to Besisahar' },
          { '@type': 'ListItem', position: 14, name: 'Drive Besisahar → Kathmandu' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1950', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section - auto sliding images */}
        <div className="relative h-[70vh] overflow-hidden">
          {/* Carousel Underlay */}
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {manasluImages.map((src, idx) => (
                <CarouselItem key={idx} className="h-[70vh] relative">
                  <img
                    src={src}
                    alt={`Manaslu gallery image ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Content overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Manaslu Circuit Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Remote restricted-area classic via Larkya La (5,160 m) • 14–16 days</p>
              <Link 
                to="#book-now" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium text-lg"
              >
                Book This Trek
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Manaslu Circuit Trek is one of Nepal’s most breathtaking and less-crowded Himalayan journeys, circling the eighth-highest mountain—Mt. Manaslu (8,163 m). Opened to foreigners in 1991, it threads through the dramatic Budhi Gandaki valley, lush forests, terraced hills, and Tibetan-influenced villages adorned with monasteries, mani walls, and chortens.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  The trail culminates at Larkya La Pass (5,160 m), where expansive views sweep across Himalchuli, Ganesh Himal, Annapurna II and Manaslu itself. A remarkable alternative to the Annapurna Circuit, it retains wild beauty, authentic culture, and a strong sense of remoteness.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Circle around Mt. Manaslu (8,163 m), the world’s 8th highest peak</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Cross the challenging and beautiful Larkya La Pass (5,160 m)</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore Tibetan-style villages like Samagaon and Lho</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Witness monasteries, mani walls, and chortens along the trail</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Panoramic views of Himalchuli, Ganesh Himal, and Annapurna ranges</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Less crowded route, rich in authentic mountain culture</span></li>
                </ul>
              </div>
              
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">14–16 days</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">5,160 m (Larkya La Pass)</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Challenging</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">Mar–May / Sep–Nov</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Region</p><p className="font-medium">Gorkha District, Nepal</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Users className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Accommodation</p><p className="font-medium">Teahouses</p></div></div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-muted-foreground">Permits: Manaslu RAP, ACAP, and TIMS are mandatory. Guided groups only (no solo).</p>
                    <Link 
                      to="#book-now" 
                      className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium mt-4"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Why is the Manaslu Circuit Trek popular among trekkers?</h3>
                <p className="text-muted-foreground">It’s less commercialized yet dramatically scenic: remote wilderness, deep Tibetan culture, and the challenge of crossing Larkya La with views of eight-thousanders—ideal for solitude and spectacle.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Is the Manaslu Circuit Trek difficult?</h3>
                <p className="text-muted-foreground">Moderately difficult to challenging due to long days and altitude. With gradual acclimatization and a licensed guide, fit first-timers can complete it successfully.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What permits are required?</h3>
                <p className="text-muted-foreground">Three permits are needed: Manaslu Restricted Area Permit (RAP), Annapurna Conservation Area Permit (ACAP), and TIMS Card. These ensure controlled access and conservation.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Best time to trek</h3>
                <p className="text-muted-foreground">Spring (Mar–May) and autumn (Sep–Nov) provide stable weather and clear mountain views. Winter brings snow and cold; monsoon entails rain and possible landslides.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How high is Larkya La and what to expect?</h3>
                <p className="text-muted-foreground">At 5,160 m, expect thin air, strong winds, and breathtaking panoramas. It’s often the trek’s highlight—tough but deeply rewarding.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation and food</h3>
                <p className="text-muted-foreground">Well-maintained teahouses serve Nepali and Tibetan fare—dal bhat, momo, thukpa, noodles. Rooms are basic but cozy, often with shared facilities.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Can I trek solo?</h3>
                <p className="text-muted-foreground">No. Due to restricted area rules, solo trekking isn’t allowed. You must have a licensed guide and at least two trekkers in the group.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Is travel insurance required?</h3>
                <p className="text-muted-foreground">Yes—ensure coverage for high-altitude trekking (over 5,000 m), emergency evacuation, and medical treatment.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Itinerary Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (14 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Manaslu Circuit daily itinerary">
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive Kathmandu → Soti Khola</h3><p className="text-muted-foreground">710 m — Long scenic drive to the Budhi Gandaki valley.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Soti Khola → Machha Khola</h3><p className="text-muted-foreground">900 m — Riverbank trails and suspension bridges.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Machha Khola → Jagat</h3><p className="text-muted-foreground">1,340 m — Enter the restricted area gateway.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Jagat → Deng</h3><p className="text-muted-foreground">1,860 m — Cliffs, waterfalls, and river gorges.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Deng → Namrung</h3><p className="text-muted-foreground">2,630 m — Forested climbs toward alpine zones.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Namrung → Lho</h3><p className="text-muted-foreground">3,180 m — First broad views of Manaslu massif.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">7</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Lho → Samagaon</h3><p className="text-muted-foreground">3,530 m — Monasteries and Tibetan-influenced settlements.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">8</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Acclimatization in Samagaon</h3><p className="text-muted-foreground">Side trip to Manaslu Base Camp or Pungyen Gompa.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">9</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Samagaon → Samdo</h3><p className="text-muted-foreground">3,875 m — Windswept valley and yak pastures.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">10</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Samdo → Dharmasala</h3><p className="text-muted-foreground">4,460 m — Prepare for the pass; early night.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">11</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Cross Larkya La → Bimtang</h3><p className="text-muted-foreground">5,160 m / 3,720 m — Big day with sweeping Himalayan panoramas.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">12</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Bimtang → Tilije</h3><p className="text-muted-foreground">2,300 m — Descend through rhododendron forests.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">13</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Tilije → Dharapani, drive to Besisahar</h3><p className="text-muted-foreground">1,960 m — Exit onto Annapurna Circuit road-head.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">14</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive Besisahar → Kathmandu</h3><p className="text-muted-foreground">Return to Kathmandu; trek concludes.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking */}
        <section id="book-now" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Manaslu Circuit Trek</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/40">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#6F60A1] mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#6F60A1] mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="trekDate" className="block text-sm font-medium text-[#6F60A1] mb-1">Preferred Trek Date</label>
                      <input 
                        type="date" 
                        id="trekDate" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-[#6F60A1] mb-1">Group Size</label>
                      <select 
                        id="groupSize" 
                        className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none"
                      >
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3-5">3–5 people</option>
                        <option value="6-10">6–10 people</option>
                        <option value="10+">More than 10 people</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Special Requirements or Questions</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                      placeholder="Tell us about any special requirements or questions you may have..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition-premium"
                  >
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

export default ManasluCircuit;
