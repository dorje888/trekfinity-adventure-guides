
import React from 'react';
import { Facebook, Instagram, Twitter, ChevronRight, Heart, Zap, Globe, MailPlus } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-mountain-900 to-mountain-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <span className="font-playfair text-2xl font-bold text-white tracking-tight neon-text flex items-center">
                <Zap className="h-5 w-5 mr-1 text-nebula-400" />
                TrekTitan
              </span>
            </div>
            <p className="text-mountain-200 leading-relaxed">
              Offering premium trekking experiences in Nepal's Himalayan mountains with expert local guides who bring the landscape, culture, and history to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nebula-500 transition-premium">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nebula-500 transition-premium">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nebula-500 transition-premium">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide flex items-center">
              <Globe className="h-4 w-4 mr-2 text-cosmos-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#treks" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Our Treks
                </a>
              </li>
              <li>
                <a href="#testimonials" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide flex items-center">
              <Zap className="h-4 w-4 mr-2 text-aurora-400" />
              Popular Treks
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Everest Base Camp
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Annapurna Circuit
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Langtang Valley
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Manaslu Circuit
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Upper Mustang
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium group">
                  <ChevronRight className="h-4 w-4 mr-2 text-nebula-500 group-hover:translate-x-1 transition-transform" />
                  Gokyo Lakes
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide flex items-center">
              <MailPlus className="h-4 w-4 mr-2 text-cosmos-400" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-nebula-500">📍</span>
                <span className="text-mountain-200">
                  Thamel, Kathmandu<br />
                  Nepal
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-nebula-500">📞</span>
                <span className="text-mountain-200">
                  +977 1 4000000<br />
                  +977 9800000000
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-nebula-500">✉️</span>
                <span className="text-mountain-200">
                  info@trektitan.com<br />
                  bookings@trektitan.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-mountain-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-mountain-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TrekTitan Adventures. All rights reserved.
            </p>
            <p className="text-mountain-300 text-sm flex items-center">
              Crafted with <Heart className="h-4 w-4 text-cosmos-500 mx-1 animate-pulse" /> for Nepal and its beautiful mountains
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
