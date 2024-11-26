import React, { useState, useEffect } from 'react';
import { HiDotsVertical, HiOutlineEmojiSad, HiOutlinePhone, HiOutlinePhotograph, HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdLink } from 'react-icons/io';
import { LuSendHorizonal } from 'react-icons/lu';
import Image from 'next/image';
import chat from '../../../assets/chat/avatar.jpg';
import UserConversation from './UserConversation';
import { getCookie, setCookie } from '@/helpers/axios/Cookies'; // Ensure setCookie is imported
import { decodedToken } from '@/utils/decodedToken';
import { useSendMessagesMutation } from '@/redux/api/messageApi';
import { TUser } from './AllMessageList';
import { useSocket } from '@/hooks/useSocket';


const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;
interface CustomJwtPayload {
  id: string;
}

interface ConversationProps {
  user: TUser;
}

const Conversation = ({ user }: ConversationProps) => {
const [sendMessages] = useSendMessagesMutation();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const token = getCookie('token');
  const decoded = token ? (decodedToken(token) as CustomJwtPayload) : null;
  const senderId = decoded?.id;

  const { socket } = useSocket();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!message.trim()) {
        console.log('Message cannot be empty');
        setLoading(false);
        return;
      }

      await sendMessages({ id: user._id, body: { message } }).unwrap();

      socket?.emit('new message', {
        senderId,
        receiverId: user._id,
        message,
        createdAt: new Date().toISOString(),
      });


      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-wrap gap-5 items-center justify-between p-8">
        <div className="flex items-center">
          <div className="relative">
            <Image className="w-10 lg:w-20" src={chat} alt="chat" />
            <div className="activeUser absolute w-3 h-3 bg-green-500 rounded-full md:bottom-6 bottom-0 left-5 md:left-16"></div>
          </div>
          <div className="ml-3">
            <h3 className="text-sm md:text-xl font-semibold">{user.name}</h3>
            <span className="text-[#0EC144] text-sm">Online</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <HiOutlineVideoCamera size={25} />
          <HiOutlinePhone size={25} />
          <HiDotsVertical size={25} />
        </div>
      </div>
      <hr className="border " />
      <div className="chatWraps">
        <UserConversation user={user} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="chatting">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex items-center space-x-2">
              <HiOutlineEmojiSad className="md:size-8" />
              <IoMdLink className="md:size-8" />
              <HiOutlinePhotograph className="md:size-8" />
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Typing here......"
                className="chatInput"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="chatBtn" disabled={loading}>
                {loading ? 'Sending...' : <LuSendHorizonal className="md:size-8" />}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Conversation;
