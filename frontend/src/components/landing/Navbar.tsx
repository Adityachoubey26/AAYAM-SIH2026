import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'The Problem', href: '#problem' },
    { label: 'What is AAYAM', href: '#what-is-aayam' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'AI Intelligence', href: '#ai-intelligence' },
    { label: 'Impact', href: '#impact' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06090d]/90 backdrop-blur-xl border-b border-emerald-500/10 shadow-2xl shadow-black/60 py-3'
          : 'bg-gradient-to-b from-[#06090d]/90 via-[#06090d]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center p-1 rounded-lg bg-emerald-500/5 border border-emerald-500/15 group-hover:border-emerald-500/35 transition-all">
              <img
                src={logoImg}
                alt="AAYAM Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald-500/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
                AAYAM
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono">
                Six Perspectives. One Solution.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 rounded-full hover:bg-emerald-500/10 transition-all tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Authority Portal Action */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-400/60 rounded-full transition-all duration-300 shadow-sm shadow-emerald-950/40 hover:shadow-emerald-500/20"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span>Authority Login</span>
              <ChevronRight className="w-3 h-3 text-emerald-400/70 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b10]/95 backdrop-blur-2xl border-b border-slate-800/80 px-5 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800/60">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 rounded-lg"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Authority Login</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
