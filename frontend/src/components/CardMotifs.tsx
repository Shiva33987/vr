import React from 'react';

/**
 * Curved Gold Arc Divider transitioning between Navy and White/Mist sections.
 * Inspired by the business card's sweeping arc line.
 */
export const CurvedGoldArcDivider: React.FC<{
  toLight?: boolean; // true = transition from navy to light, false = light to navy
  className?: string;
}> = ({ toLight = true, className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-20 block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arc-gold-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8A317" stopOpacity="0.2" />
            <stop offset="25%" stopColor="#F5C14B" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFF2B2" stopOpacity="1" />
            <stop offset="75%" stopColor="#F5C14B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E8A317" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {toLight ? (
          <>
            {/* Base fill transitioning into mist (#F4F6FB) */}
            <path
              d="M0,80 L1440,80 L1440,20 Q720,70 0,20 Z"
              fill="#F4F6FB"
            />
            {/* Shimmering Gold Arc Line */}
            <path
              d="M0,20 Q720,70 1440,20"
              stroke="url(#arc-gold-glow)"
              strokeWidth="2.5"
              fill="none"
            />
          </>
        ) : (
          <>
            {/* Base fill transitioning into navy (#060E27) */}
            <path
              d="M0,80 L1440,80 L1440,60 Q720,10 0,60 Z"
              fill="#060E27"
            />
            {/* Shimmering Gold Arc Line */}
            <path
              d="M0,60 Q720,10 1440,60"
              stroke="url(#arc-gold-glow)"
              strokeWidth="2.5"
              fill="none"
            />
          </>
        )}
      </svg>
    </div>
  );
};

/**
 * Line-art City Skyline + High-Speed Train + Unipole Billboard Illustration on Navy.
 * Custom SVG graphic directly fulfilling Section 3 visual motif requirements.
 */
export const SkylineHeroIllustration: React.FC<{ className?: string }> = ({
  className = 'w-full h-auto max-w-4xl opacity-25',
}) => {
  return (
    <svg
      viewBox="0 0 1000 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky-blue-fade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3FAE" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#060E27" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gold-track-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E3FAE" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#E8A317" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F5C14B" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Modern High-Rise City Skyline Silhouette */}
      <g stroke="#1E3FAE" strokeWidth="1.2" opacity="0.7">
        {/* Building 1 (Tower with spire) */}
        <path d="M120 220 L120 70 L150 70 L150 220" />
        <line x1="135" y1="70" x2="135" y2="40" stroke="#E8A317" strokeWidth="1.5" />
        {/* Building 2 */}
        <path d="M160 220 L160 110 L210 110 L210 220" />
        <line x1="170" y1="125" x2="200" y2="125" />
        <line x1="170" y1="145" x2="200" y2="145" />
        <line x1="170" y1="165" x2="200" y2="165" />
        {/* Building 3 (Angled modern tower) */}
        <path d="M220 220 L220 90 L270 50 L270 220" />
        <line x1="235" y1="100" x2="255" y2="100" />
        <line x1="235" y1="130" x2="255" y2="130" />
        {/* Center Mega Tower */}
        <path d="M420 220 L420 30 L470 30 L470 220" />
        <circle cx="445" cy="55" r="8" stroke="#E8A317" strokeWidth="1.2" />
        <line x1="432" y1="80" x2="458" y2="80" />
        <line x1="432" y1="100" x2="458" y2="100" />
        <line x1="432" y1="120" x2="458" y2="120" />
        <line x1="432" y1="140" x2="458" y2="140" />
        {/* Right Skyline cluster */}
        <path d="M720 220 L720 85 L760 85 L760 220" />
        <path d="M770 220 L770 120 L810 120 L810 220" />
        <path d="M820 220 L820 60 L850 60 L850 220" />
      </g>

      {/* Monolithic Unipole Billboard on Highway (Left) */}
      <g stroke="#E8A317" strokeWidth="1.5">
        {/* Billboard Frame */}
        <rect x="40" y="80" width="70" height="40" rx="3" fill="#0A1538" stroke="#E8A317" strokeWidth="1.5" />
        {/* Billboard Content Line */}
        <text x="75" y="104" fill="#F5C14B" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          VR MEDIA
        </text>
        {/* Unipole Pillar */}
        <line x1="75" y1="120" x2="75" y2="240" stroke="#3B82F6" strokeWidth="3" />
        <path d="M60 240 L90 240" stroke="#3B82F6" strokeWidth="2" />
      </g>

      {/* Monolithic LED Video Wall (Right) */}
      <g>
        <rect x="880" y="70" width="80" height="45" rx="4" fill="#0A1538" stroke="#E8A317" strokeWidth="1.5" />
        <rect x="884" y="74" width="72" height="37" rx="2" fill="#1E3FAE" fillOpacity="0.4" />
        <text x="920" y="96" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          DOOH LED
        </text>
        <line x1="920" y1="115" x2="920" y2="240" stroke="#1E3FAE" strokeWidth="3" />
      </g>

      {/* Railway Tracks & High-Speed Streamlined Train */}
      <g>
        {/* Dual Train Tracks with Shimmer */}
        <line x1="0" y1="230" x2="1000" y2="230" stroke="url(#gold-track-glow)" strokeWidth="2.5" />
        <line x1="0" y1="240" x2="1000" y2="240" stroke="#1E3FAE" strokeWidth="1.5" opacity="0.6" />
        
        {/* Railway Sleepers / Ties */}
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={i}
            x1={i * 26 + 10}
            y1="228"
            x2={i * 26 + 5}
            y2="242"
            stroke="#102052"
            strokeWidth="1.5"
          />
        ))}

        {/* Streamlined High-Speed Train Body */}
        <path
          d="M 520 228 L 680 228 C 710 228 730 220 740 210 L 730 195 C 720 188 700 188 670 188 L 520 188 Z"
          fill="#0A1538"
          stroke="#E8A317"
          strokeWidth="1.8"
        />
        {/* Train Windshield & Windows */}
        <path d="M 700 192 L 725 198 L 720 205 L 695 205 Z" fill="#3B82F6" opacity="0.8" />
        <rect x="645" y="194" width="35" height="10" rx="2" fill="#3B82F6" opacity="0.8" />
        <rect x="595" y="194" width="35" height="10" rx="2" fill="#3B82F6" opacity="0.8" />
        <rect x="545" y="194" width="35" height="10" rx="2" fill="#3B82F6" opacity="0.8" />
        {/* Gold Train Livery Speed Line */}
        <path d="M 520 214 L 730 214" stroke="#F5C14B" strokeWidth="2" />
        {/* Train Headlight Beam */}
        <polygon points="740,212 860,195 860,235" fill="url(#sky-blue-fade)" />
      </g>
    </svg>
  );
};

/**
 * Gold hairline rule beside kicker headings ("— WE SPECIALIZE IN —")
 */
export const GoldHeadingKicker: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 select-none ${className}`}>
      <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent via-gold-500 to-gold-400" />
      <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold-400 font-display">
        {text}
      </span>
      <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent via-gold-500 to-gold-400" />
    </div>
  );
};
