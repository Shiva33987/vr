import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';

const PROCESS_STEPS_ENHANCED = [
  {
    step: '01',
    phase: 'Strategy',
    title: 'Strategic Brief & Audience Mapping',
    description: 'We analyze your target demographics, geographic priorities, and budget parameters to select the most impactful media inventory.',
    icon: Compass,
    progress: '25%',
  },
  {
    step: '02',
    phase: 'Selection',
    title: 'Location & Inventory Selection',
    description: 'Curating prime LED screens, railway platform sites, and highway unipoles with verified daily traffic counts and maximum line-of-sight visibility.',
    icon: MapPin,
    progress: '50%',
  },
  {
    step: '03',
    phase: 'Production',
    title: 'Creative Production & Flawless Rollout',
    description: 'High-resolution printing, LED color calibration, precision mounting, and live broadcast synchronization monitored by on-ground engineers.',
    icon: Sparkles,
    progress: '75%',
  },
  {
    step: '04',
    phase: 'Auditing',
    title: 'Audit, Proof of Performance & Analytics',
    description: 'Timestamped geo-tagged photo/video audits, uptime telemetry, estimated footfall impressions, and campaign post-evaluation reports.',
    icon: ShieldCheck,
    progress: '100%',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#dcdcdc] text-ink relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <GoldHeadingKicker text="EXECUTION BLUEPRINT" />
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy-950 font-display mt-1.5 sm:mt-3 tracking-tight">
            How Your Campaign Goes Live
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A battle-tested 4-step deployment methodology ensuring zero delays, total legal compliance, and maximum audience resonance.
          </p>
        </div>

        {/* 4-Step Process Grid: Responsive 2-column layout on mobile (< lg), 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {PROCESS_STEPS_ENHANCED.map((step, idx) => {
            const IconComponent = step.icon;

            return (
              <motion.div
                key={step.step}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="relative rounded-xl sm:rounded-2xl bg-white border border-gray-200/90 hover:border-gold-500/80 p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-lg group overflow-hidden"
              >
                {/* Top Subtle Gold Shimmer line on hover */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Step Number & Phase Badge */}
                  <div className="flex items-start justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-navy-950 via-navy-900 to-royal-900 text-gold-400 flex items-center justify-center shadow-xs border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-base sm:text-xl font-black font-mono text-amber-500/90 group-hover:text-amber-600 transition-colors leading-none">
                        {step.step}
                      </span>
                      <span className="text-[7.5px] sm:text-[9.5px] font-bold uppercase tracking-wider text-royal-700 bg-royal-50 px-1.5 py-0.5 rounded-full border border-royal-100 mt-1">
                        {step.phase}
                      </span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-navy-950 font-display mb-1 group-hover:text-royal-600 transition-colors line-clamp-2 min-h-[2rem]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[10px] sm:text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Stage Progress Bar */}
                <div className="mt-3 pt-2.5 sm:mt-4 sm:pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-[8px] sm:text-[9.5px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <span>Stage {idx + 1}/4</span>
                    <span className="text-amber-600 font-mono">{step.progress}</span>
                  </div>
                  <div className="w-full h-1 sm:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-400 to-amber-500 rounded-full transition-all duration-500 group-hover:brightness-110"
                      style={{ width: step.progress }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

