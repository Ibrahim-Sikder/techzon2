import React from 'react';
import Image from 'next/image';
import profile from "../../../assets/chat/avatar.jpg";
import { useGetAllMessagesQuery } from '@/redux/api/messageApi';
import { getCookie } from '@/helpers/axios/Cookies';
import { decodedToken } from '@/utils/decodedToken';
import { TUser } from './AllMessageList';
import './Message.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json'; // Import locale

import { JwtPayload } from 'jsonwebtoken'; 


TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

interface ConversationProps {
  user: TUser;
}

interface CustomJwtPayload extends JwtPayload {
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
  const token = getCookie('token');
  const decoded = token ? decodedToken(token) as CustomJwtPayload : null;
  
  const senderId = decoded?.id; 
  const chatUserId = user._id;

  const { data, isLoading } = useGetAllMessagesQuery({ senderId, chatUserId });

  if (isLoading) {
    return <p>Loading.......</p>;
  }

  return (
    <div className="messageContainer">
      {data?.data?.map((message: TMessage, index: number) => (
        <div key={index} className={`messageWrapper ${message.senderId === senderId ? 'sentMessage' : 'receivedMessage'}`}>
          {message.senderId === senderId ? (
            <div className="message sent">
              <div className="messageContent">
                <span>{message.message}</span>
                <Image
                  src={user.image || profile}
                  className="profileImage"
                  alt="User profile"
                />
              </div>
              <div className="timestamp">
                {timeAgo.format(new Date(message.createdAt))}
              </div>
            </div>
          ) : (
            <div className="message received">
              <Image
                src={user.image || profile}
                className="profileImage"
                alt="Admin profile"
              />
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
