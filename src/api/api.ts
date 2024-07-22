import axios from 'axios';
import { API_URL } from '../consts';
import { AuthResponse } from '../types';

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      try {
        const token = localStorage.getItem('token');
        const isVKToken = token?.slice(0, 2) === 'vk';
        const isYandexToken = token?.slice(0, 1) === 'y';

        const getQueryPostfix = () => {
          if (isVKToken) {
            return 'refreshVK';
          }
          if (isYandexToken) {
            return 'refreshYandex';
          }

          return 'refresh';
        };

        const response = await axios.get<AuthResponse>(`${API_URL}/${getQueryPostfix()}`, {
          withCredentials: true,
        });

        localStorage.setItem('token', response.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

        return axios(originalRequest);
      } catch (e) {
        console.error(e);
      }
    }

    throw error;
  },
);
