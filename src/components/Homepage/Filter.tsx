import { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import Categories from './Categories';

const Filter = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='bg-white rounded-sm w-[140px] h-[30px] text-sm p-1 px-2 mt-[10px] ml-4 shadow-sm flex justify-between items-center relative'>
      <h1 className='text-[#595959]'>Category</h1>
      <BiCaretDown
        className={`h-5 w-5 cursor-pointer text-[#595959] hover:text-black duration-150 ${
          open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />

      <div
        className={`absolute top-0 left-0 w-[10px] h-[10px] opacity-0 overflow-hidden transition-all ease-in-out duration-150  ${
          open &&
          'top-[40px] left-0 w-[140px] h-[150px] z-0 overflow-visible opacity-100'
        }`}
      >
        <Categories />
      </div>
    </div>
  );
};

export default Filter;
