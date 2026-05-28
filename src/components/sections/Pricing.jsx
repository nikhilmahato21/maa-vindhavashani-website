import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

const PLANS = [
  {
    id: 'city',
    label: 'City Ride',
    type: 'Per kilometre',
    price: '₹15',
    unit: '/ km',
    note: 'Minimum ₹200',
    features: ['Within Narkatiyaganj city', '24/7 availability', 'AC comfort', 'Quick pickup'],
    featured: false,
  },
  {
    id: 'outstation',
    label: 'Outstation',
    type: 'Full day rental',
    price: '₹1,500',
    unit: '/ day',
    note: 'Includes 200 km',
    features: ['200 km per day', 'Fuel included', 'Professional driver', 'Door-to-door service'],
    featured: true,
  },
  {
    id: 'hourly',
    label: 'Hourly',
    type: 'Flexible booking',
    price: '₹800',
    unit: '/ 4 hrs',
    note: '4-hour minimum',
    features: ['Multiple stops', 'Driver included', 'Flexible itinerary', 'AC comfort'],
    featured: false,
  },
];

export const Pricing = () => {
  const [active, setActive] = useState('outstation');

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end gap-6 mb-14">
          <span className="text-[#0f0f0f]/8 font-black leading-none select-none" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'rgba(15,15,15,0.07)' }}>02</span>
          <div className="pb-3">
            <p className="text-[#e8b84b] text-xs font-bold tracking-[0.2em] uppercase mb-1">Transparent pricing</p>
            <h2 className="text-[#0f0f0f] font-black text-4xl leading-tight">Our Rates</h2>
          </div>
        </div>

        {/* Tab pills */}
        <div className="flex gap-2 mb-10 bg-[#f5f4ef] rounded-full p-1.5 w-fit">
          {PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActive(plan.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === plan.id
                  ? 'bg-[#0f0f0f] text-white shadow'
                  : 'text-[#0f0f0f]/60 hover:text-[#0f0f0f]'
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-[#0f0f0f] text-white scale-[1.03] shadow-2xl'
                  : 'bg-[#f5f4ef] text-[#0f0f0f]'
              }`}
            >
              {plan.featured && (
                <span className="inline-block bg-[#e8b84b] text-[#0f0f0f] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${plan.featured ? 'text-white/50' : 'text-[#0f0f0f]/40'}`}>
                {plan.type}
              </p>
              <h3 className="text-2xl font-black mb-0.5">{plan.label}</h3>
              <div className="flex items-end gap-1 mt-4 mb-1">
                <span className={`text-5xl font-black ${plan.featured ? 'text-[#e8b84b]' : 'text-[#0f0f0f]'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-2 ${plan.featured ? 'text-white/50' : 'text-[#0f0f0f]/50'}`}>
                  {plan.unit}
                </span>
              </div>
              <p className={`text-xs mb-8 ${plan.featured ? 'text-white/40' : 'text-[#0f0f0f]/40'}`}>
                {plan.note}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className={`flex-shrink-0 rounded-full p-0.5 ${plan.featured ? 'bg-[#e8b84b] text-[#0f0f0f]' : 'bg-[#0f0f0f]/10 text-[#0f0f0f]'}`}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className={plan.featured ? 'text-white/80' : 'text-[#0f0f0f]/70'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${BUSINESS_INFO.phoneLink}`}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-colors ${
                  plan.featured
                    ? 'bg-[#e8b84b] text-[#0f0f0f] hover:bg-yellow-400'
                    : 'bg-[#0f0f0f] text-white hover:bg-[#e8b84b] hover:text-[#0f0f0f]'
                }`}
              >
                Book Now
                <ArrowUpRight size={15} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
