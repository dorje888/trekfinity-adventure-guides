
import React from 'react';
import { Facebook, Instagram, Twitter, ChevronRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mountain-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <span className="font-playfair text-2xl font-bold text-white tracking-tight">Trekfinity</span>
            </div>
            <p className="text-mountain-200 leading-relaxed">
              Offering premium trekking experiences in Nepal's Himalayan mountains with expert local guides who bring the landscape, culture, and history to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-premium">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-premium">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-premium">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#treks" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Our Treks
                </a>
              </li>
              <li>
                <a href="#testimonials" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Popular Treks</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Everest Base Camp
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Annapurna Circuit
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Langtang Valley
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Manaslu Circuit
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Upper Mustang
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-mountain-200 hover:text-white transition-premium">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  Gokyo Lakes
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-primary">📍</span>
                <span className="text-mountain-200">
                  Thamel, Kathmandu<br />
                  Nepal
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-primary">📞</span>
                <span className="text-mountain-200">
                  +977 1 4000000<br />
                  +977 9800000000
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-primary">✉️</span>
                <span className="text-mountain-200">
                  info@trekfinity.com<br />
                  bookings@trekfinity.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-mountain-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-mountain-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Trekfinity Adventures. All rights reserved.
            </p>
            <p className="text-mountain-300 text-sm flex items-center">
              Crafted with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> for Nepal and its beautiful mountains
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
