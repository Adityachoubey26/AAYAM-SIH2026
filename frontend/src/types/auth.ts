export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  role: 'admin' | 'officer' | 'analyst';
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
