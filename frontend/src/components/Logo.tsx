import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light'; // dark = for navy backgrounds (light text), light = for white/light backgrounds (dark text)
  compact?: boolean; // Show only the monogram without the full text underneath
  badge?: boolean; // Wrap in an elevated, highlighted white container badge
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'dark',
  compact = false,
  badge = false,
}) => {
  const isDarkBg = variant === 'dark';
  const wordmarkColor = isDarkBg ? '#FFFFFF' : '#060E27';
  const advertisingColor = isDarkBg ? '#F5C14B' : '#B47500';
  const taglineColor = isDarkBg ? '#F5C14B' : '#0E1D5B';

  const logoContent = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto overflow-visible"
        aria-label="VR Media & Advertising Logo"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="vr-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="45%" stopColor="#1E3FAE" />
            <stop offset="100%" stopColor="#0E1D5B" />
          </linearGradient>

          <linearGradient id="vr-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4C4" />
            <stop offset="30%" stopColor="#F5C14B" />
            <stop offset="70%" stopColor="#E8A317" />
            <stop offset="100%" stopColor="#A86800" />
          </linearGradient>

          <linearGradient id="vr-swoosh-grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#1E3FAE" stopOpacity="0.25" />
            <stop offset="40%" stopColor="#1E3FAE" />
            <stop offset="75%" stopColor="#E8A317" />
            <stop offset="100%" stopColor="#F5C14B" stopOpacity="0.9" />
          </linearGradient>

          {/* Dimensional Drop Shadow for Crisp Visual Pop */}
          <filter id="vr-monogram-shadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#060E27" floodOpacity="0.22" />
          </filter>

          <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Group with Dimensional Drop Shadow */}
        <g filter="url(#vr-monogram-shadow)">
          {/* Monogram V (Royal Blue Gradient with dynamic geometric slant) */}
          <path
            d="M 12 18 L 32 18 L 48 76 L 62 18 L 80 18 L 56 94 L 40 94 Z"
            fill="url(#vr-blue-grad)"
          />

          {/* Monogram R (Rich Gold Metallic Gradient) */}
          <path
            d="M 68 18 L 102 18 C 118 18 128 26 128 40 C 128 50 122 58 112 62 L 132 94 L 112 94 L 94 65 L 86 65 L 86 94 L 68 94 Z M 86 34 L 86 50 L 100 50 C 107 50 111 46 111 42 C 111 37 107 34 100 34 Z"
            fill="url(#vr-gold-grad)"
          />

          {/* Pixel-Mosaic Squares trailing off top-right (Blue + Gold) */}
          {/* Gold pixel clusters */}
          <rect x="132" y="14" width="8" height="8" rx="1.5" fill="#F5C14B" opacity="0.98" />
          <rect x="144" y="8" width="6" height="6" rx="1" fill="#E8A317" opacity="0.9" />
          <rect x="135" y="26" width="7" height="7" rx="1.5" fill="#F3B736" opacity="0.95" />
          <rect x="146" y="20" width="5" height="5" rx="1" fill="#FFDB6E" opacity="0.85" />
          <rect x="154" y="14" width="4" height="4" rx="0.8" fill="#F5C14B" opacity="0.75" />

          {/* Blue pixel clusters */}
          <rect x="126" y="6" width="7" height="7" rx="1.5" fill="#2A52D4" opacity="0.95" />
          <rect x="116" y="4" width="6" height="6" rx="1" fill="#1E3FAE" opacity="0.85" />
          <rect x="145" y="30" width="5" height="5" rx="1" fill="#3B82F6" opacity="0.8" />

          {/* Dynamic Curved Swoosh sweeping under the letters (Navy/Royal/Gold) */}
          <path
            d="M 6 102 C 30 116 80 118 136 98 C 146 94 152 90 156 86 C 148 93 130 106 88 108 C 50 110 24 104 6 102 Z"
            fill="url(#vr-swoosh-grad)"
          />
          {/* Accent swoosh highlight spark */}
          <circle cx="148" cy="91" r="2.5" fill="#FFF1B8" filter="url(#gold-glow)" />
        </g>
      </svg>

      {!compact && (
        <div className="flex flex-col justify-center leading-none select-none">
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <span
              className="font-black tracking-wider text-sm sm:text-xl font-display whitespace-nowrap"
              style={{ color: wordmarkColor }}
            >
              VR MEDIA
            </span>
            <span
              className="font-extrabold text-[10px] sm:text-sm tracking-wider sm:tracking-widest font-display whitespace-nowrap"
              style={{ color: advertisingColor }}
            >
              &amp; ADVERTISING
            </span>
          </div>
          <span
            className="text-[8px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.24em] font-bold uppercase mt-0.5 sm:mt-1 whitespace-nowrap"
            style={{ color: taglineColor }}
          >
            Connecting Brands with People
          </span>
        </div>
      )}
    </div>
  );

  if (badge) {
    return (
      <div className="bg-white/95 hover:bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl shadow-sm hover:shadow-md border border-slate-300 hover:border-gold-500/70 transition-all duration-300 inline-flex items-center">
        {logoContent}
      </div>
    );
  }

  return logoContent;
};
