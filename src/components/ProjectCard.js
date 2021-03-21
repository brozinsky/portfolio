import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const githubIcon = <FontAwesomeIcon
    icon={faGithub} />
const webIcon = <FontAwesomeIcon
    icon={faGlobe} />

const ProjectCard = ({ title, tag, type, img, githubUrl, webUrl }) => {
    return (
        <>
            <CardWrapper>
                <TagWrapper>
                    {
                        tag.map((tag) =>
                            <div className={tag.name + '-tag card-tag'} >
                                <span className={tag.name === 'api' ? 'small' : ''}>{tag.icon}</span>
                            </div>
                        )}
                </TagWrapper>
                <Card>
                    <WireFrame className="wire">
                        <CardImg src={img} />
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
`

export default ProjectCard
