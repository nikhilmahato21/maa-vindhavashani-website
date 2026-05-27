import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f0f] shadow-xl' : 'bg-[#0f0f0f]/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <span className="bg-[#e8b84b] text-[#0f0f0f] text-xs font-black px-2 py-1 rounded tracking-widest">MAA</span>
            <span className="text-white font-bold text-sm tracking-widest uppercase hidden sm:block">Vindhavashani</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Phone + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneLink}`}
              className="hidden md:flex items-center gap-2 bg-[#e8b84b] text-[#0f0f0f] text-sm font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors"
            >
              <Phone size={14} />
              {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-[#0f0f0f] border-t border-white/10 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneLink}`}
                className="flex items-center gap-2 bg-[#e8b84b] text-[#0f0f0f] font-bold px-4 py-3 rounded-full text-sm justify-center"
              >
                <Phone size={14} />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
