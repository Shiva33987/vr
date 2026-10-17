import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data governance practices of VR Media & Advertising."
        canonicalPath="/privacy"
      />

      <section className="pt-32 pb-20 bg-[#dcdcdc] text-ink min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
            <Link to="/" className="hover:text-royal-700">Home</Link>
            <span>/</span>
            <span className="text-navy-950 font-bold">Privacy Policy</span>
          </nav>

          <GoldHeadingKicker text="LEGAL GOVERNANCE" className="justify-start" />
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-navy-950 mt-2 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-white/95 p-8 sm:p-10 rounded-3xl border border-slate-300 shadow-md">
            <div className="flex items-center gap-2 text-xs text-gold-600 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Last Updated: January 2025 • VR Media &amp; Advertising</span>
            </div>

            <h2 className="text-lg font-bold text-navy-950 pt-2">1. Introduction &amp; Scope</h2>
            <p>
              VR Media &amp; Advertising (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), under the proprietorship of {SITE_CONFIG.brand.founder.name}, operates out-of-home advertising, digital billboard networks, railway station displays, and experiential marketing activations. This Privacy Policy outlines how we collect, handle, and protect information submitted through our official website.
            </p>

            <h2 className="text-lg font-bold text-navy-950 pt-2">2. Information We Collect</h2>
            <p>
              We only collect information voluntarily submitted through our quotation request forms, direct email communications, or phone/WhatsApp inquiries:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Full name, corporate entity, and job designation</li>
              <li>Contact details: official email address and telephone numbers</li>
              <li>Campaign parameters: preferred billboard corridors, format requirements, and estimated budgets</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-950 pt-2">3. How We Use Information</h2>
            <p>
              Submitted information is used exclusively to generate itemized rate cards, verify inventory availability, draft media agreements, and coordinate on-ground campaign deployments. We never sell, rent, or trade your data to third-party telemarketers.
            </p>

            <h2 className="text-lg font-bold text-navy-950 pt-2">4. Data Security &amp; Edge Protection</h2>
            <p>
              Our infrastructure employs TLS 1.3 encryption, static edge delivery, and rate-limited serverless ingestion endpoints to protect your communications against unauthorized intercept or scraping.
            </p>

            <h2 className="text-lg font-bold text-navy-950 pt-2">5. Contact Information</h2>
            <p>
              For questions regarding this policy or data inquiries, reach out directly to our managing desk at{' '}
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-royal-600 font-semibold underline">
                {SITE_CONFIG.contact.email}
              </a>
              {' '}or call {SITE_CONFIG.contact.phone1}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
