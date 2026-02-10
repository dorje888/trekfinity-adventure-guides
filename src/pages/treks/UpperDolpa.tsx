import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const UpperDolpa: React.FC = () => {
  const hero = `/og-image.png${import.meta.env.DEV ? `?v=${Date.now()}` : ''}`;

  // SEO: Title, Description, Keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Upper Dolpa Trek | Shey Phoksundo, Monasteries, Remote Culture (18–22 Days) | TrekFinity';
    const description = 'Upper Dolpa Trek: one of Nepal’s most remote, culturally rich high-altitude treks through Shey Phoksundo National Park. Explore ancient Tibetan Buddhist monasteries, Dolpo culture, and arid trans-Himalayan terrain with views of Kanjiroba, Kubi and Churen Himal.';
    const keywords = 'Upper Dolpa Trek, Upper Dolpo trek, Shey Phoksundo National Park permit, Dolpa Restricted Area Permit, Juphal trek, Nepalgunj flight, Kanjiroba Himal, remote trek Nepal, Tibetan culture Dolpo, 18–22 days';

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
    const idTrip = 'ld-trip-upper-dolpa';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Upper Dolpa Trek',
      description,
      touristType: 'Trekkers seeking remote, culturally rich, high-altitude routes',
      areaServed: { '@type': 'AdministrativeArea', name: 'Dolpa District, Far-Western Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Day 1 – Arrival in Nepalgunj (200m)' },
          { '@type': 'ListItem', position: 2, name: 'Day 2 – Flight to Juphal (2,500m)' },
          { '@type': 'ListItem', position: 3, name: 'Day 3 – Trek to Dunai (2,500m)' },
          { '@type': 'ListItem', position: 4, name: 'Day 4 – Trek to Chhepka (3,200m)' },
          { '@type': 'ListItem', position: 5, name: 'Day 5 – Trek to Laken Gompa (3,500m)' },
          { '@type': 'ListItem', position: 6, name: 'Day 6 – Trek to Shey Gompa (4,200m)' },
          { '@type': 'ListItem', position: 7, name: 'Day 7 – Explore Shey and surrounding peaks' },
          { '@type': 'ListItem', position: 8, name: 'Day 8 – Trek to Kanjiroba Base Camp (5,330m)' },
          { '@type': 'ListItem', position: 9, name: 'Day 9–12 – Return trek via Laken Gompa and Dunai' },
          { '@type': 'ListItem', position: 10, name: 'Day 13 – Flight back to Nepalgunj' },
          { '@type': 'ListItem', position: 11, name: 'Day 14 – Departure' }
        ]
      },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-upper-dolpa';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why trek Upper Dolpa?', acceptedAnswer: { '@type': 'Answer', text: 'Upper Dolpa offers a rare opportunity to explore one of the least-visited regions of Nepal. Trekkers can witness untouched landscapes, ancient monasteries, and unique Tibetan-influenced culture. The isolation and pristine environment make this trek perfect for adventurers seeking tranquility away from crowded trails.' } },
        { '@type': 'Question', name: 'How difficult is the trek?', acceptedAnswer: { '@type': 'Answer', text: 'This is a very challenging trek due to remote terrain, high altitudes exceeding 5,000m, and minimal facilities. Fitness, proper acclimatization, and prior trekking experience are essential. Weather can change suddenly, adding to the challenge.' } },
        { '@type': 'Question', name: 'Best season for trekking?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March–May) and autumn (September–November) offer clear skies, moderate temperatures, and stable trail conditions. Monsoon and winter are not recommended due to landslides, heavy snow, and extreme cold.' } },
        { '@type': 'Question', name: 'Cultural experiences along the trail?', acceptedAnswer: { '@type': 'Answer', text: 'Trekkers pass Dolpo villages, visit ancient Buddhist monasteries, and experience Tibetan-style festivals and rituals. Locals provide insight into farming practices, cuisine, and traditional lifestyle.' } },
        { '@type': 'Question', name: 'Wildlife and nature?', acceptedAnswer: { '@type': 'Answer', text: 'Shey Phoksundo National Park is home to snow leopards, Himalayan tahr, blue sheep, and red pandas. Alpine meadows, glaciers, and arid Himalayan landscapes provide diverse flora and fauna.' } },
        { '@type': 'Question', name: 'Accommodation and food?', acceptedAnswer: { '@type': 'Answer', text: 'Basic lodges and guesthouses are available in villages, offering simple meals like dal bhat, noodles, and local bread. At higher altitudes, facilities are minimal; trekkers should carry essential supplies.' } },
        { '@type': 'Question', name: 'Is travel insurance required?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Insurance is mandatory due to remoteness and high-altitude challenges. Coverage should include medical emergencies, helicopter evacuation, and trekking accidents.' } },
        { '@type': 'Question', name: 'Preparation tips?', acceptedAnswer: { '@type': 'Answer', text: 'Train with cardio, strength work and multi-day hikes before departure. Prepare mentally for long, remote trekking days with limited connectivity.' } }
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

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={hero} alt="Upper Dolpa trek hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Upper Dolpa Trek</h1>
            <p className="text-xl md:text-2xl mb-8">Remote Shey Phoksundo, monasteries and Tibetan-influenced culture</p>
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Upper Dolpa Trek is one of Nepal’s most remote and culturally rich high-altitude treks. Situated in the far-western region of Nepal, this trek offers trekkers a journey into untouched Himalayan wilderness, ancient Tibetan Buddhist monasteries, and the unique culture of the Dolpo people. The trail passes through Shey Phoksundo National Park, the largest national park in Nepal, and offers spectacular views of snow-capped peaks like Kanjiroba, Kubi, and Churen Himal. This trek is ideal for adventurers looking for a remote, off-the-beaten-path experience.
              </p>

              {/* Highlights */}
              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Visit Shey Phoksundo National Park, home to snow leopards and Himalayan tahr.</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Explore ancient Tibetan Buddhist monasteries and local Dolpo culture.</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Trek through remote villages and high-altitude passes above 5,000 meters.</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Stunning views of Kanjiroba Himal and Shey Phoksundo Lake.</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Experience untouched landscapes, alpine meadows, and arid trans-Himalayan terrain.</span></li>
                <li className="flex items-start gap-3"><div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-mountain-700"></div></div><span className="text-muted-foreground">Observe Tibetan-style architecture, traditional festivals, and local lifestyle.</span></li>
              </ul>
            </div>

            {/* Trek Details */}
            <div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40 mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Trek Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Calendar className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Duration</p><p className="font-medium">18–22 days</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Mountain className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Maximum Elevation</p><p className="font-medium">5,330m (Kanjiroba Base Camp)</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Clock className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Difficulty</p><p className="font-medium">Very Challenging</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Users className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Group Size</p><p className="font-medium">2–12 people</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><MapPin className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Start / End</p><p className="font-medium">Nepalgunj / Juphal</p></div></div>
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center"><Compass className="h-5 w-5 text-mountain-700" /></div><div><p className="text-sm text-muted-foreground">Best Seasons</p><p className="font-medium">March–May, September–November</p></div></div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-muted-foreground">
                  Permits Required: Shey Phoksundo National Park Permit, Dolpa Restricted Area Permit, TIMS.
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-2">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Why trek Upper Dolpa?</h3>
              <p className="text-muted-foreground">Upper Dolpa offers a rare opportunity to explore one of the least-visited regions of Nepal. Trekkers can witness untouched landscapes, ancient monasteries, and unique Tibetan-influenced culture. The isolation and pristine environment make this trek perfect for adventurers seeking tranquility away from crowded trails.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">How difficult is the trek?</h3>
              <p className="text-muted-foreground">This is a very challenging trek due to remote terrain, high altitudes exceeding 5,000m, and minimal facilities. Fitness, proper acclimatization, and prior trekking experience are essential. Weather can change suddenly, adding to the challenge.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Best season for trekking?</h3>
              <p className="text-muted-foreground">Spring (March–May) and autumn (September–November) offer clear skies, moderate temperatures, and stable trail conditions. Monsoon and winter are not recommended due to landslides, heavy snow, and extreme cold.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Cultural experiences along the trail?</h3>
              <p className="text-muted-foreground">Trekkers pass Dolpo villages, visit ancient Buddhist monasteries, and experience Tibetan-style festivals and rituals. Locals are friendly and provide insight into their farming practices, cuisine, and traditional lifestyle.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Wildlife and nature?</h3>
              <p className="text-muted-foreground">Shey Phoksundo National Park is home to snow leopards, Himalayan tahr, blue sheep, and red pandas. Alpine meadows, glaciers, and arid Himalayan landscapes provide diverse flora and fauna.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Accommodation and food?</h3>
              <p className="text-muted-foreground">Basic lodges and guesthouses are available in villages, offering simple meals like dal bhat, noodles, and local bread. At higher altitudes, facilities are minimal; trekkers should carry essential supplies.</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-3">Is travel insurance required? & Preparation tips</h3>
              <p className="text-muted-foreground">Yes—insurance is mandatory due to remoteness and high-altitude challenges. Coverage should include medical emergencies, helicopter evacuation, and trekking accidents. Prepare with cardio and strength training, plus multi-day hikes to simulate back-to-back trekking days with limited connectivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Trek Itinerary</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
              <div className="space-y-8" aria-label="Upper Dolpa daily itinerary">
                {[
                  ['Day 1 – Arrival in Nepalgunj (200m)', 'Arrive in Nepalgunj, meet the trekking team, and attend a trek briefing.'],
                  ['Day 2 – Flight to Juphal (2,500m)', 'Take a scenic flight over the Himalayan foothills to Juphal. Overnight in a guesthouse.'],
                  ['Day 3 – Trek to Dunai (2,500m)', 'Walk through forests and terraced fields along the Thuli Bheri River.'],
                  ['Day 4 – Trek to Chhepka (3,200m)', 'Enter arid trans-Himalayan terrain with unique landscapes and small Dolpo villages.'],
                  ['Day 5 – Trek to Laken Gompa (3,500m)', 'Reach a Tibetan-style monastery and observe local religious rituals.'],
                  ['Day 6 – Trek to Shey Gompa (4,200m)', 'Climb gradually to Shey Monastery, the spiritual center of Upper Dolpa. Overnight stay.'],
                  ['Day 7 – Explore Shey and surrounding peaks', 'Enjoy panoramic views of Kanjiroba Himal and surrounding mountains.'],
                  ['Day 8 – Trek to Kanjiroba Base Camp (5,330m)', 'Reach the base of Kanjiroba Himal, witness glaciers, and alpine scenery.'],
                  ['Day 9–12 – Return via Laken Gompa and Dunai', 'Retrace your steps through Dolpo villages, interacting with locals and observing traditional lifestyles.'],
                  ['Day 13 – Flight back to Nepalgunj', 'Return by flight, overnight stay, optional sightseeing.'],
                  ['Day 14 – Departure', 'Transfer to airport for onward journey.'],
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
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Upper Dolpa Trek</h2>
              <p className="text-muted-foreground">Share your dates and group size. We will confirm permits, logistics and availability within 24 hours.</p>
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
                <textarea rows={4} className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70" placeholder="Tell us about permits, route preferences, diet, insurance, etc." />
              </div>
              <Button size="lg" className="w-full h-11 rounded-full bg-[#7E6DB0] hover:bg-[#6F60A1] text-white">
                Submit Booking Request
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

export default UpperDolpa;
