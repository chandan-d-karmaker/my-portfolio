import React from 'react';
import Dots from './dots';
import box1 from '../assets/rectangle-sm.png'
import box2 from '../assets/rectangle-lg.png'

const Skills = () => {
    return (
        <div className='md:w-4/5 mx-auto bg-[#282C33] md:pb-40 pb-10 px-4 md:px-0'>

            <div className='flex gap-5 items-center'>
                <h1 className='text-2xl md:text-3xl font-medium'><span className='text-[#C778DD]'>#</span>skills</h1>
                <div className='border border-[#C778DD] h-0 w-full'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className='relative hidden md:block'>
                    <Dots pos="top-10 left-15" />
                    <Dots pos="top-50 left-70" />
                    <img src={box1} alt="Box 1" className='absolute top-7 left-50 animate-[spin_5s_linear_infinite]' />
                    <img src={box2} alt="Box 2" className='absolute top-50 left-20 animate-[spin_5s_linear_infinite]' />
                </div>
                <div>
                    <div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none backdrop-blur-3xl">
                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Language</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <p className='font-[16px] text-[#ABB2BF]'>JavaScript</p>
                                    <p className='font-[16px] text-[#ABB2BF]'>C</p>
                                    <p className='font-[16px] text-[#ABB2BF]'>C++</p>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none mt-10 backdrop-blur-3xl">

                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Database</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <p className='font-[16px] text-[#ABB2BF]'>MongoDB</p>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none mt-10 backdrop-blur-3xl">

                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Others</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <p className='font-[16px] text-[#ABB2BF]'>HTML</p>
                                    <p className='font-[16px] text-[#ABB2BF]'>CSS</p>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none mt-10 backdrop-blur-3xl">

                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Tools</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <p className='font-[16px] text-[#ABB2BF]'>VSCode</p>
                                    <p className='font-[16px] text-[#ABB2BF]'>Git</p>
                                    <p className='font-[16px] text-[#ABB2BF]'>Figma</p>
                                    <p className='font-[16px] text-[#ABB2BF]'>Netlify</p>
                                    <p className='font-[16px] text-[#ABB2BF]'>Render</p>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none mt-10 backdrop-blur-3xl">

                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Frameworks</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <p className='font-[16px] text-[#ABB2BF]'>React</p>
                                    
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Skills;