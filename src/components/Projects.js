import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { StyledComponents, Firebase, Javascript, Css3, Html5, ReactLogo, Sass, Graphql, Heroku } from '@styled-icons/simple-icons'
import { Redux } from '@styled-icons/boxicons-logos'

import ProjectCard from './ProjectCard';
import BgShape1 from './svg/BgShape1'
import BgShape2 from './svg/BgShape2'

import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.png";
import project4 from "../images/project-4.png";
import project5 from "../images/project-5.png";
import project6 from "../images/project-6.png";
import project7 from "../images/project-7.png";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const StyledCompIocn = styled(StyledComponents)`
margin-bottom: 5px;
transform: scale(0.9);
`
const HerokuIcon = styled(Heroku)`
margin-bottom: 5px;
transform: scale(0.9);
`
const ReduxIcon = styled(Redux)`
margin-bottom: 5px;
transform: scale(0.8);
`
const GraphqlIcon = styled(Graphql)`
margin-bottom: 5px;
transform: scale(0.7);
`
const FirebaseIcon = styled(Firebase)`
margin-bottom: 5px;
transform: scale(0.7);
`
const HtmlIcon = styled(Html5)`
margin-bottom: 5px;
transform: scale(0.6);
`
const CssIcon = styled(Css3)`
margin-bottom: 5px;
transform: scale(0.6);
`
const SassIcon = styled(Sass)`
margin-bottom: 5px;
transform: scale(0.6);
`
const JavascriptIcon = styled(Javascript)`
margin-bottom: 5px;
transform: scale(0.6);
`
const ReactIcon = styled(ReactLogo)`
margin-bottom: 5px;
transform: scale(0.7);
`
const sassIcon = <SassIcon className="sass-icon" />
const reactIcon = <ReactIcon className="react-icon" />
const htmlIcon = <HtmlIcon className="html-icon" />
const cssIcon = <CssIcon className="css-icon" />
const graphqlIcon = <GraphqlIcon className="graphql-icon" />
const herokuIcon = <HerokuIcon className="heroku-icon" />

const jsIcon = <JavascriptIcon className="javascript-icon" />
const firebaseIcon = <FirebaseIcon className="firebase-icon" />
const styledIcon = <StyledCompIocn className="styled-icon" />
const reduxIcon = <ReduxIcon className="redux-icon" />

const projects = [
    {
        title: 'Handmade Store',
        tag: [
            {
                name: 'react',
                icon: reactIcon,
                tooltip: 'React'
            },
            {
                name: 'sass',
                icon: sassIcon,
                tooltip: 'Sass'
            },
            {
                name: 'graphql',
                icon: graphqlIcon,
                tooltip: 'GraphQL'
            },
            {
                name: 'heroku',
                icon: herokuIcon,
                tooltip: 'Heroku and Hasura'
            },
        ],
        technologies: ['Main technology - React', 'Styled in SASS with BEM',
            'API made in Hasura and deployed on Heroku',
            'Designed using Figma',
            'Fully responsive mobile first design',
            'Designed using Figma'],
        info: 'An e-commerce static web application. Store has a cart to add/remove items, it shows the total price and sends user to checkout. Routes implemented with React router, including seamlessly moving between pages. Styling made with Sass. Database on GraphQL server, API consumed with Apollo Client.',
        type: 'e-commerce',
        img: project7,
        githubUrl: 'https://github.com/brozinsky/handmade-store',
        webUrl: 'https://brozinsky.github.io/handmade-store/'
    },
    {
        title: 'Clothing Store',
        tag: [
            {
                name: 'react',
                icon: reactIcon,
                tooltip: 'React'
            },
            {
                name: 'styled-components',
                icon: styledIcon,
                tooltip: 'Styled Components'
            },
            {
                name: 'firebase',
                icon: firebaseIcon,
                tooltip: 'Firebase'
            },
        ],
        technologies: ['Main technology - React', 'Styling using Styled-Components',
            'Products data stored in Firebase',
            'Animations in Framer Motion',
            'UI components from Material UI library',
            'Designed using Figma'],
        info: 'An e-commerce static web application. Loading of products and data storage from Firebase. App has a cart to add/remove items, it shows the total price and sends user to checkout. Routes implemented with React router, including seamlessly moving between pages. Styling made with Styled Components with the use of Material UI elements. ',
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
                icon: reactIcon,
                tooltip: 'React'
            },
            {
                name: 'redux',
                icon: reduxIcon,
                tooltip: 'Redux'
            },
            {
                name: 'css',
                icon: cssIcon,
                tooltip: 'CSS'
            },
            {
                name: 'api',
                icon: 'api',
                tooltip: 'TMDB Api'
            },
        ],
        technologies: ['React',
            'State management using Redux',
            'Styling in CSS',
            'The Movie Database (TMDb) API'],
        info: "A movie search app built with ReactJS. It uses The Movie Database (TMDb) API to display data. App's features include search movies by title, list popular movies, view details of a selected movie (cast, genres, user scores).",
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
                icon: reactIcon,
                tooltip: 'React'
            },
            {
                name: 'css',
                icon: cssIcon,
                tooltip: 'CSS'
            },
        ],
        technologies: ['Main technology - React',
            'Styling made in CSS',
            'Designed using Figma'],
        info: "Jacks or Better is the most common casino game variation of video poker based on five-card draw poker. It's a mix of a slots machine and poker. My first application where I used React JS as a main technology. Styling made with simple CSS.",
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
                icon: htmlIcon,
                tooltip: 'HTML'
            },
            {
                name: 'css',
                icon: cssIcon,
                tooltip: 'CSS'
            },
            {
                name: 'js',
                icon: jsIcon,
                tooltip: 'Javascript'
            },
        ],
        technologies: ['HTML and CSS',
            'App funcionality made with vanilla Javascript',
            'Audio managed with ToneJS library'],
        info: "Simple app useful for beginner piano players. It shows a selected scale or chord on a key board based on a chosen root note. My first web application made with Javascript. It's using a ToneJS library to play audio samples.",
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
                icon: htmlIcon,
                tooltip: 'HTML'
            },
            {
                name: 'sass',
                icon: sassIcon,
                tooltip: 'Sass'
            },
        ],
        technologies: ['HTML',
            'styled in SASS with BEM',
            'Fully responsive mobile first design',
            'Designed using Figma'],
        info: 'An architecture studio single page website template with photo gallery, dynamic animations and contact form. Fully responsive mobile first design, made with HTML, styling and animations made with SASS. ',
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
                icon: htmlIcon,
                tooltip: 'HTML'
            },
            {
                name: 'sass',
                icon: sassIcon,
                tooltip: 'Sass'
            },
        ],
        technologies: ['HTML', 'styled in SASS with BEM',
            'Fully responsive mobile first design',
            'Designed using Figma'],
        info: 'Example of a delivery company single page website template with contact form. My first static website. Fully responsive, made with HTML styling and animations made with SASS. ',
        type: 'Website',
        img: project6,
        githubUrl: 'https://github.com/brozinsky/logistics-website',
        webUrl: 'https://brozinsky.github.io/logistics-website/'
    }
]

const Projects = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    //handling parallax scrolling background elements
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {

        // const title = document.querySelector(".projects-title");
        const projects = document.querySelectorAll(".project");

        projects.forEach(project => {
            gsap.fromTo(project, { y: '+=100', opacity: 0 },
                {
                    y: 0, opacity: 1, stagger: 0.2, duration: 0.8,
                    scrollTrigger: {
                        trigger: project,
                        start: 'top 85%',
                        ease: 'power3. out',
                    }
                })
        })
    }, [])

    return (
        <ProjectsSection
            id="projects">
            <Title className={'projects-title'}>_Projects</Title>
            {projects.map((project, i) =>
                <ProjectCard
                    key={i}
                    title={project.title}
                    tag={project.tag}
                    icons={project.tagIcons}
                    technologies={project.technologies}
                    info={project.info}
                    type={project.type}
                    img={project.img}
                    githubUrl={project.githubUrl}
                    webUrl={project.webUrl}
                />
            )}
            <BgPosition1 style={{ transform: `translateY(${offsetY * 0.15}px)` }}> <BgShape1 /></BgPosition1>
            <BgPosition2 style={{ transform: `translateY(${offsetY * 0.1}px)` }}> <BgShape2 /></BgPosition2>
        </ProjectsSection>
    )
}

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

const BgPosition1 = styled.div`
 position: absolute;
 top: 10%;
 left: -5%;
 z-index: -10;
 transform: scale(1.2);
 @media (max-width: 768px) {
    display: none;
}
`

const BgPosition2 = styled.div`
 position: absolute;
 bottom: 0;
 right: -5%;
 z-index: -10;
 transform: scale(1.2);
 @media (max-width: 768px) {
    display: none;
}
`

const Title = styled.h2`
    text-transform: uppercase;
    color: #F13F3F;
    font-size: 2.4rem;
    font-weight: 400;
    width: 100%;
    margin: 4rem 5rem 2rem 5rem;
    @media (max-width: 1200px) {
    text-align: center;
}
`

export default Projects
