import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate=useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home',path:'/home' },
    { id: 2, text: 'Admissions',path:'/admissions' },
    { id: 3, text: 'Academics' ,path:'/academics'},
    { id: 4, text: 'Faculty',path:'/faculty'},
    { id: 5, text: 'Students',path:'/students'},
    { id: 6, text: 'Gallery',path:'/gallery'},
    { id: 7, text: 'Contact',path:'/contact'},
    { id: 8, text: 'About',path:'/about'}
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white'>
      <ul className='hidden md:flex w-full justify-center'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-3 hover:bg-[#00df9a] rounded-xl m-1 cursor-pointer duration-300 hover:text-black'
            onClick={()=>{navigate(item.path)}}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden absolute right-0 p-4'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            onClick={()=>{navigate(item.path)}}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;