import React, { use } from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {

    const projectData = use(projects);
    return (
        <div>
            <h1>#projects</h1>
            <hr />

            <div>
                {
                    projectData.map(project => <ProjectCard key={project.title} project={project} />)
                }
                
            </div>
        </div>
    );
};

export default Projects;