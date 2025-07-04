
'use client';
import React, { useState} from 'react';

 
export default function Section7() {
      const [showVideo, setShowVideo] = useState(false);
  return (
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full px-8 py-12">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-[#0D1317]">
                  Finsweet Was A Dream To Work With
              </h2>
              <p className="text-gray-600">
                  Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel.
                  Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus
                  eleifend nec felis vel auctor.
              </p>
              {/* Avatar */}
              <div className="flex items-center gap-4 mt-4">
                  <img
                      src="/avatar.png" // Replace with your avatar image
                      alt="Chikelu Neo"
                      className="w-12 h-12 rounded-full"
                  />
                  <div>
                      <p className="font-semibold text-[#0D1317]">Chikelu Neo</p>
                      <p className="text-sm text-orange-500">CEO at MazeAI</p>
                  </div>
              </div>
          </div>

          {/* Right: Image with Play Button */}
          <div className="relative lg:w-1/2 rounded-xl overflow-hidden">
              <img
                  src="/smilingGirl.png" // Replace with your saved image
                  alt="Testimonial"
                  className="w-full h-auto object-cover rounded-xl"
              />
              {/* Play Button Overlay */}
              <button
                  onClick={() => setShowVideo(true)}
                  className="absolute bottom-4 left-4 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg
                          className="w-3 h-3 text-white ml-[2px]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                      >
                          <path d="M8 5v14l11-7z" />
                      </svg>
                  </div>
                  <span className="text-sm font-medium text-[#0D1317]">Play Video</span>
              </button>
          </div>

          {/* Modal with YouTube video */}
          {showVideo && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                  <div className="w-full max-w-3xl bg-black rounded-xl relative">
                      <button
                          onClick={() => setShowVideo(false)}
                          className="absolute top-2 right-4 text-white text-3xl font-bold"
                      >
                          &times;
                      </button>
                      <div className="aspect-w-16 aspect-h-9">
                          <iframe
                              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with any YouTube video
                              title="YouTube video"
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              className="w-full h-[400px] rounded-xl"
                          ></iframe>
                      </div>
                  </div>
              </div>
          )}
      </div>
  )
}
