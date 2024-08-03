import axios, { AxiosResponse } from 'axios';
import { api } from '../api';
import { AuthResponse } from '../../types';
import { API_URL } from '../../consts';

export class AuthService {
  static async login(
    email: string,
    password: string,
    deviceId: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return await api.post('/login', { email, password, deviceId });
  }

  static async registration(
    email: string,
    password: string,
    deviceId: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return await api.post('/registration', { email, password, deviceId });
  }

  static async logout(): Promise<void> {
    return await api.post('/logout');
  }

  static async refresh(): Promise<AxiosResponse<AuthResponse>> {
    return await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    });
  }

  static async changePassword(password: string): Promise<void> {
    return await api.post('/changePassword', { password });
  }

  static async resendActivationLink(email: string): Promise<void> {
    return await api.post('/resendActivationLink', { email });
  }

  static async sendResetLink(email: string): Promise<void> {
    return await api.post('/sendResetLink', { email });
  }

  static async resetPassword(resetToken: string, password: string): Promise<void> {
    return await api.post('/resetPassword', { resetToken, password });
  }

  static async loginVK(
    code: string,
    state: string,
    deviceId: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return await api.post('/loginVK', { code, state, deviceId });
  }

  static async refreshVK(): Promise<AxiosResponse<AuthResponse>> {
    return await axios.get(`${API_URL}/refreshVK`, {
      withCredentials: true,
    });
  }

  static async logoutVK(): Promise<void> {
    return await api.post('/logoutVK');
  }

  static async loginYandex(code: string, deviceId: string): Promise<AxiosResponse<AuthResponse>> {
    return await api.post('/loginYandex', { code, deviceId });
  }

  static async refreshYandex(): Promise<AxiosResponse<AuthResponse>> {
    return await axios.get(`${API_URL}/refreshYandex`, {
      withCredentials: true,
    });
  }

  static async logoutYandex(): Promise<void> {
    return await api.post('/logoutYandex');
  }
}
