'use client';
import React from 'react'


import Image from 'next/image';
import Link  from 'next/link';
import FeatureSection from "@/components/FeatureSection";
import { features } from "@/data";

export const template = [
  {
    id: 1,
    img: "/aboutFirst.png",
    title: "We value human, organizational, and operational intelligence, not just artificial",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.",
    btn: "Work With Us"
  },
  {
    id: 2,
    img: "/servicesFirst.png",
    title: "We serve clients with ground breaking solutions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.",
    btn: "Work With Us"
  },
  {
    id: 3,
    img: "/careersFirst.png",
    title: "We hired people who are very passionate about what they do",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.",
    btn: "View Positions"
  }
];



const Services = () => {
  return (
   <>
      <div className='container mx-auto px-16 py-8 mt-15'>
        <div
          className='flex flex-col-reverse lg:flex-row justify-between items-center gap-10'
          key={template[1].id}
        >
          {/* Text Content */}
          <div className='flex flex-col text-center lg:text-left'>
            <h2 className='font-bold text-[32px] sm:text-[40px] lg:text-[60px] w-full sm:w-[510px] lg:w-[618px] mx-auto lg:mx-0'>
              {template[1].title}
            </h2>
            <p className='text-[#5B5B5B] text-[16px] sm:text-[18px] w-full sm:w-[510px] mt-4 mx-auto lg:mx-0'>
              {template[1].text}
            </p>
            <div className='mt-6'>
              <Link href="/services">
                <button className='w-full sm:w-[170px] text-black hover:bg-amber-600 hover:text-white px-4 py-2 rounded-[24px] border border-amber-600 transition'>
                  {template[0].btn}
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <Image
            src={template[1].img}
            alt={template[1].title}
            width={600}
            height={250}
            className='rounded object-cover w-full max-w-[600px]'
          />
        </div>
      </div>
      <FeatureSection data={features} />

   </>



  )
}

export default Services
