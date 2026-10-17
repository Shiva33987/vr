import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Layers,
  LayoutGrid,
} from 'lucide-react';
import { DynamicIcon } from '@/components/DynamicIcon';
import { SITE_CONFIG } from '@/config/site';
import { motion } from 'framer-motion';

interface ServiceCreative {
  slug: string;
  brandName: string;
  categoryTag: string;
  headline: string;
  subheadline: string;
  specsTag: string;
  accentColor: string;
  imageUrl: string;
  iconName: string;
  metrics: string;
  bullet: string;
  bullets?: string[];
}

const SERVICE_CREATIVES: Record<string, ServiceCreative> = {
  'led-screen-advertising': {
    slug: 'led-screen-advertising',
    brandName: 'VR DIGITAL OOH',
    categoryTag: 'DOOH 4K SCREEN',
    headline: 'Dynamic 4K DOOH Curved Video Wall Takeover',
    subheadline: 'Crafted for high-density 4K LED arterial video walls delivering 7,500 nits visibility',
    specsTag: '7,500 Nits • P4 Curved 4K',
    accentColor: '#E8A317',
    imageUrl: '/images/portfolio/portfolio-curved-led.jpg',
    iconName: 'Tv',
    metrics: '450k+ Daily Commuters',
    bullet: 'Prime junction line-of-sight with dynamic time scheduling.',
    bullets: ['Ultra-bright daylight LED', 'Dynamic loop scheduling', '4K Anamorphic support'],
  },
  'railway-advertising': {
    slug: 'railway-advertising',
    brandName: 'TRANSIT DOMINATION',
    categoryTag: 'TRANSIT MASS CONCOURSE',
    headline: 'Platform & Concourse High-Dwell Transit Branding',
    subheadline: 'Consecutive illuminated pillar displays greeting daily railway passengers',
    specsTag: '12 Consecutive Pillar Displays',
    accentColor: '#3B82F6',
    imageUrl: '/images/portfolio/portfolio-railway-branding.jpg',
    iconName: 'Train',
    metrics: '1.2M+ Monthly Passengers',
    bullet: 'Unbeatable 25-minute average dwell time per commuter.',
    bullets: ['Platform 1-5 dominance', 'Foot-Over-Bridge displays', 'Full train wraps'],
  },
  'outdoor-advertising': {
    slug: 'outdoor-advertising',
    brandName: 'HIGHWAY MONOLITH',
    categoryTag: 'HIGHWAY UNIPOLE',
    headline: '60ft × 30ft Double-Sided Highway Unipole',
    subheadline: 'Commanding cantilever billboard on prime toll corridor with 24/7 illumination',
    specsTag: '60ft × 30ft Monolith',
    accentColor: '#F5C14B',
    imageUrl: '/images/portfolio/portfolio-highway-unipole.jpg',
    iconName: 'Building2',
    metrics: '500k+ Daily Vehicles',
    bullet: 'Continuous 24/7 floodlit illumination on national expressways.',
    bullets: ['Toll plaza vantage points', 'Engineered wind-load certified', 'All-weather flex mounting'],
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    brandName: 'OMNICHANNEL SYNC',
    categoryTag: 'GEO-FENCED MOBILE',
    headline: 'Hyper-Local Mobile Advertising Synced with Billboards',
    subheadline: 'Omnichannel mobile retargeting synced with physical outdoor billboards',
    specsTag: '500m Billboard Radius',
    accentColor: '#EF4444',
    imageUrl: '/images/portfolio/portfolio-mobile-marketing.jpg',
    iconName: 'Share2',
    metrics: '4.8x Avg ROAS',
    bullet: 'Hyper-targeted Meta and Google ads delivered to active travelers.',
    bullets: ['Geo-fenced mobile triggers', 'High-conversion ad funnels', 'Live ROAS telemetry'],
  },
  'events-promotions': {
    slug: 'events-promotions',
    brandName: 'MALL EXPERIENTIAL',
    categoryTag: 'EXPERIENTIAL ATRIUM',
    headline: 'Direct Sampling & Interactive Brand Pavilion',
    subheadline: 'Custom 3D experiential atrium booth with digital prize wheels and engagement kiosks',
    specsTag: 'Turnkey AV & Staging',
    accentColor: '#10B981',
    imageUrl: '/images/portfolio/portfolio-mall-activation.jpg',
    iconName: 'Sparkles',
    metrics: '45k+ Weekend Interactions',
    bullet: 'Custom fabricated 3D modular stalls with interactive game kiosks.',
    bullets: ['Concert-grade acoustics', 'Trained promo hostesses', 'Municipal permissions'],
  },
  'wedding-events': {
    slug: 'wedding-events',
    brandName: 'THE ROYAL MANDAP',
    categoryTag: 'LUXURY WEDDINGS',
    headline: 'Regal Palace Mandap & Architectural Illumination',
    subheadline: 'Bespoke palace floral installations & cinematic LED stages with concert lighting',
    specsTag: 'Turnkey Royal Decor',
    accentColor: '#F5C14B',
    imageUrl: '/images/portfolio/portfolio-wedding-events.jpg',
    iconName: 'HeartHandshake',
    metrics: '100% On-Time Delivery',
    bullet: 'Magnificent architectural stagecraft with concert lighting.',
    bullets: ['Palace themed mandaps', 'Cinematic LED backdrops', 'VIP hospitality setup'],
  },
  'birthday-celebrations': {
    slug: 'birthday-celebrations',
    brandName: 'MILESTONE JUBILEE',
    categoryTag: 'THEMED JUBILEES',
    headline: 'Making Milestones Truly Unforgettable',
    subheadline: '3D customized neon backdrops, metallic balloon arches & experiential stagecraft',
    specsTag: 'Bespoke Theme Production',
    accentColor: '#8B5CF6',
    imageUrl: '/images/portfolio/portfolio-birthday-celebrations.jpg',
    iconName: 'Cake',
    metrics: '500+ Celebrations Executed',
    bullet: 'Full AV sound, cold-pyro effects, and interactive celebration styling.',
    bullets: ['3D Neon signature signage', 'Candy bar styling', 'Dynamic party lighting'],
  },
  'corporate-events': {
    slug: 'corporate-events',
    brandName: 'TECH LEADERSHIP SUMMIT',
    categoryTag: 'CORPORATE CONVENTIONS',
    headline: 'Executive Polish & High-Stakes Tech Galas',
    subheadline: 'Broadcast-grade curved P2.5 indoor video wall & line-array acoustic sound',
    specsTag: 'P2.5 Seamless Video Wall',
    accentColor: '#38BDF8',
    imageUrl: '/images/portfolio/portfolio-corporate-gala.jpg',
    iconName: 'Briefcase',
    metrics: '1,200+ Executive Delegates',
    bullet: 'Zero-glitch technical direction with hybrid live broadcast.',
    bullets: ['Line-array sound systems', 'RFID delegate badges', 'Live remote streaming'],
  },
  'festivals-celebrations': {
    slug: 'festivals-celebrations',
    brandName: 'UTSAV GRAND ILLUMINATION',
    categoryTag: 'PUBLIC FESTIVALS',
    headline: 'Monumental Community Pandals & Cultural Shows',
    subheadline: 'All-weather festive structures & decorative street lighting archways',
    specsTag: '20,000+ Crowd Capacity',
    accentColor: '#F97316',
    imageUrl: '/images/portfolio/portfolio-festivals-celebrations.jpg',
    iconName: 'PartyPopper',
    metrics: '50k+ Peak Footfall Safe',
    bullet: 'Complete police/fire clearances, power redundancy, and stage management.',
    bullets: ['Mega festive street arches', 'Heavy-duty barricading', 'Concert audio setup'],
  },
  'brand-activations': {
    slug: 'brand-activations',
    brandName: 'CORPORATE SAMPLING',
    categoryTag: 'FIELD MARKETING',
    headline: 'Putting Products Directly Into Customer Hands',
    subheadline: 'High-traffic IT park canopies, sampling kiosks & corporate demo stations',
    specsTag: 'Multi-Location Roadshows',
    accentColor: '#E8A317',
    imageUrl: '/images/portfolio/portfolio-brand-activations.jpg',
    iconName: 'Megaphone',
    metrics: '3,000+ Demos / Weekend',
    bullet: 'Trained brand promoters with instant lead capture mobile sync.',
    bullets: ['Mall space leasing', 'Direct customer trial surveys', 'Immediate sales velocity'],
  },
};

const VISIBLE_SLOTS = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

export const SpecializedServicesGrid: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'fan' | 'grid'>('fan');
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | 'center' | null>(null);
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const services = SITE_CONFIG.services;
  const containerRef = useRef<HTMLDivElement>(null);
  const prevSideRef = useRef<'left' | 'right' | 'center' | null>(null);
  const lastMouseXRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const spacing =
    windowWidth < 640
      ? 115
      : windowWidth < 1024
      ? 170
      : windowWidth < 1440
      ? 205
      : windowWidth < 1920
      ? 225
      : 245;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }, [services.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  }, [services.length]);

  // Ambient gentle auto-scroll when not hovering over the container
  useEffect(() => {
    if (viewMode !== 'fan' || isPaused || hoverSide !== null) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3200);

    return () => clearInterval(timer);
  }, [viewMode, isPaused, hoverSide, handleNext]);

  // Active side-hover scroll: repeatedly scrolls in the direction of the cursor side
  useEffect(() => {
    if (viewMode !== 'fan' || !hoverSide || hoverSide === 'center') return;

    // Smooth continuous stepping while cursor rests on either side (600ms pace)
    const timer = setInterval(() => {
      if (hoverSide === 'left') {
        handlePrev();
      } else if (hoverSide === 'right') {
        handleNext();
      }
    }, 600);

    return () => clearInterval(timer);
  }, [hoverSide, viewMode, handlePrev, handleNext]);

  // Track cursor position to trigger immediate response when entering sides
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (viewMode !== 'fan' || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;

    let side: 'left' | 'right' | 'center' = 'center';
    if (ratio < 0.28) {
      side = 'left';
    } else if (ratio > 0.72) {
      side = 'right';
    }

    // Immediately step on entering a side zone from center or outside
    if (side !== prevSideRef.current) {
      if (side === 'left') {
        handlePrev();
      } else if (side === 'right') {
        handleNext();
      }
      prevSideRef.current = side;
    }

    setHoverSide(side);
    setIsPaused(true);
    lastMouseXRef.current = e.clientX;
  };

  const handleMouseLeave = () => {
    setHoverSide(null);
    prevSideRef.current = null;
    lastMouseXRef.current = null;
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
      if (deltaX > 40) {
        handlePrev();
      } else if (deltaX < -40) {
        handleNext();
      }
    }
    touchStartXRef.current = null;
    setIsPaused(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) > 25) {
      if (e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 bg-[#dcdcdc] text-ink relative overflow-hidden" id="specializations">
      {/* Background Lighting & Subtle Pattern on Silver Canvas */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center justify-center gap-1.5 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-sm animate-pulse" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-amber-700 font-display">
              CREATIVE FEED // WE SPECIALIZE IN
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black font-display tracking-tight text-navy-950 uppercase">
            MEDIA SHOWCASE
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
            A refined gallery of visual creatives tailored for modern vertical LED screens, highway unipoles, and high-impact transit corridors.
          </p>

          {/* View Mode Toggle Button */}
          <div className="mt-4 inline-flex items-center p-1 rounded-xl bg-white border border-gray-300 text-xs shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode('fan')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                viewMode === 'fan'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm font-display font-bold'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Media Fan View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm font-display font-bold'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Expanded Catalog View</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- VIEW 1: 3D FANNED MEDIA SHOWCASE (FULL-WIDTH SIDES COVERAGE) --- */}
      {viewMode === 'fan' && (
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full z-10 overflow-hidden"
        >
          {/* Subtle edge fades blending outermost cards seamlessly into background canvas */}
          <div className="absolute left-0 inset-y-0 w-8 sm:w-20 lg:w-32 bg-gradient-to-r from-[#dcdcdc] via-[#dcdcdc]/80 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 sm:w-20 lg:w-32 bg-gradient-to-l from-[#dcdcdc] via-[#dcdcdc]/80 to-transparent z-30 pointer-events-none" />

          {/* 3D Fanned Container with Full Width Perspective & Side Hover Scrolling */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
            className={`relative w-full h-[340px] sm:h-[450px] lg:h-[480px] flex items-center justify-center overflow-hidden py-2 sm:py-4 select-none group/fancarousel ${
              hoverSide === 'left' ? 'cursor-w-resize' : hoverSide === 'right' ? 'cursor-e-resize' : 'cursor-default'
            }`}
          >
            {/* Left Side Glow & Directional Cue */}
            <div
              className={`absolute left-0 inset-y-0 w-20 sm:w-36 z-40 pointer-events-none flex items-center justify-start pl-2 sm:pl-6 transition-all duration-300 ${
                hoverSide === 'left'
                  ? 'opacity-100 bg-gradient-to-r from-gold-500/25 via-gold-500/10 to-transparent'
                  : 'opacity-0'
              }`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-navy-950/90 border border-gold-400 text-gold-400 flex items-center justify-center shadow-2xl animate-pulse">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 font-black" />
              </div>
            </div>

            {/* Right Side Glow & Directional Cue */}
            <div
              className={`absolute right-0 inset-y-0 w-20 sm:w-36 z-40 pointer-events-none flex items-center justify-end pr-2 sm:pr-6 transition-all duration-300 ${
                hoverSide === 'right'
                  ? 'opacity-100 bg-gradient-to-l from-gold-500/25 via-gold-500/10 to-transparent'
                  : 'opacity-0'
              }`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-navy-950/90 border border-gold-400 text-gold-400 flex items-center justify-center shadow-2xl animate-pulse">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 font-black" />
              </div>
            </div>

            {VISIBLE_SLOTS.map((offset) => {
              const serviceIndex =
                ((activeIndex + offset) % services.length + services.length) % services.length;
              const service = services[serviceIndex];
              const creative =
                SERVICE_CREATIVES[service.slug] || SERVICE_CREATIVES['led-screen-advertising'];

              const isActive = offset === 0;
              const rotateDeg = offset * 4.5;
              const translateX = offset * spacing;
              const translateY = isActive ? -20 : Math.abs(offset) * 10;
              const scale = isActive ? 1.05 : Math.max(0.72, 1 - Math.abs(offset) * 0.055);
              const zIndex = 40 - Math.abs(offset) * 3;
              const opacity = isActive ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.11);
              const filter = isActive ? 'none' : 'grayscale(40%) brightness(0.92)';

              return (
                <div
                  key={`slot-${offset}-${service.slug}`}
                  onClick={() => setActiveIndex(serviceIndex)}
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    filter,
                    transition:
                      'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s, filter 0.45s',
                  }}
                  className={`absolute w-[175px] sm:w-[245px] h-[270px] sm:h-[375px] rounded-2xl sm:rounded-3xl cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl border ${
                    isActive
                      ? 'border-gold-500 shadow-2xl ring-3 sm:ring-4 ring-gold-400/40'
                      : 'border-white/40 hover:border-gold-500/70 shadow-lg hover:-translate-y-2'
                  } bg-navy-950 group`}
                >
                  <div
                    className={`w-full h-full relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl ${
                      isActive ? 'animate-slide-up-float' : ''
                    }`}
                  >
                    {/* Rich Photographic Background Image */}
                    <img
                      src={creative.imageUrl}
                      alt={creative.headline}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Scrim Gradients for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/80 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-transparent to-navy-950/90 pointer-events-none" />

                    {/* Top Screen Header Bar */}
                    <div className="relative z-10 p-3.5 pb-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-navy-950/85 backdrop-blur-md border border-white/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[8.5px] font-extrabold uppercase tracking-widest text-gold-300 font-display">
                          {creative.brandName}
                        </span>
                      </div>
                      <span className="text-[7.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-navy-950/80 backdrop-blur-md text-white border border-white/20">
                        {creative.categoryTag}
                      </span>
                    </div>

                    {/* Middle: Headline & Subheadline */}
                    <div className="relative z-10 px-3.5 my-auto text-left py-1.5">
                      <div className="w-8 h-8 rounded-lg bg-navy-950/85 backdrop-blur-md border border-gold-500/40 flex items-center justify-center text-gold-400 mb-2 shadow-lg">
                        <DynamicIcon name={creative.iconName} className="w-4 h-4 text-gold-400" />
                      </div>

                      <h4 className="text-xs sm:text-sm font-black text-white font-display leading-tight line-clamp-3 drop-shadow-lg">
                        {creative.headline}
                      </h4>

                      <p className="text-[10px] sm:text-[11px] text-gray-200 mt-1.5 line-clamp-2 leading-relaxed drop-shadow-md">
                        {creative.subheadline}
                      </p>
                    </div>

                    {/* Bottom Screen Specifications & Telemetry */}
                    <div className="relative z-10 p-3.5 pt-2.5 border-t border-white/20 bg-navy-950/85 backdrop-blur-md flex items-center justify-between text-[9px] sm:text-[10px]">
                      <span className="text-gray-300 font-mono text-[9px]">
                        {creative.specsTag}
                      </span>
                      <span className="font-bold text-gold-400 font-display text-[9px] sm:text-[10px]">
                        {creative.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows & Indicator Dots (Centered below cards) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 relative z-20">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 hover:border-gold-500 text-slate-800 hover:text-gold-600 flex items-center justify-center transition-all shadow-md active:scale-95"
                  aria-label="Previous Creative"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5">
                  {services.map((s, idx) => (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === idx
                          ? 'w-7 bg-royal-600'
                          : 'w-2 bg-gray-400 hover:bg-gray-600'
                      }`}
                      aria-label={`Go to ${s.title}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 hover:border-gold-500 text-slate-800 hover:text-gold-600 flex items-center justify-center transition-all shadow-md active:scale-95"
                  aria-label="Next Creative"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Real-time Interaction Feedback Pill */}
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-600 bg-white/90 backdrop-blur-xs px-2.5 sm:px-3 py-0.5 rounded-full border border-gray-200 shadow-2xs">
                <span className="sm:hidden text-royal-700 font-bold">
                  Swipe left/right or tap arrows to explore
                </span>
                <span className="hidden sm:inline">
                  {hoverSide === 'left' ? (
                    <span className="text-amber-600 font-bold flex items-center gap-1 animate-pulse">
                      <span>←</span> Scrolling Left
                    </span>
                  ) : hoverSide === 'right' ? (
                    <span className="text-amber-600 font-bold flex items-center gap-1 animate-pulse">
                      Scrolling Right <span>→</span>
                    </span>
                  ) : hoverSide === 'center' ? (
                    <span className="text-royal-700 font-bold">
                      Hover sides to scroll • Move cursor left/right
                    </span>
                  ) : (
                    <span className="text-slate-500">
                      Move cursor to sides to scroll
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* --- VIEW 2: EXPANDED 10-SERVICE SHOWCASE GRID WITH IMAGERY (COMPACT 2-COL ON MOBILE) --- */}
      {viewMode === 'grid' && (
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5"
          >
            {services.map((service, index) => {
              const creative = SERVICE_CREATIVES[service.slug] || SERVICE_CREATIVES['led-screen-advertising'];
              const isHiddenOnMobile = !showAllMobile && index >= 6;

              return (
                <div
                  key={service.slug}
                  className={`group relative rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-gold-500 transition-all duration-300 flex-col justify-between overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-lg shadow-2xs ${
                    isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                  }`}
                >
                  {/* Top Photographic Creative Mini-Screen */}
                  <div className="h-28 sm:h-36 md:h-48 relative border-b border-gray-200 overflow-hidden p-2 sm:p-3 flex flex-col justify-between">
                    <img
                      src={creative.imageUrl}
                      alt={creative.headline}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/70" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold text-gold-400 bg-navy-950/80 px-1 sm:px-1.5 py-0.5 rounded">
                        0{index + 1}
                      </span>
                      <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-navy-950/80 text-white border border-white/20">
                        {creative.categoryTag}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-navy-950/80 border border-white/20 flex items-center justify-center text-gold-400 mb-1 sm:mb-1.5">
                        <DynamicIcon name={creative.iconName} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <div className="text-[10px] sm:text-xs font-bold text-white line-clamp-1 sm:line-clamp-2 font-display drop-shadow">
                        {creative.headline}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-2.5 sm:p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-royal-600 transition-colors font-display mb-1 truncate">
                        <Link to={`/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-600 line-clamp-1 sm:line-clamp-2 leading-tight sm:leading-relaxed mb-2 sm:mb-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] sm:text-xs font-semibold">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-slate-600 hover:text-royal-600 flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px]"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 text-royal-600" />
                      </Link>

                      <Link
                        to={`/contact?service=${encodeURIComponent(service.slug)}`}
                        className="text-amber-600 hover:text-amber-700 font-bold text-[10px] sm:text-[11px]"
                      >
                        Quote →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Mobile Expand / Collapse Toggle Button */}
          <div className="sm:hidden mt-4 text-center">
            <button
              type="button"
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-300 text-xs font-bold text-navy-950 shadow-2xs hover:bg-gray-50 active:scale-95 transition-all"
            >
              <span>{showAllMobile ? 'Show Less' : `View All 10 Capabilities (+${services.length - 6} More)`}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showAllMobile ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
