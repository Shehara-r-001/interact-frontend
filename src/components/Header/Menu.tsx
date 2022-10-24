import React from 'react';
import { FiBell } from 'react-icons/fi';
import { GiArrowDunk } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';

type Props = {
  menuState: boolean;
};

const Menu = ({ menuState }: Props) => {
  return (
    <div
      className={`absolute top-8 md:top-6 right-1 shadow-md w-[160px] text-sm p-1 py-2 -translate-y-[300px] transition-all duration-200 z-20 rounded-md bg-[#f9f9f9] space-y-2  ${
        menuState && 'translate-y-0'
      }`}
    >
      <div className='flex items-center space-x-2 dropdown_effect'>
        <AiOutlineHome className='h-4 w-4' />
        <p className=''>Home</p>
      </div>
      <div className='flex items-center space-x-2 dropdown_effect'>
        <FiBell className='h-4 w-4 ' />
        <p className=''>Notifications</p>
      </div>
      <div className='flex items-center space-x-2 dropdown_effect'>
        <GiArrowDunk className='h-4 w-4' />
        <p className=''>Earnings</p>
      </div>
      <div className='flex items-center space-x-2 dropdown_effect '>
        <CgProfile className='h-4 w-4 md:h-6 md:w-6' />
        <p className=''>Profile</p>
      </div>
    </div>
  );
};

export default Menu;
