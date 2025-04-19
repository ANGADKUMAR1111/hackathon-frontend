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

interface StepStatus {
  title: string;
  status: 'not_started' | 'in_progress' | 'completed';
}

const PlatformSetupOnboarding: React.FC = () => {
  const [steps, setSteps] = useState<StepStatus[]>([
    { title: 'Set Up Business Profile', status: 'completed' },
    { title: 'Sync Your Customer Data', status: 'in_progress' },
    { title: 'Set Up AI Agent Rules', status: 'not_started' },
    { title: 'Set Up First Campaign', status: 'not_started' }
  ]);
  
  const [zapierConnected, setZapierConnected] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  
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
  
  return (
    <SetupContainer>
      <PageHeader>
        <h1>Platform Setup</h1>
        <UserProfile>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Kavin Stanton" />
          <span className="user-info">Kavin Stanton</span>
          <span className="user-info">kavinstanton@gmail.com</span>
        </UserProfile>
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
          
          <NextButton>Next</NextButton>
        </MainContent>
      </ContentWrapper>
    </SetupContainer>
  );
};

export default PlatformSetupOnboarding; 