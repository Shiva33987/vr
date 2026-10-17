import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  BarChart3,
  Zap,
  Compass,
  Layers,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';

interface DifferentiatorItem {
  num: string;
  title: string;
  tag: string;
  highlight: string;
  description: string;
  icon: React.ElementType;
  stat: string;
  statLabel: string;
}

const DIFFERENTIATOR_ITEMS: DifferentiatorItem[] = [
  {
    num: '01',
    title: 'Prime High-Footfall Locations',
    tag: 'Arterial Junctions & Concourse',
    highlight: 'Top Tier Reach',
    description: 'Exclusive arterial road junctions, prime transit concourses, and state-of-the-art railway platforms maximizing daily impressions.',
    icon: MapPin,
    stat: '450K+',
    statLabel: 'Daily Visibility',
  },
  {
    num: '02',
    title: 'End-to-End Turnkey Execution',
    tag: 'Fabrication & Licensing',
    highlight: 'Zero Intermediaries',
    description: 'From creative artwork and structural fabrication to government licensing, installation, and real-time photographic proof of display.',
    icon: ShieldCheck,
    stat: '100%',
    statLabel: 'Turnkey Delivery',
  },
  {
    num: '03',
    title: 'Transparent Pricing & ROI',
    tag: 'Direct Inventory Ownership',
    highlight: 'Zero Agency Markup',
    description: 'No hidden agency markups. Direct site inventory ownership guarantees the most competitive media rates in the market.',
    icon: BarChart3,
    stat: '100%',
    statLabel: 'Direct Rates',
  },
  {
    num: '04',
    title: 'Ultra-Fast Turnaround',
    tag: 'Rapid Campaign Rollout',
    highlight: '< 12h Live Go-Live',
    description: 'Rapid campaign rollout capabilities. Have your digital campaigns live across multiple screens in under 12 hours.',
    icon: Zap,
    stat: '< 12h',
    statLabel: 'Activation Speed',
  },
  {
    num: '05',
    title: 'Deep Regional & Local Expertise',
    tag: 'Telangana & Andhra Pradesh',
    highlight: '10+ Years On-Ground',
    description: 'Unmatched insights into consumer footfalls, regional demographics, and municipal regulations across South India.',
    icon: Compass,
    stat: '10+',
    statLabel: 'Years Expertise',
  },
  {
    num: '06',
    title: 'Creative + Media Under One Roof',
    tag: '3D Anamorphic & Staging',
    highlight: 'Full-Service Studio',
    description: 'Full-service graphic and motion design team engineering 3D anamorphic visuals, high-contrast print hoardings, and digital campaigns.',
    icon: Layers,
    stat: '4K',
    statLabel: 'Motion Visuals',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 65 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const AboutDifferentiatorsSection: React.FC = () => {
  return (
    <section className="bg-[#dcdcdc] text-ink pt-4 sm:pt-6 pb-16 sm:pb-24 relative overflow-hidden" id="about-section">
      {/* Ambient Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.22, 0.1],
          x: [0, 25, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-gold-400/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.12, 0.25, 0.12],
          x: [0, -25, 0],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-royal-600/15 rounded-full blur-3xl pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Feature Banner */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 shadow-md border border-gray-200 mb-12 sm:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-royal-600/5 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Founder Avatar & Stamp */}
            <div className="lg:col-span-4 flex flex-col sm:items-center sm:text-center">
              {/* Mobile: Sleek horizontal executive layout | Tablet/Desktop: Centered portrait layout */}
              <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-0 text-left sm:text-center w-full">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full border-3 sm:border-4 border-gold-500 shadow-md sm:shadow-xl overflow-hidden bg-white">
                    <img
                      src={SITE_CONFIG.brand.founder.image}
                      alt={SITE_CONFIG.brand.founder.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:right-2 bg-gold-500 text-navy-950 p-1 sm:p-2 rounded-full shadow-md sm:shadow-lg border-2 border-white"
                    title="Verified Founder"
                  >
                    <Award className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="flex-1 sm:flex-none">
                  <h3 className="text-lg sm:text-2xl font-black text-navy-950 font-display sm:mt-5 tracking-tight leading-snug">
                    {SITE_CONFIG.brand.founder.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-bold text-royal-600 uppercase tracking-widest mt-0.5 sm:mt-1">
                    {SITE_CONFIG.brand.founder.title}
                  </p>

                  <div className="mt-2.5 sm:mt-4 flex flex-wrap items-center gap-2 sm:justify-center">
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:p-2.5 rounded-full bg-navy-950 text-gold-400 hover:bg-royal-600 hover:text-white transition-all text-xs font-semibold shadow-sm"
                      title="Direct Phone Call"
                    >
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="sm:hidden">Call</span>
                    </a>
                    <a
                      href={SITE_CONFIG.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:p-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all text-xs font-semibold shadow-sm"
                      title="Direct WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="sm:hidden">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile hairline divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4 sm:hidden" />
            </div>

            {/* Founder Personal Note */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-600/10 text-royal-700 text-[11px] sm:text-xs font-bold font-display uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-royal-600" />
                Founder&apos;s Commitment
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-950 font-display leading-snug sm:leading-tight">
                &ldquo;In high-stakes advertising, location and execution integrity mean everything.&rdquo;
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed">
                When I founded <strong>VR Media &amp; Advertising</strong>, our mission was simple: eliminate intermediary agency delays, secure the most commanding physical line-of-sight billboard locations, and execute high-tech DOOH digital video networks that make regional and multinational brands truly dominant.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed">
                Whether booking an illuminated railway station concourse, mounting a 60-foot highway unipole, or producing a flagship corporate convention, our direct asset ownership gives you unmatched pricing, instantaneous speed to market, and absolute peace of mind.
              </p>

              <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-royal-600 hover:text-royal-800 uppercase tracking-wider font-display group"
                >
                  <span>Read full corporate overview</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Differentiators Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12"
        >
          <GoldHeadingKicker text="WHY PARTNER WITH US" />
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy-950 font-display mt-1.5 sm:mt-3 tracking-tight">
            Engineered for Measurable Impact
          </h2>
          <p className="mt-2 text-xs sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            The foundational pillars that separate VR Media from traditional media brokers — direct physical asset ownership, zero middleman delays, and uncompromising execution integrity.
          </p>

          {/* Trust Value Badges Strip */}
          <div className="mt-3.5 sm:mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white border border-gray-200 text-slate-700 text-[10px] sm:text-xs font-bold shadow-2xs hover:border-gold-500/60 transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              100% Direct Asset Ownership
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white border border-gray-200 text-slate-700 text-[10px] sm:text-xs font-bold shadow-2xs hover:border-gold-500/60 transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              &lt; 12-Hour Digital Go-Live
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white border border-gray-200 text-slate-700 text-[10px] sm:text-xs font-bold shadow-2xs hover:border-gold-500/60 transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-royal-600 animate-pulse" />
              Zero Agency Broker Markups
            </motion.span>
          </div>
        </motion.div>

        {/* Modern Elevated Bento Grid: Staggered entrance, hover elevation, and interactive sheen */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6"
        >
          {DIFFERENTIATOR_ITEMS.map((diff) => {
            const IconComponent = diff.icon;

            return (
              <motion.article
                key={diff.num}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="relative rounded-xl sm:rounded-3xl bg-white border border-gray-200/90 hover:border-gold-500 p-3 sm:p-6 shadow-2xs hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col justify-between"
              >
                {/* Diagonal Sheen Sweep Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none transition-transform" />

                {/* Ambient Soft Gold/Royal Glow on Card Hover */}
                <div className="absolute -top-14 -right-14 w-32 h-32 bg-gradient-to-br from-gold-400/20 via-royal-600/15 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                {/* Top Subtle Gold Border Glow Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Top Bar: Luminous Icon + Watermark & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-2 sm:mb-4">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-royal-900 text-gold-400 flex items-center justify-center shadow-md border border-white/10 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-gold-500/30 transition-all duration-300 shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 text-gold-400 group-hover:text-gold-300 transition-colors" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-base sm:text-2xl font-black font-mono text-gray-200 group-hover:text-gold-500/70 group-hover:scale-105 transition-all duration-300 leading-none">
                        {diff.num}
                      </span>
                      <span className="text-[7.5px] sm:text-[10px] font-bold uppercase tracking-wider text-royal-700 bg-royal-50 group-hover:bg-royal-100/90 px-1.5 sm:px-2 py-0.5 rounded-full border border-royal-100/80 mt-1 shadow-2xs transition-colors">
                        {diff.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xs sm:text-lg font-black text-navy-950 font-display mb-1 sm:mb-2 group-hover:text-royal-600 transition-colors tracking-tight line-clamp-1 sm:line-clamp-none">
                    {diff.title}
                  </h3>

                  <p className="text-[10px] sm:text-[13px] text-slate-600 line-clamp-2 leading-tight sm:leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                {/* Bottom Key Metric Bar */}
                <div className="relative z-10 pt-2 sm:pt-4 mt-2.5 sm:mt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs sm:text-sm font-black text-navy-950 group-hover:text-royal-700 font-display block leading-none transition-colors">
                      {diff.stat}
                    </span>
                    <span className="text-[8px] sm:text-[9.5px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 block truncate max-w-[85px] sm:max-w-none">
                      {diff.statLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[10.5px] font-semibold text-slate-500 hidden sm:inline truncate max-w-[140px]">
                      {diff.tag}
                    </span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-gradient-to-r group-hover:from-gold-400 group-hover:to-gold-500 group-hover:border-gold-500 group-hover:text-navy-950 text-slate-600 flex items-center justify-center transition-all duration-300 shadow-2xs shrink-0 group-hover:shadow-gold-500/30">
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
