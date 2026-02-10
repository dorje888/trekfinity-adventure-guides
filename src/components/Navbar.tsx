import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mountain, MapPin, Compass, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Add prop to control positioning variant
type NavbarProps = {
  variant?: 'fixed' | 'sticky';
};

const Navbar: React.FC<NavbarProps> = ({ variant = 'fixed' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeRegionIdx, setActiveRegionIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Consider sticky pages transparent at top too
  const isTransparent = (!isScrolled) && (isHome || variant === 'sticky');
  // Enable enhanced mega menu ONLY on Everest Base Camp page
  const enhancedMega = location.pathname.startsWith('/treks/everest-base-camp');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      const doc = document.documentElement;
      const total = (doc.scrollHeight - doc.clientHeight) || 1;
      setScrollProgress(Math.min(100, (window.scrollY / total) * 100));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (menu: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActivePath = (href: string) => href !== '#' && location.pathname.startsWith(href);

  // Metadata for enhanced mega menu (thumbnails, difficulty, stats, featured)
  const trekMeta: Record<string, { thumb: string; difficulty: 'Easy' | 'Moderate' | 'Challenging'; duration: string; altitude: string; featured?: boolean }> = {
    '/treks/everest-base-camp': { thumb: '/Everest/ben-lowe-UOj_xa6Qp0A-unsplash.jpg', difficulty: 'Challenging', duration: '14 days', altitude: '5,545 m', featured: true },
    '/treks/gokyo-lakes': { thumb: '/Everest/kalle-kortelainen-TiIRgk9-xcs-unsplash.jpg', difficulty: 'Challenging', duration: '12–14 days', altitude: '5,357 m', featured: true },
    '/treks/everest-three-passes': { thumb: '/Everest/nepal-visuals-JjytBsXOj30-unsplash.jpg', difficulty: 'Challenging', duration: '18–21 days', altitude: '5,535 m', featured: false },
    '/treks/everest-view': { thumb: '/Everest/paul-huisman-fN0qOQ_mEAM-unsplash.jpg', difficulty: 'Moderate', duration: '7–9 days', altitude: '3,880 m', featured: false },
    '/treks/jiri-to-everest': { thumb: '/Everest/geetangey-ra4NJidcK1A-unsplash.jpg', difficulty: 'Challenging', duration: '20–22 days', altitude: '5,545 m', featured: false },
    '/treks/pikey-peak': { thumb: '/Everest/success-dhamala-5MYcazoWGLI-unsplash.jpg', difficulty: 'Moderate', duration: '7–10 days', altitude: '4,065 m', featured: false },

    '/treks/annapurna-base-camp': { thumb: '/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg', difficulty: 'Moderate', duration: '10–12 days', altitude: '4,130 m', featured: true },
    '/treks/annapurna-circuit': { thumb: '/Annapurna/touann-gatouillat-vergos-QFY3Tv5_12M-unsplash.jpg', difficulty: 'Challenging', duration: '14–18 days', altitude: '5,416 m', featured: true },
    '/treks/ghorepani-poon-hill': { thumb: '/Annapurna/neha-maheen-mahfin-_sbkVaT19ko-unsplash.jpg', difficulty: 'Easy', duration: '3–5 days', altitude: '3,210 m', featured: false },
    '/treks/mardi-himal': { thumb: '/Annapurna/sanjay-hona-qAA6INniUNg-unsplash.jpg', difficulty: 'Moderate', duration: '5–7 days', altitude: '4,500 m', featured: false },
    '/treks/jomsom-muktinath': { thumb: '/Annapurna/francesca-varisco-r7IBk3kt5hc-unsplash.jpg', difficulty: 'Easy', duration: '5–7 days', altitude: '3,800 m', featured: false },
    '/treks/tilicho-lake': { thumb: '/Annapurna/touann-gatouillat-vergos-QFY3Tv5_12M-unsplash.jpg', difficulty: 'Challenging', duration: '3–5 days', altitude: '4,919 m', featured: false },
    '/treks/upper-mustang': { thumb: '/Annapurna/touann-gatouillat-vergos-QFY3Tv5_12M-unsplash.jpg', difficulty: 'Moderate', duration: '12–14 days', altitude: '4,200 m', featured: true },
    '/treks/sikles-village': { thumb: '/Annapurna/neha-maheen-mahfin-_sbkVaT19ko-unsplash.jpg', difficulty: 'Easy', duration: '4–6 days', altitude: '2,000 m', featured: false },

    '/treks/langtang-valley': { thumb: '/Langtang/kim-cordenete-WkMM-5ogQDs-unsplash.jpg', difficulty: 'Moderate', duration: '7–9 days', altitude: '4,984 m', featured: true },
    '/treks/gosainkunda-helambu': { thumb: '/Langtang/himalayan-local-guide-xc2GggytytA-unsplash.jpg', difficulty: 'Moderate', duration: '8–10 days', altitude: '4,600 m', featured: false },
    '/treks/tamang-heritage-trail': { thumb: '/Langtang/triras-manandhar-y9nT7lTOX00-unsplash.jpg', difficulty: 'Easy', duration: '6–7 days', altitude: '3,870 m', featured: false },
    '/treks/langtang-ganja-la-pass': { thumb: '/Langtang/kim-cordenete-WkMM-5ogQDs-unsplash.jpg', difficulty: 'Challenging', duration: '12–14 days', altitude: '5,130 m', featured: false },

    '/treks/manaslu-circuit': { thumb: '/Manaslu/erik-0ldqchbk1a0-unsplash.jpg', difficulty: 'Challenging', duration: '13–15 days', altitude: '5,106 m', featured: true },
    '/treks/tsum-valley': { thumb: '/Manaslu/erik-OwJ6Cn_DnHM-unsplash.jpg', difficulty: 'Moderate', duration: '10–12 days', altitude: '3,700 m', featured: false },
    '/treks/manaslu-base-camp': { thumb: '/Manaslu/erik-xeIH7VK8XOc-unsplash.jpg', difficulty: 'Challenging', duration: '7–9 days', altitude: '4,800 m', featured: false },

    '/treks/kanchenjunga-circuit': { thumb: '/Everest/julius-zetzsche-YHy-0aMxEMw-unsplash.jpg', difficulty: 'Challenging', duration: '21–24 days', altitude: '5,100 m', featured: true },
  };

  const difficultyClasses = (d: 'Easy' | 'Moderate' | 'Challenging') =>
    d === 'Easy' ? 'bg-green-100 text-green-700' : d === 'Moderate' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700';

  // Hierarchical treks menu data (regions -> treks)
  const trekRegions = [
    {
      name: 'Everest (Khumbu) Region',
      items: [
        { name: 'Everest Base Camp (EBC) Trek', href: '/treks/everest-base-camp' },
        { name: 'Gokyo Lakes Trek', href: '/treks/gokyo-lakes' },
        { name: 'Everest Three Passes Trek', href: '/treks/everest-three-passes' },
        { name: 'Everest View Trek', href: '/treks/everest-view' },
        { name: 'Jiri to Everest Base Camp Trek', href: '/treks/jiri-to-everest' },
        { name: 'Pikey Peak Trek', href: '/treks/pikey-peak' },
      ],
    },
    {
      name: 'Annapurna Region',
      items: [
        { name: 'Annapurna Base Camp (ABC) Trek', href: '/treks/annapurna-base-camp' },
        { name: 'Annapurna Circuit Trek', href: '/treks/annapurna-circuit' },
        { name: 'Ghorepani Poon Hill Trek', href: '/treks/ghorepani-poon-hill' },
        { name: 'Mardi Himal Trek', href: '/treks/mardi-himal' },
        { name: 'Jomsom Muktinath Trek', href: '/treks/jomsom-muktinath' },
        { name: 'Tilicho Lake Trek', href: '/treks/tilicho-lake' },
        { name: 'Upper Mustang Trek', href: '/treks/upper-mustang' },
        { name: 'Sikles Village Trek', href: '/treks/sikles-village' },
      ],
    },
    {
      name: 'Langtang Region',
      items: [
        { name: 'Langtang Valley Trek', href: '/treks/langtang-valley' },
        { name: 'Gosaikunda – Helambu Trek', href: '/treks/gosainkunda-helambu' },
        { name: 'Tamang Heritage Trail Trek', href: '/treks/tamang-heritage-trail' },
        { name: 'Langtang–Ganja La Pass Trek', href: '/treks/langtang-ganja-la-pass' },
      ],
    },
    {
      name: 'Manaslu Region',
      items: [
        { name: 'Manaslu Circuit Trek', href: '/treks/manaslu-circuit' },
        { name: 'Tsum Valley Trek', href: '/treks/tsum-valley' },
        { name: 'Manaslu Base Camp Trek', href: '/treks/manaslu-base-camp' },
      ],
    },
    {
      name: 'Mustang Region',
      items: [
        { name: 'Upper Mustang Trek (Lo-Manthang)', href: '/treks/upper-mustang' },
        { name: 'Lower Mustang Trek (Jomsom – Muktinath)', href: '/treks/jomsom-muktinath' },
        { name: 'Damodar Kunda Trek', href: '/treks/damodar-kunda' },
      ],
    },
    {
      name: 'Kanchenjunga Region',
      items: [
        { name: 'Kanchenjunga North Base Camp Trek', href: '/treks/kanchenjunga-north-base-camp' },
        { name: 'Kanchenjunga South Base Camp Trek', href: '/treks/kanchenjunga-south-base-camp' },
        { name: 'Kanchenjunga Circuit Trek', href: '/treks/kanchenjunga-circuit' },
      ],
    },
    {
      name: 'Makalu Region',
      items: [
        { name: 'Makalu Base Camp Trek', href: '/treks/makalu-base-camp' },
        { name: 'Sherpani Col Trek', href: '/treks/sherpani-col' },
      ],
    },
    {
      name: 'Dolpo Region',
      items: [
        { name: 'Upper Dolpo Trek', href: '/treks/upper-dolpa' },
        { name: 'Lower Dolpo Trek', href: '/treks/lower-dolpa' },
        { name: 'Phoksundo Lake Trek', href: '/treks/phoksundo-lake' },
        { name: 'Shey Gompa Trek', href: '/treks/shey-gompa' },
      ],
    },
    {
      name: 'Rara Region',
      items: [
        { name: 'Rara Lake Trek', href: '/treks/rara-lake' },
        { name: 'Jumla to Rara Lake Trek', href: '/treks/jumla-to-rara' },
      ],
    },
  ];

  const navLinks = [
    { 
      name: 'Treks', 
      href: '#treks',
      dropdownGroups: trekRegions,
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
    { name: 'Register', href: '/registration' },
  ];

  const iconFor = (parent: string) => parent === 'Treks' ? <Mountain className="h-4 w-4 text-primary" /> : <MapPin className="h-4 w-4 text-primary" />;

  const positionClass = variant === 'sticky' ? 'sticky top-0 z-[1000]' : 'fixed z-50';
  const bgClasses = isTransparent
    ? 'bg-gradient-to-b from-black/40 to-transparent'
    : 'bg-white/90 border-b border-border/40';
  const blurClass = 'backdrop-blur-[10px]';
  const shadowClass = isScrolled ? 'shadow-md shadow-black/10' : 'shadow-none';

  return (
    <nav className={cn(
      positionClass,
      'w-full transition-all duration-300',
      blurClass,
      bgClasses,
      shadowClass
    )}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Calm Trek - Home">
            <img src="/lovable-uploads/3042a073-2741-4abb-a098-23af3d0f755d.png" alt="Calm Trek Logo" className="h-12 w-12 object-contain rounded-lg ring-1 ring-white/20 group-hover:ring-white/40 transition" />
            {/* Updated full brand name (always visible) */}
            <div className="flex flex-col">
              <span className={cn(
                "text-sm md:text-base font-bold tracking-tight transition-colors",
                isTransparent ? "text-white" : "text-slate-900"
              )}>Calm</span>
              <span className={cn(
                "text-[10px] md:text-xs font-medium uppercase tracking-wide transition-colors",
                isTransparent ? "text-white/80" : "text-slate-600"
              )}>Trek</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {(link as any).dropdownItems || (link as any).dropdownGroups ? (
                  <button 
                    className={cn(
                      "group flex items-center gap-1 text-sm font-medium transition-colors",
                      isTransparent ? "text-white" : "text-foreground"
                    )}
                    onClick={(e) => toggleDropdown(link.name, e)}
                    aria-expanded={activeDropdown === link.name}
                    aria-haspopup="menu"
                  >
                    <span className="relative">
                      {link.name}
                      <span className={cn(
                        "pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-pink-500 to-amber-400 transition-all duration-300",
                        activeDropdown === link.name && "w-full"
                      )} />
                    </span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform", 
                      activeDropdown === link.name && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link 
                    to={link.href} 
                    className={cn(
                      "group text-sm font-medium transition-colors",
                      isTransparent ? "text-white" : "text-foreground",
                      isActivePath(link.href) && !isTransparent && "text-primary"
                    )}
                  >
                    <span className="relative">
                      {link.name}
                      <span className={cn(
                        "pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-pink-500 to-amber-400 transition-all duration-300",
                        (isActivePath(link.href) || false) && "w-full"
                      )} />
                    </span>
                  </Link>
                )}
                
                {/* Multilevel dropdown for Treks: left regions, responsive right flyout */}
                {(link as any).dropdownGroups && activeDropdown === link.name && (
                  <div className="absolute left-0 top-full mt-3 bg-white/95 backdrop-blur-xl rounded-xl border border-border/40 shadow-xl ring-1 ring-black/5 animate-fade-in max-w-[calc(100vw-1rem)] overflow-hidden">
                    <div className="flex">
                      {/* Regions column with separators */}
                      <div className="w-64 shrink-0 py-2 max-h-[70vh] overflow-auto divide-y divide-border/40">
                        {(link as any).dropdownGroups.map((group: any, idx: number) => (
                          <button
                            key={group.name}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors",
                              idx === activeRegionIdx ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent"
                            )}
                            onMouseEnter={() => setActiveRegionIdx(idx)}
                            onFocus={() => setActiveRegionIdx(idx)}
                            onClick={(e) => { e.stopPropagation(); setActiveRegionIdx(idx); }}
                          >
                            <span className="flex items-center gap-2">
                              <Mountain className="h-4 w-4 text-primary" />
                              {group.name}
                            </span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </button>
                        ))}
                      </div>

                      {/* Items flyout (sub menu) */}
                      {(() => {
                        const items = (link as any).dropdownGroups[activeRegionIdx]?.items || [];
                        return (
                          <div
                            className={cn(
                              'border-l border-border/40 px-2 py-2 overflow-y-auto max-h-[70vh] transition-all duration-200 ease-out w-fit max-w-[calc(100vw-18rem)] min-w-0'
                            )}
                          >
                            {/* Enhanced grid when on EBC page */}
                            {enhancedMega ? (
                              <div className={cn('grid gap-2 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]')}> 
                                {items.map((item: any) => {
                                  const meta = trekMeta[item.href] || { thumb: '/placeholder.svg', difficulty: 'Moderate', duration: '—', altitude: '—' };
                                  return (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      className={cn(
                                        'group flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
                                        'hover:bg-accent focus:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30',
                                        isActivePath(item.href) ? 'bg-primary/10 text-primary' : 'text-foreground'
                                      )}
                                      onClick={closeDropdown}
                                    >
                                      <img
                                        src={meta.thumb}
                                        alt={`${item.name} thumbnail`}
                                        style={{ width: 80, height: 60 }}
                                        className="rounded-md object-cover flex-shrink-0 ring-1 ring-black/10"
                                        loading="lazy"
                                      />
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="font-medium truncate">{item.name}</span>
                                          {meta.featured && (
                                            <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">Most Popular</span>
                                          )}
                                        </div>
                                        <div className="mt-1 flex items-center gap-2">
                                          <span className={cn('text-[11px] px-2 py-0.5 rounded-full', difficultyClasses(meta.difficulty))}>{meta.difficulty}</span>
                                        </div>
                                        <div className="mt-1 text-xs text-muted-foreground opacity-0 -translate-y-0.5 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                                          {meta.duration} • Max {meta.altitude}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className={cn('grid gap-1 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]')}> 
                                {items.map((item: any) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className={cn(
                                      'flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors break-words',
                                      'hover:bg-accent focus:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30',
                                      isActivePath(item.href) ? 'bg-primary/10 text-primary' : 'text-foreground'
                                    )}
                                    onClick={closeDropdown}
                                  >
                                    <Compass className="h-4 w-4 text-primary" />
                                    <span className="break-words whitespace-normal">{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                )}

                {/* Existing simple dropdown (Destinations) remains */}
                {(link as any).dropdownItems && activeDropdown === link.name && (
                  <div className="absolute left-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-xl border border-border/40 shadow-xl ring-1 ring-black/5 animate-fade-in">
                    <div className="py-2">
                      {(link as any).dropdownItems.map((item: any) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 text-sm rounded-md mx-2 my-1 transition-colors",
                            isActivePath(item.href) ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent"
                          )}
                          onClick={closeDropdown}
                        >
                          {iconFor(link.name)}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA */}
            <Button size="sm" className="h-9 px-4 text-sm font-medium" asChild>
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
              isTransparent ? "text-white hover:bg-white/10" : "text-foreground hover:bg-accent"
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
                {(link as any).dropdownItems || (link as any).dropdownGroups ? (
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
                      <div className="pl-4 mt-2 space-y-2 animate-fade-in max-h-[70vh] overflow-y-auto pr-2 -mr-2">
                        {(link as any).dropdownGroups ? (
                          (link as any).dropdownGroups.map((group: any) => (
                            <div key={group.name} className="mb-2">
                              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{group.name}</div>
                              {group.items.map((item: any) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className={cn(
                                    "flex items-center gap-2 text-sm py-1",
                                    isActivePath(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                  )}
                                  onClick={closeDropdown}
                                >
                                  <Compass className="h-3.5 w-3.5 text-primary" />
                                  <span>{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          ))
                        ) : (
                          (link as any).dropdownItems.map((item: any) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={cn(
                                "flex items-center gap-2 text-sm py-1",
                                isActivePath(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                              )}
                              onClick={closeDropdown}
                            >
                              {iconFor(link.name)}
                              <span>{item.name}</span>
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "block font-medium py-2",
                      isActivePath(link.href) ? "text-primary" : "text-foreground hover:opacity-75"
                    )}
                    onClick={closeDropdown}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-border/40">
              {/* Revert mobile CTA to original */}
              <Button className="w-full" asChild>
                <Link to="/contact" onClick={closeDropdown}>Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll progress bar */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-transparent">
        <div
          className="h-0.5 bg-gradient-to-r from-primary via-pink-500 to-amber-400 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
