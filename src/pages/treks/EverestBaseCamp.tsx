
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const EverestBaseCamp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
            alt="Everest Base Camp Trek" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Everest Base Camp Trek</h1>
              <p className="text-xl md:text-2xl mb-8">The ultimate Himalayan adventure to the foot of the world's highest peak</p>
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
                  The Everest Base Camp trek is one of the most popular and rewarding trekking journeys in the world. This 14-day adventure takes you through breathtaking landscapes, traditional Sherpa villages, and Buddhist monasteries, all while being surrounded by some of the highest mountains on earth.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Beginning with a thrilling flight to Lukla, you'll ascend through the Khumbu Valley, acclimatizing along the way to reach the legendary Everest Base Camp at 5,364 meters. Along your journey, you'll witness spectacular views of Mt. Everest, Lhotse, Nuptse, Ama Dablam, and many other Himalayan giants.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our experienced guides, all local Sherpas with intimate knowledge of the region, will ensure your safety and share insights about the local culture, geography, and mountaineering history.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Stand at the foot of Mount Everest (8,848m)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Summit Kala Patthar (5,545m) for panoramic views</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Explore the historic Tengboche Monastery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Experience authentic Sherpa culture and hospitality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Visit Namche Bazaar, the gateway to Everest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Trek through rhododendron forests and alpine meadows</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="bg-white rounded-xl p-6 shadow-subtle mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Trek Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">14 days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Mountain className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Maximum Elevation</p>
                        <p className="font-medium">5,364m (Base Camp)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Difficulty</p>
                        <p className="font-medium">Challenging</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Group Size</p>
                        <p className="font-medium">2-12 people</p>
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
                    <p className="font-bold text-2xl mb-2">From $1,600 USD</p>
                    <p className="text-gray-600 text-sm mb-4">per person (min. 2 people)</p>
                    <Link 
                      to="#book-now" 
                      className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium"
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
        
        {/* Itinerary Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Trek Itinerary</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  {/* Day 1 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                      <span className="font-bold text-mountain-700">1</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">Arrival in Kathmandu (1,400m)</h3>
                    <p className="text-gray-600 mb-2">Welcome to Nepal! Our representative will greet you at the airport and transfer you to your hotel. We'll have a trek briefing in the evening.</p>
                  </div>
                  
                  {/* Day 2 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                      <span className="font-bold text-mountain-700">2</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">Fly to Lukla (2,860m), Trek to Phakding (2,610m)</h3>
                    <p className="text-gray-600 mb-2">After an early morning flight to Lukla, we'll begin our trek by descending to the village of Phakding along the Dudh Koshi River. 3-4 hours walking.</p>
                  </div>
                  
                  {/* Day 3 */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                      <span className="font-bold text-mountain-700">3</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">Trek to Namche Bazaar (3,440m)</h3>
                    <p className="text-gray-600 mb-2">We cross several suspension bridges and begin the steep climb to Namche Bazaar, the commercial center of the Khumbu region. 5-6 hours walking.</p>
                  </div>
                  
                  {/* More days - just showing a few for example */}
                  <div className="relative pl-14">
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center z-10">
                      <span className="font-bold text-mountain-700">...</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">Continuing the Journey</h3>
                    <p className="text-gray-600 mb-2">The trek continues through beautiful landscapes, Sherpa villages, and increasing altitudes as we make our way to Everest Base Camp.</p>
                    <Link to="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                      View full itinerary
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Section */}
        <section id="book-now" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Your Everest Base Camp Trek</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="trekDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Trek Date</label>
                      <input 
                        type="date" 
                        id="trekDate" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-1">Group Size</label>
                      <select 
                        id="groupSize" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements or Questions</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="Tell us about any special requirements or questions you may have..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-premium"
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

export default EverestBaseCamp;
