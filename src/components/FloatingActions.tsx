import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

/**
 * Authentic WhatsApp vector icon with accurate phone handset & speech bubble geometry
 */
const OfficialWhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.27 15.08 13.66 14.85 13.58C14.62 13.5 14.46 13.46 14.3 13.7C14.13 13.95 13.64 14.52 13.49 14.69C13.34 14.85 13.19 14.87 12.94 14.75C12.69 14.62 11.89 14.36 10.94 13.52C10.2 12.86 9.7 12.04 9.55 11.79C9.4 11.54 9.53 11.41 9.66 11.28C9.77 11.17 9.91 10.99 10.03 10.85C10.16 10.7 10.2 10.6 10.28 10.43C10.36 10.27 10.32 10.12 10.26 10C10.2 9.87 9.7 8.65 9.5 8.15C9.3 7.66 9.1 7.73 8.94 7.72L8.46 7.71C8.3 7.71 8.03 7.77 7.8 8.02C7.57 8.27 6.93 8.87 6.93 10.09C6.93 11.31 7.82 12.49 7.94 12.65C8.06 12.82 9.68 15.32 12.16 16.39C12.75 16.65 13.21 16.8 13.57 16.92C14.16 17.11 14.7 17.08 15.13 17.02C15.61 16.95 16.6 16.42 16.81 15.84C17.01 15.26 17.01 14.77 16.95 14.66C16.89 14.56 16.81 14.52 16.56 14.39Z"
    />
  </svg>
);

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end gap-3 select-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-navy-950/90 hover:bg-royal-600 border border-gold-500/40 text-gold-400 hover:text-white flex items-center justify-center shadow-lg hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold-500"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* High-End Commercial WhatsApp Floating Widget */}
      <div className="relative flex items-center group">
        {/* Sleek Expandable Glassmorphic Pill Tooltip on Desktop */}
        <div className="absolute right-full mr-3.5 hidden md:flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out">
          <div className="bg-navy-950/95 text-white py-2 px-3.5 rounded-2xl border border-emerald-500/30 shadow-2xl backdrop-blur-md flex items-center gap-2.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div className="text-left">
              <div className="text-[11px] font-bold text-white font-display leading-tight">
                Quick Campaign Chat
              </div>
              <div className="text-[9.5px] text-emerald-400 font-medium">
                Founder Online • Instant Rates
              </div>
            </div>
            {/* Triangular arrow point */}
            <div className="w-2 h-2 bg-navy-950 border-r border-b border-emerald-500/30 transform rotate-[-45deg] -mr-1" />
          </div>
        </div>

        {/* Floating WhatsApp Action Button */}
        <a
          href={SITE_CONFIG.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#34E774] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45),0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65),0_4px_12px_rgba(0,0,0,0.2)] border-2 border-white/40 hover:border-white transition-all duration-300 transform hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer overflow-visible"
          aria-label="Chat directly with founder Melam Naveen Kumar on WhatsApp"
        >
          {/* Subtle Ambient Pulse Radar Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none" />

          {/* Top Glass Specular Highlight for 3D depth */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-transparent to-black/10 pointer-events-none" />

          {/* Official WhatsApp Logo Vector */}
          <OfficialWhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] relative z-10 transition-transform duration-300 group-hover:scale-110" />

          {/* Live Online Status Badge */}
          <span className="absolute -top-0.5 -right-0.5 z-20 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white shadow-sm" />
          </span>
        </a>
      </div>
    </div>
  );
};
