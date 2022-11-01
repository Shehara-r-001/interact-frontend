import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/images/interact_logo.jpg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useVerifyUser } from '../../hooks/useVerifyUser';
import { setLoggedInUser, setLoggedOutUser } from '../../redux/userSlice';
import Notification from './Notification';
import SignNav from '../SignNav';
import SpinnerW from '../Loaders/SpinnerW';

const Header = () => {
  const [hideSignBtn, setHideSignBtn] = useState<boolean>(false);
  const signUrl = useLocation().pathname.split('/')[1];

  const verifiedUser = useVerifyUser();
  const dispatch = useAppDispatch();

  const userState = useAppSelector(({ user }) => user.value.email);
  console.log(userState);

  const { data, isLoading, isError } = verifiedUser;

  // ! need a refresh?
  // ! okay to use reactQuery here?
  // * execute after mounting the header, thats why this happens
  useEffect(() => {
    if (data)
      dispatch(
        setLoggedInUser({
          email: data.data.user.email,
          role: data.data.user.role,
        })
      );

    if (isError) dispatch(setLoggedOutUser());
  }, [data, isError, dispatch]);

  useEffect(() => {
    if (signUrl === 'signin' || signUrl === 'signup') setHideSignBtn(true);
    else setHideSignBtn(false);
  }, [signUrl]);

  return (
    <div
      className={`fixed shadow-sm top-0 left-0 right-0 bg-white flex items-center justify-between px-5 py-2 z-50`}
    >
      <img src={Logo} alt='interact-logo' className='w-[150px] h-[50px]' />
      {data && userState ? (
        <Notification email={userState} />
      ) : !isLoading && !userState ? (
        <SignNav hideSignBtn={hideSignBtn} />
      ) : (
        <SpinnerW />
      )}
    </div>
  );
};

export default Header;
