import React from 'react'
import ProjectCard from './ProjectCard'

import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.png";
import project4 from "../images/project-4.png";
import project5 from "../images/project-5.png";
import project6 from "../images/project-6.png";


const projects = [
    {
        title: 'Clothing Store',
        tags: ['react', 'css'],
        type: 'e-commerce',
        url: project1,
    },
    {
        title: 'Movies App',
        tags: ['react', 'css', 'api'],
        type: 'App',
        url: project2,
    },
    {
        title: 'Jacks or Better',
        tags: ['react', 'css'],
        type: 'Game',
        url: project3,
    },
    {
        title: 'Piano App',
        tags: ['html', 'css', 'js'],
        type: 'App',
        url: project4,
    },
    {
        title: 'Architecture studio website',
        tags: ['html', 'sass', 'js'],
        type: 'Website',
        url: project5,
    },
    {
        title: 'Delivery company website',
        tags: ['html', 'sass', 'js'],
        type: 'Website',
        url: project6,
    }
]

const Projects = () => {
    return (
        <div>
            <section className="projects-section">
                <h2 className="projects-title">_Projects</h2>
                {projects.map(project =>
                    <ProjectCard title={project.title} tags={project.tags} type={project.type} url={project.url} />
                )}
            </section>
        </div>
    )
}

export default Projects
