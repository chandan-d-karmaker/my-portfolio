import React from 'react';
import Ellipse from '../assets/Ellipse.svg'

const Dots = ({ pos }) => {
    return (
        <div className={`grid grid-rows-5 gap-1 w-22 h-22 absolute ${pos} z-20`}>
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
    );
};

export default Dots;