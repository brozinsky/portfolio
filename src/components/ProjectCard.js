import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const githubIcon = <FontAwesomeIcon
    icon={faGithub} />
const webIcon = <FontAwesomeIcon
    icon={faGlobe} />

const ProjectCard = ({ title, tags, type, url }) => {
    return (
        <>
            <CardWrapper>
                <TagWrapper>
                    {
                        tags.map((tag) =>
                            <CardTag className={tag === 'api' ? 'small' : ''} >
                                {tag}
                            </CardTag>
                        )}
                </TagWrapper>
                <Card>
                    <WireFrame className="wire">
                        <CardImg src={url} />
                    </WireFrame>

                    <Overlay>

                        <CardTitle>{title}</CardTitle>
                        <LinksWrapper>
                            <Link>
                                {githubIcon}
                            </Link>
                            <Link>
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
const Link = styled.div`
    color: #c4c4c4;
    margin: 0 2rem;
    font-size: 2rem;
    margin-top: 0.7rem;
    &:hover{
        color: #fff;
        cursor: pointer;
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

    .small{
        font-size: 1rem;
    }
`

const CardTag = styled.div`
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
`

const CardType = styled.span`
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 0.9rem;
    color: #888;
`

export default ProjectCard
