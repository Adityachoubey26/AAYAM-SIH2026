import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Lock, Server, KeyRound } from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';

export const AuthorityCTA: React.FC = () => {
  return (
    <section id="authority-portal" className="relative py-24 bg-[#06090d] border-t border-slate-800/60 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-b from-[#0c141f] to-[#070b10] border border-emerald-500/20 p-8 sm:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle logo silhouette in background */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <img src={logoImg} alt="" className="w-80 h-auto" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 mb-6">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-300 font-semibold">
              Restricted Authority Access
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Built for the People Who Make{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Critical Decisions.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            AAYAM provides disaster management authorities with a centralized intelligence layer for understanding risk, vulnerability, and safer relocation possibilities.
          </p>

          {/* CTA Action Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all duration-200 transform hover:-translate-y-0.5 group"
            >
              <Lock className="w-4 h-4 text-slate-950" />
              <span>Enter Authority Portal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust & Security Badges */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              <span>Government Cloud Ready</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
              <span>Clerk Multi-Factor Auth</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Role-Based Command Tiers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityCTA;
