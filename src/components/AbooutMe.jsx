import React from 'react';
import img from '../assets/about-me.png'
import Dots from './dots';

const AbooutMe = () => {
    return (
        <div id='about-me' className='md:w-4/5 md:pb-40 pb-10 px-4 md:px-0 mx-auto bg-[#282C33]'>

            <div className='flex gap-5 items-center'>
                <div className='flex flex-nowrap'>
                    <h1 className='text-2xl md:text-3xl font-medium flex flex-nowrap'><span className='text-[#C778DD]'>#</span>me</h1>
                </div>
                <div className='border border-[#C778DD] h-0 w-full'></div>
            </div>

            <div className='mt-10 flex flex-col lg:flex-row items-center justify-between gap-10'>
                <div className='space-y-8 max-w-lg'>
                    <p className='text-[16px] text-[#ABB2BF]'>hey, I'm Chandan Karmaker!</p>

                    <p className='text-[16px] text-[#ABB2BF] leading-6'>
                        I am a Computer Science & Engineering student and a dedicated MERN Stack Developer with a passion for building functional, scalable, and user-centric web applications. I thrive at the intersection of logical problem-solving and modern frontend aesthetics.
                    </p>
                    <p className='text-[16px] text-[#ABB2BF] leading-6'>
                        My journey in tech is driven by a deep curiosity about how systems work—from the high-level elegance of React and Tailwind CSS to the foundational complexities of Data Structures and Algorithms. Whether I'm optimizing a search algorithm or architecting a responsive UI, I focus on writing clean, maintainable code.
                    </p>
                </div>

                <div className='relative'>
                    <img src={img} alt="" />
                    <Dots pos='top-20 left-0' animation='animate-bounce'/>
                    <Dots pos='bottom-20 right-10' animation='animate-bounce'/>
                </div>
            </div>

        </div>
    );
};

export default AbooutMe;