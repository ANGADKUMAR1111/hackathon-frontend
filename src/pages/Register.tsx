import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f9fc;
  position: relative;
  overflow: hidden;
`;

const WavyBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px dashed #e0e7ff;
    border-radius: 50%;
    opacity: 0.5;
  }
  
  &::before {
    top: -30%;
    left: -20%;
    width: 140%;
    height: 140%;
  }
  
  &::after {
    bottom: -30%;
    right: -20%;
    width: 130%;
    height: 130%;
  }
`;

const RegisterCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 450px;
  padding: 40px;
  z-index: 1;
  position: relative;
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  text-align: center;
  margin-bottom: 32px;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
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

const PasswordInputContainer = styled.div`
  position: relative;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0;
  font-size: 0.75rem;
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4361ee;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #3a56e4;
  }
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #e5e7eb;
  }
  
  span {
    padding: 0 16px;
    color: #9ca3af;
    font-size: 0.875rem;
  }
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

const SocialIconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const LoginPrompt = styled.div`
  text-align: center;
  margin-top: 24px;
  font-size: 0.875rem;
  color: #6b7280;
  
  a {
    color: #4361ee;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Registration with:', { emailId, password });
    // In a real app, you would create a new user
    navigate('/dashboard');
  };

  const handleSocialRegister = (provider: string) => {
    console.log('Register with:', provider);
    // In a real app, you would implement OAuth
    navigate('/dashboard');
  };

  return (
    <PageContainer>
      <WavyBackground />
      <RegisterCard>
        <CardTitle>Register for ReferralHub</CardTitle>
        
        <form onSubmit={handleRegisterSubmit}>
          <FormGroup>
            <FormLabel htmlFor="emailId">Email Id</FormLabel>
            <FormInput 
              id="emailId" 
              type="email" 
              placeholder="robert.fox@myemail.com" 
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="password">Create Password</FormLabel>
            <PasswordInputContainer>
              <FormInput 
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <TogglePasswordButton 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </TogglePasswordButton>
            </PasswordInputContainer>
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <PasswordInputContainer>
              <FormInput 
                id="confirmPassword" 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Re-enter password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <TogglePasswordButton 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </TogglePasswordButton>
            </PasswordInputContainer>
          </FormGroup>
          
          <PrimaryButton type="submit">Register</PrimaryButton>
        </form>
        
        <OrDivider>
          <span>or</span>
        </OrDivider>
        
        <SocialButtonsContainer>
          <SocialIconButton onClick={() => handleSocialRegister('google')} aria-label="Register with Google">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.1816 8.18182H10V12.0455H15.4403C14.9267 14.5 12.7635 15.9091 10 15.9091C6.68466 15.9091 4.09091 13.3153 4.09091 10C4.09091 6.68466 6.68466 4.09091 10 4.09091C11.4858 4.09091 12.809 4.61932 13.809 5.49432L16.7108 2.59261C15.2164 0.984091 12.6073 0 10 0C4.47841 0 0 4.47841 0 10C0 15.5216 4.47841 20 10 20C15.0801 20 19.0914 16.5682 19.0914 10C19.0914 9.40909 19.0449 8.79545 18.9316 8.18182H18.1816Z" fill="#4285F4"/>
              <path d="M1.74658 5.33182L5.10022 7.75455C5.96044 5.61818 7.82862 4.09091 9.99999 4.09091C11.4858 4.09091 12.809 4.61932 13.809 5.49432L16.7108 2.59261C15.2164 0.984091 12.6073 0 9.99999 0C6.37272 0 3.24226 2.14545 1.74658 5.33182Z" fill="#EA4335"/>
              <path d="M10.0002 20C12.6075 20 15.1873 19.0479 16.6217 17.508L13.4549 14.75C12.4961 15.4466 11.307 15.9094 10.0002 15.9094C7.25582 15.9094 5.07749 14.5173 4.44766 12.5002L1.09863 15.1611C2.57271 18.2647 5.71226 20 10.0002 20Z" fill="#34A853"/>
              <path d="M4.44761 12.5C4.25556 11.8807 4.09081 11.2046 4.09081 10.5C4.09081 9.79545 4.25556 9.11932 4.44761 8.5L1.09858 5.83864C0.400966 7.23636 -0.000458264 8.81818 -0.000458264 10.5C-0.000458264 12.1818 0.400966 13.7636 1.09858 15.1614L4.44761 12.5Z" fill="#FBBC05"/>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialRegister('facebook')} aria-label="Register with Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512" fill="#1877F2">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialRegister('twitter')} aria-label="Register with Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialRegister('linkedin')} aria-label="Register with LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="#0A66C2">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </SocialIconButton>
        </SocialButtonsContainer>
        
        <LoginPrompt>
          Already have an account? <Link to="/login">Login</Link>
        </LoginPrompt>
      </RegisterCard>
    </PageContainer>
  );
};

export default Register; 