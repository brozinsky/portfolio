import React, { useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjectDetails from './ProjectDetails';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const githubIcon = <FontAwesomeIcon
    icon={faGithub} />
const webIcon = <FontAwesomeIcon
    icon={faGlobe} />

const DetailsImage = ({ title, tag, technologies, info, type, img, githubUrl, webUrl }) => {
    const [details, setDetails] = useState(
        {
            title: null,
            tag: [],
            technologies: [],
            info: '',
            type: '',
            img: '',
            githubUrl: '',
            webUrl: '',
        },
    );

    const handleImageClick = () => {
        console.log(technologies)
        console.log(info)
        setDetails(
            {
                title: title,
                tag: tag,
                technologies: technologies,
                info: info,
                type: type,
                img: img,
                githubUrl: githubUrl,
                webUrl: webUrl,
            },
        )
    }

    const handleCloseClick = () => {
        setDetails(
            {
                title: null,
                tag: [],
                technologies: [],
                info: '',
                type: '',
                img: '',
                githubUrl: '',
                webUrl: ''
            },
        )
    }

    return (
        <>
            {details.title ?
                <>
                    <ProjectDetails
                        title={details.title}
                        tag={details.tag}
                        img={details.img}
                        technologies={details.technologies}
                        info={details.info}
                        type={details.type}
                        githubUrl={details.githubUrl}
                        webUrl={details.webUrl}
                    />
                    <Close onClick={handleCloseClick}>
                    </Close>
                </>
                : null}
            <CardImg
                onClick={handleImageClick}
                src={img} />
        </>
    )
}

const ProjectCard = ({ title, tag, technologies, info, type, img, githubUrl, webUrl }) => {
    return (
        <>
            <CardWrapper>
                <TagWrapper>{
                    tag.map((tag) =>
                        <div
                            className={tag.name + '-tag card-tag'} >
                            <span
                                className={tag.name === 'api' ? 'small' : ''}>
                                {tag.icon} </span>
                        </div>
                    )}
                </TagWrapper>
                <Card>
                    <WireFrame className="wire">
                        <DetailsImage
                            title={title}
                            tag={tag}
                            img={img}
                            technologies={technologies}
                            info={info}
                            type={type}
                            githubUrl={githubUrl}
                            webUrl={webUrl}
                            src={img} />
                    </WireFrame>
                    <Overlay>
                        <CardTitle>{title}</CardTitle>
                        <LinksWrapper>
                            <Link href={githubUrl}>
                                {githubIcon}
                            </Link>
                            <Link href={webUrl}>
                                {webIcon}
                            </Link>

                        </LinksWrapper>
                        <CardType>{type}</CardType>
                    </Overlay>
                </Card>
            </CardWrapper>
        </>
    )
}



const Card = styled.div`
    width: 500px;
    height: 450px;
    position: relative;
    border-radius:  10px;
    border: 1px solid #666;
    overflow: hidden;
    margin: 2rem 2rem;

    @media (max-width: 768px) {
    width: 300px;
    height: 270px;
    }
`

const CardWrapper = styled.div`
    position: relative;
`

const WireFrame = styled.div`
height: 50px;
&::after, &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 100px;
    left: 0;
}
&::after{
    background: linear-gradient(to top right,transparent calc(50% - 1px),
    #666,transparent calc(50% + 1px));
}
&::before {
    background: linear-gradient(to top left,transparent calc(50% - 1px),
    #666,transparent calc(50% + 1px));
}
`

const CardImg = styled.img`
    width: 100%;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.5s;

    &:hover{
        scale: 1.05;
        opacity: 1;
    }
`

const Overlay = styled.div`
    background: #000;
    width: 500px;
    height: 100px;
    position: absolute;
    bottom: 0;

    @media (max-width: 768px) {
    width: 300px;
    height: 100px;
    }
`

const CardTitle = styled.h3`
    text-transform: uppercase;
    text-align: center;
    margin:  0;
    font-size: 1.5rem;
    margin-top: 0.7rem;
    font-weight: 300;
    color: #fff;
    font-family: 'Montserrat', 'Helvetica Neue',
    sans-serif;

    @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0.3rem;
    }
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`
const Link = styled.a`
    color: #c4c4c4;
    margin: 0 2rem;
    font-size: 2rem;
    margin-top: 0.5rem;
    border: solid 1px transparent;
    padding: 0.1rem 1rem;
    position:relative;
    outline:none;

    @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 0.2rem 1rem;
    }

&:hover{
    color: #fff !important;
    cursor: pointer;
}
&:visited{
    outline: none;
}
`

const TagWrapper = styled.div`
    position: absolute;
    top: 18px;
    right: -25px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;

.card-tag{
    transition: 0.15s;
}
.card-tag:hover{
    border: 1px solid transparent;
    color: var(--color-background);
}
.sass-tag:hover {
        box-shadow: 0px 0px 8px 2px var(--color-sass);
        background: var(--color-sass);
}
.html-tag:hover {
        box-shadow: 0px 0px 8px 2px var(--color-html);
        background: var(--color-html);
}
.css-tag:hover {
        box-shadow: 0px 0px 8px 2px var(--color-css);
        background: var(--color-css);
}
.react-tag:hover {
        box-shadow: 0px 0px 8px 2px var(--color-react);
        background: var(--color-react);
}
.js-tag:hover {
        box-shadow: 0px 0px 8px 2px var(--color-javascript);
        background: var(--color-javascript);
}
.api-tag:hover {
        box-shadow: 0px 0px 8px 2px #ffc400;
        background: #ffc400;
}
.redux-tag:hover {
        box-shadow: 0px 0px 8px 2px var(--color-redux);
        background: var(--color-redux);
}
.firebase-tag:hover {
        box-shadow: 0px 0px 8px 2px var(--color-firebase);
        background: var(--color-firebase);
}
.styled-components-tag:hover {
        box-shadow: 0px 0px 8px 2px var(--color-styled-components);
        background: var(--color-styled-components);
}
.card-tag{
    text-transform: uppercase;
    border: 1px solid #C4C4C4;
    border-radius: 2px;
    display: inline-block;
    width: 2.7rem;
    height: 2.7rem;
    text-align: center;
    margin: 0.2rem 0.2rem;
    font-weight: 300;
    font-size: 1.8rem;
    padding: 2px 2px;
    line-height: 2.4rem;
    color: #C4C4C4;
    scale: 0.8;
}
.small{
    font-size: 1rem;
}

`

const CardType = styled.span`
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 0.9rem;
    color: #888;

    @media (max-width: 768px) {
        right: 10px;
        font-size: 0.6rem;
    }
`

const Close = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    transform: translate(1rem,0);
    background: #666;
    position: fixed;
    top: 10vh;
    right: 15vw;
    cursor: pointer;
    line-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    z-index: 9999;

    &:before, &:after{
    position: absolute;
    left: 15px;
    content: ' ';
    height: 25px;
    width: 2px;
    background-color: var(--color-background);
    margin-left: 0.3rem;
    }

    &:before{
        transform: rotate(45deg);
    }

    &:after{
        transform: rotate(-45deg);
    }

    &:hover{
        background: #c2c3d1;
    }
`

export default ProjectCard
