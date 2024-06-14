import { API_URL } from '../consts';
import '../polyfills/readableStream';

type GetContentParams = {
  mode: 'create' | 'edit';
  text: string;
  topic: string;
  description: string;
  style: string;
  tone: string;
  language: string;
};

const getStringOrUndefined = (value: string) => {
  if (!value) return undefined;
  return value;
};

export const getContent = async (props: GetContentParams) => {
  const normalizedProps = Object.entries(props).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: getStringOrUndefined(value),
    }),
    {},
  );
  const response = await fetch(`${API_URL}/getContent`, {
    method: 'POST',
    body: JSON.stringify(normalizedProps),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.body;
};
