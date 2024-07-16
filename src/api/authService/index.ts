import { AxiosResponse } from 'axios';
import { api } from '../api';
import { AuthResponse } from '../../types';

export class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await api.post('/login', { email, password });
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await api.post('/registration', { email, password });
  }

  static async logout(): Promise<void> {
    return await api.post('/logout');
  }

  static async refresh(): Promise<AxiosResponse<AuthResponse>> {
    return await api.get('/refresh', {
      withCredentials: true,
    });
  }
}
