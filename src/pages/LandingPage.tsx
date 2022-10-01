import React from 'react';
import Craft from '../assets/images/craft.png';
import { BsArrowRightShort } from 'react-icons/bs';

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
        <p className='font-semibold text-lg md:text-2xl md:text-[#00a3cc]'>
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
        <button className='font-bold text-lg bg-[#ff4d88] hover:bg-[#ff3377] text-white p-0.5 w-[160px] mt-5 mb-5 ml-[calc(50vw-80px)] md:ml-0 rounded-sm flex items-center justify-center group transition-all duration-200'>
          Take a tour
          <BsArrowRightShort className='h-6 w-6 group-hover:translate-x-3 duration-200' />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
