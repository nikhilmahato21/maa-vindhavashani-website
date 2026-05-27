import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! I'm ${form.name}.\n${form.message}\nCall me: ${form.phone}`;
    window.open(`https://wa.me/${BUSINESS_INFO.phoneLink}?text=${encodeURIComponent(msg)}`, '_blank');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[#e8b84b] text-xs font-bold tracking-[0.2em] uppercase mb-3">Get in touch</p>
            <h2 className="text-white font-black text-4xl leading-tight mb-6">
              Ready to ride?<br />Let's talk.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-sm">
              Book a ride, ask about rates, or plan a trip. We're available 24/7 — just call or drop a message.
            </p>

            <div className="space-y-6">
              <a href={`tel:${BUSINESS_INFO.phoneLink}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#e8b84b] transition-colors">
                  <Phone size={18} className="text-[#e8b84b] group-hover:text-[#0f0f0f]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Phone</div>
                  <div className="text-white font-semibold">{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#e8b84b] transition-colors">
                  <Mail size={18} className="text-[#e8b84b] group-hover:text-[#0f0f0f]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Email</div>
                  <div className="text-white font-semibold">{BUSINESS_INFO.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin size={18} className="text-[#e8b84b]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Location</div>
                  <div className="text-white font-semibold">{BUSINESS_INFO.location}</div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#e8b84b] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#e8b84b] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-1.5">Message</label>
                <textarea
                  placeholder="Where do you need to go?"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#e8b84b] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#e8b84b] text-[#0f0f0f] font-bold py-4 rounded-xl hover:bg-yellow-400 transition-colors text-sm tracking-wide mt-2"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
