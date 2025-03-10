
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pokhara = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pokhara</h1>
            <p className="text-lg text-gray-600">
              Discover Nepal's stunning lakeside city, the gateway to the Annapurna range with breathtaking mountain views and adventure activities.
            </p>
          </div>
          
          {/* Main Attractions */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Top Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571722288716-5566d3d35379?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Phewa Lake" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Phewa Lake</h3>
                  <p className="text-gray-600">The second largest lake in Nepal offering stunning reflections of the Annapurna range and boating opportunities.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1625497861033-e39acb28b3d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="World Peace Pagoda" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">World Peace Pagoda</h3>
                  <p className="text-gray-600">A stunning white stupa offering panoramic views of the mountains, lake, and the city of Pokhara.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605152410734-c8128a997fa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Davis Falls" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Davis Falls</h3>
                  <p className="text-gray-600">A unique waterfall that flows directly into a natural tunnel, with an interesting backstory and mythology.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Adventure Activities */}
          <section className="py-12 bg-gray-50 rounded-xl my-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Adventure Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Paragliding</h3>
                  <p className="text-gray-600 mb-4">
                    Soar above Pokhara with stunning views of the Annapurna range and Phewa Lake. Pokhara is one of the world's top paragliding destinations.
                  </p>
                  <p className="font-medium">Duration: 30 min - 1 hour</p>
                  <p className="font-medium">Price: From $80</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Zipline</h3>
                  <p className="text-gray-600 mb-4">
                    Experience one of the longest ziplines in the world with a 1.8 km descent offering stunning mountain views.
                  </p>
                  <p className="font-medium">Duration: 2 hours total</p>
                  <p className="font-medium">Price: From $70</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Mountain Biking</h3>
                  <p className="text-gray-600 mb-4">
                    Explore the hills and villages surrounding Pokhara on a guided mountain bike tour with various difficulty levels.
                  </p>
                  <p className="font-medium">Duration: Half day to full day</p>
                  <p className="font-medium">Price: From $40</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Tour Options */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Pokhara With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pokhara Full-Day Sightseeing</h3>
                  <p className="text-gray-600 mb-4">See all the major highlights of Pokhara in one day with our comfortable private tour and knowledgeable guide.</p>
                  <ul className="space-y-2 mb-4">
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
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sunrise at Sarangkot</h3>
                  <p className="text-gray-600 mb-4">Witness a breathtaking Himalayan sunrise from the famous viewpoint of Sarangkot with optional breakfast.</p>
                  <ul className="space-y-2 mb-4">
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

export default Pokhara;
