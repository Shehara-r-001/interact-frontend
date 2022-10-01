import React from 'react';
import Craft from '../assets/images/craft.png';

const LandingPage = () => {
  return (
    <div className='scrollbar-hide h-screen overflow-y-scroll'>
      <img
        src={Craft}
        alt=''
        className='mt-10 object-cover w-full md:fixed md:top-[60px] md:right-0 md:w-[40vw]'
      />
      <div className='px-4 py-5 md:fixed md:top-[30vh] lg:pl-10'>
        <h1 className='font-bold text-4xl md:text-6xl'>INTERACT</h1>
        <p className='font-semibold text-lg md:text-2xl'>
          Let us be the voice for your brand..
        </p>
      </div>
      <div className='px-4 lg:pl-10 py-3 md:fixed md:top-[60vh] md:w-[50vw]'>
        <h1 className='text-center md:text-left'>
          “Quit counting fans, followers, and blog subscribers like bottle caps.
          Think instead about what you’re hoping to achieve with and through the
          community that actually cares about what you’re doing.”
        </h1>
        <h1 className='font-semibold text-center md:text-left'>
          - Amber Naslund
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
