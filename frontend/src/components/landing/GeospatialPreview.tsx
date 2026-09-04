import React, { useState } from 'react';
import { Map, AlertTriangle, ShieldCheck } from 'lucide-react';
import terrainBg from '../../assets/terrain_hero_bg.jpg';

export const GeospatialPreview: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<'all' | 'red' | 'safe'>('all');

  return (
    <section id="geospatial" className="relative py-24 bg-[#06090d] border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 mb-4">
              <Map className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold">
                Geospatial Command Map
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Tactical Zonal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Threat & Relocation Mapping
              </span>
            </h2>

            <p className="mt-3 text-base text-slate-400 max-w-xl font-normal">
              High-resolution disaster intelligence overlay identifying active hazard perimeters, vulnerable communities, and viable relocation corridors.
            </p>
          </div>

          {/* Map Layer Switcher Controls */}
          <div className="flex items-center gap-2 bg-[#0c131c] border border-slate-800 p-1.5 rounded-xl backdrop-blur-md">
            <button
              onClick={() => setSelectedLayer('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedLayer === 'all'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Layers
            </button>
            <button
              onClick={() => setSelectedLayer('red')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                selectedLayer === 'red'
                  ? 'bg-red-950/80 border border-red-500/40 text-red-300 font-semibold'
                  : 'text-slate-400 hover:text-red-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Red Zones
            </button>
            <button
              onClick={() => setSelectedLayer('safe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                selectedLayer === 'safe'
                  ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-semibold'
                  : 'text-slate-400 hover:text-emerald-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Safe Havens
            </button>
          </div>
        </div>

        {/* Big Command Map Display */}
        <div className="relative rounded-3xl bg-[#090e15] border border-slate-800 shadow-2xl overflow-hidden min-h-[540px] sm:min-h-[600px] flex items-center justify-center">
          
          {/* Map Base Satellite/Terrain Image Layer */}
          <div className="absolute inset-0">
            <img
              src={terrainBg}
              alt="Geospatial Satellite Terrain"
              className="w-full h-full object-cover opacity-45 filter contrast-125 saturate-50"
            />
            <div className="absolute inset-0 bg-[#06090d]/60 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06090d] via-transparent to-[#06090d]/80" />
            
            {/* Topographic Contour lines simulation */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Safe Route Evacuation Corridor Line (SVG dashed arrow connecting red to green) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 440 260 Q 560 300 740 400"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              className="animate-pulse"
            />
          </svg>

          {/* Top Map HUD Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090e15]/90 border border-slate-700/80 backdrop-blur-md pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono font-semibold text-slate-200">
                SECTOR: CHAMOLI-JOSHIMATH HIGHWAY CORRIDOR
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-[#090e15]/90 border border-slate-700/80 backdrop-blur-md font-mono text-[11px] text-slate-400 pointer-events-auto">
              <span>SATELLITE: SENTINEL-2 / DEM 30M</span>
              <span>•</span>
              <span className="text-emerald-400">FPS: 60</span>
            </div>
          </div>

          {/* Map Interactive Zone Markers */}
          {/* Critical Red Zone */}
          {(selectedLayer === 'all' || selectedLayer === 'red') && (
            <div className="absolute top-[42%] left-[44%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-28 h-28 rounded-full bg-red-500/20 animate-ping" />
                <div className="absolute w-20 h-20 rounded-full border border-red-500/60 bg-red-950/40" />
                <div className="w-7 h-7 rounded-full bg-red-600 border-2 border-white flex items-center justify-center shadow-lg shadow-red-500/50">
                  <AlertTriangle className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div className="mt-2 px-2.5 py-1 rounded bg-black/85 border border-red-500/50 text-[10px] font-mono text-red-200 font-bold whitespace-nowrap shadow-lg">
                RED ZONE // SECTOR 7A
              </div>
            </div>
          )}

          {/* High Orange Zone */}
          {selectedLayer === 'all' && (
            <div className="absolute top-[32%] left-[62%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 rounded-full border border-orange-500/50 bg-orange-950/30" />
                <div className="w-5 h-5 rounded-full bg-orange-500 border border-white" />
              </div>
              <div className="mt-1 px-2 py-0.5 rounded bg-black/80 border border-orange-500/40 text-[9px] font-mono text-orange-200 whitespace-nowrap">
                ORANGE ZONE // SECTOR 4B
              </div>
            </div>
          )}

          {/* Safe Haven Destination (Green Zone) */}
          {(selectedLayer === 'all' || selectedLayer === 'safe') && (
            <div className="absolute top-[68%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full border-2 border-emerald-400/50 bg-emerald-950/40 animate-pulse" />
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-lg shadow-emerald-500/50">
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                </div>
              </div>
              <div className="mt-2 px-2.5 py-1 rounded bg-black/85 border border-emerald-500/50 text-[10px] font-mono text-emerald-300 font-bold whitespace-nowrap shadow-lg">
                SAFE HAVEN PLATEAU B
              </div>
            </div>
          )}

          {/* Live Floating Information HUD Card (Right side) */}
          <div className="absolute bottom-6 left-6 z-20 max-w-xs w-full">
            <div className="p-4 rounded-2xl bg-[#090e15]/95 border border-slate-700/80 backdrop-blur-xl shadow-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wide">
                    Risk Zone: Critical
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-500/30">
                  RED TIER
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Population at Risk</div>
                  <div className="text-sm font-bold text-white font-mono">2,840 Citizens</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Risk Score</div>
                  <div className="text-sm font-bold text-red-400 font-mono">87 / 100</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Priority Order</div>
                  <div className="text-sm font-bold text-orange-400 font-mono">Immediate</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Egress Distance</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">4.8 km</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>VERIFIED EVACUATION ROUTE READY</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Map Legend */}
          <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-4 px-4 py-2 rounded-xl bg-[#090e15]/90 border border-slate-800 backdrop-blur-md text-[11px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-slate-300">Critical</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span className="text-slate-300">High</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="text-slate-300">Moderate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-300">Safer</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GeospatialPreview;
