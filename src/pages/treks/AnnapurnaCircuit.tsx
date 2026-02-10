import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const AnnapurnaCircuit = () => {
  // Dev cache buster
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const annapurnaImages = [
    '/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg',
    '/Annapurna/neha-maheen-mahfin-_sbkVaT19ko-unsplash.jpg',
    '/Annapurna/sanjay-hona-qAA6INniUNg-unsplash.jpg',
    '/Annapurna/touann-gatouillat-vergos-QFY3Tv5_12M-unsplash.jpg',
  ].map((p) => `${p}${bust}`);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section - auto sliding images */}
        <div className="relative h-[70vh] overflow-hidden">
          {/* Carousel Underlay */}
          <Carousel className="absolute inset-0 z-0" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {annapurnaImages.map((src, idx) => (
                <CarouselItem key={idx} className="h-[70vh] relative">
                  <img
                    src={src}
                    alt={`Annapurna gallery image ${idx + 1}`}
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Annapurna Circuit Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Experience Nepal's incredible diversity on this classic Himalayan journey</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Trek Overview</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The Annapurna Circuit is one of the most diverse and spectacular treks in the world. This 18-day journey takes you through an incredible variety of landscapes, from lush subtropical forests to arid high-altitude deserts, as you circle the magnificent Annapurna range.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  The highlight of the trek is crossing the challenging Thorong La Pass at 5,416 meters, offering panoramic views of the Annapurna and Dhaulagiri ranges. Along the way, you'll experience rich cultural diversity, visiting traditional Hindu and Buddhist villages and witnessing the lives of different ethnic groups.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our expert guides will ensure your safety and comfort throughout this challenging but immensely rewarding adventure.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Cross the mighty Thorong La Pass (5,416m)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Visit the sacred pilgrimage site of Muktinath</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Experience diverse ecosystems and landscapes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Witness incredible mountain panoramas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Immerse yourself in varied cultural experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Relax in natural hot springs at Tatopani</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Trek Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">18 days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Mountain className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Maximum Elevation</p>
                        <p className="font-medium">5,416m (Thorong La)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Difficulty</p>
                        <p className="font-medium">Moderate to Challenging</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Group Size</p>
                        <p className="font-medium">2-10 people</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Start/End Point</p>
                        <p className="font-medium">Kathmandu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Compass className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Best Seasons</p>
                        <p className="font-medium">Mar-May / Sep-Nov</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="font-bold text-2xl mb-2">From $1,800 USD</p>
                    <p className="text-gray-600 text-sm mb-4">per person (min. 2 people)</p>
                    <Link 
                      to="#book-now" 
                      className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar booking section and itinerary as Everest Base Camp page */}
        <section id="book-now" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Your Annapurna Circuit Trek</h2>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
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
                        <option value="3-5">3-5 people</option>
                        <option value="6-10">6-10 people</option>
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
                    className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition"
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

export default AnnapurnaCircuit;
