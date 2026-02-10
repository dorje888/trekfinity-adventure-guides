import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/registration" className="hover:underline">Registration</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Booking Terms</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Booking Terms</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">These terms apply when booking a trek or tour with us. Please review the requirements for deposits, documents, and insurance.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-2 bg-white border rounded-xl p-4">
            <h2 className="text-sm font-semibold text-gray-900">On this page</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#confirm" className="hover:text-[#6F60A1]">Booking Confirmation</a></li>
              <li><a href="#payment" className="hover:text-[#6F60A1]">Payment Methods</a></li>
              <li><a href="#documents" className="hover:text-[#6F60A1]">Required Documents</a></li>
              <li><a href="#insurance" className="hover:text-[#6F60A1]">Trek Insurance</a></li>
              <li><a href="#mods" className="hover:text-[#6F60A1]">Trip Modifications</a></li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <article className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
            <section id="confirm" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Booking Confirmation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Required booking deposit (amount varies by package)</li>
                <li>Provide valid personal information</li>
                <li>Send a copy of your passport (if needed for permits)</li>
              </ul>
            </section>

            <section id="payment" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Payment Methods</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Bank transfer</li>
                <li>Credit/debit cards</li>
                <li>eSewa / Khalti (Nepal only)</li>
                <li>International payment gateways (if applicable)</li>
              </ul>
            </section>

            <section id="documents" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Required Documents</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Passport copy</li>
                <li>Valid travel insurance</li>
                <li>Passport-size photos (digital or physical)</li>
              </ul>
            </section>

            <section id="insurance" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Trek Insurance Requirement</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>High altitude coverage</li>
                <li>Emergency helicopter evacuation</li>
                <li>Medical treatment</li>
                <li>Trip delay or interruption</li>
              </ul>
            </section>

            <section id="mods" className="mb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Trip Modifications</h3>
              <p className="text-gray-700">We may adjust the itinerary due to landslides, weather, flight delays, road conditions, or safety concerns. We will attempt to provide equal or better alternatives.</p>
            </section>
          </article>

          <div className="mt-6 flex justify-between text-sm">
            <Link to="/policies/cancellation" className="text-[#6F60A1] hover:underline">Next: Cancellation Policy</Link>
            <Link to="/registration" className="text-gray-600 hover:underline">Back to Registration</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Booking;
