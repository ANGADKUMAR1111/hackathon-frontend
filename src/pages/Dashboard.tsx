import React, { useState } from 'react';
import styled from 'styled-components';

// Import components
import StatCard from '../components/StatCard';

// Styled components for the dashboard
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: #f7f9fc;
  min-height: 100vh;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  span {
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 8px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MetricTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 4px;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const CircleChart = styled.div<{ percentage: number; color: string }>`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: white;
  }
  
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
    
    circle {
      fill: none;
      stroke-width: 10;
      stroke-linecap: round;
      stroke-dasharray: 283;
      stroke-dashoffset: ${props => 283 - (283 * props.percentage) / 100};
      stroke: ${props => props.color};
      transition: stroke-dashoffset 1s ease;
    }
  }
  
  span {
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
  }
`;

const ChartsRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ChartTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const TimeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  background-color: #f3f4f6;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #4b5563;
  cursor: pointer;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const PerformanceChart = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-top: 20px;
  
  .chart-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .y-axis {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 10px;
    font-size: 0.75rem;
    color: #6b7280;
  }
  
  .x-axis {
    position: absolute;
    bottom: 0;
    left: 30px;
    right: 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #6b7280;
    padding-top: 10px;
  }
  
  .chart-line {
    position: absolute;
    top: 0;
    left: 30px;
    right: 0;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 100 50'%3E%3Cpath d='M0,40 C5,37 10,30 15,32 C20,34 25,38 30,35 C35,32 40,20 45,18 C50,16 55,22 60,24 C65,26 70,25 75,20 C80,15 85,10 90,12 C95,14 100,25 105,30' fill='none' stroke='%234f46e5' stroke-width='2'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  
  .chart-point {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #4f46e5;
    border-radius: 50%;
    top: 30%;
    left: 40%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
    z-index: 3;
  }
  
  .chart-tooltip {
    position: absolute;
    top: 15%;
    left: 40%;
    background-color: #4b5563;
    color: white;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 4px;
    transform: translate(-50%, -100%);
    z-index: 4;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      margin-left: -4px;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #4b5563;
    }
  }
`;

const ConversionDonut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const DonutChart = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
  margin: 0 auto;
  
  svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
    
    circle.background {
      fill: none;
      stroke: #e5e7eb;
      stroke-width: 20;
    }
    
    path.progress {
      fill: none;
      stroke: #60a5fa;
      stroke-width: 20;
      stroke-linecap: round;
    }
  }
`;

const DonutLegend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 24px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  .color-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .label {
    font-size: 0.875rem;
    color: #6b7280;
  }
  
  .value {
    margin-left: auto;
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
  }
`;

const ChannelSection = styled.div`
  margin-top: 24px;
`;

const ChannelTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`;

const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChannelCard = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  .platform {
    font-size: 0.875rem;
    margin-bottom: 4px;
    font-weight: 500;
  }
  
  .percentage {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const RecentActivities = styled.div`
  margin-top: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const ActivitiesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 16px 24px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  
  th {
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
  }
  
  td {
    font-size: 0.875rem;
    color: #111827;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`;

const LeaderboardTable = styled.div`
  margin-top: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 16px 24px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  
  th {
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
  }
  
  td {
    font-size: 0.875rem;
    color: #111827;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`;

// Sample data
const activities = [
  { activity: 'Julian earned $10', date: '28-4-2024', time: '10:30 AM' },
  { activity: 'John Doe signed up from your referral link', date: '29-4-2024', time: '9:45 AM' },
  { activity: 'You reached 50 referrals milestone!', date: '30-4-2024', time: '8:20 AM' },
  { activity: 'You updated your referral campaign', date: '31-4-2024', time: '7:00 AM' }
];

const leaderboardData = [
  { rank: 1, name: 'Emery Dokidis', conversionRate: 150, referralsSent: 80, successfulConversions: '60%', revenue: '$1,200' },
  { rank: 2, name: 'Kadin Lipshutz', conversionRate: 132, referralsSent: 90, successfulConversions: '65%', revenue: '$980' },
  { rank: 3, name: 'Randy Culhane', conversionRate: 110, referralsSent: 60, successfulConversions: '60%', revenue: '$880' },
  { rank: 4, name: 'Jaxson Vaccaro', conversionRate: 100, referralsSent: 85, successfulConversions: '75%', revenue: '$500' },
  { rank: 5, name: 'Jocelyn Levin', conversionRate: 90, referralsSent: 30, successfulConversions: '63%', revenue: '$600' },
  { rank: 6, name: 'Maren Septimus', conversionRate: 80, referralsSent: 35, successfulConversions: '25%', revenue: '$200' },
  { rank: 7, name: 'Haylie Saris', conversionRate: 120, referralsSent: 55, successfulConversions: '45%', revenue: '$150' },
  { rank: 8, name: 'Randy Horwitz', conversionRate: 110, referralsSent: 90, successfulConversions: '65%', revenue: '$980' }
];

const Dashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>('Last 4 months');

  return (
    <DashboardContainer>
      <PageHeader>
        <PageTitle>Dashboard</PageTitle>
      </PageHeader>
      
      <StatsGrid>
        <StatCard 
          title="Total Promoters" 
          value="1,234" 
          change="+25.4% vs last month" 
          icon={
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          } 
          color="#10b981" 
        />
        
        <StatCard 
          title="Conversion rate" 
          value="33.5%" 
          change="-2.43% vs last month" 
          icon={
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          } 
          color="#ef4444" 
        />
        
        <StatCard 
          title="Revenue Generated" 
          value="$12,345" 
          change="+8.7% vs last month" 
          icon={
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          } 
          color="#f59e0b" 
        />
        
        <StatCard 
          title="Active Campaigns" 
          value="3" 
          change="" 
          icon={
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          } 
          color="#3b82f6" 
        />
      </StatsGrid>
      
      <MetricsGrid>
        <MetricCard>
          <MetricTitle>
            Repeat Referral Rate
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </MetricTitle>
          <CircleChart percentage={42} color="#10b981">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" />
            </svg>
            <span>42%</span>
          </CircleChart>
        </MetricCard>
        
        <MetricCard>
          <MetricTitle>
            Referral Engagement Rate
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </MetricTitle>
          <CircleChart percentage={67} color="#f97316">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" />
            </svg>
            <span>67%</span>
          </CircleChart>
        </MetricCard>
        
        <MetricCard>
          <MetricTitle>
            Churn Rate of Leads
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </MetricTitle>
          <CircleChart percentage={28} color="#6366f1">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" />
            </svg>
            <span>28%</span>
          </CircleChart>
        </MetricCard>
        
        <MetricCard>
          <MetricTitle>
            Upsell Rate of Leads
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </MetricTitle>
          <CircleChart percentage={19} color="#d946ef">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" />
            </svg>
            <span>19%</span>
          </CircleChart>
        </MetricCard>
      </MetricsGrid>
      
      <ChartsRow>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>Promoter Performance Over Time</ChartTitle>
            <TimeSelector>
              <span>{timeframe}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </TimeSelector>
          </ChartHeader>
          
          <PerformanceChart>
            <div className="chart-container">
              <div className="y-axis">
                <span>50%</span>
                <span>40%</span>
                <span>30%</span>
                <span>20%</span>
                <span>10%</span>
                <span>0%</span>
              </div>
              <div className="chart-line"></div>
              <div className="chart-point"></div>
              <div className="chart-tooltip">30%</div>
              <div className="x-axis">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </PerformanceChart>
        </ChartCard>
        
        <ChartCard>
          <ChartHeader>
            <ChartTitle>Conversion Success Rate</ChartTitle>
          </ChartHeader>
          
          <ConversionDonut>
            <DonutChart>
              <svg viewBox="0 0 100 100">
                <circle className="background" cx="50" cy="50" r="40" />
                <path 
                  className="progress" 
                  d="M50 10 A40 40 0 0 1 90 50 A40 40 0 0 1 80 80" 
                  strokeDasharray="251" 
                  strokeDashoffset="100"
                />
              </svg>
            </DonutChart>
            
            <DonutLegend>
              <LegendItem>
                <div className="color-indicator" style={{ backgroundColor: '#818cf8' }}></div>
                <span className="label">Referrals sent</span>
                <span className="value">57%</span>
              </LegendItem>
              <LegendItem>
                <div className="color-indicator" style={{ backgroundColor: '#60a5fa' }}></div>
                <span className="label">Converted</span>
                <span className="value">43%</span>
              </LegendItem>
            </DonutLegend>
          </ConversionDonut>
          
          <ChannelSection>
            <ChannelTitle>Top Performing Channel</ChannelTitle>
            <ChannelGrid>
              <ChannelCard color="#f97316">
                <div className="platform">Facebook</div>
                <div className="percentage">78%</div>
              </ChannelCard>
              <ChannelCard color="#ec4899">
                <div className="platform">Twitter</div>
                <div className="percentage">45%</div>
              </ChannelCard>
              <ChannelCard color="#0ea5e9">
                <div className="platform">LinkedIn</div>
                <div className="percentage">23%</div>
              </ChannelCard>
            </ChannelGrid>
          </ChannelSection>
        </ChartCard>
      </ChartsRow>
      
      <RecentActivities>
        <SectionTitle>Recent Activities</SectionTitle>
        <ActivitiesTable>
          <thead>
            <tr>
              <th>Activities</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.activity}</td>
                <td>{activity.date}</td>
                <td>{activity.time}</td>
              </tr>
            ))}
          </tbody>
        </ActivitiesTable>
      </RecentActivities>
      
      <LeaderboardTable>
        <SectionTitle>Leaderboard Table View</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Promoter Name</th>
              <th>Conversion Rate</th>
              <th>Referrals Sent</th>
              <th>Successful Conversions</th>
              <th>Revenue Generated</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((item) => (
              <tr key={item.rank}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.conversionRate}</td>
                <td>{item.referralsSent}</td>
                <td>{item.successfulConversions}</td>
                <td>{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </LeaderboardTable>
    </DashboardContainer>
  );
};

export default Dashboard; 