import { AxiosResponse } from 'axios';
import { api } from '../api';
import { Generation } from '../../types';
import { API_URL } from '../../consts';

export class ContentService {
  static async generateContent(props: {
    userId: string;
    mode: 'create' | 'edit';
    text: string;
    topic: string;
    contentType: string;
    targetAudience: string;
    description: string;
    keywords: string;
    style: string;
    tone: string;
    language: string;
  }) {
    const pureProps = Object.entries(props).reduce((acc, [key, value]) => {
      if (value) {
        return {
          ...acc,
          [key]: value,
        };
      }

      return acc;
    }, {});

    const response = await fetch(`${API_URL}/generateContent`, {
      method: 'POST',
      body: JSON.stringify({ ...pureProps }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      credentials: 'include',
      mode: 'cors',
    });

    if (!response.ok) {
      if (response.status !== 402) {
        throw response;
      }

      const { message } = await response.json();

      throw {
        status: 402,
        message,
      };
    }

    return response.body;
  }

  static async getContents(): Promise<AxiosResponse<Generation[]>> {
    return await api.post('/getContents');
  }

  static async deleteContent(props: { id: string }): Promise<AxiosResponse> {
    return await api.post('/deleteContent', props);
  }
}
