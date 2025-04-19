import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  color: string;
}

interface CardProps {
  color: string;
}

const CardContainer = styled.div<CardProps>`
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

const IconWrapper = styled.div<CardProps>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.color}15`};
  
  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.color};
  }
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StatTitle = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const StatValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
`;

const StatChange = styled.span<{ isPositive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.isPositive ? '#10b981' : '#ef4444'};
`;

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <CardContainer color={color}>
      <IconWrapper color={color}>
        {icon}
      </IconWrapper>
      
      <StatContent>
        <StatTitle>{title}</StatTitle>
        <StatValue>{value}</StatValue>
        <StatChange isPositive={isPositive}>
          {isPositive ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
            </svg>
          )}
          {change}
        </StatChange>
      </StatContent>
    </CardContainer>
  );
};

export default StatCard; 