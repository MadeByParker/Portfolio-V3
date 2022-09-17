import React from 'react';
import project1 from '../assets/projects/project-1.gif';
import project2 from '../assets/projects/project-2.gif';
import project3 from '../assets/projects/project-3.gif';
import project4 from '../assets/projects/project-4.gif';
import project5 from '../assets/projects/project-5.png';
import project6 from '../assets/projects/project-6.png';
import project7 from '../assets/projects/project-7.png';
import project8 from '../assets/projects/project-8.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out-sine',
    delay: 200,
    mirror: true
  });

  const projects = [
      {   
        title: "Personal Portfolio V2",
        subtitle: "ReactJS, Tailwind CSS, Firebase, Google Forms",
        description: "A revamped iteration cross-platform website of my portfolio website, built in 2021. Designed and develop with an analytical approach and thinking process to avoid using any frameworks that lack in depth such as Bootstrap.",
        image: project7,
        link: "https://portfolio-9a196.firebaseapp.com",
        github: "https://github.com/Parker06/portfolio_react",
    },
    {
        title: "CySecApp",
        subtitle: "HTML, CSS, JavaScript and Firebase",
        description: "A security Dashboard that I made for my Web Development Module. It's a single page web application, which displays data about how many users connect to the systems, system statuses and health, security alerts and system alerts.",
        image: project1,
        link: "https://cysecapp.azurewebsites.net/",
        github: "https://github.com/Parker06/COMP1004-Security-Dashboard",
    },
    {
        title: "Commandline Dungeon Crawler",
        subtitle: "C#",
        description: "A C# Command line Dungeon Crawler that I made for my Software Engineering Module. It's a game where the player is in a maze surrounded by monsters and they need to get to the exit, they can pick up gold and kill monsters to get extra points.",
        image: project2,
        link: "https://github.com/Parker06/Commandline-Dungeon-Crawler",
        github: "https://github.com/Parker06/Commandline-Dungeon-Crawler",
    },
    {   
        title: "Eyes of Caelum",
        subtitle: "HTML, CSS, JavaScript and Firebase",
        description: "A responsive website that displays the information and work of the Plymouth based music band, Eyes of Caelum",
        image: project3,
        link: "https://eyesofcaelum.com",
        github: "#",
    },
    {   
        title: "Mastermind Code-Breaker",
        subtitle: "C#",
        description: "A C# Console Mastermind Code-Breaker that I made for my Data and Algorithms Module. It's a game where the computer generates a code up to 9 digits long with numbers varing from 1-4 to 1-9 and the user has up to 20 guesses to guess the correct code",
        image: project4,
        link: "https://github.com/Parker06/Mastermind-Code-Breaker",
        github: "https://github.com/Parker06/Mastermind-Code-Breaker"
    },
    {   
      title: "South Hams Society Website",
      subtitle: "HTML, CSS, JavaScript, Textpattern",
      description: "A rebranded cross-platform website for the South Hams Society that will make a difference and inspire locals to save the environment around them and preserve it for the future generations",
      image: project5,
      link: "http://textpattern.oliverdonnellan.co.uk",
      github: "https://github.com/Parker06/COMP2003_2021-Group-B",
  },
  {   
    title: "Personal Portfolio V1",
    subtitle: "HTML, CSS, JavaScript, Bootstrap",
    description: "My first portfolio website I designed and built in 2020. I learned quite a bit about HTML, CSS, and JavaScript. Since then, I think my web development and design skills have improved immensely.",
    image: project8,
    link: "https://parker06.github.io/Portfolio/",
    github: "https://github.com/Parker06/Portfolio",
},
  ];

  return (
    <div id="projectsComponent" name='work' className='w-full md:h-full text-black z-10'>
      <div data-aos="fade-up" className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p id="title"className='text-4xl font-bold inline border-b-4 border-black'>
            My Projects
          </p>
          <p id="subtitle" className='py-6 text-2xl font-semibold'> Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map((project) => (
                <div id="projectCard" className="shadow-md shadow-black rounded-lg">
                  <img 
                    src={project.image}
                    alt=""
                    className="rounded-md inset-0 duration-200 object-cover object-center hover:scale-110"
                  />
                  <div className="font-semibold font-mono flex items-center justify-center">
                    <a 
                      href={project.link}
                      target="_blank"

                      className="w-1/2 px-6 py-3 m-4 rounded-md duration-500 hover:scale-110 hover:border-gray-600 hover:border-4">
                      Website
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      className="w-1/2 px-6 py-3 m-4 rounded-md duration-500 hover:scale-110 hover:border-gray-600 hover:border-4">
                      Code
                    </a>
                  </div>
                </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;