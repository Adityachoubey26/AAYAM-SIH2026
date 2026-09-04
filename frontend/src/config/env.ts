export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  CLERK_PUBLISHABLE_KEY:
    import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ||
    (typeof window !== 'undefined' ? localStorage.getItem('aayam_clerk_pk') || '' : '') ||
    '',
};
