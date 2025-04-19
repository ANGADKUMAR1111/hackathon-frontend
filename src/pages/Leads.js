import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiFilter, FiEye, FiEdit, FiUser, FiPieChart, FiDollarSign, FiUserCheck } from 'react-icons/fi';

// Styled Components
const Container = styled.div`
  padding: 24px;
  width: 100%;
  background-color: #f7f9fc;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${props => props.primary ? '#4361ee' : 'white'};
  color: ${props => props.primary ? 'white' : '#4b5563'};
  border: 1px solid ${props => props.primary ? '#4361ee' : '#e5e7eb'};
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#3a56e4' : '#f9fafb'};
    border-color: ${props => props.primary ? '#3a56e4' : '#d1d5db'};
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const StatIcon = styled.div`
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

const StatChange = styled.div`
  font-size: 0.75rem;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  display: flex;
  align-items: center;
  gap: 2px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
`;

const SearchFilterContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const SearchInput = styled.div`
  position: relative;
  
  input {
    width: 240px;
    padding: 8px 16px 8px 36px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.875rem;
    
    &:focus {
      outline: none;
      border-color: #4361ee;
      box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    width: 16px;
    height: 16px;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const TableHead = styled.thead`
  background-color: #f9fafb;
  
  th {
    padding: 12px 16px;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    color: #4b5563;
    border-bottom: 1px solid #e5e7eb;
  }
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #e5e7eb;
    position: relative;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background-color: #f9fafb;
    }
  }
  
  td {
    padding: 12px 16px;
    font-size: 0.875rem;
    color: #4b5563;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    if (props.status === 'converted') {
      return `
        background-color: rgba(16, 185, 129, 0.1);
        color: #10b981;
      `;
    } else if (props.status === 'contacted') {
      return `
        background-color: rgba(59, 130, 246, 0.1);
        color: #3b82f6;
      `;
    } else {
      return `
        background-color: rgba(245, 158, 11, 0.1);
        color: #f59e0b;
      `;
    }
  }}
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ActionButtonsCell = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
`;

const ActionTooltip = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 8px;
  display: none;
  z-index: 10;
  width: max-content;
`;

const ActionTooltipButton = styled.button`
  display: block;
  background-color: #6b7280;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 0.75rem;
  cursor: pointer;
  width: 100%;
  text-align: center;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    background-color: #4b5563;
  }
`;

const TooltipContainer = styled.div`
  position: relative;
  
  &:hover ${ActionTooltip} {
    display: block;
  }
`;

const Leads = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [activeRowId, setActiveRowId] = useState(null);
  
  // Sample data
  const leads = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      phone: '+1 (555) 123-4567',
      referrer: 'Emery Dorwart',
      dateAdded: '10-05-2024',
      campaign: 'Summer Sale',
      status: 'converted'
    },
    {
      id: 2,
      name: 'Sam Wilson',
      email: 'sam.wilson@example.com',
      phone: '+1 (555) 234-5678',
      referrer: 'Kadin Lipinski',
      dateAdded: '15-05-2024',
      campaign: 'Spring Promotion',
      status: 'contacted'
    },
    {
      id: 3,
      name: 'Taylor Reed',
      email: 'taylor.reed@example.com',
      phone: '+1 (555) 345-6789',
      referrer: 'Randy Cultane',
      dateAdded: '18-05-2024',
      campaign: 'Summer Sale',
      status: 'pending'
    },
    {
      id: 4,
      name: 'Jordan Lee',
      email: 'jordan.lee@example.com',
      phone: '+1 (555) 456-7890',
      referrer: 'Jaxson Vaccaro',
      dateAdded: '20-05-2024',
      campaign: 'New Customer',
      status: 'contacted'
    },
    {
      id: 5,
      name: 'Casey Morgan',
      email: 'casey.morgan@example.com',
      phone: '+1 (555) 567-8901',
      referrer: 'Joselyn Levin',
      dateAdded: '25-05-2024',
      campaign: 'Spring Promotion',
      status: 'converted'
    },
    {
      id: 6,
      name: 'Riley Parker',
      email: 'riley.parker@example.com',
      phone: '+1 (555) 678-9012',
      referrer: 'Martin Septimus',
      dateAdded: '28-05-2024',
      campaign: 'New Customer',
      status: 'pending'
    }
  ];
  
  // Toggle selection of a lead
  const toggleLeadSelection = (id) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter(leadId => leadId !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };
  
  // Toggle selection of all leads
  const toggleAllLeads = () => {
    if (selectedLeads.length === leads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leads.map(lead => lead.id));
    }
  };
  
  // Handle row hover
  const handleRowMouseEnter = (id) => {
    setActiveRowId(id);
  };
  
  const handleRowMouseLeave = () => {
    setActiveRowId(null);
  };
  
  // Handle action clicks
  const handleViewLead = (id) => {
    console.log(`View lead ${id}`);
  };
  
  const handleContactLead = (id) => {
    console.log(`Contact lead ${id}`);
  };
  
  return (
    <Container>
      <Header>
        <Title>Manage and monitor your leads</Title>
      </Header>
      
      <ActionButtons>
        <Button primary>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Lead
        </Button>
        
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Export Leads
        </Button>
      </ActionButtons>
      
      <StatsContainer>
        <StatCard>
          <StatIcon color="67, 97, 238">
            <FiUser />
          </StatIcon>
          <StatContent>
            <StatValue>125</StatValue>
            <StatLabel>Total Leads</StatLabel>
            <StatChange positive>+12.5% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="59, 130, 246">
            <FiUserCheck />
          </StatIcon>
          <StatContent>
            <StatValue>68</StatValue>
            <StatLabel>Contacted Leads</StatLabel>
            <StatChange positive>+15.3% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="16, 185, 129">
            <FiPieChart />
          </StatIcon>
          <StatContent>
            <StatValue>42%</StatValue>
            <StatLabel>Conversion Rate</StatLabel>
            <StatChange positive>+3.8% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="14, 165, 233">
            <FiDollarSign />
          </StatIcon>
          <StatContent>
            <StatValue>$15,780</StatValue>
            <StatLabel>Revenue from Leads</StatLabel>
            <StatChange positive>+10.6% vs last month</StatChange>
          </StatContent>
        </StatCard>
      </StatsContainer>
      
      <SectionHeader>
        <SectionTitle>Leads</SectionTitle>
        <SearchFilterContainer>
          <SearchInput>
            <FiSearch />
            <input
              type="text"
              placeholder="Search leads..." 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search leads"
            />
          </SearchInput>
          
          <FilterButton>
            <FiFilter />
            Filter
          </FilterButton>
        </SearchFilterContainer>
      </SectionHeader>
      
      <Table>
        <TableHead>
          <tr>
            <th style={{ width: '40px' }}>
              <Checkbox
                checked={selectedLeads.length === leads.length}
                onChange={toggleAllLeads}
                aria-label="Select all leads"
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Referrer</th>
            <th>Date Added</th>
            <th>Campaign</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </TableHead>
        <TableBody>
          {leads.map(lead => (
            <tr 
              key={lead.id}
              onMouseEnter={() => handleRowMouseEnter(lead.id)}
              onMouseLeave={handleRowMouseLeave}
            >
              <td>
                <Checkbox
                  checked={selectedLeads.includes(lead.id)}
                  onChange={() => toggleLeadSelection(lead.id)}
                  aria-label={`Select ${lead.name}`}
                />
              </td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.referrer}</td>
              <td>{lead.dateAdded}</td>
              <td>{lead.campaign}</td>
              <td>
                <Badge status={lead.status}>
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </Badge>
              </td>
              <td>
                <ActionButtonsCell>
                  <TooltipContainer>
                    <ActionButton aria-label="View">
                      <FiEye />
                    </ActionButton>
                    {activeRowId === lead.id && (
                      <ActionTooltip>
                        <ActionTooltipButton onClick={() => handleViewLead(lead.id)}>
                          View Details
                        </ActionTooltipButton>
                      </ActionTooltip>
                    )}
                  </TooltipContainer>
                  <TooltipContainer>
                    <ActionButton aria-label="Contact">
                      <FiEdit />
                    </ActionButton>
                    {activeRowId === lead.id && (
                      <ActionTooltip>
                        <ActionTooltipButton onClick={() => handleContactLead(lead.id)}>
                          Contact Lead
                        </ActionTooltipButton>
                      </ActionTooltip>
                    )}
                  </TooltipContainer>
                </ActionButtonsCell>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Leads; 