import { API_URL } from '../../consts';
import '../../polyfills/readableStream';

type AnalyzeOptimizationParams = {
  text: string;
};

export const analyzeOptimization = async ({ text }: AnalyzeOptimizationParams) => {
  const response = await fetch(`${API_URL}/analyzeOptimization`, {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.body;
};
