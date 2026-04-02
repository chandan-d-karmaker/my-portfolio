import React from 'react';
import Sidebar from './Sidebar';
import github from '../assets/Github.svg'
import linkedin from '../assets/Linkedin.svg'
import twitter from '../assets/Twitter.svg'
import { Link } from 'react-scroll';


const TopNavBar = () => {
  return (
    <div>

      <div className="navbar bg-[#282C33] md:w-4/5 mx-auto px-0 relative">

        <Sidebar />

        <div className="navbar-start pl-3">
          <a className="text-xl">CHANDAN</a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className='flex gap-8 pr-3'>

            <li><Link to='hero' smooth={true}
              duration={800}
              offset={-70} // Useful for fixed headers
              activeClass="active"
              spy={true} className='cursor-pointer'><span className='text-[#C778DD]'>#</span>home</Link>
            </li>

            <li>
              <Link to='projects' smooth={true}
                duration={800}
                offset={-70} // Useful for fixed headers
                activeClass="active"
                spy={true} className='cursor-pointer'><span className='text-[#C778DD]'>#</span>works</Link>
            </li>

            <li>
              <Link to='about-me' smooth={true}
                duration={800}
                offset={-70} // Useful for fixed headers
                activeClass="active"
                spy={true} className='cursor-pointer'><span className='text-[#C778DD]'>#</span>about-me</Link>
            </li>
            <li>
              <Link to='contacts' smooth={true}
                duration={800}
                offset={-70} // Useful for fixed headers
                activeClass="active"
                spy={true} className='cursor-pointer'><span className='text-[#C778DD]'>#</span>contacts</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown navbar-end lg:hidden relative">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content pt-20 pl-5 bg-[#282C33] z-40 min-h-screen absolute top-10 -left-40 min-w-lvw space-y-8">
            <li><a href="" className='text-3xl'><span className='text-[#C778DD]'>#</span>home</a></li>
            <li><a href="" className='text-3xl'><span className='text-[#C778DD]'>#</span>works</a></li>
            <li><a href="" className='text-3xl'><span className='text-[#C778DD]'>#</span>about-me</a></li>
            <li><a href="" className='text-3xl'><span className='text-[#C778DD]'>#</span>contacts</a></li>
            <ul className='flex gap-5 mt-38 z-30'>
              <li><a href="https://github.com/chandan-d-karmaker" target='_blank' rel='noopener noreferrer'>
                <img src={github} alt="GitHub" />
              </a></li>
              <li><a href="https://www.linkedin.com/in/chandankarmaker" target='_blank' rel='noopener noreferrer'>
                <img src={linkedin} alt="LinkedIn" />
              </a></li>
              <li><a href="https://x.com/chandank202" target='_blank' rel='noopener noreferrer'>
                <img src={twitter} alt="Twitter" />
              </a></li>
            </ul>
          </ul>


        </div>




      </div>
    </div>
  );
};

export default TopNavBar;