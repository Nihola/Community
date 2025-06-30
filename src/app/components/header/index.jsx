'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='w-full shadow-sm'>
      <div className='container mx-auto flex justify-between items-center px-6 py-4'>
        <Link href="/">
          <Image src="/Logo.png" alt="logo" height={60} width={140} />
        </Link>
 
        <div className="md:hidden text-3xl text-gray-700 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        
        <ul
          className={`
            flex flex-col md:flex-row gap-6 md:gap-10 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 z-10 transition-all duration-300
            ${menuOpen ? 'block' : 'hidden md:flex'}
          `}
        >
          {['about', 'careers', 'services', 'blog', 'contact'].map((page) => (
            <li key={page} className="text-xl md:text-2xl text-gray-700 font-semibold hover:bg-[rgba(245,138,7,0.1)] rounded-2xl py-2 px-2 hover:text-amber-600">
              <Link href={`/${page}`}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}
          <li className="text-xl md:text-2xl text-gray-700 font-semibold hover:bg-[rgba(245,138,7,0.1)] rounded-2xl py-2 px-2 hover:text-amber-600">
            <Link href="/">Clone Project</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
