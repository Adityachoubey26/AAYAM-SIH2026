import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink } from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#040609] border-t border-slate-800/80 text-slate-400 text-xs overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="AAYAM" className="h-10 w-auto object-contain" />
              <div>
                <span className="text-xl font-bold tracking-wider text-white">AAYAM</span>
                <span className="block text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                  AI-Powered Disaster Intelligence
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Intelligent identification of hazard-based red zones, carrying capacity assessment, and immediate relocation needs for vulnerable habitations.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono px-3 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/25 text-emerald-300 font-semibold">
                Prepared Communities. Resilient India.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About AAYAM</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#capabilities" className="hover:text-emerald-400 transition-colors">Capabilities</a></li>
              <li><a href="#impact" className="hover:text-emerald-400 transition-colors">Operational Impact</a></li>
              <li><a href="#team" className="hover:text-emerald-400 transition-colors">Team Philosophy</a></li>
            </ul>
          </div>

          {/* Authority Access & Hackathon Context */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Disaster Operations Portal
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designated portal for district collectors, NDMA officers, and state disaster mitigation teams.
            </p>

            <div className="pt-2">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-950/30 text-xs font-medium transition-all"
              >
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Authority Login</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </Link>
            </div>

            <div className="pt-3 text-[10px] font-mono text-slate-500">
              PROBLEM STATEMENT ID: SIH26191
            </div>
          </div>

        </div>

        {/* Copyright & Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © 2026 AAYAM • Smart India Hackathon. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-slate-400 transition-colors">Terms of Operations</a>
            <span>•</span>
            <span className="text-slate-400">Team AAYAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
