'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const data = [
  {
    id: 1,
    img: "/Image1.png",
    title: "Why you have to digitalize in 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
    btn: "Learn More"
  },
  {
    id: 2,
    img: "/Image2.png",
    title: "Top 5 Automation Tools for Businesses",
    text: "Discover the latest tools that streamline your business operations and increase productivity.",
    btn: "Learn More"
  },
  {
    id: 3,
    img: "/Image2.png",
    title: "Understanding Cybersecurity in the Digital Age",
    text: "Learn how to protect your company and data from increasing cyber threats.",
    btn: "Learn More"
  },
  {
    id: 4,
    img: "/Image3.png",
    title: "Digital Marketing Trends in 2025",
    text: "Stay ahead of the game with these up-and-coming marketing strategies and trends.",
    btn: "Learn More"
  },
  {
    id: 5,
    img: "/Image2.png",
    title: "Benefits of Moving to Cloud Computing",
    text: "Why cloud services are revolutionizing how modern businesses operate.",
    btn: "Learn More"
  },
  {
    id: 6,
    img: "/Image1.png",
    title: "Startup Guide: Go Digital from Day One",
    text: "Essential digital tools and mindset for launching your startup effectively.",
    btn: "Learn More"
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto mt-24 mb-14 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl font-bold mb-6">All posts</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item) => (
          <Link href={`/blog/${item?.id}`} key={item.id} className="w-full sm:w-[370px]">
            <div className="bg-[#EDF7FF] h-full px-5 pb-6 pt-4 border border-transparent hover:border-amber-600 hover:shadow-md rounded-xl transition-all duration-300">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="rounded mb-4 w-full object-cover"
              />
              <div className="flex flex-col gap-4 items-start">
                <h2 className="text-[#0D1317] text-lg sm:text-[24px] font-semibold">
                  {item.title}
                </h2>
                <p className="text-[#5B5B5B] text-sm sm:text-[16px]">
                  {item.text}
                </p>
                <button className="text-amber-600 font-semibold hover:underline">{item.btn}</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
