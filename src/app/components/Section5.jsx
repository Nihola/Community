'use client';
import React, { useState, useRef, useEffect } from 'react';

import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
export const slides = [
    {
        id: 1,
        tab: 'Business Strategy',
        title: 'Helping clients with research and strategy for their business',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. 
  Vivamus commodo suscipit tellus et pellentesque.`,
        subtext: `Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.`,
        image: '/teamProject.png', // Replace with your actual image
    },
    {
        id: 2,
        tab: 'Digitalization',
        title: 'Streamlining digital transformation for modern businesses',
        text: `This slide is about digitalization , in this era you need to stay up-to-date`,
        subtext: `More content for digitalization tab.`,
        image: '/teamProject.png',
    },
    {
        id: 3,
        tab: 'Risk Assessment',
        title: 'Advanced tools for business risk mitigation',
        text: `That slide is about risk assesment. you need to take risks to learn`,
        subtext: `More content for risk assessment.`,
        image: '/teamProject.png',
    },
  ];
export default function Section5() {
     const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.slideTo) {
            swiperRef.current.slideTo(activeIndex);
        }
    }, [activeIndex]);

    const swiperRef = useRef(null);
  return (
      <div className="bg-[#E9F4FB] p-6 md:p-12 rounded-[14px] mx-auto mb-14">
            {/* Tabs */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {slides.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2 rounded-full border transition duration-200 text-sm font-medium ${idx === activeIndex
                      ? 'bg-[#FF9C00]/90 text-white'
                      : 'bg-white text-gray-600 hover:bg-[#FF9C00]/10'
                    }`}
                >
                  {item.tab}
                </button>
              ))}
            </div>
    
            {/* Swiper Section */}
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    {/* Text */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-4xl font-bold text-[#0D1317] mb-4 leading-snug">
                        {slide.title}
                      </h2>
                      <p className="text-gray-600 mb-4 text-base md:text-lg">{slide.text}</p>
                      <p className="text-gray-500 mb-6 text-base md:text-lg">{slide.subtext}</p>
                      <button className="text-[#FF9C00] font-semibold hover:underline">
                        See all services →
                      </button>
                    </div>
    
                    {/* Image with overlay */}
                    <div className="relative rounded-xl overflow-hidden max-w-[650px] max-h-[950px] w-full aspect-video">
                      <Image
                        src={slide.image}
                        alt={slide.tab}
                        layout="fill"
                        objectFit="cover"
                        className="grayscale"
                      />
                      <div className="absolute left-0 top-0 h-full w-1/3 bg-[#FF9C00] mix-blend-multiply z-10" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
    
  )
}
