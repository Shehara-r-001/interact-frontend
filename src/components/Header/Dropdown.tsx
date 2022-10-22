import React from 'react';

type Props = {
  email: string;
  name: string | undefined;
};

const Dropdown = ({ email, name }: Props) => {
  return (
    <div className='absolute bg-[#f9f9f9] top-10 right-1 text-sm w-[120px] rounded-sm p-1 px-2 space-y-1 shadow-sm'>
      {name ? (
        <p className='text-xs'>
          Logged in as <span className='text-sm font-semibold'>{name}</span>
        </p>
      ) : (
        <p>{email}</p>
      )}
      <p>Not you?</p>
      <p>Logout</p>
    </div>
  );
};

export default Dropdown;
