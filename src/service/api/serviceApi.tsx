// api.ts
import axios, { AxiosResponse } from 'axios';

export interface Message {
  _id: string;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
}

const instance = axios.create({
  baseURL: 'YOUR_BACKEND_API_URL', // Replace with your actual backend API URL
});

export const sendMessage = async (message: Message): Promise<AxiosResponse<Message>> => {
  return instance.post<Message>('/messages', message);
};

export const getMessages = async (userId: string): Promise<AxiosResponse<Message[]>> => {
  return instance.get<Message[]>(`/messages/${userId}`);
};
