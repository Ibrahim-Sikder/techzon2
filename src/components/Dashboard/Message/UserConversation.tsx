// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import profile from '../../../assets/chat/avatar.jpg';
// import { useGetAllMessagesQuery } from '@/redux/api/messageApi';
// import { getCookie } from '@/helpers/axios/Cookies';
// import { decodedToken } from '@/utils/decodedToken';
// import { TUser } from './AllMessageList';
// import './Message.css';
// import TimeAgo from 'javascript-time-ago';
// import en from 'javascript-time-ago/locale/en.json';
// import { useSocket } from '@/hooks/useSocket';
// import { io } from 'socket.io-client';


// const ENDPOINT = "http://localhost:4000";
// var socket, selectedChatCompare;

// TimeAgo.addDefaultLocale(en);
// const timeAgo = new TimeAgo('en-US');

// interface ConversationProps {
//   user: TUser;
// }

// interface CustomJwtPayload {
//   id: string;
// }

// export type TMessage = {
//   createdAt: string;
//   message: string;
//   _id: string;
//   image: string;
//   senderId: string;
// };

// const UserConversation = ({ user }: ConversationProps) => {
//   const token = getCookie('token');
//   const decoded = token ? (decodedToken(token) as CustomJwtPayload) : null;
//   const senderId = decoded?.id;
//   const [socketConnected, setSocketConnected] = useState(false);
//   const [messages, setMessages] = useState<TMessage[]>([]);

//   // Fetch all previous messages
//   const { data, isLoading, error } = useGetAllMessagesQuery({ senderId, chatUserId: user._id });

//   useEffect(() => {
//     if (data) {
//       setMessages(Array.isArray(data?.data) ? data?.data : []);
 
//     }
//   }, [data]);



 
//   useEffect(() => {
//     socket = io(ENDPOINT);
//     socket.emit("setup", user);
//     socket.on("connected", () => setSocketConnected(true));
//   }, []);


//   useEffect(() => {
//     setMessages(data?.data)
//   }, [data]);


//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading messages</div>;
//   return (
//     <div className="messageContainer">
//       {messages?.map((message, index) => (
//         <div key={index} className={`messageWrapper ${message.senderId === senderId ? 'sentMessage' : 'receivedMessage'}`}>
//           {message.senderId === senderId ? (
//             <div className="message sent">
//               <div className="messageContent">
//                 <span>{message.message}</span>
//                 <Image src={user.image || profile} className="profileImage" alt="User profile" />
//               </div>
//               <div className="timestamp">
//                 {timeAgo.format(new Date(message.createdAt))}
//               </div>
//             </div>
//           ) : (
//             <div className="message received">
//               <Image src={user.image || profile} className="profileImage" alt="Admin profile" />
//               <div className="messageContent">
//                 <span>{message.message}</span>
//               </div>
//               <div className="timestamp">
//                 {timeAgo.format(new Date(message.createdAt))}
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };


// export default UserConversation;
import React from 'react';

const UserConversation = () => {
  return (
    <div>
      <h4>user </h4>
    </div>
  );
};

export default UserConversation;