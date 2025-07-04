
'use client';
import React from 'react'
import Image from 'next/image';
export const data = [
    {
        id: 1,
        img: "/Image1.png",
        title: "Digitalization",
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
        img: "/Image3.png",
        title: "Risk assessment",
        text: "Stay ahead of the game with these up-and-coming marketing strategies and trends.",
        btn: "Learn More"
    }
  ];
export default function Section8() {
  return (
      <section className="bg-[#e8f2fa] py-24 ">
          <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                  Latest Blog & News
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.map((item) => (
                      <div
                          key={item.id}
                          className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-lg"
                      >
                          <div className="relative w-full h-48">
                              <Image
                                  src={item.img}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                              />
                          </div>
                          <div className="p-6">
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                  {item.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4">{item.text}</p>
                              <button className="text-orange-500 font-medium text-sm hover:underline flex items-center gap-1">
                                  {item.btn}
                                  <span className="text-xl">&rarr;</span>
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}
