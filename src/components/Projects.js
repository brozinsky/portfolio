import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
        title: 'Clothing Store',
        tags: ['react', 'css'],
        type: 'e-commerce'
    },
    {
        title: 'Movies App',
        tags: ['react', 'css', 'api'],
        type: 'App'
    },
    {
        title: 'Jacks or Better',
        tags: ['react', 'css'],
        type: 'Game'
    },
    {
        title: 'Piano App',
        tags: ['html', 'css', 'js'],
        type: 'App'
    },
    {
        title: 'Architecture studio website',
        tags: ['html', 'sass', 'js'],
        type: 'Website'
    },
    {
        title: 'Delivery company website',
        tags: ['html', 'sass', 'js'],
        type: 'Website'
    }
]

const Projects = () => {
    return (
        <div>
            <section className="projects-section">
                <h2 className="projects-title">_Projects</h2>
                {projects.map(project =>
                    <ProjectCard title={project.title} tags={project.tags} type={project.type} />
                )}
            </section>
        </div>
    )
}

export default Projects
