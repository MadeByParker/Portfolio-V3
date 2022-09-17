import React from 'react'
import Logo from '../assets/logos/fullname.png';

const Footer = () => {
  return (
    <div id='footer' name='footer' className='w-full h-[250px] flex justify-center items-center p-4 bg-[#121212]'>
        <div id='footerContent' className=' text-4xl mx-auto px-8 flex flex-col justify-center h-full'>
        <a href="https://github.com/Parker06/ParkerCodes-Portfolio" target="_blank" rel="noreferrer">
          <div>Designed &amp; Built by <img src={Logo} alt="Logo" style={{width: '200px'}} /></div>
        </a>
        </div>
    </div>
  )
}

export default Footer