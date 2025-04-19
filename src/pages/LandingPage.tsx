import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Page = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #f7f9fc;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: white;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #4361ee;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  &:hover {
    color: #4361ee;
  }
`;

const GetStartedButton = styled(Link)`
  background-color: #4361ee;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #3a56e4;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const HeroSection = styled.section`
  display: flex;
  padding: 4rem;
  align-items: center;
  justify-content: space-between;
`;

const HeroContent = styled.div`
  max-width: 550px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HeroButton = styled(Link)`
  background-color: #4361ee;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  
  &:hover {
    background-color: #3a56e4;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  max-width: 650px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const BrandsSection = styled.section`
  background-color: #1f2937;
  color: white;
  padding: 2rem 4rem;
  text-align: center;
  border-radius: 12px;
  margin: 0 4rem 4rem;
`;

const BrandsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const BrandsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const BrandLogo = styled.img`
  height: 24px;
  opacity: 0.9;
  filter: brightness(0) invert(1);
`;

const FeaturesSection = styled.section`
  padding: 4rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 3rem;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937;
  margin: 1rem 0 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

// How it Works Section
const HowItWorksSection = styled.section`
  padding: 4rem;
  background-color: #f7f9fc;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 75px;
    left: 18%;
    right: 18%;
    height: 2px;
    background-color: #e5e7eb;
    z-index: 0;
  }
`;

const Step = styled.div`
  text-align: center;
  width: 220px;
  z-index: 1;
`;

const StepIcon = styled.div<{ bgColor: string; number: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  
  &::after {
    content: "${props => props.number}";
    position: absolute;
    top: -5px;
    right: -5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    color: ${props => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    border: 2px solid ${props => props.bgColor};
  }
`;

const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.8rem;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
`;

const CallToActionSection = styled.section`
  background-color: #4361ee;
  padding: 4rem;
  text-align: center;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.a`
  background-color: #111827;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: black;
  }
`;

const Footer = styled.footer`
  background-color: #111827;
  padding: 4rem;
  color: #9ca3af;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const FooterColumn = styled.div`
  width: 30%;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  
  &:hover {
    background-color: #4361ee;
  }
`;

const FooterLinksColumn = styled.div``;

const FooterTitle = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: #9ca3af;
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #374151;
  font-size: 0.9rem;
`;

const AboutSection = styled.section`
  padding: 4rem;
  background-color: #111827;
  color: white;
  display: flex;
  align-items: center;
  gap: 3rem;
  position: relative;
  overflow: hidden;
`;

const AboutImage = styled.div`
  flex: 0 0 40%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  position: relative;
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const AboutContent = styled.div`
  flex: 1;
  max-width: 500px;
`;

const AboutTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #e5e7eb;
  margin-bottom: 1.5rem;
`;

const RatingContainer = styled.div`
  margin-top: 2rem;
`;

const Rating = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #4361ee;
  margin-bottom: 0.5rem;
`;

const RatingText = styled.p`
  font-size: 0.9rem;
  color: #e5e7eb;
`;

const AccentShape = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 200px;
  background-color: #4CAF50;
  border-radius: 50% 0 0 50%;
`;

const LandingPage: React.FC = () => {
  return (
    <Page>
      <Header>
        <Logo>ReferralHub</Logo>
        <Nav>
          <NavItem href="#features">Features</NavItem>
          <NavItem href="#about">About Us</NavItem>
          <NavItem href="#how-it-works">How it Works</NavItem>
          <NavItem href="#pricing">Pricing</NavItem>
        </Nav>
        <GetStartedButton to="/login">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </GetStartedButton>
      </Header>

      <HeroSection>
        <HeroContent>
          <HeroTitle>AI-Powered Referral Platform for Growing Brands</HeroTitle>
          <HeroSubtitle>
            Empower your existing customer base to spread the word, while our smart AI assistant guides you through creating and managing referral campaigns that actually convert.
          </HeroSubtitle>
          <HeroButton to="/login">
            Get STARTED
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </HeroButton>
        </HeroContent>
        <HeroImageContainer>
          <HeroImage src="/img/m3.png" alt="ReferralHub Dashboard Preview" />
        </HeroImageContainer>
      </HeroSection>

      <BrandsSection>
        <BrandsTitle>Trusted by Leading Global Brands</BrandsTitle>
        <BrandsGrid>
          <BrandLogo src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" />
          <BrandLogo src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
          <BrandLogo src="https://logos.logofury.com/logo_src/22bef48d20ecb14f62ccf469f106b92b.png" alt="Samsung" />
          <BrandLogo src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
          <BrandLogo src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" />
          <BrandLogo src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="LinkedIn" />
        </BrandsGrid>
      </BrandsSection>

      <FeaturesSection id="features">
        <SectionTitle>Built for Brands That Want Simplicity, Loyalty, and Results</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <img src="/img/m1.png" alt="AI-Powered Simplicity" />
            <FeatureTitle>AI-Powered Simplicity</FeatureTitle>
            <FeatureDescription>
              Start chatting with our AI agent or get instant help from the AI assistant as you set up your referral campaign.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <img src="/img/m2.png" alt="Your Customers, Not Strangers" />
            <FeatureTitle>Your Customers, Not Strangers</FeatureTitle>
            <FeatureDescription>
              Once the campaign is active, your promoters receive personalized links they can share anywhere — helping you grow faster.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <img src="/img/m3.png" alt="Real-Time Results & Rewards" />
            <FeatureTitle>Real-Time Results & Rewards</FeatureTitle>
            <FeatureDescription>
              Watch your leads grow in real-time and reward your loyal customers with points.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <AboutSection id="about">
        <AboutImage>
          <img src="https://s3-alpha-sig.figma.com/img/dfe3/f184/c5cf288cc179f446597f5559655bf878?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=topQ8aij~pOJHYcb7lT28lmrd2~GGiWMXRGp0ymCWsFLzi8znuPlOo9hp5rClbOCZ8FaSRGl-Q8raXQftntIOxQXoV4vBkKHN--r89LGce1d6ToOWvKezKJqa-O7~Vo8Icd1RAbCv9T-lijbNaT-qXDqb~UMf6XGXSaB5-fX4AgKW3dETKVhau7PAS~JTI-ONU~hZVOdFd9rT7CX38GNMMOkz5dKzkdvvKttVaUbv55Mj28gfsE2w6Qal7lR3~zNIH7d-4AxNGugvdEf-Cb4q5DZofWbgJWz1-qfQUNyJfhWxnyYVVBDfyp7ov~HnYokDS1L-1DGWEk1LSu-MmsqKQ__" alt="ReferralHub Team Working" />
        </AboutImage>
        <AboutContent>
          <AboutTitle>Know More About it</AboutTitle>
          <AboutText>
            ReferralHub is an AI-powered referral platform built to help businesses turn their loyal customers into their most powerful marketing channel. Whether you're a growing startup or an established brand, ReferralHub simplifies campaign creation through intelligent chat, making it easy to launch, share, and track referral programs in minutes — not hours.
          </AboutText>
          <AboutText>
            By combining smart automation with human connection, ReferralHub helps you drive real growth while rewarding the people who already love your brand.
          </AboutText>
          <RatingContainer>
            <Rating>4.5/5</Rating>
            <RatingText>Customer ratings based on 250+ businesses growing with ReferralHub</RatingText>
          </RatingContainer>
        </AboutContent>
        <AccentShape />
      </AboutSection>

      <HowItWorksSection id="how-it-works">
        <SectionTitle>How it Works</SectionTitle>
        <p style={{ textAlign: 'center', color: '#6b7280', maxWidth: '600px', margin: '0 auto 2rem' }}>
          It simplifies the entire referral process — from building campaigns with AI to tracking every lead and rewarding your loyal customers in real-time.
        </p>
        <StepsContainer>
          <Step>
            <StepIcon bgColor="#4361ee" number="1">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white">
                <path d="M12 16v-4m0-4h.01M12 21a9 9 0 110-18 9 9 0 010 18z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </StepIcon>
            <StepTitle>Let ReferralHub AI Guide You</StepTitle>
            <StepDescription>
              Start by chatting with our AI agent or get instant help from the AI assistant as you set up your referral campaign.
            </StepDescription>
          </Step>
          <Step>
            <StepIcon bgColor="#8b5cf6" number="2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white">
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </StepIcon>
            <StepTitle>Share Referral Link</StepTitle>
            <StepDescription>
              Once the campaign is active, your promoters receive personalized links they can share anywhere — helping you grow faster.
            </StepDescription>
          </Step>
          <Step>
            <StepIcon bgColor="#111827" number="3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </StepIcon>
            <StepTitle>Give Rewards</StepTitle>
            <StepDescription>
              Watch your leads grow in real-time and reward your loyal customers with points.
            </StepDescription>
          </Step>
        </StepsContainer>
      </HowItWorksSection>

      <CallToActionSection>
        <CTATitle>Ready to Get Started?</CTATitle>
        <CTADescription>
          Start building referral campaigns in just a few clicks — no complicated setup. Just intelligent automation designed to grow your business effortlessly.
        </CTADescription>
        <CTAButton href="/login">Get Started</CTAButton>
      </CallToActionSection>

      <Footer>
        <FooterContent>
          <FooterColumn>
            <FooterText>
              Simplify your referral process and start growing with ReferralHub today.
            </FooterText>
            <SocialLinks>
              <SocialIcon href="#">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>
          <FooterLinksColumn>
            <FooterTitle>Company</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Service</a></FooterLink>
              <FooterLink><a href="#">Resources</a></FooterLink>
              <FooterLink><a href="#">About Us</a></FooterLink>
            </FooterLinks>
          </FooterLinksColumn>
          <FooterLinksColumn>
            <FooterTitle>Help</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Customer Support</a></FooterLink>
              <FooterLink><a href="#">Terms & Conditions</a></FooterLink>
              <FooterLink><a href="#">Privacy Policy</a></FooterLink>
            </FooterLinks>
          </FooterLinksColumn>
        </FooterContent>
        <Copyright>
          © Copyright 2024. All Rights Reserved by ReferralHub
        </Copyright>
      </Footer>
    </Page>
  );
};

export default LandingPage; 