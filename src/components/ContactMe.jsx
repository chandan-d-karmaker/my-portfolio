import React from 'react';
import discord from '../assets/Discord.svg'
import mail from '../assets/Email.svg'

const ContactMe = () => {
    return (
        <div id='contacts' className='md:w-4/5 md:pb-40 pb-10 px-4 md:px-0 mx-auto bg-[#282C33]'>

            <div className='flex gap-5 items-center'>
                <div className='flex flex-nowrap'>
                    <h1 className='text-2xl md:text-3xl font-medium flex flex-nowrap'><span className='text-[#C778DD]'>#</span>contacts</h1>
                </div>
                <div className='border border-[#C778DD] h-0 w-full'></div>
            </div>

            <div className='mt-10 flex flex-col md:flex-row items-center justify-between md:gap-10 gap-2'>
                <div className='md:max-w-lg'>
                    <h1 className='text-[16px] text-[#ABB2BF] font-medium'>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me</h1>
                </div>

                <div className='p-4 border border-[#ABB2BF]'>

                    <h1>Message me here</h1>

                    <div className='flex items-center gap-2'>
                        <img src={discord} alt="" />
                        <a href="https://discord.com/users/725361207741251665" className='text-[16px] text-[#ABB2BF]'>Ck</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={mail} alt="" />
                        <a href="mailto:chandankarmaker555@gmail.com" className='text-[16px] text-[#ABB2BF]'>Email Me</a>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ContactMe;