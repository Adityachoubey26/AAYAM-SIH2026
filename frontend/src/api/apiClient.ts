import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ENV } from '../config/env';

/**
 * Standardized Axios HTTP client instance for AAYAM platform
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: attach bearer token when available
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Token extraction placeholder (from Clerk or local storage)
    const token = typeof window !== 'undefined' ? localStorage.getItem('clerk-token') : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: standard response unpacking and error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const message = error.response?.data?.error || error.message || 'An unexpected error occurred';
    console.error('[API Error]:', message);
    return Promise.reject(error);
  }
);

export default apiClient;
