import React from 'react';
import github from '../assets/Github.svg'
import linkedin from '../assets/Linkedin.svg'
import twitter from '../assets/Twitter.svg'

const Sidebar = () => {
    return (
        <div className=''>
            <div className='md:flex hidden flex-col gap-5 fixed right-370 top-0 justify-center items-center'>
                <div className=" border-2 border-[#ABB2BF] h-24 w-0"></div>
                <div className='flex flex-col gap-5'>
                    <img src={github} alt="GitHub" />
                    <img src={linkedin} alt="LinkedIn" />
                    <img src={twitter} alt="Twitter" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;