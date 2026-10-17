import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Phone, Home } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The requested page could not be located on VR Media & Advertising."
      />

      <section className="min-h-[80vh] flex items-center justify-center py-32 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-royal-600/10 border-2 border-royal-600 flex items-center justify-center text-royal-700 font-black font-display text-3xl mb-6 shadow-sm">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-navy-950 mb-3">
            Location Not Found
          </h1>

          <p className="text-sm text-slate-700 leading-relaxed mb-8">
            The page or media billboard link you are looking for has been relocated or is unavailable. Please return to our main inventory or contact our desk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold font-display uppercase tracking-wider text-xs shadow-md hover:brightness-105 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <a
              href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-navy-950 font-bold text-xs shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-royal-600" />
              <span>Call Founder</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
