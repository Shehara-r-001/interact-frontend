import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useVerifyUser = () => {
  const token: string | null = localStorage.getItem('userToken');

  if (token) axios.defaults.headers.common['auth_token'] = `Bearer ${token}`;

  return useQuery(
    ['verifiedUser'],
    () => {
      return axios.get('http://localhost:3333/api/user/verify');
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  );
};
