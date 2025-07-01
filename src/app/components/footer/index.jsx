
import React from 'react'
import  Image  from 'next/image';

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link"
 

const Footer = () => {
  return (
    
    <div className='flex flex-col gap-5 bg-[#063255] px-12 py-8 container  justify-around max-w-[1520px]   mx-auto '>
        <div className='flex justify-between '>
          <ul className='flex flex-col gap-3'>

            <Image src="/Logo (1).png" alt="logo" height={60} width={140} />
            <h1 className='text-white w-[350px] text-[29px] font-semibold'>Bespoke software solutions</h1>
            <div className='flex gap-3.5 font-bold text-2xl text-white'>
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaTwitter />
            </div>


          </ul>
        <ul className='flex flex-col gap-3  text-white'>
            <li className='mb-4'>Company</li>
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
          <ul className='flex flex-col gap-3 text-white'>
            <li className='mb-4'>Connect</li>
          <Link href="mailto: hi@finsweet.com" className=' text-white'>
              hi@finsweet.com
            </Link>

          <Link href="tel: +(123) 456-7890" className=' text-white'>
              +(123) 456-7890
            </Link>

          </ul>
          <ul className='flex flex-col gap-3'>
          <li className=' text-white'>Join Newsletter</li>
          <input type="text" name="" id="" placeholder='Type email here' className='w-[270px] h-[54px] rounded-3xl border-2 bg-white text-16px pl-8' />
                 <button className='bg-amber-600 w-[126px] h-[54px] rounded-3xl text-white font-semibold text-[18px]'>Subscribe</button>           

          </ul>

        </div>
        <div className='flex justify-between items-center'>
          <p className='text-white'>© All rights reserved – Finsweet</p>
          <div className='flex gap-5 items-center'>
            <p className='text-white'>Privacy Policy</p>
            <p className='text-white'>Terms & Conditions</p>

          </div>
        </div>




      </div>



     

  )
}

export default Footer
