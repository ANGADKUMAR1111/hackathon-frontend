// AIAgent.tsx

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
`;

const Header = styled.div`
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

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  
  .user-info {
    font-size: 0.8rem;
    color: #6b7280;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #f3f4f6;
`;

const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AgentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #4361ee;
  color: white;
  font-weight: 500;
`;

const AgentName = styled.div`
  font-weight: 500;
  color: #111827;
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background-color: transparent;
  color: #4361ee;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MessageGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const MessageAvatar = styled.div<{ isUser?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.isUser ? '#f3f4f6' : '#4361ee'};
  color: ${(props) => props.isUser ? '#111827' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MessageBubble = styled.div<{ isUser?: boolean }>`
  padding: 12px 16px;
  background-color: ${(props) => props.isUser ? '#f3f4f6' : '#f8fafc'};
  border: 1px solid ${(props) => props.isUser ? '#e5e7eb' : '#e5e7eb'};
  border-radius: 12px;
  max-width: 80%;
  color: #111827;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const HighlightedMessageBubble = styled(MessageBubble)`
  background-color: #f0f5ff;
  border: 1px solid #c7d2fe;
`;

const InputContainer = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  gap: 12px;
`;

const MessageInput = styled.input`
  flex-grow: 1;
  padding: 10px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #4361ee;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #3a56e4;
  }
  
  &:disabled {
    background-color: #c7d2fe;
    cursor: not-allowed;
  }
`;

const QuickLinks = styled.div`
  margin-top: 24px;
  border-top: 1px solid #f3f4f6;
  padding-top: 16px;
`;

const QuickLinksTitle = styled.div`
  font-weight: 500;
  color: #111827;
  margin-bottom: 12px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const LinkButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  background-color: white;
  color: #4361ee;
  font-size: 0.8rem;
  cursor: pointer;
  
  &:hover {
    background-color: #f9fafb;
    border-color: #c7d2fe;
  }
`;

const SummaryList = styled.ul`
  padding-left: 20px;
  margin: 0;
  li {
    margin-bottom: 6px;
  }
`;

const CompletionIndicator = styled.div`
  padding: 4px 10px;
  font-size: 0.75rem;
  color: #6b7280;
  text-align: right;
`;

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  highlighted?: boolean;
  completion?: number;
}

const AIAgent: React.FC = () => {
  const initialMessages: Message[] = [
    {
      id: '1',
      content: 'Welcome Back, Kavin! How can I help you today?',
      isUser: false
    }
  ];
  
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isDemo, setIsDemo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Demo message sequences
  const demoMessages: Message[] = [
    {
      id: 'd1',
      content: "Hey, I want to create a new referral campaign, but I'd like some help from AI to make it high-converting referral campaign. Can you guide me through it?",
      isUser: true
    },
    {
      id: 'd2',
      content: "Absolutely! I'll help you create a high-converting referral campaign. Let's start by defining your main objective. What's the primary goal of this campaign?",
      isUser: false,
      highlighted: true
    },
    {
      id: 'd3',
      content: "My main goal is to increase sales through referrals, I want existing customers to bring in new paying customers, and I'd like to reward them for it.",
      isUser: true
    },
    {
      id: 'd4',
      content: "Great goal! Referral campaigns work best when there's a strong incentive. What kind of reward would you like to offer per successful referral?",
      isUser: false
    },
    {
      id: 'd5',
      content: "Discounts on their next purchase",
      isUser: true
    },
    {
      id: 'd6',
      content: "Smart choice! Discounts are a great way to encourage both referrals and repeat purchases. How much discount would you like to offer per successful referral?",
      isUser: false
    },
    {
      id: 'd7',
      content: "15%",
      isUser: true
    },
    {
      id: 'd8',
      content: "15% sounds like a strong incentive! Now, when should the referral person get their reward?",
      isUser: false,
      highlighted: true
    },
    {
      id: 'd9',
      content: "When the referred person signs up",
      isUser: true
    },
    {
      id: 'd10',
      content: "That's a wise way to ensure your campaign doesn't face revenue issues! Now, how long do you want this referral campaign to run?",
      isUser: false
    },
    {
      id: 'd11',
      content: "I want to test this campaign for a while before making any long-term decisions, so I think 3 months would be ideal. If it works well, I can always extend it.",
      isUser: true
    },
    {
      id: 'd12',
      content: "Got it! Here's a quick summary of your campaign:",
      isUser: false
    },
    {
      id: 'd13',
      content: `• Goal: Increase sales
• Reward: 15% discount on the next purchase
• Duration: 3 months
• Condition: Reward is given when the referred person signs up`,
      isUser: false,
      highlighted: true
    }
  ];
  
  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputValue('');
    
    // Only start the demo conversation if this is the first user message and demo not started
    if (messages.length === 1 && !isDemo) {
      setIsDemo(true);
      startDemoConversation();
    }
  };
  
  const startDemoConversation = () => {
    let currentIndex = 0;
    
    // Function to add the next demo message
    const addNextMessage = () => {
      if (currentIndex < demoMessages.length) {
        const messageToAdd = demoMessages[currentIndex];
        setMessages(prevMessages => [...prevMessages, messageToAdd]);
        currentIndex++;
        
        // Schedule the next message with different timing based on who's speaking
        const delay = messageToAdd.isUser ? 800 : 1500;
        setTimeout(addNextMessage, delay);
      }
    };
    
    // Start the demo conversation after a brief delay
    setTimeout(addNextMessage, 1000);
  };
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  
  // Reset conversation
  const resetConversation = () => {
    setMessages(initialMessages);
    setIsDemo(false);
  };
  
  return (
    <PageContainer>
      
      <ChatContainer>
        <ChatHeader>
          <AgentInfo>
            <AgentIcon>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
              </svg>
            </AgentIcon>
            <AgentName>AI Agent</AgentName>
          </AgentInfo>
          <ResetButton onClick={resetConversation}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="currentColor"/>
            </svg>
            Reset
          </ResetButton>
        </ChatHeader>
        
        <MessagesContainer>
          {messages.map((message) => (
            <MessageGroup key={message.id}>
              <MessageAvatar isUser={message.isUser}>
                {message.isUser ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.67 8.17L12 6.83L15.17 10L12 13.17L10.67 11.83L12.33 10L10.67 8.17ZM5 15H19V19H5V15ZM19 13.83H5V5H19V13.83Z" fill="currentColor"/>
                  </svg>
                )}
              </MessageAvatar>
              <MessageContent>
                {message.highlighted ? (
                  <HighlightedMessageBubble isUser={message.isUser}>
                    {message.content}
                  </HighlightedMessageBubble>
                ) : (
                  <MessageBubble isUser={message.isUser}>
                    {message.content}
                  </MessageBubble>
                )}
                {message.completion && (
                  <CompletionIndicator>{message.completion}%</CompletionIndicator>
                )}
              </MessageContent>
            </MessageGroup>
          ))}
          <div ref={messagesEndRef} />
        </MessagesContainer>
        
        <InputContainer>
          <MessageInput
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <SendButton onClick={sendMessage} disabled={!inputValue.trim()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
            </svg>
          </SendButton>
        </InputContainer>
      </ChatContainer>
      
      <QuickLinks>
        <QuickLinksTitle>Quick Links</QuickLinksTitle>
        <LinksContainer>
          <LinkButton>New Campaign</LinkButton>
          <LinkButton>Create Promoter</LinkButton>
          <LinkButton>Follow Up</LinkButton>
          <LinkButton>View Performance</LinkButton>
        </LinksContainer>
      </QuickLinks>
    </PageContainer>
  );
};

export default AIAgent; 