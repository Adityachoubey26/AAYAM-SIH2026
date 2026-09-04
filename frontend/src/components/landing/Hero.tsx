import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Activity, Compass, ShieldCheck, MapPin } from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';
import terrainBg from '../../assets/terrain_hero_bg.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12">
      {/* Cinematic Himalayan Terrain Background with Vignette Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={terrainBg}
          alt="Himalayan Terrain"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:animate-pulse-subtle"
        />
        {/* Multilayered radial and linear dark vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06090d]/90 via-[#06090d]/75 to-[#06090d]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(16,185,129,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(249,115,22,0.06),transparent_50%)]" />
      </div>

      {/* Top Right Subtle Motto from Reference Image */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 hidden lg:flex justify-end pt-2">
        <div className="text-right border-r-2 border-emerald-500/40 pr-3 py-0.5">
          <p className="text-xs font-semibold tracking-wider text-slate-300">Prepared Communities.</p>
          <p className="text-xs font-semibold tracking-wider text-emerald-400">Resilient India.</p>
        </div>
      </div>

      {/* Main Hero Content: Left Details & Right Geospatial Logo Visual */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Mission Briefing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/25 w-fit backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono tracking-widest uppercase text-emerald-300 font-medium">
                Smart India Hackathon 2026 • SIH26191
              </span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.15]">
              AI-Powered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                Disaster Intelligence
              </span> <br />
              for a Safer Tomorrow
            </h1>

            {/* Supporting Body Text */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-xl font-normal leading-relaxed">
              AAYAM helps authorities identify disaster-prone and vulnerable habitations, assess risk using AI and geospatial intelligence, and plan safer, smarter relocation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm tracking-wide shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore AAYAM</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-700/70 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-300 font-medium text-sm tracking-wide backdrop-blur-md transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-current opacity-80" />
                <span>See How It Works</span>
              </a>
            </div>

            {/* Credibility Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-6 max-w-lg border-t border-slate-800/70">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1.5">
                  <span>6</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Perspectives</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1.5">
                  <span>1</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Integrated Solution</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1.5">
                  <span className="text-2xl font-mono text-emerald-400">∞</span >
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Safer Communities</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Sophisticated AAYAM Geospatial Logo Insignia Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[520px]"
          >
            {/* Ambient Dual Glow (Orange Hazard on left, Green Safe Zone on right) */}
            <div className="absolute w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl translate-x-12 translate-y-6 pointer-events-none" />
            <div className="absolute w-72 h-72 rounded-full bg-orange-500/12 blur-3xl -translate-x-12 -translate-y-6 pointer-events-none" />

            {/* Concentric Geospatial & Radar Orbit Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outer Ring */}
              <div className="w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-emerald-500/15 animate-spin-very-slow flex items-center justify-center">
                {/* Orbital telemetry ticks */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_#f97316]" />
              </div>

              {/* Mid Concentric Ring */}
              <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-slate-700/60 animate-spin-reverse-slow flex items-center justify-center">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400/80" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-400/80" />
              </div>

              {/* Inner Coordinate Ring */}
              <div className="w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] rounded-full border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-[2px]" />

              {/* Subtle Scanning Radar Line */}
              <div className="w-[360px] h-[360px] rounded-full absolute pointer-events-none animate-radar-sweep overflow-hidden">
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent origin-bottom-right" />
              </div>
            </div>

            {/* Exact AAYAM Brand Logo Insignia (Kept crisp, undistorted & authentic) */}
            <div className="relative z-20 flex flex-col items-center justify-center p-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative flex items-center justify-center"
              >
                <img
                  src={logoImg}
                  alt="AAYAM Central Insignia"
                  className="w-64 sm:w-80 md:w-96 h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] filter brightness-105"
                />
              </motion.div>
            </div>

            {/* Tactical Geospatial HUD Labels floating around the visual */}
            <div className="absolute top-4 right-0 sm:-right-4 z-20">
              <div className="px-2.5 py-1 rounded bg-[#0b121b]/90 border border-slate-700/80 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <Activity className="w-3 h-3 text-orange-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-300">
                  RISK ANALYSIS
                </span>
              </div>
            </div>

            <div className="absolute bottom-16 right-0 sm:-right-6 z-20">
              <div className="px-2.5 py-1 rounded bg-[#0b121b]/90 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] font-mono tracking-wider font-semibold text-emerald-300">
                  RELOCATION SITES
                </span>
              </div>
            </div>

            <div className="absolute top-14 left-0 sm:-left-6 z-20">
              <div className="px-2.5 py-1 rounded bg-[#0b121b]/90 border border-orange-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <MapPin className="w-3 h-3 text-orange-400" />
                <span className="text-[10px] font-mono tracking-wider font-semibold text-orange-300">
                  VULNERABLE ZONES
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 left-2 sm:-left-2 z-20">
              <div className="px-2.5 py-1 rounded bg-[#0b121b]/90 border border-slate-700/80 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <Compass className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-300">
                  GEOSPATIAL INTELLIGENCE
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Navigation & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between border-t border-slate-800/60 pt-4 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3 bg-emerald-400 rounded-sm" />
            <span className="text-slate-400 tracking-wider">DATA DRIVEN • SAFER COMMUNITIES</span>
          </div>

          <a
            href="#problem"
            className="flex flex-col items-center group text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <div className="w-4 h-7 rounded-full border border-slate-600 group-hover:border-emerald-400 flex items-start justify-center p-1 transition-colors">
              <div className="w-1 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
            </div>
            <span className="mt-1 text-[9px] uppercase tracking-widest">Scroll to Explore</span>
          </a>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-slate-500 font-mono">LAT: 30.55°N • LON: 79.56°E</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
