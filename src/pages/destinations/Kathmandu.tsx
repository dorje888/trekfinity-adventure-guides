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

const Kathmandu = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';

  // Hero images served from public/Kathmandu
  const kathmanduImages = [
    '/Kathmandu/martijn-vonk-FTxTyNog7BY-unsplash.jpg',
    '/Kathmandu/meghraj-neupane-YtEzq-hnv5k-unsplash.jpg', // newly requested image
    '/Kathmandu/tim-van-kempen-mpYKQK3GzSE-unsplash.jpg',
    '/Kathmandu/walter-coppola-pJpGe8cC1Dw-unsplash.jpg',
  ].map((p) => `${p}${bust}`);

  const [subtitle, setSubtitle] = useState(
    'The vibrant heart of Nepal — ancient temples, bustling bazaars, and timeless culture.'
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

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [{ data: dest }, { data: atts }] = await Promise.all([
          fetchDestination('kathmandu'),
          fetchAttractions('kathmandu'),
        ]);
        if (!mounted) return;
        if (dest) setSubtitle(dest.subtitle || subtitle);
        if (atts) setAttractions(atts);
      } catch (e) {
        // silent fallback to defaults
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden pt-20">
        {/* Carousel Underlay */}
        <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="h-full">
            {kathmanduImages.map((src, idx) => (
              <CarouselItem key={idx} className="h-[70vh] relative">
                <img
                  src={src}
                  alt={`Kathmandu gallery image ${idx + 1}`}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kathmandu</h1>
            <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
          </div>
        </div>
      </section>

      <div className="pt-10 md:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section - white cards (like Pokhara) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Mountain className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">1400m</span>
              <span className="text-sm text-gray-600">Elevation</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Wind className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">20°C</span>
              <span className="text-sm text-gray-600">Avg. Temperature</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <CloudLightning className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">Jun–Sep</span>
              <span className="text-sm text-gray-600">Monsoon Season</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Sunrise className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">5:15 AM</span>
              <span className="text-sm text-gray-600">Typical Sunrise</span>
            </div>
          </div>

          {/* Interactive Details */}
          <section className="max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Discover Kathmandu</h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="history">History & Culture</TabsTrigger>
                <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
                <TabsTrigger value="tips">Practical Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="prose prose-gray max-w-none mx-auto mt-6">
                <p className="text-gray-700">
                  Kathmandu, the capital of Nepal, is a mesmerizing blend of ancient heritage and modern vibrance. The city anchors
                  the Kathmandu Valley—home to seven UNESCO World Heritage Sites—where intricately carved temples, royal palaces,
                  stupas, and courtyards reveal centuries of Hindu and Buddhist devotion. From the narrow alleys of Ason Bazaar to
                  the serene ambiance of Swayambhunath and Boudhanath, every neighborhood offers a distinct rhythm and story.
                </p>
                <p className="text-gray-700 mt-4">
                  Beyond the landmarks, Kathmandu is a living museum of Newar craftsmanship and daily rituals—incense at dawn,
                  prayer wheels in motion, and artisans shaping metal, wood, and clay in tucked-away workshops. Cafés and rooftop
                  terraces overlook red-brick skylines, while markets bustle with spices, textiles, and trekking gear. It’s a
                  gateway to the Himalayas and a cultural immersion all at once.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Why Visit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>UNESCO sites within short hops across the valley</li>
                      <li>Rich living traditions, festivals, and artisan quarters</li>
                      <li>Easy access to hikes, mountain flights, and heritage walks</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Neighborhoods</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Thamel: cafés, music, and traveler vibes</li>
                      <li>Patan: museum, courtyards, and artisan lanes</li>
                      <li>Boudha: monastic life and evening kora</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Quick Tips</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Best seasons: Oct–Nov and Mar–May</li>
                      <li>Carry small cash; ATMs near tourist hubs</li>
                      <li>Dress modestly at religious sites</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="prose prose-gray max-w-none mx-auto mt-6">
                <p className="text-gray-700">
                  Historically, Kathmandu thrived as a crossroads of trade and culture along trans-Himalayan routes. Its architecture
                  showcases the famed Newar craftsmanship—wooden windows and brick facades—while its festivals like Indra Jatra,
                  Dashain, and Tihar immerse visitors in living traditions. Street-side momos, sweet lassi, and aromatic
                  Nepali tea accompany your walks through bustling markets and tranquil monastic courtyards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">History & Culture</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Valley kingdoms shaped by Newar dynasties and artisan guilds</li>
                      <li>Syncretic Hindu–Buddhist traditions in temples and stupas</li>
                      <li>Living heritage: chariot festivals, masked dances, and daily puja</li>
                      <li>Craft lineages: woodcarving, metal repoussé, thangka painting</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Festivals</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Indra Jatra: chariot processions and masked dances</li>
                      <li>Dashain & Tihar: family gatherings and light displays</li>
                      <li>Losar (Tibetan New Year) around Boudhanath</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Craftsmanship</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Newar woodcarving on windows and doors</li>
                      <li>Metalwork and thangka painting in old quarters</li>
                      <li>Handmade paper and traditional pottery</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cuisine" className="prose prose-gray max-w-none mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Must-Try</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Momos (steamed or fried dumplings)</li>
                      <li>Dal Bhat (lentils, rice, seasonal curries)</li>
                      <li>Chatamari & Newari Khaja Set</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Coffee & Tea</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Locally roasted coffee in Thamel and Patan</li>
                      <li>Masala tea and butter tea near Boudha</li>
                      <li>Lassi and seasonal juices in bazaars</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Dining Tips</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ask for spice levels; try vegetarian options</li>
                      <li>Bottled/filtered water recommended</li>
                      <li>Support family-run kitchens for authentic tastes</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="prose prose-gray max-w-none mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">When to Visit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Best seasons: Oct–Nov and Mar–May</li>
                      <li>Winter: clear days, chilly nights</li>
                      <li>Monsoon (Jun–Sep): fewer crowds, afternoon showers</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Respect & Etiquette</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dress modestly at temples; remove shoes when requested</li>
                      <li>Seek permission before photographing people/rituals</li>
                      <li>Use the right-hand for offerings and receiving items</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Money & Safety</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Carry small cash; ATMs are common in tourist areas</li>
                      <li>Use registered taxis or rides; agree on fares</li>
                      <li>Mask in dusty areas; carry sanitizer and sunscreen</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Top Attractions - styled like Pokhara */}
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
                    name: 'Kathmandu Durbar Square',
                    desc: 'Historic royal plaza with palaces, temples, and intricate Newar architecture.',
                    img: '/Kathmandu/martijn-vonk-FTxTyNog7BY-unsplash.jpg',
                  },
                  {
                    name: 'Boudhanath Stupa',
                    desc: 'One of the largest stupas in the world—circumambulate with pilgrims and enjoy rooftop cafes.',
                    img: '/Kathmandu/walter-coppola-pJpGe8cC1Dw-unsplash.jpg',
                  },
                  {
                    name: 'Swayambhunath (Monkey Temple)',
                    desc: 'Hilltop stupa with sweeping city views, prayer flags, and resident monkeys.',
                    img: '/Kathmandu/tim-van-kempen-mpYKQK3GzSE-unsplash.jpg',
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

          {/* Adventure Activities - descriptive panels like Pokhara */}
          <section className="py-12">
            <div className="flex items-center mb-10">
              <div className="h-0.5 w-10 bg-gray-900 mr-4"></div>
              <h2 className="text-3xl font-bold">Adventure Activities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Everest Mountain Flight</h3>
                <p className="text-gray-600 mb-4">
                  Take an early-morning scenic flight from Kathmandu for sweeping views of the Himalayas, including Everest and surrounding peaks.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: 1 hour</p>
                  <p className="font-medium">Price: From $180</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Shivapuri Day Hike</h3>
                <p className="text-gray-600 mb-4">
                  Escape the city for a forested hike in Shivapuri National Park with valley views, monastery stops, and quiet nature trails.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: 5–7 hours</p>
                  <p className="font-medium">Price: From $40</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Bhaktapur & Patan Heritage Walk</h3>
                <p className="text-gray-600 mb-4">
                  Discover artisan quarters, temples, and royal squares on a guided heritage walk through the ancient Newar cities of Bhaktapur and Patan.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: Half day</p>
                  <p className="font-medium">Price: From $35</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Practical Information */}
          <section className="py-12 bg-gray-50 rounded-xl my-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Travel Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Getting Around</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Taxis:</span> Widely available and affordable, negotiate fares in advance
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Buses:</span> Local buses connect major attractions but can be crowded
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Walking:</span> Many attractions in central Kathmandu are walkable
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Oct-Nov:</span> Peak season with clear skies and mild temperatures
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Mar-May:</span> Spring season with blooming rhododendrons
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Dec-Feb:</span> Cold but clear days with fewer tourists
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Tour Options */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Kathmandu With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kathmandu Valley Full-Day Tour</h3>
                  <p className="text-gray-600 mb-4">Experience the cultural and historical highlights of Kathmandu Valley in one day with our expert local guide.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> 8 hours
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Transportation, guide, entrance fees
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $75 per person
                    </li>
                  </ul>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cultural Heritage Walking Tour</h3>
                  <p className="text-gray-600 mb-4">Discover hidden gems and fascinating stories of Kathmandu's old town districts with our knowledgeable local guide.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> 4 hours
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Guide, entrance fees, snacks
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $45 per person
                    </li>
                  </ul>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="bg-white rounded-lg border border-gray-200">
              <AccordionItem value="walkable" className="px-4">
                <AccordionTrigger className="text-left">Is Kathmandu walkable?</AccordionTrigger>
                <AccordionContent>
                  Central areas like Thamel, Durbar Marg, and Patan are very walkable. For longer hops, use taxis or ride-hailing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="dress" className="px-4">
                <AccordionTrigger className="text-left">What should I wear at temples?</AccordionTrigger>
                <AccordionContent>
                  Dress modestly, cover shoulders/knees, and remove shoes where required. Photography may be restricted inside.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="transport" className="px-4">
                <AccordionTrigger className="text-left">How do I get around affordably?</AccordionTrigger>
                <AccordionContent>
                  Taxis are convenient—negotiate or request a meter. Public buses and microbuses are cheaper but crowded.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="health" className="px-4">
                <AccordionTrigger className="text-left">Any health tips for first-time visitors?</AccordionTrigger>
                <AccordionContent>
                  Drink filtered water, carry a mask for dust in traffic, and use sunscreen during midday walks.
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

export default Kathmandu;
