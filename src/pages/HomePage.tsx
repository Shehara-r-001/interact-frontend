import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useVerifyUser } from '../hooks/useVerifyUser';

const HomePage = () => {
  const verifiedUser = useVerifyUser();

  const { data, isLoading, isError } = verifiedUser;
  console.log(data?.data.user);

  return (
    <div className='mt-[100px]'>
      {isLoading ? 'Loading' : isError ? 'error' : data?.data.user.email}
    </div>
  );
};

export default HomePage;
