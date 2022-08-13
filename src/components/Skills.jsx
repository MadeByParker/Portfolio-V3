import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Reacting from '../assets/react.png';
import Bootstrap from '../assets/bootstrap.png';
import Firebase from '../assets/firebase.png';
import Materialize from '../assets/materialize.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import SQL from '../assets/sql.png';

const Skills = () => {
  return (
    <div id="skillsComponent" name='skills' className='w-full h-screen text-[#694b63]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p id="title" className='text-4xl font-bold inline border-b-4 border-black'>Skills</p>
              <p className='py-4 font-semibold text-lg sm:text-2xl'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-semibold py-8' id="skillsCards">
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={Reacting} alt="React icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4'>Github</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={Firebase} alt="Firebase icon" />
                  <p className='my-4'>Google Firebase</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={SQL} alt="SQL icon" />
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind CSS icon" />
                  <p className='my-4'>Tailwind CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110  hover:shadow-[#694b63] duration-500' id="skillsCard">
                  <img className='w-20 mx-auto' src={Materialize} alt="Materialize icon" />
                  <p className='my-4'>Materialize CSS</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;