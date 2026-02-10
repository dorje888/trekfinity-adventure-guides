import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Users, Mountain, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const PikeyPeak = () => {
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  const hero = `/Everest/success-dhamala-5MYcazoWGLI-unsplash.jpg${bust}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="relative h-[55vh]">
          <img src={hero} alt="Pikey Peak" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Pikey Peak Trek</h1>
              <p className="text-lg md:text-xl">A quieter lower Khumbu trek with a famous sunrise panorama</p>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Overview</h2>
                <p className="text-muted-foreground mb-4">Pikey Peak (4,065m) offers expansive sunrise views of Everest, Numbur and distant Kanchenjunga from a vantage that’s accessible in a short itinerary (6–9 days). Trails pass through Sherpa villages and rhododendron forests with comfortable lodges.</p>
                <h3 className="text-xl font-bold mt-8 mb-3">Quick Facts</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>6–9 days</span></li>
                  <li className="flex items-center gap-2"><Mountain className="h-4 w-4" /><span>Max 4,065m</span></li>
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>Moderate</span></li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Start/End: Kathmandu</span></li>
                </ul>
              </div>
              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border/40">
                  <h3 className="text-lg font-bold mb-4">From $650 USD</h3>
                  <Link to="#book-now" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="book-now" className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-border/40">
              <h2 className="text-2xl font-bold text-center mb-6">Book Pikey Peak</h2>
              <form className="space-y-4">
                <input className="w-full px-6 py-3 bg-[#DCD6EB] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40" placeholder="Full Name" />
                <input type="email" className="w-full px-6 py-3 bg-[#DCD6EB] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40" placeholder="Email" />
                <button className="w-full inline-flex justify-center items-center gap-2 px-6 h-11 bg-[#7E6DB0] hover:bg-[#6F60A1] text-white rounded-full font-medium transition">
                  Submit Booking Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default PikeyPeak;
