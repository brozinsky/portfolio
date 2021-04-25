import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';

const githubIcon = <FontAwesomeIcon
    icon={faGithub} />
const webIcon = <FontAwesomeIcon
    icon={faGlobe} />

const ProjectDetails = ({ title, img, technologies, info, tag, githubUrl, webUrl }) => {

    return (
        <Shadow>
            <LineTop
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                }} />
            <LineBot
                initial={{ x: '100vh' }}
                animate={{ x: 0 }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                }}
            />
            <LineLeft
                initial={{ y: '100vh' }}
                animate={{ y: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
            />
            <LineRight
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
            />
            <Card
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0,
                    duration: 0.5,
                }}
            >
                <div className="info-header">
                    <Img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.3,
                        }}
                        src={img} />
                    <div className="info-wrap">
                        <Title
                            initial={{ x: '-100px', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                            }}
                        >{title}
                        </Title>
                        <Underline
                            initial={{ x: '300px', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                            }} />
                        <SubtitleWrapper>
                            <SubtitleAppear
                                initial={{ x: '-100%', opacity: 0 }}
                                animate={{ x: '100%', opacity: 1 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                }}
                            />
                            <Subtitle
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0.8,
                                }}
                            >Features/used technologies:</Subtitle>
                        </SubtitleWrapper>
                        <ul>
                            {technologies.map(item =>
                                <ListItem
                                    initial={{ opacity: 0, x: '-50px', }}
                                    animate={{ opacity: 1, x: '0' }}
                                    transition={{
                                        delay: 0.8,
                                    }}
                                >{item}</ListItem>)}
                        </ul>
                    </div>
                </div>
                <InfoBottom>
                    <motion.div className="details-tags"
                        initial={{ opacity: 0, x: '100px' }}
                        animate={{
                            opacity: 1,
                            x: '0',
                            transition: {
                                delay: 0.6,
                            }
                        }}
                    >
                        {
                            tag.map(tag =>
                                <span className={`${tag.name}-dtag dtag`}>{tag.icon} <span>{tag.name}</span> </span>)
                        }
                    </motion.div>
                    <Info
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.4,
                        }}
                    >
                        {info}
                    </Info>
                    <LinksWrapper>
                        <Link
                            initial={{ y: '-100px', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                            }}
                            href={githubUrl}>
                            {githubIcon} <span>Code</span>
                        </Link>
                        <Link
                            initial={{ y: '-100px', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5,
                            }}
                            href={webUrl}>
                            {webIcon} <span>Live</span>
                        </Link>
                    </LinksWrapper>
                </InfoBottom>
            </Card>
        </Shadow >
    );
}

const Shadow = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.85);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
`

const Card = styled(motion.div)`
    width: 70vw;
    margin: auto;
    height: 80vh;
    background: var(--color-background);
    position: relative;
    z-index: 2;
    /* overflow-y: auto; */
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1200px) {
    height: 100vh;
    width: 100vw;
    position: fixed;
    justify-content: center;
    }

.info-header {
    display: flex;
    flex-direction: row;
    background: none;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    @media (max-width: 1600px) {
        justify-content: space-around;
        width: 80%;
    }

    @media (max-width: 1200px) {
        justify-content: space-around;
        width: 100vw;
    }

    @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 80vw;
    }
}

.info-wrap {
    display: flex;
    flex-direction: column;
    /* height: 400px; */
    max-width: 350px;
    @media (max-width: 768px) {
     /* height: 100%; */
     margin-top: 70px;
     max-width: 300px;
    }
}
.details-tags {
    margin: 0 auto;
    @media (max-width: 768px) {
    display: none;
    }
}

.dtag{
    color: var(--color-background);
    font-size: 1.2rem;
    line-height: 1.2rem;
    width: 5rem;
    opacity: 0.8;
    border-radius: 10px;
    padding: 0.15rem 0.3rem;
    margin: 0 0.5rem;

    @media (max-width: 768px) {
    display: none;
    }

    & svg{
        height: 2rem;
    }
}

.sass-dtag {
        box-shadow: 0px 0px 5px 1.5px var(--color-sass);
        background: var(--color-sass);
}
.html-dtag {
        box-shadow: 0px 0px 5px 1.5px var(--color-html);
        background: var(--color-html);
}
.css-dtag {
        box-shadow: 0px 0px 5px 1.5px var(--color-css);
        background: var(--color-css);
}
 .react-dtag {
       box-shadow: 0px 0px 5px 1.5px var(--color-react);
        background: var(--color-react);
}
.js-dtag {
        box-shadow: 0px 0px 5px 1.5px var(--color-javascript);
        background: var(--color-javascript);
}
.api-dtag {
        box-shadow: 0px 0px 5px 1.5px #ffc400;
        background: #ffc400;
}
.redux-dtag {
        box-shadow: 0px 0px 5px 1.5px var(--color-redux);
        background: var(--color-redux);
}
.firebase-dtag {
        box-shadow: 0px 0px 5px 1.5px var(--color-firebase);
        background: var(--color-firebase);
}
.styled-components-dtag {
        box-shadow: 0px 0px 5px 1.5px var(--color-styled-components);
        background: var(--color-styled-components);
}
`

const Title = styled(motion.h2)`
font-size: 2.5rem;
text-align: center;
margin: 2rem auto 1rem auto;
font-weight: 600;
letter-spacing: 1px;

`

const SubtitleWrapper = styled.div`
height: 30px;
width: 350px;
margin: 1rem 0 0.5rem 0;
overflow:hidden;
position: relative;
@media (max-width: 768px) {
    margin: 0.2rem 0 0.5rem 0;
}
`

const Subtitle = styled(motion.h3)`
font-size: 1.5rem;
text-align: center;
position: absolute;
top: 0;
left: 0;
color: #fff;
z-index: 9000;

@media (max-width: 768px) {
    font-size: 1.2rem;
}
`
const SubtitleAppear = styled(motion.div)`
height: 30px;
width: 350px;
background: #fff;
position: absolute;
top: 0;
right:0;
`

const ListItem = styled(motion.li)`
font-size: 1.15rem;
margin: 0.4rem 0;
font-weight: 300;
color: #bbb;
list-style-type: square;

@media (max-width: 768px) {
    font-size: 1rem;
    list-style-position: inside;
}
`

const InfoBottom = styled.div`
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: none;
    @media (max-width: 768px) {
    margin-top: 1rem;
    height: auto;
    }
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
    max-height: 100%;
    margin-top: 1rem;
    }
`

const Link = styled(motion.a)`
    color: #c4c4c4;
    margin: 0 2rem;
    font-size: 2rem;
    margin-top: 0.5rem;
    border: solid 1px #777;
    padding: 0.4rem 1rem;
    position:relative;
    outline:none;
    text-decoration: none;

    @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.3rem 0.8rem;
    margin-bottom: 1rem;
    }

& span{
        font-size: 1.5rem;
        line-height: 1.5rem;
}

&:hover{
    color: #fff !important;
    cursor: pointer;
}
&:visited{
    outline: none;
    text-decoration: none;
}
`
const Info = styled(motion.div)`
    width: 80%;
    font-size: 1.25rem;
    text-align: justify;
    margin: 0 auto;
    font-weight: 200;
    line-height: 1.6rem;
    @media (max-width: 768px) {
    width: 50vw;
    min-width: 384px;
    }

    @media (max-width: 420px) {
    font-size: 1rem;
    min-width: 80vw;
    }
`
const Img = styled(motion.img)`
    margin: 2rem;
    transition: 1s;
    @media (max-width: 768px) {
    display: none;
    }
    @media (max-width: 1200px) {
    height: 270px;
}
/*
    &:hover{
        transform: rotate(-15deg);
        scale: 1.3;
    } */
`

// Lines

const Underline = styled(motion.div)`
    height: 2px;
    width: 6rem;
    background: var(--color-main);
    margin: 0 0 1rem 0;
`

const LineTop = styled(motion.div)`
    width: 100vw;
    height: 1px;
    position: absolute;
    top: 10vh;
    left: 0;
    background: #666;
    z-index:3;

    @media (max-width: 1200px) {
    top: 2vh;
    }
`
const LineBot = styled(motion.div)`
    width: 100vw;
    height: 1px;
    position: absolute;
    bottom: 10vh;
    left: 0;
    background: #666;
    z-index:3;

    @media (max-width: 1200px) {
    display: none;
    }
`
const LineLeft = styled(motion.div)`
    width: 1px;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: 15vw;
    background: #666;
    z-index:3;
    @media (max-width: 1200px) {
    display: none;
    }
`
const LineRight = styled(motion.div)`
    width: 1px;
    height: 100vh;
    position: absolute;
    bottom: 0;
    right: 15vw;
    background: #666;
    z-index:3;
    @media (max-width: 1200px) {
    display: none;
    }
`


export default ProjectDetails;