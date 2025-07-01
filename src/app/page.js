import React from 'react'
import page from './contact/page';
import Image from 'next/image';
import Link from 'next/link';
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
const Home = () => {
  return (
    <div className='max-w-[1520px] container mx-auto '>
      <div className='bg-[#DCEAF5] flex justify-between h-[650px] px-6'>
        <div className='w-[576px] flex flex-col gap-10 py-10 px-10'>
          <h2 className='text-[54px] w-[576px] font-extrabold mt-1.5 text-[#1D3444] tracking-tight'>
            Prosper with our bespoke solutions
          </h2>
          <p className='w-[500px] text-[19px] text-[#5B5B5B] font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
          </p>
          <div className='flex gap-4'>
            <Link href="/services">
              <p className='w-[140px] py-4 text-black hover:border-amber-600 hover:bg-amber-600 hover:text-white hover:rounded-[90px] hover:text-center'>
                See our services
              </p>
            </Link>
            <Link href="/services">
              <p className='w-[140px] py-4 text-black hover:border-amber-600 hover:bg-amber-600 hover:text-white hover:rounded-[90px] hover:text-center'>
                See All Services
              </p>
            </Link>
          </div>
          <p className='text-[#39414980] text-[18px]'>
            Worked with 100+ Companies
          </p>
          <div className='flex gap-8'>
            <Image src="/Ad1.png" alt="ad" width={120} height={120} />
            <Image src="/Ad2.png" alt="ad" width={120} height={120} />
            <Image src="/Ad3.png" alt="ad" width={120} height={120} />
          </div>
        </div>
        <Image src="/Man.png" width={900} height={400} alt='man' />



      </div>

      <div className='flex flex-col gap-6 px-12 h-[650px] mt-4'>
        <h3 className='w-[735px] text-[#1D3444] text-[48px] font-semibold'>We help more than 1500 companies from all sectors</h3>
        <p className='text-[#5B5B5B] text-[19px] w-[735px] font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
        </p>
       
          <div className='flex justify-between'>

            {
              data && data.map((item) => (
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

export default Home
