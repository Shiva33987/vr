import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const CtaBandSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-gradient-to-r from-navy-950 via-royal-900 to-navy-950 text-white border-y border-gold-500/30">
      {/* Background Lighting Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Urgent Callout Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
          <Zap className="w-3.5 h-3.5 text-gold-400" />
          <span>Prime Advertising Inventory Available Now</span>
        </div>

        {/* Master Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight max-w-4xl mx-auto leading-tight">
          Ready to Put Your Brand in Front of <span className="gold-gradient-text">People</span>?
        </h2>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-6 text-xs sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Secure prime arterial LED screens, high-footfall railway platforms, and commanding highway hoardings before your competition does. Speak directly with our founder today.
        </p>

        {/* 3 High-Impact Action Triggers */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 md:gap-6">
          {/* Action 1: Get Free Quote Form */}
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 font-extrabold font-display uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-gold-500/30 hover:shadow-gold-glow hover:brightness-105 active:scale-95 transition-all group"
          >
            <span>Request Media Proposal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Action 2: WhatsApp Click-to-Chat */}
          <a
            href={SITE_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/40 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Action 3: Phone Direct Call */}
          <a
            href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call {SITE_CONFIG.contact.phone1}</span>
          </a>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Guaranteed 24-Hour Quotation Turnaround • No Intermediary Markup</span>
        </div>
      </div>
    </section>
  );
};
