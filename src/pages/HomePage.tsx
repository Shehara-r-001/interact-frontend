import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
  const token: string | null = localStorage.getItem('userToken');

  axios.defaults.headers.common['auth_token'] = `Bearer ${token}`;

  const { data, isLoading, isError } = useQuery(
    ['verifiedUser'],
    async () =>
      await axios
        .get('http://localhost:3333/api/user/verify')
        .then((res) => res.data)
  );

  return (
    <div className='mt-[100px]'>
      {isLoading ? 'Loading' : isError ? 'error' : data.user.email}
    </div>
  );
};

export default HomePage;
