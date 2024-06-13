import { API_URL } from '../consts';
import '../polyfills/readableStream';

type GetContentParams = {
  topic: string;
  description: string;
  style: string;
  tone: string;
  language: string;
};

export const getContent = async ({
  topic,
  description,
  style,
  tone,
  language,
}: GetContentParams) => {
  const response = await fetch(`${API_URL}/getContent`, {
    method: 'POST',
    body: JSON.stringify({ topic, description, style, tone, language }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.body;
};
