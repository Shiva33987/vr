import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { ScrollToTop } from '@/components/ScrollToTop';

// Code-split routes with React.lazy
const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage').then((m) => ({ default: m.PortfolioPage })));
const ClientsPage = lazy(() => import('@/pages/ClientsPage').then((m) => ({ default: m.ClientsPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('@/pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

// Loading Fallback Component
const RouteLoadingFallback: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#dcdcdc] text-ink">
    <div className="relative">
      <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gold-500 shadow-md flex items-center justify-center text-royal-700 font-extrabold font-display text-xl animate-pulse">
        VR
      </div>
      <div className="absolute -inset-1 rounded-2xl border border-gold-500/40 animate-spin opacity-50" />
    </div>
    <span className="text-xs font-bold text-slate-700 mt-4 tracking-widest uppercase font-display">
      Connecting Brands with People...
    </span>
  </div>
);

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};
