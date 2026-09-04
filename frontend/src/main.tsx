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

const clerkPublishableKey = ENV.CLERK_PUBLISHABLE_KEY;

const RootApp: React.FC = () => {
  const content = (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );

  // If Clerk publishable key is configured, wrap with ClerkProvider
  if (clerkPublishableKey) {
    return (
      <ClerkProvider publishableKey={clerkPublishableKey}>
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
