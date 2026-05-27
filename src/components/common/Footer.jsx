import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES_LINKS = [
  { label: 'City Taxi', href: '#services' },
  { label: 'Outstation', href: '#services' },
  { label: 'Corporate Travel', href: '#services' },
  { label: 'Airport Transfers', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer style={{ background: '#2a0d0d' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#e8b84b] text-[#0f0f0f] text-xs font-black px-2 py-1 rounded tracking-widest">MAA</span>
              <span className="font-bold text-sm tracking-widest uppercase">Vindhavashani</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your trusted taxi service in Bettiah, Bihar. Comfortable, affordable, and always on time.
            </p>
            <div className="space-y-2">
              <a href={`tel:${BUSINESS_INFO.phoneLink}`} className="flex items-center gap-2 text-white/60 hover:text-[#e8b84b] text-sm transition-colors">
                <Phone size={13} />
                {BUSINESS_INFO.phone}
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2 text-white/60 hover:text-[#e8b84b] text-sm transition-colors">
                <Mail size={13} />
                {BUSINESS_INFO.email}
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={13} />
                {BUSINESS_INFO.location}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-[#e8b84b] text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-white/40 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-[#e8b84b] text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-white/40 mb-5">Book a Ride</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Available 24/7 for city rides, outstation trips, and corporate travel.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phoneLink}`}
              className="inline-block bg-[#e8b84b] text-[#0f0f0f] font-bold text-sm px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
            >
              Call Now
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Maa Vindhavashani Taxi Service. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Bettiah, Bihar, India</p>
        </div>

      </div>
    </footer>
  );
};
