import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

export const Hero = () => {
  const [form, setForm] = useState({ from: '', to: '', date: '', seats: '7 Seater' });

  const handleBook = (e) => {
    e.preventDefault();
    const msg = `Hi! I want to book a taxi.\nCab Type: ${form.seats}\nFrom: ${form.from || 'N/A'}\nTo: ${form.to || 'N/A'}\nDate: ${form.date || 'N/A'}`;
    window.open(`https://wa.me/${BUSINESS_INFO.phoneLink}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1208 50%, #0f0f0f 100%)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,184,75,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,184,75,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow accent */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#e8b84b]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Car image — aesthetic background */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <img
          src="https://htcms-prod-images.s3.ap-south-1.amazonaws.com/ht/auto/cms-images/marutisuzuki_ertiga/multi-images/colour_marutisuzuki-ertiga_pearl-metallic-arctic-white_600x400_1600x900.jpg"
          alt=""
          aria-hidden="true"
          className="w-full block"
          style={{
            opacity: 0.38,
            filter: 'brightness(0.28) sepia(0.6) saturate(2.2)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 28%, black 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 28%, black 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            maskComposite: 'intersect',
          }}
        />
        {/* Ground glow beneath car */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 blur-3xl"
          style={{ background: 'rgba(232,184,75,0.14)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — headline */}
          <div>
            <p className="text-[#e8b84b] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Narkatiyaganj, Bihar
            </p>
            <h1 className="text-white font-black leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Your Trusted<br />
              <span className="text-[#e8b84b]">Taxi Service</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Premium 4 &amp; 7 seater cab service in {BUSINESS_INFO.location}. Reliable, comfortable, and available 24/7 for city rides, outstation trips, and corporate travel.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneLink}`}
                className="bg-[#e8b84b] text-[#0f0f0f] font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors text-sm tracking-wide"
              >
                Call to Book
              </a>
              <a
                href="#services"
                className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm tracking-wide"
              >
                Explore Services
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
              {[
                { value: '24/7', label: 'Available' },
                { value: '4 & 7', label: 'Seater options' },
                { value: '100+', label: 'Routes covered' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[#e8b84b] text-2xl font-black">{stat.value}</div>
                  <div className="text-white/50 text-xs mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — booking card */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-[#0f0f0f] px-6 py-4">
                <h3 className="text-white font-bold text-lg">Book a Ride</h3>
                <p className="text-white/50 text-xs mt-0.5">Get instant confirmation via WhatsApp</p>
              </div>
              <form onSubmit={handleBook} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                    Pick Up
                  </label>
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    value={form.from}
                    onChange={(e) => setForm({ ...form, from: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#e8b84b] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                    Drop Off
                  </label>
                  <input
                    type="text"
                    placeholder="Enter destination"
                    value={form.to}
                    onChange={(e) => setForm({ ...form, to: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#e8b84b] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                    Cab Type
                  </label>
                  <div className="flex gap-2">
                    {['4 Seater', '7 Seater'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm({ ...form, seats: type })}
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold border transition-colors ${
                          form.seats === type
                            ? 'bg-[#0f0f0f] text-white border-[#0f0f0f]'
                            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#e8b84b] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0f0f0f] text-white font-bold py-4 rounded-xl hover:bg-[#e8b84b] hover:text-[#0f0f0f] transition-colors text-sm tracking-wide mt-2"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
