import React, { useEffect, useState } from 'react';
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
  const token = getCookie('token');
  const decoded = token ? decodedToken(token) as CustomJwtPayload : null;
  const senderId = decoded?.id;
  const chatUserId = user._id;
  const { data, isLoading } = useGetAllMessagesQuery({ senderId, chatUserId });
  const {socket, onlineUsers} = useSocket();


  const [messages, setMessages] = useState<TMessage[]>(data?.data || []);

  // useEffect(() => {
  //   if (socket) {
  //     socket.emit('setup', { _id: senderId });
  //     socket.on('message received', (newMessage: TMessage) => {
  //       setMessages((prevMessages) => [...prevMessages, newMessage]);
  //     });
  //   }
  //   return () => {
  //     if (socket) {
  //       socket.off('message received');
  //     }
  //   };
  // }, [socket, senderId]);

  useEffect(() => {
    setMessages(data?.data || []);
  }, [data]);

  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (!data && !isLoading) {
    return <p>No messages available.</p>;
  }

  return (
    <div className="messageContainer">
      {messages.map((message, index) => (
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
