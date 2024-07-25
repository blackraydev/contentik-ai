import { AxiosResponse } from 'axios';
import { api } from '../api';
import { Tariff } from '../../types';

export class TariffService {
  static async getTariff(): Promise<AxiosResponse<Tariff>> {
    return await api.get('/tariff');
  }

  static async checkoutTariff(
    newPlan: Exclude<Tariff['plan'], 'trial'>,
  ): Promise<AxiosResponse<string>> {
    return await api.post('/checkoutTariff', { newPlan });
  }

  static async declineSubscription(): Promise<AxiosResponse<void>> {
    return await api.post('/declineSubscriptionTariff');
  }
}
