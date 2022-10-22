import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/interact_logo.jpg';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useVerifyUser } from '../hooks/useVerifyUser';
import { setLoggedInUser } from '../redux/userSlice';
import Notification from './Notification';
import SignNav from './SignNav';

const Header = () => {
  const [hideSignBtn, setHideSignBtn] = useState<boolean>(false);
  const signUrl = useLocation().pathname.split('/')[1];

  const verifiedUser = useVerifyUser();
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = verifiedUser;

  useEffect(() => {
    if (data)
      dispatch(
        setLoggedInUser({
          email: data.data.user.email,
          role: data.data.user.role,
        })
      );
  }, [verifiedUser]);

  const userState = useAppSelector(({ user }) => user.value.email);
  // console.log(userState);

  useEffect(() => {
    if (signUrl === 'signin' || signUrl === 'signup') setHideSignBtn(true);
    else setHideSignBtn(false);
  }, [signUrl]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white flex items-center justify-between px-5 py-2 z-50`}
    >
      <img src={Logo} alt='interact-logo' className='w-[150px] h-[50px]' />
      {userState ? <Notification /> : <SignNav hideSignBtn={hideSignBtn} />}
    </div>
  );
};

export default Header;
