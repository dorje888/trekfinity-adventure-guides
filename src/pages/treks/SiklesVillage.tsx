import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const SiklesVillage = () => {
  // Simple carousel using Annapurna images (public folder)
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const imgs = [
    '/Annapurna/touann-gatouillat-vergos-QFY3Tv5_12M-unsplash.jpg',
    '/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg',
    '/Annapurna/neha-maheen-mahfin-_sbkVaT19ko-unsplash.jpg',
  ].map((p) => `${p}${bust}`);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api]);

  // SEO: Title, meta description/keywords, OG/Twitter, canonical, JSON-LD
  React.useEffect(() => {
    const title = 'Sikles Village Trek | Gurung Culture & Short Trek from Pokhara (5–7 Days) | TrekFinity';
    const description = 'Sikles Village Trek: an easy-to-moderate, culture-forward trek northeast of Pokhara. Experience Gurung hospitality, homestays, rhododendron forests, and views of Fishtail, Annapurna II, and Lamjung Himal. 5–7 days, best Mar–May & Sep–Dec.';
    const keywords = 'Sikles Village Trek Nepal, Gurung village trek, short trek from Pokhara, Sikles homestay, family friendly trek Nepal, Annapurna views Fishtail, cultural trek Kaski 2025';

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

    const id = 'ld-trip-sikles';
    const prev = document.getElementById(id);
    if (prev) prev.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Sikles Village Trek',
      description,
      touristType: 'Families, photographers, culture-focused trekkers',
      areaServed: { '@type': 'AdministrativeArea', name: 'Kaski, Annapurna Region, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Drive Pokhara → Bijayapur, trek to Kalikasthan (1,370 m)' },
          { '@type': 'ListItem', position: 2, name: 'Kalikasthan → Lama Khet (1,680 m)' },
          { '@type': 'ListItem', position: 3, name: 'Lama Khet → Sikles Village (1,980 m)' },
          { '@type': 'ListItem', position: 4, name: 'Explore Sikles and viewpoints' },
          { '@type': 'ListItem', position: 5, name: 'Sikles → Ghale Gaun (2,020 m)' },
          { '@type': 'ListItem', position: 6, name: 'Ghale Gaun → Pokhara (820 m)' }
        ]
      },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(script);
    return () => { const s = document.getElementById(id); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[70vh] overflow-hidden">
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {imgs.map((src, idx) => (
                <CarouselItem key={idx} className="h-[70vh] relative">
                  <img src={src} alt={`Sikles Village Trek image ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-black/30" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Sikles Village Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Short Gurung-culture trek with close views of Fishtail and Annapurna</p>
              <Link to="#book-now" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium text-lg">
                Book This Trek
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Sikles Village Trek is a short, culturally rich adventure northeast of Pokhara. Ideal for those seeking authentic Himalayan culture with minimal physical strain, this trek offers close-up views of Machhapuchhre (Fishtail), Annapurna II, and Lamjung Himal.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  The highlight is the beautiful Gurung village of Sikles, known for warm hospitality, traditional architecture, and scenic terraced hillsides. This easy-to-moderate trek is perfect for families, photographers, and culture lovers.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore the traditional Gurung village of Sikles</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Spectacular views of Annapurna II, Lamjung Himal, and Fishtail</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Rich local culture, dance, and cuisine</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Trek through rhododendron forests and farmlands</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Ideal short trek from Pokhara</span></li>
                </ul>
              </div>

              {/* Details Card */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">5–7 days</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">~2,000 m</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Easy to Moderate</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">Mar–May / Sep–Dec</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Start / End</p><p className="font-medium">Pokhara</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Users className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Accommodation</p><p className="font-medium">Homestays & community lodges</p></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Why is Sikles Village famous?</h3>
                <p className="text-muted-foreground">Sikles is one of the largest Gurung villages in Nepal, known for its cultural authenticity and scenic mountain backdrop. Trekkers can witness traditional Gurung lifestyles, dances, and rituals passed down for generations. The peaceful environment, terraced fields, and panoramic mountain views make Sikles ideal for short treks near Pokhara.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the Sikles Trek?</h3>
                <p className="text-muted-foreground">Easy to moderate—perfect for beginners and families. Trails are well-defined with gradual ascents through forests and farmlands, focusing on culture and scenery rather than altitude.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What is the best time to trek to Sikles?</h3>
                <p className="text-muted-foreground">Spring (Mar–May) for blooming rhododendrons and Autumn (Sep–Nov) for clear vistas. These seasons often coincide with local festivals for an authentic Gurung cultural experience. Dec can also be crisp and clear.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">What are accommodations like?</h3>
                <p className="text-muted-foreground">Homestays and community lodges run by locals offer traditional meals, cultural shows and cozy rooms—an immersive village experience that directly supports the community.</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">What can I experience in Sikles Village?</h3>
                <p className="text-muted-foreground">Enjoy local dances, explore temples and stone-paved alleys, and hike to nearby viewpoints for sunrise views of Annapurna and Machhapuchhre. Vibrant community life provides deep cultural insight into rural Nepal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary (6 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Sikles Village daily itinerary">
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">1</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Drive Pokhara → Bijayapur, trek to Kalikasthan</h3><p className="text-muted-foreground">1,370 m — Begin through farmlands and gentle ridges.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">2</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Kalikasthan → Lama Khet</h3><p className="text-muted-foreground">1,680 m — Forest paths, village life, and river valleys.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">3</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Lama Khet → Sikles Village</h3><p className="text-muted-foreground">1,980 m — Arrive to Gurung hospitality and terraces.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">4</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Explore Sikles & viewpoints</h3><p className="text-muted-foreground">Optional sunrise hikes; cultural activities and village tours.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">5</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Sikles → Ghale Gaun</h3><p className="text-muted-foreground">2,020 m — Community heritage and mountain vistas.</p></div>
                  <div className="relative pl-14"><div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">6</span></div><h3 className="font-bold text-xl mb-1 text-foreground">Ghale Gaun → Pokhara</h3><p className="text-muted-foreground">820 m — Return to Pokhara; trip concludes or extend stay.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book-now" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Book Sikles Village Trek</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border/40">
                <form className="space-y-6">
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
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-1">Questions or Requirements</label>
                    <textarea id="message" rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us your preferred dates, group size, or any special requests." />
                  </div>
                  <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition">
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

export default SiklesVillage;
