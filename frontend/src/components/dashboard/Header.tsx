import React, { useState, useEffect } from 'react';
import { Menu, Search, Bell, MapPin, ChevronDown, CheckCircle2, LogOut } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser, UserButton } from '@clerk/clerk-react';
import { ENV } from '../../config/env';
import { authorityService } from '../../services/authorityService';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const location = useLocation();
  const [region, setRegion] = useState('Uttarakhand');
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlertsMenu, setShowAlertsMenu] = useState(false);

  // Region options
  const regions = [
    'Uttarakhand (Statewide)',
    'Chamoli District',
    'Joshimath Sector',
    'Rudraprayag Sector',
    'Uttarkashi Sector',
    'Pithoragarh Sector',
  ];

  // Dynamic titles matching the 9 pages
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return {
          title: 'Overview',
          subtitle: 'Real-time insights for safer communities',
        };
      case '/dashboard/risk-intelligence':
        return {
          title: 'Risk Intelligence',
          subtitle: 'Multi-hazard exposure and slope stability analytics',
        };
      case '/dashboard/habitations':
        return {
          title: 'Habitations',
          subtitle: 'Vulnerability triage and population exposure registry',
        };
      case '/dashboard/hazards':
        return {
          title: 'Hazards Monitor',
          subtitle: 'Active hazard vectors, precipitation spikes and slope radar',
        };
      case '/dashboard/vulnerability':
        return {
          title: 'Vulnerability Assessment',
          subtitle: 'Demographic, structural, and egress chokepoint analysis',
        };
      case '/dashboard/relocation':
        return {
          title: 'Relocation Decision Support',
          subtitle: 'Habitation-to-safe-haven capacity pairing and route viability',
        };
      case '/dashboard/capacity':
        return {
          title: 'Carrying Capacity',
          subtitle: 'Resource thresholds, water, shelter beds, and logistics audits',
        };
      case '/dashboard/ai-analysis':
        return {
          title: 'AI Decision Analysis',
          subtitle: 'Explainable spatial reasoning and legal decision dossiers',
        };
      case '/dashboard/alerts':
        return {
          title: 'Operations Alerts',
          subtitle: 'Critical risk triggers and immediate response directives',
        };
      default:
        return {
          title: 'Authority Dashboard',
          subtitle: 'Disaster Intelligence & Decision Support',
        };
    }
  };

  const { title, subtitle } = getPageTitle();

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('global-search-input');
        searchInput?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#06090d]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3.5">
      <div className="flex items-center justify-between gap-4">
        
        {/* Left: Mobile Toggle & Page Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>{title}</span>
            </h1>
            <p className="text-xs text-slate-400 font-normal hidden sm:block">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right: Controls & Profile */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          
          {/* Region Dropdown Selector */}
          <div className="relative">
            <button
              onClick={() => setRegionMenuOpen(!regionMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:border-slate-700 hover:text-white transition-all font-mono"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="max-w-[120px] sm:max-w-none truncate">{region}</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>

            {regionMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#090e15] border border-slate-800 shadow-2xl py-1.5 z-50 text-xs font-mono">
                <div className="px-3 py-1 text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Select Command Region
                </div>
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => {
                      setRegion(reg);
                      setRegionMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 hover:bg-slate-800/60 transition-colors flex items-center justify-between ${
                      region === reg ? 'text-emerald-400 font-bold bg-emerald-950/20' : 'text-slate-300'
                    }`}
                  >
                    <span>{reg}</span>
                    {region === reg && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Box */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-3.5 w-3.5 text-slate-500" />
            </div>
            <input
              id="global-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search locations, habitations..."
              className="pl-8 pr-12 py-1.5 rounded-lg bg-[#090e15] border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 w-52 lg:w-64 transition-all"
            />
            <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
                Ctrl K
              </kbd>
            </div>
          </div>

          {/* Date & Time Timestamp */}
          <div className="hidden xl:flex flex-col text-right text-[11px] font-mono text-slate-400 pr-1">
            <span className="text-slate-300 font-semibold">Mon, 4 Aug 2025</span>
            <span className="text-emerald-400/90 text-[10px]">10:24 AM IST</span>
          </div>

          {/* Notification Alert Bell */}
          <div className="relative">
            <button
              onClick={() => setShowAlertsMenu(!showAlertsMenu)}
              className="relative p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              aria-label="View notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-red-600 text-white font-mono text-[9px] font-bold">
                3
              </span>
            </button>

            {showAlertsMenu && (
              <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-[#090e15] border border-slate-800 shadow-2xl p-3 z-50">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                  <span className="text-xs font-bold text-white">Active Telemetry Alerts</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/60 border border-red-500/30 text-red-300 font-semibold">
                    3 Unresolved
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-red-950/20 border border-red-500/20">
                    <p className="font-bold text-red-300">Village A Risk Spiked</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Critical rainfall threshold breached. Relocation planned.</p>
                  </div>
                  <div className="p-2 rounded-lg bg-orange-950/20 border border-orange-500/20">
                    <p className="font-bold text-orange-300">Joshimath Slope Radar Warning</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">14mm displacement detected in Sector 2.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Authority Profile Control (Clerk / Dev) */}
          {clerkKey ? <ClerkUserProfileControl /> : <DevUserProfileControl />}

        </div>

      </div>
    </header>
  );
};

const clerkKey =
  ENV.CLERK_PUBLISHABLE_KEY ||
  (typeof window !== 'undefined' ? localStorage.getItem('aayam_clerk_pk') : '') ||
  '';

/**
 * Official Clerk UserButton & Officer Profile display
 */
const ClerkUserProfileControl: React.FC = () => {
  const { user, isLoaded } = useUser();
  const authorityProfile = authorityService.getActiveProfile();

  const displayName =
    authorityProfile?.fullName ||
    (isLoaded && user ? user.fullName || user.firstName || 'Command Officer' : 'Command Officer');

  const role =
    authorityProfile?.jurisdiction ||
    (isLoaded && user?.primaryEmailAddress?.emailAddress
      ? user.primaryEmailAddress.emailAddress
      : 'SDMA Clearance L-4');

  return (
    <div className="flex items-center gap-2.5 pl-2 border-l border-slate-800/80">
      <div className="hidden sm:block text-right">
        <div className="text-xs font-bold text-white leading-tight truncate max-w-[140px]">{displayName}</div>
        <div className="text-[10px] font-mono text-emerald-400 leading-tight truncate max-w-[140px]">{role}</div>
      </div>
      <div className="clerk-user-button-container">
        <UserButton
          afterSignOutUrl="/login"
          appearance={{
            elements: {
              userButtonAvatarBox: 'w-8 h-8 rounded-lg border border-emerald-500/30 shadow-md',
              userButtonPopoverCard: 'bg-[#090e15] border border-slate-800 shadow-2xl rounded-2xl text-slate-100',
              userButtonPopoverActionButton: 'text-slate-300 hover:bg-slate-800 hover:text-white',
              userButtonPopoverActionButtonText: 'text-xs text-slate-200',
              userButtonPopoverFooter: 'hidden',
            },
          }}
        />
      </div>
    </div>
  );
};

/**
 * Local Evaluation Session Profile with Sign Out control
 */
const DevUserProfileControl: React.FC = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const authorityProfile = authorityService.getActiveProfile();

  const displayName = authorityProfile?.fullName || 'R. Sharma';
  const displayRole = authorityProfile?.jurisdiction || 'State Authority (SEOC)';

  const handleSignOut = () => {
    authorityService.clearProfile();
    localStorage.removeItem('aayam_auth_session');
    sessionStorage.removeItem('aayam_attempted_email');
    navigate('/login');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setProfileOpen(!profileOpen)}
        className="flex items-center gap-2 pl-2 border-l border-slate-800/80 hover:opacity-90 transition-opacity"
        aria-label="Officer profile and sign out menu"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 flex items-center justify-center text-slate-950 font-bold text-xs shadow-md">
          {displayName.slice(0, 2).toUpperCase()}
        </div>
        <div className="hidden sm:block text-left">
          <div className="text-xs font-bold text-white leading-tight">{displayName}</div>
          <div className="text-[10px] font-mono text-emerald-400 leading-tight">{displayRole}</div>
        </div>
      </button>

      {profileOpen && (
        <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-[#090e15] border border-slate-800 shadow-2xl p-2 z-50 text-xs font-mono">
          <div className="px-3 py-2 border-b border-slate-800/80">
            <div className="font-bold text-white">{displayName}</div>
            <div className="text-[10px] text-slate-400">{displayRole}</div>
            {authorityProfile?.badgeNumber && (
              <div className="text-[9px] text-emerald-400 mt-0.5">BADGE: {authorityProfile.badgeNumber}</div>
            )}
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-red-400 hover:bg-red-950/30 hover:text-red-300 transition-colors mt-1 text-left font-semibold"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out Session</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
