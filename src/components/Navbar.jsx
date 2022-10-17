import { useState } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill, BsFillGearFill } from 'react-icons/bs';
import Logo from '../assets/logos/logo-script.png';
import { Link } from 'react-scroll';

const saveFile = () => {
  // using Java Script method to get PDF file
  fetch('CV.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'CV.pdf';
          alink.click();
      })
  })
}
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
    
  
  return (

    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#181818] z-50 text-white' id="Navbar">
        <div>
            <img src={Logo} alt="Logo" style={{width: '75px'}} />
        </div>

        {/* menu */}
        <div className="hidden md:flex">
        <ul className='hidden md:flex'>
            <li id='nav-item' >
            <Link to='home' smooth={true} duration={500}>
              <span className='hover:border-b-2 group-hover:scale-110 duration-200'>Home</span>         
            </Link>
            </li>
            <li id='nav-item' >
            <Link to='about' smooth={true} duration={500}>
             <span className='hover:border-b-2 group-hover:scale-110 duration-200'>About</span>           
            </Link>
            </li>
            <li id='nav-item' >
            <Link to='skills' smooth={true} duration={500}>
              <span className='hover:border-b-2 group-hover:scale-110 duration-200'>Skills</span>
            </Link>
            </li>
            <li id='nav-item' >
            <Link to='work' smooth={true} duration={500}>
              <span className='hover:border-b-2 group-hover:scale-110 duration-200'>Projects</span>
            </Link>
            </li>
            <li id='nav-item' >
            <Link to='contact' smooth={true} duration={500}>
              <span className='hover:border-b-2 group-hover:scale-110 duration-200'>Contact</span>
            </Link>
            </li>
            <li id='nav-item' className='-m-2'>
              <button id="projectsBtn" className='font-mono text-[#36d2f5] group border-[#36d2f5] border-2 px-4 py-1 hover:scale-x-10 hover:bg-[#36d2f5] hover:border-[#36d2f5] hover:text-[#1d1d1d] skewX-19deg transition-all ease-in-out duration-300 hover:text-bold' href="https://github.com/Parker06/ParkerCodes-Portfolio/raw/master/public/CV.pdf">
                <span>Download CV</span>
              </button>
            </li>
        </ul>
        </div>

        {/* Hamburger 
            <a className="md:hidden z-10 flex flex-col py-6 justify-center text-lg">
            <Link to='work' smooth={true} duration={500}>
              View my work
            </Link>
  </a>*/}
        <button
      className="md:hidden z-10 flex flex-col h-12 w-12 justify-center items-center group"
      onClick={() => setNav(!nav)}
    >
      <div
        className={`${genericHamburgerLine} ${
          nav
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          nav ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          nav
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>

        {/* Mobile menu */}
        <ul
            className={`${
            !nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-[#181818] text-white flex flex-col justify-center items-center'
            } transition-all delay-150 duration-300 overflow-hidden w-full`}
        >
            <img src={Logo} alt="Logo" style={{width: '100px'}} />
            <li id='nav-item' className='hover:border-b-1 group-hover:scale-110 duration-200 py-6 text-4xl' >
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
            </li>
            <li id='nav-item' className='hover:border-b-1 group-hover:scale-110 duration-200 py-6 text-4xl' >
            {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
            </li>
            <li id='nav-item' className='hover:border-b-1 group-hover:scale-110 duration-200 py-6 text-4xl' >
            {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
            </li>
            <li id='nav-item' className='hover:border-b-1 group-hover:scale-110 duration-200 py-6 text-4xl' >
              {' '}
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              Projects
            </Link>
            </li>
            <li id='nav-item'  className='hover:border-b-1 group-hover:scale-110 duration-200 py-6 text-4xl' >
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
            </li>
            <li id='nav-item' className='-m-2'>
              <button id="projectsBtn" className='font-mono text-[#36d2f5] group border-[#36d2f5] border-2 px-4 py-1 hover:scale-x-10 hover:bg-[#36d2f5] hover:border-[#36d2f5] hover:text-[#1d1d1d] skewX-19deg transition-all ease-in-out duration-300 hover:text-bold' onClick={saveFile}>
                Download CV
              </button>
            </li>
        </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.linkedin.com/in/harry-parker-it976/'
              rel="noreferrer"
              target='_blank'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://github.com/Parker06'
              rel="noreferrer"
              target='_blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#598392]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='mailto: hspark5@outlook.com'
              rel="noreferrer"
              target='_blank'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#C13584]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.instagram.com/harry_parker_it/'
              rel="noreferrer"
              target='_blank'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar