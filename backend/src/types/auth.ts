export type AuthorityRole =
  | 'SUPER_ADMIN'
  | 'STATE_AUTHORITY'
  | 'DISTRICT_MAGISTRATE'
  | 'FIELD_OFFICER'
  | 'OBSERVER';

export type ClearanceLevel = 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4';

export type AuthorityPermission =
  | 'dashboard:view'
  | 'risk:view'
  | 'risk:manage'
  | 'habitations:view'
  | 'habitations:manage'
  | 'relocation:plan'
  | 'relocation:approve'
  | 'alerts:broadcast'
  | 'users:manage';

export interface AuthorityUser {
  id: string;
  email: string;
  fullName: string;
  role: AuthorityRole;
  jurisdiction: string;
  badgeNumber: string;
  clearanceLevel: ClearanceLevel;
  isApproved: boolean;
  status: 'ACTIVE' | 'PENDING_APPROVAL' | 'SUSPENDED';
  permissions: AuthorityPermission[];
  approvedAt?: string;
  approvedBy?: string;
}

export interface AuthorityVerificationResult {
  authorized: boolean;
  reason?: 'APPROVED' | 'PENDING_APPROVAL' | 'NOT_REGISTERED' | 'SUSPENDED';
  user?: AuthorityUser;
  message: string;
}

export interface AccessRequestPayload {
  email: string;
  fullName: string;
  agency: string;
  designation: string;
  jurisdiction: string;
  badgeNumber?: string;
  reasonForAccess: string;
}
