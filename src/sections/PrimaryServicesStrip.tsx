import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const PrimaryServicesStrip: React.FC = () => {
  return (
    <section
      id="media-assets"
      className="pt-8 sm:pt-12 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 bg-[#dcdcdc] text-ink relative overflow-hidden"
      aria-label="Core Marketing & Media Pillars"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Main Bento Grid: 2 cols on mobile (< lg), 12 cols on desktop (>= lg) */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-5 lg:gap-6 items-stretch">
          {/* Card 1: Green Hero Card (Top Full-Width on Mobile, Left Top 5-Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="col-span-2 lg:col-span-5 order-1 rounded-2xl sm:rounded-[32px] bg-[#00B37E] p-5 sm:p-8 lg:p-11 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <span className="text-[11px] sm:text-sm font-black tracking-widest text-black/90 uppercase font-display block mb-1.5 sm:mb-3">
                BECAUSE
              </span>
              <h2 className="font-display tracking-tight text-black leading-[1.06]">
                <span className="block font-black italic text-2xl sm:text-4xl lg:text-[44px]">
                  &ldquo;POST AND PRAY&rdquo;
                </span>
                <span className="block font-black not-italic text-2xl sm:text-4xl lg:text-[44px] mt-1 sm:mt-1.5">
                  ISN&apos;T A STRATEGY
                </span>
              </h2>
              <div className="h-[1.5px] bg-black/15 my-4 sm:my-7 lg:my-8" />
            </div>

            <div>
              {/* 3 Metrics */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.3,
                    },
                  },
                }}
                className="grid grid-cols-3 gap-2 sm:gap-4 text-left"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
                  }}
                >
                  <div className="text-xl sm:text-3xl lg:text-[34px] font-black text-black font-display tracking-tight leading-none">
                    50+
                  </div>
                  <div className="text-[9px] sm:text-xs font-bold text-black/80 uppercase tracking-wider font-display mt-1 sm:mt-1.5">
                    BRANDS SCALED
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
                  }}
                >
                  <div className="text-xl sm:text-3xl lg:text-[34px] font-black text-black font-display tracking-tight leading-none">
                    4.2x
                  </div>
                  <div className="text-[9px] sm:text-xs font-bold text-black/80 uppercase tracking-wider font-display mt-1 sm:mt-1.5">
                    AVG. ROAS
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
                  }}
                >
                  <div className="text-xl sm:text-3xl lg:text-[34px] font-black text-black font-display tracking-tight leading-none">
                    10M+
                  </div>
                  <div className="text-[9px] sm:text-xs font-bold text-black/80 uppercase tracking-wider font-display mt-1 sm:mt-1.5">
                    VIEWS DRIVEN
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <div className="mt-5 sm:mt-8">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block w-full sm:w-auto">
                  <Link
                    to="/portfolio"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-black text-white text-[11px] sm:text-xs font-black tracking-wider uppercase font-display hover:bg-neutral-900 transition-all shadow-md group"
                  >
                    <span>EXPLORE ALL OUR WORKS</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Cards 2-5: The 2x2 Pastel Grid (Order 2 on Mobile, Right Top 7-Cols on Desktop) */}
          <div className="col-span-2 lg:col-span-7 order-2 grid grid-cols-2 gap-3.5 sm:gap-5 lg:gap-6">
            {/* Purple Card: LED Screen Advertising */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/services/led-screen-advertising"
                className="rounded-2xl sm:rounded-[32px] bg-[#B2A4D4] p-4 sm:p-7 sm:p-8 block shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xs sm:text-lg lg:text-xl font-black text-black uppercase font-display tracking-tight group-hover:text-neutral-900 transition-colors leading-tight">
                      LED SCREEN ADVERTISING
                    </h3>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/10">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="text-[10.5px] sm:text-xs sm:text-sm font-medium text-black/80 mt-1.5 sm:mt-2.5 leading-snug sm:leading-relaxed">
                    Ultra-bright 4K outdoor LED video walls positioned at high-density traffic junctions.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Lime Card: Railway Advertising */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/services/railway-advertising"
                className="rounded-2xl sm:rounded-[32px] bg-[#CFFF5E] p-4 sm:p-7 sm:p-8 block shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xs sm:text-lg lg:text-xl font-black text-black uppercase font-display tracking-tight group-hover:text-neutral-900 transition-colors leading-tight">
                      RAILWAY ADVERTISING
                    </h3>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/10">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="text-[10.5px] sm:text-xs sm:text-sm font-medium text-black/80 mt-1.5 sm:mt-2.5 leading-snug sm:leading-relaxed">
                    Captive platform hoardings, foot-over-bridges, concourses, and train wraps.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Cream Card 1: Outdoor Hoardings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/services/outdoor-advertising"
                className="rounded-2xl sm:rounded-[32px] bg-[#F8F2E4] p-4 sm:p-7 sm:p-8 block shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xs sm:text-lg lg:text-xl font-black text-black uppercase font-display tracking-tight group-hover:text-neutral-900 transition-colors leading-tight">
                      OUTDOOR HOARDINGS
                    </h3>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/10">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="text-[10.5px] sm:text-xs sm:text-sm font-medium text-black/80 mt-1.5 sm:mt-2.5 leading-snug sm:leading-relaxed">
                    Monolithic highway unipoles, illuminated gantries, and prime expressway hoardings.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Cream Card 2: Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/services/digital-marketing"
                className="rounded-2xl sm:rounded-[32px] bg-[#F8F2E4] p-4 sm:p-7 sm:p-8 block shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xs sm:text-lg lg:text-xl font-black text-black uppercase font-display tracking-tight group-hover:text-neutral-900 transition-colors leading-tight">
                      DIGITAL MARKETING
                    </h3>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/10">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="text-[10.5px] sm:text-xs sm:text-sm font-medium text-black/80 mt-1.5 sm:mt-2.5 leading-snug sm:leading-relaxed">
                    Hyper-local mobile retargeting within 500m of physical hoardings and Meta ad funnels.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Card 6: Pink Card: Events & Promotions (Order 3 on Mobile, Left Bottom 5-Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="col-span-2 lg:col-span-5 order-3"
          >
            <Link
              to="/services/events-promotions"
              className="rounded-2xl sm:rounded-[32px] bg-[#FFD6D6] p-5 sm:p-7 sm:p-8 block shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base sm:text-xl font-black text-black uppercase font-display tracking-tight group-hover:text-neutral-900 transition-colors">
                  EVENTS &amp; PROMOTIONS
                </h3>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/10">
                  <ArrowUpRight className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              <p className="text-[11px] sm:text-sm font-medium text-black/80 mt-2 sm:mt-2.5 leading-relaxed">
                Turnkey event staging, high-impact experiential roadshows, sound &amp; intelligent light production.
              </p>
            </Link>
          </motion.div>

          {/* Card 7: DOOH Video Production Wide Banner (Order 4 on Mobile, Right Bottom 7-Cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="col-span-2 lg:col-span-7 order-4"
          >
            <Link
              to="/services/led-screen-advertising"
              className="rounded-2xl sm:rounded-[32px] relative overflow-hidden min-h-[170px] sm:min-h-[220px] sm:min-h-[260px] flex flex-col justify-end p-5 sm:p-7 lg:p-9 shadow-sm hover:shadow-2xl transition-all duration-300 group block"
            >
              {/* Production Set Backdrop */}
              <img
                src="/images/portfolio/portfolio-curved-led.jpg"
                alt="DOOH Video Commercial Production"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

              {/* Content overlay */}
              <div className="relative z-10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white uppercase font-display tracking-tight drop-shadow-md">
                    DOOH VIDEO PRODUCTION
                  </h3>
                  <p className="text-[11px] sm:text-sm font-medium text-white/95 mt-1 leading-relaxed drop-shadow">
                    High-impact 4K cinematic visuals and dynamic motion content designed to go viral.
                  </p>
                </div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white text-white group-hover:text-navy-950">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
