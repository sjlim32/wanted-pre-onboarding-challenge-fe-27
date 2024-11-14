import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: import.meta.env.SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
