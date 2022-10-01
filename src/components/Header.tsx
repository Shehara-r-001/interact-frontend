import React from 'react';
import Logo from '../assets/images/interact_logo.jpg';

const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white flex items-center justify-between px-5 py-2 z-50`}
    >
      <img src={Logo} alt='interact-logo' className='w-[150px] h-[50px]' />
      <div className='flex items-center space-x-3 text-sm font-semibold'>
        <h1 className='px-2 py-0.5 hover:bg-black hover:text-white rounded-sm transition-all duration-200 cursor-pointer'>
          SignIn
        </h1>
        <h1 className='px-2 py-0.5 bg-black text-white rounded-sm hover:bg-white hover:text-black transition-all duration-200 cursor-pointer hover:outline'>
          SignUp
        </h1>
      </div>
    </div>
  );
};

export default Header;
