import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">

                {/* content */}
                <div className="card">
                    <div>
                        <img src={project.thumbnail} alt={project.title} />
                    </div>
                    <div>
                        <h2>{project.tag}</h2>
                    </div>
                    <div>
                        <h2>{project.title}</h2>
                        <p>{project.subtitle}</p>
                    </div>
                    <div>
                        {project.actions.map((action, index) => (
                            <a key={index} href={action.href} className="text-[#C778DD]">{action.label}</a>
                        ))}
                    </div>
                </div>

                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </a>
        </div>
    );
};

export default ProjectCard;