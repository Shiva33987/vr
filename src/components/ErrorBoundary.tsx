import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-6 bg-[#dcdcdc] text-ink">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-300 text-center shadow-xl">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold font-display text-navy-950 mb-2">
              {this.props.fallbackTitle || 'Service Temporarily Unavailable'}
            </h2>
            <p className="text-sm text-slate-700 mb-6 leading-relaxed">
              We encountered a minor display hiccup. Our emergency fallback protocol is active. You can reload or contact our team directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>

              <a
                href={`tel:${SITE_CONFIG.contact.phone1Raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-navy-950 rounded-lg transition-colors font-display"
              >
                <Phone className="w-4 h-4" />
                Call Founder
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
