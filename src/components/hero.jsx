import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero-ck.png'
import logoBox from '../assets/LogoBox.svg'
import Dots from './dots';
import TypingAnimation from './TypingAnimation';
import MagneticButton from './MagneticButton';
import { Link } from 'react-scroll';


const QuoteBlock = () => {
    return (
        <div className='md:w-[60%] mx-auto mt-20'>
            <div className="flex flex-col  md:items-center">
                <div className="p-8 border bg-[url('./assets/bg-gray.jpeg')] bg-cover border-[#ABB2BF] ">
                    <h1 className='text-2xl font-medium text-white'>With great power comes great electricity bill</h1>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='inline-flex'>
                    <h1 className='text-2xl p-4 border border-[#ABB2BF] border-t-0'>- A Wise Man</h1>
                </div>
            </div>
        </div>
    )
}

const Hero = ({ setShowForm }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <div id='hero' className='md:w-4/5 mx-auto bg-[#282C33] md:py-40 py-10 px-4 md:px-0'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                {/* left side */}
                <motion.div 
                    className='flex justify-between'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className='z-20 bg-[#282C33]'>
                        <motion.h1 
                            className='text-4xl text-white font-semibold mb-8'
                            variants={itemVariants}
                        >
                            Chandan is a <br />
                            <TypingAnimation roles={['MERN Stack Developer']} />
                        </motion.h1>

                        <motion.p 
                            className='text-[#ABB2BF] leading-6 text-[16px] mb-6'
                            variants={itemVariants}
                        >
                            He crafts responsive websites where technologies meet creativity
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                        >
                            <Link to='contacts' smooth={true}
                                duration={800}
                                activeClass="active"
                                spy={true} className='cursor-pointer'>
                                <MagneticButton 
                                    onClick={() => setShowForm(true)}
                                    className="border border-[#C778DD] text-[#C778DD] px-5 py-2 mt-5 hover:bg-[url('./assets/bg-gray.jpeg')] bg-cover  transition-colors duration-300"
                                >
                                    Contact me!!
                                </MagneticButton>
                            </Link>
                        </motion.div>


                    </div>
                </motion.div>

                {/* right side */}
                <motion.div 
                    className='flex flex-col relative'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <img src={heroImg} alt="Hero" className='z-10' width={400} height={800} />
                    <button className="border border-[#C778DD] text-[#ABB2BF] px-5 py-2 backdrop-blur-3xl bg-[url('./assets/bg-gray.jpeg')] bg-cover z-50 flex gap-3 items-center justify-center">
                        <div className='flex items-center justify-center'>
                            <div className="inline-grid *:[grid-area:1/1] mr-4">
                                <div className="status status-xl status-primary animate-ping"></div>
                                <div className="status status-xl status-primary"></div>
                            </div>
                        </div>
                        <h1><span>Currently working on</span> <span className='font-semibold text-white'>portfolio</span></h1> </button>
                    <div className='flex justify-center'>
                        <img
                            src="https://komarev.com/ghpvc/?username=chandan-d-karmaker&color=blue&style=for-the-badge" width="40%"
                            alt="Profile Views"
                        />
                    </div>
                    <img src={logoBox} alt="Logo Box" className='absolute md:top-10 top-5 left-0' />

                    <Dots pos='top-50 right-15' animation='hover:animate-bounce' />

                </motion.div>
            </div>

            <QuoteBlock />


        </div>
    );
};

export default Hero;