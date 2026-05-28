import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

const SERVICES = [
  {
    id: 1,
    label: 'City Taxi',
    description: 'Quick and reliable rides within Narkatiyaganj and surrounding areas. Perfect for daily commutes and short trips.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    label: 'Outstation',
    description: 'Long-distance journeys to Patna, Gorakhpur, Muzaffarpur and beyond. Experienced drivers, door-to-door comfort.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    label: 'Corporate Travel',
    description: 'Professional airport pickups, business meetings, and corporate events. Punctual and dependable every time.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
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
              style={{ minHeight: '340px' }}
            >
              {/* Background photo */}
              <img
                src={service.image}
                alt={service.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Label chip */}
              <div className="absolute top-5 left-5 z-10">
                <span className="bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/25">
                  {service.label}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-white/75 text-sm leading-relaxed mb-4">{service.description}</p>
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
            Whether you're travelling for business, leisure, or a family occasion — our 4 &amp; 7 seater cabs ensure you arrive in comfort and on time.
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
