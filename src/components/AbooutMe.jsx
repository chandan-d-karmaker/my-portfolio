import React from 'react';
import img from '../assets/about-me.png'
import Dots from './dots';
import box1 from '../assets/rectangle-sm.png'
import box2 from '../assets/rectangle-lg.png'
import reactIcon from '../assets/react.svg'

const FunFacts = () => {
    return (
        <div className=' bg-[#282C33]'>
            <div className='flex gap-5 items-center mb-10'>
                <div className='flex flex-nowrap'>
                    <h1 className='text-2xl md:text-3xl font-medium flex flex-nowrap '><span className='text-[#C778DD]'>#</span>facts</h1>
                </div>
                <div className='border border-[#C778DD] h-0 w-full'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex max-w-lg gap-10 flex-wrap'>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I love One Piece
                    </div>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I love One Piece
                    </div>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I love One Piece
                    </div>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I love One Piece
                    </div>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I love One Piece
                    </div>
                </div>

                <div className='relative hidden md:block'>
                    <Dots pos="top-10 left-15" />
                    <Dots pos="top-50 left-50" />
                    <img src={box1} alt="Box 1" className='absolute top-7 left-50 animate-[bounce_2s_linear_infinite]' />
                    <img src={box2} alt="Box 2" className='absolute top-50 left-100 animate-[bounce_2s_linear_infinite]' />
                    <img src={reactIcon} alt="reactIcon" className='w-20 h-20 absolute top-50 left-20 animate-[spin_5s_linear_infinite]' />
                </div>
            </div>

        </div>
    )
}

const AbooutMe = () => {
    return (
        <div id='about-me' className='md:w-4/5 md:pb-40 pb-10 px-4 md:px-0 mx-auto bg-[#282C33]'>

            <div className='flex gap-5 items-center'>
                <div className='flex flex-nowrap'>
                    <h1 className='text-2xl md:text-3xl font-medium flex flex-nowrap'><span className='text-[#C778DD]'>#</span>me</h1>
                </div>
                <div className='border border-[#C778DD] h-0 w-full'></div>
            </div>

            <div className='mt-10 mb-10 flex flex-col lg:flex-row items-center justify-between gap-10'>
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
                    <Dots pos='top-20 left-0' animation='animate-bounce' />
                    <Dots pos='bottom-20 right-10' animation='animate-bounce' />
                </div>
            </div>

            <FunFacts />

        </div>
    );
};

export default AbooutMe;