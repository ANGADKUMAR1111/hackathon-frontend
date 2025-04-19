import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
`;

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.875rem;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 32px;
`;

const Tab = styled.button`
  padding: 12px 16px;
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  color: ${(props) => (props.active ? "#4361ee" : "#64748b")};
  border-bottom: 2px solid
    ${(props) => (props.active ? "#4361ee" : "transparent")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => (props.active ? "#4361ee" : "#111827")};
  }
`;

const ProfileSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const SectionTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
`;

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    background: none;
    border: none;
    color: #4361ee;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
      margin-left: 6px;
      width: 16px;
      height: 16px;
    }
  }
`;

const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

const ProfileItemLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`;

const ProfileItemValue = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #64748b;

  button {
    background: none;
    border: none;
    color: #4361ee;
    cursor: pointer;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.danger &&
    `
    background-color: white;
    color: #ef4444;
    border: 1px solid #ef4444;
    
    &:hover {
      background-color: #fee2e2;
    }
  `}

  ${(props) =>
    props.primary &&
    `
    background-color: #ef4444;
    color: white;
    border: 1px solid #ef4444;
    
    &:hover {
      background-color: #dc2626;
    }
  `}

  ${(props) =>
    props.save &&
    `
    background-color: #4361ee;
    color: white;
    border: none;
    padding: 10px 24px;
    border-radius: 4px;
    
    &:hover {
      background-color: #3a56e4;
    }
  `}
`;

const FormContainer = styled.div`
  padding: 24px;
`;

const FormRow = styled.div`
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 8px;
`;

const Optional = styled.span`
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: normal;
  margin-left: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 0.875rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Select = styled.div`
  position: relative;

  select {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 0.875rem;
    appearance: none;
    background-color: white;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: #4361ee;
      box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #64748b;
    pointer-events: none;
  }
`;

const FileUpload = styled.div`
  display: inline-block;
`;

const FileUploadButton = styled.button`
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
);

const RadioOption = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  cursor: pointer;
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.checked ? "#4361ee" : "#d1d5db")};
  margin-right: 12px;
  margin-top: 2px;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => (props.checked ? "#4361ee" : "transparent")};
  }
`;

const RadioContent = styled.div`
  flex: 1;
`;

const RadioLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 4px;
`;

const RadioDescription = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 8px;
`;

const ConnectButton = styled.button`
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #4361ee;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #4361ee;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f4ff;
  }
`;

const SectionDescription = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 24px;
`;

const SectionContainer = styled.div`
  margin-bottom: 32px;
`;

const PlanContainer = styled.div`
  padding: 24px;
`;

const PlanDetails = styled.div`
  margin-bottom: 24px;
`;

const PlanTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

const PlanDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 16px;
`;

const DaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const DaysText = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const DaysValue = styled.span`
  font-weight: 500;
  color: #111827;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  margin-bottom: 8px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #4361ee;
  border-radius: 3px;
`;

const RemainingDays = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 24px;
`;

const PlanPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 8px;
`;

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const Period = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const PopularTag = styled.span`
  font-size: 0.75rem;
  color: #4361ee;
  background-color: #e0e7ff;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const PaymentMethodsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin: 32px 0 16px;
`;

const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const PaymentMethod = styled.div`
  flex: 1;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`;

const CardNumber = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const CardExpiry = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const CardType = styled.img`
  height: 24px;
`;

const CardActions = styled.div`
  display: flex;
  gap: 8px;
`;

const CardButton = styled.button`
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  cursor: pointer;

  ${(props) =>
    props.edit &&
    `
    background-color: #f3f4f6;
    border: none;
    color: #4b5563;
    
    &:hover {
      background-color: #e5e7eb;
    }
  `}

  ${(props) =>
    props.delete &&
    `
    background-color: #fee2e2;
    border: none;
    color: #ef4444;
    
    &:hover {
      background-color: #fecaca;
    }
  `}
`;

const BillingSection = styled.div`
  margin-top: 32px;
`;

const BillingTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    font-size: 0.875rem;
  }

  th {
    color: #6b7280;
    font-weight: 500;
  }

  td {
    color: #111827;
  }
`;

const StatusBadge = styled.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;

  ${(props) =>
    props.status === "Pending" &&
    `
    background-color: #fff7ed;
    color: #f97316;
  `}

  ${(props) =>
    props.status === "Failed" &&
    `
    background-color: #fee2e2;
    color: #ef4444;
  `}
  
  ${(props) =>
    props.status === "Paid" &&
    `
    background-color: #f0fdf4;
    color: #22c55e;
  `}
`;

const DownloadButton = styled.button`
  background: none;
  border: none;
  color: #4361ee;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: #3a56e4;
  }
`;

const Settings = () => {
  const [activeTab, setActiveTab] = useState("user_profile");
  const [emailOption, setEmailOption] = useState("system");
  const [smsOption, setSmsOption] = useState("system");

  const billingHistory = [
    {
      plan: "Standard Plan",
      amount: "$25",
      date: "28/09/2024",
      status: "Pending",
    },
    {
      plan: "Standard Plan",
      amount: "$25",
      date: "28/09/2024",
      status: "Failed",
    },
    {
      plan: "Standard Plan",
      amount: "$25",
      date: "28/09/2024",
      status: "Paid",
    },
    {
      plan: "Standard Plan",
      amount: "$25",
      date: "28/09/2024",
      status: "Paid",
    },
    {
      plan: "Standard Plan",
      amount: "$25",
      date: "28/09/2024",
      status: "Paid",
    },
  ];

  return (
    <Container>
      <PageHeader>
        <Title>Settings</Title>
      </PageHeader>

      <TabsContainer>
        <Tab
          active={activeTab === "user_profile"}
          onClick={() => setActiveTab("user_profile")}
        >
          User Profile
        </Tab>
        <Tab
          active={activeTab === "business_profile"}
          onClick={() => setActiveTab("business_profile")}
        >
          Business Profile
        </Tab>
        <Tab
          active={activeTab === "ai_settings"}
          onClick={() => setActiveTab("ai_settings")}
        >
          AI Settings
        </Tab>
        <Tab
          active={activeTab === "email_phone"}
          onClick={() => setActiveTab("email_phone")}
        >
          Email & Phone Setup
        </Tab>
        <Tab
          active={activeTab === "subscription"}
          onClick={() => setActiveTab("subscription")}
        >
          Subscription & Usage
        </Tab>
      </TabsContainer>

      {activeTab === "user_profile" && (
        <>
          <ProfileSection>
            <SectionHeader>
              <SectionTitle>Profile</SectionTitle>
            </SectionHeader>

            <ProfileItem>
              <ProfileItemLabel>Profile Picture</ProfileItemLabel>
              <ProfilePicture>
                <img src="https://i.pravatar.cc/100?img=12" alt="Profile" />
                <button>
                  Edit <EditIcon />
                </button>
              </ProfilePicture>
            </ProfileItem>

            <ProfileItem>
              <ProfileItemLabel>User Name</ProfileItemLabel>
              <ProfileItemValue>
                Kadin Stanton
                <button>
                  <EditIcon />
                </button>
              </ProfileItemValue>
            </ProfileItem>

            <ProfileItem>
              <ProfileItemLabel>User Phone</ProfileItemLabel>
              <ProfileItemValue>1234567890</ProfileItemValue>
            </ProfileItem>

            <ProfileItem>
              <ProfileItemLabel>Email</ProfileItemLabel>
              <ProfileItemValue>kadinstanton@gmail.com</ProfileItemValue>
            </ProfileItem>

            <ProfileItem>
              <ProfileItemLabel>Password</ProfileItemLabel>
              <ProfileItemValue>
                ********
                <button>Change Password</button>
              </ProfileItemValue>
            </ProfileItem>
          </ProfileSection>

          <Actions>
            <Button danger>Delete Account</Button>
            <Button primary>Sign Out</Button>
          </Actions>
        </>
      )}

      {activeTab === "business_profile" && (
        <ProfileSection>
          <FormContainer>
            <FormRow>
              <FormLabel>Business Logo</FormLabel>
              <FileUpload>
                <FileUploadButton>Choose Image</FileUploadButton>
              </FileUpload>
            </FormRow>

            <FormRow>
              <FormLabel>Business Description</FormLabel>
              <TextArea placeholder="Enter description..." />
            </FormRow>

            <FormGrid>
              <FormRow>
                <FormLabel>Business Name</FormLabel>
                <Input type="text" placeholder="Enter business name" />
              </FormRow>

              <FormRow>
                <FormLabel>Business Email</FormLabel>
                <Input type="email" placeholder="e.g. robert.fox@example.com" />
              </FormRow>
            </FormGrid>

            <FormGrid>
              <FormRow>
                <FormLabel>Business Phone No.</FormLabel>
                <Input type="tel" placeholder="Enter phone no." />
              </FormRow>

              <FormRow>
                <FormLabel>Industry</FormLabel>
                <Select>
                  <select>
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                  </select>
                </Select>
              </FormRow>
            </FormGrid>

            <FormGrid>
              <FormRow>
                <FormLabel>Services</FormLabel>
                <Input type="text" placeholder="Enter services..." />
              </FormRow>

              <FormRow>
                <FormLabel>Products</FormLabel>
                <Input type="text" placeholder="Enter products..." />
              </FormRow>
            </FormGrid>

            <FormGrid>
              <FormRow>
                <FormLabel>
                  Company Size <Optional>(Optional)</Optional>
                </FormLabel>
                <Select>
                  <select>
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </Select>
              </FormRow>

              <FormRow>
                <FormLabel>City</FormLabel>
                <Select>
                  <select>
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                    <option value="phoenix">Phoenix</option>
                  </select>
                </Select>
              </FormRow>
            </FormGrid>

            <FormGrid>
              <FormRow>
                <FormLabel>State</FormLabel>
                <Select>
                  <select>
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value="ca">California</option>
                    <option value="tx">Texas</option>
                    <option value="fl">Florida</option>
                    <option value="ny">New York</option>
                    <option value="il">Illinois</option>
                  </select>
                </Select>
              </FormRow>

              <FormRow>
                <FormLabel>Zip Code</FormLabel>
                <Input type="text" placeholder="Enter zip code" />
              </FormRow>
            </FormGrid>

            <Actions style={{ justifyContent: "flex-end" }}>
              <Button save>Save</Button>
            </Actions>
          </FormContainer>
        </ProfileSection>
      )}

      {activeTab === "ai_settings" && (
        <ProfileSection>
          <FormContainer>
            <FormRow>
              <FormLabel>AI Model Preferences</FormLabel>
              <Select>
                <select>
                  <option value="balanced">Balanced (Default)</option>
                  <option value="creative">Creative</option>
                  <option value="precise">Precise</option>
                </select>
              </Select>
            </FormRow>

            <FormRow>
              <FormLabel>Response Length</FormLabel>
              <Select>
                <select>
                  <option value="concise">Concise</option>
                  <option value="balanced" selected>
                    Balanced (Default)
                  </option>
                  <option value="detailed">Detailed</option>
                </select>
              </Select>
            </FormRow>

            <FormRow>
              <FormLabel>Industry Knowledge</FormLabel>
              <Select>
                <select>
                  <option value="general">General</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                </select>
              </Select>
            </FormRow>

            <FormRow>
              <FormLabel>Communication Style</FormLabel>
              <Select>
                <select>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                </select>
              </Select>
            </FormRow>

            <Actions style={{ justifyContent: "flex-end" }}>
              <Button save>Save</Button>
            </Actions>
          </FormContainer>
        </ProfileSection>
      )}

      {activeTab === "email_phone" && (
        <ProfileSection>
          <FormContainer>
            <SectionContainer>
              <SectionTitle>Global Email Sending Address</SectionTitle>
              <SectionDescription>
                Choose how your outgoing emails (referral links, follow-ups,
                etc.) are sent from the platform.
              </SectionDescription>

              <RadioOption onClick={() => setEmailOption("system")}>
                <RadioButton checked={emailOption === "system"} />
                <RadioContent>
                  <RadioLabel>Use System Email</RadioLabel>
                  <RadioDescription>
                    Emails will be sent using ReferralHub's default system
                    address (e.g., notify@referralhub.app).
                  </RadioDescription>
                </RadioContent>
              </RadioOption>

              <RadioOption onClick={() => setEmailOption("custom")}>
                <RadioButton checked={emailOption === "custom"} />
                <RadioContent>
                  <RadioLabel>Connect Your Custom Email Domain</RadioLabel>
                  <RadioDescription>
                    Improve deliverability and brand recognition by sending from
                    your own domain (e.g., you@yourcompany.com).
                  </RadioDescription>
                  {emailOption === "custom" && (
                    <ConnectButton>Connect Email Domain</ConnectButton>
                  )}
                </RadioContent>
              </RadioOption>
            </SectionContainer>

            <SectionContainer>
              <SectionTitle>Global SMS Sending Number</SectionTitle>
              <SectionDescription>
                Choose how SMS messages (referral links, updates, rewards) are
                sent to your customers.
              </SectionDescription>

              <RadioOption onClick={() => setSmsOption("system")}>
                <RadioButton checked={smsOption === "system"} />
                <RadioContent>
                  <RadioLabel>Use System Phone Number</RadioLabel>
                  <RadioDescription>
                    Messages will be sent from a standard number owned by
                    ReferralHub.
                  </RadioDescription>
                </RadioContent>
              </RadioOption>

              <RadioOption onClick={() => setSmsOption("custom")}>
                <RadioButton checked={smsOption === "custom"} />
                <RadioContent>
                  <RadioLabel>Connect Your Own Phone Number</RadioLabel>
                  <RadioDescription>
                    Use a verified number for better brand trust and
                    consistency.
                  </RadioDescription>
                  {smsOption === "custom" && (
                    <ConnectButton>Connect Phone Number</ConnectButton>
                  )}
                </RadioContent>
              </RadioOption>
            </SectionContainer>

            <Actions style={{ justifyContent: "flex-end" }}>
              <Button save>Save</Button>
            </Actions>
          </FormContainer>
        </ProfileSection>
      )}

      {activeTab === "subscription" && (
        <ProfileSection>
          <SectionHeader>
            <SectionTitle>Subscription & Usage</SectionTitle>
          </SectionHeader>

          <PlanContainer>
            <PlanDetails>
              <PlanTitle>Current Plan is Basic</PlanTitle>
              <PlanDescription>A simple start for everyone</PlanDescription>

              <DaysContainer>
                <DaysText>Days</DaysText>
                <DaysValue>12 of 30 Days</DaysValue>
              </DaysContainer>

              <ProgressBar>
                <Progress progress={40} />
              </ProgressBar>

              <RemainingDays>
                18 days remaining until your plan requires update
              </RemainingDays>

              <PlanPrice>
                <Price>$25</Price>
                <Period>Per Month</Period>
                <PopularTag>Popular</PopularTag>
              </PlanPrice>

              <PlanDescription>
                Standard plan for small to medium businesses
              </PlanDescription>

              <ButtonsContainer>
                <Button primary>Upgrade Plan</Button>
                <Button danger>Cancel Subscription</Button>
              </ButtonsContainer>
            </PlanDetails>

            <PaymentMethodsTitle>Payment Methods</PaymentMethodsTitle>

            <PaymentMethodsContainer>
              <PaymentMethod>
                <CardInfo>
                  <CardName>Tom McBride</CardName>
                  <CardNumber>**** **** 9856</CardNumber>
                  <CardExpiry>Card expires at 12/28</CardExpiry>
                </CardInfo>
                <CardActions>
                  <CardButton edit>Edit</CardButton>
                  <CardButton delete>Delete</CardButton>
                </CardActions>
              </PaymentMethod>

              <PaymentMethod>
                <CardInfo>
                  <CardName>Mildred Wagner</CardName>
                  <CardNumber>**** **** 5896</CardNumber>
                  <CardExpiry>Card expires at 10/27</CardExpiry>
                </CardInfo>
                <CardActions>
                  <CardButton edit>Edit</CardButton>
                  <CardButton delete>Delete</CardButton>
                </CardActions>
              </PaymentMethod>
            </PaymentMethodsContainer>

            <BillingSection>
              <PaymentMethodsTitle>Billing History</PaymentMethodsTitle>
              <BillingTable>
                <thead>
                  <tr>
                    <th>Plan Name</th>
                    <th>Amount</th>
                    <th>Issued Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {billingHistory.map((item, index) => (
                    <tr key={index}>
                      <td>{item.plan}</td>
                      <td>{item.amount}</td>
                      <td>{item.date}</td>
                      <td>
                        <StatusBadge status={item.status}>
                          {item.status}
                        </StatusBadge>
                      </td>
                      <td>
                        <DownloadButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </DownloadButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </BillingTable>
            </BillingSection>
          </PlanContainer>
        </ProfileSection>
      )}
    </Container>
  );
};

export default Settings;
