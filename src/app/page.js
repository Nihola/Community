 
import React from 'react';
 
import Image from 'next/image';
import Link from 'next/link';
 
import Section8 from './components/Section8';
import Section7 from './components/Section7';
import Section5 from './components/Section5';
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
    <div >
      {/* Hero Section */}
      <div className='bg-[#DCEAF5] py-10 sm:px-10 md:px-16  w-full mx-auto'>
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-10 lg:h-[650px] py-6 px-8">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[54px] font-extrabold text-[#1D3444] max-w-[576px]">
              Prosper with our bespoke solutions
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#5B5B5B] font-semibold max-w-[571px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/services">
                <p className="px-6 py-3 border border-amber-600 text-black hover:bg-amber-600 hover:text-white rounded-full text-center">
                  See our services
                </p>
              </Link>
              <Link href="/services">
                <p className="px-6 py-3 border border-amber-600 text-black hover:bg-amber-600 hover:text-white rounded-full text-center">
                  See All Services
                </p>
              </Link>
            </div>
            <p className="text-[#39414980] text-[16px] sm:text-[18px]">Worked with 100+ Companies</p>
            <div className="flex gap-4 sm:gap-6 flex-wrap">
              <Image src="/Ad1.png" alt="ad" width={100} height={100} />
              <Image src="/Ad2.png" alt="ad" width={100} height={100} />
              <Image src="/Ad3.png" alt="ad" width={100} height={100} />
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <Image src="/Man.png" width={900} height={400} alt="man" className="w-full h-auto object-contain" />
          </div>
        </div>

      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-8 mt-12 py-6 px-8">
        <h3 className="text-[#1D3444] text-[28px] sm:text-[34px] lg:text-[44px] font-semibold tracking-tight max-w-3xl">
          We help more than 1500 companies from all sectors
        </h3>
        <p className="text-[#5B5B5B] text-[16px] sm:text-[18px] font-semibold max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item) => (
            <Link href={`/blog/${item.id}`} key={item.id} className="w-full max-w-sm">
              <div className="border hover:border-amber-600 hover:shadow-md rounded-xl transition-all duration-300 p-4">
                <Image src={item.img} alt={item.title} width={400} height={250} className="rounded mb-3 w-full" />
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="text-gray-700">{item.text}</p>
                <button className="mt-2 text-black hover:bg-amber-600 hover:text-white px-4 py-2 rounded-[24px]">
                  {item.btn}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col gap-10 mt-12 py-14 px-8 bg-[#EDF7FF]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <h3 className="text-[#0D1317] text-[28px] sm:text-[34px] lg:text-[44px] font-bold max-w-3xl">
            We are building software solution that solves your business challenges
          </h3>
          <p className="text-[#1D3444] mt-5 text-[17px] sm:text-[18px] font-medium max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {icons.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full max-w-sm h-auto border hover:border-amber-600 hover:shadow-md rounded-xl transition-all duration-300 p-6"
            >
              <Image src={item.img} alt={item.title} width={33} height={28} className="mb-4" />
              <h2 className="font-bold text-xl mb-4">{item.title}</h2>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-14 px-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-[#0D1317] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold max-w-xl">
            The energy of a start-up combined with 30 years of experience.
          </h2>
          <p className="text-[#5B5B5B] text-[16px] sm:text-[18px] max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-2 max-w-xs">
              <span className="text-[#F58A07] text-[32px] sm:text-[36px]">15+</span>
              <h3 className="text-[#0D1317] text-[20px] sm:text-[24px]">Awards received</h3>
              <p className="text-[#5B5B5B] text-[14px] sm:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-xs">
              <span className="text-[#F58A07] text-[32px] sm:text-[36px]">510+</span>
              <h3 className="text-[#0D1317] text-[20px] sm:text-[24px]">Clients served</h3>
              <p className="text-[#5B5B5B] text-[14px] sm:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex justify-center">
          <Image src="/CurlyHaired.png" width={500} height={700} alt="man" className="w-full h-auto object-contain" />
        </div>
      </div>
      
      {/* Section 5*/}
      <Section5/>

      {/* Section 6*/}

      <div className="flex flex-col lg:flex-row w-full h-[500px]">
        {/* Left: Image Section */}
        <div className="relative w-full lg:w-1/2 h-[250px] lg:h-full">
          <Image
            src="/coffeeHolder.png"
            alt="Person with coffee"
            fill
            className="object-cover grayscale"
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full lg:w-1/2 bg-orange-500 text-white flex items-center justify-center p-10">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-semibold leading-tight">
              Energy of a start-up <br />
              combined with 30 <br />
              years of experience.
            </h2>
            <button className="mt-6 bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-100 transition">
              See Job Vacancies
            </button>
          </div>
        </div>
      </div>

      {/* Section 7*/}
      <Section7/>


      {/* Section 8*/}
      <Section8/>    




    </div>
  );
};

  


export default Home
