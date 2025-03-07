export type Tariff = {
  id: string;
  plan: 'trial' | 'start' | 'pro' | 'expert';
  creations: number;
  edits: number;
  startAt: string;
  endAt: string;
  hasSubscription: boolean;
  isExpired: boolean;
};
