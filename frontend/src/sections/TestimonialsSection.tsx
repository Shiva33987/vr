import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = SITE_CONFIG.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#dcdcdc] text-ink relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <GoldHeadingKicker text="CLIENT EXPERIENCES" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 font-display mt-3">
            What Brand Leaders Say
          </h2>
          <p className="mt-3 text-xs text-amber-700 font-semibold">
            (Notice: Sample placeholder quotes displayed below — will be updated with signed client reviews upon campaign sign-offs)
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-gray-200 p-8 sm:p-12 shadow-xl overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 right-8 text-amber-500/15 pointer-events-none">
              <Quote className="w-20 h-20" />
            </div>

            <div className="relative z-10">
              {/* Star Rating & Campaign Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-royal-700 bg-royal-50 border border-royal-200 px-3 py-1 rounded-full">
                  {current.campaignType}
                </span>
              </div>

              {/* Quote Body */}
              <p className="text-base sm:text-xl text-slate-800 leading-relaxed italic mb-8 font-serif">
                &ldquo;{current.content}&rdquo;
              </p>

              {/* Client Profile Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-royal-50 border-2 border-royal-600 flex items-center justify-center text-royal-700 font-bold font-display text-base">
                    {current.clientName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy-950 font-display">
                      {current.clientName}
                    </h4>
                    <p className="text-xs text-amber-700 font-medium">
                      {current.role}, <span className="text-slate-600">{current.company}</span>
                    </p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="text-xs text-slate-500 font-mono font-bold">
                    0{currentIndex + 1} / 0{testimonials.length}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-royal-600' : 'w-2 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
