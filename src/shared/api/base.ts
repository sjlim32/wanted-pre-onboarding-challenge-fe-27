import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

baseAPI.interceptors.response.use(
  (response) => {
    console.log(
      '%c[SUCCESS]%c %s',
      'color: #4CAF50; font-weight: bold;',
      'color: inherit;',
      `URL: ${response.config.url}`,
      response.data
    );
    return response;
  },
  (error) => {
    console.log(
      '%c[ERROR]%c %s',
      'color: #f44336; font-weight: bold;',
      'color: inherit;',
      `URL: ${error.config.url}`,
      error.response
    );
    return Promise.reject(error);
  }
);
