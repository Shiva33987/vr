import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { DynamicIcon } from '@/components/DynamicIcon';
import { SITE_CONFIG } from '@/config/site';
import { ShieldCheck, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CtaBandSection } from '@/sections/CtaBandSection';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us & Founder Note"
        description="Learn about VR Media & Advertising, founded by Melam Naveen Kumar. South India's trusted leader in OOH media, transit advertising, and high-impact brand activations."
        canonicalPath="/about"
      />

      {/* Page Header */}
      <section className="pt-24 sm:pt-32 pb-6 sm:pb-14 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-3 sm:mb-4">
            <Link to="/" className="hover:text-royal-700">Home</Link>
            <span>/</span>
            <span className="text-royal-700 font-bold">About Us</span>
          </nav>

          <GoldHeadingKicker text="ABOUT VR MEDIA &amp; ADVERTISING" />
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-2 sm:mt-3 text-navy-950">
            Pioneering High-Impact Media Presence
          </h1>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Connecting brands with millions of active consumers through strategically located physical billboards, digital LED networks, and memorable live activations.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-6 sm:py-16 lg:py-20 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-md border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
              {/* Founder Visual Frame */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative">
                  <div className="w-36 h-36 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-gold-500 shadow-xl overflow-hidden bg-white">
                    <img
                      src={SITE_CONFIG.brand.founder.image}
                      alt={SITE_CONFIG.brand.founder.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-3 sm:-bottom-4 -right-1 sm:-right-2 bg-gold-500 text-navy-950 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-[10px] sm:text-xs shadow-lg uppercase tracking-wider font-display">
                    Founder &amp; Visionary
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-navy-950">{SITE_CONFIG.brand.founder.name}</h3>
                  <p className="text-[11px] sm:text-xs text-royal-700 font-bold uppercase tracking-wider mt-0.5">{SITE_CONFIG.brand.founder.title}</p>
                </div>

                <div className="mt-4 sm:mt-6 w-full max-w-xs grid grid-cols-2 gap-2 sm:flex sm:w-auto sm:items-center sm:gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                    className="px-3 sm:px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-slate-800 text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 border border-gray-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                    <span className="truncate">{SITE_CONFIG.contact.phone1}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Founder Manifesto */}
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-royal-50 text-royal-700 text-[11px] sm:text-xs font-bold font-display uppercase tracking-wider border border-royal-200">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-royal-600" />
                  Proprietor&apos;s Message
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold font-display leading-tight text-navy-950">
                  Built on Trust, Prime Media Locations, and Rapid Delivery
                </h2>

                <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed">
                  Welcome to <strong>VR Media &amp; Advertising</strong>. In an era where digital noise is overwhelming, physical presence and unmissable line-of-sight media remain the gold standard for consumer brand recall.
                </p>

                <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed">
                  Under the direct leadership of <strong>Melam Naveen Kumar</strong>, our company was founded to bring corporate professionalism and complete transparency to Out-Of-Home advertising. We own our media locations and equipment, which means our clients get direct pricing, immediate deployment, and total compliance with municipal and transit authorities.
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-2 sm:pt-3">
                  <div className="bg-slate-50/80 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none border border-slate-200/60 sm:border-0 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-slate-800 font-medium leading-tight">100% Legal Permissions &amp; Safety</span>
                  </div>
                  <div className="bg-slate-50/80 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none border border-slate-200/60 sm:border-0 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-slate-800 font-medium leading-tight">Exclusive Railway &amp; Expressway Sites</span>
                  </div>
                  <div className="bg-slate-50/80 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none border border-slate-200/60 sm:border-0 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-slate-800 font-medium leading-tight">Photographic Proof of Display Logs</span>
                  </div>
                  <div className="bg-slate-50/80 sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none border border-slate-200/60 sm:border-0 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-slate-800 font-medium leading-tight">Rapid 12-Hour Emergency Campaign Setup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="py-8 sm:py-16 lg:py-20 bg-[#dcdcdc] border-t border-black/10 text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-14">
            <GoldHeadingKicker text="OUR COMPETITIVE ADVANTAGE" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display mt-1.5 sm:mt-2 text-navy-950">
              Why Brands Trust VR Media
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
            {SITE_CONFIG.differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl bg-white p-3 sm:p-5 lg:p-6 border border-gray-200 hover:border-gold-500 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-royal-50 border border-royal-200 text-royal-700 flex items-center justify-center mb-2.5 sm:mb-4">
                    <DynamicIcon name={diff.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-royal-700" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold font-display text-navy-950 mb-1 sm:mb-2 line-clamp-2 leading-snug">{diff.title}</h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-slate-600 leading-normal sm:leading-relaxed line-clamp-3 sm:line-clamp-none">{diff.description}</p>
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
