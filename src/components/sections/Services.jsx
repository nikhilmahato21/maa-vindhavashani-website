import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

const SERVICES = [
  {
    id: 1,
    label: 'City Taxi',
    description: 'Quick and reliable rides within Bettiah and surrounding areas. Perfect for daily commutes and short trips.',
    gradient: 'linear-gradient(160deg, #1a1208 0%, #3d2b00 100%)',
    accent: '#e8b84b',
    icon: '🏙️',
  },
  {
    id: 2,
    label: 'Outstation',
    description: 'Long-distance journeys to Patna, Gorakhpur, Muzaffarpur and beyond. Experienced drivers, door-to-door comfort.',
    gradient: 'linear-gradient(160deg, #0a1a0a 0%, #0d3d1a 100%)',
    accent: '#4ade80',
    icon: '🛣️',
  },
  {
    id: 3,
    label: 'Corporate Travel',
    description: 'Professional airport pickups, business meetings, and corporate events. Punctual and dependable every time.',
    gradient: 'linear-gradient(160deg, #0a0a1a 0%, #1a1040 100%)',
    accent: '#818cf8',
    icon: '💼',
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-[#f5f4ef] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end gap-6 mb-14">
          <span className="text-[#0f0f0f]/10 font-black leading-none select-none" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>01</span>
          <div className="pb-3">
            <p className="text-[#e8b84b] text-xs font-bold tracking-[0.2em] uppercase mb-1">What we offer</p>
            <h2 className="text-[#0f0f0f] font-black text-4xl leading-tight">Our Services</h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ background: service.gradient, minHeight: '340px' }}
            >
              {/* Icon */}
              <div className="absolute top-6 left-6 text-4xl">{service.icon}</div>

              {/* Label chip */}
              <div className="absolute top-6 right-6">
                <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {service.label}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/70 text-sm leading-relaxed mb-4">{service.description}</p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneLink}`}
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Book Now
                  <span className="bg-white/20 rounded-full p-1.5 group-hover:bg-[#e8b84b] group-hover:text-[#0f0f0f] transition-colors">
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
          <p className="text-[#0f0f0f]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're travelling for business, leisure, or a family occasion — our 7-seater Ertiga ensures you arrive in comfort and on time.
          </p>
          <a
            href="#pricing"
            className="inline-block mt-6 bg-[#0f0f0f] text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#e8b84b] hover:text-[#0f0f0f] transition-colors"
          >
            View Rates
          </a>
        </div>

      </div>
    </section>
  );
};
