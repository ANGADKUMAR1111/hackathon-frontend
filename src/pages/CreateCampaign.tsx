import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 24px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #6b7280;
  
  &:hover {
    color: #111827;
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 16px;
`;

const ModalTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

const ModalDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const FormContainer = styled.div`
  max-width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
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
  
  &::placeholder {
    color: #9ca3af;
  }
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
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  &:not(:last-child) {
    &:after {
      content: '';
      position: absolute;
      top: 20px;
      left: 36px;
      width: 80px;
      height: 1px;
      background-color: #e5e7eb;
    }
  }
`;

const StepIcon = styled.div<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? '#4361ee' : '#e5e7eb'};
  color: ${props => props.active ? 'white' : '#9ca3af'};
  font-weight: 600;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
  font-size: 14px;
`;

const StepLabel = styled.div<{ active: boolean }>`
  font-size: 0.75rem;
  color: ${props => props.active ? '#4361ee' : '#6b7280'};
  font-weight: ${props => props.active ? '500' : 'normal'};
`;

const RewardTypeContainer = styled.div`
  background-color: #f3f4f6;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  width: fit-content;
  margin-bottom: 16px;
`;

interface RewardTypeButtonProps {
  active: boolean;
}

const RewardTypeButton = styled.button<RewardTypeButtonProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#4361ee' : '#4b5563'};
  box-shadow: ${props => props.active ? '0 1px 2px rgba(0, 0, 0, 0.05)' : 'none'};
`;

const HelperText = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 4px;
`;

const FormFieldsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #4b5563;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const InfoIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #e5e7eb;
  color: #6b7280;
  font-size: 10px;
  margin-left: 4px;
  cursor: help;
`;

const FollowUpSection = styled.div`
  background-color: #f3f4f6;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
`;

const StrategyStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  
  .icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #4361ee;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-right: 8px;
  }
  
  .step-text {
    font-size: 0.875rem;
    color: #111827;
  }
`;

const WaitDuration = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 6px 12px;
  border-radius: 999px;
  width: fit-content;
  margin: 8px 0 8px 32px;
  
  .icon {
    color: #4361ee;
    margin-right: 8px;
  }
  
  .text {
    font-size: 0.75rem;
    color: #4b5563;
  }
`;

const ActionTypeGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  margin-left: 32px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #111827;
  cursor: pointer;
  
  input[type="radio"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  margin-top: 16px;
  margin-left: 32px;
  max-width: 200px;
  
  select {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #111827;
    background-color: white;
    appearance: none;
    cursor: pointer;
    
    &:focus {
      outline: none;
      border-color: #4361ee;
      box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #6b7280;
    pointer-events: none;
  }
`;

const MessageInput = styled.div`
  margin-top: 16px;
  margin-left: 32px;
  max-width: 450px;
  
  textarea {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #111827;
    resize: vertical;
    min-height: 80px;
    
    &:focus {
      outline: none;
      border-color: #4361ee;
      box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
    }
    
    &::placeholder {
      color: #9ca3af;
    }
  }
`;

const AddActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  width: auto;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 16px;
  margin-left: 32px;
  
  &:hover {
    background-color: #3a56e4;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const PreviewSection = styled.div`
  margin-top: 32px;
  
  .section-title {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 16px;
  }
`;

const PreviewContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`;

const PreviewContent = styled.div`
  padding: 24px;
  background-color: #f9fafb;
`;

const LandingPage = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 24px;
`;

const InviteHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  text-align: center;
  margin: 32px 0 16px;
`;

const PromoterTag = styled.span`
  color: #4361ee;
`;

const OfferText = styled.div`
  background-color: rgba(67, 97, 238, 0.1);
  color: #4361ee;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 999px;
  display: inline-block;
  margin: 16px 0;
`;

const SignupForm = styled.div`
  max-width: 400px;
  margin: 24px auto;
  
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 0.875rem;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #4361ee;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    margin-top: 8px;
    cursor: pointer;
  }
`;

const StepList = styled.div`
  margin: 24px auto;
  max-width: 300px;
  text-align: left;
`;

const StepListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 0.85rem;
  color: #4b5563;
  
  svg {
    width: 18px;
    height: 18px;
    color: #10b981;
    margin-right: 8px;
  }
`;

const AvatarCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e5e7eb;
  position: absolute;
  overflow: hidden;
  
  &.promoter {
    bottom: 40px;
    left: 160px;
  }
  
  &.lead {
    bottom: 40px;
    right: 140px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LaunchButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 32px;
  
  &:hover {
    background-color: #3a56e4;
  }
`;

interface CreateCampaignProps {
  onCancel?: () => void;
}

const CreateCampaign: React.FC<CreateCampaignProps> = ({ onCancel }) => {
  const [campaignName, setCampaignName] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  
  // Reward settings
  const [rewardType, setRewardType] = useState<'points' | 'discount'>('discount');
  const [rewardValue, setRewardValue] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  
  // Form fields
  const [formFields, setFormFields] = useState({
    fullName: true,
    emailAddress: true,
    phoneNumber: false,
    agree: true
  });
  
  // Follow-up strategy
  const [showActionForm, setShowActionForm] = useState(false);
  const [currentAction, setCurrentAction] = useState<'sms' | 'email' | 'wait'>('sms');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [followUpMessage, setFollowUpMessage] = useState('');
  
  const toggleFormField = (field: keyof typeof formFields) => {
    setFormFields(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };
  
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onCancel}>×</CloseButton>
        
        <ModalHeader>
          <ModalTitle>Create New Campaign</ModalTitle>
          <ModalDescription>Create a new referral campaign in just few steps.</ModalDescription>
        </ModalHeader>
        
        <FormContainer>
          <FormGroup>
            <Label htmlFor="campaignName">Campaign Name</Label>
            <InputField 
              id="campaignName"
              type="text" 
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              placeholder="e.g., Summer Referral Special"
            />
          </FormGroup>
          
          <StepsContainer>
            <StepItem>
              <StepIcon active={activeStep === 1}>01</StepIcon>
              <StepLabel active={activeStep === 1}>Promoter Settings</StepLabel>
            </StepItem>
            <StepItem>
              <StepIcon active={activeStep === 2}>02</StepIcon>
              <StepLabel active={activeStep === 2}>Leads Settings</StepLabel>
            </StepItem>
          </StepsContainer>
          
          <FormGroup>
            <Label htmlFor="rewardType">
              Reward Type<span className="required">*</span>
            </Label>
            <RewardTypeContainer>
              <RewardTypeButton 
                active={rewardType === 'discount'} 
                onClick={() => setRewardType('discount')}
              >
                Discount
              </RewardTypeButton>
            </RewardTypeContainer>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="rewardValue">
              Reward Value<span className="required">*</span>
            </Label>
            <InputField 
              id="rewardValue"
              type="text" 
              value={rewardValue}
              onChange={(e) => setRewardValue(e.target.value)}
              placeholder="e.g., 20%"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="leadMessage">
              Lead Message<span className="required">*</span>
            </Label>
            <TextareaField 
              id="leadMessage"
              value={leadMessage}
              onChange={(e) => setLeadMessage(e.target.value)}
              placeholder="e.g., You've been invited! Sign up now and get 15% off your first order."
            />
          </FormGroup>
          
          <FormGroup>
            <Label>
              Form Fields<span className="required">*</span>
              <InfoIcon title="Select the fields that will be shown on the lead form">?</InfoIcon>
            </Label>
            <FormFieldsContainer>
              <CheckboxGroup>
                <Checkbox 
                  type="checkbox" 
                  id="fullName"
                  checked={formFields.fullName}
                  onChange={() => toggleFormField('fullName')}
                />
                <CheckboxLabel htmlFor="fullName">Full Name</CheckboxLabel>
              </CheckboxGroup>
              
              <CheckboxGroup>
                <Checkbox 
                  type="checkbox" 
                  id="emailAddress"
                  checked={formFields.emailAddress}
                  onChange={() => toggleFormField('emailAddress')}
                />
                <CheckboxLabel htmlFor="emailAddress">Email Address</CheckboxLabel>
              </CheckboxGroup>
              
              <CheckboxGroup>
                <Checkbox 
                  type="checkbox" 
                  id="phoneNumber"
                  checked={formFields.phoneNumber}
                  onChange={() => toggleFormField('phoneNumber')}
                />
                <CheckboxLabel htmlFor="phoneNumber">Phone Number</CheckboxLabel>
              </CheckboxGroup>
              
              <CheckboxGroup>
                <Checkbox 
                  type="checkbox" 
                  id="agree"
                  checked={formFields.agree}
                  onChange={() => toggleFormField('agree')}
                />
                <CheckboxLabel htmlFor="agree">Agree to Terms & Conditions & Opt-In</CheckboxLabel>
              </CheckboxGroup>
            </FormFieldsContainer>
          </FormGroup>
          
          <FormGroup>
            <Label>
              Follow-Up Strategy<span className="required">*</span>
            </Label>
            
            <FollowUpSection>
              <StrategyStep>
                <div className="icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L2 10L11 14L17 7L10 15L14 22L22 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="step-text">SMS</div>
              </StrategyStep>
              
              <WaitDuration>
                <div className="icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text">Wait: 5 days</div>
              </WaitDuration>
              
              {showActionForm && (
                <>
                  <ActionTypeGroup>
                    <RadioLabel>
                      <input 
                        type="radio" 
                        checked={currentAction === 'email'} 
                        onChange={() => setCurrentAction('email')} 
                        name="actionType" 
                        aria-label="Email action type"
                      />
                      Email
                    </RadioLabel>
                    <RadioLabel>
                      <input 
                        type="radio" 
                        checked={currentAction === 'sms'} 
                        onChange={() => setCurrentAction('sms')} 
                        name="actionType"
                        aria-label="SMS action type" 
                      />
                      SMS
                    </RadioLabel>
                    <RadioLabel>
                      <input 
                        type="radio" 
                        checked={currentAction === 'wait'} 
                        onChange={() => setCurrentAction('wait')} 
                        name="actionType"
                        aria-label="Wait duration action type"
                      />
                      Wait Duration
                    </RadioLabel>
                  </ActionTypeGroup>
                  
                  {currentAction === 'sms' && (
                    <>
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <SelectContainer>
                        <select
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          aria-label="Select phone number"
                        >
                          <option value="">Select</option>
                          <option value="user">User's Phone</option>
                          <option value="company">Company Phone</option>
                        </select>
                      </SelectContainer>
                      
                      <Label htmlFor="followUpMessage">Follow-Up Message</Label>
                      <MessageInput>
                        <textarea 
                          id="followUpMessage"
                          value={followUpMessage}
                          onChange={(e) => setFollowUpMessage(e.target.value)}
                          placeholder="Enter message..."
                          aria-label="Follow-up message text"
                        />
                      </MessageInput>
                    </>
                  )}
                  
                  <AddActionButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Action
                  </AddActionButton>
                </>
              )}
              
              {!showActionForm && (
                <AddActionButton onClick={() => setShowActionForm(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Action
                </AddActionButton>
              )}
            </FollowUpSection>
          </FormGroup>
          
          <PreviewSection>
            <div className="section-title">Landing Page Preview</div>
            
            <PreviewContainer>
              <PreviewContent>
                <LandingPage>
                  <InviteHeading>
                    You've been invited by <PromoterTag>[Promoter Name]!</PromoterTag>
                  </InviteHeading>
                  
                  <div style={{ textAlign: 'center' }}>
                    <OfferText>Get 20% off on your first order</OfferText>
                  </div>
                  
                  <SignupForm>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <button>Claim Your Reward</button>
                  </SignupForm>
                  
                  <StepList>
                    <StepListItem>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      1 in 6 people...
                    </StepListItem>
                    <StepListItem>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Get 20% for FREE
                    </StepListItem>
                    <StepListItem>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Your data...secure
                    </StepListItem>
                  </StepList>
                </LandingPage>
              </PreviewContent>
            </PreviewContainer>
          </PreviewSection>
          
          <LaunchButton>Launch</LaunchButton>
        </FormContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CreateCampaign; 