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
  photos: File[];
};

export const getContent = async (props: GetContentParams) => {
  const formData = new FormData();

  Object.entries(props).forEach(([key, value]) => {
    if (value && typeof value !== 'object') {
      formData.append(key, value);
    }
  });

  if (props.photos.length) {
    props.photos.forEach((photo) => {
      formData.append('photos', photo);
    });
  }

  const response = await fetch(`${API_URL}/getContent`, {
    method: 'POST',
    body: formData,
  });

  return response.body;
};
