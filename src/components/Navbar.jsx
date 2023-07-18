import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assests/logo.png'
import {Link} from 'react-scroll'
import Resume from '../assests/ResumeAniket.pdf'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const handleClick = () => setNavbar(!navbar)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-white'>
      <div><img src={Logo} alt="Aniket Pratap Logo" style={{ width: '80px' }} /></div>
      {/* navigation */}
      {/* setting media query, under 760px*/}
      <ul className='hidden md:flex'>
        <li className='border-b-2 border-transparent hover:border-white transition duration-300'>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className='border-b-2 border-transparent hover:border-white transition duration-300'>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className='border-b-2 border-transparent hover:border-white transition duration-300'>
        <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className='border-b-2 border-transparent hover:border-white transition duration-300'>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
            Cool Stuff
          </Link>
        </li>
        <li className='border-b-2 border-transparent hover:border-white transition duration-300'>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      {/* anything over media, it will hide */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menue */}
      <ul className={!navbar ? "hidden" : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
            Cool Stuff
          </Link></li>
        <li className='py-6 text-4xl'>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0b66c2]'>
            <a className="flex justify-between items-center w-full text-white text-xl" href="https://www.linkedin.com/in/aniketpratap/"> Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#800080]'>
            <a className="flex justify-between items-center w-full text-white text-xl" href="https://github.com/xXViridianXx"> Github <FaGithub size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c5221f]'>
            <a className="flex justify-between items-center w-full text-white text-xl" href="mailto:aniketpx@gmail.com"> Email <HiOutlineMail size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2a9d8f]'>
            <a className="flex justify-between items-center w-full text-white text-xl" href={Resume}> Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>
      </div>

      <div className='fixed flex-col top-[20%] right-0 md:hidden'>
        <ul>
          <li className='w-[135px] h-[40px] flex justify-between items-center mr-[-90px] duration-300 bg-[#0b66c2]'>
            <a className="flex justify-between items-center w-full text-white text-md" href="https://www.linkedin.com/in/aniketpratap/"> <FaLinkedin size={20} /> Linkedin </a>
          </li>
          <li className='w-[135px] h-[40px] flex justify-between items-center mr-[-90px] duration-300 bg-[#800080]'>
            <a className="flex justify-between items-center w-full text-white text-md" href="https://github.com/xXViridianXx"> <FaGithub size={20} /> Github </a>
          </li>
          <li className='w-[135px] h-[40px] flex justify-between items-center mr-[-90px] duration-300 bg-[#c5221f]'>
            <a className="flex justify-between items-center w-full text-white text-md" href="mailto:aniketpx@gmail.com"> <HiOutlineMail size={20} /> Email </a>
          </li>
          <li className='w-[135px] h-[40px] flex justify-between items-center mr-[-90px] duration-300 bg-[#2a9d8f]'>
            <a className="flex justify-between items-center w-full text-white text-md" href={Resume}> <BsFillPersonLinesFill size={20}/> Resume </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar