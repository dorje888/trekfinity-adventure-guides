
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Compass, Mountain, Users, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (menu: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the document click handler from immediately closing the dropdown
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { 
      name: 'Treks', 
      href: '#treks',
      icon: <Mountain className="w-4 h-4 text-indigo-400" />,
      dropdownItems: [
        { name: 'Everest Base Camp', href: '/treks/everest-base-camp' },
        { name: 'Annapurna Circuit', href: '/treks/annapurna-circuit' },
        { name: 'Langtang Valley', href: '/treks/langtang-valley' },
        { name: 'Manaslu Circuit', href: '/treks/manaslu-circuit' },
      ]
    },
    { 
      name: 'Destinations', 
      href: '#destinations',
      icon: <Compass className="w-4 h-4 text-teal-400" />,
      dropdownItems: [
        { name: 'Kathmandu', href: '/destinations/kathmandu' },
        { name: 'Pokhara', href: '/destinations/pokhara' },
        { name: 'Chitwan', href: '/destinations/chitwan' },
        { name: 'Lumbini', href: '/destinations/lumbini' },
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      icon: <Users className="w-4 h-4 text-lavender-400" />
    },
    { 
      name: 'Testimonials', 
      href: '/testimonials',
      icon: <MessageSquare className="w-4 h-4 text-rose-400" />
    },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur-lg bg-white/5 border-b border-white/10 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <span className="font-playfair text-2xl font-bold tracking-tight text-white aesthetic-gradient">TrekTitan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdownItems ? (
                  <button 
                    className="flex items-center text-sm font-medium text-white/90 hover:text-white transition-premium group"
                    onClick={(e) => toggleDropdown(link.name, e)}
                    aria-expanded={activeDropdown === link.name}
                    aria-haspopup="true"
                  >
                    {link.icon}
                    <span className="ml-1">{link.name}</span>
                    <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", activeDropdown === link.name && "rotate-180")} />
                  </button>
                ) : (
                  <Link 
                    to={link.href} 
                    className="flex items-center text-sm font-medium text-white/90 hover:text-white transition-premium"
                  >
                    {link.icon}
                    <span className="ml-1">{link.name}</span>
                  </Link>
                )}
                
                {link.dropdownItems && activeDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition-premium animate-fade-in z-10">
                    <div className="py-1">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-md mx-1 my-1 transition-premium"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Button 
              variant="taskbar"
              className="text-sm font-medium shadow-lg"
              asChild
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="taskbar"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="p-2 rounded-md"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-xl p-4 animate-fade-in border-t border-white/10">
          <div className="flex flex-col space-y-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdownItems ? (
                  <div>
                    <button 
                      className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-white/80 hover:text-white transition-premium"
                      onClick={(e) => toggleDropdown(link.name, e)}
                      aria-expanded={activeDropdown === link.name}
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                      <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", activeDropdown === link.name && "rotate-180")} />
                    </button>
                    
                    {activeDropdown === link.name && (
                      <div className="pl-4 mt-1 space-y-1 animate-fade-in">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-3 py-2 text-sm text-white/70 hover:text-white transition-premium"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={link.href} 
                    className="flex items-center px-3 py-2 text-base font-medium text-white/80 hover:text-white transition-premium"
                    onClick={closeMenu}
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </Link>
                )}
              </div>
            ))}
            <Button 
              variant="taskbar"
              className="mx-3 text-center"
              asChild
            >
              <Link 
                to="/contact"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
