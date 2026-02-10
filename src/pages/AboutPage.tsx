import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Facebook, Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import ReviewForm from '@/components/reviews/ReviewForm';
import ReviewList from '@/components/reviews/ReviewList';

const AboutPage = () => {
  // SEO meta for About page
  React.useEffect(() => {
    const title = 'About Calm Trek | Licensed Nepal Trekking Company & Guides';
    const description = 'Calm Trek is a licensed, safety-focused Nepal trekking company offering Everest Base Camp, Annapurna Circuit, Manaslu, Langtang, Mustang, Kanchenjunga & custom Himalayan expeditions with sustainable practices and expert local guides.';
    const keywords = 'Calm Trek, Nepal trekking company, licensed trekking guides Nepal, Everest Base Camp guide, Annapurna Circuit trek operator, Manaslu Circuit, Kanchenjunga trek experts, sustainable Himalayan trekking, Nepal adventure travel, local Sherpa guides';
    document.title = title;
    const ensure = (sel: string, create: () => HTMLElement) => {
      let el = document.querySelector(sel) as HTMLElement | null; if (!el) { el = create(); document.head.appendChild(el); } return el; };
    const setMeta = (name: string, content: string) => { const m = ensure(`meta[name="${name}"]`, () => { const x = document.createElement('meta'); x.setAttribute('name', name); return x; }); m.setAttribute('content', content); };
    setMeta('description', description); setMeta('keywords', keywords);
  }, []);

  // Use absolute public paths to avoid BASE_URL issues
  const missionImages = [
    '/mission/Screenshot_20251130_135443.png',
    '/mission/Screenshot_20251202_065258.png',
  ];
  const placeholderSrc = '/placeholder.svg';

  const [missionApi, setMissionApi] = React.useState<CarouselApi | null>(null);
  React.useEffect(() => {
    if (!missionApi) return;
    const id = setInterval(() => missionApi.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [missionApi]);

  const teamMembers = [
    {
      name: 'Pasang Tamang',
      role: 'Professional Licensed Trekking Guide & Company Manager',
      image: '/Team/Screenshot_20251118_114502.png',
      bio: 'Highly experienced government‑licensed guide & company manager with deep Himalayan expertise and a strong safety and client care focus.',
      strengths: [
        'Licensed and professional guide',
        '10+ years high-altitude trekking experience',
        'Fluent in English and German',
        'Excellent leadership & communication',
        'Strong knowledge of Himalayan routes & culture'
      ],
      contacts: {
        facebook: 'https://www.facebook.com/pasang.lama.9862',
        instagram: 'https://www.instagram.com/pasang_pt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
      }
    },
    {
      name: 'Milan Tamang',
      role: 'Website Manager & IT Support',
      image: '/68fe3f46-e9b8-40dd-abcb-beaf0503fc1c.jpeg',
      bio: 'Dedicated Website Manager & IT Support specialist ensuring smooth site performance, updates, technical reliability & efficient digital operations since the company’s early days.',
      strengths: [
        'Skilled Web Developer',
        'Strong IT Support knowledge',
        'Experienced in website management',
        'Detail-oriented and reliable',
        'With the company since its beginning'
      ],
      contacts: {
        facebook: '#',
        instagram: '#'
      }
    },
    {
      name: 'Pasang Nurpu Tamang',
      role: 'Professional Licensed Trekking Guide & Senior Guide',
      image: '/Team/Screenshot_20251118_120158.png',
      bio: 'Dedicated, calm and safety‑focused senior guide with strong route knowledge across Nepal since 2015.',
      strengths: [
        'Licensed and professional guide',
        '8+ years trekking & guiding experience',
        'Fluent in English',
        'Strong leadership on trails',
        'Excellent route knowledge & client care'
      ],
      contacts: {
        facebook: 'https://www.facebook.com/pasang.lama.721079'
      }
    },
    {
      name: 'Lakpa Dorje',
      role: 'Senior Trek Guide',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Khumbu native with deep cultural & environmental insight; specialist in EBC & Annapurna routes.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Calm Trek</h1>
            <p className="text-lg text-gray-600">
              Calm Trek is a licensed Nepal trekking &amp; Himalayan expedition company delivering safe, culturally immersive adventures across Everest, Annapurna, Manaslu, Langtang, Mustang, Dolpo &amp; Kanchenjunga regions.
            </p>
          </div>
        </div>
        <AboutSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative rounded-xl shadow-lg overflow-hidden w-full h-[650px] md:h-[720px] bg-gray-100">
                  <Carousel className="h-full" opts={{ loop: true }} setApi={setMissionApi}>
                    <CarouselContent className="h-full">
                      {missionImages.map((src, idx) => (
                        <CarouselItem key={idx} className="relative h-full">
                          <img
                            src={src}
                            alt={`Our Mission image ${idx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading={idx === 0 ? 'eager' : 'lazy'}
                            decoding={idx === 0 ? 'sync' : 'async'}
                            onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderSrc; }}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At <strong>Calm Trek</strong>, we craft transformative Himalayan trekking experiences—combining authentic local culture, high-altitude expertise, ethical logistics and responsible tourism that uplifts mountain communities.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We operate with a safety-first mindset (acclimatization strategy, weather &amp; risk assessment, qualified guides) while minimizing environmental impact and promoting fair wages, local sourcing and cultural preservation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="p-5 bg-white rounded-lg shadow-subtle flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Expert Local Guides</h3>
                    <p className="text-gray-600">Government-licensed, altitude-trained &amp; culturally knowledgeable leaders across Nepal regions.</p>
                  </div>
                  <div className="p-5 bg-white rounded-lg shadow-subtle flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Safety &amp; Sustainability</h3>
                    <p className="text-gray-600">Structured acclimatization, emergency readiness, eco-conscious operations &amp; community support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full">
                Our Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                The experienced guide &amp; support team at <strong>Calm Trek</strong> delivers professional, personalized service—prioritizing safety, cultural respect, environmental stewardship &amp; client success from planning to summit views.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-subtle transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={`${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderSrc; }}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding={index === 0 ? 'sync' : 'async'}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-nature-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    {member.strengths && (
                      <ul className="mt-3 space-y-1 text-sm list-disc list-inside text-gray-700">
                        {member.strengths.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    )}
                    {member.contacts && (
                      <div className="mt-4 flex gap-3" aria-label={`${member.name} social links`}>
                        {member.contacts.facebook && (
                          <a href={member.contacts.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                            <Facebook className="h-4 w-4" />
                          </a>
                        )}
                        {member.contacts.instagram && (
                          <a href={member.contacts.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                            <Instagram className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Visitors Say</h2>
              <p className="text-lg text-gray-600">Read recent reviews and share your experience with Calm Trek.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ReviewList />
              </div>
              <div>
                <ReviewForm />
                <p className="mt-2 text-xs text-gray-500">Email is required to submit. Reviews are published after admin approval.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
