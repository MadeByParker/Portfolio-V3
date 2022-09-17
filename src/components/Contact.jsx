import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
      });

    return (
      <div id="contactComponent" name='contact' className='w-full h-screen flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/37af511b-e118-4229-a4a9-6394561c61d7" className='flex flex-col max-w-[600px] w-full font-bold'>
              <div className='pb-8' data-aos="fade-down">
                  <p id="title" className='text-4xl font-bold inline border-b-4 border-black'>Contact</p>
                  <p className='font-semibold py-4'>Submit the form below or shoot me an email - hspark5@outlook.com</p>
              </div>
              <input data-aos="fade-up" className='bg-[#c5c5c5] p-2' type="text" placeholder='Name' name='name' />
              <input data-aos="fade-up" className='my-4 p-2 bg-[#c5c5c5]' type="email" placeholder='Email' name='email' />
              <textarea data-aos="fade-up" className='bg-[#c5c5c5] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button data-aos="fade-up" id="projectsBtn" className='font-mono text-[#36d2f5] group border-[#36d2f5] border-2 px-4 py-5 my-10 mx-auto flex items-center hover:scale-x-10 hover:bg-[#36d2f5] hover:border-[#36d2f5] hover:text-[#1d1d1d] skewX-19deg transition-all ease-in-out duration-300 hover:text-bold'>Let's Collaborate</button>
          </form>
      </div>
    )
  }
  
  export default Contact