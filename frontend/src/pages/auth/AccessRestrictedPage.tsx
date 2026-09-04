import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import {
  ShieldAlert,
  Lock,
  LogOut,
  Send,
  CheckCircle2,
  ArrowLeft,
  Building,
  BadgeAlert,
} from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';
import { authorityService } from '../../services/authorityService';
import { ENV } from '../../config/env';

export const AccessRestrictedPage: React.FC = () => {
  const hasClerk = Boolean(
    ENV.CLERK_PUBLISHABLE_KEY ||
    (typeof window !== 'undefined' ? localStorage.getItem('aayam_clerk_pk') : '')
  );

  if (hasClerk) {
    return <ClerkAccessRestrictedContent />;
  }

  return <DevAccessRestrictedContent />;
};

const ClerkAccessRestrictedContent: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const userEmail =
    user?.primaryEmailAddress?.emailAddress ||
    sessionStorage.getItem('aayam_attempted_email') ||
    'officer@unknown.domain';

  const handleSignOut = async () => {
    authorityService.clearProfile();
    localStorage.removeItem('aayam_auth_session');
    sessionStorage.removeItem('aayam_attempted_email');
    if (signOut) {
      await signOut();
    }
    navigate('/login', { replace: true });
  };

  return (
    <AccessRestrictedView
      userEmail={userEmail}
      userName={user?.fullName || user?.firstName || 'Officer Candidate'}
      onSignOutAndSwitch={handleSignOut}
    />
  );
};

const DevAccessRestrictedContent: React.FC = () => {
  const navigate = useNavigate();
  const userEmail =
    sessionStorage.getItem('aayam_attempted_email') ||
    'unauthorized.person@gmail.com';

  const handleSignOut = () => {
    authorityService.clearProfile();
    localStorage.removeItem('aayam_auth_session');
    sessionStorage.removeItem('aayam_attempted_email');
    navigate('/login', { replace: true });
  };

  return (
    <AccessRestrictedView
      userEmail={userEmail}
      userName="Officer Candidate"
      onSignOutAndSwitch={handleSignOut}
    />
  );
};

interface AccessRestrictedViewProps {
  userEmail: string;
  userName?: string;
  onSignOutAndSwitch: () => void;
}

const AccessRestrictedView: React.FC<AccessRestrictedViewProps> = ({
  userEmail,
  userName = 'Officer Candidate',
  onSignOutAndSwitch,
}) => {
  const [agency, setAgency] = useState('');
  const [designation, setDesignation] = useState('');
  const [jurisdiction, setJurisdiction] = useState('');
  const [badgeNumber, setBadgeNumber] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleClearanceRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await authorityService.requestAccess({
      email: userEmail,
      fullName: userName,
      agency,
      designation,
      jurisdiction,
      badgeNumber,
      reasonForAccess: reason,
    });

    setIsSubmitting(false);
    setRequestSubmitted(true);
    setFeedbackMessage(res.message);
  };

  return (
    <div className="min-h-screen bg-[#04070b] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-red-500/30 selection:text-red-300">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-orange-600/5 rounded-full blur-[160px]" />
        <div
          className="w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ef4444 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Top Header */}
      <header className="relative z-20 px-6 sm:px-12 pt-6 flex items-center justify-between border-b border-slate-800/60 pb-4 bg-[#04070b]/80 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="AAYAM" className="h-8 w-auto object-contain" />
          <div className="hidden sm:block">
            <div className="text-sm font-extrabold text-white tracking-wider">AAYAM</div>
            <div className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">
              Disaster Intelligence Platform
            </div>
          </div>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[11px] font-mono text-red-400 font-semibold">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>ACCESS RESTRICTED // 403 FORBIDDEN</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto w-full px-6 py-10 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Restriction Notice */}
          <div className="md:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-xs font-mono text-red-400 font-bold">
              <BadgeAlert className="w-4 h-4 text-red-400" />
              <span>CLEARANCE REQUIRED</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Access Restricted to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-amber-400">
                Approved Authorities
              </span>
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed">
              Your identity was verified through authentication, but this account is not registered on the official
              AAYAM Disaster Authority Allowlist.
            </p>

            {/* Account Details Box */}
            <div className="p-4 rounded-2xl bg-[#080d14] border border-slate-800 space-y-2 font-mono text-xs">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Authenticated Account</div>
              <div className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="truncate">{userEmail}</span>
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Authorization Status:</span>
                <span className="text-red-400 font-bold">DENIED // NOT IN REGISTRY</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={onSignOutAndSwitch}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5 text-red-400" />
                <span>Switch / Sign In with Authorized Account</span>
              </button>

              <Link
                to="/"
                className="w-full py-2.5 rounded-xl text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Public Portal</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Clearance Request Form */}
          <div className="md:col-span-6 rounded-3xl bg-[#080d14]/90 border border-slate-800 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2">
              <Building className="w-4 h-4" />
              <span>REQUEST AUTHORITY ONBOARDING</span>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight">Submit Credentials</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              If you represent NDMA, SDMA, District Disaster Management Authorities, or emergency response forces, submit your details for clearance.
            </p>

            {requestSubmitted ? (
              <div className="mt-6 p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Clearance Request Received</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{feedbackMessage}</p>
                <div className="text-[10px] font-mono text-slate-400 pt-2 border-t border-emerald-500/20">
                  REF: REQ-{Date.now().toString().slice(-6)} // PENDING SEOC AUDIT
                </div>
              </div>
            ) : (
              <form onSubmit={handleClearanceRequest} className="mt-5 space-y-3 text-xs font-sans">
                <div>
                  <label className="block text-slate-300 font-medium mb-1 font-mono text-[11px]">
                    Department / Agency
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SDMA Uttarakhand, DDMA Chamoli, NDRF"
                    value={agency}
                    onChange={(e) => setAgency(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#05080c] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1 font-mono text-[11px]">
                      Designation
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Operations Officer"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#05080c] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1 font-mono text-[11px]">
                      Badge / Officer ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UK-SEOC-44"
                      value={badgeNumber}
                      onChange={(e) => setBadgeNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#05080c] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1 font-mono text-[11px]">
                    Command Jurisdiction
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Joshimath - Chamoli High-Altitude Sector"
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#05080c] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1 font-mono text-[11px]">
                    Operational Purpose
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Explain emergency operations or risk triage requirements..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#05080c] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3 h-3" />
                      <span>Submit Clearance Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 px-6 py-4 border-t border-slate-800/80 text-center text-[10px] font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto w-full">
        <div>SMART INDIA HACKATHON 2026 // PROBLEM SIH26191</div>
        <div className="flex items-center gap-1.5 text-red-400/80">
          <Lock className="w-3 h-3" />
          <span>UNAUTHORIZED TAMPERING SUBJECT TO SECTION 66F IT ACT 2000</span>
        </div>
      </footer>
    </div>
  );
};

export default AccessRestrictedPage;
