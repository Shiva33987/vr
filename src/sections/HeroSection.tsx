import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site';

const headlineStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const withAccentReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.85, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[90vh] flex flex-col justify-between pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 overflow-hidden bg-[#dcdcdc] text-ink">
      {/* Solid Background Video Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-[1.08] origin-top-left opacity-95 brightness-[0.98] contrast-[1.05]"
        >
          <source src="/videos/hero-train-skyline.mp4" type="video/mp4" />
          <source src="/Train_gliding_through_urban_skyline_20261017163550.mp4" type="video/mp4" />
        </video>
        {/* Clean top and bottom fades so video remains solid while merging smoothly with the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-[#dcdcdc]" />
        {/* Corner mask to ensure watermark is 100% hidden */}
        <div className="absolute bottom-0 right-0 w-64 h-36 bg-gradient-to-tl from-[#dcdcdc] via-[#dcdcdc]/60 to-transparent pointer-events-none" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center text-center">

        {/* Master Headline: BRANDS with PEOPLE */}
        <motion.h1
          className="relative text-[32px] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-display uppercase leading-tight sm:leading-none max-w-5xl mx-auto drop-shadow-md select-none"
          variants={headlineStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Ambient luminous gold glow behind headline for high-end depth */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 -top-6 -bottom-6 bg-gradient-to-r from-transparent via-gold-400/25 to-transparent blur-3xl pointer-events-none luxury-ambient-glow"
          />

          <motion.span
            variants={wordReveal}
            className="inline-block text-navy-950 transition-transform duration-300 hover:scale-[1.02]"
          >
            BRANDS{' '}
          </motion.span>

          <motion.span
            variants={withAccentReveal}
            className="font-accent italic font-normal text-amber-500 lowercase text-4xl sm:text-7xl md:text-8xl lg:text-9xl px-1 sm:px-2 relative -top-0.5 sm:-top-2 drop-shadow-sm floating-accent-word"
          >
            with
          </motion.span>

          <motion.span
            variants={wordReveal}
            className="inline-block gold-gradient-animated tracking-tight drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            {' '}PEOPLE
          </motion.span>
        </motion.h1>

        {/* Sub-copy with subtle frosted backdrop for crisp readability on solid video */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3.5 sm:mt-5 text-xs sm:text-base md:text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-xs bg-white/50 backdrop-blur-xs py-2 px-3.5 sm:px-6 rounded-xl sm:rounded-2xl border border-white/40"
        >
          The premier Outdoor, Digital LED, Transit Railway, and Event experiential media network across Andhra Pradesh &amp; Telangana. We turn high-traffic urban corridors into unforgettable brand milestones.
        </motion.p>

        {/* Founder Badge - Prominently Scaled & Responsive on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-sm md:text-base text-slate-800 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-6 sm:py-2.5 rounded-2xl sm:rounded-full border border-slate-300 shadow-md hover:border-gold-500/70 hover:shadow-xl transition-all duration-300 mx-auto max-w-[96%] sm:max-w-none"
        >
          <div className="flex items-center gap-2 sm:gap-2.5">
            <img
              src={SITE_CONFIG.brand.founder.image}
              alt={SITE_CONFIG.brand.founder.name}
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-gold-500 shadow-sm shrink-0"
            />
            <span className="font-medium text-slate-800 text-xs sm:text-sm">
              Proprietor &amp; Founder:{' '}
              <strong className="text-navy-950 font-extrabold tracking-wide">
                {SITE_CONFIG.brand.founder.name}
              </strong>
            </span>
          </div>
          <span className="text-amber-500 font-black hidden sm:inline">•</span>
          <span className="text-royal-700 font-bold text-[10px] sm:text-xs md:text-sm tracking-wide uppercase font-display bg-royal-50 sm:bg-transparent px-2.5 py-0.5 sm:p-0 rounded-full sm:rounded-none">
            Pan-India Transit &amp; DOOH Network
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 font-black font-display uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-gold-500/25 hover:shadow-gold-glow hover:brightness-105 active:scale-95 transition-all duration-200 group"
          >
            <span>Get an Instant Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-navy-950 font-bold text-xs sm:text-sm shadow-md backdrop-blur-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-royal-600" />
            <span>Call Founder Directly</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Telemetry Stats Strip */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-7 sm:mt-9 w-full">
        <div className="bg-white/95 rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-200 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {SITE_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className={`text-center ${idx > 1 ? 'pt-3 md:pt-0' : ''} px-2`}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gold-gradient-text font-display">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-semibold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
