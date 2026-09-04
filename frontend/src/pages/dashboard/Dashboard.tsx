import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AlertTriangle,
  TrendingUp,
  Building2,
  Users2,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  AlertCircle,
  Leaf,
  Droplets,
  Mountain,
  CloudRain,
  CloudLightning,
  Layers,
} from 'lucide-react';
import DashboardRiskMap from '../../components/dashboard/DashboardRiskMap';
import {
  MOCK_HABITATIONS,
  MOCK_HAZARDS,
  MOCK_ALERTS,
  MOCK_UPCOMING_ACTIONS,
  MOCK_OVERVIEW_STATS,
  Habitation,
} from '../../data/mockDashboardData';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedHabitation, setSelectedHabitation] = useState<Habitation | null>(null);

  const stats = MOCK_OVERVIEW_STATS;

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      
      {/* 1. TOP 4 STATISTIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Critical Zones Card */}
        <div
          onClick={() => navigate('/dashboard/risk-intelligence')}
          className="group cursor-pointer rounded-2xl bg-[#090e15] border border-red-500/25 hover:border-red-500/50 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 shadow-lg relative overflow-hidden flex items-center justify-between"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full pointer-events-none" />
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stats.criticalZones.count}
              </div>
              <div className="text-xs font-semibold text-slate-300">Critical Zones</div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-red-400 mt-0.5">
                <ArrowUpRight className="w-3 h-3" />
                <span>{stats.criticalZones.delta}</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
        </div>

        {/* High Risk Zones Card */}
        <div
          onClick={() => navigate('/dashboard/risk-intelligence')}
          className="group cursor-pointer rounded-2xl bg-[#090e15] border border-orange-500/25 hover:border-orange-500/50 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 shadow-lg relative overflow-hidden flex items-center justify-between"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full pointer-events-none" />
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stats.highRiskZones.count}
              </div>
              <div className="text-xs font-semibold text-slate-300">High Risk Zones</div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-orange-400 mt-0.5">
                <ArrowUpRight className="w-3 h-3" />
                <span>{stats.highRiskZones.delta}</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Habitations Assessed Card */}
        <div
          onClick={() => navigate('/dashboard/habitations')}
          className="group cursor-pointer rounded-2xl bg-[#090e15] border border-emerald-500/25 hover:border-emerald-500/50 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 shadow-lg relative overflow-hidden flex items-center justify-between"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stats.habitationsAssessed.count}
              </div>
              <div className="text-xs font-semibold text-slate-300">Habitations Assessed</div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 mt-0.5">
                <ArrowUpRight className="w-3 h-3" />
                <span>{stats.habitationsAssessed.delta}</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Population at Risk Card */}
        <div
          onClick={() => navigate('/dashboard/vulnerability')}
          className="group cursor-pointer rounded-2xl bg-[#090e15] border border-cyan-500/25 hover:border-cyan-500/50 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 shadow-lg relative overflow-hidden flex items-center justify-between"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
              <Users2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stats.populationAtRisk.count.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-slate-300">Population at Risk</div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 mt-0.5">
                <ArrowDownRight className="w-3 h-3" />
                <span>{stats.populationAtRisk.delta}</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </div>

      </div>

      {/* 2. MIDDLE SECTION: LARGE INTERACTIVE MAP + RIGHT SIDEBAR RAIL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 8 Cols: Large Interactive Map Preview */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <DashboardRiskMap
            onSelectHabitation={(hab) => setSelectedHabitation(hab)}
            selectedHabitationId={selectedHabitation?.name}
          />

          {/* Quick Selection Context Banner */}
          {selectedHabitation && (
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-slate-300">
                  Inspecting: <strong className="text-white">{selectedHabitation.name}</strong> ({selectedHabitation.district}) • Pop: {selectedHabitation.population.toLocaleString()} • Risk: {selectedHabitation.riskScore}/100
                </span>
              </div>
              <button
                onClick={() => navigate('/dashboard/relocation')}
                className="px-3 py-1 rounded bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors shrink-0"
              >
                Plan Relocation &rarr;
              </button>
            </div>
          )}
        </div>

        {/* Right 4 Cols: Priority Habitations, Recent Alerts, Upcoming Actions */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Priority Habitations Card */}
          <div className="rounded-2xl bg-[#090e15] border border-slate-800 p-4 sm:p-5 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">Priority Habitations</h3>
                <p className="text-[11px] text-slate-400">Habitations requiring immediate attention</p>
              </div>
              <Link
                to="/dashboard/habitations"
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
              >
                <span>View All</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            {/* List */}
            <div className="space-y-2 mt-3">
              {MOCK_HABITATIONS.slice(0, 5).map((hab) => {
                const isCritical = hab.riskLevel === 'Critical';
                const isHigh = hab.riskLevel === 'High';

                return (
                  <div
                    key={hab.id}
                    onClick={() => setSelectedHabitation(hab)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                      selectedHabitation?.id === hab.id
                        ? 'bg-emerald-950/40 border-emerald-500/50'
                        : 'bg-[#060a0f] border-slate-800/80 hover:border-slate-700 hover:bg-[#0b121b]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Mini Avatar / Indicator */}
                      <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-mono font-bold text-slate-300">
                        {hab.name.charAt(0) + hab.name.slice(-1)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {hab.name}
                        </div>
                        <div className="text-[10.5px] text-slate-400">
                          {hab.district}, Uttarakhand
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                          isCritical
                            ? 'bg-red-950/80 border border-red-500/40 text-red-300'
                            : isHigh
                            ? 'bg-orange-950/80 border border-orange-500/40 text-orange-300'
                            : 'bg-yellow-950/80 border border-yellow-500/40 text-yellow-300'
                        }`}
                      >
                        {hab.riskLevel}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-200">
                        Risk <span className={isCritical ? 'text-red-400' : isHigh ? 'text-orange-400' : 'text-yellow-400'}>{hab.riskScore}</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-300 transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Alerts Card */}
          <div className="rounded-2xl bg-[#090e15] border border-slate-800 p-4 sm:p-5 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">Recent Alerts</h3>
                <p className="text-[11px] text-slate-400">Active telemetry threshold events</p>
              </div>
              <Link
                to="/dashboard/alerts"
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
              >
                <span>View All</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-2 mt-3 text-xs">
              {MOCK_ALERTS.slice(0, 3).map((alt) => {
                const isCrit = alt.severity === 'CRITICAL';
                return (
                  <div
                    key={alt.id}
                    className={`p-2.5 rounded-xl border flex items-start gap-2.5 ${
                      isCrit
                        ? 'bg-red-950/15 border-red-500/30'
                        : alt.severity === 'HIGH'
                        ? 'bg-orange-950/15 border-orange-500/30'
                        : 'bg-yellow-950/15 border-yellow-500/30'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isCrit ? (
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 text-orange-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-[11px]">{alt.title}</span>
                        <span className="text-[9.5px] font-mono text-slate-400">{alt.timeAgo}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{alt.recommendedAction}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upcoming Actions Card */}
          <div className="rounded-2xl bg-[#090e15] border border-slate-800 p-4 sm:p-5 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">Upcoming Actions</h3>
                <p className="text-[11px] text-slate-400">Scheduled field and command briefings</p>
              </div>
              <span className="text-[10px] font-mono text-slate-500">4 Active</span>
            </div>

            <div className="space-y-2 mt-3 text-xs">
              {MOCK_UPCOMING_ACTIONS.map((action) => (
                <div
                  key={action.id}
                  className="p-2.5 rounded-xl bg-[#060a0f] border border-slate-800/80 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-medium text-slate-200 text-[11.5px]">{action.title}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{action.target}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {action.schedule}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Motto Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-[#071310] to-[#090e15] border border-emerald-500/30 flex items-center gap-3 shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">&ldquo;Timely decisions save lives.&rdquo;</div>
              <div className="text-[10px] font-mono text-emerald-400">AAYAM — Towards a Resilient India.</div>
            </div>
          </div>

        </div>

      </div>

      {/* 3. BOTTOM SECTION: RISK DISTRIBUTION & HAZARD OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Risk Distribution Donut Chart (5 Cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#090e15] border border-slate-800 p-5 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">Risk Distribution</h3>
              <p className="text-[11px] text-slate-400">Categorical breakdown of 146 habitations</p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
              Uttarakhand Zone
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-3">
            {/* SVG Donut Chart */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="#1e293b" strokeWidth="14" />
                
                {/* Critical (8% = 19.1) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#ef4444"
                  strokeWidth="14"
                  strokeDasharray="19.1 238.7"
                  strokeDashoffset="0"
                />
                
                {/* High (18% = 43.0) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#f97316"
                  strokeWidth="14"
                  strokeDasharray="43.0 238.7"
                  strokeDashoffset="-19.1"
                />

                {/* Moderate (47% = 112.2) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#eab308"
                  strokeWidth="14"
                  strokeDasharray="112.2 238.7"
                  strokeDashoffset="-62.1"
                />

                {/* Lower (27% = 64.4) */}
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="14"
                  strokeDasharray="64.4 238.7"
                  strokeDashoffset="-174.3"
                />
              </svg>

              {/* Center Total Count */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-extrabold text-white tracking-tight leading-none">146</span>
                <span className="text-[9px] font-mono text-slate-400 mt-1 uppercase">Habitations</span>
              </div>
            </div>

            {/* Legend Breakdown */}
            <div className="space-y-2 text-xs font-mono w-full sm:w-auto">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="text-slate-300">Critical</span>
                </div>
                <span className="font-bold text-white">12 (8%)</span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <span className="text-slate-300">High</span>
                </div>
                <span className="font-bold text-white">27 (18%)</span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="text-slate-300">Moderate</span>
                </div>
                <span className="font-bold text-white">68 (47%)</span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-300">Lower</span>
                </div>
                <span className="font-bold text-white">39 (27%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hazard Overview Progress Bars (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#090e15] border border-slate-800 p-5 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">Hazard Overview</h3>
              <p className="text-[11px] text-slate-400">Relative impact index across monitored hazard types</p>
            </div>
            <Link
              to="/dashboard/hazards"
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
            >
              <span>View Details</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Progress Bars */}
          <div className="space-y-3.5 my-auto">
            {MOCK_HAZARDS.map((haz) => {
              const Icon =
                haz.name === 'Flood'
                  ? Droplets
                  : haz.name === 'Landslide'
                  ? Mountain
                  : haz.name === 'Heavy Rainfall'
                  ? CloudRain
                  : haz.name === 'Cloudburst'
                  ? CloudLightning
                  : Layers;

              return (
                <div key={haz.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-300 font-medium">
                      <Icon className="w-3.5 h-3.5" style={{ color: haz.accentColor }} />
                      <span>{haz.name}</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[11px]">
                      <span className="text-slate-400">{haz.affectedAreaSqKm} sq km</span>
                      <span className="font-bold text-white">{haz.percentage}%</span>
                    </div>
                  </div>

                  {/* Progress track */}
                  <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${haz.percentage}%`,
                        backgroundColor: haz.accentColor,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Aggregated from CWC, IMD, & Satellite Synthetic Aperture Radar</span>
            <span className="text-emerald-400">STATUS: REFRESHED</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
