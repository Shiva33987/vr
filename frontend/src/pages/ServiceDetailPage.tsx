import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';
import { CheckCircle2, ArrowRight, MapPin, BarChart3, Phone, MessageCircle } from 'lucide-react';
import { CtaBandSection } from '@/sections/CtaBandSection';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SITE_CONFIG.services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SITE_CONFIG.services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.brand.name,
      telephone: SITE_CONFIG.contact.phone1,
      email: SITE_CONFIG.contact.email,
    },
    description: service.shortDesc,
    areaServed: 'Andhra Pradesh, Telangana, India',
  };

  return (
    <>
      <SEO
        title={`${service.title} — Inventory & Specifications`}
        description={service.shortDesc}
        canonicalPath={`/services/${service.slug}`}
        schema={serviceSchema}
      />

      {/* Hero Header on Silver Theme */}
      <section className="pt-24 sm:pt-32 pb-6 sm:pb-16 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-3 sm:mb-6">
            <Link to="/" className="hover:text-royal-700">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-royal-700">Services</Link>
            <span>/</span>
            <span className="text-royal-700 font-bold">{service.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-royal-50 border border-royal-200 text-royal-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-royal-600 animate-ping" />
                <span>{service.category} Category</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 leading-tight">
                {service.title}
              </h1>

              <p className="mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            {/* Quick Action Card in Hero */}
            <div className="shrink-0 p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 max-w-sm w-full shadow-md">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Direct Booking Hotline
              </span>
              <a
                href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                className="text-base sm:text-lg font-bold text-navy-950 hover:text-royal-600 block mb-3 sm:mb-4"
              >
                {SITE_CONFIG.contact.phone1}
              </a>

              <Link
                to={`/contact?service=${encodeURIComponent(service.slug)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold font-display uppercase tracking-wider text-xs shadow-md hover:brightness-105 transition-all"
              >
                <span>Request Custom Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail Content Grid on Silver Theme */}
      <section className="py-8 sm:py-16 lg:py-20 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-12">
              <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-gray-200 shadow-md space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-2xl font-bold font-display text-navy-950">
                  Media Overview &amp; Market Advantage
                </h2>
                <p className="text-xs sm:text-base text-slate-700 leading-relaxed">
                  {service.longDesc}
                </p>
              </div>

              {/* What the Client Gets */}
              <div className="space-y-4">
                <GoldHeadingKicker text="DELIVERABLES &amp; SCOPE" className="justify-start" />
                <h2 className="text-2xl font-bold font-display text-navy-950">
                  What You Receive with this Campaign
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Features */}
              <div className="space-y-4">
                <GoldHeadingKicker text="CAPABILITIES" className="justify-start" />
                <h2 className="text-2xl font-bold font-display text-navy-950">
                  Key Technical Features &amp; Quality Standards
                </h2>

                <div className="space-y-3 pt-2">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-royal-100 text-royal-700 flex items-center justify-center shrink-0 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl bg-white p-6 border border-gray-200 shadow-md space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-royal-700 font-display mb-2">
                    Ideal For
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-royal-700 font-display mb-2 flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4" />
                    Impact Metric
                  </h3>
                  <div className="p-3 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                    {service.metricsSample}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-royal-700 font-display mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    Key Location Nodes
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {service.locationsSample.map((loc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-amber-500">•</span>
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.slug)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 font-black font-display uppercase tracking-wider text-xs shadow-sm hover:brightness-105 transition-all"
                  >
                    <span>Get a Quote for this Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="mt-3 flex items-center justify-center gap-3 text-xs">
                    <a
                      href={SITE_CONFIG.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                    <span className="text-gray-300">•</span>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                      className="text-slate-700 hover:text-navy-950 font-bold flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-royal-600" />
                      Direct Call
                    </a>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 font-display mb-4">
                  Explore Complementary Services
                </h3>
                <div className="space-y-2.5">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      to={`/services/${rel.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-xs text-slate-700 transition-colors font-medium"
                    >
                      <span className="line-clamp-1">{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-royal-600 shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBandSection />
    </>
  );
};
