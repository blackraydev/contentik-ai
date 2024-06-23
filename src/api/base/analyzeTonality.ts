import { API_URL } from '../../consts';
import '../../polyfills/readableStream';

type AnalyzeTonalityParams = {
  text: string;
};

export const analyzeTonality = async ({ text }: AnalyzeTonalityParams) => {
  const response = await fetch(`${API_URL}/analyzeTonality`, {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.body;
};
