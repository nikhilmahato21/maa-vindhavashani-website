import React from 'react';

const AREAS = [
  { city: 'Bettiah', state: 'West Champaran', highlight: true },
  { city: 'Motihari', state: 'East Champaran', highlight: false },
  { city: 'Muzaffarpur', state: 'Bihar', highlight: false },
  { city: 'Patna', state: 'Bihar Capital', highlight: false },
  { city: 'Gorakhpur', state: 'Uttar Pradesh', highlight: false },
];

const WHY = [
  { label: 'Experienced Drivers', desc: 'Years of local road expertise, every route mastered.' },
  { label: 'Well-Maintained Ertiga', desc: 'Regular servicing — clean, AC, and road-ready daily.' },
  { label: 'Transparent Pricing', desc: 'No hidden charges. What we quote is what you pay.' },
  { label: 'Always On-Time', desc: 'We respect your schedule. Punctuality is our promise.' },
];

export const About = () => {
  return (
    <section id="about" className="bg-[#f5f4ef] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end gap-6 mb-14">
          <span className="font-black leading-none select-none" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: 'rgba(15,15,15,0.07)' }}>03</span>
          <div className="pb-3">
            <p className="text-[#e8b84b] text-xs font-bold tracking-[0.2em] uppercase mb-1">Where we go</p>
            <h2 className="text-[#0f0f0f] font-black text-4xl leading-tight">Service Routes</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — why choose us */}
          <div>
            <h3 className="text-2xl font-bold text-[#0f0f0f] mb-8">Why choose Maa Vindhavashani?</h3>
            <div className="space-y-6">
              {WHY.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#e8b84b] rounded-full flex items-center justify-center text-[#0f0f0f] font-black text-xs mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f0f0f] mb-1">{item.label}</h4>
                    <p className="text-[#0f0f0f]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — area cards */}
          <div>
            <h3 className="text-2xl font-bold text-[#0f0f0f] mb-8">Cities we serve</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {AREAS.map((area) => (
                <div
                  key={area.city}
                  className={`rounded-xl p-4 border transition-all ${
                    area.highlight
                      ? 'bg-[#0f0f0f] text-white border-[#0f0f0f]'
                      : 'bg-white text-[#0f0f0f] border-[#0f0f0f]/10 hover:border-[#e8b84b]'
                  }`}
                >
                  {area.highlight && (
                    <span className="inline-block text-[10px] bg-[#e8b84b] text-[#0f0f0f] font-black px-2 py-0.5 rounded-full tracking-wide mb-2">
                      BASE
                    </span>
                  )}
                  <div className="font-bold text-base">{area.city}</div>
                  <div className={`text-xs mt-0.5 ${area.highlight ? 'text-white/50' : 'text-[#0f0f0f]/50'}`}>
                    {area.state}
                  </div>
                </div>
              ))}

              {/* "And more" tile */}
              <div className="rounded-xl p-4 border border-dashed border-[#0f0f0f]/20 flex items-center justify-center bg-[#f5f4ef]">
                <span className="text-[#0f0f0f]/40 text-xs font-semibold text-center">+ More on request</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
