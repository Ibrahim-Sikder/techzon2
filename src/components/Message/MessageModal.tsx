/* eslint-disable no-unused-vars */
"use client";

import logo from "../../assets/icon/chat.png";
import Image from "next/image";
import { VscClose } from "react-icons/vsc";
import { Box, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { getCookie } from "@/helpers/axios/Cookies";
import { decodedToken } from "@/utils/decodedToken";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

type TProps = {
  close: () => void;
};

const MessageModal = ({ close }: TProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Store all messages

  const token = getCookie("token");
  const decodedData = token ? decodedToken(token) : null;
  
  // Hardcoded admin ID (could also be fetched from the backend)
  const adminId = "ADMIN_USER_ID";

  // Function to fetch messages between the user and the admin
  const fetchMessages = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/message/chat/${adminId}`, // Fetch messages by chatId with admin
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
  
      setMessages(data?.data || []);
    } catch (error: any) {
      toast.error("Failed to fetch messages");
      console.error("Failed to fetch messages", error);
    }
  };

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/message", // The message sending endpoint
        { content: message, chatId: adminId }, // Send to admin chatId
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in headers
            "Content-Type": "application/json",
          },
        }
      );
    
      toast.success(data?.message);
      setMessage(""); // Reset message input after successful send
      fetchMessages(); // Fetch updated messages after sending
    } catch (error: any) {
      toast.error("Failed to send message");
      console.error("Failed to send message", error);
    }
  };

  const iconStyle = {
    fontSize: "28px",
    background: "#2251CF",
    color: "#fff",
    padding: "5px",
    borderRadius: "8px",
  };

  return (
    <div className="w-[300px] md:w-[360px] md:h-[600px] h-[400px] bg-white fixed right-0 md:right-1 bottom-14 rounded-2xl text-black shadow-xl z-[9999999999999999] overflow-hidden shadowStyle">
      <div className="flex flex-col justify-between h-full">
        <div className="bg-[#2251CF] w-full h-[120px] text-white flex justify-center items-center ">
          <VscClose
            className="transition ease-in-out delay-75 cursor-pointer absolute right-4 top-4"
            onClick={close}
            size={30}
          />
          <div className="flex items-center">
            <div>
              <div className="flex flex-col text-center justify-center items-center">
                <Image
                  src={logo}
                  width={30}
                  className="rounded-full"
                  alt="logo"
                  height={100}
                />
                Ibrahim Sikder
              </div>
            </div>
          </div>
        </div>

        {/* Displaying messages */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "scroll",
            p: 1,
            backgroundColor: "#fafafa",
          }}
        >
          {messages.map((msg: any, index) => (
            <div key={index} className="message">
              <span>{msg.sender._id === decodedData.auth ? "You" : "Admin"}:</span>
              <span>{msg.content}</span>
            </div>
          ))}
        </Box>

        <div className="w-full h-24 bg-white flex pl-3 items-center border-t-[#ddd] border-[2px]">
          <form onSubmit={sendMessage} className="flex flex-col items-start">
            <div className="flex items-center justify-between w-[300px] md:w-[330px]">
              <input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-[100%] bg-transparent h-10 placeholder:text-[14px]"
              />
              <Button type="submit">
                <Send sx={iconStyle} />
              </Button>
            </div>
            <div className="pb-2 flex space-x-2 items-center text-[#707584]">
              <input
                type="file"
                id="file"
                onChange={(e) => {
                  const file =
                    (e.target as HTMLInputElement).files?.[0] || null;
                  // Handle file upload logic here
                }}
                style={{ display: "none" }}
              />
              <GraphicEqIcon className=" chatIcon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
