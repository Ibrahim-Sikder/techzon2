import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { getCookie } from '@/helpers/axios/Cookies';
import { decodedToken } from '@/utils/decodedToken';

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5000';

interface CustomJwtPayload {
  id: string;
}

export const useSocket = () => {
  const token = getCookie('token');
  const decoded = token ? (decodedToken(token) as CustomJwtPayload) : null;
  const userId = decoded?.id;

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (userId) {
      const socketIo = io(SOCKET_URL, {
        query: { userId },
        transports: ['websocket'],
        reconnection: true,
        reconnectionAttempts: 5,
      });

      socketIo.on('connect', () => {
        console.log('Connected to socket:', socketIo.id);
      });

      socketIo.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
      });

      setSocket(socketIo);

      return () => {
        socketIo.disconnect();
      };
    }
  }, [userId]);

  return { socket };
};
