import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setLoggedOutUser } from '../../redux/userSlice';

type Props = {
  email: string;
  name: string | undefined;
};

const Dropdown = ({ email, name }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(setLoggedOutUser());
    navigate('/signin', { replace: true });
    navigate(0);
    const token = localStorage.getItem('userToken');
    if (token) localStorage.removeItem('userToken');
  };
  return (
    <div className='absolute bg-[#f9f9f9] top-10 right-1 text-sm w-[120px] rounded-sm p-1 px-2 space-y-1 shadow-md'>
      {name ? (
        <p className='text-xs dropdown_effect'>
          Logged in as <span className='text-sm font-semibold'>{name}</span>
        </p>
      ) : (
        <p className='dropdown_effect'>{email}</p>
      )}
      <p className='dropdown_effect'>Not you?</p>
      <p className='dropdown_effect' onClick={logoutHandler}>
        Logout
      </p>
    </div>
  );
};

export default Dropdown;
