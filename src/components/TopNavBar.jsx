import React from 'react';

const TopNavBar = () => {
  return (
    <div>
      <div className="navbar bg-[#282C33] shadow-sm md:w-4/5 mx-auto px-0">

        <div className="navbar-start ml-3 md:ml-0">
          <a className="text-xl">CHANDAN</a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className='flex font-medium gap-8'>
            <li><a href="" className=''>#home</a></li>
            <li><a href="" className=''>#works</a></li>
            <li><a href="" className=''>#about-me</a></li>
            <li><a href="" className=''>#contacts</a></li>
          </ul>
        </div>

        <div className="dropdown navbar-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content bg-[#282C33] rounded-box z-1 p-20 mt-100">
            <li><a href="" className=''>#home</a></li>
            <li><a href="" className=''>#works</a></li>
            <li><a href="" className=''>#about-me</a></li>
            <li><a href="" className=''>#contacts</a></li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default TopNavBar;