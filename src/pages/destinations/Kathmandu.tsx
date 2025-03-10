
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Kathmandu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kathmandu</h1>
            <p className="text-lg text-gray-600">
              Explore the vibrant capital city of Nepal, a cultural hub with ancient temples, bustling markets, and rich history.
            </p>
          </div>
          
          {/* Main Attractions */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Top Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565073624497-7e651f791a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pashupatinath Temple" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pashupatinath Temple</h3>
                  <p className="text-gray-600">Sacred Hindu temple complex and UNESCO World Heritage site on the banks of the Bagmati River.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580181977189-3a31c4a3b1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Boudhanath Stupa" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Boudhanath Stupa</h3>
                  <p className="text-gray-600">One of the largest stupas in the world and a center of Tibetan Buddhism in Nepal.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606466133939-91bce87e9ab1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Durbar Square" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kathmandu Durbar Square</h3>
                  <p className="text-gray-600">Historic heart of the old town featuring intricate woodcarvings, pagoda temples, and royal palaces.</p>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kathmandu;
