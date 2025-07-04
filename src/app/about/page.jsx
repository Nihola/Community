 
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Section7 from '../components/Section7';
import Section8 from '../components/Section8';

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

export const team = [
  {
    id: 1,
    img: "/team1.png",
    name: "Ethan Moore",
    role: "Lead Developer",
    desc: "Expert in full-stack development and passionate about clean, scalable code.",
  },
  {
    id: 2,
    img: "/team2.png",
    name: "Amanda Reyes",
    role: "Project Manager",
    desc: "Keeps projects on track with exceptional communication and planning skills.",
  },
  {
    id: 3,
    img: "/team3.png",
    name: "Jordan Carter",
    role: "UX/UI Designer",
    desc: "Designs intuitive interfaces with a focus on user-centered experiences.",
  },
  {
    id: 4,
    img: "/team4.png",
    name: "Selby Stuart",
    role: "Support Assist",
    desc: "Provides outstanding client support and ensures customer satisfaction.",
  },
];



const About = () => {
  return (
 
   <>
      <div className='container mx-auto px-16 py-8 mt-15'>
        <div
          className='flex flex-col-reverse lg:flex-row justify-between items-center gap-10'
          key={template[0].id}
        >
          {/* Text Content */}
          <div className='flex flex-col text-center lg:text-left'>
            <h2 className='font-bold text-[32px] sm:text-[40px] lg:text-[60px] w-full sm:w-[510px] lg:w-[618px] mx-auto lg:mx-0'>
              {template[0].title}
            </h2>
            <p className='text-[#5B5B5B] text-[16px] sm:text-[18px] w-full sm:w-[510px] mt-4 mx-auto lg:mx-0'>
              {template[0].text}
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
            src={template[0].img}
            alt={template[0].title}
            width={600}
            height={250}
            className='rounded object-cover w-full max-w-[600px]'
          />
        </div>
      </div>


      <section className="py-16 px-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top text */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
              The energy of a start-up combined with 30 years of experience
            </h2>
            <p className="text-gray-600 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-orange-500 text-2xl font-bold">15+</p>
              <h4 className="font-semibold">Awards received</h4>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div>
              <p className="text-orange-500 text-2xl font-bold">500+</p>
              <h4 className="font-semibold">Clients served</h4>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div>
              <p className="text-orange-500 text-2xl font-bold">34</p>
              <h4 className="font-semibold">Employees</h4>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div>
              <p className="text-orange-500 text-2xl font-bold">130+</p>
              <h4 className="font-semibold">Custom solutions</h4>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We want to get local identification in every corner of the world in this era of global citizenship.
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
            </p>
          </div>

          {/* Image with overlay */}
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/teamwork.png" // Replace with your image name
                alt="Team working"
                fill
                className="object-cover"
              />
            </div>

            
          </div>
        </div>
      </section>
 
    
       
      <section className="py-8 px-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Teamwork is the only way we work</h2>
          <p className="text-gray-600 max-w-2xl mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="relative group overflow-hidden rounded-xl shadow-md">
                {/* IMAGE */}
                <div className="relative w-full h-100">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* OVERLAY AT BOTTOM */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10 h-40 flex flex-col justify-end rounded-2xl">
                  <p className="text-sm text-gray-300 mb-2">{member.role}</p>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-xs mt-1 line-clamp-2">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section7/>
      <Section8/>





   </>
  );
};

export default About;
