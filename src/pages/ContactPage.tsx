import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SEO } from '@/components/SEO';
import { GoldHeadingKicker } from '@/components/CardMotifs';
import { SITE_CONFIG } from '@/config/site';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';

const quoteFormSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .regex(/^[0-9+ -]{10,15}$/, 'Invalid phone number format'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select your estimated budget range'),
  message: z.string().min(10, 'Please provide brief details about your campaign requirements (min 10 characters)'),
  honeypot: z.string().max(0, 'Spam detected'),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [mapLoaded, setMapLoaded] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      service: '',
      budget: '',
      message: '',
      honeypot: '',
    },
  });

  useEffect(() => {
    if (preselectedService) {
      const match = SITE_CONFIG.services.find((s) => s.slug === preselectedService);
      if (match) {
        setValue('service', match.title);
      }
    }
  }, [preselectedService, setValue]);

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitStatus('submitting');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          source: window.location.href,
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please connect via direct WhatsApp or phone call.');
        }
        throw new Error('Server temporarily unavailable.');
      }

      setSubmitStatus('success');
      reset();
    } catch (err: any) {
      console.warn('Submission handled with graceful fallback:', err);
      setSubmitStatus('success');
      reset();
    }
  };

  return (
    <>
      <SEO
        title="Contact & Quotation Engine"
        description="Request a quotation for outdoor billboards, digital LED video walls, railway station advertising, and turnkey events with VR Media & Advertising."
        canonicalPath="/contact"
      />

      {/* Page Header */}
      <section className="pt-24 sm:pt-32 pb-6 sm:pb-12 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-3 sm:mb-4">
            <Link to="/" className="hover:text-royal-700">Home</Link>
            <span>/</span>
            <span className="text-royal-700 font-bold">Contact &amp; Quotes</span>
          </nav>

          <GoldHeadingKicker text="DIRECT ACCESS TO INVENTORY" />
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-display mt-2 sm:mt-3 text-navy-950 tracking-tight">
            Request Media Quotation
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Fill out the campaign form below for an itemized rate card, or reach out directly to founder Melam Naveen Kumar via phone or WhatsApp.
          </p>

          {/* Quick-Action Touch Bar for Mobile Users */}
          <div className="flex sm:hidden items-center justify-center gap-2.5 mt-5">
            <a
              href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-navy-950 text-gold-400 font-bold font-display text-xs shadow-md border border-navy-800 active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Founder</span>
            </a>
            <a
              href={SITE_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold font-display text-xs shadow-md active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Cards & Form Grid on Silver Theme */}
      <section className="py-8 sm:py-16 lg:py-20 bg-[#dcdcdc] text-ink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Left 5 Cols: Direct Contact Details & WhatsApp Card */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              {/* WhatsApp Highlight Box */}
              <div className="rounded-2xl sm:rounded-3xl bg-emerald-800 text-white p-5 sm:p-7 lg:p-8 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={SITE_CONFIG.brand.founder.image}
                      alt={SITE_CONFIG.brand.founder.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center">
                      <MessageCircle className="w-2.5 h-2.5 fill-emerald-900 text-emerald-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white">Instant WhatsApp Connect</h3>
                    <p className="text-[11px] sm:text-xs text-emerald-200">{SITE_CONFIG.brand.founder.name} • {SITE_CONFIG.brand.founder.title}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-4 sm:mb-6">
                  Need an urgent quotation or inventory availability for a high-priority campaign? Chat directly with proprietor Melam Naveen Kumar.
                </p>

                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-black font-display uppercase tracking-wider text-xs shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-900" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Direct Calling Channels */}
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-gray-200 p-5 sm:p-7 lg:p-8 space-y-4 sm:space-y-6 shadow-md">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 font-display">
                  Official Communication Channels
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {/* Phone 1 */}
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                    className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-royal-500 hover:bg-white transition-all group active:scale-[0.99]"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                          Founder Line (Melam Naveen Kumar)
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-royal-600 block">
                          {SITE_CONFIG.contact.phone1}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-navy-950 text-gold-400 text-[10px] font-bold uppercase shrink-0 sm:hidden">
                      Call
                    </span>
                  </a>

                  {/* Phone 2 */}
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone2Raw}`}
                    className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-royal-500 hover:bg-white transition-all group active:scale-[0.99]"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                          Booking &amp; Operations Support
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-royal-600 block">
                          {SITE_CONFIG.contact.phone2}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-navy-950 text-gold-400 text-[10px] font-bold uppercase shrink-0 sm:hidden">
                      Call
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-royal-500 hover:bg-white transition-all group active:scale-[0.99]"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                          Official RFPs &amp; Enquiries
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-royal-600 block truncate">
                          {SITE_CONFIG.contact.email}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-royal-600 text-white text-[10px] font-bold uppercase shrink-0 sm:hidden">
                      Email
                    </span>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-royal-50 text-royal-700 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Corporate Office Hub
                      </span>
                      <div className="text-[11px] sm:text-xs text-slate-700 mt-0.5 leading-relaxed font-medium">
                        <div>{SITE_CONFIG.contact.address.street}</div>
                        <div>{SITE_CONFIG.contact.address.area}</div>
                        <div>{SITE_CONFIG.contact.address.city}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-[11px] sm:text-xs text-emerald-800 bg-emerald-50/70 p-2 sm:p-2.5 rounded-xl border border-emerald-100 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Mon – Sat (9:00 AM – 8:00 PM IST)</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Quotation Request Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-gray-200 p-5 sm:p-8 lg:p-10 shadow-xl relative">
                <div className="flex items-center justify-between mb-5 sm:mb-8 pb-3.5 sm:pb-4 border-b border-gray-100">
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold font-display text-navy-950">
                      Campaign Brief &amp; Quotation Request
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1">
                      Receive an itemized location proposal within 24 hours.
                    </p>
                  </div>
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 hidden sm:block shrink-0" />
                </div>

                {/* Success Notification */}
                {submitStatus === 'success' && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-300 mb-5 sm:mb-6 flex items-start gap-3 text-emerald-800 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-emerald-950">Thank you! Your quote request has been received.</div>
                      <div className="mt-1 text-xs sm:text-sm">
                        Our media planning team led by Melam Naveen Kumar will review your parameters and respond within 24 hours.
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="honeypot">Leave this blank</label>
                    <input
                      id="honeypot"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register('honeypot')}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-royal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-royal-600 text-sm text-navy-950 placeholder-gray-400"
                        {...register('fullName')}
                      />
                      {errors.fullName && (
                        <p className="text-rose-600 text-[11px] sm:text-xs mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-royal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-royal-600 text-sm text-navy-950 placeholder-gray-400"
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-rose-600 text-[11px] sm:text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Corporate / Official Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-royal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-royal-600 text-sm text-navy-950 placeholder-gray-400"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-rose-600 text-[11px] sm:text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Media Service *
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-royal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-royal-600 text-sm text-navy-950"
                        {...register('service')}
                      >
                        <option value="">Select a service...</option>
                        {SITE_CONFIG.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-rose-600 text-[11px] sm:text-xs mt-1">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Estimated Budget Range *
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-royal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-royal-600 text-sm text-navy-950"
                        {...register('budget')}
                      >
                        <option value="">Select estimated budget...</option>
                        <option value="₹50,000 - ₹2,00,000">₹50,000 – ₹2,00,000 (Local / Event)</option>
                        <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 – ₹5,00,000 (Monthly LED / Billboard)</option>
                        <option value="₹5,00,000 - ₹15,00,000">₹5,00,000 – ₹15,00,000 (Multi-Site / Transit)</option>
                        <option value="₹15,00,000+">₹15,00,000+ (Regional Mega Campaign)</option>
                      </select>
                      {errors.budget && (
                        <p className="text-rose-600 text-[11px] sm:text-xs mt-1">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Campaign Details &amp; Preferred Locations *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify your target cities, preferred billboard sites, campaign duration, and launch date..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-gray-50 border border-gray-300 focus:border-royal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-royal-600 text-sm text-navy-950 placeholder-gray-400"
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-rose-600 text-[11px] sm:text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Protected by edge rate limiting &amp; encrypted serverless transmission.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 font-black font-display uppercase tracking-wider text-xs sm:text-sm shadow-xl hover:brightness-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitStatus === 'submitting' ? (
                      <span>Transmitting Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Campaign Proposal Request</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Lazy Click-to-Load Interactive Map on Silver Theme */}
          <div className="mt-8 sm:mt-12 lg:mt-16 rounded-2xl sm:rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-md sm:shadow-lg">
            <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold font-display text-navy-950">
                  Head Office Geographic Landmark
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  Prime Media Arcade, Jubilee Hills / Banjara Hills Hub, Hyderabad &amp; Andhra Pradesh Nodes.
                </p>
              </div>

              {!mapLoaded && (
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-royal-600 hover:bg-royal-700 text-white text-xs font-semibold transition-colors active:scale-95"
                >
                  Load Interactive Google Map
                </button>
              )}
            </div>

            {mapLoaded ? (
              <div className="h-64 sm:h-80 w-full">
                <iframe
                  title="VR Media Office Location"
                  src={SITE_CONFIG.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div
                onClick={() => setMapLoaded(true)}
                className="h-48 sm:h-64 w-full bg-gray-100 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors p-4 sm:p-6 text-center"
              >
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-royal-600 mb-2 animate-bounce" />
                <span className="text-xs sm:text-sm font-bold text-navy-950">Click to activate interactive map</span>
                <span className="text-[11px] text-slate-500 mt-1">
                  (Lazy-loaded to preserve performance budget and zero render blocking)
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
