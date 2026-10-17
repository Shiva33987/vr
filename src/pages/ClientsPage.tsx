import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';
import { MapPin, Star } from 'lucide-react';
import { CtaBandSection } from '@/sections/CtaBandSection';

export const ClientsPage: React.FC = () => {
  const hubs = [
    { city: 'Hyderabad', screens: '180+ LED & Hoardings', stations: 'Secunderabad & Nampally Hubs', status: 'Active Dominance' },
    { city: 'Vijayawada', screens: '95+ Prime Corridors', stations: 'Vijayawada Central Junction', status: 'Active Dominance' },
    { city: 'Visakhapatnam', screens: '70+ Coastal Highway Sites', stations: 'Vizag Central Station', status: 'High Traffic' },
    { city: 'Tirupati', screens: '45+ Pilgrim Transit Sites', stations: 'Tirupati Main Concourse', status: 'Massive Footfall' },
    { city: 'Guntur & Warangal', screens: '60+ Regional Arteries', stations: 'Commercial Trade Centers', status: 'Growing Rapidly' },
  ];

  return (
    <>
      <SEO
        title="Clients & Regional Coverage"
        description="VR Media & Advertising works with leading brands across real estate, education, FMCG, and automotive. Discover our high-density media hubs across South India."
        canonicalPath="/clients"
      />

      {/* Page Header on Silver Theme */}
      <section className="pt-32 pb-16 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-4">
            <Link to="/" className="hover:text-royal-700">Home</Link>
            <span>/</span>
            <span className="text-royal-700 font-bold">Clients &amp; Coverage</span>
          </nav>

          <GoldHeadingKicker text="COLLABORATING WITH LEADERS" />
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display mt-3 text-navy-950">
            Client Network &amp; Geographic Reach
          </h1>
          <p className="mt-4 text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            From high-growth regional innovators to nationwide corporate giants, our media infrastructure powers prominent public presence.
          </p>
        </div>
      </section>

      {/* Industry Client Grid */}
      <section className="py-20 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <GoldHeadingKicker text="ENTERPRISE PARTNERS" />
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display mt-2 text-navy-950">
              Industry Verticals We Empower
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {SITE_CONFIG.clientsMarquee.map((client, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gold-500 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-royal-50 border border-royal-200 flex items-center justify-center text-royal-700 font-bold font-display text-lg mb-4">
                  {client.name.substring(0, 2).toUpperCase()}
                </div>
                <h3 className="text-sm font-bold text-navy-950 font-display mb-1">{client.name}</h3>
                <span className="text-[11px] text-slate-500 font-medium">{client.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Hubs Coverage Section */}
      <section className="py-20 bg-[#dcdcdc] border-t border-black/10 text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <GoldHeadingKicker text="REGIONAL MEDIA CORRIDORS" />
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display mt-2 text-navy-950">
              Strategic Advertising Coverage
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Direct inventory ownership across key municipal corporations, transit divisions, and highway nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gold-500 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-royal-700">
                    <MapPin className="w-5 h-5" />
                    <h3 className="text-lg font-bold font-display text-navy-950">{hub.city}</h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {hub.status}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-slate-500">Outdoor Assets:</span>
                    <span className="font-semibold text-navy-950">{hub.screens}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-slate-500">Railway Terminals:</span>
                    <span className="font-semibold text-navy-950">{hub.stations}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Review Strip */}
      <section className="py-20 bg-[#dcdcdc] border-t border-black/10 text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <GoldHeadingKicker text="CLIENT REVIEWS" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display mt-2 text-navy-950">
              Verified Campaign Performance
            </h2>
            <p className="mt-2 text-xs text-amber-700 font-semibold">
              (Sample testimonial placeholders until live case-study signoffs)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_CONFIG.testimonials.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-navy-950 font-display">{test.clientName}</div>
                    <div className="text-[11px] text-slate-500">{test.role}, {test.company}</div>
                  </div>
                  <span className="text-[10px] text-royal-700 bg-royal-50 px-2 py-0.5 rounded font-mono font-semibold">
                    {test.campaignType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBandSection />
    </>
  );
};
