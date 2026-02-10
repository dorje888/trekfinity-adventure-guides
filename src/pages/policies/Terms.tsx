import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/registration" className="hover:underline">Registration</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Terms of Service</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">By using our website or booking any service, you agree to these terms. Mountain conditions can change and itineraries may be updated for safety.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-2 bg-white border rounded-xl p-4">
            <h2 className="text-sm font-semibold text-gray-900">On this page</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#website" className="hover:text-[#6F60A1]">Use of Website</a></li>
              <li><a href="#accuracy" className="hover:text-[#6F60A1]">Accuracy of Information</a></li>
              <li><a href="#responsibility" className="hover:text-[#6F60A1]">Travel Responsibility</a></li>
              <li><a href="#health" className="hover:text-[#6F60A1]">Health & Safety</a></li>
              <li><a href="#modifications" className="hover:text-[#6F60A1]">Service Modifications</a></li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <article className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
            <section id="website" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Use of Website</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Use for personal, non-commercial purposes.</li>
                <li>Do not misuse or attempt to damage our website or servers.</li>
              </ul>
            </section>

            <section id="accuracy" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Accuracy of Information</h3>
              <p className="text-gray-700">We aim to provide accurate and updated information about trekking routes, itineraries, prices, and services. Weather and local regulations may require real-time adjustments for safety.</p>
            </section>

            <section id="responsibility" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Travel Responsibility</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Ensure fitness matches the trek level.</li>
                <li>Maintain valid travel insurance covering evacuation and medical care.</li>
                <li>Carry passport, visa, and necessary permits.</li>
                <li>Follow guide instructions at all times.</li>
              </ul>
            </section>

            <section id="health" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Health & Safety</h3>
              <p className="text-gray-700">Adventure travel involves risks like altitude sickness and weather changes. Guides may change routes or pace for safety. Injuries resulting from ignoring instructions are not our responsibility.</p>
            </section>

            <section id="modifications" className="mb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Service Modifications</h3>
              <p className="text-gray-700">Services, pricing, or itineraries may be updated due to weather, trail conditions, permits, or safety reasons. We will communicate changes clearly.</p>
            </section>
          </article>

          <div className="mt-6 flex justify-between text-sm">
            <Link to="/policies/booking" className="text-[#6F60A1] hover:underline">Next: Booking Terms</Link>
            <Link to="/registration" className="text-gray-600 hover:underline">Back to Registration</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Terms;
