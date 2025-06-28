import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Calendar, Users, Mountain, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
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
        description: "We'll be in touch within 24 hours to discuss your adventure.",
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

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      details: ["Thamel, Kathmandu", "Nepal"]
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: ["+977 1 4000000", "+977 9800000000"]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["info@trekfinity.com", "bookings@trekfinity.com"]
    }
  ];

  const features = [
    "Expert local guides with 10+ years experience",
    "Personalized trek planning & consultation",
    "24/7 emergency support during treks",
    "Sustainable and responsible tourism practices"
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium bg-muted rounded-full">
            Contact Us
          </div>
          <h2 className="text-section-title mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Let's plan your perfect Himalayan journey. Our expert team is here to 
            help you create unforgettable memories in Nepal's stunning landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="modern-card p-8">
            <h3 className="text-card-title mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="modern-input"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="modern-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="modern-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formState.date}
                    onChange={handleChange}
                    className="modern-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="trek" className="block text-sm font-medium text-foreground mb-2">
                    Interested Trek
                  </label>
                  <select
                    id="trek"
                    name="trek"
                    value={formState.trek}
                    onChange={handleChange}
                    className="modern-input"
                  >
                    <option value="Everest Base Camp">Everest Base Camp</option>
                    <option value="Annapurna Circuit">Annapurna Circuit</option>
                    <option value="Langtang Valley">Langtang Valley</option>
                    <option value="Manaslu Circuit">Manaslu Circuit</option>
                    <option value="Upper Mustang">Upper Mustang</option>
                    <option value="Gokyo Lakes">Gokyo Lakes</option>
                    <option value="Custom Trek">Custom Trek</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="groupSize" className="block text-sm font-medium text-foreground mb-2">
                    Group Size
                  </label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formState.groupSize}
                    onChange={handleChange}
                    className="modern-input"
                  >
                    <option value="1">Solo (1 person)</option>
                    <option value="2">Couple (2 people)</option>
                    <option value="3-5">Small Group (3-5 people)</option>
                    <option value="6-10">Medium Group (6-10 people)</option>
                    <option value="10+">Large Group (10+ people)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="modern-input resize-none"
                  placeholder="Tell us about your adventure goals, experience level, or any special requirements..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="modern-card p-8">
              <h3 className="text-card-title mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="modern-card p-8">
              <h3 className="text-card-title mb-6">Why Choose TrekFinity</h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="modern-card p-8">
              <h3 className="text-card-title mb-6">At a Glance</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-xs text-muted-foreground">Happy Trekkers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">Trek Routes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
