import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 20px;
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
    font-size: 0.8rem;
    color: #6b7280;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 12px 20px;
  background-color: ${props => props.active ? '#4361ee' : 'transparent'};
  color: ${props => props.active ? 'white' : '#6b7280'};
  border: none;
  border-radius: 4px 4px 0 0;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#4361ee' : '#f3f4f6'};
  }
`;

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

const InputField = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #111827;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
  }
`;

const RewardTypeContainer = styled.div`
  display: flex;
  gap: 2px;
  background-color: #f3f4f6;
  border-radius: 4px;
  padding: 4px;
  width: fit-content;
  margin-bottom: 8px;
`;

const RewardTypeButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#4361ee' : '#6b7280'};
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: ${props => props.active ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none'};
`;

const HelperText = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 4px;
`;

const TextareaField = styled.textarea`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #111827;
  min-height: 80px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
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

const PreviewSection = styled.div`
  padding: 24px;
  border-top: 1px solid #e5e7eb;
`;

const PreviewTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
`;

const PreviewContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`;

const PreviewTabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
`;

const PreviewTab = styled.button<{ active: boolean }>`
  padding: 12px 16px;
  background-color: ${props => props.active ? 'white' : '#f9fafb'};
  border: none;
  border-right: 1px solid #e5e7eb;
  font-size: 0.875rem;
  color: ${props => props.active ? '#4361ee' : '#6b7280'};
  font-weight: ${props => props.active ? '500' : 'normal'};
  cursor: pointer;
  border-bottom: 1px solid ${props => props.active ? '#4361ee' : 'transparent'};
  margin-bottom: -1px;
`;

const PreviewContent = styled.div`
  padding: 24px;
  background-color: #f9fafb;
`;

const WelcomeCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
`;

const WelcomeTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
`;

const CompanyDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  max-width: 550px;
  margin: 0 auto 24px;
  line-height: 1.5;
`;

const RewardText = styled.div`
  font-size: 0.875rem;
  color: #4361ee;
  font-weight: 500;
  margin-bottom: 24px;
`;

const PromoteButton = styled.button`
  padding: 10px 24px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 24px;
  border-top: 1px solid #e5e7eb;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #3a56e4;
  }
`;

const TabContent = styled.div<{ active: boolean }>`
  display: ${props => props.active ? 'block' : 'none'};
`;

const InfoCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  vertical-align: middle;
  cursor: help;
  
  svg {
    width: 14px;
    height: 14px;
    color: #6b7280;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #4b5563;
  cursor: pointer;
  
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
  }
`;

const NewPromoterCampaign: React.FC = () => {
  const [activeCampaignTab, setActiveCampaignTab] = useState('promoter_settings');
  const [formData, setFormData] = useState({
    campaignName: 'Summer Referral Special',
    rewardType: 'points',
    rewardValue: '200 points',
    promoterMessage: 'Hey! Share this with your friends and get $20 for each successful signup!',
    leadsRewardType: 'discount',
    leadsRewardValue: '20%',
    referredMessage: "You've been invited! Sign up now and get 15% off your first order.",
    formFields: [
      { id: 'fullName', name: 'Full Name', checked: true },
      { id: 'emailAddress', name: 'Email Address', checked: true },
      { id: 'phoneNumber', name: 'Phone Number', checked: false },
      { id: 'agreeTerms', name: 'Agree to Terms & Conditions & Opt-in', checked: true }
    ]
  });
  
  const toggleFormField = (id: string) => {
    setFormData({
      ...formData,
      formFields: formData.formFields.map(field => 
        field.id === id ? { ...field, checked: !field.checked } : field
      )
    });
  };
  
  return (
    <CampaignContainer>
      <CampaignHeader>
        <CampaignTabs>
          <CampaignTab 
            active={activeCampaignTab === 'promoter_settings'} 
            onClick={() => setActiveCampaignTab('promoter_settings')}
          >
            Promoter Settings
          </CampaignTab>
          <CampaignTab 
            active={activeCampaignTab === 'leads_settings'} 
            onClick={() => setActiveCampaignTab('leads_settings')}
          >
            Leads Settings
          </CampaignTab>
        </CampaignTabs>
      </CampaignHeader>
      
      <TabContent active={activeCampaignTab === 'promoter_settings'}>
        <FormSection>
          <FormRow>
            <FormLabel>Campaign Name</FormLabel>
            <InputField 
              type="text" 
              value={formData.campaignName}
              onChange={(e) => setFormData({...formData, campaignName: e.target.value})}
            />
          </FormRow>
          
          <FormRow>
            <FormLabel>Reward Type<span className="required">*</span></FormLabel>
            <RewardTypeContainer>
              <RewardTypeButton 
                active={formData.rewardType === 'points'} 
                onClick={() => setFormData({...formData, rewardType: 'points'})}
              >
                Points
              </RewardTypeButton>
            </RewardTypeContainer>
            <HelperText>($1 is equivalent to 10 points)</HelperText>
          </FormRow>
          
          <FormRow>
            <FormLabel>Reward Value<span className="required">*</span></FormLabel>
            <InputField 
              type="text" 
              value={formData.rewardValue}
              onChange={(e) => setFormData({...formData, rewardValue: e.target.value})}
            />
          </FormRow>
          
          <FormRow>
            <FormLabel>Promoter Message<span className="required">*</span></FormLabel>
            <TextareaField 
              value={formData.promoterMessage}
              onChange={(e) => setFormData({...formData, promoterMessage: e.target.value})}
            />
          </FormRow>
          
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
      </TabContent>
      
      <TabContent active={activeCampaignTab === 'leads_settings'}>
        <FormSection>
          <FormRow>
            <FormLabel>Campaign Name</FormLabel>
            <InputField 
              type="text" 
              value={formData.campaignName}
              onChange={(e) => setFormData({...formData, campaignName: e.target.value})}
            />
          </FormRow>
          
          <FormRow>
            <FormLabel>Leads Settings</FormLabel>
          </FormRow>
          
          <FormRow>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ flex: 1 }}>
                <FormLabel>Reward Type<span className="required">*</span></FormLabel>
                <RewardTypeContainer>
                  <RewardTypeButton 
                    active={formData.leadsRewardType === 'discount'} 
                    onClick={() => setFormData({...formData, leadsRewardType: 'discount'})}
                  >
                    Discount
                  </RewardTypeButton>
                </RewardTypeContainer>
              </div>
              
              <div style={{ flex: 1 }}>
                <FormLabel>Reward Value<span className="required">*</span></FormLabel>
                <InputField 
                  type="text" 
                  value={formData.leadsRewardValue}
                  onChange={(e) => setFormData({...formData, leadsRewardValue: e.target.value})}
                  placeholder="e.g., 20%"
                />
              </div>
            </div>
          </FormRow>
          
          <FormRow>
            <FormLabel>Referred Message<span className="required">*</span></FormLabel>
            <TextareaField 
              value={formData.referredMessage}
              onChange={(e) => setFormData({...formData, referredMessage: e.target.value})}
              placeholder="e.g., You've been invited! Sign up now and get 15% off your first order."
            />
          </FormRow>
          
          <FormRow>
            <FormLabel>
              Form Fields
              <span className="required">*</span>
              <InfoCircle>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </InfoCircle>
            </FormLabel>
            <CheckboxContainer>
              {formData.formFields.map(field => (
                <CheckboxLabel key={field.id}>
                  <input 
                    type="checkbox" 
                    checked={field.checked}
                    onChange={() => toggleFormField(field.id)}
                    aria-label={`${field.name} field option`}
                  />
                  {field.name}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </FormRow>
          
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
      </TabContent>
      
      <PreviewSection>
        <PreviewTitle>Landing Page Preview</PreviewTitle>
        <PreviewContainer>
          <PreviewTabs>
            <PreviewTab active={true}>Chat with AI</PreviewTab>
            <PreviewTab active={false}>My Leads</PreviewTab>
            <PreviewTab active={false}>My Rewards</PreviewTab>
          </PreviewTabs>
          
          <PreviewContent>
            <WelcomeCard>
              <WelcomeTitle>Welcome back! You're promoting:</WelcomeTitle>
              <CompanyName>SnackNation Express</CompanyName>
              <CompanyDescription>
                SnackNation delivers hand-picked, chef-curated snacks — from spicy noodle nuts to sweet jaggery treats — delivered fresh to your door in under 45 minutes.
              </CompanyDescription>
              <RewardText>Every successful referral earns you 200 points</RewardText>
              <PromoteButton>Start Promoting & Earning</PromoteButton>
            </WelcomeCard>
          </PreviewContent>
        </PreviewContainer>
      </PreviewSection>
      
      <FooterButtons>
        <EditButton>Edit</EditButton>
      </FooterButtons>
    </CampaignContainer>
  );
};

export default NewPromoterCampaign; 