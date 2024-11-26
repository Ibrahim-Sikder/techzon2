// hooks/useSocket.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getCookie } from '@/helpers/axios/Cookies';
import { decodedToken } from '@/utils/decodedToken';

const SOCKET_URL = 'http://localhost:5000'; // Your backend URL

interface CustomJwtPayload {
  id: string;
}

export const useSocket = () => {
  const token = getCookie('token');
  const decoded = token ? (decodedToken(token) as CustomJwtPayload) : null;
  const { id } = decoded || {};

  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const socketIo = io(SOCKET_URL, {
        query: { userId: id },
        transports: ['websocket'],
      });

      socketIo.on('connect', () => {
        console.log('Socket connected:', socketIo.id);
      });

      socketIo.on('getOnlineUsers', (users: string[]) => {
        console.log('Online users:', users);
      });

      socketIo.on('new message', (messageData) => {
        console.log('Message received:', messageData);
      });

      setSocket(socketIo);

      return () => {
        socketIo.disconnect();
      };
    }
  }, [id]);

  return { socket };
};
