import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ImageWithFallback } from '@/components/media/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { fetchAttractions, fetchDestination } from '@/lib/data/destinationApi';
import type { AttractionRow } from '@/lib/data/destinationApi';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Mountain, Wind, CloudLightning, Sunrise, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Chitwan = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';

  // Hero images served from public/Chitwan (slide like Kathmandu)
  const chitwanImages = [
    '/Chitwan/kedar-bhusal-_rHplGon_uU-unsplash.jpg',
    '/Chitwan/meera-pankhania-d1FQMxsPyEo-unsplash.jpg',
    '/Chitwan/shreyashka-maharjan-XWQK-9p53ts-unsplash.jpg',
    // Newly requested image
    '/Chitwan/vince-russell-FXVY6ZIOkhM-unsplash.jpg',
  ].map((p) => `${p}${bust}`);

  const [subtitle, setSubtitle] = useState(
    "Nepal's premier wildlife destination — tigers, rhinos, elephants and pristine jungles."
  );
  const [attractions, setAttractions] = useState<AttractionRow[]>([]);
  const [loading, setLoading] = useState(true);

  // Auto-slide carousel
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [{ data: dest }, { data: atts }] = await Promise.all([
          fetchDestination('chitwan'),
          fetchAttractions('chitwan'),
        ]);
        if (!mounted) return;
        if (dest) setSubtitle(dest.subtitle || subtitle);
        if (atts) setAttractions(atts);
      } catch {}
      finally { if (mounted) setLoading(false); }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero - slide like Kathmandu */}
      <section className="relative h-[70vh] overflow-hidden pt-20">
        {/* Carousel Underlay */}
        <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="h-full">
            {chitwanImages.map((src, idx) => (
              <CarouselItem key={idx} className="h-[70vh] relative">
                <img
                  src={src}
                  alt={`Chitwan gallery image ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-black/30" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Content overlay */}
        <div className="absolute inset-0 z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Chitwan National Park</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="pt-10 md:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section - white cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Mountain className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">100m</span>
              <span className="text-sm text-gray-600">Elevation</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Wind className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">30°C</span>
              <span className="text-sm text-gray-600">Avg. Temperature</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <CloudLightning className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">Jun–Sep</span>
              <span className="text-sm text-gray-600">Monsoon Season</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Sunrise className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">5:45 AM</span>
              <span className="text-sm text-gray-600">Typical Sunrise</span>
            </div>
          </div>

          {/* Interactive Details */}
          <section className="max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Discover Chitwan</h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="history">History & Culture</TabsTrigger>
                <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
                <TabsTrigger value="activities">Safari & Activities</TabsTrigger>
                <TabsTrigger value="tips">Practical Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="prose prose-gray max-w-none mx-auto mt-6">
                <p className="text-gray-700">
                  Experience Nepal's first national park, a UNESCO World Heritage site and one of the best wildlife viewing destinations in Asia.
                </p>
                <p className="text-gray-700 mt-4">
                  Chitwan balances conservation with community—sal forests, riverine wetlands, and Tharu villages where traditions thrive.
                  Mornings bring mist over grasslands and bird calls along the Rapti; evenings glow with sunsets and stories in homestays.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Why Visit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Prime habitat for rhinos, elephants, and rare birdlife</li>
                      <li>River cruises, jeep safaris, and guided jungle walks</li>
                      <li>Authentic Tharu hospitality and village experiences</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">River & Forest Zones</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Rapti River: canoe rides and sunset cruises</li>
                      <li>Core Sal Forest: jeep safari tracks</li>
                      <li>Grasslands: birdwatching and rhino corridors</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Quick Tips</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Best months: Oct–Mar for visibility</li>
                      <li>Go early/late for wildlife activity</li>
                      <li>Respect park rules; keep safe distances</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="prose prose-gray max-w-none mx-auto mt-6">
                <p className="text-gray-700">
                  Chitwan’s cultural heart beats in Tharu communities—stilted homes, basketry, and agricultural cycles tied to the land.
                  Hindu and animist beliefs blend in village shrines, with dances and music marking harvests and festivals along the plains.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">History & Culture</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Tharu heritage: architecture, attire, and community crafts</li>
                      <li>Syncretic traditions across village shrines and river rituals</li>
                      <li>Living knowledge of forests, wildlife, and seasonal farming</li>
                      <li>Conservation stories: park creation and coexistence efforts</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Festivals</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Maghe Sankranti: traditional foods and river rituals</li>
                      <li>Dashain & Tihar: lights, family gatherings, village dances</li>
                      <li>Local fairs featuring Tharu music and stick dances</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Craftsmanship</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Basketry, woodwork, and traditional murals</li>
                      <li>Handmade tools and household crafts</li>
                      <li>Local produce markets and herbal knowledge</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="wildlife" className="prose prose-gray max-w-none mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Big Fauna</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Bengal tiger (rare sightings)</li>
                      <li>One-horned rhinoceros</li>
                      <li>Asian elephant</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Birdlife & Reptiles</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Over 500 bird species</li>
                      <li>Mugger crocodile & gharial</li>
                      <li>Kingfishers and hornbills</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Habitats</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Sal forests and grasslands</li>
                      <li>Riverine floodplains</li>
                      <li>Wetlands along Rapti River</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activities" className="prose prose-gray max-w-none mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Jeep Safari</h3>
                    <p>Explore jungle tracks with an experienced naturalist guide. Best times: early morning or late afternoon.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Canoe Ride</h3>
                    <p>Paddle the Rapti River in a dugout canoe to spot crocodiles and aquatic birds.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="prose prose-gray max-w-none mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">When to Visit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Oct–Mar: pleasant, good wildlife visibility</li>
                      <li>Apr–Jun: hot; early safaris recommended</li>
                      <li>Monsoon: lush but leech-prone trails</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Etiquette</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Keep quiet near animals; follow guide instructions</li>
                      <li>No feeding or approaching wildlife</li>
                      <li>Carry out trash and respect park rules</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Essentials</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Binoculars, insect repellent</li>
                      <li>Light clothing, hat, sunscreen</li>
                      <li>Water and snacks for longer trips</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Top Attractions - styled like Kathmandu */}
          <section className="py-12">
            <div className="flex items-center mb-10">
              <div className="h-0.5 w-10 bg-gray-900 mr-4"></div>
              <h2 className="text-3xl font-bold">Top Attractions</h2>
            </div>
            {loading ? (
              <div className="text-center text-gray-500">Loading attractions...</div>
            ) : attractions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {attractions.map((att) => {
                  const srcs = [att.image_local ? `${att.image_local}${bust}` : '', att.image_remote || ''].filter(Boolean) as string[];
                  return (
                    <div key={att.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                      <div className="h-48 overflow-hidden">
                        <ImageWithFallback 
                          srcs={srcs}
                          alt={att.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <span>{att.name}</span>
                          <MapPin className="w-4 h-4 ml-2 text-gray-500" />
                        </h3>
                        <p className="text-gray-600">{att.description}</p>
                        <Button variant="ghost" size="sm" className="mt-4">
                          Explore
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Jeep Safari Zones',
                    desc: 'Access core jungle tracks with chances to spot rhinos, deer, and elusive tigers.',
                    img: '/Chitwan/kedar-bhusal-_rHplGon_uU-unsplash.jpg',
                  },
                  {
                    name: 'Rapti River Canoe',
                    desc: 'Float past crocodile habitats and river birds on traditional dugout canoes.',
                    img: '/Chitwan/meera-pankhania-d1FQMxsPyEo-unsplash.jpg',
                  },
                  {
                    name: 'Elephant Breeding Center',
                    desc: 'Learn about conservation efforts and the lives of Asian elephants.',
                    img: '/Chitwan/vince-russell-FXVY6ZIOkhM-unsplash.jpg',
                  },
                ].map((att) => (
                  <div key={att.name} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="h-48 overflow-hidden">
                      <img src={`${att.img}${bust}`} alt={att.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 flex items-center">
                        <span>{att.name}</span>
                        <MapPin className="w-4 h-4 ml-2 text-gray-500" />
                      </h3>
                      <p className="text-gray-600">{att.desc}</p>
                      <Button variant="ghost" size="sm" className="mt-4">
                        Explore
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Adventure Activities - descriptive panels */}
          <section className="py-12">
            <div className="flex items-center mb-10">
              <div className="h-0.5 w-10 bg-gray-900 mr-4"></div>
              <h2 className="text-3xl font-bold">Adventure Activities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="h-40 w-full overflow-hidden">
                  <img src={`/Chitwan/kedar-bhusal-_rHplGon_uU-unsplash.jpg${bust}`} alt="Guided Jungle Walk" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Guided Jungle Walk</h3>
                  <p className="text-gray-600 mb-4">
                    Explore sal forests and grasslands on foot with a licensed guide, learning to track wildlife safely.
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-medium">Duration: 3–4 hours</p>
                    <p className="font-medium">Price: From $25</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="h-40 w-full overflow-hidden">
                  <img src={`/Chitwan/meera-pankhania-d1FQMxsPyEo-unsplash.jpg${bust}`} alt="Birdwatching Tour" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Birdwatching Tour</h3>
                  <p className="text-gray-600 mb-4">
                    Target wetland and riverine habitats with binoculars to spot kingfishers, hornbills, and migratory species.
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-medium">Duration: 2–3 hours</p>
                    <p className="font-medium">Price: From $20</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="h-40 w-full overflow-hidden">
                  <img src={`/Chitwan/vince-russell-FXVY6ZIOkhM-unsplash.jpg${bust}`} alt="Rapti Sunset Cruise" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Rapti Sunset Cruise</h3>
                  <p className="text-gray-600 mb-4">
                    Unwind on a gentle boat ride as the sun sets over the river, with chances to see crocodiles and water birds.
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-medium">Duration: 1.5 hours</p>
                    <p className="font-medium">Price: From $18</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-white rounded-lg border border-gray-200">
              <AccordionItem value="safety" className="px-4">
                <AccordionTrigger className="text-left">Is it safe to walk in the jungle?</AccordionTrigger>
                <AccordionContent>
                  Always go with a licensed guide and follow instructions. Keep a safe distance from wildlife.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="besttime" className="px-4">
                <AccordionTrigger className="text-left">When is the best time for wildlife viewing?</AccordionTrigger>
                <AccordionContent>
                  Oct–Mar offers pleasant temperatures and better visibility.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="gear" className="px-4">
                <AccordionTrigger className="text-left">What should I bring for a safari?</AccordionTrigger>
                <AccordionContent>
                  Binoculars, insect repellent, hat, sunscreen, water, and light clothing are recommended.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chitwan;
