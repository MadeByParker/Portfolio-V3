import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out-sine',
    delay: 200,
    mirror: true
  });

  return (
    <div id="aboutComponent" name='about' className='w-full h-screen text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div data-aos="fade-down" className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p id="title" className="text-4xl font-bold inline border-b-4 border-black">
              About
            </p>
          </div>
         </div>
        <div data-aos="fade-up" className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div id="subtitle" className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Harry! Nice to meet you. Please take a look around.</p>
          </div>
          <div id='description' className='font-semibold text-2xl mt-3'>
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