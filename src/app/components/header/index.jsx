'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="shadow-sm w-full fixed top-0 z-[999] bg-white">
      <div className="max-w-[1520px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-16 py-4">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image src="/Logo.png" alt="logo" height={50} width={120} />
        </Link>

        {/* Hamburger */}
        <div className="md:hidden text-3xl text-gray-700 cursor-pointer z-[1001]" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Overlay Menu */}
        <ul
          className={`md:flex md:flex-row gap-6 md:gap-10 
          fixed md:static top-0 left-0 w-full h-full md:h-auto md:w-auto 
          bg-white md:bg-transparent p-6 md:p-0 
          pt-24 md:pt-0 flex-col 
          transform transition-transform duration-300 ease-in-out 
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 z-[1000]
          `}
        >
          {['about', 'careers', 'services', 'blog', 'contact'].map((page) => (
            <li
              key={page}
              className="text-lg md:text-xl text-gray-700 font-medium hover:bg-[rgba(245,138,7,0.1)] rounded-2xl py-2 px-3 hover:text-amber-600"
              onClick={closeMenu}
            >
              <Link href={`/${page}`}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional backdrop for nicer UX */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-[999]"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
