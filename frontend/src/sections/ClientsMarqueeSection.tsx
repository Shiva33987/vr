import React from 'react';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';

export const ClientsMarqueeSection: React.FC = () => {
  const marqueeItems = [...SITE_CONFIG.clientsMarquee, ...SITE_CONFIG.clientsMarquee];

  return (
    <section className="py-14 bg-[#dcdcdc] border-y border-black/10 overflow-hidden" aria-label="Trusted Clients and Brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <GoldHeadingKicker text="TRUSTED BY INDUSTRY LEADERS" />
        <p className="text-xs text-slate-600 mt-2 font-medium">
          Powering Out-Of-Home and experiential presence for leading enterprises across South India.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Track on Silver Background */}
      <div className="relative w-full overflow-hidden mask-gradient">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#dcdcdc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#dcdcdc] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-6 py-2">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-gold-500 transition-colors shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-royal-50 border border-royal-200 flex items-center justify-center text-royal-700 font-bold font-display text-xs">
                {client.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <span className="text-sm font-bold text-navy-950 font-display block whitespace-nowrap">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium block">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
