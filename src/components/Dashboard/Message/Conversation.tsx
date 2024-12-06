import React, { useEffect, useState, useRef } from "react";
import { useSocket } from "@/hooks/useSocket";
import { useGetAllMessagesQuery } from "@/redux/api/messageApi";
import { getCookie } from "@/helpers/axios/Cookies";
import { decodedToken } from "@/utils/decodedToken";

export type TMessage = {
  createdAt: string;
  message: string;
  senderId: string;
  receiverId: string;
};

const Conversation = ({ user }: { user: { _id: string; name: string; image: string } }) => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const token = getCookie("token");
  const decoded = token ? decodedToken(token) : null;
  const senderId = decoded?.id;

  const { data: fetchedMessages } = useGetAllMessagesQuery({ senderId, chatUserId: user._id });

  // Load messages from the server on component load
  useEffect(() => {
    if (fetchedMessages?.data) {
      setMessages(fetchedMessages.data);
    }
  }, [fetchedMessages]);

  // Handle new messages received in real-time
  useEffect(() => {
    socket?.on("messageReceived", (newMessage: TMessage) => {
      if (
        (newMessage.senderId === user._id && newMessage.receiverId === senderId) ||
        (newMessage.senderId === senderId && newMessage.receiverId === user._id)
      ) {
        setMessages((prev) => [...prev, newMessage]);
      }
    });

    return () => {
      socket?.off("messageReceived");
    };
  }, [socket, user._id, senderId]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      senderId,
      receiverId: user._id,
      message,
      createdAt: new Date().toISOString(),
    };

    socket?.emit("newMessage", newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="conversation">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.senderId === senderId ? "sent" : "received"}`}>
            <p>{msg.message}</p>
            <span>{new Date(msg.createdAt).toLocaleString()}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <>
        <div className="messageInput">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </>
    </div>
  );
};

export default Conversation;
