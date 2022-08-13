import React from 'react'

const About = () => {
  return (
    <div id="aboutComponent" name='about' className='w-full h-screen text-[#694b63]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p id="title" className='text-4xl font-bold inline border-b-4 border-black'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Harry! Nice to meet you. Please take a look around.</p>
            </div>
            <div className='font-semibold text-xl'>
              <p>I am passionate about building sufficient software that improves
              the lives of those around me while using technology. I specialize in Cyber Security and Front End Development 
              for clients ranging from individuals and small-businesses. What would you do if you had
              a Cyber Security expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About