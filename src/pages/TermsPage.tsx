import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service & Media Quotations"
        description="Terms and conditions governing advertising inventory bookings, quotations, and execution with VR Media & Advertising."
        canonicalPath="/terms"
      />

      <section className="pt-32 pb-20 bg-[#dcdcdc] text-ink min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
            <Link to="/" className="hover:text-royal-700">Home</Link>
            <span>/</span>
            <span className="text-navy-950 font-bold">Terms of Service</span>
          </nav>

          <GoldHeadingKicker text="CONTRACTUAL TERMS" className="justify-start" />
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-navy-950 mt-2 mb-8">
            Terms &amp; Media Booking Conditions
          </h1>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-white/95 p-8 sm:p-10 rounded-3xl border border-slate-300 shadow-md">
            <h2 className="text-lg font-bold text-navy-950">1. Quotations &amp; Site Availability</h2>
            <p>
              All online proposals, rate estimates, and billboard site availability indications provided through this website are preliminary and subject to final inventory confirmation and contract execution by VR Media &amp; Advertising.
            </p>

            <h2 className="text-lg font-bold text-navy-950">2. Creative Approvals &amp; Compliance</h2>
            <p>
              Advertisers are solely responsible for ensuring that all supplied artwork, video content, and copy comply with the Advertising Standards Council of India (ASCI), Indian Railways advertising guidelines, and local municipal bylaws. We reserve the right to decline content deemed objectionable, legally restricted, or non-compliant.
            </p>

            <h2 className="text-lg font-bold text-navy-950">3. Installation &amp; Proof of Display</h2>
            <p>
              Campaigns go live following scheduled fabrication and mounting windows. Photographic and geo-tagged proof of performance logs will be provided upon mounting and at recurring audit intervals.
            </p>

            <h2 className="text-lg font-bold text-navy-950">4. Force Majeure &amp; Municipal Directives</h2>
            <p>
              Neither party shall be held liable for temporary display interruptions arising from extreme weather events (cyclones, hurricanes), electrical grid outages, or emergency civic directives. In such events, appropriate display extensions or credit adjustments will be arranged per contract terms.
            </p>

            <h2 className="text-lg font-bold text-navy-950">5. Governing Law</h2>
            <p>
              All contracts and media engagements are governed by the laws of India, subject to the jurisdiction of courts in Hyderabad, Telangana.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
