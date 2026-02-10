import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Navigation, Mountain, Wind, CloudLightning, Sunrise, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/media/ImageWithFallback';
import { fetchAttractions, fetchDestination } from '@/lib/data/destinationApi';
import type { AttractionRow } from '@/lib/data/destinationApi';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const Pokhara = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  // const pokharaHeroSrc = `/Pokhara/kaushal-subedi-zRWq-7SWVSU-unsplash.jpg${bust}`;

  const [subtitle, setSubtitle] = useState(
    "Discover Nepal's stunning lakeside city, nestled beneath the majestic Annapurna range with breathtaking views and futuristic adventures."
  );
  const [attractions, setAttractions] = useState<AttractionRow[]>([]);
  const [loading, setLoading] = useState(true);

  // Hero images served from public/Pokhara (slide like Kathmandu)
  const [pokharaImages, setPokharaImages] = useState<string[]>([
    '/Pokhara/meera-pankhania-7cENZhgyf7c-unsplash.jpg',
    '/Pokhara/kaushal-subedi-zRWq-7SWVSU-unsplash.jpg',
    '/Pokhara/martin-skrivanek-fdvv0CiL3ck-unsplash.jpg',
    '/Pokhara/sashi-shrestha-EiLQZWoxTi8-unsplash.jpg',
    '/Pokhara/raimond-klavins-hV5oC-_0TqE-unsplash.jpg',
  ].map((p) => `${p}${bust}`));

  // Auto-slide carousel
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [{ data: dest }, { data: atts }] = await Promise.all([
          fetchDestination('pokhara'),
          fetchAttractions('pokhara'),
        ]);
        if (!mounted) return;
        if (dest) setSubtitle(dest.subtitle || subtitle);
        if (atts) {
          setAttractions(atts);
          // Augment hero slider with any local images stored under /Pokhara from attractions
          const extraPokharaImages = atts
            .map((a) => a.image_local)
            .filter((p): p is string => Boolean(p) && p.startsWith('/Pokhara/'))
            .map((p) => `${p}${bust}`);
          if (extraPokharaImages.length) {
            setPokharaImages((prev) => Array.from(new Set([...prev, ...extraPokharaImages])));
          }
        }
      } catch (e) {
        // fallback silently
      } finally {
        if (mounted) setLoading(false);
      }
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
            {pokharaImages.map((src, idx) => (
              <CarouselItem key={idx} className="h-[70vh] relative">
                <img
                  src={src}
                  alt={`Pokhara gallery image ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-black/30" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Content overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <div className="inline-block p-2 px-4 rounded-full mb-6 bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-white flex items-center">
                <Navigation className="w-4 h-4 mr-2" />
                Gateway to the Himalayas
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pokhara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
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
              <span className="text-2xl font-bold">827m</span>
              <span className="text-sm text-gray-600">Elevation</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Wind className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">24°C</span>
              <span className="text-sm text-gray-600">Avg. Temperature</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <CloudLightning className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">Jun-Sep</span>
              <span className="text-sm text-gray-600">Monsoon Season</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Sunrise className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">5:45 AM</span>
              <span className="text-sm text-gray-600">Sunrise at Sarangkot</span>
            </div>
          </div>
        
          {/* Discover Pokhara (moved up) */}
          <section className="max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Discover Pokhara</h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="history">History & Culture</TabsTrigger>
                <TabsTrigger value="adventure">Adventure</TabsTrigger>
                <TabsTrigger value="tips">Practical Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="prose prose-gray max-w-none mx-auto mt-6">
                <p className="text-gray-700">
                  Pokhara, Nepal’s lakeside gem, sits beneath the Annapurna range with serene waters, mountain vistas, and a thriving adventure scene.
                  From Phewa Lake and the Peace Pagoda to caves and viewpoints, it’s the ideal base for trekking and outdoor exploration.
                </p>
                <p className="text-gray-700 mt-4">
                  Life in Pokhara moves to a lakeside rhythm—boats drifting across Phewa, paraglider wings tracing the sky, and cafés lining
                  quiet promenades. Villages in the surrounding hills keep Gurung and Magar traditions alive, while the city blends
                  trekking culture with local craft, music, and food.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Why Visit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Iconic lakeside views with Himalaya backdrops</li>
                      <li>World-class adventure hub: paragliding, zipline, trekking</li>
                      <li>Relaxed vibe with easy day trips and viewpoints</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Neighborhoods</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Lakeside: cafés, rentals, sunset walks</li>
                      <li>Sarangkot: sunrise ridge and paragliding takeoff</li>
                      <li>Old Bazaar: temples, markets, local life</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Quick Tips</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Best seasons: Oct–Nov and Mar–May</li>
                      <li>Carry cash for small boats and stalls</li>
                      <li>Sun protection for midday lakeside outings</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="prose prose-gray max-w-none mx-auto mt-6">
                <p className="text-gray-700">
                  Pokhara’s cultural tapestry is shaped by Gurung and Magar communities in the hills, lakeside rituals, and a blend of
                  Hindu and Buddhist traditions. As a historic trading stop and modern trekking hub, the city bridges village heritage
                  with an outdoor lifestyle—shrines by the water, market lanes in the Old Bazaar, and nightly strolls along Lakeside.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">History & Culture</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Gurung and Magar heritage—language, dress, and village festivals</li>
                      <li>Syncretic Hindu–Buddhist practices at lakeside shrines and hilltop stupas</li>
                      <li>Living traditions around harvests, boat rituals, and community fairs</li>
                      <li>Trading roots linking the Old Bazaar with surrounding valleys</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Festivals</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dashain & Tihar: lights on the lakeside, family gatherings</li>
                      <li>Maghe Sankranti: river dips and seasonal foods</li>
                      <li>Local fairs: boat races and cultural shows by Phewa</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Craftsmanship</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Weaving and woodwork from nearby villages</li>
                      <li>Handmade souvenirs, instruments, and artisanal foods</li>
                      <li>Local produce markets and tea houses with regional flavors</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="adventure" className="prose prose-gray max-w-none mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Paragliding</h3>
                    <p>Soar above the lake with Annapurna views. Best midday winds; tandem flights available.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Zipline</h3>
                    <p>High-speed descent with panoramic mountain scenery; suitable for most ages.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Boating & Kayak</h3>
                    <p>Rent boats on Phewa, paddle to the temple, or take guided kayak sessions.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="prose prose-gray max-w-none mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">When to Visit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Oct–Nov: best skies and temps</li>
                      <li>Mar–May: pleasant, flowering trails</li>
                      <li>Monsoon: lush views, afternoon showers</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Getting Around</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Taxis and ride-hailing in Lakeside</li>
                      <li>Boats for lake crossings</li>
                      <li>Cycle rentals on flat routes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Essentials</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Sunscreen, hat, light layers</li>
                      <li>Water and snacks for viewpoints</li>
                      <li>Cash for small cafes and rentals</li>
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
                  const srcs = [
                    att.image_local ? `${att.image_local}${bust}` : '',
                    att.image_remote || '',
                  ].filter(Boolean) as string[];
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
                    name: 'Phewa Lake',
                    desc: 'Iconic lakeside with boating to Tal Barahi Temple and Annapurna reflections.',
                    img: '/Pokhara/meera-pankhania-7cENZhgyf7c-unsplash.jpg',
                  },
                  {
                    name: 'World Peace Pagoda',
                    desc: 'Hilltop stupa offering panoramic views over Pokhara and Phewa Lake.',
                    img: '/Pokhara/raimond-klavins-hV5oC-_0TqE-unsplash.jpg',
                  },
                  {
                    name: 'Sarangkot Sunrise',
                    desc: 'Famous viewpoint for sunrise over Annapurna and Machhapuchhre.',
                    img: '/Pokhara/sashi-shrestha-EiLQZWoxTi8-unsplash.jpg',
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
          
          {/* Adventure Activities - simple white panels */}
          <section className="py-12">
            <div className="flex items-center mb-10">
              <div className="h-0.5 w-10 bg-gray-900 mr-4"></div>
              <h2 className="text-3xl font-bold">Adventure Activities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Paragliding</h3>
                <p className="text-gray-600 mb-4">
                  Soar above Pokhara with stunning views of the Annapurna range and Phewa Lake. Pokhara is one of the world's top paragliding destinations.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: 30 min - 1 hour</p>
                  <p className="font-medium">Price: From $80</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Zipline</h3>
                <p className="text-gray-600 mb-4">
                  Experience one of the longest ziplines in the world with a 1.8 km descent offering stunning mountain views.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: 2 hours total</p>
                  <p className="font-medium">Price: From $70</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Mountain Biking</h3>
                <p className="text-gray-600 mb-4">
                  Explore the hills and villages surrounding Pokhara on a guided mountain bike tour with various difficulty levels.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: Half day to full day</p>
                  <p className="font-medium">Price: From $40</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Tour Options - standard white cards */}
          <section className="py-12">
            <div className="flex items-center mb-10">
              <div className="h-0.5 w-10 bg-gray-900 mr-4"></div>
              <h2 className="text-3xl font-bold">Explore Pokhara With Us</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pokhara Full-Day Sightseeing</h3>
                  <p className="text-gray-600 mb-4">See all the major highlights of Pokhara in one day with our comfortable private tour and knowledgeable guide.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> 7 hours
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Transportation, guide, entrance fees
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $65 per person
                    </li>
                  </ul>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors w-full">
                    Book Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sunrise at Sarangkot</h3>
                  <p className="text-gray-600 mb-4">Witness a breathtaking Himalayan sunrise from the famous viewpoint of Sarangkot with optional breakfast.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> 4 hours
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Transportation, guide
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $30 per person
                    </li>
                  </ul>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors w-full">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-white rounded-lg border border-gray-200">
              <AccordionItem value="paraglide" className="px-4">
                <AccordionTrigger className="text-left">Is paragliding beginner-friendly?</AccordionTrigger>
                <AccordionContent>
                  Tandem flights with licensed pilots are suitable for beginners; book midday slots for stable winds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sunrise" className="px-4">
                <AccordionTrigger className="text-left">Where’s the best sunrise?</AccordionTrigger>
                <AccordionContent>
                  Sarangkot offers the classic Himalayan sunrise over Annapurna and Machhapuchhre.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="transport" className="px-4">
                <AccordionTrigger className="text-left">How do I get around Pokhara?</AccordionTrigger>
                <AccordionContent>
                  Use taxis/ride-hailing in Lakeside, rent cycles, or take boats across Phewa for short crossings.
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

export default Pokhara;
