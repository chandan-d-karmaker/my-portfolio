import React from 'react';
import { motion } from 'framer-motion';
import Dots from './dots';
import box1 from '../assets/rectangle-sm.png'
import box2 from '../assets/rectangle-lg.png'
import reactIcon from '../assets/react.svg'

const SkillBadge = ({ children }) => {
    return (
        <motion.p 
            className='font-[16px] text-[#ABB2BF] cursor-pointer'
            whileHover={{ 
                scale: 1.05,
                color: '#C778DD',
                textShadow: '0 0 8px rgba(199, 120, 221, 0.6)'
            }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.p>
    );
};

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
                    <Dots pos="top-50 left-50" />
                    <img src={box1} alt="Box 1" className='absolute top-7 left-50 animate-[bounce_2s_linear_infinite]' />
                    <img src={box2} alt="Box 2" className='absolute top-50 left-100 animate-[bounce_2s_linear_infinite]' />
                    <img src={reactIcon} alt="reactIcon" className='w-20 h-20 absolute top-50 left-20 animate-[spin_5s_linear_infinite]' />
                </div>
                <div>
                    <div className='z-50 bg-[#282C33] backdrop-blur-3xl'>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none backdrop-blur-3xl">
                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Language</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <SkillBadge>JavaScript</SkillBadge>
                                    <SkillBadge>C</SkillBadge>
                                    <SkillBadge>C++</SkillBadge>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none mt-10 backdrop-blur-3xl">

                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Database</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <SkillBadge>MongoDB</SkillBadge>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none mt-10 backdrop-blur-3xl">

                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Others</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <SkillBadge>HTML</SkillBadge>
                                    <SkillBadge>CSS</SkillBadge>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none mt-10 backdrop-blur-3xl">

                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Tools</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <SkillBadge>VSCode</SkillBadge>
                                    <SkillBadge>Git</SkillBadge>
                                    <SkillBadge>Figma</SkillBadge>
                                    <SkillBadge>Netlify</SkillBadge>
                                    <SkillBadge>Render</SkillBadge>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex flex-col border border-[#ABB2BF] rounded-none mt-10 backdrop-blur-3xl">

                            <div className='border-b border-[#ABB2BF] p-2 '>
                                <h2>Frameworks</h2>
                            </div>
                            <div className='p-4 space-y-4'>
                                <div>
                                    <SkillBadge>REACTjs</SkillBadge>
                                    <SkillBadge>NEXTjs</SkillBadge>
                                    
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