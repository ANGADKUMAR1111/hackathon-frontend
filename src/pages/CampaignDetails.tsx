import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 24px;
  background-color: #f7f9fc;
  min-height: 100vh;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #6b7280;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 0;
  
  &:hover {
    color: #111827;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CampaignTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const StatusBadge = styled.span`
  padding: 4px 12px;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const DateRange = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 24px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const StatIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${props => `rgba(${props.color}, 0.1)`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${props => `rgb(${props.color})`};
  }
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 2px;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const StatChange = styled.div<{ positive?: boolean }>`
  font-size: 0.75rem;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  display: flex;
  align-items: center;
  gap: 2px;
`;

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
`;

const ChartCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const ChartTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  margin-top: 0;
  margin-bottom: 24px;
`;

const BarChartContainer = styled.div`
  height: 240px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    height: 1px;
    background-color: #e5e7eb;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 60%;
    height: 1px;
    background-color: #e5e7eb;
  }
`;

const BarChartLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const BarChartLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  flex: 1;
  text-align: center;
`;

const Bar = styled.div<{ height: number; selected?: boolean }>`
  width: 24px;
  height: ${props => `${props.height}%`};
  background-color: ${props => props.selected ? '#4361ee' : '#93c5fd'};
  border-radius: 4px 4px 0 0;
  flex: 1;
`;

const DoughnutChart = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin: 0 auto;
`;

const DoughnutCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#6366f1 0% 57%, #e0e7ff 57% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background-color: white;
  }
`;

const DoughnutLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  
  .percent {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
  }
  
  .label {
    font-size: 0.75rem;
    color: #6b7280;
  }
`;

const DoughnutLegend = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #4b5563;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ChannelSection = styled.div`
  margin-bottom: 32px;
`;

const ChannelTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  margin-top: 0;
  margin-bottom: 16px;
`;

const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const ChannelCard = styled.div<{ color: string }>`
  background-color: ${props => `rgba(${props.color}, 0.05)`};
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`;

const ChannelLogo = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
  color: #4b5563;
`;

const ChannelPercent = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const PerformanceSection = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const PerformanceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const PerformanceTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  margin: 0;
`;

const PerformanceLegend = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const LegendItemInline = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #4b5563;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.color || '#6366f1'};
  }
`;

const TimeSelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 0.875rem;
  color: #4b5563;
  
  span {
    margin-right: 8px;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ChartYAxis = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #6b7280;
`;

const ChartYAxisLabel = styled.div`
  transform: translateY(-50%);
`;

const ChartXAxis = styled.div`
  position: absolute;
  left: 35px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #6b7280;
`;

const RevenueLabel = styled.div`
  position: absolute;
  left: 35px;
  top: 20px;
  font-size: 0.75rem;
  color: #6b7280;
`;

const ConversionLabel = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  font-size: 0.75rem;
  color: #6b7280;
`;

const PerformanceChartContainer = styled.div`
  position: relative;
  height: 240px;
  padding: 40px 0 24px 35px;
`;

const PerformanceChartLine = styled.div`
  position: absolute;
  width: 1px;
  background-color: #d1d5db;
  top: 40px;
  bottom: 24px;
  left: 57%;
  z-index: 5;
`;

const PerformanceChartPopup = styled.div`
  position: absolute;
  background-color: #374151;
  color: white;
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 0.75rem;
  top: 85px;
  left: 57%;
  transform: translateX(-50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  font-weight: 500;
  line-height: 1.4;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background-color: #374151;
  }
`;

const PerformanceChartPlaceholder = styled.div`
  position: absolute;
  top: 40px;
  left: 35px;
  right: 20px;
  bottom: 24px;
  background-image: url("data:image/svg+xml,%3Csvg width='600' height='180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100C17 105 33 130 50 135C67 140 83 130 100 125C117 120 133 110 150 115C167 120 183 130 200 140C217 150 233 165 250 155C267 145 283 110 300 95C317 80 333 100 350 105C367 110 383 107 400 110C417 113 433 118 450 115C467 112 483 100 500 102C517 104 533 120 550 125C567 130 583 128 600 120' stroke='%236366F1' stroke-width='2.5' fill='none'/%3E%3Cpath d='M0 150C17 155 33 158 50 160C67 162 83 158 100 155C117 152 133 148 150 145C167 142 183 140 200 137C217 134 233 130 250 128C267 126 283 125 300 123C317 121 333 120 350 120C367 120 383 124 400 125C417 126 433 128 450 130C467 132 483 135 500 137C517 139 533 140 550 141C567 142 583 143 600 142' stroke='%23F59E0B' stroke-width='2.5' fill='none'/%3E%3C/svg%3E");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const YAxisLabels = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 0.75rem;
  color: #6b7280;
`;

interface CampaignDetailsProps {
  onBack?: () => void;
}

const CampaignDetails: React.FC<CampaignDetailsProps> = ({ onBack }) => {
  const [activeMonth, setActiveMonth] = useState(7); // August is active (0-indexed)
  
  // Sample data for charts - updated to match the image
  const monthlyClicks = [3, 2.5, 0.5, 1, 3, 0.5, 1, 2.8, 3.8, 1, 2, 0];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <Container>
      <BackButton onClick={onBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </BackButton>
      
      <Header>
        <CampaignTitle>Summer Referral Program</CampaignTitle>
        <StatusBadge>Active</StatusBadge>
      </Header>
      
      <DateRange>5/31/2024 - 8/30/2024</DateRange>
      
      <StatsGrid>
        <StatCard>
          <StatIcon color="67, 97, 238">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </StatIcon>
          <StatContent>
            <StatValue>1,234</StatValue>
            <StatLabel>Total Promoters</StatLabel>
            <StatChange positive>+12.4% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="255, 86, 48">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.96 4.17a4 4 0 0 1 0 7.66" stroke="currentColor"></path>
              <path d="M12.96 7a4 4 0 0 1 0 7.66" stroke="currentColor"></path>
              <path d="M8.96 19.66A4 4 0 0 1 8.96 12" stroke="currentColor"></path>
              <path d="M4.96 16.66A4 4 0 0 1 4.96 9" stroke="currentColor"></path>
            </svg>
          </StatIcon>
          <StatContent>
            <StatValue>23.5%</StatValue>
            <StatLabel>Conversion rate</StatLabel>
            <StatChange positive>+2.4% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="153, 27, 91">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </StatIcon>
          <StatContent>
            <StatValue>$12,345</StatValue>
            <StatLabel>Revenue Generated</StatLabel>
            <StatChange positive>+8.7% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="79, 129, 189">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </StatIcon>
          <StatContent>
            <StatValue>500</StatValue>
            <StatLabel>New Leads</StatLabel>
            <StatChange positive>+15.2% vs last month</StatChange>
          </StatContent>
        </StatCard>
      </StatsGrid>
      
      <ChartContainer>
        <ChartCard>
          <ChartTitle>Total Link Clicks</ChartTitle>
          <div style={{ position: 'relative', marginLeft: '40px' }}>
            <YAxisLabels>
              <div>5k</div>
              <div>4k</div>
              <div>3k</div>
              <div>2k</div>
              <div>1k</div>
              <div>0</div>
            </YAxisLabels>
            <BarChartContainer>
              {monthlyClicks.map((height, index) => (
                <Bar 
                  key={index} 
                  height={height * 20} 
                  selected={index === activeMonth}
                />
              ))}
            </BarChartContainer>
            <BarChartLabels>
              {months.map((month, index) => (
                <BarChartLabel key={index}>{month}</BarChartLabel>
              ))}
            </BarChartLabels>
          </div>
        </ChartCard>
        
        <ChartCard>
          <ChartTitle>Conversion Success Rate</ChartTitle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <DoughnutChart>
              <DoughnutCircle />
              <DoughnutLabel>
                <div className="percent">57%</div>
                <div className="label">Conversion</div>
              </DoughnutLabel>
            </DoughnutChart>
            
            <DoughnutLegend>
              <LegendItem>
                <LegendColor color="#6366f1" />
                <span>Referrals sent (57%)</span>
              </LegendItem>
              <LegendItem>
                <LegendColor color="#e0e7ff" />
                <span>Converted (43%)</span>
              </LegendItem>
            </DoughnutLegend>
          </div>
        </ChartCard>
      </ChartContainer>
      
      <ChannelSection>
        <ChannelTitle>Top Performing Channel</ChannelTitle>
        <ChannelGrid>
          <ChannelCard color="246, 173, 85">
            <ChannelLogo>Facebook</ChannelLogo>
            <ChannelPercent>78%</ChannelPercent>
          </ChannelCard>
          <ChannelCard color="239, 68, 68">
            <ChannelLogo>Twitter</ChannelLogo>
            <ChannelPercent>45%</ChannelPercent>
          </ChannelCard>
          <ChannelCard color="14, 165, 233">
            <ChannelLogo>LinkedIn</ChannelLogo>
            <ChannelPercent>23%</ChannelPercent>
          </ChannelCard>
        </ChannelGrid>
      </ChannelSection>
      
      <PerformanceSection>
        <PerformanceHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <PerformanceTitle>Campaign Performance</PerformanceTitle>
            <PerformanceLegend>
              <LegendItemInline color="#6366f1">Revenue</LegendItemInline>
              <LegendItemInline color="#F59E0B">Conversion</LegendItemInline>
            </PerformanceLegend>
          </div>
          
          <TimeSelector>
            <span>Last 1 year</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </TimeSelector>
        </PerformanceHeader>
        
        <PerformanceChartContainer>
          <ChartYAxis>
            <ChartYAxisLabel>$850</ChartYAxisLabel>
            <ChartYAxisLabel>$700</ChartYAxisLabel>
            <ChartYAxisLabel>$550</ChartYAxisLabel>
            <ChartYAxisLabel>$400</ChartYAxisLabel>
            <ChartYAxisLabel>$250</ChartYAxisLabel>
            <ChartYAxisLabel>$0</ChartYAxisLabel>
          </ChartYAxis>
          
          <RevenueLabel>Revenue</RevenueLabel>
          
          <ChartXAxis>
            <div>Jan</div>
            <div>Feb</div>
            <div>Mar</div>
            <div>Apr</div>
            <div>May</div>
            <div>Jun</div>
            <div>Jul</div>
            <div>Aug</div>
            <div>Sep</div>
            <div>Oct</div>
            <div>Nov</div>
            <div>Dec</div>
          </ChartXAxis>
          
          <ConversionLabel>100%</ConversionLabel>
          <div style={{ position: 'absolute', right: 0, top: 50 }}>80%</div>
          <div style={{ position: 'absolute', right: 0, top: 80 }}>60%</div>
          <div style={{ position: 'absolute', right: 0, top: 110 }}>40%</div>
          <div style={{ position: 'absolute', right: 0, top: 140 }}>20%</div>
          <div style={{ position: 'absolute', right: 0, top: 170 }}>0</div>
          
          <PerformanceChartLine />
          <PerformanceChartPopup>
            <div>$520</div>
            <div>50%</div>
          </PerformanceChartPopup>
          <PerformanceChartPlaceholder />
        </PerformanceChartContainer>
      </PerformanceSection>
    </Container>
  );
};

export default CampaignDetails; 