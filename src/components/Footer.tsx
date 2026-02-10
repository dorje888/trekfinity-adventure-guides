import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    treks: [
      { name: 'Everest Base Camp', href: '/treks/everest-base-camp' },
      { name: 'Annapurna Circuit', href: '/treks/annapurna-circuit' },
      { name: 'Langtang Valley', href: '/treks/langtang-valley' },
      { name: 'Manaslu Circuit', href: '/treks/manaslu-circuit' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Booking Terms', href: '/booking-terms' },
      { name: 'Cancellation Policy', href: '/cancellation' },
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/yoganepalmountaintrek/?utm_source=ig_web_button_share_sheet' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  return (
    <footer className="relative mt-24">
      {/* Mountain silhouette decoration */}
      <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-[#fafbfc] to-transparent" style={{clipPath:'polygon(0 100%, 15% 40%, 30% 70%, 45% 35%, 60% 65%, 75% 30%, 90% 60%, 100% 45%, 100% 100%)'}} aria-hidden="true"></div>
      <div className="bg-[linear-gradient(135deg,#1e3a5f_0%,#2d5a8a_100%)] text-white shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto container-padding py-12 md:py-24">
          {/* Mobile-only collapsible sections to prevent overflow/disarrangement */}
          <div className="md:hidden space-y-6">
            {/* Brand & socials */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/lovable-uploads/3042a073-2741-4abb-a098-23af3d0f755d.png" 
                  alt="Calm Trek Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-base font-bold leading-tight break-words">
                  Calm Trek
                  <span className="block text-sm font-medium opacity-90"></span>
                </span>
              </div>
              <p className="text-[#cbd5e0] mb-4 leading-relaxed text-sm">
                Discover Nepal's majestic Himalayas with expert local guides. Creating unforgettable adventures since 2014.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Company */}
            <details className="group rounded-lg bg-white/5 border border-white/10">
              <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
                <span className="font-semibold">Company</span>
                <span className="text-xs text-white/70 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="px-4 pb-3 space-y-3">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#cbd5e0] hover:text-orange-500 transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            {/* Treks */}
            <details className="group rounded-lg bg-white/5 border border-white/10">
              <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
                <span className="font-semibold">Popular Treks</span>
                <span className="text-xs text-white/70 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="px-4 pb-3 space-y-3">
                {links.treks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#cbd5e0] hover:text-orange-500 transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            {/* Contact */}
            <details className="group rounded-lg bg-white/5 border border-white/10">
              <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
                <span className="font-semibold">Contact Info</span>
                <span className="text-xs text-white/70 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-4 pb-3 space-y-3 text-[#cbd5e0]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>Thamel, Kathmandu</div>
                    <div>Nepal</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>+977 1 4000000</div>
                    <div>+977 9800000000</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>info@yoganepaltreks.com</div>
                    <div>bookings@yoganepaltreks.com</div>
                  </div>
                </div>
              </div>
            </details>
          </div>

          {/* Desktop/Large screens: original grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/lovable-uploads/3042a073-2741-4abb-a098-23af3d0f755d.png" 
                  alt="Calm Trek Logo" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-lg font-bold leading-tight">
                  Calm Trek
                  <span className="text-sm font-medium opacity-90"></span>
                </span>
              </div>
              <p className="text-[#cbd5e0] mb-6 leading-relaxed">
                Discover Nepal's majestic Himalayas with expert local guides. Creating unforgettable adventures since 2014.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#cbd5e0] hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trek Links */}
            <div>
              <h3 className="font-semibold mb-6">Popular Treks</h3>
              <ul className="space-y-4">
                {links.treks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#cbd5e0] hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4 text-[#cbd5e0]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>Thamel, Kathmandu</div>
                    <div>Nepal</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>+977 1 4000000</div>
                    <div>+977 9800000000</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>info@yoganepaltreks.com</div>
                    <div>bookings@yoganepaltreks.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/15">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs md:text-sm text-[#cbd5e0] text-center md:text-left">
                © {currentYear} Calm Trek. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
                {links.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs md:text-sm text-[#cbd5e0] hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <p className="text-xs md:text-sm text-[#cbd5e0]">
                Sustainable tourism • Supporting local communities • Protecting the environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
