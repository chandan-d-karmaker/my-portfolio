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
                    <p className="text-5xl font-black mb-4 bg-[url('./assets/bg-gray.jpeg')] bg-cover bg-clip-text text-transparent">CHANDAN KARMAKER</p>
                    <h1 className='text-[16px] text-[#ABB2BF]'>Being Full-Stack web developer</h1>
                </div>

                <div className='text-center space-y-4'>
                    <h1 className='text-2xl font-medium'>Socials</h1>
                    <div className='flex items-center justify-center gap-4'>
                        <a href="https://linkedin.com/in/chandankarmaker" target='_blank'>
                            <img src={linkedin} alt="" />

                        </a>
                        <a href="https://github.com/chandan-d-karmaker" target='_blank'>
                            <img src={github} alt="" />

                        </a>
                        <a href="https://discord.com/users/725361207741251665" target='_blank'>
                            <img src={discord} alt="" />

                        </a>
                        <a href="https://x.com/chandank202" target='_blank'>
                            <img src={x} alt="" />

                        </a>
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