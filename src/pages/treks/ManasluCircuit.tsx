
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManasluCircuit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
            alt="Manaslu Circuit Trek" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Manaslu Circuit Trek</h1>
              <p className="text-xl md:text-2xl mb-8">Journey around the eighth highest mountain in the world</p>
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
                  The Manaslu Circuit Trek is a remote and rewarding adventure that circles the world's eighth highest mountain, Mt. Manaslu (8,163m). This 16-day journey offers spectacular landscapes, biological diversity, and culturally rich experiences away from the more crowded trekking routes.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  The trek passes through subtropical foothills, ancient forests, and high-altitude landscapes, crossing the challenging Larkya La Pass (5,106m) with stunning views of the Himalayan range. Along the way, you'll experience the unique blend of Hindu and Tibetan-influenced cultures and visit traditional villages largely untouched by modern tourism.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  This restricted area trek requires special permits, and our experienced guides will handle all necessary arrangements while ensuring your safety and comfort throughout this challenging but extraordinarily rewarding journey.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Cross the challenging Larkya La Pass (5,106m)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Experience authentic Tibetan-influenced cultures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Trek through remote villages and monasteries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Enjoy panoramic views of Manaslu and other peaks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Visit ancient Buddhist monasteries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-mountain-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mountain-700"></div>
                    </div>
                    <span className="text-gray-700">Trek through diverse ecosystems and landscapes</span>
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
                        <p className="font-medium">16 days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-mountain-100 flex items-center justify-center">
                        <Mountain className="h-5 w-5 text-mountain-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Maximum Elevation</p>
                        <p className="font-medium">5,106m (Larkya La)</p>
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
                        <p className="font-medium">2-8 people</p>
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
                    <p className="font-bold text-2xl mb-2">From $1,950 USD</p>
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
        
        {/* Similar booking section as previous pages */}
        <section id="book-now" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Your Manaslu Circuit Trek</h2>
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

export default ManasluCircuit;
