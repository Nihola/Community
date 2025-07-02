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
export const icons=[

  {
    id: 1,
    img: "/Icon.png",
    title: "Invoicing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ndit, hendrerit elit et,",
    
  },
  {
    id: 2,
    img: "/Icon (1).png",
    title: "Support",
    text: "Lorem ipsum dolor sit aLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",

  },
  {
    id: 3,
    img: "/Icon (2).png",
    title: "Surveying",
    text: "Lorem ipsum dolor sit amLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",

  }
]
const Home = () => {
  return (
    <div className='max-w-[1520px] mx-auto pt-20  '>
      <div className='bg-[#DCEAF5] flex flex-col lg:flex-row justify-between items-center gap-10 lg:h-[650px] px-4 sm:px-16 py-6'>
        {/* Left Text Section */}
        <div className='lg:w-1/2 flex flex-col gap-6'>
          <h2 className='text-[32px] sm:text-[36px] md:text-[40px] lg:text-[54px] font-extrabold text-[#1D3444] w-full max-w-[576px]'>
            Prosper with our bespoke solutions
          </h2>
          <p className='text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-[#5B5B5B] font-semibold w-full max-w-[571px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
          </p>
          <div className='flex gap-4 flex-wrap'>
            <Link href="/services">
              <p className='px-6 py-3 border border-amber-600 text-black hover:bg-amber-600 hover:text-white rounded-full text-center'>
                See our services
              </p>
            </Link>
            <Link href="/services">
              <p className='px-6 py-3 border border-amber-600 text-black hover:bg-amber-600 hover:text-white rounded-full text-center'>
                See All Services
              </p>
            </Link>
          </div>
          <p className='text-[#39414980] text-[16px] sm:text-[18px]'>
            Worked with 100+ Companies
          </p>
          <div className='flex gap-4 sm:gap-6 flex-wrap'>
            <Image src="/Ad1.png" alt="ad" width={100} height={100} />
            <Image src="/Ad2.png" alt="ad" width={100} height={100} />
            <Image src="/Ad3.png" alt="ad" width={100} height={100} />
          </div>
        </div>

        {/* Right Image */}
        <div className='lg:w-1/2 w-full flex justify-center'>
          <Image
            src="/Man.png"
            width={1000}
            height={900}
            alt='man'
            className='w-full h-auto object-contain'
          />
        </div>

      </div>


      {/* Section 2 */}
      <div className='flex flex-col gap-14  mt-12 px-16 py-6'>
        <h3 className='text-[#1D3444] text-[28px] lg:text-[44px] font-semibold max-w-3xl tracking-tight w-[735px]'>
          We help more than 1500 companies from all sectors
        </h3>
        <p className='text-[#5B5B5B] w-[735px] text-[17px] lg:text-[19px] max-w-3xl font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
        </p>

        <div className='flex flex-wrap   justify-between gap-4 '>
          {data && data.map((item) => (
            <Link href={`/blog/${item?.id}`} key={item.id}>
              <div className='max-w-sm w-[400px] border border-transparent hover:border-amber-600 hover:shadow-md rounded-xl transition-all duration-300 p-4'>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={200}
                  className='rounded mb-3'
                />
                <h2 className='font-bold text-xl'>{item.title}</h2>
                <h2 className='text-gray-700'>{item.text}</h2>
                <button className='mt-2 text-black hover:bg-amber-600 hover:text-white px-4 py-2 rounded-[24px]'>
                  {item.btn}
                </button>
              </div>

            </Link>
          ))}
        </div>
      </div>


      {/* Section 3*/}
      <div className='flex flex-col gap-14  mt-12 px-16 py-14 bg-[#EDF7FF]'>
        <div className='flex justify-between items-center'>
          <h3 className='text-[#0D1317] text-[34px] lg:text-[44px] font-bold max-w-3xl tracking-tight w-[689px]'>
            We are building software solution that solves your business challenges
          </h3>
          <p className='text-[#1D3444]  w-[620px] text-[18px] lg:text-[19px] max-w-3xl text-2xl font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className='flex flex-wrap   justify-between gap-4 '>
          {icons && icons.map((item) => (
            
              <div key={item.id} className='max-w-sm w-[371px] bg-white h-[278px] border border-transparent hover:border-amber-600 hover:shadow-md rounded-xl transition-all duration-300 p-4 px-8'>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={33}
                  height={28}
                  className='rounded mb-6'
                />
                <h2 className='font-bold text-xl mb-6'>{item.title}</h2>
                <h2 className='text-gray-700'>{item.text}</h2>
                 
              </div>

             
          ))}
        </div>
      </div>
    </div>

  )
}

export default Home
