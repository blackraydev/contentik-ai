import { API_URL } from '../consts';
import '../polyfills/readableStream';

type GetContentParams = {
  title: string;
  description: string;
};

export const getContent = async ({ title, description }: GetContentParams) => {
  const response = await fetch(`${API_URL}/getContent`, {
    method: 'POST',
    body: JSON.stringify({ title, description }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.body;
};
