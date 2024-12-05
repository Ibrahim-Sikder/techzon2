import React, { useState, useEffect, useRef } from 'react';
import { useSocket } from '@/hooks/useSocket';
import { useSendMessagesMutation, useGetAllMessagesQuery } from '@/redux/api/messageApi';
import { getCookie } from '@/helpers/axios/Cookies';
import { decodedToken } from '@/utils/decodedToken';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import './Message.css'
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export type TMessage = {
  createdAt: string;
  message: string;
  _id: string;
  senderId: string;
  receiverId: string;
};

const Conversation = ({ user }: { user: { _id: string; name: string; image: string } }) => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const token = getCookie('token');
  const decoded = token ? decodedToken(token) : null;
  const senderId = decoded?.id;

  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { data, isLoading } = useGetAllMessagesQuery({ senderId, chatUserId: user._id });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Initialize messages
  useEffect(() => {
    if (data?.data) {
      setMessages(data.data);
    }
  }, [data]);

  // Listen for real-time messages
  useEffect(() => {
    socket?.on('message received', (newMessage: TMessage) => {
      if (newMessage.senderId === user._id || newMessage.receiverId === user._id) {
        setMessages((prev) => [...prev, newMessage]);
      }
    });

    return () => {
      socket?.off('message received');
    };
  }, [socket, user._id]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    try {
      const newMessage = {
        senderId,
        receiverId: user._id,
        message,
        createdAt: new Date().toISOString(),
      };

      socket?.emit('new message', newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  // Scroll when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="conversation">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.senderId === senderId ? 'sent' : 'received'}`}>
            <p>{msg.message}</p>
            <span>{timeAgo.format(new Date(msg.createdAt))}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="messageInput">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Conversation;
