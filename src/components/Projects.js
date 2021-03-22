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
        tag: [
            {
                name: 'react',
                icon: reactIcon
            },
            {
                name: 'css',
                icon: cssIcon
            },
        ],
        technologies: ['React', 'Styled-components', 'Firebase', 'Gsap', 'Material UI'],
        info: '',
        type: 'e-commerce',
        img: project1,
        githubUrl: 'https://github.com/brozinsky/clothing-store',
        webUrl: 'https://brozinsky.github.io/clothing-store/'
    },
    {
        title: 'Movies App',
        tag: [
            {
                name: 'react',
                icon: reactIcon
            },
            {
                name: 'css',
                icon: cssIcon
            },
            {
                name: 'api',
                icon: 'api'
            },
        ],
        technologies: ['React', 'Redux', 'CSS', 'MovieDB API', 'Gsap'],
        info: '',
        type: 'App',
        img: project2,
        githubUrl: 'https://github.com/brozinsky/movies-app',
        webUrl: 'https://brozinsky.github.io/movies-app/'
    },
    {
        title: 'Jacks or Better',
        tag: [
            {
                name: 'react',
                icon: reactIcon
            },
            {
                name: 'css',
                icon: cssIcon
            },
        ],
        technologies: ['React', 'CSS'],
        info: '',
        type: 'Game',
        img: project3,
        githubUrl: 'https://github.com/brozinsky/videopoker-jacks-or-better',
        webUrl: 'https://brozinsky.github.io/videopoker-jacks-or-better/'
    },
    {
        title: 'Piano App',
        tag: [
            {
                name: 'html',
                icon: htmlIcon
            },
            {
                name: 'css',
                icon: cssIcon
            },
            {
                name: 'js',
                icon: jsIcon
            },
        ],
        technologies: ['HTML', 'CSS', 'Javascript', 'ToneJS'],
        info: "Simple app that shows a selected scale or chord on a key board based on any root note. My first web application made with Javascript. Its using a ToneJS library to play audio samples.",
        type: 'App',
        img: project4,
        githubUrl: 'https://github.com/brozinsky/piano-chords-and-scales',
        webUrl: 'https://brozinsky.github.io/piano-chords-and-scales/'
    },
    {
        title: 'Architecture studio website',
        tag: [
            {
                name: 'html',
                icon: htmlIcon
            },
            {
                name: 'sass',
                icon: sassIcon
            },
            {
                name: 'js',
                icon: jsIcon
            },
        ],
        technologies: ['HTML', 'SASS', 'Javascript'],
        info: '',
        type: 'Website',
        img: project5,
        githubUrl: 'https://github.com/brozinsky/architecture-studio-website',
        webUrl: 'https://brozinsky.github.io/architecture-studio-website/'
    },
    {
        title: 'Delivery company website',
        tag: [
            {
                name: 'html',
                icon: htmlIcon
            },
            {
                name: 'sass',
                icon: sassIcon
            },
            {
                name: 'js',
                icon: jsIcon
            },
        ],
        technologies: ['HTML', 'SASS', 'Javascript'],
        info: '',
        type: 'Website',
        img: project6,
        githubUrl: 'https://github.com/brozinsky/logistics-website',
        webUrl: 'https://brozinsky.github.io/logistics-website/'
    }
]

const Projects = () => {

    return (
        <ProjectsSection id="projects">
            <Title>_Projects</Title>

            {projects.map(project =>
                <ProjectCard
                    title={project.title}
                    tag={project.tag}
                    icons={project.tagIcons}
                    technologies={project.technologies}
                    info={project.info}
                    type={project.type}
                    img={project.img}
                    ithubUrl={project.githubUrl}
                    webUrl={project.webUrl}
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
    margin: 4rem 5rem 2rem 5rem;
`

export default Projects
