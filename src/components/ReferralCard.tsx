import React from 'react';
import styled from 'styled-components';
import { Referral, ReferralStatus } from '../types/referral';

interface ReferralCardProps {
  referral: Referral;
}

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CompanyLogo = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CompanyName = styled.div`
  display: flex;
  flex-direction: column;
  
  .name {
    font-weight: 600;
    color: #111827;
  }
  
  .position {
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

const Status = styled.div<{ status: ReferralStatus }>`
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ status }) => {
    switch(status) {
      case 'pending':
        return `
          background-color: #fef3c7;
          color: #d97706;
        `;
      case 'in_progress':
        return `
          background-color: #e0f2fe;
          color: #0ea5e9;
        `;
      case 'hired':
        return `
          background-color: #d1fae5;
          color: #059669;
        `;
      case 'rejected':
        return `
          background-color: #fee2e2;
          color: #dc2626;
        `;
      default:
        return `
          background-color: #f3f4f6;
          color: #6b7280;
        `;
    }
  }}
`;

const ReferralInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 16px;
    height: 16px;
    color: #6b7280;
  }
  
  span {
    font-size: 0.875rem;
    color: #4b5563;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const ReferredDate = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

const ViewButton = styled.button`
  background-color: #f3f4f6;
  color: #4f46e5;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #4f46e5;
    color: white;
  }
`;

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

const getStatusLabel = (status: ReferralStatus): string => {
  switch(status) {
    case 'pending':
      return 'Pending';
    case 'in_progress':
      return 'In Progress';
    case 'hired':
      return 'Hired';
    case 'rejected':
      return 'Rejected';
    default:
      return 'Unknown';
  }
};

const ReferralCard: React.FC<ReferralCardProps> = ({ referral }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CompanyInfo>
          <CompanyLogo>
            <img src={referral.company.logo} alt={referral.company.name} />
          </CompanyLogo>
          <CompanyName>
            <span className="name">{referral.company.name}</span>
            <span className="position">{referral.position}</span>
          </CompanyName>
        </CompanyInfo>
        <Status status={referral.status}>
          {getStatusLabel(referral.status)}
        </Status>
      </CardHeader>
      
      <ReferralInfo>
        <InfoRow>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>{referral.candidate.name}</span>
        </InfoRow>
        <InfoRow>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{referral.candidate.email}</span>
        </InfoRow>
        {referral.reward && (
          <InfoRow>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Reward: {referral.reward}</span>
          </InfoRow>
        )}
      </ReferralInfo>
      
      <CardFooter>
        <ReferredDate>
          Referred on {formatDate(referral.referredDate)}
        </ReferredDate>
        <ViewButton>View Details</ViewButton>
      </CardFooter>
    </CardContainer>
  );
};

export default ReferralCard; 