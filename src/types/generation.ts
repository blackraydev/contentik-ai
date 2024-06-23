export type Generation = {
  id: string;
  userId: string;
  mode: 'create' | 'edit';
  topic: string;
  description: string;
  keywords: string;
  style: string;
  tone: string;
  language: string;
  createdAt: string;
  content: string;
};
