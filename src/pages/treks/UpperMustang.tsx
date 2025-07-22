import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import upperMustangImage from '@/assets/upper-mustang.jpg';

const UpperMustang = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${upperMustangImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Upper Mustang Trek</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Journey to the Forbidden Kingdom of Lo
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
                The Upper Mustang Trek takes you to one of the world's last forbidden kingdoms, a mystical high-altitude desert region that was closed to outsiders until 1992. This unique trek offers an extraordinary journey through dramatic landscapes that resemble the Tibetan plateau, with ancient Buddhist monasteries, medieval walled cities, and pristine Tibetan culture.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Trek through the rain shadow of the Himalayas where the landscape is dramatically different from other regions of Nepal. Experience the authentic Tibetan Buddhist culture in traditional villages like Charang and the ancient capital of Lo Manthang, often called the 'Walled City of Lo'.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                The trek requires a special restricted area permit and offers views of Nilgiri, Annapurna, and Dhaulagiri ranges while passing through some of the most unique landscapes in the Himalayas.
              </p>

              {/* Trek Highlights */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-foreground">Trek Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Explore the medieval walled city of Lo Manthang</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Visit ancient cave monasteries and Buddhist gompas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Experience authentic Tibetan culture and traditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Trek through unique desert landscapes and canyons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">Visit the Royal Palace of the Mustang King</span>
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
                      <p className="text-sm text-muted-foreground">4,000m</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Difficulty</p>
                      <p className="text-sm text-muted-foreground">Moderate</p>
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
                      <p className="text-sm text-muted-foreground">Jomsom</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Compass className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Best Season</p>
                      <p className="text-sm text-muted-foreground">March-November</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Price per person</span>
                    <span className="text-2xl font-bold text-primary">$2,400</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Upper Mustang Trek</h2>
              <p className="text-muted-foreground">Ready to explore the Forbidden Kingdom? Fill out the form below and we'll get back to you within 24 hours.</p>
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

export default UpperMustang;