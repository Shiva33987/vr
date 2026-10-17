import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, MessageCircle, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '@/config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#dcdcdc] text-slate-800 border-t border-slate-300/80 relative overflow-hidden">
      {/* Decorative top shimmer line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-80" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-28 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Col 1: Brand & Founder Info */}
          <div className="md:col-span-2 lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center bg-white/95 hover:bg-white px-4 py-2 rounded-2xl border border-slate-300 shadow-sm hover:shadow-md hover:border-gold-500/70 transition-all duration-300 group"
              aria-label="VR Media & Advertising"
            >
              <Logo className="h-10 sm:h-12" variant="light" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-sm">
              VR Media &amp; Advertising is a market-leading outdoor media and DOOH network in South India. 
              We engineer maximum brand recall through prime digital LED walls, railway transit advertising, 
              strategic highway hoardings, and turnkey event experiences.
            </p>

            {/* Founder Leadership Card */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-300 shadow-sm max-w-sm">
              <div className="flex items-center gap-3">
                <img
                  src={SITE_CONFIG.brand.founder.image}
                  alt={SITE_CONFIG.brand.founder.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500 shadow-sm shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span className="text-[10px] font-bold text-navy-950 tracking-wider uppercase font-display">
                      Verified Leadership
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-navy-900 font-bold mt-0.5 truncate">
                    {SITE_CONFIG.brand.founder.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {SITE_CONFIG.brand.founder.title}
                  </div>
                </div>
              </div>

              {/* Founder Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100">
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs text-xs font-semibold active:scale-95 transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-royal-700 hover:bg-royal-800 text-white shadow-xs text-xs font-semibold active:scale-95 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Quick Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2-Column Responsive Section for Quick Links & Services on Mobile */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:contents">
            
            {/* Col 2: Quick Navigation */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold text-navy-950 tracking-widest uppercase mb-3.5 sm:mb-4 font-display flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs">
                {SITE_CONFIG.navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="hover:text-royal-700 transition-colors flex items-center gap-1 text-slate-700 font-medium py-0.5"
                    >
                      <ArrowRight className="w-3 h-3 text-gold-600 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-royal-700 transition-colors flex items-center gap-1 text-slate-700 font-medium py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 text-gold-600 shrink-0" />
                    <span className="truncate">Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-royal-700 transition-colors flex items-center gap-1 text-slate-700 font-medium py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 text-gold-600 shrink-0" />
                    <span className="truncate">Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Core Services */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold text-navy-950 tracking-widest uppercase mb-3.5 sm:mb-4 font-display flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                Services
              </h3>
              <ul className="space-y-2 text-xs">
                {SITE_CONFIG.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="hover:text-royal-700 transition-colors block text-slate-700 font-medium line-clamp-1 py-0.5"
                      title={service.title}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Contact & Head Office Info with Full Width on Desktop */}
          <div className="md:col-span-2 lg:col-span-4">
            <h3 className="text-xs font-bold text-navy-950 tracking-widest uppercase mb-3.5 sm:mb-4 font-display flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
              Direct Contact
            </h3>
            
            <div className="space-y-2.5 text-xs">
              {/* Primary Line */}
              <a
                href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/90 hover:bg-white border border-slate-300 hover:border-gold-500/70 shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-[13px] text-navy-950 whitespace-nowrap">{SITE_CONFIG.contact.phone1}</div>
                    <div className="text-[10px] text-slate-500">Founder Direct Line</div>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-royal-700 bg-royal-50 hover:bg-royal-100 px-2.5 py-1 rounded-md border border-royal-200/60 shrink-0 ml-2">
                  Call
                </span>
              </a>

              {/* Secondary Operations Line */}
              <a
                href={`tel:${SITE_CONFIG.contact.phone2Raw}`}
                className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/90 hover:bg-white border border-slate-300 hover:border-gold-500/70 shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-[13px] text-navy-950 whitespace-nowrap">{SITE_CONFIG.contact.phone2}</div>
                    <div className="text-[10px] text-slate-500">Booking &amp; Ops</div>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-royal-700 bg-royal-50 hover:bg-royal-100 px-2.5 py-1 rounded-md border border-royal-200/60 shrink-0 ml-2">
                  Call
                </span>
              </a>

              {/* Official Email */}
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/90 hover:bg-white border border-slate-300 hover:border-gold-500/70 shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-xs sm:text-[13px] text-navy-950 whitespace-nowrap select-all">{SITE_CONFIG.contact.email}</div>
                    <div className="text-[10px] text-slate-500">Official RFPs</div>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-royal-700 bg-royal-50 hover:bg-royal-100 px-2.5 py-1 rounded-md border border-royal-200/60 shrink-0 ml-2">
                  Email
                </span>
              </a>

              {/* Physical Office Hub */}
              <div className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/90 border border-slate-300 shadow-xs text-xs text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] sm:text-xs leading-relaxed">
                  <div className="text-navy-950 font-bold">{SITE_CONFIG.contact.address.street}</div>
                  <div className="text-slate-600">{SITE_CONFIG.contact.address.area}</div>
                  <div className="font-bold text-royal-700 mt-0.5">{SITE_CONFIG.contact.address.city}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <div className="text-center sm:text-left leading-relaxed">
            © {currentYear} <span className="font-bold text-navy-950">VR Media &amp; Advertising</span>. All Rights Reserved.
            <span className="block sm:inline sm:ml-2 text-gold-600 font-semibold">Connecting Brands with People.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-[11px]">
            <Link to="/privacy" className="hover:text-navy-950 text-slate-600 transition-colors">Privacy</Link>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <Link to="/terms" className="hover:text-navy-950 text-slate-600 transition-colors">Terms &amp; Conditions</Link>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-1 px-3 py-1 bg-royal-700 hover:bg-royal-800 text-white rounded-lg font-bold shadow-xs transition-colors"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

