import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiFilter, FiChevronDown, FiEye, FiEdit, FiUser, FiUsers, FiPieChart, FiDollarSign, FiX, FiUpload } from 'react-icons/fi';

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
  
  .user-info {
    display: flex;
    flex-direction: column;
    
    .name {
      font-size: 0.875rem;
      font-weight: 500;
      color: #111827;
    }
    
    .email {
      font-size: 0.75rem;
      color: #6b7280;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const Button = styled.button<{ primary?: boolean }>`
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

const Badge = styled.span<{ status: 'active' | 'inactive' | 'completed' }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    if (props.status === 'active') {
      return `
        background-color: rgba(16, 185, 129, 0.1);
        color: #10b981;
      `;
    } else if (props.status === 'inactive') {
      return `
        background-color: rgba(245, 158, 11, 0.1);
        color: #f59e0b;
      `;
    } else {
      return `
        background-color: rgba(52, 211, 153, 0.1);
        color: #34d399;
      `;
    }
  }}
`;

const ActionButtonsCell = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
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

// Add new styled components for the modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 600px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.active ? '#4361ee' : 'transparent'};
  font-size: 0.875rem;
  font-weight: ${props => props.active ? '600' : '500'};
  color: ${props => props.active ? '#111827' : '#6b7280'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.active ? '#111827' : '#4b5563'};
  }
`;

const TabContent = styled.div`
  margin-top: 24px;
`;

const DashedBox = styled.div`
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
  background-color: #f9fafb;
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
  margin-bottom: 16px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const UploadText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0 0 16px 0;
  text-align: center;
`;

const OrText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 8px 0;
`;

const BrowseButton = styled.button`
  background-color: white;
  border: 1px solid #4361ee;
  color: #4361ee;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(67, 97, 238, 0.05);
  }
`;

const FormContainer = styled.div`
  margin-top: 24px;
`;

const FormField = styled.div`
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 6px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
`;

const CancelButton = styled.button`
  background-color: white;
  border: 1px solid #d1d5db;
  color: #4b5563;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const SaveButton = styled.button`
  background-color: #4361ee;
  border: none;
  color: white;
  padding: 8px 24px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #3a56e4;
  }
`;

const ProgressContainer = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FileIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 12px;
`;

const FileDetails = styled.div`
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

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  
  .progress {
    height: 100%;
    background-color: #4361ee;
    transition: width 0.3s ease;
  }
`;

const ZapierBox = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  margin: 24px 0;
`;

const ZapierText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0 0 24px 0;
`;

const ZapierButton = styled.button`
  background-color: #4361ee;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #3a56e4;
  }
`;

interface Promoter {
  id: number;
  name: string;
  phone: string;
  leads: number;
  conversionRate: number;
  lastFollowUp: string;
  revenue: string;
  status: 'active' | 'inactive' | 'completed';
}

const Promoters: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedPromoters, setSelectedPromoters] = useState<number[]>([]);
  const [activeRowId, setActiveRowId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('add_manually');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailId: ''
  });
  
  // Sample data
  const promoters: Promoter[] = [
    {
      id: 1,
      name: 'Emery Dorwart',
      phone: '+9789107147',
      leads: 12,
      conversionRate: 50,
      lastFollowUp: '28-4-2024',
      revenue: '$50',
      status: 'active'
    },
    {
      id: 2,
      name: 'Kadin Lipinski',
      phone: '+9755394827',
      leads: 8,
      conversionRate: 30,
      lastFollowUp: '27-5-2024',
      revenue: '$900',
      status: 'active'
    },
    {
      id: 3,
      name: 'Randy Cultane',
      phone: '+9701558987',
      leads: 15,
      conversionRate: 60,
      lastFollowUp: '28-5-2024',
      revenue: '$1000',
      status: 'inactive'
    },
    {
      id: 4,
      name: 'Jaxson Vaccaro',
      phone: '+9711223563',
      leads: 10,
      conversionRate: 42,
      lastFollowUp: '30-8-2024',
      revenue: '$350',
      status: 'completed'
    },
    {
      id: 5,
      name: 'Joselyn Levin',
      phone: '+9735431930',
      leads: 6,
      conversionRate: 28,
      lastFollowUp: '01-7-2024',
      revenue: '$1500',
      status: 'inactive'
    },
    {
      id: 6,
      name: 'Martin Septimus',
      phone: '+9713382532',
      leads: 18,
      conversionRate: 68,
      lastFollowUp: '03-7-2024',
      revenue: '$2,000',
      status: 'completed'
    },
    {
      id: 7,
      name: 'Hayle Saris',
      phone: '+9718532822',
      leads: 13,
      conversionRate: 58,
      lastFollowUp: '05-7-2024',
      revenue: '$300',
      status: 'active'
    },
    {
      id: 8,
      name: 'Randy Hertzitz',
      phone: '+9753423152',
      leads: 12,
      conversionRate: 50,
      lastFollowUp: '10-7-2024',
      revenue: '$600',
      status: 'inactive'
    }
  ];
  
  // Toggle selection of a promoter
  const togglePromoterSelection = (id: number) => {
    if (selectedPromoters.includes(id)) {
      setSelectedPromoters(selectedPromoters.filter(promoterId => promoterId !== id));
    } else {
      setSelectedPromoters([...selectedPromoters, id]);
    }
  };
  
  // Toggle selection of all promoters
  const toggleAllPromoters = () => {
    if (selectedPromoters.length === promoters.length) {
      setSelectedPromoters([]);
    } else {
      setSelectedPromoters(promoters.map(promoter => promoter.id));
    }
  };
  
  // Handle row hover
  const handleRowMouseEnter = (id: number) => {
    setActiveRowId(id);
  };
  
  const handleRowMouseLeave = () => {
    setActiveRowId(null);
  };
  
  // Handle action clicks
  const handleViewProfile = (id: number) => {
    console.log(`View profile for promoter ${id}`);
    // Add your view profile logic here
  };
  
  const handleSendMessage = (id: number) => {
    console.log(`Send message to promoter ${id}`);
    // Add your send message logic here
  };
  
  // Open modal for adding new promoter
  const openAddPromoterModal = () => {
    setShowModal(true);
  };
  
  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setActiveTab('add_manually');
    setFileUploaded(false);
    setUploadProgress(0);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailId: ''
    });
  };
  
  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  // Handle file upload simulation
  const simulateFileUpload = () => {
    setFileUploaded(true);
    
    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      
      if (progress >= 70) {
        clearInterval(interval);
      }
    }, 300);
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSave = () => {
    if (activeTab === 'add_manually') {
      console.log('Adding promoter manually:', formData);
      // Add logic to save the promoter data
    } else if (activeTab === 'upload_csv') {
      console.log('Uploading CSV file');
      // Add logic to handle the CSV upload
    } else if (activeTab === 'sync_zapier') {
      console.log('Syncing with Zapier');
      // Add logic to connect with Zapier
    }
    
    closeModal();
  };
  
  return (
    <Container>
      <Header>
        <Title>Manage and monitor your promoter referral activities</Title>
      </Header>
      
      <ActionButtons>
        <Button primary onClick={openAddPromoterModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Promoter
        </Button>
        
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Ask Past Customers For Referrals
        </Button>
      </ActionButtons>
      
      <StatsContainer>
        <StatCard>
          <StatIcon color="67, 97, 238">
            <FiUser />
          </StatIcon>
          <StatContent>
            <StatValue>8</StatValue>
            <StatLabel>Total Customers</StatLabel>
            <StatChange positive>+12.5% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="255, 122, 105">
            <FiUsers />
          </StatIcon>
          <StatContent>
            <StatValue>94</StatValue>
            <StatLabel>New Customers</StatLabel>
            <StatChange positive>+15.3% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="236, 72, 153">
            <FiPieChart />
          </StatIcon>
          <StatContent>
            <StatValue>64%</StatValue>
            <StatLabel>Average Conversion rate</StatLabel>
            <StatChange positive>+3.8% vs last month</StatChange>
          </StatContent>
        </StatCard>
        
        <StatCard>
          <StatIcon color="14, 165, 233">
            <FiDollarSign />
          </StatIcon>
          <StatContent>
            <StatValue>$23,900</StatValue>
            <StatLabel>Total Revenue Generated</StatLabel>
            <StatChange positive>+10.6% vs last month</StatChange>
          </StatContent>
        </StatCard>
      </StatsContainer>
      
      <SectionHeader>
        <SectionTitle>Promoters</SectionTitle>
        <SearchFilterContainer>
          <SearchInput>
            <FiSearch />
            <input
              type="text"
              placeholder="Search..." 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search promoters"
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
                checked={selectedPromoters.length === promoters.length}
                onChange={toggleAllPromoters}
                aria-label="Select all promoters"
              />
            </th>
            <th>Promoter Name</th>
            <th>Contact No.</th>
            <th>Leads</th>
            <th>Conversion Rate</th>
            <th>Last Follow-Up</th>
            <th>Revenue Generated</th>
            <th>Referrer Status</th>
            <th>Actions</th>
          </tr>
        </TableHead>
        <TableBody>
          {promoters.map(promoter => (
            <tr 
              key={promoter.id}
              onMouseEnter={() => handleRowMouseEnter(promoter.id)}
              onMouseLeave={handleRowMouseLeave}
            >
              <td>
                <Checkbox
                  checked={selectedPromoters.includes(promoter.id)}
                  onChange={() => togglePromoterSelection(promoter.id)}
                  aria-label={`Select ${promoter.name}`}
                />
              </td>
              <td>{promoter.name}</td>
              <td>{promoter.phone}</td>
              <td>{promoter.leads}</td>
              <td>{promoter.conversionRate}%</td>
              <td>{promoter.lastFollowUp}</td>
              <td>{promoter.revenue}</td>
              <td>
                <Badge status={promoter.status}>
                  {promoter.status.charAt(0).toUpperCase() + promoter.status.slice(1)}
                </Badge>
              </td>
              <td>
                <ActionButtonsCell>
                  <TooltipContainer>
                    <ActionButton aria-label="View">
                      <FiEye />
                    </ActionButton>
                    {activeRowId === promoter.id && (
                      <ActionTooltip>
                        <ActionTooltipButton onClick={() => handleViewProfile(promoter.id)}>
                          View Profile
                        </ActionTooltipButton>
                      </ActionTooltip>
                    )}
                  </TooltipContainer>
                  <TooltipContainer>
                    <ActionButton aria-label="Edit">
                      <FiEdit />
                    </ActionButton>
                    {activeRowId === promoter.id && (
                      <ActionTooltip>
                        <ActionTooltipButton onClick={() => handleSendMessage(promoter.id)}>
                          Send follow-up message
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
      
      {/* Add Promoter Modal */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Choose How You Want to Add Customers</ModalTitle>
              <CloseButton onClick={closeModal}>
                <FiX />
              </CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <TabsContainer>
                <Tab 
                  active={activeTab === 'add_manually'} 
                  onClick={() => handleTabChange('add_manually')}
                >
                  Add Manually
                </Tab>
                <Tab 
                  active={activeTab === 'upload_csv'} 
                  onClick={() => handleTabChange('upload_csv')}
                >
                  Upload CSV File
                </Tab>
                <Tab 
                  active={activeTab === 'sync_zapier'} 
                  onClick={() => handleTabChange('sync_zapier')}
                >
                  Sync with Zapier
                </Tab>
              </TabsContainer>
              
              {activeTab === 'add_manually' && (
                <FormContainer>
                  <FormField>
                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                    <FormInput 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      placeholder="Enter Full Name" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </FormField>
                  
                  <FormField>
                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                    <FormInput 
                      type="text" 
                      id="phoneNumber" 
                      name="phoneNumber"
                      placeholder="Enter Phone Number" 
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </FormField>
                  
                  <FormField>
                    <FormLabel htmlFor="emailId">Email ID</FormLabel>
                    <FormInput 
                      type="email" 
                      id="emailId" 
                      name="emailId"
                      placeholder="Enter Email ID" 
                      value={formData.emailId}
                      onChange={handleInputChange}
                    />
                  </FormField>
                </FormContainer>
              )}
              
              {activeTab === 'upload_csv' && (
                <>
                  {!fileUploaded ? (
                    <DashedBox>
                      <UploadIcon>
                        <FiUpload />
                      </UploadIcon>
                      <UploadText>Drag and drop files here</UploadText>
                      <OrText>or</OrText>
                      <BrowseButton onClick={simulateFileUpload}>Browse Files</BrowseButton>
                    </DashedBox>
                  ) : (
                    <ProgressContainer>
                      <FileInfo>
                        <FileIcon>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6b7280" viewBox="0 0 16 16">
                            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                          </svg>
                        </FileIcon>
                        <FileDetails>
                          <div className="file-name">Leads.csv</div>
                          <div className="file-size">418KB</div>
                        </FileDetails>
                      </FileInfo>
                      <ProgressBar>
                        <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
                      </ProgressBar>
                    </ProgressContainer>
                  )}
                </>
              )}
              
              {activeTab === 'sync_zapier' && (
                <ZapierBox>
                  <ZapierText>Automatically sync your customer data from your CRM using Zapier</ZapierText>
                  <ZapierButton>Connect with Zapier</ZapierButton>
                </ZapierBox>
              )}
            </ModalBody>
            
            <ModalFooter>
              <CancelButton onClick={closeModal}>Cancel</CancelButton>
              <SaveButton onClick={handleSave}>Save</SaveButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Promoters; 