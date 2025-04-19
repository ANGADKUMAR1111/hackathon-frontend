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

const LoginCard = styled.div`
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
  margin-bottom: 24px;
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
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

const FormGroup = styled.div`
  margin-bottom: 20px;
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

const RememberForgotRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const RememberMeLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #4b5563;
  cursor: pointer;
  
  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const ForgotPasswordLink = styled.a`
  font-size: 0.875rem;
  color: #4361ee;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
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

const RegisterPrompt = styled.div`
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

const MagicLinkSection = styled.div`
  margin-bottom: 20px;
`;

const MagicLinkInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #111827;
  margin-bottom: 12px;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
  }
`;

const MagicLinkButton = styled(PrimaryButton)`
  background-color: #4361ee;
  margin-bottom: 24px;
  
  &:hover {
    background-color: #3a56e4;
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [magicLinkEmail, setMagicLinkEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleMagicLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Magic link sent to:', magicLinkEmail);
    // In a real app, you would send a magic link email
    alert('Magic link sent! Check your email.');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with:', { email, password, rememberMe });
    // In a real app, you would verify credentials
    navigate('/dashboard');
  };

  const handleSocialLogin = (provider: string) => {
    console.log('Login with:', provider);
    // In a real app, you would implement OAuth
    navigate('/dashboard');
  };

  return (
    <PageContainer>
      <WavyBackground />
      <LoginCard>
        <CardTitle>Login to ReferralHub</CardTitle>
        
        <SocialButton onClick={() => handleSocialLogin('google')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15.5453 6.54545H8V9.63636H12.3522C11.9414 11.6 10.2108 12.7273 8 12.7273C5.34773 12.7273 3.27273 10.6523 3.27273 8C3.27273 5.34773 5.34773 3.27273 8 3.27273C9.18864 3.27273 10.2472 3.69545 11.0472 4.39545L13.3686 2.07409C11.9731 0.787273 10.0859 0 8 0C3.58273 0 0 3.58273 0 8C0 12.4173 3.58273 16 8 16C12.0641 16 15.2731 13.2545 15.2731 8C15.2731 7.52727 15.2359 7.03636 15.1453 6.54545H15.5453Z" fill="#4285F4"/>
            <path d="M1.39746 4.26545L4.08019 6.20364C4.76837 4.49455 6.26291 3.27273 8.00019 3.27273C9.18882 3.27273 10.2474 3.69545 11.0474 4.39545L13.3688 2.07409C11.9733 0.787273 10.0861 0 8.00019 0C5.09837 0 2.594 1.71636 1.39746 4.26545Z" fill="#EA4335"/>
            <path d="M8.00017 16C10.0505 16 11.9098 15.2384 13.2973 14.0064L10.7639 11.8C9.9969 12.3573 9.04563 12.7275 8.00017 12.7275C5.80472 12.7275 3.98199 11.6139 3.55813 10.0002L0.878906 12.1289C2.05817 14.6118 4.56981 16 8.00017 16Z" fill="#34A853"/>
            <path d="M3.55809 10C3.40445 9.50455 3.27265 8.96364 3.27265 8C3.27265 7.03636 3.40445 6.49545 3.55809 6L0.878864 3.87091C0.320773 4.78909 -0.000366211 5.85455 -0.000366211 8C-0.000366211 10.1455 0.320773 11.2109 0.878864 12.1291L3.55809 10Z" fill="#FBBC05"/>
          </svg>
          Continue with Google/Microsoft
        </SocialButton>
        
        <MagicLinkSection>
          <h3 style={{ fontSize: '0.9rem', fontWeight: '500', marginTop: '16px', marginBottom: '8px' }}>Magic Link Login</h3>
          <form onSubmit={handleMagicLinkSubmit}>
            <MagicLinkInput 
              type="email" 
              placeholder="Enter your email" 
              value={magicLinkEmail}
              onChange={(e) => setMagicLinkEmail(e.target.value)}
              required
            />
            <MagicLinkButton type="submit">Send Magic Link</MagicLinkButton>
          </form>
        </MagicLinkSection>
        
        <OrDivider>
          <span>or</span>
        </OrDivider>
        
        <form onSubmit={handleLoginSubmit}>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput 
              id="email" 
              type="email" 
              placeholder="robert.fox@myemail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
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
          
          <RememberForgotRow>
            <RememberMeLabel>
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                aria-label="Remember me"
                id="remember-me"
              />
              Remember Me
            </RememberMeLabel>
            <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
          </RememberForgotRow>
          
          <PrimaryButton type="submit">Login</PrimaryButton>
        </form>
        
        <OrDivider>
          <span>or</span>
        </OrDivider>
        
        <SocialButtonsContainer>
          <SocialIconButton onClick={() => handleSocialLogin('google')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.1816 8.18182H10V12.0455H15.4403C14.9267 14.5 12.7635 15.9091 10 15.9091C6.68466 15.9091 4.09091 13.3153 4.09091 10C4.09091 6.68466 6.68466 4.09091 10 4.09091C11.4858 4.09091 12.809 4.61932 13.809 5.49432L16.7108 2.59261C15.2164 0.984091 12.6073 0 10 0C4.47841 0 0 4.47841 0 10C0 15.5216 4.47841 20 10 20C15.0801 20 19.0914 16.5682 19.0914 10C19.0914 9.40909 19.0449 8.79545 18.9316 8.18182H18.1816Z" fill="#4285F4"/>
              <path d="M1.74658 5.33182L5.10022 7.75455C5.96044 5.61818 7.82862 4.09091 9.99999 4.09091C11.4858 4.09091 12.809 4.61932 13.809 5.49432L16.7108 2.59261C15.2164 0.984091 12.6073 0 9.99999 0C6.37272 0 3.24226 2.14545 1.74658 5.33182Z" fill="#EA4335"/>
              <path d="M10.0002 20C12.6075 20 15.1873 19.0479 16.6217 17.508L13.4549 14.75C12.4961 15.4466 11.307 15.9094 10.0002 15.9094C7.25582 15.9094 5.07749 14.5173 4.44766 12.5002L1.09863 15.1611C2.57271 18.2647 5.71226 20 10.0002 20Z" fill="#34A853"/>
              <path d="M4.44761 12.5C4.25556 11.8807 4.09081 11.2046 4.09081 10.5C4.09081 9.79545 4.25556 9.11932 4.44761 8.5L1.09858 5.83864C0.400966 7.23636 -0.000458264 8.81818 -0.000458264 10.5C-0.000458264 12.1818 0.400966 13.7636 1.09858 15.1614L4.44761 12.5Z" fill="#FBBC05"/>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialLogin('facebook')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512" fill="#1877F2">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialLogin('twitter')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialLogin('linkedin')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="#0A66C2">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </SocialIconButton>
        </SocialButtonsContainer>
        
        <RegisterPrompt>
          Don't have an account? <Link to="/register">Register now</Link>
        </RegisterPrompt>
      </LoginCard>
    </PageContainer>
  );
};

export default Login; 