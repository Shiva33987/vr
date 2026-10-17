import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { DynamicIcon } from '@/components/DynamicIcon';
import { SITE_CONFIG } from '@/config/site';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
} from 'lucide-react';
import { CtaBandSection } from '@/sections/CtaBandSection';

export const ServicesPage: React.FC = () => {
  // Service Category Filter
  const [activeServiceCategory, setActiveServiceCategory] = useState<string>('all');

  const serviceCategories = [
    { label: 'All Services (10)', value: 'all' },
    { label: 'DOOH & LED Screens', value: 'DOOH' },
    { label: 'Transit & Railway', value: 'Transit' },
    { label: 'Outdoor Billboards', value: 'Outdoor' },
    { label: 'Digital Marketing', value: 'Digital' },
    { label: 'Events & Activations', value: 'Events' },
  ];

  const filteredServices =
    activeServiceCategory === 'all'
      ? SITE_CONFIG.services
      : SITE_CONFIG.services.filter((s) => s.category === activeServiceCategory);

  return (
    <>
      <SEO
        title="Advertising & Media Services | 10 Specialized Verticals"
        description="Explore VR Media's 10 specialized advertising verticals: highway unipoles, curved 4K LED video walls, railway platform concourses, digital retargeting, and turnkey experiential events."
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <section className="pt-24 sm:pt-30 pb-3 sm:pb-4 bg-[#dcdcdc] text-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-2 sm:mb-3">
            <Link to="/" className="hover:text-royal-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-royal-700 font-bold">Services</span>
          </nav>

          <GoldHeadingKicker text="FULL-SPECTRUM MEDIA CAPABILITIES // 10 SPECIALIZED VERTICALS" />

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-display mt-1.5 sm:mt-2 text-navy-950 uppercase tracking-tight">
            Our Advertising Services
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
            From prime highway unipoles and curved 4K LED video walls to high-traffic railway stations and experiential corporate activations—explore our 10 specialized media capabilities backed by direct asset ownership.
          </p>
        </div>
      </section>

      {/* 10 Specialized Media Capabilities Catalog */}
      <section className="pt-2 sm:pt-3 pb-12 sm:pb-16 bg-[#dcdcdc] text-ink relative min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Category Filter Bar */}
          <div className="flex items-center justify-center mb-4 sm:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 px-1 sm:px-2 max-w-full">
              {serviceCategories.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setActiveServiceCategory(c.value)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    activeServiceCategory === c.value
                      ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm font-display font-bold'
                      : 'bg-white text-slate-700 hover:text-navy-950 hover:bg-gray-100 border border-gray-300 shadow-2xs'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="rounded-2xl sm:rounded-3xl bg-white border border-gray-200 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl p-3 sm:p-6 lg:p-8 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon + Core Pill Badge */}
                    <div className="flex items-start justify-between gap-1.5 sm:gap-4 mb-2.5 sm:mb-5">
                      <div className="w-8 h-8 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-royal-900 text-gold-400 flex items-center justify-center shadow-md border border-white/10 group-hover:scale-105 group-hover:shadow-gold-500/20 transition-all duration-300 shrink-0">
                        <DynamicIcon name={service.iconName} className="w-4 h-4 sm:w-6 sm:h-6 text-gold-400" />
                      </div>

                      <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-end">
                        {service.isPrimary && (
                          <span className="inline-flex items-center gap-0.5 sm:gap-1 text-[8.5px] sm:text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-200 uppercase tracking-wider font-display">
                            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500" />
                            <span className="hidden sm:inline">Core Asset</span>
                          </span>
                        )}
                        <span className="text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-royal-50 text-royal-700 border border-royal-100">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="text-xs sm:text-xl lg:text-2xl font-black text-navy-950 font-display mb-1 sm:mb-2 group-hover:text-royal-600 transition-colors line-clamp-2 leading-tight">
                      <Link to={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-[10px] sm:text-xs lg:text-sm text-slate-600 leading-tight sm:leading-relaxed mb-2 sm:mb-5 line-clamp-2 sm:line-clamp-none">
                      {service.shortDesc}
                    </p>

                    {/* Key Technical Features List - Desktop full box */}
                    <div className="hidden sm:block space-y-2 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Deployment Specifications
                      </div>
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Technical Features List - Mobile compact bullets */}
                    <div className="sm:hidden space-y-1 mb-2 bg-slate-50/80 p-1.5 rounded-lg border border-slate-200/60">
                      {service.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1 text-[9.5px] text-slate-700 font-medium truncate">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Reach Metric Pill */}
                    {service.metricsSample && (
                      <div className="mb-2 sm:mb-5 inline-flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-royal-50 border border-royal-100 text-royal-800 text-[9px] sm:text-xs font-bold truncate max-w-full">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-royal-600 animate-pulse shrink-0" />
                        <span className="truncate">{service.metricsSample}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-2 sm:pt-4 border-t border-gray-100 flex items-center justify-between gap-1 sm:gap-3 text-[10px] sm:text-xs">
                    <Link
                      to={`/services/${service.slug}`}
                      className="font-bold text-royal-600 hover:text-royal-800 flex items-center gap-0.5 sm:gap-1.5 transition-colors group/link"
                    >
                      <span className="hidden sm:inline">Explore Details</span>
                      <span className="sm:hidden">Details</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.slug)}`}
                      className="inline-flex items-center gap-0.5 sm:gap-1 px-2 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold hover:brightness-105 transition-all text-[9.5px] sm:text-xs shadow-2xs whitespace-nowrap"
                    >
                      <span className="hidden sm:inline">Get Rate Card</span>
                      <span className="sm:hidden">Rate Card</span>
                      <span className="font-black">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dedicated Link Banner to Portfolio */}
          <div className="mt-8 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-gray-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-royal-700 bg-royal-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-royal-100">
                Verified Executions
              </span>
              <h3 className="text-base sm:text-2xl font-black text-navy-950 font-display">
                Want to see our real-world campaigns in action?
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-600 max-w-xl">
                Browse our dedicated portfolio showcasing high-density arterial billboard sites, curved 4K LED video walls, and turnkey experiential staging.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-navy-950 text-gold-400 hover:bg-royal-600 hover:text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider font-display shadow-md transition-all"
              >
                <span>View Portfolio &amp; Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA Band */}
      <CtaBandSection />
    </>
  );
};
