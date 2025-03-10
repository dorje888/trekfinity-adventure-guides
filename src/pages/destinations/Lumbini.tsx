
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Lumbini = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Lumbini</h1>
            <p className="text-lg text-gray-600">
              Visit the sacred birthplace of Lord Buddha, a UNESCO World Heritage site and one of the most important pilgrimage destinations for Buddhists worldwide.
            </p>
          </div>
          
          {/* Sacred Sites */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Sacred Sites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Maya Devi Temple" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Maya Devi Temple</h3>
                  <p className="text-gray-600">The exact birthplace of Buddha, marked by the Ashoka Pillar and ancient remains. The temple houses the marker stone that identifies the precise spot where Buddha was born.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550679560-b8a0fe8c5608?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sacred Garden" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sacred Garden</h3>
                  <p className="text-gray-600">The tranquil garden surrounding the Maya Devi Temple, featuring the sacred Bodhi tree, prayer flags, and a serene atmosphere for meditation.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1505599950312-56a9b54e1f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ashoka Pillar" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ashoka Pillar</h3>
                  <p className="text-gray-600">Erected by Emperor Ashoka in 249 BCE to mark Buddha's birthplace, this is one of the oldest and most important historical markers in Nepal.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Monastic Zone */}
          <section className="py-12 bg-gray-50 rounded-xl my-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">International Monastic Zone</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
                Explore over 25 beautifully designed monasteries and temples built by different countries and Buddhist traditions, each with unique architectural styles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Great Drigung Kagyud Lotus Stupa (Germany)</h3>
                  <p className="text-gray-600">
                    An impressive white stupa representing the German Buddhist tradition with intricate design elements.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Royal Thai Monastery</h3>
                  <p className="text-gray-600">
                    Beautiful golden temple with traditional Thai Buddhist architecture featuring ornate details and peaceful gardens.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Chinese Monastery</h3>
                  <p className="text-gray-600">
                    Majestic pagoda-style temple with red and gold accents, demonstrating classic Chinese Buddhist architecture.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Japanese Peace Stupa</h3>
                  <p className="text-gray-600">
                    White stupa symbolizing peace with Japanese architectural influences and tranquil surroundings.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Myanmar Golden Temple</h3>
                  <p className="text-gray-600">
                    Golden temple showcasing the Burmese Buddhist style with intricate spires and detailed artwork.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Korean Temple</h3>
                  <p className="text-gray-600">
                    Elegant temple representing Korean Buddhist traditions with harmonious design and peaceful meditation spaces.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Visitor Information */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Visitor Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Planning Your Visit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Best time to visit:</span> October to March offers pleasant weather
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Entry fee:</span> 200 NPR for foreigners, free for Nepali citizens
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Opening hours:</span> 7:00 AM to 7:00 PM daily
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Duration:</span> A full day is recommended to explore the entire complex
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Dress code:</span> Modest clothing is appropriate (covering shoulders and knees)
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Getting There</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">From Kathmandu:</span> 8-10 hour drive or 30-minute flight to Bhairahawa followed by a 30-minute drive
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">From Pokhara:</span> 6-7 hour drive
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Local transport:</span> Auto-rickshaws and cycle rickshaws available for getting around the complex
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Accommodation:</span> Various options available from budget to luxury hotels in nearby Bhairahawa
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Tour Packages */}
          <section className="py-12 bg-gray-50 rounded-xl my-12">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Lumbini With Us</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lumbini Spiritual Journey</h3>
                  <p className="text-gray-600 mb-4">Experience the spiritual significance of Buddha's birthplace with our expert guides who provide deep insights into Buddhist history and philosophy.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Duration:</span> Full day tour
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Includes:</span> Transportation, guide, entrance fees, lunch
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Highlights:</span> Maya Devi Temple, Sacred Garden, Ashoka Pillar, major international monasteries
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Optional:</span> Meditation session with a Buddhist monk (subject to availability)
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Price:</span> $85 per person
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

export default Lumbini;
