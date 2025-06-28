'use client';
import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert(data.error || 'Something went wrong!');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Server error.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="bg-black text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold uppercase mb-4 tracking-wide">Contact Our Team</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Whether it's a big project or just an idea, we’re here to help you bring it to life.
        </p>
      </section>

      {/* Info + Form */}
      <section className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-20">
        {/* Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold uppercase mb-2">Our Office</h3>
            <p className="text-gray-700">123 Software Lane, Lahore, Pakistan</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold uppercase mb-2">Email & Phone</h3>
            <p className="text-gray-700 mb-1">contact@yourcompany.com</p>
            <p className="text-gray-700">+92 300 1234567</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold uppercase mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-black">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-800 cursor-pointer" />
              <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[{ label: 'Projects', value: '50+' }, { label: 'Clients', value: '30+' }, { label: 'Team Size', value: '12' }, { label: 'Years', value: '3+' }].map((stat, idx) => (
              <div key={idx} className="border border-black p-4 rounded-xl text-center hover:bg-black hover:text-white transition">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-black/10 shadow-lg p-8 rounded-2xl space-y-6"
        >
          <div>
            <label className="block text-sm font-medium uppercase mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium uppercase mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium uppercase mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-black text-white px-6 py-2 rounded-full uppercase font-semibold border border-black transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {submitted && (
            <div className="bg-green-100 text-green-700 mt-4 px-4 py-2 rounded text-sm font-medium">
              ✅ Thank you! We'll get back to you shortly.
            </div>
          )}
        </form>
      </section>

      {/* Map Embed */}
      <section className="w-full h-[400px] mt-12">
        <iframe
          title="Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Lahore+Pakistan"
        ></iframe>
      </section>
    </div>
  );
}
