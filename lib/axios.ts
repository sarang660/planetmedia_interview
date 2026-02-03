import axios from 'axios';

import { keysToCamelCase } from './utils';

const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    response.data = keysToCamelCase(response.data as unknown);
    return response;
  },
  (error: Error) => Promise.reject(error)
);

export default api;
