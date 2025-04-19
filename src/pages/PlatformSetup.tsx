import React, { useState } from 'react';
import styled from 'styled-components';

const SetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  
  .user-info {
    font-size: 0.8rem;
    color: #6b7280;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const StepsContainer = styled.div`
  flex: 0 0 320px;
  background-color: #f7f9fc;
  border-radius: 12px;
  padding: 24px;
`;

const StepHeader = styled.div`
  margin-bottom: 24px;
  
  h2 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #4361ee;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.5;
  }
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface StepItemProps {
  completed?: boolean;
  active?: boolean;
}

const StepItem = styled.div<StepItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.active ? 'white' : 'transparent'};
  box-shadow: ${props => props.active ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const StepIcon = styled.div<StepItemProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.completed ? '#10b981' : props.active ? '#4361ee' : '#e5e7eb'};
  color: white;
  font-size: 14px;
`;

const StepContent = styled.div<StepItemProps>`
  flex: 1;
  
  .step-title {
    font-weight: 500;
    color: ${props => props.completed ? '#10b981' : props.active ? '#4361ee' : '#4b5563'};
    font-size: 0.875rem;
    margin-bottom: 2px;
  }
  
  .step-status {
    font-size: 0.75rem;
    color: ${props => props.completed ? '#10b981' : props.active ? '#4361ee' : '#9ca3af'};
  }
`;

const MainContent = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const ContentHeader = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 24px;
`;

const ImportContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ImportOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ZapierButton = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 10px 16px;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: #4361ee;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #4361ee;
    background-color: #f9fafb;
  }
`;

const DisconnectButton = styled(ZapierButton)`
  background-color: white;
  color: #4361ee;
  border: 1px solid #d1d5db;
`;

const OrDivider = styled.div`
  position: relative;
  text-align: center;
  margin: 12px 0;
  
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e5e7eb;
  }
  
  span {
    position: relative;
    display: inline-block;
    padding: 0 12px;
    background-color: white;
    color: #9ca3af;
    font-size: 0.875rem;
  }
`;

const DropZone = styled.div`
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #4361ee;
    background-color: #f3f4f6;
  }
`;

const UploadIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(67, 97, 238, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4361ee;
`;

const DropText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const UploadButton = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 10px 16px;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: #4361ee;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 16px;
  
  &:hover {
    border-color: #4361ee;
    background-color: #f9fafb;
  }
`;

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

const FileIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e5e7eb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
`;

const FileInfo = styled.div`
  flex: 1;
  
  .file-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
  }
  
  .file-size {
    font-size: 0.75rem;
    color: #6b7280;
  }
`;

const FileStatus = styled.div`
  padding: 8px 12px;
  background-color: rgba(16, 185, 129, 0.1);
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #10b981;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ef4444;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const ReuploadButton = styled.button`
  padding: 4px 8px;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  color: #4361ee;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #4361ee;
    background-color: #f9fafb;
  }
`;

const NextButton = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 12px 24px;
  background-color: #4361ee;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 32px;
  
  &:hover {
    background-color: #3a56e4;
  }
`;

const SuccessMessage = styled.div`
  padding: 8px 12px;
  background-color: rgba(16, 185, 129, 0.1);
  border-radius: 6px;
  font-size: 0.875rem;
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

// New styled components for AI Agent Rules
const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 8px;
`;

const Select = styled.div`
  position: relative;
  
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

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const ToggleLabel = styled.div`
  .title {
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
    margin-bottom: 4px;
  }
  
  .description {
    font-size: 0.75rem;
    color: #6b7280;
  }
`;

const Toggle = styled.label`
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
  
  span {
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
  }
`;

interface StepStatus {
  title: string;
  status: 'not_started' | 'in_progress' | 'completed';
}

enum SetupPage {
  IMPORT_DATA = 'import_data',
  AGENT_RULES = 'agent_rules',
  CAMPAIGN_SETUP = 'campaign_setup'
}

// Form field types
interface FormField {
  name: string;
  checked: boolean;
}

interface FollowUpAction {
  type: 'sms' | 'email' | 'wait';
  waitDays?: number;
  message?: string;
  phoneNumber?: string;
}

// Additional styled components for the Campaign Setup page
const CampaignContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`;

const SectionDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 16px;
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

const RewardTypeContainer = styled.div`
  background-color: #f3f4f6;
  border-radius: 6px;
  padding: 14px;
  display: flex;
  gap: 2px;
  width: fit-content;
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

const FormRow = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FieldInfo = styled.div`
  margin-bottom: 6px;
  
  .label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  .required {
    color: #ef4444;
  }
  
  .helper {
    font-size: 0.75rem;
    color: #6b7280;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #111827;
  cursor: pointer;
  
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const ActionTypeGroup = styled.div`
  display: flex;
  gap: 12px;
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

const StrategyCard = styled.div`
  background-color: #f3f4f6;
  border-radius: 6px;
  padding: 16px;
  margin-top: 12px;
`;

const StrategyStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  
  .icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #4361ee;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
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
  margin: 8px 0 8px 28px;
  
  .icon {
    color: #4361ee;
    margin-right: 8px;
  }
  
  .text {
    font-size: 0.75rem;
    color: #4b5563;
  }
`;

const AddActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 0;
  width: 100%;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 12px;
  
  &:hover {
    background-color: #3a56e4;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const ActionForm = styled.div`
  margin-left: 28px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const LaunchButton = styled(NextButton)`
  width: 100%;
  max-width: 100%;
  background-color: #4361ee;
  margin-top: 48px;
`;

const PlatformSetup: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<SetupPage>(SetupPage.IMPORT_DATA);
  
  const [steps, setSteps] = useState<StepStatus[]>([
    { title: 'Set Up Business Profile', status: 'completed' },
    { title: 'Sync Your Customer Data', status: 'in_progress' },
    { title: 'Set Up AI Agent Rules', status: 'not_started' },
    { title: 'Set Up First Campaign', status: 'not_started' }
  ]);
  
  // Import data state
  const [zapierConnected, setZapierConnected] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  
  // AI Agent Rules state
  const [toneOfCommunication, setToneOfCommunication] = useState('friendly');
  const [responseStyle, setResponseStyle] = useState('short');
  const [autoOfferHelp, setAutoOfferHelp] = useState(true);
  const [userInitiatedOnly, setUserInitiatedOnly] = useState(false);
  
  // Campaign setup state
  const [campaignName, setCampaignName] = useState('');
  
  // Promoter settings
  const [promoterRewardType, setPromoterRewardType] = useState<'points' | 'discount'>('points');
  const [promoterRewardValue, setPromoterRewardValue] = useState('');
  const [promoterMessage, setPromoterMessage] = useState('');
  
  // Leads settings
  const [leadsRewardType, setLeadsRewardType] = useState<'discount'>('discount');
  const [leadsRewardValue, setLeadsRewardValue] = useState('');
  const [referredMessage, setReferredMessage] = useState('');
  
  // Form fields
  const [formFields, setFormFields] = useState<FormField[]>([
    { name: 'Full Name', checked: true },
    { name: 'Email Address', checked: true },
    { name: 'Phone Number', checked: false },
    { name: 'Agree', checked: true }
  ]);
  
  // Follow-up strategy
  const [followUpStrategy, setFollowUpStrategy] = useState<FollowUpAction[]>([
    { type: 'sms' }
  ]);
  const [currentAction, setCurrentAction] = useState<'sms' | 'email' | 'wait'>('sms');
  const [actionMessage, setActionMessage] = useState('');
  const [waitDuration, setWaitDuration] = useState(5);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showActionForm, setShowActionForm] = useState(false);

  const handleZapierConnect = () => {
    setZapierConnected(true);
  };
  
  const handleZapierDisconnect = () => {
    setZapierConnected(false);
  };
  
  const handleFileUpload = () => {
    setFileUploaded(true);
    setFileName('Leads.csv');
    setFileSize('65KB');
    
    // Update step status
    const updatedSteps = [...steps];
    updatedSteps[1].status = 'completed';
    setSteps(updatedSteps);
  };
  
  const handleRemoveFile = () => {
    setFileUploaded(false);
    setFileName('');
    setFileSize('');
    
    // Update step status
    const updatedSteps = [...steps];
    updatedSteps[1].status = 'in_progress';
    setSteps(updatedSteps);
  };
  
  const getStepIcon = (status: string, index: number) => {
    if (status === 'completed') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    return index + 1;
  };

  const handleNextFromImport = () => {
    // Update step status
    const updatedSteps = [...steps];
    updatedSteps[1].status = 'completed';
    updatedSteps[2].status = 'in_progress';
    setSteps(updatedSteps);
    
    // Change page
    setCurrentPage(SetupPage.AGENT_RULES);
  };

  const handleNextFromAgentRules = () => {
    // Update step status
    const updatedSteps = [...steps];
    updatedSteps[2].status = 'completed';
    updatedSteps[3].status = 'in_progress';
    setSteps(updatedSteps);
    
    // Navigate to campaign setup
    setCurrentPage(SetupPage.CAMPAIGN_SETUP);
  };

  // Toggle form field selection
  const toggleFormField = (index: number) => {
    const updatedFields = [...formFields];
    updatedFields[index].checked = !updatedFields[index].checked;
    setFormFields(updatedFields);
  };
  
  // Add a follow-up action
  const addFollowUpAction = () => {
    let newAction: FollowUpAction;
    
    if (currentAction === 'wait') {
      newAction = { type: 'wait', waitDays: waitDuration };
    } else if (currentAction === 'sms') {
      newAction = { type: 'sms', message: actionMessage, phoneNumber };
    } else {
      newAction = { type: 'email', message: actionMessage };
    }
    
    setFollowUpStrategy([...followUpStrategy, newAction]);
    setActionMessage('');
    setShowActionForm(false);
  };
  
  // Launch campaign
  const launchCampaign = () => {
    // Here we would send the campaign data to the backend
    console.log('Campaign launched with data:', {
      name: campaignName,
      promoter: {
        rewardType: promoterRewardType,
        rewardValue: promoterRewardValue,
        message: promoterMessage
      },
      leads: {
        rewardType: leadsRewardType,
        rewardValue: leadsRewardValue,
        message: referredMessage
      },
      formFields,
      followUpStrategy
    });
    
    // Mark the final step as completed
    const updatedSteps = [...steps];
    updatedSteps[3].status = 'completed';
    setSteps(updatedSteps);
  };

  return (
    <SetupContainer>
      <PageHeader>
        <h1>Platform Setup</h1>
      
      </PageHeader>
      
      <ContentWrapper>
        <StepsContainer>
          <StepHeader>
            <h2>Get Started with ReferralHub</h2>
            <p>To get started with better referrals & rewards, complete your account setup in a few easy steps.</p>
          </StepHeader>
          
          <StepsList>
            {steps.map((step, index) => (
              <StepItem 
                key={index} 
                completed={step.status === 'completed'} 
                active={step.status === 'in_progress'}
              >
                <StepIcon 
                  completed={step.status === 'completed'} 
                  active={step.status === 'in_progress'}
                >
                  {getStepIcon(step.status, index)}
                </StepIcon>
                <StepContent 
                  completed={step.status === 'completed'} 
                  active={step.status === 'in_progress'}
                >
                  <div className="step-title">{step.title}</div>
                  <div className="step-status">
                    {step.status === 'completed' ? 'Completed' : 
                     step.status === 'in_progress' ? 'In Progress' : 
                     'Not Started'}
                  </div>
                </StepContent>
              </StepItem>
            ))}
          </StepsList>
        </StepsContainer>
        
        <MainContent>
          {currentPage === SetupPage.IMPORT_DATA && (
            <>
              <ContentHeader>Import Customer Data: Sync with Zapier or Upload CSV</ContentHeader>
              
              <ImportContainer>
                <ImportOption>
                  {zapierConnected ? (
                    <>
                      <SuccessMessage>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Zapier Integration Connected Successfully!
                      </SuccessMessage>
                      <DisconnectButton onClick={handleZapierDisconnect}>
                        Disconnect with Zapier
                      </DisconnectButton>
                    </>
                  ) : (
                    <ZapierButton onClick={handleZapierConnect}>
                      Connect with Zapier
                    </ZapierButton>
                  )}
                </ImportOption>
                
                <OrDivider>
                  <span>or</span>
                </OrDivider>
                
                {fileUploaded ? (
                  <FilePreview>
                    <FileIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </FileIcon>
                    <FileInfo>
                      <div className="file-name">{fileName}</div>
                      <div className="file-size">{fileSize}</div>
                    </FileInfo>
                    <FileStatus>CSV File Uploaded Successfully!</FileStatus>
                    <ReuploadButton onClick={handleFileUpload}>Re-upload</ReuploadButton>
                    <ActionButton onClick={handleRemoveFile}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </ActionButton>
                  </FilePreview>
                ) : (
                  <>
                    <DropZone onClick={handleFileUpload}>
                      <UploadIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </UploadIcon>
                      <DropText>Drag and drop files here</DropText>
                    </DropZone>
                    <UploadButton onClick={handleFileUpload}>Click to Upload CSV File</UploadButton>
                  </>
                )}
              </ImportContainer>
              
              <NextButton onClick={handleNextFromImport}>Next</NextButton>
            </>
          )}

          {currentPage === SetupPage.AGENT_RULES && (
            <>
              <ContentHeader>Set Up AI Agent Rules</ContentHeader>
              
              <FormGroup>
                <Label htmlFor="toneOfCommunication">Tone of Communication</Label>
                <Select>
                  <select 
                    id="toneOfCommunication"
                    value={toneOfCommunication}
                    onChange={(e) => setToneOfCommunication(e.target.value)}
                    aria-label="Select tone of communication"
                  >
                    <option value="friendly">Friendly</option>
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                  </select>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="responseStyle">Response Style</Label>
                <Select>
                  <select 
                    id="responseStyle"
                    value={responseStyle}
                    onChange={(e) => setResponseStyle(e.target.value)}
                    aria-label="Select response style"
                  >
                    <option value="short">Short</option>
                    <option value="detailed">Detailed</option>
                    <option value="concise">Concise</option>
                  </select>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <ToggleContainer>
                  <ToggleLabel>
                    <div className="title">Auto-offer help</div>
                    <div className="description">AI shows suggestions automatically when user lands on a page.</div>
                  </ToggleLabel>
                  <Toggle>
                    <input 
                      type="checkbox" 
                      id="autoOfferHelp"
                      checked={autoOfferHelp} 
                      onChange={() => setAutoOfferHelp(!autoOfferHelp)}
                      aria-label="Toggle auto-offer help"
                    />
                    <span></span>
                  </Toggle>
                </ToggleContainer>
              </FormGroup>
              
              <FormGroup>
                <ToggleContainer>
                  <ToggleLabel>
                    <div className="title">User-initiated only</div>
                    <div className="description">AI only responds when clicked or messaged.</div>
                  </ToggleLabel>
                  <Toggle>
                    <input 
                      type="checkbox" 
                      id="userInitiatedOnly"
                      checked={userInitiatedOnly} 
                      onChange={() => setUserInitiatedOnly(!userInitiatedOnly)}
                      aria-label="Toggle user-initiated only"
                    />
                    <span></span>
                  </Toggle>
                </ToggleContainer>
              </FormGroup>
              
              <NextButton onClick={handleNextFromAgentRules}>Next</NextButton>
            </>
          )}

          {currentPage === SetupPage.CAMPAIGN_SETUP && (
            <CampaignContainer>
              <div>
                <ContentHeader>Create New Campaign</ContentHeader>
                <SectionDescription>Create a new referral campaign in just few steps.</SectionDescription>
              </div>
              
              <FormGroup>
                <FieldInfo>
                  <div className="label">Campaign Name</div>
                </FieldInfo>
                <InputField 
                  type="text" 
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="e.g., Summer Referral Special"
                  aria-label="Campaign name"
                />
              </FormGroup>
              
              <div>
                <SectionTitle>Promoter Settings</SectionTitle>
                
                <FormRow>
                  <FormColumn>
                    <FormGroup>
                      <FieldInfo>
                        <div className="label">
                          Reward Type<span className="required">*</span>
                        </div>
                      </FieldInfo>
                      <RewardTypeContainer>
                        <RewardTypeButton 
                          active={promoterRewardType === 'points'} 
                          onClick={() => setPromoterRewardType('points')}
                        >
                          Points
                        </RewardTypeButton>
                        <RewardTypeButton 
                          active={promoterRewardType === 'discount'} 
                          onClick={() => setPromoterRewardType('discount')}
                        >
                          Discount
                        </RewardTypeButton>
                      </RewardTypeContainer>
                      {promoterRewardType === 'points' && (
                        <FieldInfo>
                          <div className="helper">(5) is equivalent to 10 points</div>
                        </FieldInfo>
                      )}
                    </FormGroup>
                  </FormColumn>
                  
                  <FormColumn>
                    <FormGroup>
                      <FieldInfo>
                        <div className="label">
                          Reward Value <span className="required">*</span>
                        </div>
                      </FieldInfo>
                      <InputField 
                        type="text" 
                        value={promoterRewardValue}
                        onChange={(e) => setPromoterRewardValue(e.target.value)}
                        placeholder={promoterRewardType === 'points' ? "e.g., 200 points" : "e.g., 20%"}
                        aria-label="Promoter reward value"
                      />
                    </FormGroup>
                  </FormColumn>
                </FormRow>
                
                <FormGroup>
                  <FieldInfo>
                    <div className="label">
                      Promoter Message<span className="required">*</span>
                    </div>
                  </FieldInfo>
                  <TextareaField 
                    value={promoterMessage}
                    onChange={(e) => setPromoterMessage(e.target.value)}
                    placeholder={`e.g., "Hey! Share this with your friends and get $20 for each successful signup!"`}
                    aria-label="Promoter message"
                  />
                </FormGroup>
              </div>
              
              <div>
                <SectionTitle>Follow-Up Strategy<span className="required">*</span></SectionTitle>
                
                <StrategyCard>
                  {followUpStrategy.map((action, index) => (
                    <div key={index}>
                      {action.type === 'sms' && (
                        <StrategyStep>
                          <div className="icon">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 2L2 10L11 14L17 7L10 15L14 22L22 2Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div className="step-text">SMS</div>
                        </StrategyStep>
                      )}
                      
                      {action.type === 'wait' && (
                        <WaitDuration>
                          <div className="icon">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                          <div className="text">Wait: {action.waitDays} days</div>
                        </WaitDuration>
                      )}
                    </div>
                  ))}
                  
                  {showActionForm && (
                    <ActionForm>
                      <FormGroup>
                        <FieldInfo>
                          <div className="label">Action Type</div>
                        </FieldInfo>
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
                      </FormGroup>
                      
                      {currentAction === 'sms' && (
                        <>
                          <FormGroup>
                            <FieldInfo>
                              <div className="label">Phone Number</div>
                            </FieldInfo>
                            <Select>
                              <select
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                aria-label="Select phone number"
                              >
                                <option value="">Select</option>
                                <option value="user">User's Phone</option>
                                <option value="company">Company Phone</option>
                              </select>
                            </Select>
                          </FormGroup>
                          
                          <FormGroup>
                            <FieldInfo>
                              <div className="label">Follow-Up Message</div>
                            </FieldInfo>
                            <TextareaField 
                              value={actionMessage}
                              onChange={(e) => setActionMessage(e.target.value)}
                              placeholder="Enter message..."
                              aria-label="Follow-up message"
                            />
                          </FormGroup>
                        </>
                      )}
                      
                      {currentAction === 'wait' && (
                        <FormGroup>
                          <FieldInfo>
                            <div className="label">Wait Duration (Days)</div>
                          </FieldInfo>
                          <InputField 
                            type="number" 
                            value={waitDuration.toString()}
                            onChange={(e) => setWaitDuration(parseInt(e.target.value))}
                            min="1"
                            max="30"
                            aria-label="Wait duration in days"
                          />
                        </FormGroup>
                      )}
                      
                      <AddActionButton onClick={addFollowUpAction}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Add Action
                      </AddActionButton>
                    </ActionForm>
                  )}
                  
                  {!showActionForm && (
                    <AddActionButton onClick={() => setShowActionForm(true)}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Add Action
                    </AddActionButton>
                  )}
                </StrategyCard>
              </div>
              
              <div>
                <SectionTitle>Leads Settings</SectionTitle>
                
                <FormRow>
                  <FormColumn>
                    <FormGroup>
                      <FieldInfo>
                        <div className="label">
                          Reward Type<span className="required">*</span>
                        </div>
                      </FieldInfo>
                      <RewardTypeContainer>
                        <RewardTypeButton 
                          active={leadsRewardType === 'discount'} 
                          onClick={() => setLeadsRewardType('discount')}
                        >
                          Discount
                        </RewardTypeButton>
                      </RewardTypeContainer>
                    </FormGroup>
                  </FormColumn>
                  
                  <FormColumn>
                    <FormGroup>
                      <FieldInfo>
                        <div className="label">
                          Reward Value <span className="required">*</span>
                        </div>
                      </FieldInfo>
                      <InputField 
                        type="text" 
                        value={leadsRewardValue}
                        onChange={(e) => setLeadsRewardValue(e.target.value)}
                        placeholder="e.g., 20%"
                        aria-label="Leads reward value"
                      />
                    </FormGroup>
                  </FormColumn>
                </FormRow>
                
                <FormGroup>
                  <FieldInfo>
                    <div className="label">
                      Referred Message<span className="required">*</span>
                    </div>
                  </FieldInfo>
                  <TextareaField 
                    value={referredMessage}
                    onChange={(e) => setReferredMessage(e.target.value)}
                    placeholder={`e.g., "You've been invited! Sign up now and get 15% off your first order."`}
                    aria-label="Referred message"
                  />
                </FormGroup>
              </div>
              
              <div>
                <SectionTitle>
                  Form Fields <span className="required">*</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
                    <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2"/>
                    <path d="M12 7V13M12 17V17.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </SectionTitle>
                
                <CheckboxGroup>
                  {formFields.map((field, index) => (
                    <CheckboxLabel key={index}>
                      <input 
                        type="checkbox" 
                        checked={field.checked} 
                        onChange={() => toggleFormField(index)} 
                        aria-label={`${field.name} field option`}
                      />
                      {field.name}
                    </CheckboxLabel>
                  ))}
                </CheckboxGroup>
              </div>
              
              <LaunchButton onClick={launchCampaign}>Launch</LaunchButton>
            </CampaignContainer>
          )}
        </MainContent>
      </ContentWrapper>
    </SetupContainer>
  );
};

export default PlatformSetup;