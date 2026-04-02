import React, { use } from 'react';
import ProjectCard from './ProjectCard';
import { FaArrowCircleRight } from "react-icons/fa";
import Dots from '../dots';

const Projects = ({ projects }) => {

    const projectData = use(projects);

    return (
        <div className='md:w-4/5 md:pb-40 pb-10 px-4 md:px-0 mx-auto bg-[#282C33] relative'>
            <div className='flex gap-5 justify-between mb-10'>
                <div className='flex gap-5 items-center w-4/5'>
                    <h1 className='text-2xl md:text-3xl font-medium'><span className='text-[#C778DD]'>#</span>projects</h1>
                    <div className='border border-[#C778DD] h-0 w-[70%]'></div>
                </div>
                <a href='https://github.com/chandan-d-karmaker?tab=repositories' target='_blank' className='text-[16px] font-medium flex items-center gap-1 pr-1'>View all <FaArrowCircleRight /></a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10'>
                {
                    projectData.map(project => <ProjectCard key={project.title} project={project} />)
                }
            </div>

            {/* <Dots pos="top-10 -left-30 hidden md:block" /> */}
            {/* <Dots pos="top-70 -right-30 hidden md:block" /> */}
        </div>
    );
};

export default Projects;