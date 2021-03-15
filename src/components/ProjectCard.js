import React from 'react';
import styled from "styled-components";

const ProjectCard = ({ title, tags, type, url }) => {
    return (
        <>
            <Card>
                <WireFrame className="wire">
                    <CardImg src={url} />
                </WireFrame>
                <Overlay>
                    <CardTitle>{title}</CardTitle>
                    <TagWrapper>
                        {
                            tags.map((tag) =>
                                <CardTag>
                                    {tag}
                                </CardTag>
                            )}
                    </TagWrapper>
                    <CardType>{type}</CardType>
                </Overlay>
            </Card>
        </>
    )
}

const Card = styled.div`
    width: 500px;
    height: 450px;
    position: relative;
    border-radius:  20px;
    border: 1px solid #666;
    overflow: hidden;
    margin: 2rem 2rem;
`

const WireFrame = styled.div`
height: 50px;
&::after, &::before {
    content: "";
    position: absolute;
    z-index: 0;
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
    margin: 0.5rem 0;
    font-size: 1.8rem;
    font-weight: 300;
    color: #fff;
    font-family: 'Montserrat', 'Helvetica Neue',
    sans-serif;
`

const TagWrapper = styled.div`
    margin: 0.5rem 0 1.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

const CardTag = styled.div`
    text-transform: uppercase;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    display: inline-block;
    width: 4rem;
    text-align: center;
    margin: 0 0.3rem;
    font-weight: 300;
`

const CardType = styled.span`
    position: absolute;
    bottom: 7px;
    right: 7px;
    font-size: 0.9rem;
`

export default ProjectCard
