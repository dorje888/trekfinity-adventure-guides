
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Tenzin Sherpa",
      role: "Lead Guide & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "With over 15 years of experience guiding treks through the Himalayas, Tenzin founded TrekTitan to share his passion for Nepal's mountains and culture with adventurers from around the world. He has summited Everest three times and is certified in high-altitude rescue."
    },
    {
      name: "Lakpa Dorje",
      role: "Senior Trek Guide",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Born in the Khumbu region, Lakpa grew up in the shadow of Everest. His intimate knowledge of local trails, weather patterns and culture makes him an invaluable guide. Specializing in the Everest Base Camp and Annapurna Circuit treks, he's known for his patient teaching and storytelling."
    },
    {
      name: "Maya Tamang",
      role: "Cultural Guide & Operations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Maya brings a deep understanding of Nepal's diverse ethnic cultures to our team. With a degree in Tourism Management and fluency in five languages, she ensures smooth operations while helping trekkers connect with local communities, understand traditions, and experience authentic cultural exchanges."
    },
    {
      name: "Karma Bhutia",
      role: "Expedition Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Karma handles the complex logistics behind every successful expedition. From securing permits to arranging transportation and accommodations, his meticulous planning ensures each trek runs smoothly. His background in mountaineering and emergency response adds an extra layer of safety to our expeditions."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About TrekTitan</h1>
            <p className="text-lg text-gray-600">
              Your premier adventure partner in the Himalayas, providing extraordinary trekking experiences with expert local guides.
            </p>
          </div>
        </div>
        <AboutSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="TrekTitan Team" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At TrekTitan, we believe that trekking in the Himalayas should be more than just a physical journey. Our mission is to provide transformative experiences that connect travelers with the magnificent landscapes, rich cultures, and incredible people of Nepal.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We are committed to responsible and sustainable tourism practices that benefit local communities while preserving the natural environment for future generations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="p-5 bg-white rounded-lg shadow-subtle flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Experienced Guides</h3>
                    <p className="text-gray-600">Our guides have 5+ years of professional experience in the Himalayas.</p>
                  </div>
                  <div className="p-5 bg-white rounded-lg shadow-subtle flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Safety Focus</h3>
                    <p className="text-gray-600">Safety is our top priority on every trek and expedition.</p>
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
                Our experienced team of guides and support staff are the heart of TrekTitan, bringing unparalleled expertise and passion to every adventure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-subtle transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-nature-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
