import HTML from '../assets/logos/html.png';
import CSS from '../assets/logos/css.png';
import JavaScript from '../assets/logos/javascript.png';
import Reacting from '../assets/logos/react.png';
import Bootstrap from '../assets/logos/bootstrap.png';
import Firebase from '../assets/logos/firebase.png';
import Materialize from '../assets/logos/materialize.png';
import GitHub from '../assets/logos/github.png';
import Tailwind from '../assets/logos/tailwind.png';
import SQL from '../assets/logos/sql.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    const techs = [
        {
          id: 1,
          src: HTML,
          title: "HTML",
          style: "shadow-orange-500",
          hoverEffect: "orange-500",
        },
        {
          id: 2,
          src: CSS,
          title: "CSS",
          style: "shadow-blue-500",
          hoverEffect: "orange-500",
        },
        {
          id: 3,
          src: JavaScript,
          title: "JavaScript",
          style: "shadow-yellow-500",
          hoverEffect: "yellow-500",
        },
        {
          id: 4,
          src: Reacting,
          title: "React",
          style: "shadow-sky-500",
          hoverEffect: "sky-500",
        },
        {
          id: 5,
          src: Tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
          hoverEffect: "sky-400",
        },
        {
          id: 6,
          src: GitHub,
          title: "Github",
          style: "shadow-gray-400",
          hoverEffect: "gray-400",
        },
        {
          id: 8,
          src: Bootstrap,
          title: "Bootstrap",
          style: "shadow-purple-400",
          hoverEffect: "purple-400",
        },
        {
            id: 9,
            src: Firebase,
            title: "Google Firebase",
            style: "shadow-yellow-500",
            hoverEffect: "yellow-500",
          },
      ];

      AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
      });
  return (
    <div id="skillsComponent" name='skills' className='w-full h-screen z-0'>
      {/* Container */}
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>
          <div data-aos='fade-down'>
              <p id="title" className='text-4xl font-bold border-b-4 p-2 inline border-black'>Skills</p>
              <p id="subtitle" className='py-6 text-2xl font-semibold'>These are the technologies I've worked with</p>
          </div>

          <div data-aos="fade-up" className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0' id="skillsCards">
            {techs.map(({ id, src, title, style, hoverEffect }) => (
                <div key={id} className={`shadow-md hover:scale-105 py-2 rounded-lg duration-500 ${style} bg-[${hoverEffect}]`} id="skillsCard">
                    <img className='w-20 mx-auto' src={src} alt={title} />
                    <p className='mt-4'>{title}</p>
                </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;