import React from 'react';
import github from '../assets/Github.svg'
import linkedin from '../assets/Linkedin.svg'
import twitter from '../assets/Twitter.svg'

const Sidebar = () => {
    return (
        <div className=''>
            <div className='md:flex hidden flex-col gap-5 fixed left-10 top-0 justify-center items-center'>
                <div className=" border-2 border-[#ABB2BF] h-24 w-0"></div>
                <div className='flex flex-col gap-5'>
                    <a href="https://github.com/chandan-d-karmaker" target='_blank' rel='noopener noreferrer'>
                        <img src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/chandankarmaker" target='_blank' rel='noopener noreferrer'>
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://x.com/chandank202" target='_blank' rel='noopener noreferrer'>
                        <img src={twitter} alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;