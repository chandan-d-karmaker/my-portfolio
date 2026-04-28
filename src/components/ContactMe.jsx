import React from 'react';
import discord from '../assets/Discord.svg'
import mail from '../assets/Email.svg'
import { TextField } from '@mui/material';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaCircleArrowDown } from "react-icons/fa6";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS IDs
    emailjs.sendForm('service_llb3zub', 'template_4pa3smg', form.current, '6ugcUcJSy3x2LvoNc')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          e.target.reset(); // Clear the form
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong.");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-md bg-[#282C33] p-6 rounded">
      <div className="flex gap-4">
        {/* The 'name' attribute must match the variables in your EmailJS template */}
        <input type="text" name="name" placeholder="Name" required className="bg-transparent border border-gray-500 p-2 text-white w-full" />
        <input type="email" name="email" placeholder="Email" required className="bg-transparent border border-gray-500 p-2 text-white w-full" />
      </div>
      <input type="text" name="title" placeholder="Title" required className="bg-transparent border border-gray-500 p-2 text-white" />
      <textarea name="message" placeholder="Message" rows="5" required className="bg-transparent border border-gray-500 p-2 text-white"></textarea>
      
      <button type="submit" className="border border-gray-500 text-white w-24 p-2 hover:bg-gray-700 transition">
        Send
      </button>
    </form>
  );
};


const ContactMe = ({showForm, setShowForm}) => {
    return (
        <div id='contacts' className='md:w-4/5 md:pb-25 lg:pb-30 pb-10 px-4 md:px-0 mx-auto bg-[#282C33]'>

            <div className='flex gap-5 items-center'>
                <div className='flex flex-nowrap'>
                    <h1 className='text-2xl md:text-3xl font-medium flex flex-nowrap'><span className='text-[#C778DD]'>#</span>contacts</h1>
                </div>
                <div className='border border-[#C778DD] h-0 w-full'></div>
            </div>

            <div className='mt-10 flex flex-col md:flex-row items-center justify-between md:gap-5 gap-2'>
                <div>
                    <div className='lg:max-w-lg md:max-w-sm'>
                        <h1 className='text-[16px] text-[#ABB2BF] font-medium'>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me</h1>

                        <button className='border border-[#C778DD] text-[#C778DD] px-5 py-2 mt-5 hover:bg-[#C778DD] hover:text-[#282C33] transition-colors duration-300 mb-10 md:mb-0 flex justify-center items-center gap-2' onClick={()=> setShowForm(!showForm)}>Connect Now {showForm? <FaCircleArrowDown /> :<FaArrowCircleRight/>}</button>
                    </div>

                    {showForm && <ContactForm/>}

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