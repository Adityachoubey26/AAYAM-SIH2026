import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth, useUser } from '@clerk/clerk-react';
import { ENV } from '../../config/env';
import { authorityService } from '../../services/authorityService';

export const ProtectedRoute: React.FC = () => {
  const location = useLocation();
  const clerkKey =
    ENV.CLERK_PUBLISHABLE_KEY ||
    (typeof window !== 'undefined' ? localStorage.getItem('aayam_clerk_pk') : '');

  if (clerkKey) {
    return <ClerkAuthorityProtectedOutlet location={location} />;
  }

  // Fallback protection for local development evaluation without Clerk key
  const isDevAuthenticated = localStorage.getItem('aayam_auth_session') === 'true';

  if (!isDevAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

const ClerkAuthorityProtectedOutlet: React.FC<{ location: any }> = ({ location }) => {
  const { isLoaded: isAuthLoaded, isSignedIn } = useAuth();
  const { isLoaded: isUserLoaded, user } = useUser();

  const [isVerifying, setIsVerifying] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    let isMounted = true;

    const checkBackendAuthorization = async () => {
      if (!isAuthLoaded || !isUserLoaded) return;

      if (!isSignedIn || !user) {
        if (isMounted) {
          setIsVerifying(false);
          setIsAuthorized(false);
        }
        return;
      }

      const email = user.primaryEmailAddress?.emailAddress;
      if (!email) {
        if (isMounted) {
          setIsVerifying(false);
          setIsAuthorized(false);
        }
        return;
      }

      sessionStorage.setItem('aayam_attempted_email', email);

      try {
        const result = await authorityService.verifyAuthority(email, user.id);
        if (isMounted) {
          setIsAuthorized(result.authorized);
          setIsVerifying(false);
        }
      } catch {
        if (isMounted) {
          setIsAuthorized(false);
          setIsVerifying(false);
        }
      }
    };

    checkBackendAuthorization();

    return () => {
      isMounted = false;
    };
  }, [isAuthLoaded, isUserLoaded, isSignedIn, user]);

  if (!isAuthLoaded || !isUserLoaded || isVerifying) {
    return (
      <div className="min-h-screen bg-[#04070b] flex flex-col items-center justify-center text-slate-100 font-mono text-xs">
        <div className="w-9 h-9 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin mb-4" />
        <div className="text-white font-bold tracking-wider">AAYAM DISASTER COMMAND GATEWAY</div>
        <p className="text-slate-400 mt-1">Verifying server-side authority clearance...</p>
      </div>
    );
  }

  // Not authenticated via Clerk -> redirect to Login
  if (!isSignedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Authenticated via Clerk, but NOT on the AAYAM Authority allowlist -> redirect to Access Restricted
  if (!isAuthorized) {
    return <Navigate to="/access-restricted" replace />;
  }

  // Authenticated AND Authorized -> grant access to Authority Dashboard
  return <Outlet />;
};

export default ProtectedRoute;
