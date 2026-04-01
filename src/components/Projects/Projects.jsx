import React, { use } from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {

    const projectData = use(projects);

    return (
        <div className='w-4/5 mx-auto bg-[#282C33]'>
            <div className='flex gap-5 items-center'>
                <h1 className='text-3xl font-medium'><span className='text-[#C778DD]'>#</span>projects</h1>
                <div className='border border-[#C778DD] h-0 w-full'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    projectData.map(project => <ProjectCard key={project.title} project={project} />)
                }

            </div>
        </div>
    );
};

export default Projects;