
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Navigation, Mountain, Wind, CloudLightning, Sunrise, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pokhara = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero section with parallax effect */}
      <div className="relative h-[60vh] overflow-hidden mt-16">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1571722288716-5566d3d35379?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Phewa Lake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl animate-fade-in">
            <div className="bg-glass inline-block p-2 px-4 rounded-full mb-6 cyber-border">
              <span className="text-sm font-medium text-white flex items-center">
                <Navigation className="w-4 h-4 mr-2 text-cyber-500 cyber-glow animate-pulse-subtle" />
                Gateway to the Himalayas
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text quantum-gradient">
              Pokhara
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Discover Nepal's stunning lakeside city, nestled beneath the majestic Annapurna range with breathtaking views and futuristic adventures.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="glassmorphism p-6 rounded-xl flex flex-col items-center hover-elevate hover-glow-cyber">
            <Mountain className="h-8 w-8 text-cyber-500 cyber-glow mb-3" />
            <span className="text-2xl font-bold">827m</span>
            <span className="text-sm text-gray-600">Elevation</span>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl flex flex-col items-center hover-elevate hover-glow-primary">
            <Wind className="h-8 w-8 text-nebula-500 animate-pulse-subtle mb-3" />
            <span className="text-2xl font-bold">24°C</span>
            <span className="text-sm text-gray-600">Avg. Temperature</span>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl flex flex-col items-center hover-elevate hover-glow-quantum">
            <CloudLightning className="h-8 w-8 text-quantum-500 mb-3" />
            <span className="text-2xl font-bold">Jun-Sep</span>
            <span className="text-sm text-gray-600">Monsoon Season</span>
          </div>
          
          <div className="glassmorphism p-6 rounded-xl flex flex-col items-center hover-elevate hover-glow-cyber">
            <Sunrise className="h-8 w-8 text-cyber-500 animate-pulse-subtle mb-3" />
            <span className="text-2xl font-bold">5:45 AM</span>
            <span className="text-sm text-gray-600">Sunrise at Sarangkot</span>
          </div>
        </div>
      
        {/* Main Attractions */}
        <section className="py-12">
          <div className="flex items-center mb-10">
            <div className="h-0.5 w-10 bg-nebula-500 mr-4"></div>
            <h2 className="text-3xl font-bold">Top Attractions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hover-elevate">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571722288716-5566d3d35379?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Phewa Lake" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="quantum-gradient">Phewa Lake</span>
                  <MapPin className="w-4 h-4 ml-2 text-quantum-500" />
                </h3>
                <p className="text-gray-600">The second largest lake in Nepal offering stunning reflections of the Annapurna range and boating opportunities.</p>
                <Button variant="ghost" size="sm" className="mt-4 group">
                  Explore
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="cyber-card hover-elevate">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1625497861033-e39acb28b3d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="World Peace Pagoda" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="quantum-gradient">World Peace Pagoda</span>
                  <MapPin className="w-4 h-4 ml-2 text-quantum-500" />
                </h3>
                <p className="text-gray-600">A stunning white stupa offering panoramic views of the mountains, lake, and the city of Pokhara.</p>
                <Button variant="ghost" size="sm" className="mt-4 group">
                  Explore
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="cyber-card hover-elevate">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605152410734-c8128a997fa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Davis Falls" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="quantum-gradient">Davis Falls</span>
                  <MapPin className="w-4 h-4 ml-2 text-quantum-500" />
                </h3>
                <p className="text-gray-600">A unique waterfall that flows directly into a natural tunnel, with an interesting backstory and mythology.</p>
                <Button variant="ghost" size="sm" className="mt-4 group">
                  Explore
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Adventure Activities */}
        <section className="py-12">
          <div className="flex items-center mb-10">
            <div className="h-0.5 w-10 bg-cyber-500 mr-4"></div>
            <h2 className="text-3xl font-bold quantum-gradient">Adventure Activities</h2>
          </div>
          
          <div className="holographic-bg rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-glass rounded-xl p-6 hover-elevate hover-glow-cyber">
                <h3 className="text-xl font-bold mb-4 cyber-glow">Paragliding</h3>
                <p className="text-gray-600 mb-4">
                  Soar above Pokhara with stunning views of the Annapurna range and Phewa Lake. Pokhara is one of the world's top paragliding destinations.
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-medium">Duration: 30 min - 1 hour</p>
                  <p className="font-medium">Price: From $80</p>
                </div>
              </div>
              
              <div className="bg-glass rounded-xl p-6 hover-elevate hover-glow-primary">
                <h3 className="text-xl font-bold mb-4 neon-text">Zipline</h3>
                <p className="text-gray-600 mb-4">
                  Experience one of the longest ziplines in the world with a 1.8 km descent offering stunning mountain views.
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-medium">Duration: 2 hours total</p>
                  <p className="font-medium">Price: From $70</p>
                </div>
              </div>
              
              <div className="bg-glass rounded-xl p-6 hover-elevate hover-glow-quantum">
                <h3 className="text-xl font-bold mb-4 quantum-glow">Mountain Biking</h3>
                <p className="text-gray-600 mb-4">
                  Explore the hills and villages surrounding Pokhara on a guided mountain bike tour with various difficulty levels.
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-medium">Duration: Half day to full day</p>
                  <p className="font-medium">Price: From $40</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tour Options */}
        <section className="py-12">
          <div className="flex items-center mb-10">
            <div className="h-0.5 w-10 bg-quantum-500 mr-4"></div>
            <h2 className="text-3xl font-bold">Explore Pokhara With Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hover-elevate overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 quantum-gradient">Pokhara Full-Day Sightseeing</h3>
                <p className="text-gray-600 mb-4">See all the major highlights of Pokhara in one day with our comfortable private tour and knowledgeable guide.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="font-medium mr-2 text-nebula-400">Duration:</span> 7 hours
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2 text-nebula-400">Includes:</span> Transportation, guide, entrance fees
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2 text-nebula-400">Price:</span> $65 per person
                  </li>
                </ul>
                <button className="btn-futuristic w-full text-white">
                  Book Now
                </button>
              </div>
            </div>
            
            <div className="cyber-card hover-elevate overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 quantum-gradient">Sunrise at Sarangkot</h3>
                <p className="text-gray-600 mb-4">Witness a breathtaking Himalayan sunrise from the famous viewpoint of Sarangkot with optional breakfast.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="font-medium mr-2 text-nebula-400">Duration:</span> 4 hours
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2 text-nebula-400">Includes:</span> Transportation, guide
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2 text-nebula-400">Price:</span> $30 per person
                  </li>
                </ul>
                <button className="btn-futuristic w-full text-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Pokhara;
