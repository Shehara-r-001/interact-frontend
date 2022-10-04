import React from 'react';
import { setRole } from '../redux/dropdownSlice';
import { useAppDispatch } from '../redux/hooks';

const options = ['Sell', 'Buy'];

const Dropdown = () => {
  const dispatch = useAppDispatch();
  return (
    <div className='font-light text-sm text-center w-20 bg-[#e6e6e6] rounded-sm'>
      {options.map((option, index) => (
        <p
          key={index}
          className='py-0.5 cursor-pointer hover:-translate-x-1 duration-200'
          onClick={() => dispatch(setRole(option))}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default Dropdown;
