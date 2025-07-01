"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'
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
    console.log(params);

   const filteredData= data?.filter((item)=> item.id == params.blogId);
   console.log(filteredData);
  return (
    <div>
         <div> 
          <h1>Blog Detail Page</h1>
        <div className='flex flex-wrap'>

          {
            filteredData && filteredData.map((item) => (
              <Link href={`/blog/${item?.id}`} key={item.id}>
                <div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={200}
                    className='rounded mb-3'
                  />
                  <h2>{item.title}</h2>
                  <h2>{item.text}</h2>
                  <button>{item.btn}</button>
                </div>
              </Link>
            ))
          }




        </div>
             
          



         

         
         
         </div>



    

      
    </div>
  )
}

export default BlogInner
