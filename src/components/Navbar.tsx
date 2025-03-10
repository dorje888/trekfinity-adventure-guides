
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const navLinks = [
    { 
      name: 'Treks', 
      href: '#treks',
      dropdownItems: [
        { name: 'Everest Base Camp', href: '#' },
        { name: 'Annapurna Circuit', href: '#' },
        { name: 'Langtang Valley', href: '#' },
        { name: 'Manaslu Circuit', href: '#' },
      ]
    },
    { 
      name: 'Destinations', 
      href: '#destinations',
      dropdownItems: [
        { name: 'Kathmandu', href: '#' },
        { name: 'Pokhara', href: '#' },
        { name: 'Chitwan', href: '#' },
        { name: 'Lumbini', href: '#' },
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "nav-blur shadow-subtle py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-playfair text-2xl font-bold text-primary tracking-tight">Trekfinity</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdownItems ? (
                  <button 
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-premium"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-premium"
                  >
                    {link.name}
                  </a>
                )}
                
                {link.dropdownItems && activeDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md bg-glass shadow-subtle transition-premium animate-fade-in">
                    <div className="py-1">
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-premium"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <a 
              href="#contact" 
              className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-premium shadow-subtle"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary transition-premium"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 animate-fade-in">
          <div className="flex flex-col space-y-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdownItems ? (
                  <div>
                    <button 
                      className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-premium"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name}
                      <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", activeDropdown === link.name && "rotate-180")} />
                    </button>
                    
                    {activeDropdown === link.name && (
                      <div className="pl-4 mt-1 space-y-1 animate-fade-in">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary transition-premium"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={link.href} 
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-premium"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <a 
              href="#contact" 
              className="block mx-3 px-4 py-2 text-center text-white bg-primary rounded-md hover:bg-primary/90 transition-premium"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
