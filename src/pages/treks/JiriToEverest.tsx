import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const JiriToEverest = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const hero = `/Everest/ben-lowe-UOj_xa6Qp0A-unsplash.jpg${bust}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Jiri to Everest Base Camp Trek (Hillary–Tenzing Route, 21 Days) | Classic Solu–Khumbu Approach | TrekFinity';
    const description = 'Follow the historic Hillary–Tenzing route from Jiri through Solu’s villages, forests and passes to join the Khumbu trail and reach Everest Base Camp (5,364 m) and Kala Patthar (5,545 m). 21 days, moderate–challenging, best in Mar–May & Sep–Nov.';
    const keywords = 'Jiri to Everest Base Camp Trek, Jiri to EBC itinerary 21 days, classic Hillary Tenzing route, Solu Khumbu trek, Lamjura La, Taksindu La, Namche Bazaar, Tengboche Monastery, Kala Patthar 5545m, Sagarmatha National Park permit, Khumbu Pasang Lhamu permit, best time EBC trek';

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
    const idTrip = 'ld-trip-jiri-ebc';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Jiri to Everest Base Camp Trek',
      description,
      touristType: 'Trekkers seeking historic, culture-rich approach and gradual acclimatization to EBC',
      areaServed: { '@type': 'AdministrativeArea', name: 'Solu–Khumbu, Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 21,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m)' },
          { '@type': 'ListItem', position: 2, name: 'Drive Kathmandu → Jiri (1,905 m)' },
          { '@type': 'ListItem', position: 3, name: 'Jiri → Bhandar (2,190 m)' },
          { '@type': 'ListItem', position: 4, name: 'Bhandar → Sete (2,575 m)' },
          { '@type': 'ListItem', position: 5, name: 'Sete → Junbesi (2,700 m) via Lamjura La (3,530 m)' },
          { '@type': 'ListItem', position: 6, name: 'Junbesi → Nunthala (2,200 m) via Taksindu La (3,071 m)' },
          { '@type': 'ListItem', position: 7, name: 'Nunthala → Bupsa (2,360 m)' },
          { '@type': 'ListItem', position: 8, name: 'Bupsa → Surke (2,290 m)' },
          { '@type': 'ListItem', position: 9, name: 'Surke → Phakding (2,610 m)' },
          { '@type': 'ListItem', position: 10, name: 'Phakding → Namche Bazaar (3,440 m)' },
          { '@type': 'ListItem', position: 11, name: 'Acclimatization in Namche Bazaar' },
          { '@type': 'ListItem', position: 12, name: 'Namche → Tengboche (3,860 m)' },
          { '@type': 'ListItem', position: 13, name: 'Tengboche → Dingboche (4,410 m)' },
          { '@type': 'ListItem', position: 14, name: 'Acclimatization in Dingboche (hike Nangkartshang Peak 5,083 m)' },
          { '@type': 'ListItem', position: 15, name: 'Dingboche → Lobuche (4,910 m)' },
          { '@type': 'ListItem', position: 16, name: 'Lobuche → Gorak Shep & Everest Base Camp (5,364 m)' },
          { '@type': 'ListItem', position: 17, name: 'Kala Patthar (5,545 m) → Pheriche (4,240 m)' },
          { '@type': 'ListItem', position: 18, name: 'Pheriche → Namche Bazaar' },
          { '@type': 'ListItem', position: 19, name: 'Namche → Lukla' },
          { '@type': 'ListItem', position: 20, name: 'Fly Lukla → Kathmandu' },
          { '@type': 'ListItem', position: 21, name: 'Final Departure' }
        ]
      },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-jiri-ebc';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How long is the Jiri to EBC Trek?', acceptedAnswer: { '@type': 'Answer', text: 'Typically 20–22 days depending on walking pace and acclimatization stops.' } },
        { '@type': 'Question', name: 'What makes this route different from the Lukla route?', acceptedAnswer: { '@type': 'Answer', text: 'It is the original, less crowded trail with gradual altitude gain, richer cultural immersion and scenic diversity before reaching the Khumbu main trail.' } },
        { '@type': 'Question', name: 'Do I need special permits?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—Sagarmatha National Park Entry Permit and Khumbu Pasang Lhamu Rural Municipality Permit.' } },
        { '@type': 'Question', name: 'What’s the best time for this trek?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March–May) and autumn (September–November) for stable weather and clear views.' } },
        { '@type': 'Question', name: 'How difficult is the trek?', acceptedAnswer: { '@type': 'Answer', text: 'Moderate to challenging due to long duration and altitude; no technical climbing required.' } },
        { '@type': 'Question', name: 'Is altitude sickness a risk?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but the longer Jiri approach provides natural acclimatization before 3,000 m.' } },
        { '@type': 'Question', name: 'What is accommodation like?', acceptedAnswer: { '@type': 'Answer', text: 'Local teahouses and lodges with basic rooms, hot drinks and Nepali meals.' } },
        { '@type': 'Question', name: 'Can I charge devices and access Wi‑Fi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, electricity and Wi‑Fi are available in most villages (fees may apply in remote areas).' } },
        { '@type': 'Question', name: 'How much does the trek cost?', acceptedAnswer: { '@type': 'Answer', text: 'Around USD 1,800–2,300 depending on group size and services.' } },
        { '@type': 'Question', name: 'Is travel insurance required?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—insurance covering trekking above 5,000 m and helicopter evacuation is mandatory.' } },
        { '@type': 'Question', name: 'What fitness do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Good stamina to walk 5–7 hours daily with sustained climbs; pre-trek training is recommended.' } },
        { '@type': 'Question', name: 'Can beginners attempt this trek?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, with proper preparation; the longer approach helps first-time trekkers acclimatize.' } }
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
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <img src={hero} alt="Jiri to Everest Base Camp trek hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Jiri to Everest Base Camp Trek</h1>
              <p className="text-lg md:text-2xl">Follow the historic Hillary–Tenzing approach through Solu to the Khumbu highlands</p>
              <Button size="lg" asChild className="mt-6">
                <Link to="#booking">Book This Trek <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">The Jiri to Everest Base Camp Trek retraces the classic trail taken by Sir Edmund Hillary and Tenzing Norgay in 1953. Starting from Jiri (1,905 m), it winds through the Solu region’s terraced hillsides, forests and traditional Sherpa, Rai and Tamang villages, before joining the main Khumbu trail near Lukla. This longer approach offers gradual altitude gain, richer culture and fewer crowds than the fly-in route.</p>
                <p className="text-lg text-muted-foreground mb-6">Over 21 days you will cross historic passes like Lamjura La (3,530 m) and Taksindu La (3,071 m), explore Namche Bazaar and Tengboche Monastery, reach Everest Base Camp (5,364 m) and climb Kala Patthar (5,545 m) for a sunrise panorama. Accommodation is in welcoming teahouses and lodges throughout.</p>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Walk the original Hillary–Tenzing trail from Jiri</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Terraced fields, mid-hill villages and rhododendron forests</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Gradual altitude gain for natural acclimatization</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience Sherpa culture, monasteries and Buddhist traditions</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit Namche Bazaar, Tengboche, EBC and Kala Patthar</span></li>
                  <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Everest, Lhotse, Ama Dablam, Thamserku and Makalu views</span></li>
                </ul>

                <Button size="lg" asChild className="mt-6">
                  <Link to="#booking">Book Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>

              {/* Trek Details */}
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">21 days</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">5,545 m (Kala Patthar)</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Moderate – Challenging</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Users className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Group Size</p><p className="font-medium">2–12 people</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Start / End</p><p className="font-medium">Start: Jiri (drive from Kathmandu) / End: Fly Lukla → Kathmandu</p></div></div>
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">March–May / September–November</p></div></div>
                  </div>
                  <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">Permits: Sagarmatha National Park Entry Permit and Khumbu Pasang Lhamu Rural Municipality Permit. Accommodation: teahouses/lodges.</div>
                </div>
              </div>
            </div>

            {/* FAQs (visible content) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
              {[
                ['How long is the Jiri to EBC Trek?', 'It usually takes 20–22 days, depending on walking pace and acclimatization stops.'],
                ['What makes this route different from the Lukla route?', 'The Jiri route is the original and less crowded trail that provides gradual altitude gain, cultural immersion and scenic diversity.'],
                ['Do I need special permits?', 'Yes—Sagarmatha National Park Entry Permit and Khumbu Pasang Lhamu Rural Municipality Permit.'],
                ['What’s the best time for this trek?', 'Spring (March–May) and autumn (September–November) are best for stable weather and clear views.'],
                ['How difficult is the trek?', 'Moderate to challenging due to its long duration and altitude; no technical climbing is involved.'],
                ['Is altitude sickness a risk?', 'Yes, but the longer Jiri route helps by providing gradual acclimatization before 3,000 m.'],
                ['What is accommodation like?', 'Local teahouses and lodges with basic facilities, hot meals and warm drinks.'],
                ['Can I charge devices and access Wi‑Fi?', 'Yes, electricity and Wi‑Fi are available in most villages; charges may apply in remote areas.'],
                ['How much does the trek cost?', 'Approx. USD 1,800–2,300 depending on group size and services.'],
                ['Is travel insurance required?', 'Yes—must cover trekking above 5,000 m and emergency helicopter evacuation.'],
                ['What kind of fitness do I need?', 'Good stamina to walk 5–7 hours daily with some sustained climbs.'],
                ['Can beginners attempt this trek?', 'Yes, with proper training and preparation; the longer approach helps first-timers.']
              ].map((qa, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{qa[0]}</h3>
                  <p className="text-muted-foreground">{qa[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Itinerary Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Detailed Itinerary (21 days)</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
                <div className="space-y-8" aria-label="Jiri to Everest Base Camp daily itinerary">
                  {[
                    ['Arrival in Kathmandu (1,400 m)', 'Welcome to Nepal! Airport pickup and transfer to your hotel in Thamel. Evening briefing and equipment check. Accommodation: Hotel in Kathmandu.'],
                    ['Drive Kathmandu → Jiri (1,905 m) – 7–8 hours', 'Scenic drive east through green hills and terraced farmland to Jiri, gateway to the old Everest route.'],
                    ['Jiri → Bhandar (2,190 m) – ~6 hours', 'Uphill through forests and hamlets; descend to Bhandar among terraced fields.'],
                    ['Bhandar → Sete (2,575 m) – ~6 hours', 'Descend to Likhu Khola, then climb steeply through forests to Sete, a Sherpa village with monasteries.'],
                    ['Sete → Junbesi (2,700 m) via Lamjura La (3,530 m) – ~6 hours', 'Cross the highest pass between Jiri and Namche, then descend to beautiful Junbesi.'],
                    ['Junbesi → Nunthala (2,200 m) via Taksindu La (3,071 m) – ~6 hours', 'Visit Junbesi monastery, cross Taksindu La and descend through forest to Nunthala.'],
                    ['Nunthala → Bupsa (2,360 m) – ~6 hours', 'Drop to the Dudh Koshi and climb through Rai and Sherpa villages to Bupsa.'],
                    ['Bupsa → Surke (2,290 m) – ~5 hours', 'Gradual forested trail with monkeys and birds and views toward Khumbu peaks.'],
                    ['Surke → Phakding (2,610 m) – ~5 hours', 'Join the main Everest trail at Chaurikharka and follow the Dudh Koshi to Phakding.'],
                    ['Phakding → Namche Bazaar (3,440 m) – ~6 hours', 'Enter Sagarmatha National Park and tackle the iconic climb to Namche, the Sherpa capital.'],
                    ['Acclimatization in Namche Bazaar', 'Optional hikes to Everest View Hotel and Khumjung plus the Sherpa Museum.'],
                    ['Namche → Tengboche (3,860 m) – ~5 hours', 'Balcony trail with views over the Imja valley; visit Tengboche Monastery.'],
                    ['Tengboche → Dingboche (4,410 m) – ~6 hours', 'Descend to Debuche, cross Imja River, then climb to fields and lodges of Dingboche.'],
                    ['Acclimatization at Dingboche', 'Hike Nangkartshang Peak (5,083 m) for Makalu and Imja Valley panoramas.'],
                    ['Dingboche → Lobuche (4,910 m) – ~5 hours', 'Pass the memorials at Thukla and traverse the Khumbu Glacier moraines to Lobuche.'],
                    ['Lobuche → Gorak Shep & Everest Base Camp (5,364 m) – ~8 hours', 'Reach EBC along the glacier margins, then return to Gorak Shep for the night.'],
                    ['Kala Patthar (5,545 m) → Pheriche (4,240 m) – ~7 hours', 'Pre-dawn climb for 360° sunrise of Everest region; descend to Pheriche.'],
                    ['Pheriche → Namche Bazaar – ~6 hours', 'Retrace via Pangboche and Tengboche to Namche.'],
                    ['Namche → Lukla – ~7 hours', 'Final day across bridges and forest to Lukla; celebrate with the crew.'],
                    ['Fly Lukla → Kathmandu', 'Morning flight; free time for rest and shopping. Accommodation: Hotel in Kathmandu.'],
                    ['Final Departure', 'Transfer to the airport for your onward journey.']
                  ].map((it, i) => (
                    <div key={i} className="relative pl-14">
                      <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10"><span className="font-bold text-mountain-700">{i+1}</span></div>
                      <h3 className="font-bold text-xl mb-1 text-foreground">{it[0]}</h3>
                      <p className="text-muted-foreground">{it[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">Book Jiri to Everest Base Camp</h2>
                <p className="text-muted-foreground">Share your dates and group size. We’ll confirm permits, logistics and availability within 24 hours.</p>
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
      </div>
      <Footer />
    </div>
  );
};

export default JiriToEverest;
