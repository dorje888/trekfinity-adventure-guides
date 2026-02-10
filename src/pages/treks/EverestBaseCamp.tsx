import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Clock, Mountain, Map as MapIcon, Home, ChevronDown, Check, Loader2, Lock, ShieldCheck, BadgeCheck, CreditCard, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const EverestBaseCamp = () => {
  // Dev cache buster for images
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  // Public Everest gallery images (order preserved)
  const ebcImages = [
    '/Everest/geetangey-ra4NJidcK1A-unsplash.jpg',
    '/Everest/julius-zetzsche-YHy-0aMxEMw-unsplash.jpg',
    '/Everest/success-dhamala-5MYcazoWGLI-unsplash.jpg',
  ].map((p) => `${p}${bust}`);

  const [api, setApi] = React.useState<CarouselApi | null>(null);

  // Auto-play the carousel
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  // SEO: title, description, keywords, Open Graph/Twitter, Canonical, JSON-LD (Trip + FAQ)
  React.useEffect(() => {
    const title = 'Everest Base Camp Trek (14 Days) via Lukla, Namche, Tengboche & Kala Patthar | TrekFinity';
    const description = 'Classic Everest Base Camp trek: fly to Lukla, acclimatize in Namche and Dingboche, visit Tengboche Monastery, reach EBC (5,364 m) and climb Kala Patthar (5,545 m) for sunrise views. Best in Mar–May & Sep–Nov.';
    const keywords = 'Everest Base Camp Trek, EBC itinerary 14 days, Lukla flight, Kala Patthar sunrise, Sagarmatha National Park, Khumbu permit, best time EBC trek, cost EBC 2025, Namche Bazaar, Tengboche, Dingboche';

    document.title = title;
    const ensure = (sel: string, create: () => HTMLElement) => {
      let el = document.querySelector(sel) as HTMLElement | null;
      if (!el) { el = create(); document.head.appendChild(el); }
      return el;
    };
    const setMeta = (name: string, content: string) => {
      const m = ensure(`meta[name="${name}"]`, () => { const x = document.createElement('meta'); x.setAttribute('name', name); return x; });
      m.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('keywords', keywords);

    const setOg = (property: string, content: string) => {
      const m = ensure(`meta[property="${property}"]`, () => { const x = document.createElement('meta'); x.setAttribute('property', property); return x; });
      m.setAttribute('content', content);
    };
    const url = window.location.href;
    const ogImage = `${window.location.origin}/og-image.png`;
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:type', 'website');
    setOg('og:url', url);
    setOg('og:image', ogImage);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', url);

    // TouristTrip JSON-LD
    const idTrip = 'ld-trip-ebc';
    const prevTrip = document.getElementById(idTrip);
    if (prevTrip) prevTrip.remove();
    const scriptTrip = document.createElement('script');
    scriptTrip.id = idTrip;
    scriptTrip.type = 'application/ld+json';
    scriptTrip.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Everest Base Camp Trek',
      description,
      touristType: 'Trekkers seeking classic Khumbu experience with high viewpoints',
      areaServed: { '@type': 'AdministrativeArea', name: 'Khumbu (Sagarmatha), Nepal' },
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 14,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Arrival in Kathmandu (1,400 m)' },
          { '@type': 'ListItem', position: 2, name: 'Fly to Lukla (2,840 m) – Trek to Phakding (2,610 m)' },
          { '@type': 'ListItem', position: 3, name: 'Phakding to Namche Bazaar (3,440 m)' },
          { '@type': 'ListItem', position: 4, name: 'Acclimatization Day at Namche Bazaar' },
          { '@type': 'ListItem', position:5, name: 'Namche Bazaar to Tengboche (3,860 m)' },
          { '@type': 'ListItem', position: 6, name: 'Tengboche to Dingboche (4,410 m)' },
          { '@type': 'ListItem', position: 7, name: 'Acclimatization at Dingboche' },
          { '@type': 'ListItem', position: 8, name: 'Dingboche to Lobuche (4,910 m)' },
          { '@type': 'ListItem', position: 9, name: 'Lobuche → Gorak Shep & Everest Base Camp (5,364 m)' },
          { '@type': 'ListItem', position: 10, name: 'Kala Patthar (5,545 m) → Pheriche (4,240 m)' },
          { '@type': 'ListItem', position: 11, name: 'Pheriche to Namche Bazaar' },
          { '@type': 'ListItem', position: 12, name: 'Namche Bazaar to Lukla' },
          { '@type': 'ListItem', position: 13, name: 'Fly back to Kathmandu' },
          { '@type': 'ListItem', position: 14, name: 'Final Departure' }
        ]
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: '1600', availability: 'https://schema.org/InStock' },
      provider: { '@type': 'Organization', name: 'TrekFinity' }
    });
    document.head.appendChild(scriptTrip);

    // FAQPage JSON-LD
    const idFaq = 'ld-faq-ebc';
    const prevFaq = document.getElementById(idFaq);
    if (prevFaq) prevFaq.remove();
    const scriptFaq = document.createElement('script');
    scriptFaq.id = idFaq;
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How difficult is the Everest Base Camp Trek?', acceptedAnswer: { '@type': 'Answer', text: 'Moderate to challenging with 5–7 hours walking per day, no technical climbing. Acclimatization days reduce altitude risk.' } },
        { '@type': 'Question', name: 'What is the best time for the trek?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March–May) and Autumn (September–November) for clear skies, mild temperatures and excellent visibility.' } },
        { '@type': 'Question', name: 'Do I need a permit for the trek?', acceptedAnswer: { '@type': 'Answer', text: 'Yes: Sagarmatha National Park Entry Permit and Khumbu Pasang Lhamu Rural Municipality Permit. Obtain in Kathmandu or at Monjo checkpoint.' } },
        { '@type': 'Question', name: 'How high is Everest Base Camp?', acceptedAnswer: { '@type': 'Answer', text: 'Everest Base Camp is 5,364 meters (17,598 feet).' } },
        { '@type': 'Question', name: 'Can I get altitude sickness?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, above 3,000 m. Built-in acclimatization in Namche and Dingboche helps. Hydrate and ascend gradually.' } },
        { '@type': 'Question', name: 'What kind of accommodation is available?', acceptedAnswer: { '@type': 'Answer', text: 'Teahouses and lodges offering simple rooms and hearty local meals across the route.' } },
        { '@type': 'Question', name: 'Is there internet and electricity?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Wi‑Fi and device charging are available in most villages, with extra costs at higher altitudes.' } },
        { '@type': 'Question', name: 'How much does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Typically USD 1,200–2,000 per person depending on season, inclusions and group size.' } },
        { '@type': 'Question', name: 'Is travel insurance necessary?', acceptedAnswer: { '@type': 'Answer', text: 'Yes—insurance covering trekking above 5,000 m and emergency helicopter evacuation is mandatory.' } },
        { '@type': 'Question', name: 'Can I do the trek solo?', acceptedAnswer: { '@type': 'Answer', text: 'Solo trekking is allowed, but hiring a licensed guide is recommended for safety and navigation.' } },
        { '@type': 'Question', name: 'What should I pack?', acceptedAnswer: { '@type': 'Answer', text: 'Warm layers and a down jacket, trekking boots, -10 °C sleeping bag, water purification tablets, sunscreen and sunglasses.' } },
        { '@type': 'Question', name: 'What about Lukla flight delays?', acceptedAnswer: { '@type': 'Answer', text: 'Weather can delay flights. Keep a buffer day in Kathmandu at the end of the itinerary.' } }
      ]
    });
    document.head.appendChild(scriptFaq);

    return () => {
      const t = document.getElementById(idTrip); if (t) t.remove();
      const f = document.getElementById(idFaq); if (f) f.remove();
    };
  }, []);

  // Enable smooth scroll behavior only on this page
  React.useEffect(() => {
    const root = document.documentElement as HTMLElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => { root.style.scrollBehavior = prev; };
  }, []);

  // Elevation chart labels and values
  const elevationLabels = ['Kathmandu', 'Lukla', 'Namche', 'Tengboche', 'Dingboche', 'Lobuche', 'Gorak Shep', 'EBC'];
  const elevationValues = [1400, 2840, 3440, 3860, 4410, 4910, 5164, 5364];

  const elevationOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y} m`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 1400,
        max: 5400,
        ticks: {
          callback: (value) => `${value} m`,
        },
        grid: { color: 'rgba(0,0,0,0.06)' },
      },
    },
    elements: {
      line: { tension: 0.4 },
      point: {
        radius: 4,
        hoverRadius: 7,
        hoverBorderWidth: 2,
        backgroundColor: '#ed8936',
        borderColor: '#2c5282',
      },
    },
  };

  // Provide ChartData with scriptable gradient background
  const elevationData: ChartData<'line'> = {
    labels: elevationLabels,
    datasets: [
      {
        label: 'Elevation (m)',
        data: elevationValues,
        borderColor: '#2c5282',
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return 'rgba(44,82,130,0.15)';
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(44,82,130,0.25)');
          gradient.addColorStop(0.7, 'rgba(44,82,130,0.08)');
          gradient.addColorStop(1, 'rgba(44,82,130,0)');
          return gradient;
        },
        fill: true,
        pointBackgroundColor: '#ed8936',
        pointBorderColor: '#2c5282',
      },
    ],
  };

  // Build rich itinerary data for cards
  const itinerary = [
    { day: 1, title: 'Arrival in Kathmandu (1,400 m)', from: '—', to: 'Kathmandu', altitude: 1400, duration: '—', distance: '—', accommodation: 'Hotel in Kathmandu', desc: 'Arrive in Kathmandu, transfer to hotel, and attend evening trek briefing and gear check.', thumb: undefined },
    { day: 2, title: 'Fly to Lukla (2,840 m) → Trek to Phakding (2,610 m)', from: 'Lukla', to: 'Phakding', altitude: 2840, duration: '3 hrs', distance: '8 km', accommodation: 'Teahouse', desc: 'Scenic flight to Lukla. Begin trekking along the Dudh Koshi River through hamlets and prayer walls to Phakding.', thumb: '/Everest/julius-zetzsche-YHy-0aMxEMw-unsplash.jpg' },
    { day: 3, title: 'Phakding → Namche Bazaar (3,440 m)', from: 'Phakding', to: 'Namche', altitude: 3440, duration: '6 hrs', distance: '10–12 km', accommodation: 'Teahouse', desc: 'Cross suspension bridges and enter Sagarmatha National Park. Steady climb to the vibrant Sherpa capital Namche.', thumb: '/Everest/geetangey-ra4NJidcK1A-unsplash.jpg' },
    { day: 4, title: 'Acclimatization in Namche Bazaar', from: 'Namche', to: 'Namche', altitude: 3440, duration: '2–3 hrs (hike)', distance: '3–5 km', accommodation: 'Teahouse', desc: 'Optional hike to Everest View Hotel or Khumjung Village for vistas of Everest, Lhotse and Ama Dablam.', thumb: '/Everest/kalle-kortelainen-TiIRgk9-xcs-unsplash.jpg' },
    { day: 5, title: 'Namche → Tengboche (3,860 m)', from: 'Namche', to: 'Tengboche', altitude: 3860, duration: '5 hrs', distance: '10 km', accommodation: 'Teahouse', desc: 'Contour the valley with sweeping views, then ascend to Tengboche Monastery—the spiritual heart of Khumbu.', thumb: '/Everest/paul-huisman-fN0qOQ_mEAM-unsplash.jpg' },
    { day: 6, title: 'Tengboche → Dingboche (4,410 m)', from: 'Tengboche', to: 'Dingboche', altitude: 4410, duration: '6 hrs', distance: '11 km', accommodation: 'Teahouse', desc: 'Descend through forest, cross the Imja River, and climb gently to panoramic Dingboche.', thumb: '/Everest/nepal-visuals-JjytBsXOj30-unsplash.jpg' },
    { day: 7, title: 'Acclimatization in Dingboche (4,410 m)', from: 'Dingboche', to: 'Dingboche', altitude: 4410, duration: '3–4 hrs (hike)', distance: '3–6 km', accommodation: 'Teahouse', desc: 'Active rest day. Optional hike to Nangkartshang Peak for views towards Makalu and the Imja Valley.', thumb: '/Everest/ben-lowe-UOj_xa6Qp0A-unsplash.jpg' },
    { day: 8, title: 'Dingboche → Lobuche (4,910 m)', from: 'Dingboche', to: 'Lobuche', altitude: 4910, duration: '5 hrs', distance: '8–9 km', accommodation: 'Teahouse', desc: 'Pass memorials at Thukla honoring climbers. Continue along moraine to Lobuche with Khumbu Glacier views.', thumb: '/Everest/success-dhamala-5MYcazoWGLI-unsplash.jpg' },
    { day: 9, title: 'Lobuche → Gorak Shep (5,164 m) → Everest Base Camp (5,364 m)', from: 'Lobuche', to: 'EBC / Gorak Shep', altitude: 5364, duration: '7–8 hrs', distance: '12–15 km', accommodation: 'Teahouse (Gorak Shep)', desc: 'Follow rocky trails beside the Khumbu Glacier to reach EBC. Celebrate and return to Gorak Shep for overnight.', thumb: '/Everest/julius-zetzsche-YHy-0aMxEMw-unsplash.jpg' },
    { day: 10, title: 'Kala Patthar (5,545 m) → Pheriche (4,240 m)', from: 'Gorak Shep', to: 'Pheriche', altitude: 5545, duration: '6–7 hrs', distance: '10–13 km', accommodation: 'Teahouse', desc: 'Pre-dawn hike to Kala Patthar for the best Everest sunrise, then descend to Pheriche for warmer air.', thumb: '/Everest/geetangey-ra4NJidcK1A-unsplash.jpg' },
    { day: 11, title: 'Pheriche → Namche Bazaar', from: 'Pheriche', to: 'Namche', altitude: 3440, duration: '6 hrs', distance: '15 km', accommodation: 'Teahouse', desc: 'Retrace via Pangboche and Tengboche to Namche. Enjoy Sherpa hospitality and bakeries.', thumb: '/Everest/paul-huisman-fN0qOQ_mEAM-unsplash.jpg' },
    { day: 12, title: 'Namche Bazaar → Lukla', from: 'Namche', to: 'Lukla', altitude: 2840, duration: '7 hrs', distance: '18 km', accommodation: 'Teahouse', desc: 'Final trekking day through forests and across suspension bridges. Celebration dinner with the team in Lukla.', thumb: '/Everest/kalle-kortelainen-TiIRgk9-xcs-unsplash.jpg' },
    { day: 13, title: 'Fly back to Kathmandu', from: 'Lukla', to: 'Kathmandu', altitude: 1400, duration: '30 min (flight)', distance: '—', accommodation: 'Hotel in Kathmandu', desc: 'Short morning flight to Kathmandu. Free time for shopping and relaxation.', thumb: undefined },
    { day: 14, title: 'Final Departure', from: 'Kathmandu', to: 'Airport', altitude: 1400, duration: '—', distance: '—', accommodation: '—', desc: 'Transfer to the airport for your onward journey.', thumb: undefined },
  ];

  // Expand/collapse state for itinerary day descriptions
  const [expanded, setExpanded] = React.useState<Set<number>>(new Set());
  const toggleExpanded = (idx: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  // FAQ data (UI) – EBC page only
  const faqs = [
    { q: 'How difficult is the Everest Base Camp Trek?', a: 'Moderate to challenging with 5–7 hours walking per day, no technical climbing. Acclimatization days reduce altitude risk.' },
    { q: 'What is the best time for the trek?', a: 'Spring (March–May) and Autumn (September–November) for clear skies, mild temperatures and excellent visibility.' },
    { q: 'Do I need a permit for the trek?', a: 'Yes: Sagarmatha National Park Entry Permit and Khumbu Pasang Lhamu Rural Municipality Permit. Obtain in Kathmandu or at Monjo checkpoint.' },
    { q: 'How high is Everest Base Camp?', a: 'Everest Base Camp is 5,364 meters (17,598 feet).' },
    { q: 'Can I get altitude sickness?', a: 'Yes, above 3,000 m. Built-in acclimatization in Namche and Dingboche helps. Hydrate and ascend gradually.' },
    { q: 'What kind of accommodation is available?', a: 'Teahouses and lodges offering simple rooms and hearty local meals across the route.' },
    { q: 'Is there internet and electricity?', a: 'Yes, Wi‑Fi and device charging are available in most villages, with extra costs at higher altitudes.' },
    { q: 'How much does it cost?', a: 'Typically USD 1,200–2,000 per person depending on season, inclusions and group size.' },
    { q: 'Is travel insurance necessary?', a: 'Yes—insurance covering trekking above 5,000 m and emergency helicopter evacuation is mandatory.' },
    { q: 'Can I do the trek solo?', a: 'Solo trekking is allowed, but hiring a licensed guide is recommended for safety and navigation.' },
    { q: 'What should I pack?', a: 'Warm layers and a down jacket, trekking boots, -10 °C sleeping bag, water purification tablets, sunscreen and sunglasses.' },
    { q: 'What about Lukla flight delays?', a: 'Weather can delay flights. Keep a buffer day in Kathmandu at the end of the itinerary.' },
  ];

  // Accordion state (single open)
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const faqRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  // Real-time email validation (EBC booking form only)
  const [email, setEmail] = React.useState<string>('');
  const [emailValid, setEmailValid] = React.useState<boolean | null>(null);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleEmailInput = (e: React.FormEvent<HTMLInputElement>) => {
    const v = e.currentTarget.value;
    setEmail(v);
    setEmailValid(v.length === 0 ? null : emailPattern.test(v));
  };

  // Submission state (EBC booking form only)
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Validate required fields using native validity
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setIsSubmitting(true);
    // Simulate async submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };
  const handleReset = () => {
    setIsSuccess(false);
    setEmail('');
    setEmailValid(null);
    if (formRef.current) formRef.current.reset();
  };

  // Date picker restrictions (EBC booking form only)
  const formatDateLocal = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };
  const minDate = React.useMemo(() => formatDateLocal(new Date()), []);
  const maxDate = React.useMemo(() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return formatDateLocal(d);
  }, []);

  // Price calculator state (EBC only)
  const [trekDate, setTrekDate] = React.useState<string>('');
  const [groupSize, setGroupSize] = React.useState<number>(1);
  const isPeakSeason = React.useMemo(() => {
    if (!trekDate) return false;
    const m = new Date(trekDate).getMonth() + 1; // 1-12
    return [3,4,5,9,10,11].includes(m);
  }, [trekDate]);
  const basePrice = 1600;
  const discountRate = groupSize >= 5 ? 0.10 : groupSize >= 2 ? 0.05 : 0;
  const seasonMultiplier = isPeakSeason ? 1.2 : 1.0;
  const perPersonRaw = basePrice * seasonMultiplier * (1 - discountRate);
  const totalRaw = perPersonRaw * groupSize;
  const formatUSD = (v: number) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const breakdown = `Base: ${formatUSD(basePrice)}\nSeason: ${isPeakSeason ? '+20%' : '+0%'}\nGroup discount: -${Math.round(discountRate*100)}%\nPeople: ${groupSize}\nPer person: ${formatUSD(perPersonRaw)}\nTotal: ${formatUSD(totalRaw)}`;

  const altitudeBadgeClass = (alt: number) => {
    if (alt < 3000) return 'bg-green-100 text-green-700 border border-green-200';
    if (alt <= 4500) return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
    return 'bg-red-100 text-red-700 border border-red-200';
  };

  // Scroll progress (EBC page only)
  const [scrollProgress, setScrollProgress] = React.useState(0);
  React.useEffect(() => {
    let raf = 0 as number | 0;
    const compute = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = doc.scrollHeight || document.body.scrollHeight || 1;
      const pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      setScrollProgress(pct);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { compute(); raf = 0; });
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Map + scroll sync state (EBC only)
  const [currentDayIdx, setCurrentDayIdx] = React.useState(0);
  const pathRef = React.useRef<SVGPathElement | null>(null);
  const progressRef = React.useRef<SVGPathElement | null>(null);
  const [pathLen, setPathLen] = React.useState(0);

  // Compute simplified route points across the viewBox based on itinerary length
  const routePoints = React.useMemo(() => {
    const n = Math.max(2, itinerary.length);
    const pts = [] as Array<{ x: number; y: number }>;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      // serpentine path left→right with slight horizontal wobble
      const x = 10 + (t * 80) + (Math.sin(t * Math.PI * 2) * 6);
      const y = 10 + t * 40;
      pts.push({ x, y });
    }
    return pts;
  }, [itinerary.length]);

  const buildPathD = React.useCallback(() => {
    if (!routePoints.length) return '';
    const [first, ...rest] = routePoints;
    return `M ${first.x},${first.y} ` + rest.map(p => `L ${p.x},${p.y}`).join(' ');
  }, [routePoints]);

  // Measure path length and set up progress stroke
  React.useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const len = el.getTotalLength();
    setPathLen(len);
  }, [routePoints]);

  // Update progress path dash based on current day
  React.useEffect(() => {
    if (!progressRef.current || !pathLen) return;
    const n = Math.max(1, itinerary.length - 1);
    const progress = Math.min(1, Math.max(0, currentDayIdx / n));
    const dashOffset = Math.max(0, pathLen - pathLen * progress);
    progressRef.current.style.strokeDasharray = `${pathLen}`;
    progressRef.current.style.strokeDashoffset = `${dashOffset}`;
  }, [currentDayIdx, pathLen, itinerary.length]);

  // Observe day cards to highlight current section on the map
  React.useEffect(() => {
    const ids = itinerary.map(d => `day-${d.day}`);
    const entries = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!entries.length) return;
    const obs = new IntersectionObserver((recs) => {
      // pick the most visible card
      let top: { idx: number; ratio: number } | null = null;
      for (const r of recs) {
        const id = (r.target as HTMLElement).id;
        const idx = Math.max(0, ids.indexOf(id));
        const ratio = r.intersectionRatio;
        if (!top || ratio > top.ratio) top = { idx, ratio };
      }
      if (top) setCurrentDayIdx(top.idx);
    }, { root: null, threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '0px 0px -30% 0px' });
    entries.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [itinerary]);

  // Live Weather (EBC only)
  type OwmWeather = {
    weather: { description: string; icon: string }[];
    main: { temp: number };
    wind: { speed: number };
  } | null;
  const [weather, setWeather] = React.useState<OwmWeather>(null);
  const [weatherError, setWeatherError] = React.useState<string | null>(null);
  const [weatherUpdatedAt, setWeatherUpdatedAt] = React.useState<number | null>(null);
  const [weatherLoading, setWeatherLoading] = React.useState<boolean>(false);

  const EBC_COORDS = { lat: 28.004, lon: 86.857 } as const; // approx Everest Base Camp
  const getIconUrl = (icon: string) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const fetchWeather = React.useCallback(async () => {
    const key = import.meta.env.VITE_OPENWEATHER_API_KEY as string | undefined;
    if (!key) {
      setWeather(null);
      setWeatherError('Weather unavailable');
      setWeatherLoading(false);
      return;
    }
    try {
      setWeatherLoading(true);
      setWeatherError(null);
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${EBC_COORDS.lat}&lon=${EBC_COORDS.lon}&units=metric&appid=${key}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as any;
      setWeather({
        weather: Array.isArray(data.weather) ? data.weather.map((w: any) => ({ description: w.description, icon: w.icon })) : [],
        main: { temp: Number(data.main?.temp ?? NaN) },
        wind: { speed: Number(data.wind?.speed ?? NaN) },
      });
      setWeatherUpdatedAt(Date.now());
    } catch (err) {
      setWeather(null);
      setWeatherError('Weather unavailable');
    } finally {
      setWeatherLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchWeather();
    const id = setInterval(fetchWeather, 30 * 60 * 1000); // every 30 minutes
    return () => clearInterval(id);
  }, [fetchWeather]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 z-[9999] bg-gradient-to-r from-blue-600 to-orange-500"
        style={{ width: `${scrollProgress}%`, transition: 'width 0.3s ease' }}
        aria-hidden="true"
      />

      <Navbar />

      {/* Hero section */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url('/Everest/hero-bg.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true" />
        <div className="relative z-10 p-8 text-center text-white">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Everest Base Camp Trek</h1>
          <p className="text-lg mb-8">Join us for an unforgettable adventure to the roof of the world!</p>
          <Link to="#booking" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out">
            Book Now
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          {/* Interactive Route Map */}
          <section id="route-map" className="mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-center">Route Map</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="w-full h-[320px] md:h-[420px]">
                <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Everest Base Camp route map">
                  {/* Background grid (subtle) */}
                  <g stroke="#e5e7eb" strokeWidth="0.2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <line key={`h-${i}`} x1="0" x2="100" y1={10 + i * 10} y2={10 + i * 10} />
                    ))}
                  </g>

                  {/* Base path */}
                  <path ref={pathRef} d={buildPathD()} fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Progress path (animated) */}
                  <path
                    ref={progressRef}
                    d={buildPathD()}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 600ms ease' }}
                  />

                  {/* Waypoints */}
                  {routePoints.map((p, i) => {
                    const isPast = i <= currentDayIdx;
                    const radius = isPast ? 1.8 : 1.3;
                    return (
                      <g key={i} className="group" transform={`translate(${p.x}, ${p.y})`}>
                        <circle
                          r={radius}
                          className={isPast ? 'fill-orange-500 stroke-white' : 'fill-blue-600 stroke-white'}
                          strokeWidth="0.4"
                          onClick={() => {
                            const id = `day-${itinerary[i]?.day ?? i+1}`;
                            const el = document.getElementById(id);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          style={{ cursor: 'pointer', transition: 'transform 200ms ease' }}
                        />
                        {/* Tooltip */}
                        <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <rect x={2.2} y={-6} rx={1.2} ry={1.2} width={42} height={8} className="fill-white" stroke="#e5e7eb" strokeWidth="0.3" />
                          <text x={3} y={-0.5} className="fill-slate-700" fontSize="2.2">
                            {`Day ${itinerary[i]?.day}: ${(itinerary[i]?.to ?? itinerary[i]?.title ?? '').toString().slice(0, 22)}`}
                          </text>
                        </g>
                      </g>
                    );
                  })}

                  {/* Legend */}
                  <g transform="translate(4, 54)">
                    <circle r="1.6" className="fill-orange-500" />
                    <text x="3.2" y="1" className="fill-slate-600" fontSize="2.4">Completed</text>
                    <circle cx="26" r="1.6" className="fill-blue-600" />
                    <text x="29.2" y="1" className="fill-slate-600" fontSize="2.4">Upcoming</text>
                  </g>
                </svg>
              </div>
            </div>
          </section>

          {/* Live Weather */}
          <section id="weather" className="mb-16">
            <h2 className="text-4xl font-extrabold mb-6 text-center">Everest Base Camp Weather</h2>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
              {weatherLoading ? (
                <div className="flex items-center justify-center text-muted-foreground">
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Loading weather…
                </div>
              ) : weather && weather.weather && weather.weather[0] ? (
                <div className="flex items-center gap-4">
                  <img
                    src={getIconUrl(weather.weather[0].icon)}
                    alt={weather.weather[0].description}
                    className="h-14 w-14"
                    loading="eager"
                  />
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-foreground">
                      {Number.isFinite(weather.main.temp) ? `${Math.round(weather.main.temp)}°C` : '—'}
                    </div>
                    <div className="text-muted-foreground capitalize">
                      {weather.weather[0].description}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Wind: {Number.isFinite(weather.wind.speed) ? `${Math.round(weather.wind.speed)} m/s` : '—'}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {weatherUpdatedAt ? `Updated ${new Date(weatherUpdatedAt).toLocaleTimeString()}` : ''}
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">Weather unavailable</div>
              )}
            </div>
          </section>

          {/* Itinerary section */}
          <section id="itinerary" className="mb-16">
            <h2 className="text-4xl font-extrabold mb-8 text-center">Trip Itinerary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {itinerary.map((day, idx) => (
                <div id={`day-${day.day}`} key={idx} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease cursor-pointer hover:shadow-xl hover:bg-slate-50 transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-500">{`Day ${day.day}`}</span>
                        <h3 className="text-xl font-bold">{day.title}</h3>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-semibold rounded-full px-3 py-1 ${altitudeBadgeClass(day.altitude)}`}>
                          {`${day.altitude} m`}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{day.desc}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="text-xs font-semibold text-gray-500">{`From: ${day.from}`}</span>
                      <span className="text-xs font-semibold text-gray-500">{`To: ${day.to}`}</span>
                      <span className="text-xs font-semibold text-gray-500">{`Duration: ${day.duration}`}</span>
                      <span className="text-xs font-semibold text-gray-500">{`Distance: ${day.distance}`}</span>
                      <span className="text-xs font-semibold text-gray-500">{`Accommodation: ${day.accommodation}`}</span>
                    </div>
                  </div>
                  {day.thumb && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={day.thumb} alt="" className="object-cover w-full h-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Elevation chart section */}
          <section id="elevation" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-extrabold mb-8 text-center">Elevation Profile</h2>
            <div className="mt-6">
              {/* Elevation chart: line chart with gradient fill */}
              <div className="h-64">
                <Line options={elevationOptions} data={elevationData} />
              </div>
            </div>
          </section>

          {/* FAQ section */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-extrabold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease cursor-pointer hover:shadow-xl">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {faq.q}
                      </h3>
                      <button onClick={() => toggleFaq(idx)} className="text-gray-500 hover:text-gray-700 transition-all">
                        {openFaq === idx ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {openFaq === idx && (
                      <div className="mt-4 text-gray-700">
                        <p className="text-sm">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Booking form section */}
          <section id="booking" className="mb-16 scroll-mt-24">
            <h2 className="text-4xl font-extrabold mb-8 text-center">Book Your Trek</h2>
            <div className="mt-6 bg-gray-50 rounded-lg shadow-md p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Trek Start Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={minDate}
                    max={maxDate}
                    value={trekDate}
                    onChange={(e) => setTrekDate(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="group-size" className="block text-sm font-medium text-gray-700">
                    Group Size
                  </label>
                  <input
                    type="number"
                    id="group-size"
                    name="group-size"
                    min={1}
                    value={groupSize}
                    onChange={(e) => setGroupSize(Math.max(1, e.target.valueAsNumber))}
                    className="mt-1 block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleEmailInput}
                    className="mt-1 block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  {emailValid === false && (
                    <p className="mt-2 text-sm text-red-600">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Submitting...
                      </>
                    ) : isSuccess ? 'Submitted! Check your email.' : 'Book Now'}
                  </button>
                </div>
              </form>
              {isSuccess && (
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-700">
                    Thank you for your booking! We will be in touch soon.
                  </p>
                  <button onClick={handleReset} className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                    Book Another Trek
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EverestBaseCamp;
