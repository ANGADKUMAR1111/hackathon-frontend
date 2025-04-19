import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
`;

const PageHeader = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
`;

const FaqItem = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Question = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 8px;
`;

const Answer = styled.p`
  color: #4b5563;
  font-size: 0.875rem;
`;

const Help = () => {
  return (
    <Container>
      <PageHeader>
        <Title>Help Center</Title>
        <Description>Find answers to your questions about ReferralHub</Description>
      </PageHeader>
      
      <Card>
        <CardTitle>Frequently Asked Questions</CardTitle>
        
        <FaqItem>
          <Question>How do I create a new referral campaign?</Question>
          <Answer>
            To create a new referral campaign, navigate to the Campaigns page and click on the "New Campaign" button. 
            Follow the setup wizard to configure your campaign settings, rewards, and promotional material.
          </Answer>
        </FaqItem>
        
        <FaqItem>
          <Question>How do promoters share referral links?</Question>
          <Answer>
            Promoters can share their unique referral links through various channels such as email, social media, 
            or text messages. Each referral link is tracked to attribute leads to the correct promoter.
          </Answer>
        </FaqItem>
        
        <FaqItem>
          <Question>How are rewards distributed to successful referrals?</Question>
          <Answer>
            Rewards are automatically distributed based on the rules you set for your campaign. 
            You can choose between points, discounts, or cash rewards, and define conditions for when they are awarded.
          </Answer>
        </FaqItem>
      </Card>
      
      <Card>
        <CardTitle>Contact Support</CardTitle>
        <p>Need more help? Our support team is available Monday to Friday, 9am-5pm EST.</p>
        <p>Email: support@referralhub.com</p>
        <p>Phone: (555) 123-4567</p>
      </Card>
    </Container>
  );
};

export default Help; 