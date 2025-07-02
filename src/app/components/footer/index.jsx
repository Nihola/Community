"use client"
import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-[#063255] py-10 px-6 sm:px-10 md:px-16 max-w-[1520px] mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo + Description + Socials */}
        <div className="flex flex-col gap-4">
          <Image src="/Logo (1).png" alt="logo" height={60} width={140} />
          <h1 className="text-white text-[24px] sm:text-[26px] md:text-[29px] font-semibold max-w-sm">
            Bespoke software solutions
          </h1>
          <div className="flex gap-4 text-white text-2xl">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-10 text-white">
          {/* Company */}
          <ul className="flex flex-col gap-2">
            <li className="mb-2 font-bold">Company</li>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
          </ul>

          {/* Connect */}
          <ul className="flex flex-col gap-2">
            <li className="mb-2 font-bold">Connect</li>
            <Link href="mailto:hi@finsweet.com">hi@finsweet.com</Link>
            <Link href="tel:+1234567890">+(123) 456-7890</Link>
          </ul>

          {/* Newsletter */}
          <ul className="flex flex-col gap-2">
            <li className="text-white font-bold mb-2">Join Newsletter</li>
            <input
              type="text"
              placeholder="Type email here"
              className="w-full max-w-[270px] h-[54px] rounded-3xl border bg-white text-[16px] px-6"
            />
            <button className="bg-amber-600 w-[126px] h-[54px] rounded-3xl text-white font-semibold text-[18px] mt-2">
              Subscribe
            </button>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4 text-white text-sm sm:text-base">
        <p>© All rights reserved – Finsweet</p>
        <div className="flex gap-4">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
