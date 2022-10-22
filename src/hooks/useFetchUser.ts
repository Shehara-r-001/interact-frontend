import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchUser = (email: string) => {
  return useQuery(
    ['userByEmail'],
    () => {
      return axios.get(`http://localhost:3333/api/user/getUser/${email}`);
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
    }
  );
};
