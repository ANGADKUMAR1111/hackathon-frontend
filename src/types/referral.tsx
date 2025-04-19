export type ReferralStatus = 'pending' | 'in_progress' | 'hired' | 'rejected';

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry?: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Referral {
  id: string;
  company: Company;
  position: string;
  candidate: Candidate;
  status: ReferralStatus;
  referredDate: string;
  lastUpdated?: string;
  reward?: string;
  notes?: string;
} 