import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  height: 70px;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f46e5;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 28px;
    height: 28px;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NotificationIcon = styled.div`
  position: relative;
  cursor: pointer;
  
  svg {
    color: #6b7280;
    width: 20px;
    height: 20px;
  }
  
  span {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #ef4444;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
    
    .name {
      font-weight: 600;
      font-size: 0.9rem;
      color: #111827;
    }
    
    .role {
      font-size: 0.8rem;
      color: #6b7280;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo to="/">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.5 3v10.5H21V3H9.5zm10.5 9H11V4.5h9V12zm-15-3H3v10.5h13.5v-1.5h-10.5V9z" />
        </svg>
        ReferralHub
      </Logo>
      
      <UserSection>
        <NotificationIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg>
          <span>3</span>
        </NotificationIcon>
        
        <UserProfile>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User profile" />
          <div className="user-info">
            <span className="name">John Doe</span>
            <span className="role">Software Engineer</span>
          </div>
        </UserProfile>
      </UserSection>
    </NavbarContainer>
  );
};

export default Navbar; 