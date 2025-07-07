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
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/3042a073-2741-4abb-a098-23af3d0f755d.png" 
                alt="Yoga Nepal Mountain Trek & Expedition Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold text-foreground leading-tight">
                Yoga Nepal Mountain Trek<br />
                <span className="text-sm font-medium opacity-90">& Expedition</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Discover Nepal's majestic Himalayas with expert local guides. 
              Creating unforgettable adventures since 2014.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
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
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trek Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Popular Treks</h3>
            <ul className="space-y-4">
              {links.treks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>Thamel, Kathmandu</div>
                  <div>Nepal</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>+977 1 4000000</div>
                  <div>+977 9800000000</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>info@yoganepaltreks.com</div>
                  <div>bookings@yoganepaltreks.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Yoga Nepal Mountain Trek & Expedition. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {links.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Sustainable tourism • Supporting local communities • Protecting the environment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
