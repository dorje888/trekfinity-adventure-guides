import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    e.stopPropagation();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { 
      name: 'Treks', 
      href: '#treks',
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
      dropdownItems: [
        { name: 'Kathmandu', href: '/destinations/kathmandu' },
        { name: 'Pokhara', href: '/destinations/pokhara' },
        { name: 'Chitwan', href: '/destinations/chitwan' },
        { name: 'Lumbini', href: '/destinations/lumbini' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg border-b border-border/40 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              TrekFinity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdownItems ? (
                  <button 
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-75",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                    onClick={(e) => toggleDropdown(link.name, e)}
                    aria-expanded={activeDropdown === link.name}
                  >
                    {link.name}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform", 
                      activeDropdown === link.name && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link 
                    to={link.href} 
                    className={cn(
                      "text-sm font-medium transition-colors hover:opacity-75",
                      isScrolled ? "text-foreground" : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
                
                {link.dropdownItems && activeDropdown === link.name && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg border border-border/40 shadow-lg animate-fade-in">
                    <div className="py-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-md mx-2 my-1 transition-colors"
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
              size="sm"
              className="h-9 px-4 text-sm font-medium"
              asChild
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"
            )}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border/40 animate-fade-in">
          <div className="container mx-auto container-padding py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdownItems ? (
                  <div>
                    <button 
                      className="flex items-center justify-between w-full text-left text-foreground font-medium py-2"
                      onClick={(e) => toggleDropdown(link.name, e)}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform", 
                        activeDropdown === link.name && "rotate-180"
                      )} />
                    </button>
                    
                    {activeDropdown === link.name && (
                      <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block text-sm text-muted-foreground hover:text-foreground py-1 transition-colors"
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
                    className="block text-foreground font-medium py-2 hover:opacity-75 transition-opacity"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-border/40">
              <Button className="w-full" asChild>
                <Link to="/contact" onClick={closeMenu}>Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
