import React from 'react';
import discord from '../assets/Discord.svg'
import mail from '../assets/Email.svg'
import { TextField } from '@mui/material';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaCircleArrowDown } from "react-icons/fa6";

const Form = () => {
    return (
        <div className='md:p-8 space-y-4 mb-10 md:mb-0'>
            <div className='flex gap-4'>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#ABB2BF",
                        },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '0',
                            '& fieldset': {
                                borderColor: '#ABB2BF',
                            },
                            '&:hover fieldset': {
                                borderColor: '#ABB2BF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ABB2BF',
                            },
                        },
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#ABB2BF",
                        },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '0',
                            '& fieldset': {
                                borderColor: '#ABB2BF',
                            },
                            '&:hover fieldset': {
                                borderColor: '#ABB2BF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ABB2BF',
                            },
                        },
                    }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Title" className='w-full text-[#ABB2BF]'
                    variant="outlined"
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#ABB2BF",
                        },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '0',
                            '& fieldset': {
                                borderColor: '#ABB2BF',
                                textDecorationColor: '#ABB2BF'
                            },
                            '&:hover fieldset': {
                                borderColor: '#ABB2BF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ABB2BF',
                            },
                        },
                    }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Message" className='w-full text-[#ABB2BF]'
                    multiline
                    minRows={4}
                    maxRows={10}
                    variant="outlined"
                    sx={{
                        "& .MuiInputLabel-root": {
                            color: "#ABB2BF",
                        },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '0',
                            '& fieldset': {
                                borderColor: '#ABB2BF',
                                textDecorationColor: '#ABB2BF'
                            },
                            '&:hover fieldset': {
                                borderColor: '#ABB2BF',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ABB2BF',
                            },
                        },
                    }}
                />
            </div>

            <button className='btn bg-transparent rounded-none border border-[#ABB2BF] shadow-none hover:bg-[#C778DD] hover:text-[#282C33]'>Send</button>

        </div>
    )
}

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

                    {showForm && <Form/>}

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