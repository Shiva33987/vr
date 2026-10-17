import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG, PortfolioItem } from '@/config/site';
import {
  ArrowRight,
  ZoomIn,
  MapPin,
  Eye,
  X,
  Sparkles,
  ShieldCheck,
  Clock,
  Ruler,
  Phone,
  Tag,
} from 'lucide-react';
import { CtaBandSection } from '@/sections/CtaBandSection';

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioCategories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Outdoor OOH', value: 'outdoor-advertising' },
    { label: 'Digital LED Screens', value: 'led-screen-advertising' },
    { label: 'Railway Transit', value: 'railway-advertising' },
    { label: 'Events & Staging', value: 'events-promotions' },
    { label: 'Digital Campaigns', value: 'digital-marketing' },
    { label: 'Corporate Events', value: 'corporate-events' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? SITE_CONFIG.portfolio
      : SITE_CONFIG.portfolio.filter((item) => item.categorySlug === activeFilter);

  return (
    <>
      <SEO
        title="Portfolio & Campaign Installations | South India Outdoor Advertising"
        description="Explore real-world high-density billboard locations, digital LED takeovers, railway platform concourses, and turnkey corporate productions delivered across South India."
        canonicalPath="/portfolio"
      />

      {/* Hero Header */}
      <section className="pt-24 sm:pt-30 pb-3 sm:pb-4 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-2 sm:mb-3">
            <Link to="/" className="hover:text-royal-700">Home</Link>
            <span>/</span>
            <span className="text-royal-700 font-bold">Portfolio</span>
          </nav>

          <GoldHeadingKicker text="PROVEN TRACK RECORD" />
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-display text-navy-950 mt-1.5 sm:mt-2 tracking-tight">
            Campaign Installations &amp; Work
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A comprehensive gallery of commanding line-of-sight billboard sites, arterial 4K LED curved screens, and high-impact experiential activations executed across prime trade nodes.
          </p>

          {/* Trust Performance Telemetry Badges */}
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-gray-200 text-slate-700 text-[10.5px] sm:text-xs font-bold shadow-2xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
              500+ Campaigns Executed
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-gray-200 text-slate-700 text-[10.5px] sm:text-xs font-bold shadow-2xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
              100% On-Ground Proof
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-gray-200 text-slate-700 text-[10.5px] sm:text-xs font-bold shadow-2xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-royal-600 animate-pulse" />
              98% Retention Rate
            </span>
          </div>
        </div>
      </section>

      {/* Main Portfolio Catalog Section */}
      <section className="pt-2 sm:pt-3 pb-12 sm:pb-16 bg-[#dcdcdc] text-ink relative min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Bar */}
          <div className="flex items-center justify-center mb-4 sm:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 px-1 sm:px-2 max-w-full">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeFilter === cat.value
                      ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm font-display font-bold'
                      : 'bg-white text-slate-700 hover:text-navy-950 hover:bg-gray-100 border border-gray-300 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ perspective: '1000px' }}
                className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden group bg-white border border-gray-200 hover:border-gold-500 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Media Section (Top half) */}
                <div
                  className="relative h-32 sm:h-52 lg:h-56 w-full bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-navy-950/60 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 p-2 sm:p-3.5 flex items-center justify-between gap-1">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-navy-950/85 backdrop-blur-md border border-white/20 text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-gold-300 font-display shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="truncate max-w-[80px] sm:max-w-none">{item.category}</span>
                    </span>

                    {item.dimensions && (
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-navy-950/85 backdrop-blur-md border border-white/20 text-[8.5px] font-mono text-gray-200 font-bold shadow-md">
                        {item.dimensions}
                      </span>
                    )}
                  </div>

                  {/* Bottom Telemetry Overlay */}
                  <div className="absolute bottom-0 inset-x-0 z-10 p-2 sm:p-3.5 pt-3 sm:pt-4 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-gray-200 text-[9.5px] sm:text-[11px] font-semibold truncate max-w-[62%]">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>

                    <div className="flex items-center gap-0.5 sm:gap-1 text-emerald-400 font-bold text-[9px] sm:text-[10.5px] font-display shrink-0 bg-navy-950/90 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-500/30">
                      <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span>{item.reach}</span>
                    </div>
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 z-20 bg-navy-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs font-display">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="hidden sm:inline-block bg-navy-950/90 px-3 py-1 rounded-md border border-white/20 shadow-lg text-white font-bold text-xs">
                      Inspect Details
                    </span>
                  </div>
                </div>

                {/* Card Content (Bottom half) */}
                <div className="p-2.5 sm:p-4 lg:p-5 flex-grow flex flex-col justify-between space-y-1.5 sm:space-y-3 bg-white">
                  <div className="space-y-1 sm:space-y-1.5">
                    {/* Tag / Client Row */}
                    <div className="flex items-center justify-between gap-1 sm:gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10.5px] font-bold text-royal-700 bg-royal-50 px-1.5 sm:px-2.5 py-0.5 rounded border border-royal-100 truncate max-w-[70%]">
                        <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-royal-600 shrink-0" />
                        <span className="truncate">{item.client}</span>
                      </span>
                      {item.executionTime && (
                        <span className="text-[8.5px] sm:text-[10px] font-semibold text-slate-500 truncate">
                          {item.executionTime}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-base lg:text-lg font-bold text-navy-950 leading-snug group-hover:text-royal-600 transition-colors line-clamp-1 font-display pt-0.5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[10px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Row with Rotating Action Button */}
                  <div className="flex items-center justify-between pt-2 sm:pt-3.5 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="text-[10px] sm:text-xs font-semibold text-royal-600 hover:text-royal-800 flex items-center gap-0.5 sm:gap-1 focus:outline-none"
                    >
                      <span>Specs</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-royal-600" />
                    </button>

                    <div className="flex items-center gap-1 sm:gap-2">
                      <Link
                        to={`/contact?service=${encodeURIComponent(item.categorySlug)}`}
                        className="text-[11px] font-bold text-slate-700 hover:text-royal-700 hidden sm:inline"
                      >
                        Book Site
                      </Link>
                      <Link
                        to={`/contact?service=${encodeURIComponent(item.categorySlug)}`}
                        title="Book This Location"
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center text-slate-800 transform transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-royal-600 group-hover:text-white shadow-2xs"
                      >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Modal / Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 max-h-[92vh] flex flex-col"
            >
              {/* Modal Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="overflow-y-auto flex-1">
                {/* Modal Top Image */}
                <div className="relative h-48 sm:h-64 lg:h-96 w-full bg-slate-900">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                    <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-royal-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 font-display">
                      {selectedItem.category}
                    </span>
                    <h2 className="text-base sm:text-2xl lg:text-3xl font-black font-display text-white">
                      {selectedItem.title}
                    </h2>
                  </div>
                </div>

                {/* Modal Body Info */}
                <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pb-4 sm:pb-6 border-b border-gray-200">
                    <div className="p-2 sm:p-3 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-1.5 text-[10.5px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-royal-600 shrink-0" />
                        <span>Location</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-navy-950 truncate">
                        {selectedItem.location}
                      </div>
                    </div>

                    <div className="p-2 sm:p-3 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-1.5 text-[10.5px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                        <span>Audited Reach</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-navy-950 truncate">
                        {selectedItem.reach}
                      </div>
                    </div>

                    <div className="p-2 sm:p-3 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-1.5 text-[10.5px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">
                        <Ruler className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 shrink-0" />
                        <span>Dimensions</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-navy-950 truncate">
                        {selectedItem.dimensions || 'Custom Staging'}
                      </div>
                    </div>

                    <div className="p-2 sm:p-3 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-1.5 text-[10.5px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600 shrink-0" />
                        <span>Turnaround</span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-navy-950 truncate">
                        {selectedItem.executionTime || 'Turnkey'}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-1.5 sm:mb-2 font-display">
                      Project Overview &amp; Execution
                    </h3>
                    <p className="text-xs sm:text-base text-slate-700 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* CTA inside Modal */}
                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200">
                    <div className="text-[11px] sm:text-xs text-slate-600 text-center sm:text-left">
                      Looking to book similar high-dwell line-of-sight inventory?
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3 w-full sm:w-auto">
                      <a
                        href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-navy-950 text-gold-400 font-bold text-xs"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Founder</span>
                      </a>
                      <Link
                        to={`/contact?service=${encodeURIComponent(selectedItem.categorySlug)}`}
                        onClick={() => setSelectedItem(null)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold text-xs"
                      >
                        <span>Book Site</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Band */}
      <CtaBandSection />
    </>
  );
};
