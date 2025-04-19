import React from 'react';
import styled from 'styled-components';

// Styled components
const CampaignContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

const CampaignHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;
`;

const CampaignTabs = styled.div`
  display: flex;
  background-color: #f9fafb;
  padding: 0 16px;
  border-bottom: 1px solid #e5e7eb;
`;

const CampaignTab = styled.button<{ active: boolean }>`
  padding: 12px 16px;
  background: transparent;
  border: none;
  color: ${props => props.active ? '#4361ee' : '#6b7280'};
  font-size: 0.875rem;
  font-weight: ${props => props.active ? '500' : 'normal'};
  border-bottom: 2px solid ${props => props.active ? '#4361ee' : 'transparent'};
  cursor: pointer;
`;

const FormSection = styled.div`
  padding: 24px;
`;

const FormRow = styled.div`
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 8px;
  
  .required {
    color: #ef4444;
    margin-left: 4px;
  }
`;

const FollowUpSection = styled.div`
  background-color: #f7f9fc;
  border-radius: 8px;
  padding: 24px;
`;

const FollowUpFlow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConnectorLine = styled.div`
  width: 1px;
  height: 24px;
  background-color: #e5e7eb;
  margin: 4px 0;
`;

const FollowUpItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  
  .icon {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #4361ee;
  }
  
  .text {
    font-size: 0.875rem;
    color: #111827;
    font-weight: 500;
  }
`;

const WaitItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 999px;
  padding: 6px 12px;
  width: fit-content;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  
  .icon {
    color: #4361ee;
    margin-right: 8px;
  }
  
  .text {
    font-size: 0.75rem;
    color: #6b7280;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #6b7280;
  }
`;

const NewLeads: React.FC = () => {
  return (
    <CampaignContainer>
      <CampaignHeader>
        <CampaignTabs>
          <CampaignTab active={true}>
            Leads Settings
          </CampaignTab>
        </CampaignTabs>
      </CampaignHeader>
      
      <FormSection>
        <FormRow>
          <FormLabel>Follow-Up Strategy<span className="required">*</span></FormLabel>
          <FollowUpSection>
            <FollowUpFlow>
              <FollowUpItem>
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#E6F7EC" />
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#4361ee"/>
                  </svg>
                  <div className="text">SMS</div>
                </div>
                <ActionButtons>
                  <ActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </ActionButton>
                  <ActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </ActionButton>
                </ActionButtons>
              </FollowUpItem>
              
              <ConnectorLine />
              
              <WaitItem>
                <div className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#4361ee" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="#4361ee" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text">Wait: 5 days</div>
              </WaitItem>
              
              <ConnectorLine />
              
              <FollowUpItem>
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#E6F7EC" />
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#4361ee"/>
                  </svg>
                  <div className="text">Email</div>
                </div>
                <ActionButtons>
                  <ActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </ActionButton>
                  <ActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </ActionButton>
                </ActionButtons>
              </FollowUpItem>
              
              <ConnectorLine />
              
              <WaitItem>
                <div className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#4361ee" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="#4361ee" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text">Wait: 2 days</div>
              </WaitItem>
              
              <ConnectorLine />
              
              <FollowUpItem>
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#E6F7EC" />
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#4361ee"/>
                  </svg>
                  <div className="text">SMS</div>
                </div>
                <ActionButtons>
                  <ActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </ActionButton>
                  <ActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </ActionButton>
                </ActionButtons>
              </FollowUpItem>
              
              <ConnectorLine />
              
              <WaitItem>
                <div className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#4361ee" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="#4361ee" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text">Wait: 3 days</div>
              </WaitItem>
              
              <ConnectorLine />
              
              <FollowUpItem>
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#E6F7EC" />
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#4361ee"/>
                  </svg>
                  <div className="text">SMS</div>
                </div>
                <ActionButtons>
                  <ActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </ActionButton>
                  <ActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </ActionButton>
                </ActionButtons>
              </FollowUpItem>
            </FollowUpFlow>
          </FollowUpSection>
        </FormRow>
      </FormSection>
    </CampaignContainer>
  );
};

export default NewLeads; 