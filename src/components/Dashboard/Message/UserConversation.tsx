import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import profile from '../../../assets/chat/avatar.jpg';
import { useGetAllMessagesQuery } from '@/redux/api/messageApi';
import { getCookie } from '@/helpers/axios/Cookies';
import { decodedToken } from '@/utils/decodedToken';
import { TUser } from './AllMessageList';
import './Message.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { useSocket } from '@/hooks/useSocket';
import { io } from 'socket.io-client';


const ENDPOINT = "http://localhost:4000";
var socket, selectedChatCompare;

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

interface ConversationProps {
  user: TUser;
}

interface CustomJwtPayload {
  id: string;
}

export type TMessage = {
  createdAt: string;
  message: string;
  _id: string;
  image: string;
  senderId: string;
};

const UserConversation = ({ user }: ConversationProps) => {
  const { socket } = useSocket();
  const token = getCookie('token');
  const decoded = token ? (decodedToken(token) as CustomJwtPayload) : null;
  const senderId = decoded?.id;

  const [messages, setMessages] = useState<TMessage[]>([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const { data, isLoading, error } = useGetAllMessagesQuery({ 
    senderId, 
    chatUserId: user._id 
  });

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Initial message load
  useEffect(() => {
    if (data?.data) {
      setMessages(Array.isArray(data.data) ? data.data : []);
    }
  }, [data]);

  // Real-time message listener
  useEffect(() => {
    socket?.on('message received', (newMessage: TMessage) => {
      if (newMessage.senderId === user._id || newMessage.senderId === senderId) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });

    return () => {
      socket?.off('message received');
    };
  }, [socket, user._id, senderId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (isLoading) return <div>Loading messages...</div>;
  if (error) return <div>Error loading messages</div>;
  return (
    <div className="messageContainer">
      {messages?.map((message, index) => (
        <div key={index} className={`messageWrapper ${message.senderId === senderId ? 'sentMessage' : 'receivedMessage'}`}>
          {message.senderId === senderId ? (
            <div className="message sent">
              <div className="messageContent">
                <span>{message.message}</span>
                <Image src={user.image || profile} className="profileImage" alt="User profile" />
              </div>
              <div className="timestamp">
                {timeAgo.format(new Date(message.createdAt))}
              </div>
            </div>
          ) : (
            <div className="message received">
              <Image src={user.image || profile} className="profileImage" alt="Admin profile" />
              <div className="messageContent">
                <span>{message.message}</span>
              </div>
              <div className="timestamp">
                {timeAgo.format(new Date(message.createdAt))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default UserConversation;
