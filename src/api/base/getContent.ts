import { API_URL } from '../../consts';
import '../../polyfills/readableStream';

type GetContentParams = {
  userId: string;
  mode: 'create' | 'edit';
  text: string;
  topic: string;
  description: string;
  keywords: string;
  style: string;
  tone: string;
  language: string;
};

export const getContent = async (props: GetContentParams) => {
  const response = await fetch(`${API_URL}/getContent`, {
    method: 'POST',
    body: JSON.stringify({ ...props }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.body;
};
