import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero */}
    <section className="border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/registration" className="hover:underline">Registration</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Privacy Policy</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">Your privacy is important to us. This page explains how we collect, use, and protect your information when you interact with our website or book trekking services.</p>
        <p className="mt-3 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </section>

    {/* Content */}
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-2 bg-white border rounded-xl p-4">
            <h2 className="text-sm font-semibold text-gray-900">On this page</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#collect" className="hover:text-[#6F60A1]">Information We Collect</a></li>
              <li><a href="#use" className="hover:text-[#6F60A1]">How We Use Information</a></li>
              <li><a href="#protect" className="hover:text-[#6F60A1]">Data Protection</a></li>
              <li><a href="#cookies" className="hover:text-[#6F60A1]">Cookies</a></li>
              <li><a href="#share" className="hover:text-[#6F60A1]">Third-Party Sharing</a></li>
              <li><a href="#rights" className="hover:text-[#6F60A1]">Your Rights</a></li>
            </ul>
          </div>
        </aside>

        {/* Main */}
        <div className="lg:col-span-9">
          <article className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
            <section id="collect" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Information We Collect</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Full name, contact number, email address</li>
                <li>Passport details (for permits and government documents)</li>
                <li>Emergency contact information</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Website usage data such as IP address, device type, and pages visited</li>
              </ul>
            </section>

            <section id="use" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. How We Use Your Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Confirm bookings and manage your trekking itinerary</li>
                <li>Apply for trekking permits and government-required documents</li>
                <li>Improve customer service and website performance</li>
                <li>Send confirmation emails, updates, and important trip information</li>
                <li>Respond to inquiries or support requests</li>
              </ul>
              <div className="mt-3 rounded-lg border bg-gray-50 p-4 text-sm text-gray-700">We do not sell, trade, or rent your personal information to any third party.</div>
            </section>

            <section id="protect" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Data Protection</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>All personal data is stored securely.</li>
                <li>Payment information is processed through trusted payment gateways (e.g., Stripe, Khalti, eSewa, or bank partners).</li>
                <li>Only authorized staff can access customer data for trip-related purposes.</li>
              </ul>
            </section>

            <section id="cookies" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Cookies</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Improve user experience</li>
                <li>Remember user preferences</li>
                <li>Analyze website traffic</li>
              </ul>
              <p className="text-gray-700 mt-2">You can disable cookies in your browser settings if you prefer.</p>
            </section>

            <section id="share" className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Third-Party Sharing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Local trekking authorities (for TIMS, permits, entry fees)</li>
                <li>Government agencies when required</li>
                <li>Trusted partners such as guides, porters, hotels, and transportation providers</li>
              </ul>
            </section>

            <section id="rights" className="mb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">6. Your Rights</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Request a copy of your personal data</li>
                <li>Ask us to correct or delete your data</li>
                <li>Unsubscribe from promotional emails at any time</li>
              </ul>
            </section>
          </article>

          <div className="mt-6 flex justify-between text-sm">
            <Link to="/policies/terms" className="text-[#6F60A1] hover:underline">Next: Terms of Service</Link>
            <Link to="/registration" className="text-gray-600 hover:underline">Back to Registration</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Privacy;
