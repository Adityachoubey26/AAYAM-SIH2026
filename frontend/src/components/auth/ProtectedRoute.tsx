import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { ENV } from '../../config/env';

export const ProtectedRoute: React.FC = () => {
  const location = useLocation();
  const clerkKey = ENV.CLERK_PUBLISHABLE_KEY || localStorage.getItem('aayam_clerk_pk');

  if (clerkKey) {
    return <ClerkProtectedOutlet location={location} />;
  }

  // Fallback protection for local development without Clerk key set
  const isDevAuthenticated = localStorage.getItem('aayam_auth_session') === 'true';

  if (!isDevAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

const ClerkProtectedOutlet: React.FC<{ location: any }> = ({ location }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#06090d] flex flex-col items-center justify-center text-slate-100 font-mono text-xs">
        <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin mb-3" />
        <p className="text-slate-400">Verifying Authority Clearance with Clerk...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
