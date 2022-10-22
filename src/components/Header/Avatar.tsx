import React from 'react';

type Props = {
  image: string;
};

const Avatar = ({ image }: Props) => {
  return (
    <img
      src={image}
      alt='user-avatar'
      className='h-9 w-9 rounded-full border'
    />
  );
};

export default Avatar;
