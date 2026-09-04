import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Activity,
  Home,
  AlertTriangle,
  Users,
  Compass,
  Layers,
  Cpu,
  Bell,
  User,
  Settings,
  LogOut,
  X,
} from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { label: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Risk Intelligence', path: '/dashboard/risk-intelligence', icon: Activity },
    { label: 'Habitations', path: '/dashboard/habitations', icon: Home },
    { label: 'Hazards', path: '/dashboard/hazards', icon: AlertTriangle },
    { label: 'Vulnerability', path: '/dashboard/vulnerability', icon: Users },
    { label: 'Relocation', path: '/dashboard/relocation', icon: Compass },
    { label: 'Capacity', path: '/dashboard/capacity', icon: Layers },
    { label: 'AI Analysis', path: '/dashboard/ai-analysis', icon: Cpu },
    { label: 'Alerts', path: '/dashboard/alerts', icon: Bell, badge: 3 },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-64 bg-[#05080c] border-r border-slate-800/80 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top: Logo & Main Navigation */}
        <div className="flex flex-col flex-1 overflow-y-auto custom-scrollbar">
          {/* Brand Header */}
          <div className="p-5 flex items-center justify-between border-b border-slate-800/60">
            <Link to="/dashboard" className="flex items-center gap-3 group">
              <div className="relative p-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <img
                  src={logoImg}
                  alt="AAYAM"
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-wider text-white flex items-center gap-1.5">
                  AAYAM
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[8.5px] font-mono tracking-widest text-slate-400 uppercase">
                  Six Perspectives. One Solution.
                </div>
              </div>
            </Link>

            {/* Close Button on Mobile */}
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="p-3 space-y-1 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/dashboard'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 font-semibold shadow-sm shadow-emerald-950/40'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-mono font-bold">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Motto & Account Navigation */}
        <div className="p-4 border-t border-slate-800/80 bg-gradient-to-t from-[#040609] to-transparent space-y-3">
          {/* Motto Badge */}
          <div className="px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <div className="text-[11px] font-semibold text-slate-300">Prepared Communities.</div>
            <div className="text-[11px] font-semibold text-emerald-400">Resilient India.</div>
          </div>

          {/* Quick links */}
          <div className="space-y-1 text-xs text-slate-400">
            <button
              onClick={() => alert('Authority Profile: R. Sharma (State Disaster Management Authority - Uttarakhand Command). Authorized clearance: Level 4.')}
              className="flex items-center gap-2.5 w-full px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-slate-200 transition-colors text-left"
            >
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Authority Profile</span>
            </button>

            <button
              onClick={() => alert('Command Settings: Telemetry feeds connected. Auto-refresh: 30s. CRS: EPSG:4326. Protocol: NDMA-SIH26191.')}
              className="flex items-center gap-2.5 w-full px-3 py-1.5 rounded-lg hover:bg-slate-900 hover:text-slate-200 transition-colors text-left"
            >
              <Settings className="w-3.5 h-3.5 text-slate-400" />
              <span>Settings</span>
            </button>

            <Link
              to="/"
              className="flex items-center gap-2.5 w-full px-3 py-1.5 rounded-lg text-red-400/80 hover:text-red-400 hover:bg-red-950/30 transition-colors text-left"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit to Public Portal</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
