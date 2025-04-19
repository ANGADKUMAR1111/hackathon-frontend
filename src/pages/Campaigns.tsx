import React, { useState } from 'react';
import styled from 'styled-components';
import CreateCampaign from './CreateCampaign.tsx';
import NewPromoterCampaign from './NewPromoterCampaign.tsx';
import NewLeads from '../components/NewLeads.js';
import CampaignDetails from '../components/CampaignDetails.js';

// Styled components
const Container = styled.div`
  padding: 24px;
  background-color: #f7f9fc;
  min-height: 100vh;
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

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
    
    .name {
      font-size: 0.875rem;
      font-weight: 500;
      color: #111827;
    }
    
    .email {
      font-size: 0.75rem;
      color: #6b7280;
    }
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 6px 6px 0 0;
  background-color: ${props => props.active ? '#4361ee' : 'transparent'};
  color: ${props => props.active ? 'white' : '#6b7280'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -1px;
  
  &:hover {
    background-color: ${props => props.active ? '#4361ee' : '#f3f4f6'};
  }
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #3a56e4;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const SearchFilterContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const SearchInput = styled.div`
  position: relative;
  
  input {
    width: 240px;
    padding: 8px 16px 8px 36px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.875rem;
    
    &:focus {
      outline: none;
      border-color: #4361ee;
      box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    width: 16px;
    height: 16px;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const CampaignStatus = styled.div`
  margin-bottom: 24px;
  font-size: 0.75rem;
  color: #6b7280;
  
  span {
    color: #4361ee;
    font-weight: 500;
  }
`;

const CampaignsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
`;

const CampaignCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const CampaignHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
`;

const CampaignTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
`;

const StatusBadge = styled.span<{ active: boolean }>`
  padding: 4px 8px;
  background-color: ${props => props.active ? 'rgba(16, 185, 129, 0.1)' : 'rgba(156, 163, 175, 0.1)'};
  color: ${props => props.active ? '#10b981' : '#9ca3af'};
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const CampaignDate = styled.div`
  padding: 12px 16px;
  font-size: 0.75rem;
  color: #6b7280;
  background-color: #f9fafb;
`;

const CampaignStats = styled.div`
  display: flex;
  border-bottom: 1px solid #f3f4f6;
`;

const StatColumn = styled.div`
  flex: 1;
  padding: 16px;
  text-align: center;
  border-right: 1px solid #f3f4f6;
  
  &:last-child {
    border-right: none;
  }
  
  .stat-title {
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 4px;
  }
  
  .stat-value {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }
`;

const CampaignAction = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  
  .action-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #e0e7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    color: #4361ee;
  }
  
  .action-text {
    font-size: 0.875rem;
    color: #4b5563;
    flex: 1;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  gap: 12px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

// Campaign data type
interface Campaign {
  id: number;
  title: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  referrals: number;
  conversion: string;
  roi: string;
  actionText: string;
}

const Campaigns: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('past_promoters');
  const [searchValue, setSearchValue] = useState<string>('');
  const [showCreateCampaign, setShowCreateCampaign] = useState<boolean>(false);
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);

  // Sample campaign data
  const campaigns: Campaign[] = [
    {
      id: 1,
      title: 'Summer Referral Program',
      isActive: true,
      startDate: '5/31/2024',
      endDate: '8/30/2024',
      referrals: 245,
      conversion: '32%',
      roi: '287%',
      actionText: 'Increase reward by 10% to boost conversion rates during peak season'
    },
    {
      id: 2,
      title: 'Early Bird Special',
      isActive: false,
      startDate: '8/20/2024',
      endDate: '9/19/2024',
      referrals: 300,
      conversion: '40%',
      roi: '320%',
      actionText: 'Extend your campaign! Strong engagement suggests higher conversions with more time.'
    }
  ];

  // Handler for viewing campaign details
  const handleViewCampaign = (id: number) => {
    setSelectedCampaign(id);
  };

  // Handler for going back from campaign details
  const handleBackFromDetails = () => {
    setSelectedCampaign(null);
  };

  // If a campaign is selected, show its details
  if (selectedCampaign !== null) {
    return <CampaignDetails onBack={handleBackFromDetails} />;
  }

  // Render the appropriate content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'new_promoter':
        return <NewPromoterCampaign />;
      case 'new_leads':
        return <NewLeads />;
      default:
        return (
          <>
            <ActionBar>
              <CreateButton onClick={() => setShowCreateCampaign(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create New Campaign
              </CreateButton>

              <SearchFilterContainer>
                <SearchInput>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search campaigns..." 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </SearchInput>

                <FilterButton>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filter
                </FilterButton>
              </SearchFilterContainer>
            </ActionBar>

            <CampaignStatus>
              2 Campaigns • <span>1 Active</span>
            </CampaignStatus>

            <CampaignsGrid>
              {campaigns.map(campaign => (
                <CampaignCard key={campaign.id}>
                  <CampaignHeader>
                    <CampaignTitle>{campaign.title}</CampaignTitle>
                    <StatusBadge active={campaign.isActive}>
                      {campaign.isActive ? 'Active' : 'Inactive'}
                    </StatusBadge>
                  </CampaignHeader>
                  
                  <CampaignDate>
                    {campaign.startDate} - {campaign.endDate}
                  </CampaignDate>
                  
                  <CampaignStats>
                    <StatColumn>
                      <div className="stat-title">Referrals</div>
                      <div className="stat-value">{campaign.referrals}</div>
                    </StatColumn>
                    <StatColumn>
                      <div className="stat-title">Conversion</div>
                      <div className="stat-value">{campaign.conversion}</div>
                    </StatColumn>
                    <StatColumn>
                      <div className="stat-title">ROI</div>
                      <div className="stat-value">{campaign.roi}</div>
                    </StatColumn>
                  </CampaignStats>
                  
                  <CampaignAction>
                    <div className="action-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="action-text">{campaign.actionText}</div>
                  </CampaignAction>
                  
                  <ActionButtonsContainer>
                    <ActionButton aria-label="Delete">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </ActionButton>
                    <ActionButton 
                      aria-label="View"
                      onClick={() => handleViewCampaign(campaign.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </ActionButton>
                  </ActionButtonsContainer>
                </CampaignCard>
              ))}
            </CampaignsGrid>
          </>
        );
    }
  };

  return (
    <Container>
      {showCreateCampaign && <CreateCampaign onCancel={() => setShowCreateCampaign(false)} />}

      <Header>
        <Title>Create & Manage Referral Campaigns</Title>
      </Header>

      <TabsContainer>
        <Tab 
          active={activeTab === 'past_promoters'} 
          onClick={() => setActiveTab('past_promoters')}
        >
          Past Promoters
        </Tab>
        
        <Tab 
          active={activeTab === 'new_promoter'} 
          onClick={() => setActiveTab('new_promoter')}
        >
          New Promoter
        </Tab>
        <Tab 
          active={activeTab === 'new_leads'} 
          onClick={() => setActiveTab('new_leads')}
        >
          New Leads
        </Tab>
      </TabsContainer>

      {renderContent()}
    </Container>
  );
};

export default Campaigns;