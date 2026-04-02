import React from 'react';
import discord from '../assets/Discord.svg'
import github from '../assets/Github.svg'
import linkedin from '../assets/Linkedin.svg'
import x from '../assets/Twitter.svg'


const Footer = () => {
    return (
        <div className='md:w-4/5 mx-auto bg-[#282C33] md:pb-8 pb-8 px-4 md:px-0 pt-10 border-t border-[#ABB2BF]'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='text-center mb-8 md:text-start md:mb-0'>
                    <a className="text-xl mb-4">CHANDAN</a>
                    <h1 className='text-[16px] text-[#ABB2BF]'>Full-Stack web developer</h1>
                </div>

                <div className='text-center space-y-4'>
                    <h1 className='text-2xl font-medium'>Socials</h1>
                    <div className='flex items-center justify-center gap-4'>
                        <img src={linkedin} alt="" />
                        <img src={github} alt="" />
                        <img src={discord} alt="" />
                        <img src={x} alt="" />
                    </div>
                </div>
            </div>

            <div className='text-center mt-10'>
                <h1 className='text-[16px] text-[#ABB2BF]'>© Copyright 2026. Made by Chandan</h1>
            </div>

        </div>
    );
};

export default Footer;