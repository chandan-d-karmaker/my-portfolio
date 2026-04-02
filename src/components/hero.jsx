import React from 'react';
import heroImg from '../assets/heroImg.png'
import logoBox from '../assets/LogoBox.svg'
import Dots from './dots';
import Ellipse from '../assets/Ellipse.svg'


const QuoteBlock = () => {
    return (
        <div className='md:w-[60%] mx-auto mt-20' >
            <div className="flex flex-col md:items-center">
                <div className='p-8 border border-[#ABB2BF] '>
                    <h1 className='text-2xl font-medium text-white'>With great power comes great electricity bill</h1>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='inline-flex'>
                    <h1 className='text-2xl p-4 border border-[#ABB2BF] border-t-0'>- Spooder Man</h1>
                </div>
            </div>
        </div>
    )
}

const Hero = () => {
    return (
        <div id='hero' className='md:w-4/5 mx-auto bg-[#282C33] md:py-40 py-10 px-4 md:px-0'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                {/* left side */}
                <div className='flex justify-between'>
                    <div className='z-20 bg-[#282C33]'>
                        <h1 className='text-4xl text-white font-semibold mb-8'>Chandan is a <br /> <span className='text-[#C778DD]'>Full-Stack web developer</span></h1>

                        <p className='text-[#ABB2BF] leading-6 text-[16px] mb-6'>He crafts responsive websites where technologies meet creativity</p>

                        <button className='border border-[#C778DD] text-[#C778DD] px-5 py-2 mt-5 hover:bg-[#C778DD] hover:text-[#282C33] transition-colors duration-300 hidden md:flex'>Contact me!!</button>
                    </div>
                </div>

                {/* right side */}
                <div className='flex flex-col relative'>
                    <img src={heroImg} alt="Hero" className='z-10' />
                    <button className='border border-[#C778DD] text-[#ABB2BF] px-5 py-2'>Currently working on <span className='font-semibold text-white'>portfolio</span> </button>
                    <img src={logoBox} alt="Logo Box" className='absolute md:top-10 top-5 left-0' />

                    <Dots pos='top-50 right-15' animation='hover:animate-bounce'/>

                </div>
            </div>

            <QuoteBlock />


        </div>
    );
};

export default Hero;