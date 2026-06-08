import React from 'react';
// Import the file directly
import resumePDF from '../assets/chandan_resume.pdf'; 
import { FaDownload } from "react-icons/fa6";

const ResumeDownload = () => {
  return (
    <a
      href={resumePDF}
      download="chandan_resume.pdf"
      className='flex gap-2 items-center'
    >
      Download Resume <FaDownload />
    </a>
  );
};

export default ResumeDownload;