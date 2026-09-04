import React, { useState } from 'react';
import {
  AlertTriangle,
  Clock,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { MOCK_ALERTS, DashboardAlert } from '../../data/mockDashboardData';

export const AlertsPage: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'CRITICAL' | 'HIGH' | 'MEDIUM'>('ALL');
  const [alerts, setAlerts] = useState<DashboardAlert[]>(MOCK_ALERTS);

  const filteredAlerts = alerts.filter(
    (a) => filter === 'ALL' || a.severity === filter
  );

  const criticalCount = alerts.filter((a) => a.severity === 'CRITICAL').length;
  const highCount = alerts.filter((a) => a.severity === 'HIGH').length;
  const mediumCount = alerts.filter((a) => a.severity === 'MEDIUM').length;

  const markAllRead = () => {
    setAlerts((prev) => prev.map((a) => ({ ...a, read: true })));
  };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Emergency Operations & Threshold Alerts
          </h2>
          <p className="text-xs text-slate-400">
            Automated notifications triggered by radar precipitation spikes, slope creep, and demographic risk changes
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={markAllRead}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mark All Acknowledged</span>
          </button>
        </div>
      </div>

      {/* Filter Badges Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-xs font-mono">
        <button
          onClick={() => setFilter('ALL')}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            filter === 'ALL'
              ? 'bg-slate-800 text-white font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          All Alerts ({alerts.length})
        </button>

        <button
          onClick={() => setFilter('CRITICAL')}
          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            filter === 'CRITICAL'
              ? 'bg-red-950 border border-red-500/40 text-red-300 font-bold'
              : 'text-slate-400 hover:text-red-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          Critical ({criticalCount})
        </button>

        <button
          onClick={() => setFilter('HIGH')}
          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            filter === 'HIGH'
              ? 'bg-orange-950 border border-orange-500/40 text-orange-300 font-bold'
              : 'text-slate-400 hover:text-orange-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          High ({highCount})
        </button>

        <button
          onClick={() => setFilter('MEDIUM')}
          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            filter === 'MEDIUM'
              ? 'bg-yellow-950 border border-yellow-500/40 text-yellow-300 font-bold'
              : 'text-slate-400 hover:text-yellow-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          Medium ({mediumCount})
        </button>
      </div>

      {/* Alerts Feed List */}
      <div className="space-y-4">
        {filteredAlerts.map((alt) => {
          const isCritical = alt.severity === 'CRITICAL';
          const isHigh = alt.severity === 'HIGH';

          return (
            <div
              key={alt.id}
              className={`p-5 rounded-2xl border transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isCritical
                  ? 'bg-gradient-to-r from-red-950/30 via-[#0d0a0b] to-[#070b10] border-red-500/40 shadow-red-950/40 ring-1 ring-red-500/30'
                  : isHigh
                  ? 'bg-[#090e15] border-orange-500/30 hover:border-orange-500/60'
                  : 'bg-[#090e15] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Severity Indicator Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                    isCritical
                      ? 'bg-red-950 border-red-500 text-red-400'
                      : isHigh
                      ? 'bg-orange-950 border-orange-500 text-orange-400'
                      : 'bg-yellow-950 border-yellow-500 text-yellow-400'
                  }`}
                >
                  <AlertTriangle className={`w-6 h-6 ${isCritical ? 'animate-bounce' : ''}`} />
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold ${
                        isCritical
                          ? 'bg-red-500 text-slate-950'
                          : isHigh
                          ? 'bg-orange-500 text-slate-950'
                          : 'bg-yellow-500 text-slate-950'
                      }`}
                    >
                      {alt.severity} ALERT
                    </span>
                    <h3 className="text-base font-bold text-white">{alt.title}</h3>
                    <span className="text-xs font-mono text-slate-400">• {alt.habitationName}</span>
                  </div>

                  {/* Change notice text if applicable */}
                  {alt.changeText && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono my-1">
                      <span className="text-slate-400">Telemetry Trigger:</span>
                      <strong className={isCritical ? 'text-red-400' : 'text-orange-400'}>
                        {alt.changeText}
                      </strong>
                    </div>
                  )}

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    <strong className="text-slate-200">Recommended Action:</strong> {alt.recommendedAction}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {alt.timeAgo}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {alt.district} Operational Sector
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => alert(`Direct action initiated for ${alt.habitationName}. Dispatched emergency assessment convoy.`)}
                  className={`w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg ${
                    isCritical
                      ? 'bg-red-500 hover:bg-red-400 text-slate-950 shadow-red-500/20'
                      : isHigh
                      ? 'bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-orange-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <span>Immediate Assessment &rarr;</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AlertsPage;
