import React from 'react'
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const arrowIcon = <FontAwesomeIcon className="arrow-top"
    icon={faChevronUp} />
const githubIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faGithub} />
const linkedinIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faLinkedin} />

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <TriangleBackground />
                <ButtonCenter>
                    <ButtonToTop>
                        {arrowIcon}
                    </ButtonToTop>
                </ButtonCenter>
                <WrapLinks>
                    <a href="https://github.com/brozinsky">{githubIcon}</a>
                    <a href="">{linkedinIcon}</a>
                </WrapLinks>
                <Small>Created by &nbsp;
                <SmallLink
                        href="https://github.com/brozinsky">
                        brozinsky
                </SmallLink>
                &copy; 2020
                </Small>
            </StyledFooter>
        </>
    )
}

const StyledFooter = styled.footer`
    height:150px;
    position: relative;
    margin-top: 12rem;
`

const TriangleBackground = styled.div`
    height: 0;
    border-left: 49vw solid transparent;
    border-right: 49vw solid transparent;
    border-bottom: 150px solid #2E2E2E;
    z-index: 2;
`

const ButtonCenter = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
`

const ButtonToTop = styled.button`
    height: 45px;
    width: 45px;
    color: #111;
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    font-size: 1.4rem;
    background: #B7B7B7;
    cursor: pointer;
    rotate: 45deg;

&:hover, &:focus{
    background: #fff;
    outline: none;
    box-shadow: none;
}
.arrow-top{
    rotate: -45deg;
}
`
const WrapLinks = styled.div`
    position: absolute;
    top:  45%;
    left: 50%;
    transform: translate(-50%, 0);
    height: 55px;
    margin: 0 auto;
    display: flex;
    color: #969696;

.footer-social-icon{
    font-size: 2rem;
    margin: 0 1rem;
&:hover{
    color: #fff;
}
}
`

const Small = styled.small`
    display: inline-block;
    text-align: center;
    padding: 0.3rem;
    position: absolute;
    bottom:  0%;
    left: 50%;
    transform: translate(-50%, 0);
`

const SmallLink = styled.a`
    color: inherit;
    text-decoration: none;
&:hover{
    color: #fff;    
&:not(.default):visited{
    color: #fff;    
}
}
`

export default Footer
