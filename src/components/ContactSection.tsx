
import React, { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, Calendar, Users, Mountain } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    trek: 'Everest Base Camp',
    groupSize: '2',
    message: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-reveal');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Received!",
        description: "We'll be in touch with you shortly to discuss your adventure.",
      });
      setIsSubmitting(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        trek: 'Everest Base Camp',
        groupSize: '2',
        message: '',
        date: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block animate-reveal py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-reveal">Start Planning Your Adventure</h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-reveal">
            Ready to embark on an unforgettable journey through Nepal's breathtaking landscapes? 
            Contact us to create your custom adventure with our experienced guides.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-reveal">
            <div className="bg-white rounded-2xl p-8 shadow-subtle h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      Thamel, Kathmandu<br />
                      Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+977 1 4000000</p>
                    <p className="text-gray-600">+977 9800000000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@trekfinity.com</p>
                    <p className="text-gray-600">bookings@trekfinity.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-gray-900 mb-4">Why Choose Us</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-nature-100 flex items-center justify-center">
                      <Mountain className="h-3 w-3 text-nature-700" />
                    </div>
                    Experienced local guides with 5+ years
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-nature-100 flex items-center justify-center">
                      <Mountain className="h-3 w-3 text-nature-700" />
                    </div>
                    Personalized trek planning
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-nature-100 flex items-center justify-center">
                      <Mountain className="h-3 w-3 text-nature-700" />
                    </div>
                    24/7 emergency support during treks
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-nature-100 flex items-center justify-center">
                      <Mountain className="h-3 w-3 text-nature-700" />
                    </div>
                    Sustainable and responsible tourism
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-reveal">
            <div className="bg-white rounded-2xl p-8 shadow-subtle">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="trek" className="block text-sm font-medium text-gray-700 mb-1">
                      Interested Trek
                    </label>
                    <select
                      id="trek"
                      name="trek"
                      value={formState.trek}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="Everest Base Camp">Everest Base Camp</option>
                      <option value="Annapurna Circuit">Annapurna Circuit</option>
                      <option value="Langtang Valley">Langtang Valley</option>
                      <option value="Manaslu Circuit">Manaslu Circuit</option>
                      <option value="Other">Other / Not Sure Yet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formState.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Travelers
                    </label>
                    <div className="relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400">
                        <Users className="h-4 w-4" />
                      </div>
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={formState.groupSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3-5">3-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="10+">More than 10</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your travel plans and any special requirements..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white rounded-md font-medium transition-premium ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 shadow-lg shadow-primary/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
