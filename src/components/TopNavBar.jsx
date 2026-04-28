import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import github from '../assets/Github.svg'
import linkedin from '../assets/Linkedin.svg'
import twitter from '../assets/Twitter.svg'
import { Link } from 'react-scroll';
import ck from '../assets/ck.svg'


const TopNavBar = ({ setShowForm }) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <div>

      <div className="navbar bg-[#282C33] md:w-4/5 mx-auto px-0 relative">

        <Sidebar />

        <div className="navbar-start pl-3">
          <a className="text-xl">
            <img src={ck} alt="" />
          </a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className='flex gap-8 pr-3'>

            <li><Link to='hero' smooth={true}
              duration={800}
              offset={-70} // Useful for fixed headers
              activeClass="active"
              spy={true} className='cursor-pointer' ><span className='text-[#C778DD]'>#</span>home</Link>
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
                spy={true} className='cursor-pointer' onClick={() => setShowForm(true)}><span className='text-[#C778DD]'>#</span>contacts</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:hidden relative">
          <div className="btn btn-ghost" onClick={() => setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            className={`lg:hidden duration-800 ${open ? 'top-14' : '-top-200'} absolute text-[#ABB2BF] min-w-screen p-6 pt-15 bg-transparent z-50 min-h-screen space-y-8 md:${open ? 'top-14' : '-top-40'} md:text-white md:bg-transparent backdrop-blur-xl md:p-4 md:rounded-xl md:min-w-0 md:min-h-0 md:space-y-4 md:shadow-2xl`}>
            <li >
              <Link to='hero' smooth={true}
                duration={800}
                offset={-70} // Useful for fixed headers
                activeClass="active"
                spy={true} className='cursor-pointer text-3xl' onClick={() => setOpen(!open)}><span className='text-[#C778DD]'>#</span>home</Link>
            </li>

            <li>
              <Link to='projects' smooth={true}
                duration={800}
                offset={-70} // Useful for fixed headers
                activeClass="active"
                spy={true} className='cursor-pointer text-3xl' onClick={() => setOpen(!open)}><span className='text-[#C778DD]'>#</span>works</Link>
            </li>

            <li>
              <Link to='about-me' smooth={true}
                duration={800}
                offset={-70} // Useful for fixed headers
                activeClass="active"
                spy={true} className='cursor-pointer text-3xl' onClick={() => setOpen(!open)}><span className='text-[#C778DD]'>#</span>about-me</Link>
            </li>
            <li>
              <Link to='contacts' smooth={true}
                duration={800}
                offset={-70} // Useful for fixed headers
                activeClass="active"
                spy={true} className='cursor-pointer text-3xl' onClick={() => setOpen(!open)} ><span className='text-[#C778DD]'>#</span>contacts</Link>
            </li>
            <ul className='flex gap-5 mt-38 md:mt-4 md:justify-between'>
              <li><a href="https://github.com/chandan-d-karmaker" target='_blank' rel='noopener noreferrer' onClick={() => setOpen(!open)}>
                <img src={github} alt="GitHub" />
              </a></li>
              <li><a href="https://www.linkedin.com/in/chandankarmaker" target='_blank' rel='noopener noreferrer' onClick={() => setOpen(!open)}>
                <img src={linkedin} alt="LinkedIn" />
              </a></li>
              <li><a href="https://x.com/chandank202" target='_blank' rel='noopener noreferrer' onClick={() => setOpen(!open)}>
                <img src={twitter} alt="Twitter" />
              </a></li>
            </ul>
          </ul>


        </div>




      </div>
    </div >
  );
};

export default TopNavBar;