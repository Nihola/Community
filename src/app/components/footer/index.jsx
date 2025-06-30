import React from 'react'
import  Image  from 'next/image';

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'next/link';

const Footer = () => {
  return (
    <div className='flex flex-col gap-5 bg-[rgba(6, 50, 85, 1)]'>
      <div>
        <ul className='flex flex-col gap-3'>
           
            <Image src="/Logo.png" alt="logo" height={60} width={140} />
          <h1>Bespoke software solutions</h1>
          <div className='flex gap-3.5'>
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaTwitter />
          </div>

           
        </ul>
        <ul className='flex flex-col gap-3'>
          <li>Company</li>
          <Link href="/about">
            About Us
          </Link>

          <Link href="/careers">
            Careers
          </Link>
          
          <Link href="/services">
            Services
          </Link>
          <Link href="/blog">
            Blog
          </Link>
          

        </ul>
        <ul className='flex flex-col gap-3'>
          <li>Connect</li>
          <Link>
            hi@finsweet.com
          </Link>

          <Link href="">
            +(123) 456-7890
          </Link>          

        </ul>
        <ul className='flex flex-col gap-3'>
          <li>Join Newsletter</li>
         
            hi@finsweet.com
          

          <Link href="">
            +(123) 456-7890
          </Link>

        </ul>

      </div>
      <div className='flex justify-between items-center'>
        <p>© All rights reserved – Finsweet</p>
        <div className='flex gap-5 items-center'>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>




    </div>
  )
}

export default Footer
