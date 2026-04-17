import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <div className="hover:cursor-pointer hover:scale-105 hover:bg-base-100 transition-transform duration-300">

                {/* content */}
                <div className="card border border-[#ABB2BF] rounded-none">
                    <div>
                        <img src={project.thumbnail} alt={project.title} className="w-full h-50 object-cover" />
                    </div>
                    <div className='border-b border-[#ABB2BF] p-2 '>
                        <h2>{project.tag}</h2>
                    </div>
                    <div className='p-4 space-y-4'>
                        <div>
                            <h2 className='font-2xl font-medium'>{project.title}</h2>
                            <p className='font-[16px] text-[#ABB2BF]'>{project.subtitle}</p>
                        </div>
                        <div className='flex gap-4 flex-wrap'>
                            {project.actions.map((action, index) => (
                                <a key={index} href={action.href} className="text-[#C778DD] btn bg-transparent hover:bg-[#C778DD33] border border-[#ABB2BF] px-4 py-2 rounded-none" target='_blank'>{action.label}</a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;