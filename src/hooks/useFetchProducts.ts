import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchProducts = () => {
  return useQuery(
    ['fetchProducts'],
    () => {
      return axios.get('http://localhost:3333/api/products/all');
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  );
};
