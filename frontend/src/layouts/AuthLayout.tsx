import React from 'react';
import { Outlet } from 'react-router-dom';

export interface AuthLayoutProps {
  children?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      {children || <Outlet />}
    </div>
  );
};

export default AuthLayout;
