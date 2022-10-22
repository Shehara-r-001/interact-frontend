import React from 'react';
import { useFetchUser } from '../../hooks/useFetchUser';
import SpinnerW from '../Loaders/SpinnerW';
import Avatar from './Avatar';

type Props = {
  email: string;
};

const placeholder =
  'https://www.schaumburgbanquet.com/img/UserImg/defaultuser.png';

const Notification = ({ email }: Props) => {
  const userData = useFetchUser(email);

  const { data, isLoading, isError } = userData;

  if (isLoading) return <SpinnerW />;

  if (isError)
    return (
      <h1 className='text-sm text-red-500 font-semibold'>
        Unauthorized User..!
      </h1>
    );

  const { image, name } = data.data.user;

  return (
    <div>
      {image ? <Avatar image={image} /> : <Avatar image={placeholder} />}
    </div>
  );
};

export default Notification;
