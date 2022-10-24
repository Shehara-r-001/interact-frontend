import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-[100px]'>
      {/* {isLoading ? 'Loading' : isError ? 'error' : data?.data.user.email} */}
    </div>
  );
};

export default HomePage;
