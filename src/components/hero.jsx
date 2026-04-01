import React from 'react';
import heroImg from '../assets/heroImg.png'
import logoBox from '../assets/LogoBox.svg'
import Ellipse from '../assets/Ellipse.svg'

const Hero = () => {
    return (
        <div className='md:w-4/5 mx-auto bg-[#282C33] md:py-40 py-10 px-4 md:px-0'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                {/* left side */}
                <div>
                    <h1 className='text-4xl text-white font-semibold mb-8'>Chandan is a <br /> <span className='text-[#C778DD]'>Full-Stack web developer</span></h1>

                    <p className='text-[#ABB2BF] leading-6 text-[16px] mb-6'>He crafts responsive websites where technologies meet creativity</p>

                    <button className='border border-[#C778DD] text-[#C778DD] px-5 py-2 mt-5 hover:bg-[#C778DD] hover:text-[#282C33] transition-colors duration-300 hidden md:flex'>Contact me!!</button>
                </div>

                {/* right side */}
                <div className='flex flex-col relative'>
                    <img src={heroImg} alt="Hero" className='z-10' />
                    <button className='border border-[#C778DD] text-[#ABB2BF] px-5 py-2'>Currently working on <span className='font-semibold text-white'>portfolio</span> </button>
                    <img src={logoBox} alt="Logo Box" className='absolute top-20 left-0' />

                    <div className='grid grid-rows-5 gap-1 w-22 h-22 absolute bottom-20 right-15 z-20'>
                        <div className='flex justify-between hover:animate-bounce animation-delay-800'>
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                        </div>
                        <div className='flex justify-between hover:animate-bounce animation-delay-800'>
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />

                        </div>
                        <div className='flex justify-between hover:animate-bounce animation-delay-800'>
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />

                        </div>
                        <div className='flex justify-between hover:animate-bounce animation-delay-800'>
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />

                        </div>
                        <div className='flex justify-between hover:animate-bounce animation-delay-800'>

                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                            <img src={Ellipse} alt="Ellipse" className='w-2 h-2 hover:animate-ping animation-delay-800' />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Hero;