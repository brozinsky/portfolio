import React from 'react';
import styled from "styled-components";

import ProjectCard from './ProjectCard';

import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.png";
import project4 from "../images/project-4.png";
import project5 from "../images/project-5.png";
import project6 from "../images/project-6.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const htmlIcon = <FontAwesomeIcon className="html-icon"
    icon={faHtml5} />
const cssIcon = <FontAwesomeIcon className="css-icon"
    icon={faCss3Alt} />
const sassIcon = <FontAwesomeIcon className="sass-icon"
    icon={faSass} />
const jsIcon = <FontAwesomeIcon className="js-icon"
    icon={faJsSquare} />
const reactIcon = <FontAwesomeIcon className="react-icon"
    icon={faReact} />

const projects = [
    {
        title: 'Clothing Store',
        tags: [reactIcon, cssIcon],
        type: 'e-commerce',
        url: project1,
    },
    {
        title: 'Movies App',
        tags: [reactIcon, cssIcon, 'api'],
        type: 'App',
        url: project2,
    },
    {
        title: 'Jacks or Better',
        tags: [reactIcon, cssIcon],
        type: 'Game',
        url: project3,
    },
    {
        title: 'Piano App',
        tags: [htmlIcon, cssIcon, jsIcon],
        type: 'App',
        url: project4,
    },
    {
        title: 'Architecture studio website',
        tags: [htmlIcon, sassIcon, jsIcon],
        type: 'Website',
        url: project5,
    },
    {
        title: 'Delivery company website',
        tags: [htmlIcon, sassIcon, jsIcon],
        type: 'Website',
        url: project6,
    }
]

const Projects = () => {
    return (
        <ProjectsSection id="projects">
            <Title>_Projects</Title>
            {projects.map(project =>
                <ProjectCard title={project.title} tags={project.tags} type={project.type}
                    url={project.url}
                />
            )}
        </ProjectsSection>
    )
}

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

const Title = styled.h2`
    text-transform: uppercase;
    color: #F13F3F;
    font-size: 2.4rem;
    font-weight: 400;
    width: 100%;
    margin: 2rem 5rem;
`

export default Projects
