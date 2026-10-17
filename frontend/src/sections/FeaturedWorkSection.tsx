import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, MapPin, Eye, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG, PortfolioItem } from '@/config/site';

export const FeaturedWorkSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Outdoor OOH', value: 'outdoor-advertising' },
    { label: 'Digital LED', value: 'led-screen-advertising' },
    { label: 'Railway Transit', value: 'railway-advertising' },
    { label: 'Events & Activations', value: 'events-promotions' },
    { label: 'Corporate Events', value: 'corporate-events' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? SITE_CONFIG.portfolio
      : SITE_CONFIG.portfolio.filter((item) => item.categorySlug === activeFilter);

  // Multiply items for a true seamless infinite loop buffer
  const loopedItems = React.useMemo(() => {
    if (filteredItems.length === 0) return { list: [], repeatCount: 1 };
    const repeatCount = Math.max(3, Math.ceil(18 / filteredItems.length));
    const list: { item: typeof filteredItems[0]; uniqueKey: string }[] = [];
    for (let r = 0; r < repeatCount; r++) {
      for (let i = 0; i < filteredItems.length; i++) {
        list.push({ item: filteredItems[i], uniqueKey: `${r}-${filteredItems[i].id}-${i}` });
      }
    }
    return { list, repeatCount };
  }, [filteredItems]);

  const getScrollStep = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement;
      if (firstCard) {
        return firstCard.offsetWidth + 16;
      }
    }
    return 315;
  };

  // Seamless Infinite Loop Scroll Handler:
  // When user or auto-scroll reaches near boundary, silently shifts by 1 set with zero visual jump
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el || loopedItems.repeatCount <= 1) return;

    const singleSetWidth = el.scrollWidth / loopedItems.repeatCount;
    if (singleSetWidth <= 0) return;

    if (el.scrollLeft >= singleSetWidth * (loopedItems.repeatCount - 1)) {
      el.scrollLeft -= singleSetWidth;
    } else if (el.scrollLeft <= singleSetWidth * 0.25) {
      el.scrollLeft += singleSetWidth;
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [loopedItems]);

  // Center scroll position at middle set on filter change so user can scroll left or right indefinitely
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || loopedItems.repeatCount <= 1) return;

    const initPosition = () => {
      const singleSetWidth = el.scrollWidth / loopedItems.repeatCount;
      if (singleSetWidth > 0) {
        el.scrollLeft = singleSetWidth * Math.floor(loopedItems.repeatCount / 2);
      }
    };

    const timer = setTimeout(initPosition, 30);
    return () => clearTimeout(timer);
  }, [loopedItems]);

  // Smooth Auto-Scrolling Left-to-Right every 3.2 seconds (never stops, loops infinitely)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      }
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, loopedItems]);

  const handleFilterClick = (catVal: string) => {
    setActiveFilter(catVal);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#dcdcdc] text-ink border-t border-black/10 relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Professional Mobile Hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8">
          <GoldHeadingKicker text="PROVEN TRACK RECORD" />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-navy-950 font-display mt-2 sm:mt-3 tracking-tight">
            Featured Campaigns &amp; Installations
          </h2>
          <p className="mt-2 text-xs sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A cross-section of high-density OOH installations, curved LED boards, and turnkey event staging delivered across prime trade hubs.
          </p>
        </div>

        {/* Filter Tabs & Left-Right Scroll Controls Bar: 1-line smooth horizontal swipe on mobile, wrapped on sm+ */}
        <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleFilterClick(cat.value)}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-200 ${
                  activeFilter === cat.value
                    ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm font-display font-bold'
                    : 'bg-white text-slate-700 hover:text-navy-950 hover:bg-gray-100 border border-gray-300 shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Left / Right Scroll Trigger Buttons (Always active with seamless infinite looping) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-semibold text-slate-500 hidden md:inline mr-1">
              {isPaused ? 'Paused' : 'Auto-scrolling'} • Infinite Loop:
            </span>
            <button
              type="button"
              onClick={handleScrollLeft}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-sm bg-white hover:bg-gold-500 hover:text-navy-950 text-slate-800 border border-gray-300 hover:border-gold-500 active:scale-95"
              aria-label="Scroll left in loop"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleScrollRight}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-sm bg-white hover:bg-gold-500 hover:text-navy-950 text-slate-800 border border-gray-300 hover:border-gold-500 active:scale-95"
              aria-label="Scroll right in loop"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* --- HORIZONTAL CAROUSEL TRACK WITH SHADCN OFFER-CAROUSEL STYLING & ANIMATIONS --- */}
        <div className="relative w-full group/carousel">
          {/* Left Floating Scroll Button */}
          <button
            type="button"
            onClick={handleScrollLeft}
            className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 flex items-center justify-center text-navy-950 transition-all duration-300 shadow-xl opacity-80 sm:opacity-0 group-hover/carousel:opacity-100 hover:bg-gold-500 hover:text-navy-950 active:scale-95"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Floating Scroll Button */}
          <button
            type="button"
            onClick={handleScrollRight}
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 flex items-center justify-center text-navy-950 transition-all duration-300 shadow-xl opacity-80 sm:opacity-0 group-hover/carousel:opacity-100 hover:bg-gold-500 hover:text-navy-950 active:scale-95"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseMove={(e) => {
              const el = scrollContainerRef.current;
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const ratio = x / rect.width;
              if (ratio < 0.15) {
                el.scrollBy({ left: -7, behavior: 'auto' });
              } else if (ratio > 0.85) {
                el.scrollBy({ left: 7, behavior: 'auto' });
              }
            }}
            className="flex items-stretch space-x-4 sm:space-x-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth select-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {loopedItems.list.map((entry) => {
              const item = entry.item;
              return (
                <motion.article
                  key={entry.uniqueKey}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: "1000px" }}
                className="relative flex-shrink-0 w-[295px] sm:w-[315px] md:w-[325px] rounded-2xl overflow-hidden group snap-start bg-card border border-border shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                {/* Media Section (Top half) */}
                <div
                  className="relative h-48 sm:h-52 w-full bg-slate-900 overflow-hidden cursor-pointer"
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
                  <div className="relative z-10 p-3 flex items-center justify-between gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-navy-950/85 backdrop-blur-md border border-white/20 text-[9px] font-black uppercase tracking-wider text-gold-300 font-display shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.category}
                    </span>

                    {item.dimensions && (
                      <span className="px-2 py-0.5 rounded-full bg-navy-950/85 backdrop-blur-md border border-white/20 text-[8.5px] font-mono text-gray-200 font-bold shadow-md">
                        {item.dimensions}
                      </span>
                    )}
                  </div>

                  {/* Bottom Telemetry Overlay */}
                  <div className="absolute bottom-0 inset-x-0 z-10 p-3 pt-4 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1 text-gray-200 text-[10.5px] font-semibold truncate max-w-[62%]">
                      <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>

                    <div className="flex items-center gap-1 text-emerald-400 font-bold text-[10px] font-display shrink-0 bg-navy-950/90 px-1.5 py-0.5 rounded border border-emerald-500/30">
                      <Eye className="w-3 h-3" />
                      <span>{item.reach}</span>
                    </div>
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 z-20 bg-navy-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs font-display">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                    <span className="bg-navy-950/90 px-2.5 py-1 rounded-md border border-white/20 shadow-lg text-white font-bold text-[11px]">
                      Inspect
                    </span>
                  </div>
                </div>

                {/* Card Content (Bottom half matching OfferCard layout) */}
                <div className="bg-card p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Tag / Client Row */}
                    <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-royal-700 bg-royal-50 px-2 py-0.5 rounded-md border border-royal-100 truncate max-w-[65%]">
                        <Tag className="w-3 h-3 text-royal-600" />
                        <span className="truncate">{item.client}</span>
                      </span>
                      {item.executionTime && (
                        <span className="text-[9.5px] font-semibold text-slate-500 truncate">
                          {item.executionTime}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors line-clamp-1 font-display pt-0.5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Row matching OfferCard footer with interactive rotating arrow button */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-border">
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="text-xs font-semibold text-royal-600 hover:text-royal-800 flex items-center gap-1 focus:outline-none"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-royal-600" />
                    </button>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/contact?service=${encodeURIComponent(item.categorySlug)}`}
                        className="text-[11px] font-bold text-slate-700 hover:text-royal-700 hidden sm:inline"
                      >
                        Book Site
                      </Link>
                      <Link
                        to={`/contact?service=${encodeURIComponent(item.categorySlug)}`}
                        title="Book Site"
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground transform transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-primary-foreground shadow-xs"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2 text-[10.5px] font-semibold text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Infinite Loop • Swipe left or right continuously</span>
        </div>

        {/* Horizontal Navigation Hint & View All CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-200/80 pt-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Auto-scrolling {filteredItems.length} campaigns • Hover over any card to pause</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-xs font-bold text-navy-950 uppercase tracking-wider font-display hover:border-gold-500 shadow-sm transition-all active:scale-95"
          >
            <span>Explore Complete Services &amp; Portfolio Hub</span>
            <ArrowRight className="w-3.5 h-3.5 text-royal-600" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/80 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 text-slate-900 my-8">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-navy-950/80 hover:bg-navy-950 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 sm:h-64 w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500 text-navy-950 text-[10px] font-black uppercase tracking-wider mb-1.5 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    {selectedItem.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black font-display text-white tracking-tight drop-shadow-md">
                    {selectedItem.title}
                  </h3>
                </div>

                <div className="text-right bg-navy-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                  <span className="text-[10px] text-gray-300 block font-medium">Verified Velocity</span>
                  <span className="text-emerald-400 font-extrabold font-display text-xs sm:text-sm">
                    {selectedItem.reach}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Location &amp; Corridor Vantage
                </h4>
                <p className="text-sm font-semibold text-navy-950 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                  {selectedItem.location}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Campaign Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block">Client Partner</span>
                  <span className="font-bold text-navy-950 mt-0.5 block truncate">{selectedItem.client}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Dimensions</span>
                  <span className="font-bold text-navy-950 mt-0.5 block">{selectedItem.dimensions || 'Custom'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Turnaround</span>
                  <span className="font-bold text-navy-950 mt-0.5 block">{selectedItem.executionTime || 'Under 24h'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Licensing</span>
                  <span className="font-bold text-royal-600 mt-0.5 block">100% Authorized</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-gray-100">
                <span className="text-xs text-slate-500">
                  Direct site inventory • Exclusive arterial rights
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Link
                    to={`/contact?service=${encodeURIComponent(selectedItem.categorySlug)}`}
                    onClick={() => setSelectedItem(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-black font-display uppercase tracking-wider text-xs shadow-md hover:brightness-105 text-center"
                  >
                    Inquire About This Format
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
