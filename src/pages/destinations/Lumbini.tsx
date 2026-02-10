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

const Lumbini = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';

  // Hero images served from public/Lumbini
  const lumbiniImages = [
    '/Lumbini/ashok-acharya-aNU8MnzWhKo-unsplash.jpg', // requested image
    '/Lumbini/arnav-adhikari-85E5MXeS-VY-unsplash.jpg',
    '/Lumbini/meghraj-neupane-htUxKYZiDXM-unsplash.jpg',
    '/Lumbini/ashok-acharya-fx_-_0XJfFQ-unsplash.jpg',
  ].map((p) => `${p}${bust}`);

  const [subtitle, setSubtitle] = useState(
    'The sacred birthplace of Lord Buddha — serenity, history, and devotion.'
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
          fetchDestination('lumbini'),
          fetchAttractions('lumbini'),
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
      
      {/* Hero - auto sliding images */}
      <section className="relative h-[70vh] overflow-hidden pt-20">
        {/* Carousel Underlay */}
        <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="h-full">
            {lumbiniImages.map((src, idx) => (
              <CarouselItem key={idx} className="h-[70vh] relative">
                <img
                  src={src}
                  alt={`Lumbini gallery image ${idx + 1}`}
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Lumbini</h1>
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
              <span className="text-2xl font-bold">150m</span>
              <span className="text-sm text-gray-600">Elevation</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Wind className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">28°C</span>
              <span className="text-sm text-gray-600">Avg. Temperature</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <CloudLightning className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">Jun–Sep</span>
              <span className="text-sm text-gray-600">Monsoon Season</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center">
              <Sunrise className="h-8 w-8 text-gray-700 mb-3" />
              <span className="text-2xl font-bold">5:30 AM</span>
              <span className="text-sm text-gray-600">Typical Sunrise</span>
            </div>
          </div>

          {/* Interactive Details */}
          <section className="max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Discover Lumbini</h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="history">History & Culture</TabsTrigger>
                <TabsTrigger value="etiquette">Etiquette</TabsTrigger>
                <TabsTrigger value="tips">Practical Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="prose prose-gray max-w-none mx-auto mt-6">
                <p className="text-gray-700">
                  Lumbini, revered as the birthplace of Siddhartha Gautama—the Buddha—is a serene pilgrimage destination in Nepal’s
                  Rupandehi district. Centered around the sacred Maya Devi Temple and the marker stone, the archaeological zone
                  preserves ancient ruins, monasteries, and tranquil gardens. The Ashoka Pillar, erected in 249 BCE, remains a
                  defining testament to the site’s historical authenticity and spiritual significance.
                </p>
                <p className="text-gray-700">
                  Beyond the core sacred area, the International Monastic Zone showcases Buddhist traditions from around the world,
                  with monasteries and stupas built by different countries. Pathways shaded by trees and reflective ponds invite
                  slow, contemplative walks—perfect for meditation and quiet observation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Why Visit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>UNESCO-recognized sacred birthplace of the Buddha</li>
                      <li>Global monastic zone with diverse Buddhist architecture</li>
                      <li>Peaceful paths ideal for reflection and meditation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Sacred Areas</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Maya Devi Temple and Marker Stone</li>
                      <li>Ashoka Pillar and Puskarini pond</li>
                      <li>Archaeological walkways and gardens</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Quick Tips</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Best seasons: Oct–Nov and Feb–Apr</li>
                      <li>Cycles/rickshaws help cover wide zones</li>
                      <li>Respect quiet areas and signage</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="prose prose-gray max-w-none mx-auto mt-6">
                <p className="text-gray-700">
                  Lumbini’s history spans ancient pilgrimage, Ashokan patronage, and modern conservation. The site honors the Buddha’s
                  birth story while welcoming global Buddhist traditions to the monastic zone. Rituals, chanting, and quiet
                  contemplation shape daily rhythms around the sacred core.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">History & Culture</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ashoka’s 249 BCE pillar confirms the birthplace</li>
                      <li>Sacred archaeology: Maya Devi precincts and ruins</li>
                      <li>Global monasteries reflecting Theravada, Mahayana, Vajrayana</li>
                      <li>Daily devotion: incense, prayer flags, and chanting</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Festivals</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Buddha Jayanti: processions, prayers, and lamps</li>
                      <li>Losar (Tibetan New Year) with monastic ceremonies</li>
                      <li>Local observances and meditation retreats year-round</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Craftsmanship</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Stupa design, murals, and sculpture in monasteries</li>
                      <li>Prayer wheels, flags, and artisanal offerings</li>
                      <li>Handmade souvenirs from local communities</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="etiquette" className="prose prose-gray max-w-none mx-auto mt-6">
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Dress modestly and speak softly within sacred areas</li>
                  <li>Photography may be restricted in certain inner sanctums</li>
                  <li>Remove shoes where required; follow posted guidelines</li>
                </ul>
              </TabsContent>

              <TabsContent value="tips" className="prose prose-gray max-w-none mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">When to Visit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Best seasons: Oct–Nov and Feb–Apr</li>
                      <li>Winter: mild days, cooler nights</li>
                      <li>Monsoon (Jun–Sep): greener landscapes, afternoon showers</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Getting Around</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Cycle rentals for the monastic zone</li>
                      <li>Electric rickshaws available</li>
                      <li>Walkways connect key sites</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Essentials</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Carry water and sun protection</li>
                      <li>Respect quiet zones for meditation</li>
                      <li>Cash recommended for small vendors</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Top Attractions - styled like Pokhara/Kathmandu */}
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
                    name: 'Maya Devi Temple',
                    desc: 'The sacred heart of Lumbini with the marker stone and archaeological remains.',
                    img: '/Lumbini/ashok-acharya-aNU8MnzWhKo-unsplash.jpg',
                  },
                  {
                    name: 'Ashoka Pillar & Puskarini',
                    desc: 'Historic pillar and sacred pond set within tranquil gardens.',
                    img: '/Lumbini/ashok-acharya-fx_-_0XJfFQ-unsplash.jpg',
                  },
                  {
                    name: 'International Monastic Zone',
                    desc: 'Monasteries from around the world representing diverse Buddhist traditions.',
                    img: '/Lumbini/meghraj-neupane-htUxKYZiDXM-unsplash.jpg',
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

          {/* Adventure Activities - descriptive panels like Kathmandu */}
          <section className="py-12">
            <div className="flex items-center mb-10">
              <div className="h-0.5 w-10 bg-gray-900 mr-4"></div>
              <h2 className="text-3xl font-bold">Adventure Activities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Cycling the Monastic Zone</h3>
                <p className="text-gray-600 mb-4">
                  Rent a cycle and explore international monasteries along shaded lanes and tranquil canals.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: 2–3 hours</p>
                  <p className="font-medium">Price: From $8 (rental)</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Guided Heritage Walk</h3>
                <p className="text-gray-600 mb-4">
                  Join a local guide to learn the history of Maya Devi precincts, Ashoka Pillar, and nearby archaeological sites.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: 2 hours</p>
                  <p className="font-medium">Price: From $12</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Sunset Canoe by the Canal</h3>
                <p className="text-gray-600 mb-4">
                  A peaceful paddle at dusk along the canal with reflections of stupas and birds settling for the evening.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium">Duration: 1–1.5 hours</p>
                  <p className="font-medium">Price: From $10</p>
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
                      <span className="font-medium mr-2">Cycles:</span> Rent bicycles to explore the expansive monastic zone
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Rickshaws:</span> Electric rickshaws for comfortable transfers
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Walking:</span> Many sacred sites are connected by shaded paths
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Oct–Nov:</span> Clear skies and pleasant temperatures
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Feb–Apr:</span> Mild weather ideal for long walks
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Monsoon:</span> Green landscapes with afternoon showers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tour Options */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Lumbini With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sacred Lumbini Half-Day Tour</h3>
                  <p className="text-gray-600 mb-4">Visit Maya Devi Temple, Ashoka Pillar, and key sites with a knowledgeable local guide.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> 4 hours
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Guide, entrance fees
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $35 per person
                    </li>
                  </ul>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">International Monasteries Cycling Tour</h3>
                  <p className="text-gray-600 mb-4">Cycle through the monastic zone, visiting diverse monasteries and tranquil canals.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> 3 hours
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Cycle rental, guide
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $25 per person
                    </li>
                  </ul>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
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
              <AccordionItem value="etiquette" className="px-4">
                <AccordionTrigger className="text-left">Any etiquette for sacred areas?</AccordionTrigger>
                <AccordionContent>
                  Dress modestly, remain quiet, and follow posted guidelines. Remove shoes in designated areas and be mindful of photography rules.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="transport" className="px-4">
                <AccordionTrigger className="text-left">How do I get around?</AccordionTrigger>
                <AccordionContent>
                  Rent bicycles, use electric rickshaws, or walk through the well-marked paths within the monastic zone.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="besttime" className="px-4">
                <AccordionTrigger className="text-left">Best time to visit?</AccordionTrigger>
                <AccordionContent>
                  Oct–Nov and Feb–Apr offer pleasant weather and clearer skies.
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

export default Lumbini;
