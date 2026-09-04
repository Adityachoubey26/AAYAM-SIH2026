import React, { useState } from 'react';
import { Maximize2, ZoomIn, ZoomOut, Target, Compass, Home } from 'lucide-react';
import terrainBg from '../../assets/terrain_hero_bg.jpg';
import { MOCK_HABITATIONS, Habitation } from '../../data/mockDashboardData';

interface DashboardRiskMapProps {
  onSelectHabitation?: (hab: Habitation) => void;
  selectedHabitationId?: string;
}

export const DashboardRiskMap: React.FC<DashboardRiskMapProps> = ({
  onSelectHabitation,
  selectedHabitationId,
}) => {
  const [hazardFilter, setHazardFilter] = useState('All Hazards');
  const [layerFilter, setLayerFilter] = useState('Risk Zones');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTooltip, setActiveTooltip] = useState<{
    title: string;
    type: 'habitation' | 'site';
    risk?: number;
    capacity?: number;
    x: number;
    y: number;
  } | null>(null);

  // Tactical map nodes calibrated to the Uttarakhand operational map
  const mapHotspots = [
    { name: 'Uttarkashi', x: 26, y: 36, risk: 'Critical', radius: 48, score: 84 },
    { name: 'Joshimath', x: 48, y: 34, risk: 'Critical', radius: 52, score: 87 },
    { name: 'Chamoli', x: 60, y: 44, risk: 'Critical', radius: 46, score: 92 },
    { name: 'Rudraprayag', x: 44, y: 50, risk: 'Moderate', radius: 36, score: 61 },
    { name: 'Bageshwar', x: 67, y: 56, risk: 'High', radius: 40, score: 72 },
    { name: 'Pithoragarh', x: 79, y: 48, risk: 'High', radius: 42, score: 78 },
    { name: 'Tehri', x: 33, y: 46, risk: 'Moderate', radius: 34, score: 49 },
    { name: 'Almora', x: 58, y: 64, risk: 'Lower', radius: 30, score: 38 },
    { name: 'Nainital', x: 50, y: 72, risk: 'Lower', radius: 28, score: 32 },
    { name: 'Dehradun', x: 20, y: 52, risk: 'Lower', radius: 32, score: 26 },
    { name: 'Haridwar', x: 22, y: 60, risk: 'Lower', radius: 28, score: 22 },
  ];

  // Relocation green safe havens
  const relocationNodes = [
    { name: 'Site B (Karanprayag Haven)', x: 47, y: 44, code: 'REL-02', capacity: '3,400 Vacant' },
    { name: 'Site A (Gauchar Base)', x: 42, y: 42, code: 'REL-01', capacity: '220 Vacant' },
    { name: 'Site C (Pipalkoti Enclave)', x: 51, y: 64, code: 'REL-03', capacity: '1,050 Vacant' },
  ];

  return (
    <div className="relative rounded-2xl bg-[#080d14] border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-full min-h-[460px] lg:min-h-[520px]">
      
      {/* Top Map Header & Filter Controls */}
      <div className="p-4 sm:px-5 sm:py-3.5 border-b border-slate-800/80 bg-[#060a0f]/90 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 z-20">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">Risk Map</h2>
          </div>
          <p className="text-[11px] text-slate-400 font-normal">
            Geospatial view of disaster risk zones and habitations
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          {/* Hazard Type selector */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="text-[10px] text-slate-500 uppercase hidden md:inline">Hazard Type:</span>
            <select
              value={hazardFilter}
              onChange={(e) => setHazardFilter(e.target.value)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs focus:outline-none focus:border-emerald-500/50"
            >
              <option value="All Hazards">All Hazards</option>
              <option value="Landslide">Landslide</option>
              <option value="Flood">Flood</option>
              <option value="Cloudburst">Cloudburst</option>
            </select>
          </div>

          {/* Map Layer selector */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="text-[10px] text-slate-500 uppercase hidden md:inline">Map Layer:</span>
            <select
              value={layerFilter}
              onChange={(e) => setLayerFilter(e.target.value)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs focus:outline-none focus:border-emerald-500/50"
            >
              <option value="Risk Zones">Risk Zones</option>
              <option value="Habitations">Habitations</option>
              <option value="Relocation Sites">Relocation Sites</option>
              <option value="Topographic Contours">Contours Only</option>
            </select>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={() => alert('Full screen expanded tactical view mode activated.')}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            title="Expand Map"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Map Canvas Area */}
      <div className="relative flex-1 w-full overflow-hidden bg-[#070b10] select-none">
        
        {/* Background Satellite Terrain Texture */}
        <div
          className="absolute inset-0 transition-transform duration-300 origin-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={terrainBg}
            alt="Himalayan Satellite Terrain"
            className="w-full h-full object-cover opacity-35 filter contrast-125 saturate-50"
          />
          {/* Dark gradient vignettes */}
          <div className="absolute inset-0 bg-[#070b10]/60 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b10] via-transparent to-[#070b10]/70" />

          {/* SVG Map Graphics, Heatmaps, and Administrative Boundary Simulation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 500" preserveAspectRatio="none">
            <defs>
              <radialGradient id="critGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.7)" />
                <stop offset="50%" stopColor="rgba(249, 115, 22, 0.4)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
              </radialGradient>
              <radialGradient id="highGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" />
                <stop offset="60%" stopColor="rgba(234, 179, 8, 0.3)" />
                <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
              </radialGradient>
              <radialGradient id="safeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
                <stop offset="70%" stopColor="rgba(16, 185, 129, 0.2)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
              </radialGradient>
            </defs>

            {/* Uttarakhand Outer Administrative Boundary Vector */}
            <path
              d="M 160 260 L 210 180 L 260 140 L 380 120 L 460 130 L 520 170 L 620 200 L 680 240 L 650 310 L 570 340 L 500 390 L 400 370 L 310 350 L 220 330 Z"
              fill="rgba(16, 185, 129, 0.03)"
              stroke="rgba(16, 185, 129, 0.35)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />

            {/* River Artery simulation (Alaknanda / Mandakini) */}
            <path
              d="M 400 130 Q 380 200 370 230 T 430 300 T 480 360"
              fill="none"
              stroke="rgba(59, 130, 246, 0.4)"
              strokeWidth="2"
              strokeDasharray="2 2"
            />

            {/* Heat Zone Radiuses */}
            <circle cx="210" cy="180" r="65" fill="url(#critGrad)" />
            <circle cx="384" cy="170" r="75" fill="url(#critGrad)" />
            <circle cx="480" cy="220" r="60" fill="url(#critGrad)" />
            <circle cx="536" cy="280" r="50" fill="url(#highGrad)" />
            <circle cx="632" cy="240" r="55" fill="url(#highGrad)" />
            <circle cx="352" cy="250" r="45" fill="rgba(234, 179, 8, 0.15)" />
            <circle cx="376" cy="220" r="40" fill="url(#safeGrad)" />
            <circle cx="464" cy="320" r="45" fill="url(#safeGrad)" />
          </svg>

          {/* Interactive Tactical Hotspots Pins */}
          {mapHotspots.map((node) => {
            const isCritical = node.risk === 'Critical';
            const isHigh = node.risk === 'High';
            const isSelected = selectedHabitationId === node.name;

            return (
              <div
                key={node.name}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onClick={() => {
                  const match = MOCK_HABITATIONS.find((h) => h.district.includes(node.name) || h.name.includes(node.name));
                  if (match && onSelectHabitation) onSelectHabitation(match);
                }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setActiveTooltip({
                    title: `${node.name} Sector`,
                    type: 'habitation',
                    risk: node.score,
                    x: rect.left,
                    y: rect.top - 10,
                  });
                }}
                onMouseLeave={() => setActiveTooltip(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
              >
                {/* Hotspot Outer Radar Pulse (Critical only) */}
                {isCritical && (
                  <div className="absolute inset-0 -m-3 rounded-full border border-red-500/60 animate-ping pointer-events-none" />
                )}

                {/* Core Pin Dot */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border shadow-lg transition-transform group-hover:scale-125 ${
                    isSelected
                      ? 'ring-4 ring-white'
                      : ''
                  } ${
                    isCritical
                      ? 'bg-red-600/90 border-red-300 text-white shadow-red-950/80'
                      : isHigh
                      ? 'bg-orange-600/90 border-orange-300 text-white shadow-orange-950/80'
                      : node.risk === 'Moderate'
                      ? 'bg-yellow-500/90 border-yellow-200 text-slate-900 shadow-yellow-950/80'
                      : 'bg-emerald-600/80 border-emerald-300 text-white shadow-emerald-950/80'
                  }`}
                >
                  <span className="text-[9px] font-bold font-mono">
                    {node.score}
                  </span>
                </div>

                {/* City/Habitation Name Label */}
                <div className="mt-1 px-1.5 py-0.5 rounded bg-[#070b10]/80 border border-slate-800 text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:border-slate-600 group-hover:text-white transition-all shadow-md">
                  {node.name}
                </div>
              </div>
            );
          })}

          {/* Relocation Green Safe Havens Pins */}
          {relocationNodes.map((site) => (
            <div
              key={site.code}
              style={{ left: `${site.x}%`, top: `${site.y}%` }}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setActiveTooltip({
                  title: site.name,
                  type: 'site',
                  capacity: 3400,
                  x: rect.left,
                  y: rect.top - 10,
                });
              }}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500 border border-emerald-200 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-950/80 group-hover:scale-125 transition-transform">
                <Home className="w-3.5 h-3.5" />
              </div>
              <div className="mt-1 px-1.5 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 whitespace-nowrap shadow-md">
                {site.code}
              </div>
            </div>
          ))}

        </div>

        {/* Map Legend Overlay (Top Left) */}
        <div className="absolute top-4 left-4 z-20 p-2.5 sm:p-3 rounded-xl bg-[#090e15]/90 border border-slate-800/90 backdrop-blur-md text-xs font-mono space-y-1.5 shadow-xl pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
            <span className="text-[11px] text-slate-300">Critical Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
            <span className="text-[11px] text-slate-300">High Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_6px_#eab308]" />
            <span className="text-[11px] text-slate-300">Moderate Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
            <span className="text-[11px] text-slate-300">Lower Risk</span>
          </div>
          <div className="pt-1 border-t border-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-[10px] text-slate-400">Habitation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-500 flex items-center justify-center text-[8px] text-slate-950 font-bold">
              H
            </div>
            <span className="text-[10px] text-emerald-400">Relocation Site</span>
          </div>
        </div>

        {/* Map Control Buttons (Bottom Right) */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1.5">
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.8))}
            className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center shadow-lg"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.8))}
            className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center shadow-lg"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center shadow-lg"
            title="Reset View"
          >
            <Target className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        {/* Hover Tooltip Overlay */}
        {activeTooltip && (
          <div className="absolute top-4 right-4 z-30 p-2.5 rounded-xl bg-[#0b121c] border border-emerald-500/40 text-xs font-mono shadow-2xl pointer-events-none">
            <div className="font-bold text-white">{activeTooltip.title}</div>
            {activeTooltip.risk && (
              <div className="text-orange-400 mt-0.5">Risk Score: {activeTooltip.risk} / 100</div>
            )}
            {activeTooltip.capacity && (
              <div className="text-emerald-400 mt-0.5">Capacity: {activeTooltip.capacity} Vacancies</div>
            )}
          </div>
        )}

        {/* Map Coordinates & Scale HUD (Bottom Left) */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 text-[10px] font-mono text-slate-400 bg-[#090e15]/80 px-2.5 py-1 rounded-lg border border-slate-800/80 backdrop-blur-sm">
          <div className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-emerald-400" />
            <span>30.3167° N, 78.0322° E</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <div className="w-12 h-1 bg-slate-700 border-x border-white" />
            <span>100 km</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DashboardRiskMap;
