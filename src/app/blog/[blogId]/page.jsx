'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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

const BlogInner = () => {
  const params = useParams();
  const blogId = params?.blogId;
  const blog = data.find((item) => item.id == blogId);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold">Blog not found</h1>
        <Link href="/blog" className="mt-4 inline-block text-blue-600 hover:underline">
          ← Go back to blog list
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12">
      {/* Back Link */}
      <div className="mb-6">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">
          ← Back to all posts
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-4xl mx-auto">
        <Image
          src={blog.img}
          alt={blog.title}
          width={800}
          height={450}
          className="rounded-lg w-full object-cover mb-8 shadow-md"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-[28px] sm:text-[36px] font-bold text-[#0D1317] leading-tight mb-6">
          {blog.title}
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[#5B5B5B] leading-relaxed mb-8">
          {blog.text}
        </p>
        <button className="text-white bg-amber-600 hover:bg-amber-700 transition px-6 py-3 rounded-full font-medium shadow">
          {blog.btn}
        </button>
      </div>
    </div>
  );
};

export default BlogInner;
