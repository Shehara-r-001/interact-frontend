import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchCategories = () => {
  return useQuery(
    ['categories'],
    () => {
      return axios.get('http://localhost:3333/api/categories/all');
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
    }
  );
};
