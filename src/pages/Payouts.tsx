import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  background-color: #f7f9fc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const RefreshButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  
  &:hover {
    color: #111827;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 4px;
`;

const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
  background: white;
  border-radius: 8px 8px 0 0;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 16px 24px;
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.active ? '#4361ee' : 'transparent'};
  color: ${props => props.active ? '#4361ee' : '#6b7280'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.active ? '#4361ee' : '#111827'};
  }
`;

const TableContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  
  th {
    background-color: #f9fafb;
    color: #6b7280;
    font-weight: 500;
    font-size: 0.875rem;
  }
  
  td {
    color: #111827;
    font-size: 0.875rem;
  }
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => props.status === 'Paid' && `
    background-color: #f0fdf4;
    color: #22c55e;
  `}
  
  ${props => props.status === 'Disputed' && `
    background-color: #fff7ed;
    color: #f97316;
  `}
`;

const ActionButton = styled.button`
  padding: 6px;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  
  &:hover {
    color: #111827;
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + span {
      background-color: #4361ee;
    }
    
    &:checked + span:before {
      transform: translateX(24px);
    }
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e5e7eb;
  transition: 0.2s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`;

const PaymentMethodsContainer = styled.div`
  padding: 24px;
`;

const PaymentMethodTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 16px;
`;

const PaymentMethod = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const PaymentOption = styled.label<{ selected: boolean }>`
  flex: 1;
  padding: 16px;
  border: 1px solid ${props => props.selected ? '#4361ee' : '#e5e7eb'};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  
  input {
    display: none;
  }
  
  &:hover {
    border-color: #4361ee;
  }
`;

const OptionText = styled.div`
  font-size: 0.875rem;
  color: #111827;
`;

const AmountInput = styled.div`
  margin: 24px 0;
  
  input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.875rem;
    
    &:focus {
      outline: none;
      border-color: #4361ee;
      box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
    }
  }
`;

const HelperText = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 4px;
`;

const BuyButton = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 10px 24px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #3a56e4;
  }
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  &:hover {
    border-color: #d1d5db;
  }
`;

interface PayoutData {
  id: string;
  promoterName: string;
  points: number;
  rewardDate: string;
  rewardEarnedFor: string;
  status: 'Paid' | 'Disputed';
}

interface DisputeData {
  id: string;
  promoterName: string;
  points: number;
  submittedOn: string;
  rewardEarnedFor: string;
  status: 'Resolved' | 'Under Review';
}

const Payouts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'payouts' | 'disputes' | 'settings'>('payouts');
  const [preloadEnabled, setPreloadEnabled] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit');
  
  const payouts: PayoutData[] = [
    {
      id: 'RP-1048',
      promoterName: 'Emery Dolidis',
      points: 500,
      rewardDate: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Paid'
    },
    {
      id: 'RP-1047',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      rewardDate: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Disputed'
    },
    {
      id: 'RP-1048',
      promoterName: 'Emery Dolidis',
      points: 500,
      rewardDate: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Paid'
    },
    {
      id: 'RP-1047',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      rewardDate: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Disputed'
    },
    {
      id: 'RP-1048',
      promoterName: 'Emery Dolidis',
      points: 500,
      rewardDate: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Disputed'
    },
    {
      id: 'RP-1047',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      rewardDate: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Paid'
    },
    {
      id: 'RP-1048',
      promoterName: 'Emery Dolidis',
      points: 500,
      rewardDate: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Paid'
    },
    {
      id: 'RP-1047',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      rewardDate: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Disputed'
    },
    {
      id: 'RP-1048',
      promoterName: 'Emery Dolidis',
      points: 500,
      rewardDate: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Paid'
    },
    {
      id: 'RP-1047',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      rewardDate: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Disputed'
    },
    {
      id: 'RP-1048',
      promoterName: 'Emery Dolidis',
      points: 500,
      rewardDate: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Disputed'
    },
    {
      id: 'RP-1047',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      rewardDate: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Paid'
    },
    // Add more payout data...
  ];
  
  const disputes: DisputeData[] = [
    {
      id: 'D-3001',
      promoterName: 'Emery Dolidis',
      points: 500,
      submittedOn: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Resolved'
    },
    {
      id: 'D-3002',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      submittedOn: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Under Review'
    },
    {
      id: 'D-3003',
      promoterName: 'Emery Dolidis',
      points: 500,
      submittedOn: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Resolved'
    },
    {
      id: 'D-3004',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      submittedOn: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Under Review'
    },
    {
      id: 'D-3005',
      promoterName: 'Emery Dolidis',
      points: 500,
      submittedOn: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Resolved'
    },
    {
      id: 'D-3006',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      submittedOn: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Under Review'
    },
    {
      id: 'D-3012',
      promoterName: 'Emery Dolidis',
      points: 500,
      submittedOn: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Resolved'
    },
    {
      id: 'D-3013',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      submittedOn: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Under Review'
    },
    {
      id: 'D-3012',
      promoterName: 'Emery Dolidis',
      points: 500,
      submittedOn: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Resolved'
    },
    {
      id: 'D-3013',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      submittedOn: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Under Review'
    },
    {
      id: 'D-3012',
      promoterName: 'Emery Dolidis',
      points: 500,
      submittedOn: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Resolved'
    },
    {
      id: 'D-3013',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      submittedOn: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Under Review'
    },
    {
      id: 'D-3012',
      promoterName: 'Emery Dolidis',
      points: 500,
      submittedOn: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Resolved'
    },
    {
      id: 'D-3013',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      submittedOn: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Under Review'
    },
    {
      id: 'D-3012',
      promoterName: 'Emery Dolidis',
      points: 500,
      submittedOn: '28-4-2024',
      rewardEarnedFor: 'Spring Boost',
      status: 'Resolved'
    },
    {
      id: 'D-3013',
      promoterName: 'Kadin Lipshutz',
      points: 250,
      submittedOn: '27-5-2024',
      rewardEarnedFor: 'Summer Referral Program',
      status: 'Under Review'
    },
    // Add more dispute data...
  ];

  return (
    <Container>
      <Header>
        <Title>Manage and monitor your payouts</Title>
        <RefreshButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 12c0-4.4 3.6-8 8-8 3.4 0 6.3 2.1 7.4 5M22 12c0 4.4-3.6 8-8 8-3.4 0-6.3-2.1-7.4-5"/>
          </svg>
        </RefreshButton>
      </Header>

      <StatsContainer>
        <StatCard>
          <StatIcon color="#4361ee">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </StatIcon>
          <StatContent>
            <StatLabel>Total Points Given</StatLabel>
            <StatValue>12,500</StatValue>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatIcon color="#f97316">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </StatIcon>
          <StatContent>
            <StatLabel>Current Point Balance</StatLabel>
            <StatValue>1,250</StatValue>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatIcon color="#22c55e">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M19 5L5 19"/>
            </svg>
          </StatIcon>
          <StatContent>
            <StatLabel>Last Points Transfer</StatLabel>
            <StatValue>April 9, 2025</StatValue>
          </StatContent>
        </StatCard>
      </StatsContainer>

      <TabsContainer>
        <Tab 
          active={activeTab === 'payouts'} 
          onClick={() => setActiveTab('payouts')}
        >
          All Payouts
        </Tab>
        <Tab 
          active={activeTab === 'disputes'} 
          onClick={() => setActiveTab('disputes')}
        >
          Disputes
        </Tab>
        <Tab 
          active={activeTab === 'settings'} 
          onClick={() => setActiveTab('settings')}
        >
          Payout Settings
        </Tab>
      </TabsContainer>

      {activeTab === 'payouts' && (
        <TableContainer>
          <div style={{ padding: '16px', display: 'flex', justifyContent: 'flex-end' }}>
            <FilterButton>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              Filter
            </FilterButton>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Payout ID</th>
                <th>Promoter Name</th>
                <th>Points</th>
                <th>Reward Date</th>
                <th>Reward Earned For</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map(payout => (
                <tr key={payout.id}>
                  <td>{payout.id}</td>
                  <td>{payout.promoterName}</td>
                  <td>{payout.points} pts</td>
                  <td>{payout.rewardDate}</td>
                  <td>{payout.rewardEarnedFor}</td>
                  <td>
                    <StatusBadge status={payout.status}>
                      {payout.status}
                    </StatusBadge>
                  </td>
                  <td>
                    <ActionButton>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="12" cy="5" r="1"/>
                        <circle cx="12" cy="19" r="1"/>
                      </svg>
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}

      {activeTab === 'disputes' && (
        <TableContainer>
          <div style={{ padding: '16px', display: 'flex', justifyContent: 'flex-end' }}>
            <FilterButton>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              Filter
            </FilterButton>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Dispute ID</th>
                <th>Promoter Name</th>
                <th>Points</th>
                <th>Submitted On</th>
                <th>Reward Earned For</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map(dispute => (
                <tr key={dispute.id}>
                  <td>{dispute.id}</td>
                  <td>{dispute.promoterName}</td>
                  <td>{dispute.points} pts</td>
                  <td>{dispute.submittedOn}</td>
                  <td>{dispute.rewardEarnedFor}</td>
                  <td>
                    <StatusBadge status={dispute.status === 'Resolved' ? 'Paid' : 'Disputed'}>
                      {dispute.status}
                    </StatusBadge>
                  </td>
                  <td>
                    <ActionButton>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="12" cy="5" r="1"/>
                        <circle cx="12" cy="19" r="1"/>
                      </svg>
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}

      {activeTab === 'settings' && (
        <TableContainer>
          <PaymentMethodsContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <PaymentMethodTitle>Preload Money</PaymentMethodTitle>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  Use Points to Reward Promoters Instantly
                </div>
              </div>
              <ToggleSwitch>
                <input 
                  type="checkbox" 
                  checked={preloadEnabled}
                  onChange={() => setPreloadEnabled(!preloadEnabled)}
                />
                <Slider />
              </ToggleSwitch>
            </div>

            <div style={{ background: '#f3f4f6', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827', marginBottom: '4px' }}>
                Current Point Balance: <span style={{ color: '#4361ee' }}>1,250</span> Points
              </div>
            </div>

            <PaymentMethodTitle>Payment Methods</PaymentMethodTitle>
            <PaymentMethod>
              <PaymentOption selected={selectedPaymentMethod === 'credit'}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="credit"
                  checked={selectedPaymentMethod === 'credit'}
                  onChange={() => setSelectedPaymentMethod('credit')}
                />
                <OptionText>Credit/Debit/ATM Card</OptionText>
              </PaymentOption>
              <PaymentOption selected={selectedPaymentMethod === 'paypal'}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="paypal"
                  checked={selectedPaymentMethod === 'paypal'}
                  onChange={() => setSelectedPaymentMethod('paypal')}
                />
                <OptionText>Paypal account</OptionText>
              </PaymentOption>
              <PaymentOption selected={selectedPaymentMethod === 'bank'}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="bank"
                  checked={selectedPaymentMethod === 'bank'}
                  onChange={() => setSelectedPaymentMethod('bank')}
                />
                <OptionText>Bank Transfer</OptionText>
              </PaymentOption>
              <PaymentOption selected={selectedPaymentMethod === 'upi'}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="upi"
                  checked={selectedPaymentMethod === 'upi'}
                  onChange={() => setSelectedPaymentMethod('upi')}
                />
                <OptionText>UPI</OptionText>
              </PaymentOption>
            </PaymentMethod>

            <AmountInput>
              <input type="text" placeholder="Enter amount..." />
              <HelperText>You'll receive 10 points per $1</HelperText>
            </AmountInput>

            <BuyButton>Buy Points</BuyButton>
          </PaymentMethodsContainer>
        </TableContainer>
      )}
    </Container>
  );
};

export default Payouts;