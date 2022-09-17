import React from 'react';
import Bg from '../assets/images/bg01.png';

const LandingPage = () => {
  return (
    <div className='scrollbar-hide h-screen overflow-y-scroll'>
      <img src={Bg} alt='' className='mt-10 w-[100vw] object-cover' />
      <div className='px-4 py-5'>
        <h1 className='font-bold text-4xl'>INTERACT</h1>
        <p className='font-semibold text-lg'>
          The place you have been looking for..
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
