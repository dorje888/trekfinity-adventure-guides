import React from 'react';
import { Link } from 'react-router-dom';

const Cancellation = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/registration" className="hover:underline">Registration</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Cancellation Policy</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Cancellation Policy</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">This policy ensures fairness for both guests and our company. Please review timelines and conditions carefully.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-2 bg-white border rounded-xl p-4">
            <h2 className="text-sm font-semibold text-gray-900">On this page</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#client" className="hover:text-[#6F60A1]">Client-Initiated Cancellation</a></li>
              <li><a href="#deposit" className="hover:text-[#6F60A1]">Booking Deposit</a></li>
              <li><a href="#company" className="hover:text-[#6F60A1]">Company-Initiated Cancellation</a></li>
              <li><a href="#noshow" className="hover:text-[#6F60A1]">No-Show Policy</a></li>
              <li><a href="#interruption" className="hover:text-[#6F60A1]">Travel Interruption</a></li>
              <li><a href="#refund" className="hover:text-[#6F60A1]">Refund Processing</a></li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <article className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
            <section id="client" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Client-Initiated Cancellation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>30+ days before the trip: 50% of the total trip cost charged as a cancellation fee.</li>
                <li>15–29 days before the trip: 70% of the total cost charged.</li>
                <li>14 days or less: No refund (100% of the trip cost charged).</li>
              </ul>
              <p className="text-gray-700 mt-2">Reason: Permit fees, hotel bookings, guide allocation, and logistics are pre-paid in advance.</p>
            </section>

            <section id="deposit" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Booking Deposit</h3>
              <p className="text-gray-700">The initial deposit is non-refundable because permits and internal services are issued immediately and porters/guides are reserved in advance.</p>
            </section>

            <section id="company" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Company-Initiated Cancellation</h3>
              <p className="text-gray-700">If we cancel due to natural disasters, political disturbance, extreme weather, government restrictions, or safety concerns, we will offer a full trip credit for future use or provide an alternative trip of similar value.</p>
            </section>

            <section id="noshow" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. No-Show Policy</h3>
              <p className="text-gray-700">If a guest fails to show up on the starting day, the full amount is charged; no refund.</p>
            </section>

            <section id="interruption" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Travel Interruption</h3>
              <p className="text-gray-700">If the trip is cut short due to illness, injury, altitude sickness, or personal reasons, there will be no refund for unused services. However, we assist in arranging exit, transport, and medical care.</p>
            </section>

            <section id="refund" className="mb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">6. Refund Processing Time</h3>
              <p className="text-gray-700">Refunds take 7–14 business days depending on bank/payment provider.</p>
            </section>
          </article>

          <div className="mt-6 flex justify-between text-sm">
            <Link to="/registration" className="text-gray-600 hover:underline">Back to Registration</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Cancellation;
