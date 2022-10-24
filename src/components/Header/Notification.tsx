import React, { useState } from 'react';
import { useFetchUser } from '../../hooks/useFetchUser';
import SpinnerW from '../Loaders/SpinnerW';
import Avatar from './Avatar';
import { BiCaretDown } from 'react-icons/bi';
import Dropdown from './Dropdown';
import { CgMenuGridR } from 'react-icons/cg';
import Menu from './Menu';

type Props = {
  email: string;
};

const placeholder =
  'https://www.schaumburgbanquet.com/img/UserImg/defaultuser.png';

const Notification = ({ email }: Props) => {
  const userData = useFetchUser(email);
  const [expand, setExpand] = useState<boolean>(false);
  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const { data, isLoading, isError } = userData;

  if (isLoading) return <SpinnerW />;

  if (isError)
    return (
      <h1 className='text-sm text-red-500 font-semibold'>
        Unauthorized User..!
      </h1>
    );

  const { image, name } = data.data.user;

  return (
    <div className='flex items-center space-x-2 relative'>
      <div className='relative'>
        <CgMenuGridR
          className={`h-6 w-6 text-[#6d6d6d] hover:text-black cursor-pointer transition-all duration-150 mr-2 ${
            expandMenu && '-rotate-90'
          }`}
          onClick={() => setExpandMenu(!expandMenu)}
        />
        <Menu menuState={expandMenu} />
      </div>
      {image ? <Avatar image={image} /> : <Avatar image={placeholder} />}
      <BiCaretDown
        className={`h-5 w-5 text-[#666666] ${
          expand && 'rotate-180'
        } duration-200 cursor-pointer`}
        onClick={() => setExpand(!expand)}
      />
      {expand && <Dropdown email={email} name={name} />}
    </div>
  );
};

export default Notification;
