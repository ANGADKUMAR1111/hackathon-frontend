import { Referral } from '../types/referral';

// Mock data
const mockReferrals: Referral[] = [
  {
    id: '1',
    company: {
      id: 'c1',
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
      industry: 'Technology'
    },
    position: 'Senior Software Engineer',
    candidate: {
      id: 'can1',
      name: 'Emily Johnson',
      email: 'emily.johnson@example.com',
      phone: '+1 (555) 123-4567'
    },
    status: 'in_progress',
    referredDate: '2023-03-15T10:30:00Z',
    lastUpdated: '2023-03-20T14:45:00Z',
    reward: '$5,000'
  },
  {
    id: '2',
    company: {
      id: 'c2',
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
      industry: 'Technology'
    },
    position: 'Product Manager',
    candidate: {
      id: 'can2',
      name: 'Michael Smith',
      email: 'michael.smith@example.com'
    },
    status: 'hired',
    referredDate: '2023-02-10T09:15:00Z',
    lastUpdated: '2023-03-01T16:20:00Z',
    reward: '$4,000',
    notes: 'Started on April 1st'
  },
  {
    id: '3',
    company: {
      id: 'c3',
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
      industry: 'E-commerce'
    },
    position: 'UX Designer',
    candidate: {
      id: 'can3',
      name: 'Sarah Davis',
      email: 'sarah.davis@example.com',
      phone: '+1 (555) 987-6543'
    },
    status: 'pending',
    referredDate: '2023-03-25T11:45:00Z'
  },
  {
    id: '4',
    company: {
      id: 'c4',
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png',
      industry: 'Entertainment'
    },
    position: 'Backend Developer',
    candidate: {
      id: 'can4',
      name: 'James Wilson',
      email: 'james.wilson@example.com'
    },
    status: 'rejected',
    referredDate: '2023-01-05T13:20:00Z',
    lastUpdated: '2023-01-20T10:10:00Z',
    notes: 'Company decided to hire internally'
  },
  {
    id: '5',
    company: {
      id: 'c5',
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png',
      industry: 'Technology'
    },
    position: 'iOS Engineer',
    candidate: {
      id: 'can5',
      name: 'Jennifer Brown',
      email: 'jennifer.brown@example.com',
      phone: '+1 (555) 234-5678'
    },
    status: 'in_progress',
    referredDate: '2023-03-18T09:30:00Z',
    lastUpdated: '2023-03-22T15:40:00Z',
    reward: '$6,000'
  },
  {
    id: '6',
    company: {
      id: 'c6',
      name: 'Meta',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png',
      industry: 'Technology'
    },
    position: 'Data Scientist',
    candidate: {
      id: 'can6',
      name: 'David Lee',
      email: 'david.lee@example.com'
    },
    status: 'pending',
    referredDate: '2023-03-27T14:15:00Z',
    reward: '$4,500'
  }
];

// Simulated API calls with timeout to mimic network request
export const getReferrals = (): Promise<Referral[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockReferrals);
    }, 800); // Simulate network delay
  });
};

export const getReferralById = (id: string): Promise<Referral | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const referral = mockReferrals.find(r => r.id === id);
      resolve(referral);
    }, 500);
  });
};

export const addReferral = (referral: Omit<Referral, 'id'>): Promise<Referral> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newReferral: Referral = {
        ...referral,
        id: `${mockReferrals.length + 1}`,
      };
     
      resolve(newReferral);
    }, 700);
  });
};

export const updateReferralStatus = (
  id: string, 
  status: Referral['status']
): Promise<Referral | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const referralIndex = mockReferrals.findIndex(r => r.id === id);
      if (referralIndex === -1) {
        resolve(undefined);
        return;
      }
      
      // In a real app, this would update the database
      const updatedReferral = {
        ...mockReferrals[referralIndex],
        status,
        lastUpdated: new Date().toISOString()
      };
      
      // mockReferrals[referralIndex] = updatedReferral;
      resolve(updatedReferral);
    }, 600);
  });
}; 