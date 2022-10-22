import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  hideSignBtn: boolean;
};

const SignNav = ({ hideSignBtn }: Props) => {
  return (
    <div className='flex items-center space-x-3 text-sm font-semibold'>
      <Link to='/signin'>
        <h1
          className={`px-2 py-0.5 hover:bg-black hover:text-white rounded-sm transition-all duration-200 cursor-pointer ${
            hideSignBtn && 'hidden'
          }`}
        >
          SignIn
        </h1>
      </Link>
      <Link to='/signup'>
        <h1
          className={`px-2 py-0.5 bg-black text-white rounded-sm hover:bg-white hover:text-black transition-all duration-200 cursor-pointer hover:outline ${
            hideSignBtn && 'hidden'
          }`}
        >
          SignUp
        </h1>
      </Link>
    </div>
  );
};

export default SignNav;
