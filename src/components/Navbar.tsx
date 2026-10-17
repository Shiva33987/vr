import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '@/config/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isTransparent
            ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4 sm:py-5 shadow-none'
            : 'glass-header py-2.5 sm:py-3 shadow-md shadow-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - clean, natural, and simply attractive */}
            <Link
              to="/"
              className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] group"
              aria-label="VR Media Home"
            >
              <Logo
                variant={isTransparent ? 'dark' : 'light'}
                className={isScrolled ? 'h-8 sm:h-9' : 'h-8 sm:h-10'}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {SITE_CONFIG.navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.href);

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-md transition-all ${
                          isActive
                            ? isTransparent
                              ? 'text-gold-400 font-bold bg-white/15 backdrop-blur-xs drop-shadow'
                              : 'text-royal-600 font-bold bg-black/5'
                            : isTransparent
                              ? 'text-white hover:text-gold-400 hover:bg-white/10 drop-shadow font-semibold'
                              : 'text-slate-800 hover:text-royal-600 hover:bg-black/5'
                        }`}
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? `rotate-180 ${isTransparent ? 'text-gold-400' : 'text-royal-600'}` : ''
                        }`} />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2 z-50">
                          <div className="bg-white rounded-xl p-2.5 shadow-2xl border border-gray-200 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-royal-700 px-3 py-1.5 border-b border-gray-100">
                              All 10 Specialized Capabilities
                            </div>
                            <div className="grid grid-cols-1 gap-1 mt-1 max-h-[420px] overflow-y-auto">
                              {SITE_CONFIG.services.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  className="flex items-center justify-between px-3 py-2 text-xs rounded-lg text-slate-700 hover:text-navy-950 hover:bg-royal-50 hover:border-l-2 hover:border-royal-600 transition-all group"
                                >
                                  <span className="font-semibold group-hover:text-royal-700">
                                    {service.title}
                                  </span>
                                  {service.isPrimary && (
                                    <span className="text-[9px] bg-royal-100 text-royal-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                                      Core
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                            <div className="pt-2 mt-1 border-t border-gray-100 text-center">
                              <Link
                                to="/services"
                                className="text-xs font-semibold text-royal-600 hover:text-royal-800 flex items-center justify-center gap-1 py-1"
                              >
                                View All 10 Media Services <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-all ${
                      isActive
                        ? isTransparent
                          ? 'text-gold-400 font-bold bg-white/15 backdrop-blur-xs drop-shadow'
                          : 'text-royal-600 font-bold bg-black/5'
                        : isTransparent
                          ? 'text-white hover:text-gold-400 hover:bg-white/10 drop-shadow font-semibold'
                          : 'text-slate-800 hover:text-royal-600 hover:bg-black/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                className={`flex items-center gap-2 text-xs transition-colors font-semibold px-2 py-1.5 ${
                  isTransparent
                    ? 'text-white hover:text-gold-400 drop-shadow'
                    : 'text-slate-800 hover:text-royal-600'
                }`}
                title="Direct Founder Line"
              >
                <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
                  isTransparent
                    ? 'bg-white/20 border-white/30 text-gold-400'
                    : 'bg-royal-600/10 border-royal-600/20 text-royal-700'
                }`}>
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className={isTransparent ? 'text-white drop-shadow font-bold' : 'text-slate-800'}>
                  {SITE_CONFIG.contact.phone1}
                </span>
              </a>

              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-navy-950 transition-all duration-200 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-lg shadow-md hover:shadow-gold-glow hover:brightness-105 active:scale-95 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5 font-display tracking-wide uppercase text-xs font-black">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/contact"
                className="px-3 py-1.5 text-xs font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 rounded-md font-display uppercase tracking-wider"
              >
                Quote
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                  isTransparent
                    ? 'text-white hover:text-gold-400 hover:bg-white/10'
                    : 'text-slate-800 hover:text-navy-950 hover:bg-black/5'
                }`}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <Logo variant="light" compact className="h-8" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-gray-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 space-y-1">
                {SITE_CONFIG.navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-royal-600 hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>

                    {item.hasDropdown && (
                      <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-royal-600/30 my-1">
                        {SITE_CONFIG.services.slice(0, 5).map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="block px-2 py-1 text-xs text-slate-600 hover:text-royal-600 font-medium"
                          >
                            • {s.title}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block px-2 py-1 text-xs font-bold text-royal-600 pt-1"
                        >
                          View all 10 services →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-gray-100 text-sm font-semibold text-slate-900 hover:bg-gray-200"
              >
                <Phone className="w-4 h-4 text-royal-600" />
                <span>Call {SITE_CONFIG.contact.phone1}</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 font-bold font-display uppercase tracking-wider text-sm shadow-md"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
