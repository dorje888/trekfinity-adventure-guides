import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import gokyoLakesImage from '@/assets/gokyo-lakes.jpg';

const GokyoLakes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${gokyoLakesImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gokyo Lakes Trek</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            World's Highest Freshwater Lake System
          </p>
          <Button size="lg" asChild>
            <Link to="#booking">
              Book This Trek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Trek Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Gokyo Lakes Trek is one of Nepal's most spectacular high-altitude adventures, taking you to the stunning turquoise Gokyo Lakes - the world's highest freshwater lake system situated between 4,700-5,000m. This alternative route to the Everest region offers breathtaking mountain views while avoiding the crowds of the traditional Everest Base Camp trail.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                The trek culminates with an ascent of Gokyo Ri (5,357m), which offers arguably the best panoramic views in the Everest region. From the summit, you'll witness four of the world's six highest peaks: Everest (8,849m), Lhotse (8,516m), Makalu (8,485m), and Cho Oyu (8,188m) in a single spectacular panorama.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Along the way, you'll trek alongside the massive Ngozumpa Glacier, Nepal's largest glacier, and experience the unique beauty of the Sherpa homeland while staying in traditional mountain lodges.
              </p>

              {/* Trek Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-foreground">Trek Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Six sacred turquoise Gokyo Lakes at high altitude</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Summit Gokyo Ri (5,357m) for panoramic mountain views</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Views of four 8000m+ peaks in one panorama</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Trek alongside Ngozumpa Glacier, Nepal's largest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Experience authentic Sherpa culture and hospitality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Visit Tengboche Monastery, the spiritual heart of the Khumbu</span>
                  </li>
                </ul>
              </div>

              <Button size="lg" asChild>
                <Link to="#booking">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trek Details */}
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Trek Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-sm text-muted-foreground">12 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mountain className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Max Elevation</p>
                      <p className="text-sm text-muted-foreground">5,357m</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Difficulty</p>
                      <p className="text-sm text-muted-foreground">Moderate to Challenging</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Group Size</p>
                      <p className="text-sm text-muted-foreground">2-10 people</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Start/End</p>
                      <p className="text-sm text-muted-foreground">Lukla</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Compass className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Best Season</p>
                      <p className="text-sm text-muted-foreground">March-May, Sep-Nov</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Price per person</span>
                    <span className="text-2xl font-bold text-primary">$1,800</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">All inclusive package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Gokyo Lakes Trek</h2>
              <p className="text-muted-foreground">Ready to witness the world's highest lakes and spectacular mountain views? Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            
            <form className="space-y-6 bg-background p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Trek Date</label>
                  <input type="date" className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Group Size</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3-5 people</option>
                    <option>6-10 people</option>
                    <option>10+ people</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Special Requirements or Questions</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Tell us about any dietary requirements, medical conditions, or special requests..."></textarea>
              </div>
              
              <Button size="lg" className="w-full">
                Send Booking Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GokyoLakes;