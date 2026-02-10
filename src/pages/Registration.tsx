import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || ""; // empty means same origin

const Registration = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    interestedTrek: "",
    message: "",
    preferredDate: "",
    groupSize: ""
  });

  const faqRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = faqRef.current; if (!container) return;
    const cards = Array.from(container.querySelectorAll('[data-faq-card]')) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-4');
          el.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });
    cards.forEach((c, i) => { c.style.transitionDelay = `${i * 80}ms`; io.observe(c); });
    return () => io.disconnect();
  }, []);

  // cache-bust for the uploaded image during development
  const bust = import.meta.env.DEV ? `?v=${Date.now()}` : "";
  // Use the provided screenshot image for the Get in touch panel
  const getInTouchImage = `/Screenshot_20251028_133116.png${bust}`;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Please agree to policies",
        description: "You must confirm you understand and accept our policies before submitting.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(`${API_BASE}/api/registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      await res.json();
      toast({
        title: "Registration saved",
        description: "Thank you for your interest. We'll contact you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        interestedTrek: "",
        message: "",
        preferredDate: "",
        groupSize: ""
      });
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Could not save registration",
        description: err?.message ?? "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Top spacing consistent with other pages */}
      <div className="pt-24 md:pt-32">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Split layout matching the uploaded design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl overflow-hidden items-stretch">
            {/* Left: Form on light lavender */}
            <div className="bg-[#F3F1FB] p-8 sm:p-10 rounded-2xl shadow-sm h-full">
              <div className="mb-8">
                <div className="text-sm font-semibold text-[#7E6DB0] mb-3">TrekFinity</div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#6F60A1] tracking-tight">Register your interest</h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#6F60A1] mb-2">First Name *</label>
                    <input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="First name"
                      required
                      className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#6F60A1] mb-2">Last Name *</label>
                    <input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Last name"
                      required
                      className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#6F60A1] mb-2">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="name@email.com"
                    required
                    className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#6F60A1] mb-2">Phone Number *</label>
                    <input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+977 98XXXXXXXX"
                      required
                      className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#6F60A1] mb-2">Country</label>
                    <input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      placeholder="e.g., Nepal"
                      className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interestedTrek" className="block text-sm font-medium text-[#6F60A1] mb-2">Interested Trek/Expedition</label>
                  <select
                    id="interestedTrek"
                    value={formData.interestedTrek}
                    onChange={(e) => handleInputChange("interestedTrek", e.target.value)}
                    className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none"
                  >
                    <option value="">Select a trek or expedition</option>
                    <option value="everest-base-camp">Everest Base Camp Trek</option>
                    <option value="annapurna-circuit">Annapurna Circuit Trek</option>
                    <option value="langtang-valley">Langtang Valley Trek</option>
                    <option value="manaslu-circuit">Manaslu Circuit Trek</option>
                    <option value="upper-mustang">Upper Mustang Trek</option>
                    <option value="gokyo-lakes">Gokyo Lakes Trek</option>
                    <option value="custom">Custom Trek</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-[#6F60A1] mb-2">Preferred Date</label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium text-[#6F60A1] mb-2">Group Size</label>
                    <select
                      id="groupSize"
                      value={formData.groupSize}
                      onChange={(e) => handleInputChange("groupSize", e.target.value)}
                      className="w-full px-6 py-3 bg-[#DCD6EB] text-[#4B3F73] rounded-full border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none"
                    >
                      <option value="">Select group size</option>
                      <option value="1">Solo (1 person)</option>
                      <option value="2-4">Small Group (2-4 people)</option>
                      <option value="5-8">Medium Group (5-8 people)</option>
                      <option value="9+">Large Group (9+ people)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#6F60A1] mb-2">Additional Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your trekking experience, special requirements, or any questions you have..."
                    rows={4}
                    className="w-full px-6 py-4 bg-[#DCD6EB] text-[#4B3F73] rounded-2xl border-0 focus:ring-2 focus:ring-[#7E6DB0]/40 focus:outline-none placeholder:text-[#6F60A1]/70"
                  />
                </div>

                {/* Policy Summary Box (reverted back inside form) */}
                <div className="rounded-2xl bg-white/70 backdrop-blur px-6 py-5 border border-[#DCD6EB] shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl" aria-hidden>🔎</div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold tracking-wide text-[#6F60A1] uppercase mb-2">Before You Register</h3>
                      <ul className="text-sm text-[#4B3F73] space-y-1">
                        <li>Your information is secure.</li>
                        <li>You can cancel under our policy.</li>
                        <li>Booking requires accurate details.</li>
                        <li>Please click “Agree” to continue.</li>
                      </ul>
                      <label className="mt-4 flex items-center gap-2 text-sm font-medium text-[#6F60A1] select-none">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="h-4 w-4 rounded border-[#7E6DB0] text-[#6F60A1] focus:ring-[#7E6DB0]"
                          aria-required="true"
                        />
                        I understand and agree to the company policies.
                      </label>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="w-full h-11 rounded-full bg-[#7E6DB0] hover:bg-[#6F60A1] text-white disabled:opacity-60" size="lg" disabled={submitting || !agreed}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </div>

            {/* Right: Info panel with image and cards */}
            <div className="flex flex-col h-full">
              {/* Hero card */}
              <div className="bg-[#CFEAE6] rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-sm">
                <div className="max-w-md w-full text-center">
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#6F60A1] mb-6">Get in touch.</h2>
                  <img
                    src={getInTouchImage}
                    alt="Get in touch illustration"
                    className="w-full h-auto mx-auto max-h-[300px] object-contain"
                  />
                </div>
              </div>

              {/* Spacer to control alignment with the form submit button */}
              <div className="flex-1" />

              {/* Info cards grouped with equal gaps */}
              <div className="space-y-6">
                {/* Booking Info card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-[#6F60A1] mb-3">Booking Information</h3>
                  <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                    <li>Provide accurate traveler details for permits and logistics.</li>
                    <li>We’ll confirm availability and send a detailed itinerary.</li>
                    <li>Secure payment options available upon confirmation.</li>
                  </ul>
                </div>

                {/* Assistance card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-[#6F60A1] mb-3">Need Assistance?</h3>
                  <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                    <li>Get help choosing treks based on fitness and time.</li>
                    <li>Ask about gear, acclimatization, and safety preparations.</li>
                    <li>We respond promptly via email or phone.</li>
                  </ul>
                </div>

                {/* Why Choose TrekFinity */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose TrekFinity</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-600">✓</span>
                      <span className="text-gray-700">Expert local guides with 10+ years experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-600">✓</span>
                      <span className="text-gray-700">Personalized trek planning & consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-600">✓</span>
                      <span className="text-gray-700">24/7 emergency support during treks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-600">✓</span>
                      <span className="text-gray-700">Sustainable and responsible tourism practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer-like policy section placed directly below the register form */}
          <section className="mt-10">
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl border bg-white/70 backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F3F1FB] via-[#E9E5F6] to-[#CFEAE6] opacity-60" aria-hidden></div>
                <div className="relative p-6 sm:p-8">
                  <h3 className="text-3xl font-extrabold text-center text-[#6F60A1] mb-6">Company Policies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <Link to="/policies/privacy" className="group rounded-2xl bg-white/80 border border-[#DCD6EB] shadow-sm px-6 py-5 text-center hover:shadow-md hover:border-[#7E6DB0] transition-all">
                      <div className="mx-auto mb-2 h-10 w-10 rounded-xl bg-[#F3F1FB] text-[#6F60A1] flex items-center justify-center group-hover:bg-[#E9E5F6]" aria-hidden>🔒</div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 tracking-wide">Privacy Policy</h4>
                    </Link>
                    <Link to="/policies/terms" className="group rounded-2xl bg-white/80 border border-[#DCD6EB] shadow-sm px-6 py-5 text-center hover:shadow-md hover:border-[#7E6DB0] transition-all">
                      <div className="mx-auto mb-2 h-10 w-10 rounded-xl bg-[#F3F1FB] text-[#6F60A1] flex items-center justify-center group-hover:bg-[#E9E5F6]" aria-hidden>📜</div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 tracking-wide">Terms of Service</h4>
                    </Link>
                    <Link to="/policies/booking" className="group rounded-2xl bg-white/80 border border-[#DCD6EB] shadow-sm px-6 py-5 text-center hover:shadow-md hover:border-[#7E6DB0] transition-all">
                      <div className="mx-auto mb-2 h-10 w-10 rounded-xl bg-[#F3F1FB] text-[#6F60A1] flex items-center justify-center group-hover:bg-[#E9E5F6]" aria-hidden>🧭</div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 tracking-wide">Booking Terms</h4>
                    </Link>
                    <Link to="/policies/cancellation" className="group rounded-2xl bg-white/80 border border-[#DCD6EB] shadow-sm px-6 py-5 text-center hover:shadow-md hover:border-[#7E6DB0] transition-all">
                      <div className="mx-auto mb-2 h-10 w-10 rounded-xl bg-[#F3F1FB] text-[#6F60A1] flex items-center justify-center group-hover:bg-[#E9E5F6]" aria-hidden>⛔</div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 tracking-wide">Cancellation Policy</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section below Company Policies */}
          <section className="mt-10">
            <div className="max-w-5xl mx-auto" ref={faqRef}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: '1. What information does the company collect from clients?',
                    a: 'We collect only the information required to provide safe and reliable trekking services—such as your name, email, phone number, nationality, passport details, and emergency contact. This data helps us arrange permits, prepare logistics, and communicate important updates. We do not collect unnecessary personal information. Your data is stored securely and used solely for travel-related purposes.'
                  },
                  {
                    q: '2. How does the company protect my personal information?',
                    a: 'Your privacy is important to us. All customer data is stored using encrypted systems and secure servers to prevent unauthorized access. We follow strict internal policies to ensure your information is only accessible to authorized staff members involved in your booking. We do not sell or share your information with third parties except for government-related permit processes.'
                  },
                  {
                    q: '3. What happens to my personal data after my trek?',
                    a: 'Your essential booking information is kept only for necessary documentation and legal compliance. Any sensitive identification documents are deleted or archived securely after the trip. You can request data removal at any time, and our team will process this within a few working days. We follow Nepal’s tourism privacy guidelines to ensure your information remains protected.'
                  },
                  {
                    q: '4. What is the cancellation policy for trekking packages?',
                    a: 'If you decide to cancel your trek, you must inform us in writing through email or WhatsApp. According to our policy, 50% of the total package cost is required as a non-refundable cancellation fee, as we make early arrangements such as guides, permits, accommodation, and transportation. If the cancellation occurs very close to the departure date, up to 100% of the cost may apply due to irreversible bookings. We try our best to provide flexibility when possible.'
                  },
                  {
                    q: '5. Can I reschedule my trek instead of cancelling?',
                    a: 'Yes, you can reschedule your trek to a new date without losing the entire amount. However, rescheduling requests must be made at least 15 days before the original start date. Any price differences due to seasonal changes or permit variations may apply. Rescheduling is subject to guide availability and local conditions.'
                  },
                  {
                    q: '6. What is the booking process and required advance payment?',
                    a: 'To confirm your booking, you must pay a small deposit—usually between 20%–30% of the package cost. This deposit helps us secure hotels, flights, guides, and trekking permits in advance. The remaining balance can be paid upon arrival in Nepal or before the trip begins. We accept bank transfers, online payments, and cash payments in Nepal.'
                  },
                  {
                    q: '7. What happens if my trek is cancelled due to weather or natural disasters?',
                    a: 'If weather conditions, landslides, political events, or other unforeseen circumstances affect your trip, we will fully support you in rearranging an alternative route or shifting your trek dates. Because these are unavoidable situations, refunds may follow the general cancellation rules depending on the services already prepared. However, we prioritize safety and will never force you to continue a risky trek.'
                  },
                  {
                    q: '8. Is travel insurance mandatory for trekking in Nepal?',
                    a: 'Yes, travel insurance is strongly recommended for all trekking routes and mandatory for high-altitude treks such as Everest, Annapurna, Langtang, Manaslu, Makalu, and Dolpo. Your insurance should cover emergency helicopter rescue, medical treatment, and trip cancellation. This ensures your safety during unexpected situations at high altitudes.'
                  },
                  {
                    q: '9. What should I do if I need to change the number of trekkers or participant details?',
                    a: 'You can modify your group size or update participant information by contacting our support team. Changes should be made at least one week before the trek so we can adjust permits and accommodations. Additional costs may apply for extra trekkers, while partial cancellations follow our cancellation policy.'
                  },
                  {
                    q: '10. Do you store my payment information?',
                    a: 'No, we do not store your card details or payment information. All online payments are processed through secure third-party gateways with international security standards. This ensures your financial information is protected at all times.'
                  },
                  {
                    q: '11. What are the company’s responsibilities during the trek?',
                    a: 'Our responsibility is to ensure your safety, comfort, and the proper arrangement of all trekking services. We provide trained guides, porters, quality accommodation, safe transportation, and verified trekking routes. We follow ethical trekking practices, maintain environmental guidelines, and prioritize your health during high-altitude travel.'
                  },
                  {
                    q: '12. What are my responsibilities as a trekker?',
                    a: 'Trekkers must provide accurate personal information, follow the guide’s safety instructions, respect local culture, and maintain environmentally friendly behavior. You are also responsible for carrying proper travel insurance and informing us about any medical conditions. Cooperation with the trekking team helps ensure a safe and enjoyable journey.'
                  },
                  {
                    q: '13. What if I experience health issues during the trek?',
                    a: 'Our guides are trained in first aid and altitude sickness response. They will assess your condition, provide immediate care, and arrange evacuation if necessary. Your safety always comes first, and we may recommend descending or stopping the trek if your health is at risk. Travel insurance will cover rescue costs for emergencies.'
                  },
                  {
                    q: '14. Does the company provide refunds for unused services?',
                    a: 'Unused services such as meals, accommodation, early descent, or flight changes are usually non-refundable because these are prepaid to local suppliers. However, we try to support our clients with alternatives whenever possible. Each case is reviewed individually to ensure fairness.'
                  },
                  {
                    q: '15. How can I contact the company in case of emergencies or questions?',
                    a: 'We provide 24/7 support via WhatsApp, phone, email, and social media. During the trek, your guide remains your primary contact, and our Kathmandu office team stays in touch to ensure smooth communication. We respond quickly to all urgent requests.'
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    data-faq-card
                    className="rounded-2xl bg-white shadow-sm border border-gray-200 p-6 transform transition-all duration-500 ease-out opacity-0 translate-y-4 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Registration;