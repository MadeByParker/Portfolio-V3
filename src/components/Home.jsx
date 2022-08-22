import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {


  return (
    <div name='home' className="w-full h-screen bg-[#121212]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-white text-4xl">
              Hi there 👋 my name is
            </p>
            <br className="hidden lg:inline-block"/>
            <h1 className="text-white text-7xl py-10 sm:text-7xl" id="titleName">
              Harry Parker
            </h1>
            <br className="hidden lg:inline-block"/>
            <h2 className="title-font text-gray-200 text-3xl py-4 sm:text-4xl font-bold max-w-[700px]">
              I design and develop amazing experiences
            </h2>
            <br className="hidden lg:inline-block"/>
            <p className="title-font text-[#8892B0] text-2xl py-4 font-semibold max-w-[700px]">
              Cyber Security Student and Web Developer from Plymouth, UK
            </p>
              <div>
                <Link to="work" smooth={true} duration={500}>
                  <button  id="projectsBtn" className='font-mono text-[#36d2f5] group border-[#36d2f5] border-2 px-8 py-3 my-2 flex items-center hover:scale-x-10 hover:bg-[#36d2f5] hover:border-[#36d2f5] hover:text-[#1d1d1d] skewX-19deg transition-all ease-in-out duration-300 hover:text-bold'>
                  View Projects
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                  </span>
                  </button>
                </Link>
              </div>
        </div>
    </div>
  )
}

export default Home