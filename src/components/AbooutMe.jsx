import React from 'react';
import img from '../assets/about-me.png'
import Dots from './dots';
import box1 from '../assets/rectangle-sm.png'
import box2 from '../assets/rectangle-lg.png'
import reactIcon from '../assets/react.svg'
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaCircleArrowDown } from "react-icons/fa6";

const FunFacts = () => {
    return (
        <div className=' bg-[#282C33] mb-20'>
            <div className='flex gap-5 items-center mb-20'>
                <div className='flex flex-nowrap'>
                    <h1 className='text-2xl md:text-3xl font-medium flex flex-nowrap '><span className='text-[#C778DD]'>/</span>facts</h1>
                </div>
                <div className='border border-[#C778DD] h-0 w-full'></div>
            </div>
            <div className='relative'>
                <div className='flex max-w-2xl gap-5 flex-wrap'>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I like winter more than summer
                    </div>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I read Manga
                    </div>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        My favorite movie is The Shawshank Redemption
                    </div>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I like pasta and fried rice
                    </div>
                    <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none font-[16px] text-[#ABB2BF] p-2">
                        I've played a lot of video games
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <Dots pos="top-10 right-5" />
                    <Dots pos="top-62 right-40" />
                    <img src={box1} alt="Box 1" className='absolute top-7 right-20 animate-[bounce_2s_linear_infinite]' />
                    <img src={box2} alt="Box 2" className='absolute top-50 right-50 animate-[bounce_2s_linear_infinite] z-100' />
                    <img src={reactIcon} alt="reactIcon" className='w-20 h-20 absolute top-35 right-20 animate-[spin_5s_linear_infinite]' />
                </div>
            </div>

        </div>
    )
}

const AbooutMe = ({ showFact, setShowFact }) => {
    return (
        <div id='about-me' className='md:w-4/5 md:pb-20 pb-10 px-4 md:px-0 mx-auto bg-[#282C33]'>

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

                    <button className='border border-[#C778DD] text-[#C778DD] px-5 py-2 mt-5 hover:bg-[#C778DD] hover:text-[#282C33] transition-colors duration-300 flex justify-center items-center gap-2' onClick={() => setShowFact(!showFact)}>Read more {showFact ? <FaCircleArrowDown /> : <FaArrowCircleRight />}</button>
                </div>

                <div className='relative'>
                    <img src={img} alt="" />
                    <Dots pos='top-20 left-0' animation='animate-bounce' />
                    <Dots pos='bottom-20 right-10' animation='animate-bounce' />
                </div>
            </div>

            {showFact && <FunFacts />}

        </div>
    );
};

export default AbooutMe;