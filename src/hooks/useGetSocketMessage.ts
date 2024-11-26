import { useEffect, useState } from "react";
import sound from "../assets/sound/notification.mp3";
import { useSocket } from "./useSocket";

const useGetSocketMessage = () => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const handleNewMessage = (newMessage: any) => {
      const notification = new Audio(sound);
      notification.play();
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };


    socket.on("newMessage", handleNewMessage);


    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket]);

  return {
    messages,
    setMessages,
  };
};

export default useGetSocketMessage;
