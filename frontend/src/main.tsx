import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClerkProvider } from '@clerk/clerk-react';

import AppRoutes from './routes/AppRoutes';
import { ENV } from './config/env';
import { initializeLeafletIcons } from './config/mapConfig';
import './index.css';

// Initialize Leaflet marker assets
initializeLeafletIcons();

// Configure React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const clerkPublishableKey =
  ENV.CLERK_PUBLISHABLE_KEY ||
  (typeof window !== 'undefined' ? localStorage.getItem('aayam_clerk_pk') : '') ||
  '';

const RootApp: React.FC = () => {
  const content = (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );

  // If Clerk publishable key is configured, wrap with ClerkProvider
  if (clerkPublishableKey) {
    return (
      <ClerkProvider
        publishableKey={clerkPublishableKey}
        appearance={{
          variables: {
            colorPrimary: '#10b981',
            colorBackground: '#090e15',
            colorInputBackground: '#060a0f',
            colorInputText: '#f8fafc',
            colorText: '#f1f5f9',
            colorTextSecondary: '#94a3b8',
            borderRadius: '0.75rem',
          },
        }}
      >
        {content}
      </ClerkProvider>
    );
  }

  // Graceful fallback for local development without Clerk key set yet
  return content;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
