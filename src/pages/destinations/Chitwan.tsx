
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Chitwan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Chitwan National Park</h1>
            <p className="text-lg text-gray-600">
              Experience Nepal's first national park, a UNESCO World Heritage site and one of the best wildlife viewing destinations in Asia.
            </p>
          </div>
          
          {/* Wildlife Section */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Incredible Wildlife</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583499871880-de841d1ace2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Bengal Tiger" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bengal Tigers</h3>
                  <p className="text-gray-600">Chitwan is home to the endangered Bengal tiger, with over 120 of these magnificent creatures living in the park.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605515298941-d61889e0fc6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="One-horned Rhinoceros" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">One-horned Rhinoceros</h3>
                  <p className="text-gray-600">Chitwan is renowned for its successful conservation of the greater one-horned rhinoceros.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Asian Elephant" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Asian Elephants</h3>
                  <p className="text-gray-600">Observe these gentle giants in their natural habitat or learn about conservation efforts at the elephant breeding center.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Activities Section */}
          <section className="py-12 bg-gray-50 rounded-xl my-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Safari Experiences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Jeep Safari</h3>
                  <p className="text-gray-600 mb-4">
                    Explore the depths of the jungle in a 4x4 vehicle accompanied by an experienced naturalist guide who can track and spot wildlife.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Duration:</span> 3-4 hours
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Best time:</span> Early morning or late afternoon
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Price:</span> From $45 per person
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Canoe Ride</h3>
                  <p className="text-gray-600 mb-4">
                    Paddle down the Rapti River in a traditional dugout canoe for a peaceful journey with opportunities to spot crocodiles and aquatic birds.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Duration:</span> 1-2 hours
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Best time:</span> Early morning
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Price:</span> From $25 per person
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Jungle Walk</h3>
                  <p className="text-gray-600 mb-4">
                    Trek through the forest on foot with armed guides for an intimate and immersive wildlife experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Duration:</span> 2-3 hours
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Best time:</span> Morning
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Price:</span> From $30 per person
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Elephant Bathing</h3>
                  <p className="text-gray-600 mb-4">
                    Join elephants during their bath time in the river for a playful and memorable experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Duration:</span> 1 hour
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Best time:</span> Midday
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Price:</span> From $15 per person
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Package Options */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Chitwan Safari Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">2-Day Chitwan Adventure</h3>
                  <p className="text-gray-600 mb-4">Experience the best of Chitwan with our most popular package including multiple safari activities and cultural shows.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> 2 days/1 night
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Accommodation, meals, activities, guides
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Activities:</span> Jeep safari, canoe ride, jungle walk, cultural program
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $135 per person
                    </li>
                  </ul>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">3-Day Wildlife Immersion</h3>
                  <p className="text-gray-600 mb-4">Our comprehensive package with extended wildlife viewing opportunities and ample time to explore the park.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> 3 days/2 nights
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Accommodation, meals, activities, guides
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Activities:</span> Multiple jeep safaris, canoe ride, jungle walk, bird watching, cultural program
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $225 per person
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

export default Chitwan;
