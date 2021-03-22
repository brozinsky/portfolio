import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const githubIcon = <FontAwesomeIcon
    icon={faGithub} />
const webIcon = <FontAwesomeIcon
    icon={faGlobe} />

const ProjectDetails = ({ title, img, technologies, info, tag, githubUrl, webUrl }) => {
    return (
        <Shadow>
            <LineTop />
            <LineBot />
            <LineLeft />
            <LineRight />
            <Card>
                <div className="info-header">
                    <Img
                        src={img}
                        alt={title} />
                    <div className="wrap-info">
                        <div className="info-tags">
                            {tag.map(tag =>
                                <span className={`${tag.name}`}>{tag.icon}</span>)}
                        </div>
                        <h2 className="info-title">
                            {title}
                        </h2>
                        <h3>Used technologies:</h3>
                        <ul>
                            {technologies.map(item =>
                                <li >{item}</li>)}
                        </ul>

                    </div>
                </div>
                <Info>
                    {info}
                </Info>
                <LinksWrapper>
                    <Link href={githubUrl}>
                        {githubIcon} Show Code
                    </Link>
                    <Link href={webUrl}>
                        {webIcon} Live
                    </Link>
                </LinksWrapper>
            </Card>
        </Shadow>
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
const Card = styled.div`
    width: 70vw;
    margin: auto;
    height: 80vh;
    background: var(--color-background);
    position: relative;
    z-index: 2;
    overflow-y: auto;
    overflow-x: hidden;
    border: solid 1px #666;

.info-header {
    display: flex;
    flex-direction: row;
    background: none;
}
`
const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`
const LineTop = styled.div`
    width: 100vw;
    height: 1px;
    position: absolute;
    top: 10vh;
    left: 0;
    background: #666;
`
const LineBot = styled.div`
    width: 100vw;
    height: 1px;
    position: absolute;
    bottom: 10vh;
    left: 0;
    background: #666;
`
const LineLeft = styled.div`
    width: 1px;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: 15vw;
    background: #666;
`
const LineRight = styled.div`
    width: 1px;
    height: 100vh;
    position: absolute;
    bottom: 0;
    right: 15vw;
    background: #666;
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

&:hover{
    color: #fff !important;
    cursor: pointer;
}
&:visited{
    outline: none;
}
`

const Info = styled.div`
    width: 80%;
    font-size: 1.2rem;
    text-align: justify;
    margin: 0 auto;
`
const Img = styled.img`
    height: 400px;
    margin: 2rem;
`

export default ProjectDetails;